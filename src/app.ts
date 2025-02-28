import { GUI } from 'lil-gui';
import { Canvas } from './canvas';
import { getGUI } from './gui';
import { Particles, State } from './particles';
import { getSettings, Settings } from './settings';
import { actOnUploadedTextFile, dataURL_downloader, getMediaRecorder } from './utils';

export class App {
  settings: Settings;
  canvas: Canvas;
  memory: WebAssembly.Memory;
  particles: Particles;
  gui: GUI;
  lastT: number;
  mediaRecorder: MediaRecorder | undefined;
  state: string;

  constructor(canvasId: string, memory: WebAssembly.Memory) {
    this.settings = getSettings();
    this.canvas = new Canvas(canvasId);
    this.memory = memory;
    this.particles = new Particles(this.settings, this.canvas, this.memory);
    this.gui = getGUI(this);
    this.lastT = 0;
    this.state = '';
  }

  run() {
    this.getSeedFromUrl();
    this.setupClicks();
    this.setupKeys();
    this.updateDimensions();
    this.randomRules(true);

    console.log('settings', this.settings);
    console.log('seed', this.particles.seed);

    this.lastT = performance.now();
    this.update();
  }

  update() {
    this.updateDimensions();
    this.drawBackground();
    this.particles.update();
    this.particles.draw();
    this.updateRulesDisplay();
    this.updateFPS();

    requestAnimationFrame(() => this.update());
  }

  drawBackground() {
    this.canvas.drawRectangle(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
      this.settings.drawings.background_color
    );
  }

  updateDimensions() {
    const new_width = window.innerWidth - 60;
    const new_height = window.innerHeight - 60;
    if (new_width !== this.canvas.width || new_height !== this.canvas.height) {
      this.canvas.updateDimensions(new_width, new_height);
      this.particles.updateDimensions();
    }
  }

  updateFPS() {
    let curT = performance.now();
    if (curT > this.lastT) {
      this.settings.fps = Math.floor(1000 / (curT - this.lastT));
      this.lastT = curT;
    }
  }

  reset() {
    this.particles.createParticles();
  }

  randomRules(keepSeed = false) {
    if (!keepSeed) {
      this.particles.newSeed();
      this.setSeedToUrl();
    }
    this.particles.makeRandomRules();
    this.particles.createParticles();
    this.updateGUIDisplay();
  }

  symmetricRules() {
    this.particles.makeRulesSymmetric();
    this.particles.createParticles();
    this.updateGUIDisplay();
  }

  updateGUIDisplay() {
    this.gui.destroy();
    this.gui = getGUI(this);
  }

  updateRulesDisplay() {
    if (!this.particles.explore) return;
    if (this.particles.exploreTimer > 0) {
      this.particles.exploreTimer -= 1;
      return;
    }
    this.particles.updateRules();
    this.particles.updateRadii();
    this.particles.exploreTimer = 100;
  }

  setupClicks() {
    this.canvas.canvas.addEventListener('click', (e) => {
      const duration = e.shiftKey
        ? -this.settings.pulseDuration
        : this.settings.pulseDuration;
      this.particles.pulse(e.clientX, e.clientY, duration);
    });
  }

  setupKeys() {
    this.canvas.canvas.addEventListener('keydown', (e) => {
      const closed = this.gui._closed;
      switch (e.key) {
        case 'r':
          this.randomRules();
          closed && this.gui.close();
          break;
        case 'o':
          this.reset();
          break;
        case 's':
          this.symmetricRules();
          closed && this.gui.close();
          break;
        default:
          console.log(e.key);
      }
    });
  }

  getSeedFromUrl() {
    let hash = window.location.hash;
    if (hash != undefined && hash[0] == '#') {
      let seed = hash.substring(1); // remove the leading '#'
      if (isFinite(Number(seed))) {
        this.particles.seed = seed;
      }
    }
  }

  setSeedToUrl() {
    const seed = this.particles.seed;
    window.location.hash = '#' + seed;
    document.title = 'Life #' + seed;
  }

  saveState() {
    const state = this.particles.getCurrentState();
    const json = JSON.stringify(state);
    const file = new Blob([json], { type: 'text/plain' });
    const dataUrl = URL.createObjectURL(file);
    dataURL_downloader(dataUrl, `particle_life_${this.particles.seed}.json`);
    URL.revokeObjectURL(dataUrl);
  }

  loadState() {
    actOnUploadedTextFile((text) => {
      try {
        const state = JSON.parse(text) as State;
        // we don't validate, there is no server.
        this.particles.setFromState(state);
        this.setSeedToUrl();
        this.updateGUIDisplay();
      } catch {
        console.error('Could not parse the given file!');
      }
    });
  }

  exportImage() {
    const imageDataURL = this.canvas.canvas.toDataURL('png', 1);
    dataURL_downloader(imageDataURL, `particle_life_${this.particles.seed}`);
  }

  exportVideo() {
    if (!this.mediaRecorder) {
      this.mediaRecorder = getMediaRecorder(
        this.canvas.canvas,
        `particle_life_${this.particles.seed}`
      );
    }
    this.mediaRecorder.state == 'recording'
      ? this.mediaRecorder.stop()
      : this.mediaRecorder.start();
  }
}

import { GUI } from 'lil-gui';
import { Canvas } from './canvas';
import { getGUI } from './gui';
import { Particles } from './particles';
import { getSettings, Settings } from './settings';
import { dataURL_downloader, getMediaRecorder } from './utils';

export class App {
  settings: Settings;
  canvas: Canvas;
  memory: WebAssembly.Memory;
  particles: Particles;
  gui: GUI;
  lastT: number;
  mediaRecorder: MediaRecorder | undefined;

  constructor(canvasId: string, memory: WebAssembly.Memory) {
    this.settings = getSettings();
    this.canvas = new Canvas(canvasId);
    this.memory = memory;
    this.particles = new Particles(this.settings, this.canvas, this.memory);
    this.gui = getGUI(this);
    this.lastT = 0;
  }

  run() {
    this.getSeedFromUrl();
    this.setupClicks();
    this.setupKeys();
    this.randomRules(true);

    console.log('settings', this.settings);
    console.log('seed', this.particles.seed);

    this.lastT = performance.now();
    this.update();
  }

  update() {
    this.canvas.updateDimensions();
    this.canvas.drawRectangle(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
      this.settings.drawings.background_color
    );
    this.particles.update();
    this.particles.draw();
    this.updateFPS();
    this.updateRulesDisplay();

    requestAnimationFrame(() => this.update());
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
    }
    this.particles.makeRandomRules();
    this.particles.createParticles();
    this.setSeedToUrl();
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

  exportImage() {
    const imageDataURL = this.canvas.canvas.toDataURL('png', 1);
    dataURL_downloader(imageDataURL, `particle_life_${this.settings.seed}`);
  }

  exportVideo() {
    if (!this.mediaRecorder) {
      this.mediaRecorder = getMediaRecorder(
        this.canvas.canvas,
        `particle_life_${this.settings.seed}`
      );
    }
    this.mediaRecorder.state == 'recording'
      ? this.mediaRecorder.stop()
      : this.mediaRecorder.start();
  }
}

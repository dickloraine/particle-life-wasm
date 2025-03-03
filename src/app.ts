import { GUI } from 'lil-gui';
import { Canvas } from './canvas';
import { getGUI } from './gui';
import { Particles, State } from './particles';
import { getSettings, Settings } from './settings';
import {
  actOnUploadedTextFile,
  dataURL_downloader,
  getMediaRecorder,
  randomColor,
  randomInt,
} from './utils';

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
    }
    this.setSeedToUrl();
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
    const closed = this.gui._closed;
    this.gui.destroy();
    this.gui = getGUI(this);
    closed && this.gui.close();
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
      switch (e.key) {
        case 'r':
          this.randomRules();
          break;
        case 'o':
          this.reset();
          break;
        case 's':
          this.symmetricRules();
          break;
        case 'c':
          this.randomColors();
          break;
        case 'd':
          this.toggleDemoMode();
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
      if (seed === 'demo') {
        this.toggleDemoMode();
      } else if (isFinite(Number(seed))) {
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

  randomColors() {
    this.settings.drawings.colors = this.settings.drawings.colors.map(() =>
      randomColor()
    );
    this.updateGUIDisplay();
  }

  addColor() {
    this.settings.drawings.colors.push(randomColor());
    this.updateGUIDisplay();
  }

  resetColors() {
    this.settings.drawings.colors = [...this.settings.drawings.predefinedColors];
    this.updateGUIDisplay();
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

  updateDemoMode() {
    const colors = randomInt(
      Math.min(this.settings.demoMode.minColors, this.settings.demoMode.maxColors),
      Math.max(this.settings.demoMode.minColors, this.settings.demoMode.maxColors)
    );
    let scale = 1;

    this.particles.numColors = colors;

    if (this.settings.demoMode.includeRadius) {
      const forceRadius = randomInt(20, 100);
      scale = 80 / forceRadius;
      this.particles.forceRadius = forceRadius;
    }

    this.particles.number_of_particles_per_color =
      500 *
      Math.floor((this.settings.demoMode.maxNumberParticles * scale) / (colors * 500));
    this.setSeedToUrl();
    if (this.settings.demoMode.randomColors) {
      this.randomColors();
    } else {
      this.updateGUIDisplay();
    }
  }

  setDemoInterval() {
    this.settings.demoMode.id = setInterval(
      () => this.updateDemoMode(),
      this.settings.demoMode.interval * 1000
    );
  }

  toggleDemoMode() {
    this.settings.demoMode.enabled = !this.settings.demoMode.enabled;
    if (this.settings.demoMode.enabled) {
      this.startDemoMode();
    } else {
      this.endDemoMode();
    }
  }

  startDemoMode() {
    document.documentElement.requestFullscreen();
    this.settings.demoMode.oldAutoScaleTime = this.particles.autoScaleTime;
    this.settings.demoMode.oldTargetVelocity = this.particles.targetVelocity;
    this.settings.demoMode.oldForceRadius = this.particles.forceRadius;
    this.particles.autoScaleTime = this.settings.demoMode.autoScaleTime;
    this.particles.targetVelocity = this.settings.demoMode.targetVelocity;
    this.gui.close();
    this.setDemoInterval();
    setTimeout(() => {
      this.updateDemoMode();
    }, 200);
  }

  endDemoMode() {
    clearInterval(this.settings.demoMode.id);
    if (this.settings.demoMode.restoreSettings) {
      this.particles.autoScaleTime = this.settings.demoMode.oldAutoScaleTime;
      this.particles.targetVelocity = this.settings.demoMode.oldTargetVelocity;
      this.particles.forceRadius = this.settings.demoMode.oldForceRadius;
    }
    this.updateGUIDisplay();
    this.gui.open();
    document.exitFullscreen();
  }
}

import { GUI } from 'lil-gui';
import { App } from './app';

export const getGUI = (app: App): GUI => {
  const gui = new GUI();
  const settings = app.settings;
  // Configs
  const configFolder = gui.addFolder('Config');
  configFolder.add(app, 'reset').name('Reset');
  configFolder.add(app, 'randomRules').name('Random Rules');
  configFolder.add(app, 'symmetricRules').name('Make Rules Symmetric');
  configFolder
    .add(app.particles, 'numColors', 1, 7, 1)
    .name('Number of Colors')
    .onFinishChange(() => {
      app.randomRules();
    });
  configFolder
    .add(app.particles, 'forceRadius', 1, settings.particles.maxRadius, 1)
    .name('Force Radius');
  configFolder
    .add(app.particles, 'seed')
    .name('Seed')
    .listen()
    .onFinishChange(() => {
      app.randomRules(true);
    });
  configFolder.add(settings, 'fps').name('FPS - (Live)').listen().disable();
  configFolder
    .add(app.particles, 'number_of_particles_per_color', 0, 4000, 50)
    .name('Atoms per-color')
    .onFinishChange(() => {
      app.particles.createParticles();
    });
  configFolder
    .add(app.particles, 'timeDelta', 0.0001, settings.maxDeltaTime, 0.0001)
    .name('Time Delta')
    .listen()
    .decimals(4);
  configFolder.add(app.particles, 'autoScaleTime').name('Auto Scale Time');
  configFolder.add(app.particles, 'targetVelocity', 1, 10, 1).name('Target Velocity');
  configFolder.add(app.particles, 'viscosity', 0.1, 2, 0.1).name('Viscosity');
  configFolder
    .add(settings, 'pulseDuration', 1, 100, 1)
    .name('Click Pulse Duration')
    .listen();
  configFolder
    .add(app.particles, 'wallRepelDistance', 0, 100, 1)
    .name('Wall Repel Distance');
  configFolder
    .add(app.particles, 'wallRepelStrength', 0, 20, 1)
    .name('Wall Repel Strength');
  configFolder.add(app.particles, 'explore').name('Random Exploration');
  // Drawings
  const drawingsFolder = gui.addFolder('Drawings');
  drawingsFolder.add(app.particles, 'drawRadius', 1, 10, 0.5).name('Radius');
  drawingsFolder
    .addColor(settings.drawings, 'background_color')
    .name('Background Color');
  // Export
  const exportFolder = gui.addFolder('Export');
  exportFolder.add(app, 'exportImage').name('Image');
  exportFolder.add(app, 'exportVideo').name('Video: Start / stop');
  // Colors
  if (app.particles.rules.length > 0) {
    for (let i = 0; i < app.particles.numColors; i++) {
      const atomColor = settings.predefinedColors[i];
      const colorFolder = gui.addFolder(
        `Rules: <font color=\'${atomColor}\'>${atomColor}</font>`
      );
      for (let j = 0; j < app.particles.numColors; j++) {
        const ruleColor = settings.predefinedColors[j];
        colorFolder
          .add(app.particles.rules[i], `${j}`, -1, 1, 0.001)
          .name(`<-> <font color=\'${ruleColor}\'>${capitalise(ruleColor)}</font>`)
          .listen()
          .onFinishChange(() => {
            app.particles.particleLife.set_rules(app.particles.rules);
          });
      }
      colorFolder
        .add(app.particles.radii, `${i}`, 1, settings.particles.maxRadius, 5)
        .name('Radius')
        .listen()
        .onFinishChange(() => {
          app.particles.particleLife.set_radii(app.particles.radii);
        });
    }
  }

  return gui;
};

function capitalise(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

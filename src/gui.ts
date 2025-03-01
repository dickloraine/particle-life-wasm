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
    .add(app.particles, 'numColors', 1, settings.drawings.colors.length, 1)
    .name('Number of Colors')
    .onFinishChange(() => {
      app.setSeedToUrl();
      app.updateGUIDisplay();
    });
  configFolder
    .add(app.particles, 'seed')
    .name('Seed')
    .listen()
    .onFinishChange(() => {
      app.randomRules(true);
    });
  configFolder.add(settings, 'fps').name('FPS - (Live)').listen().disable();
  configFolder
    .add(app.particles, 'number_of_particles_per_color', 0, 10000, 500)
    .name('Atoms per-color');
  configFolder
    .add(app.particles, 'forceRadius', 1, settings.maxRadius, 1)
    .name('Force Radius');
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
  configFolder
    .add(app.particles, 'explore')
    .name('Random Exploration')
    .onFinishChange(() => {
      app.particles.exploreTimer = 0;
    });
  configFolder.add(app.particles, 'includeRadius').name('Include Radius');
  // Drawings
  const drawingsFolder = gui.addFolder('Drawings');
  drawingsFolder.add(app.particles, 'drawRadius', 1, 10, 0.5).name('Radius');
  for (let i = 0; i < settings.drawings.colors.length; i++) {
    drawingsFolder.addColor(settings.drawings.colors, `${i}`).name(`Color ${i + 1}`);
  }
  drawingsFolder
    .addColor(settings.drawings, 'background_color')
    .name('Background Color');
  drawingsFolder.add(app, 'randomColors').name('Random colors');
  drawingsFolder.add(app, 'addColor').name('Add color');
  drawingsFolder.add(app, 'resetColors').name('Reset colors');
  // Export
  const exportFolder = gui.addFolder('Export / Import');
  exportFolder.add(app, 'saveState').name('Save to file');
  exportFolder.add(app, 'loadState').name('Load from file');
  exportFolder.add(app, 'exportImage').name('Image');
  exportFolder.add(app, 'exportVideo').name('Video: Start / stop');
  // Colors
  if (app.particles.rules.length > 0) {
    const rulesFolder = gui.addFolder('Rules');
    for (let i = 0; i < app.particles.numColors; i++) {
      const atomColor = settings.drawings.colors[i];
      const colorFolder = rulesFolder.addFolder(
        `<font color=\'${atomColor}\'>Color ${i + 1}</font>`
      );
      for (let j = 0; j < app.particles.numColors; j++) {
        const ruleColor = settings.drawings.colors[j];
        colorFolder
          .add(app.particles.rules[i], `${j}`, -1, 1, 0.001)
          .name(`<-> <font color=\'${ruleColor}\'>Color ${j + 1}</font>`)
          .listen()
          .onFinishChange(() => {
            app.particles.particleLife.set_rules(app.particles.rules);
          });
      }
      colorFolder
        .add(app.particles.radii, `${i}`, 1, settings.maxRadius, 5)
        .name('Radius')
        .listen()
        .onFinishChange(() => {
          app.particles.particleLife.set_radii(app.particles.radii);
        });
    }
  }

  return gui;
};

import { ParticleLife } from 'particle-life-wasm';
import { Canvas } from './canvas';
import { Settings } from './settings';

export class Particles {
  settings: Settings;
  canvas: Canvas;
  memory: WebAssembly.Memory;
  particleArrayLength: number;
  particleLife: ParticleLife;
  drawRadius: number;
  numberOfParticles: number;
  rules: number[][];
  radii: number[];
  exploreTimer: number;

  constructor(settings: Settings, canvas: Canvas, memory: WebAssembly.Memory) {
    this.settings = settings;
    this.canvas = canvas;
    this.memory = memory;
    this.particleLife = new ParticleLife(
      this.settings.particles.numColors,
      this.settings.particles.number_of_particles_per_color,
      this.settings.particles.forceRadius,
      this.settings.particles.timeDelta,
      this.settings.particles.viscosity,
      this.settings.particles.autoScaleTime,
      this.settings.particles.targetVelocity,
      this.settings.particles.maxRadius,
      this.settings.particles.wallRepelDistance,
      this.settings.particles.wallRepelStrength,
      this.settings.explore
    );
    this.numberOfParticles = this.numColors * this.number_of_particles_per_color;
    this.particleArrayLength = this.particleLife.particle_array_length();
    this.drawRadius = this.settings.particles.drawRadius;
    this.rules = this.particleLife.get_rules();
    this.radii = this.particleLife.get_radii();
    this.exploreTimer = 0;
  }

  createParticles() {
    this.particleLife.set_dimensions(this.canvas.width, this.canvas.height);
    this.particleLife.random_particles();
    this.particleArrayLength = this.particleLife.particle_array_length();
  }

  makeRandomRules() {
    this.particleLife.make_random_rules();
    this.rules = this.particleLife.get_rules();
    this.radii = this.particleLife.get_radii();
  }

  makeRulesSymmetric() {
    this.particleLife.make_rules_symmetric();
    this.updateRules();
  }

  update() {
    this.particleLife.update();
  }

  draw() {
    this.particleLife.set_dimensions(this.canvas.width, this.canvas.height);
    const particlesPtr = this.particleLife.particles_pointer();
    const atoms = new Float32Array(
      this.memory.buffer,
      particlesPtr,
      this.particleArrayLength
    );

    for (let i = 0; i < this.particleArrayLength; i += 3) {
      const x = atoms[i];
      const y = atoms[i + 1];
      const color = this.settings.predefinedColors[Math.floor(atoms[i + 2])];
      this.canvas.drawCircle(x, y, color, this.drawRadius);
    }
  }

  pulse(x: number, y: number, duration: number) {
    this.particleLife.pulse(x, y, duration);
  }

  updateRules() {
    const newRules = this.particleLife.get_rules();
    for (let i = 0; i < this.rules.length; i += 1) {
      for (let j = 0; j < this.rules.length; j += 1) {
        this.rules[i][j] = newRules[i][j];
      }
    }
  }

  updateRadii() {
    this.radii.length = 0;
    for (const r of this.particleLife.get_radii()) {
      this.radii.push(r);
    }
  }

  get numColors() {
    return this.particleLife.get_number_of_colors();
  }
  set numColors(value: number) {
    this.particleLife.set_number_of_colors(value);
    this.numberOfParticles = this.numColors * this.number_of_particles_per_color;
  }

  get number_of_particles_per_color() {
    return this.particleLife.get_number_of_particles_per_color();
  }
  set number_of_particles_per_color(value: number) {
    this.particleLife.set_number_of_particles_per_color(value);
    this.numberOfParticles = this.numColors * this.number_of_particles_per_color;
  }

  get seed() {
    return this.particleLife.get_seed();
  }
  set seed(value: string) {
    this.particleLife.set_seed(value);
  }
  newSeed() {
    return this.particleLife.new_seed();
  }

  get forceRadius() {
    return this.particleLife.get_force_radius();
  }
  set forceRadius(value: number) {
    this.particleLife.set_force_radius(value);
    this.updateRadii();
  }

  get timeDelta() {
    return this.particleLife.get_time_delta();
  }
  set timeDelta(value: number) {
    this.particleLife.set_time_delta(value);
  }

  get autoScaleTime() {
    return this.particleLife.get_auto_scale_time();
  }
  set autoScaleTime(value: boolean) {
    this.particleLife.set_auto_scale_time(value);
  }

  get targetVelocity() {
    return this.particleLife.get_target_velocity();
  }
  set targetVelocity(value: number) {
    this.particleLife.set_target_velocity(value);
  }

  get viscosity() {
    return this.particleLife.get_viscosity();
  }
  set viscosity(value: number) {
    this.particleLife.set_viscosity(value);
  }

  get wallRepelDistance() {
    return this.particleLife.get_wall_repel_distance();
  }
  set wallRepelDistance(value: number) {
    this.particleLife.set_wall_repel_distance(value);
  }
  get wallRepelStrength() {
    return this.particleLife.get_wall_repel_strength();
  }
  set wallRepelStrength(value: number) {
    this.particleLife.set_wall_repel_strength(value);
  }

  get explore() {
    return this.particleLife.get_explore();
  }
  set explore(value: boolean) {
    if (value) {
      this.exploreTimer = 0;
    }
    this.particleLife.set_explore(value);
  }
}

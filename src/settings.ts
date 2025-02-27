export type Settings = {
  seed: number;
  fps: number;
  drawings: {
    lines: boolean;
    background_color: string;
  };
  explore: boolean;
  includeRadius: boolean;
  pulseDuration: number;
  maxDeltaTime: number;
  predefinedColors: string[];
  particles: {
    numColors: number;
    number_of_particles_per_color: number;
    forceRadius: number;
    timeDelta: number;
    viscosity: number;
    maxRadius: number;
    autoScaleTime: boolean;
    targetVelocity: number;
    wallRepelDistance: number;
    wallRepelStrength: number;
    drawRadius: number;
  };
};

export const getSettings = (): Settings => ({
  seed: 1,
  fps: 0,
  drawings: {
    // Drawing options can be expensive on performance
    lines: false, // draw lines between atoms that are effecting each other
    background_color: '#000000', // Background color
  },
  explore: false,
  includeRadius: false,
  pulseDuration: 10,
  maxDeltaTime: 0.05,
  predefinedColors: ['green', 'red', 'orange', 'cyan', 'magenta', 'lavender', 'teal'],
  particles: {
    numColors: 4,
    number_of_particles_per_color: 1000,
    forceRadius: 80,
    timeDelta: 0.01,
    viscosity: 0.7,
    autoScaleTime: false,
    targetVelocity: 2.0,
    maxRadius: 200,
    wallRepelDistance: 40,
    wallRepelStrength: 3,
    drawRadius: 1.0,
  },
});

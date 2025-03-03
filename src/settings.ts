export type Settings = {
  seed: string;
  fps: number;
  drawings: {
    background_color: string;
    colors: string[];
    predefinedColors: string[];
  };
  explore: boolean;
  includeRadius: boolean;
  pulseDuration: number;
  maxDeltaTime: number;
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
  demoMode: {
    enabled: boolean;
    interval: number;
    id: number;
    maxNumberParticles: number;
    minColors: number;
    maxColors: number;
    randomColors: boolean;
    autoScaleTime: boolean;
    targetVelocity: number;
    oldAutoScaleTime: boolean;
    oldTargetVelocity: number;
    includeRadius: boolean;
    oldForceRadius: number;
    restoreSettings: boolean;
  };
};

const predefinedColors = [
  '#008000',
  '#FF0000',
  '#FFA500',
  '#00FFFF',
  '#FF00FF',
  '#E6E6FA',
  '#008080',
];

export const getSettings = (): Settings => ({
  seed: '1',
  fps: 0,
  drawings: {
    // Drawing options can be expensive on performance
    background_color: '#000000', // Background color
    predefinedColors,
    colors: [...predefinedColors],
  },
  explore: false,
  includeRadius: false,
  pulseDuration: 10,
  maxDeltaTime: 0.05,
  numColors: 4,
  number_of_particles_per_color: 1000,
  forceRadius: 80,
  timeDelta: 0.005,
  viscosity: 0.7,
  autoScaleTime: false,
  targetVelocity: 2.0,
  maxRadius: 200,
  wallRepelDistance: 40,
  wallRepelStrength: 3,
  drawRadius: 1.0,
  demoMode: {
    enabled: false,
    interval: 20,
    id: -1,
    maxNumberParticles: 9000,
    minColors: 3,
    maxColors: 7,
    randomColors: true,
    autoScaleTime: true,
    targetVelocity: 2.0,
    oldAutoScaleTime: true,
    oldTargetVelocity: 2.0,
    includeRadius: false,
    oldForceRadius: 80,
    restoreSettings: false,
  },
});

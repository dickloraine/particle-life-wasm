use particles::Particles;
use rand::Rng;
use rand_chacha::{rand_core::SeedableRng, ChaCha8Rng};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct ParticleLife {
    particles: particles::Particles,
    particles_array: Vec<f32>,
}
// particles::Particles::default()
#[wasm_bindgen]
impl ParticleLife {
    #[wasm_bindgen(constructor)]
    pub fn new(
        number_of_colors: usize,
        number_of_particles_per_color: usize,
        time_delta: f32,
        viscosity: f32,
        auto_scale_time: bool,
        target_velocity: f32,
        max_radius: usize,
        wall_repel_distance: f32,
        wall_repel_strength: f32,
        explore_parameters: bool,
    ) -> Self {
        #[cfg(feature = "console_error_panic_hook")]
        console_error_panic_hook::set_once();

        let particles = Particles::new(
            number_of_colors,
            number_of_particles_per_color,
            time_delta,
            viscosity,
            max_radius,
            auto_scale_time,
            target_velocity,
            wall_repel_distance,
            wall_repel_strength,
            explore_parameters,
        );

        Self {
            particles,
            particles_array: Vec::new(),
        }
    }

    pub fn create_particle_array(&mut self) {
        self.particles_array.clear();
        for p in &self.particles.particles {
            self.particles_array.push(p.pos.x);
            self.particles_array.push(p.pos.y);
            self.particles_array.push(p.color as f32);
        }
    }

    pub fn particles_pointer(&mut self) -> *const f32 {
        self.particles_array.as_ptr()
    }

    pub fn particle_array_length(&self) -> usize {
        3 * self.particles.particles.len()
    }

    pub fn random_particles(&mut self) {
        self.particles.random_particles();
    }

    pub fn update(&mut self) {
        self.particles.update();
        self.create_particle_array();
    }

    pub fn make_random_rules(&mut self) {
        self.particles.make_random_rules();
    }

    pub fn make_rules_symmetric(&mut self) {
        self.particles.make_rules_symmetric();
    }

    pub fn get_rules(&mut self) -> Result<JsValue, JsValue> {
        let new = self.particles.rules.clone();
        Ok(serde_wasm_bindgen::to_value(&new)?)
    }
    pub fn set_rules(&mut self, rules: JsValue) {
        match serde_wasm_bindgen::from_value(rules) {
            Ok(rules) => self.particles.rules = rules,
            Err(_) => return,
        };
    }

    pub fn get_radii(&mut self) -> Result<JsValue, JsValue> {
        let new = self.particles.radii.clone();
        Ok(serde_wasm_bindgen::to_value(&new)?)
    }
    pub fn set_radii(&mut self, radii: JsValue) {
        match serde_wasm_bindgen::from_value(radii) {
            Ok(radii) => {
                self.particles.radii = radii;
                self.particles.radii2 = self
                    .particles
                    .radii
                    .clone()
                    .into_iter()
                    .map(|r| r.powf(2.))
                    .collect();
            }
            Err(_) => return,
        };
    }

    pub fn get_seed(&mut self) -> String {
        self.particles.seed.to_string()
    }
    pub fn set_seed(&mut self, seed_string: String) {
        let seed: u64 = match seed_string.parse() {
            Ok(seed) => seed,
            Err(_) => self.particles.rng.random(),
        };
        self.particles.seed = seed;
        self.particles.rng = ChaCha8Rng::seed_from_u64(seed);
    }
    pub fn new_seed(&mut self) {
        self.particles.new_seed();
    }

    pub fn pulse(&mut self, x: f32, y: f32, duration: i32) {
        self.particles.pulse.set(x, y, duration);
    }

    pub fn get_time_delta(&mut self) -> f32 {
        self.particles.time_delta
    }
    pub fn set_time_delta(&mut self, time_delta: f32) {
        self.particles.time_delta = time_delta;
    }

    pub fn get_wall_repel_distance(&mut self) -> f32 {
        self.particles.repel.distance
    }
    pub fn set_wall_repel_distance(&mut self, distance: f32) {
        self.particles.repel.distance = distance;
    }
    pub fn get_wall_repel_strength(&mut self) -> f32 {
        self.particles.repel.strength
    }
    pub fn set_wall_repel_strength(&mut self, strength: f32) {
        self.particles.repel.strength = strength;
    }

    pub fn get_auto_scale_time(&mut self) -> bool {
        self.particles.scale_time.enabled
    }
    pub fn set_auto_scale_time(&mut self, auto_scale_time: bool) {
        self.particles.scale_time.enabled = auto_scale_time;
    }

    pub fn get_target_velocity(&mut self) -> f32 {
        self.particles.scale_time.target_velocity
    }
    pub fn set_target_velocity(&mut self, target_velocity: f32) {
        self.particles.scale_time.target_velocity = target_velocity;
    }

    pub fn get_viscosity(&mut self) -> f32 {
        self.particles.viscosity
    }
    pub fn set_viscosity(&mut self, viscosity: f32) {
        self.particles.viscosity = viscosity;
    }

    pub fn set_dimensions(&mut self, width: f32, height: f32) {
        self.particles.width = width;
        self.particles.height = height;
    }

    pub fn get_number_of_colors(&mut self) -> usize {
        self.particles.number_of_colors
    }
    pub fn set_number_of_colors(&mut self, number_of_colors: usize) {
        self.particles.number_of_colors = number_of_colors;
    }

    pub fn get_number_of_particles_per_color(&mut self) -> usize {
        self.particles.number_of_particles_per_color
    }
    pub fn set_number_of_particles_per_color(&mut self, number_of_particles_per_color: usize) {
        self.particles.number_of_particles_per_color = number_of_particles_per_color;
    }

    pub fn get_explore(&mut self) -> bool {
        self.particles.explore.enabled
    }
    pub fn set_explore(&mut self, explore_parameters: bool) {
        self.particles.explore.enabled = explore_parameters;
    }
}

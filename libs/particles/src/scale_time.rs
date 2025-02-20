use crate::Particle;

pub struct ScaleTime {
    pub enabled: bool,
    pub target_velocity: f32,
}

impl Default for ScaleTime {
    fn default() -> Self {
        Self::new(false, 2.)
    }
}

impl ScaleTime {
    pub fn new(enabled: bool, target_velocity: f32) -> Self {
        Self {
            enabled,
            target_velocity,
        }
    }
    pub fn apply(&self, particles: &Vec<Particle>, time_delta: &mut f32) {
        if !self.enabled {
            return;
        }

        let mut total_velocity: f32 = 0.0;
        for p in particles {
            total_velocity += p.velocity.x.abs() + p.velocity.y.abs();
        }
        total_velocity /= particles.len() as f32;

        if total_velocity > (self.target_velocity * 1.1) {
            *time_delta /= 1.01;
        } else if total_velocity < (self.target_velocity * 0.9) {
            *time_delta *= 1.01;
        }
    }
}

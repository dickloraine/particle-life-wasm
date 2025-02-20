use crate::Particle;
use vector2d::Vector2D;

#[derive(Default)]
pub struct Pulse {
    pos: Vector2D<f32>,
    duration: i32,
    intensity: f32,
}

impl Pulse {
    pub fn set(&mut self, x: f32, y: f32, duration: i32) {
        self.pos.x = x;
        self.pos.y = y;
        self.duration = duration;
        self.intensity = duration as f32;
    }

    pub fn apply(&mut self, p: &Particle, f: &mut Vector2D<f32>, time_delta: f32) {
        if self.duration == 0 {
            return;
        }
        let dp = p.pos - self.pos;
        let d = dp.length_squared();
        if d > 0. {
            let force = (100. * self.intensity) / (d * time_delta);
            *f += dp * force;
        }
    }

    pub fn update(&mut self) {
        if self.duration != 0 {
            self.duration += if self.duration < 0 { 1 } else { -1 };
            self.intensity = self.duration as f32;
        }
    }
}

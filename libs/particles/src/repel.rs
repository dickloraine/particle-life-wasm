use crate::Particle;
use vector2d::Vector2D;

pub struct Repel {
    pub distance: f32,
    pub strength: f32,
}

impl Default for Repel {
    fn default() -> Self {
        Self::new(40., 3.)
    }
}

impl Repel {
    pub fn new(distance: f32, strength: f32) -> Self {
        Self { distance, strength }
    }

    pub fn apply(&mut self, p: &Particle, f: &mut Vector2D<f32>, width: f32, height: f32) {
        let d = self.distance;
        if d < 1. {
            return;
        }
        if p.pos.x < d {
            f.x += (d - p.pos.x) * self.strength;
        } else if p.pos.x > width - d {
            f.x += (width - d - p.pos.x) * self.strength;
        }
        if p.pos.y < d {
            f.y += (d - p.pos.y) * self.strength;
        } else if p.pos.y > height - d {
            f.y += (height - d - p.pos.y) * self.strength;
        }
    }
}

use rand::Rng;
use rand_chacha::ChaCha8Rng;

pub struct Explore {
    pub enabled: bool,
    pub timer: usize,
    pub max_radius: usize,
}

impl Default for Explore {
    fn default() -> Self {
        Self::new(false, 100, 200)
    }
}

impl Explore {
    pub fn new(enabled: bool, timer: usize, max_radius: usize) -> Self {
        Self {
            enabled,
            timer,
            max_radius,
        }
    }

    pub fn apply(
        &mut self,
        rules: &mut Vec<Vec<f32>>,
        radii: &mut Vec<f32>,
        radii2: &mut Vec<f32>,
        rng: &mut ChaCha8Rng,
        number_of_colors: usize,
    ) {
        if !self.enabled {
            return;
        }
        if self.timer > 0 {
            self.timer -= 1;
            return;
        }
        let color_1: usize = rng.random_range(0..number_of_colors);
        if rng.random::<f32>() >= 0.2 {
            let color_2: usize = rng.random_range(0..number_of_colors);
            let new_strength: f32 = rng.random();
            rules[color_1][color_2] = if rules[color_1][color_2] > 0. {
                -new_strength
            } else {
                new_strength
            }
        } else {
            let new_radius: f32 = rng.random_range(1..self.max_radius) as f32;
            radii[color_1] = new_radius;
            radii2[color_1] = new_radius.powf(2.);
        }
        self.timer = 100;
    }
}

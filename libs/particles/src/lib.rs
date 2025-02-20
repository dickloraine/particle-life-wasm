use rand::Rng;
use rand_chacha::{rand_core::SeedableRng, ChaCha8Rng};
use vector2d::Vector2D;

mod explore;
mod pulse;
mod quadtree;
mod repel;
mod scale_time;

use explore::Explore;
use pulse::Pulse;
use quadtree::Quadtree;
use repel::Repel;
use scale_time::ScaleTime;

const ZERO_VECTOR: Vector2D<f32> = Vector2D::new(0., 0.);

#[derive(Default, Clone, Copy)]
pub struct Particle {
    pub pos: Vector2D<f32>,
    pub velocity: Vector2D<f32>,
    pub color: usize,
}

impl Particle {
    pub fn new(x: f32, y: f32, color: usize) -> Self {
        Self {
            pos: Vector2D::new(x, y),
            velocity: Vector2D::new(0.0, 0.0),
            color,
        }
    }
}

pub struct Particles {
    pub number_of_colors: usize,
    pub number_of_particles_per_color: usize,
    pub particles: Vec<Particle>,
    pub rules: Vec<Vec<f32>>,
    pub radii: Vec<f32>,
    pub radii2: Vec<f32>,
    pub width: f32,
    pub height: f32,
    pub time_delta: f32,
    pub seed: u64,
    pub rng: ChaCha8Rng,
    pub viscosity: f32,
    pub scale_time: ScaleTime,
    pub explore: Explore,
    pub repel: Repel,
    pub pulse: Pulse,
}

impl Default for Particles {
    fn default() -> Self {
        let mut rng_start = ChaCha8Rng::from_os_rng();
        let seed: u64 = rng_start.random();
        Self {
            number_of_colors: 4,
            number_of_particles_per_color: 1000,
            particles: Vec::new(),
            width: 400.,
            height: 400.,
            rng: ChaCha8Rng::seed_from_u64(seed),
            seed,
            time_delta: 0.01,
            viscosity: 0.7,
            radii: Vec::new(),
            radii2: Vec::new(),
            rules: Vec::new(),
            scale_time: ScaleTime::default(),
            explore: Explore::default(),
            repel: Repel::default(),
            pulse: Pulse::default(),
        }
    }
}

impl Particles {
    pub fn new(
        number_of_colors: usize,
        number_of_particles_per_color: usize,
        time_delta: f32,
        viscosity: f32,
        max_radius: usize,
        auto_scale_time: bool,
        target_velocity: f32,
        wall_repel_distance: f32,
        wall_repel_strength: f32,
        explore_parameters: bool,
    ) -> Self {
        Self {
            number_of_colors,
            number_of_particles_per_color,
            time_delta,
            viscosity,
            scale_time: ScaleTime::new(auto_scale_time, target_velocity),
            explore: Explore::new(explore_parameters, 100, max_radius),
            repel: Repel::new(wall_repel_distance, wall_repel_strength),
            ..Particles::default()
        }
    }

    fn create_particles(&mut self, count: usize, color: usize) {
        for _ in 0..count {
            self.particles.push(Particle::new(
                self.rng.random::<f32>() * (self.width - 100.) + 50.,
                self.rng.random::<f32>() * (self.height - 100.) + 50.,
                color,
            ));
        }
    }

    pub fn random_particles(&mut self) {
        self.particles.clear();
        for color in 0..self.number_of_colors {
            self.create_particles(self.number_of_particles_per_color, color);
        }
    }

    pub fn update(&mut self) {
        self.apply_rules();
        self.update_positions();
        self.scale_time.apply(&self.particles, &mut self.time_delta);
        self.pulse.update();
        self.explore.apply(
            &mut self.rules,
            &mut self.radii,
            &mut self.radii2,
            &mut self.rng,
            self.number_of_colors,
        );
    }

    fn apply_rules(&mut self) {
        let quadtree = self.get_quadtree();
        let vmix = 1. - self.viscosity;
        for p in &mut self.particles {
            let mut f = get_force(p, &self.rules, &self.radii, &self.radii2, &quadtree);
            self.repel.apply(p, &mut f, self.width, self.height);
            self.pulse.apply(p, &mut f, self.time_delta);
            update_velocity(p, f, self.time_delta, vmix);
        }
    }

    fn update_positions(&mut self) {
        for p in &mut self.particles {
            p.pos += p.velocity;

            // borders
            if p.pos.x < 0. {
                p.pos.x = -p.pos.x;
                p.velocity.x *= -1.;
            }
            if p.pos.x >= self.width {
                p.pos.x = 2. * self.width - p.pos.x;
                p.velocity.x *= -1.;
            }
            if p.pos.y < 0. {
                p.pos.y = -p.pos.y;
                p.velocity.y *= -1.;
            }
            if p.pos.y >= self.height {
                p.pos.y = 2. * self.height - p.pos.y;
                p.velocity.y *= -1.;
            }
        }
    }

    fn get_quadtree(&self) -> Quadtree {
        let mid_x = self.width / 2.;
        let mid_y = self.height / 2.;
        let mut quadtree = Quadtree::new([mid_x, mid_y, mid_x, mid_y], 64, 0);

        for p in &self.particles {
            quadtree.insert(*p);
        }

        return quadtree;
    }

    pub fn make_random_rules(&mut self) {
        self.rules.clear();
        self.radii.clear();
        self.radii2.clear();
        for i in 0..self.number_of_colors {
            self.rules.push(Vec::new());
            for _ in 0..self.number_of_colors {
                self.rules[i].push(self.rng.random::<f32>() * 2. - 1.);
            }
            self.radii.push(80.);
            self.radii2.push(6400.);
        }
    }

    pub fn make_rules_symmetric(&mut self) {
        for i in 0..self.number_of_colors {
            for j in 0..self.number_of_colors {
                if j < i {
                    let rule = 0.5 * (self.rules[i][j] + self.rules[j][i]);
                    self.rules[i][j] = rule;
                    self.rules[j][i] = rule;
                }
            }
        }
    }

    pub fn new_seed(&mut self) {
        let seed: u64 = self.rng.random();
        self.seed = seed;
        self.rng = ChaCha8Rng::seed_from_u64(seed);
    }
}

fn get_force(
    p: &Particle,
    rules: &Vec<Vec<f32>>,
    radii: &Vec<f32>,
    radii2: &Vec<f32>,
    quadtree: &Quadtree,
) -> Vector2D<f32> {
    let mut f = Vector2D::<f32>::default();
    let r = radii[p.color];
    let r2 = radii2[p.color];

    for neighbor in quadtree.query([p.pos.x, p.pos.y, r, r]) {
        let dp: Vector2D<f32> = neighbor.pos - p.pos;
        if dp == ZERO_VECTOR {
            continue;
        }
        let mut d = dp.length_squared();
        if d > r2 {
            continue;
        }
        let g = rules[p.color][neighbor.color];
        d = d.sqrt();
        let force = force_function(d / r, g);
        f += (dp * force) / d;
    }
    f * r
}

fn force_function(d: f32, g: f32) -> f32 {
    let beta = 0.3;
    if d < beta {
        return d / beta - 1.;
    }
    g * (1. - (2. * d - 1. - beta).abs() / (1. - beta))
}

fn update_velocity(p: &mut Particle, f: Vector2D<f32>, time_delta: f32, vmix: f32) {
    p.velocity *= vmix;
    p.velocity += f * time_delta;
}

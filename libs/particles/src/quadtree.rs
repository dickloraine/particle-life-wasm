use crate::Particle;

#[derive(Default)]
pub struct Quadtree {
    boundary: [f32; 4],
    capacity: usize,
    depth: usize,
    points: Vec<Particle>,
    subtrees: Vec<Quadtree>,
    is_leaf: bool,
}

impl Quadtree {
    pub fn new(boundary: [f32; 4], capacity: usize, depth: usize) -> Self {
        Self {
            boundary,
            capacity,
            depth,
            is_leaf: true,
            ..Default::default()
        }
    }

    fn contains(&self, point: &Particle, range: &[f32; 4]) -> bool {
        range[0] - range[2] <= point.pos.x
            && range[0] + range[2] >= point.pos.x
            && range[1] - range[3] <= point.pos.y
            && range[1] + range[3] >= point.pos.y
    }

    fn intersects(&self, other: &[f32; 4]) -> bool {
        !(self.boundary[0] - self.boundary[2] > other[0] + other[2]
            || self.boundary[0] + self.boundary[2] < other[0] - other[2]
            || self.boundary[1] - self.boundary[3] > other[1] + other[3]
            || self.boundary[1] + self.boundary[3] < other[1] - other[3])
    }

    fn subdivide(&mut self) {
        let x = self.boundary[0];
        let y = self.boundary[1];
        let rx = self.boundary[2] / 2.;
        let ry = self.boundary[3] / 2.;

        for i in [-1., 1.] {
            for j in [-1., 1.] {
                let new_tree = Quadtree::new(
                    [x + i * rx, y + j * ry, rx, ry],
                    self.capacity,
                    self.depth + 1,
                );
                self.subtrees.push(new_tree);
            }
        }
        self.is_leaf = false;
        for point in &self.points {
            self.subtrees.iter_mut().any(|t| t.insert(*point));
        }
        self.points.clear();
    }

    pub fn insert(&mut self, point: Particle) -> bool {
        if !self.contains(&point, &self.boundary) {
            return false;
        }
        if self.is_leaf && (self.points.len() < self.capacity || self.depth > 5) {
            self.points.push(point);
            return true;
        }
        if self.is_leaf {
            self.subdivide();
        }
        self.subtrees.iter_mut().any(|t| t.insert(point))
    }

    fn _query(&self, range: &[f32; 4], found: &mut Vec<Particle>) {
        if !self.intersects(range) {
            return;
        }
        if self.is_leaf {
            for point in &self.points {
                if self.contains(point, range) {
                    found.push(*point);
                }
            }
            return;
        }
        self.subtrees.iter().for_each(|t| t._query(range, found))
    }

    pub fn query(&self, range: [f32; 4]) -> Vec<Particle> {
        let mut found: Vec<Particle> = Vec::new();
        self._query(&range, &mut found);
        found
    }
}

use std::usize;

#[derive(Default, Clone)]
pub struct Vec2d<T: std::clone::Clone> {
    size: (usize, usize),
    vec: Vec<T>,
    length: usize,
}

impl<T: std::clone::Clone> Vec2d<T> {
    pub fn new(size: (usize, usize)) -> Self {
        Self {
            size,
            vec: Vec::with_capacity(size.0 * size.1),
            length: size.0 * size.1,
        }
    }

    pub fn from_fn_mut(size: (usize, usize), f: &mut impl FnMut() -> T) -> Self {
        let mut new = Self::new(size);
        for _ in 0..new.length {
            new.vec.push(f());
        }
        new
    }

    pub fn get(&self, dim_1: usize, dim_2: usize) -> &T {
        &self.vec[dim_1 * self.size.1 + dim_2]
    }

    pub fn set(&mut self, dim_1: usize, dim_2: usize, value: T) {
        self.vec[dim_1 * self.size.1 + dim_2] = value;
    }

    pub fn get_as_nested_vec(&self) -> Vec<Vec<T>> {
        self.vec.chunks_exact(self.size.1).fold(
            Vec::with_capacity(self.size.0),
            |mut acc, rules| {
                acc.push(rules.to_vec());
                acc
            },
        )
    }

    pub fn from_nested_vec(&mut self, input: Vec<Vec<T>>) {
        let dim_1_size = input.len();
        let dim_2_size = if dim_1_size > 0 { input[0].len() } else { 0 };

        self.size = (dim_1_size, dim_2_size);
        self.length = dim_1_size * dim_2_size;
        self.vec = input.concat();
    }

    pub fn get_size(&self) -> &(usize, usize) {
        &self.size
    }

    pub fn get_length(&self) -> usize {
        self.length
    }
}

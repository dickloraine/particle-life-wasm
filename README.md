# Particel Life Simulation

Based on [https://github.com/hunar4321/particle-life](https://github.com/hunar4321/particle-life).

This simulation uses a different formula for the force by always repulsing near particles. This allows for less jittering if the time delta is sufficiently low, but is more expensive to calculate.

## App

[https://dickloraine.github.io/particle-life-wasm/](https://dickloraine.github.io/particle-life-wasm/)

#### Demo mode

Start the app in demo mode (random new simulation every 20 seconds). You can toggle the domo mode through the gui or by pressing 'd'.

[https://dickloraine.github.io/particle-life-wasm/#demo](https://dickloraine.github.io/particle-life-wasm/#demo)

## Code

The main logic is written in rust. The libs/particles package contains all code needed to calculate particle-life and could be used by other backends.

lib/particle-life-wasm provides wasm-bindings for the particles package. To make this fast, the particle information needed to draw the particles is stored in an array and only the pointer and length needs to be send to javascript.

The frontend is a static site packaged by vite. It provides the gui and renders the particle life.

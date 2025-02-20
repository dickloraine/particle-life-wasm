import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  base: '/particle-life-wasm/',
  plugins: [wasm(), topLevelAwait()],
  server: {
    port: 5177,
  },
  optimizeDeps: {
    exclude: ['particle-life-wasm'],
  },
  build: {
    target: 'esnext',
  },
});

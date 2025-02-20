import init from 'particle-life-wasm';
import { App } from './app';

const wasmInit = await init();
const memory = wasmInit.memory;
const app = new App('#canvas', memory);

app.run();

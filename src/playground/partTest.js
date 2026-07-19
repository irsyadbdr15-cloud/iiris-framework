import { PartEngine } from '../master/part/PartEngine.js';

const engine = new PartEngine();

console.log(engine.findAll());

console.log(engine.findByPartNumber("FG001"));
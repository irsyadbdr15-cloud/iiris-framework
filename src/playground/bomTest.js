import { BomEngine } from "../master/bom/BomEngine.js";

const engine = new BomEngine();

console.dir(

    engine.findAll(),

    { depth: null }

);

console.dir(

    engine.findByPartNumber("FG001"),

    { depth: null }

);

console.dir(

    engine.findByBomNumber("BOM000001"),

    { depth: null }

);
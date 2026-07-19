/**
 * ===========================================================
 * IIRIS ERP
 * Manufacturing Engine Playground
 * ===========================================================
 */

import { ManufacturingEngine } from '../engines/manufacturing/ManufacturingEngine.js';

const engine = new ManufacturingEngine();

const manufacturingPlan =
    engine.calculateManufacturingRequirement(
        "FG001",
        500
    );

console.dir(manufacturingPlan, { depth: null });
/**
 * ===========================================================
 * IIRIS ERP
 * Playground
 * Work Center Test
 * ===========================================================
 */

import { WorkCenterEngine } from "../master/workcenter/WorkCenterEngine.js";

const engine = new WorkCenterEngine();

console.log(engine.findAll());

console.log(

    engine.findByWorkCenterCode("WC002")

);
/**
 * ===========================================================
 * IIRIS ERP
 * Module : Manufacturing
 * File   : ManufacturingEngine.js
 * Purpose: Manufacturing Business Engine
 * ===========================================================
 */

import { mockRouting } from "./mock/MockRouting.js";

import { BomEngine } from "../../master/bom/BomEngine.js";
import { PartEngine } from "../../master/part/PartEngine.js";
import { WorkCenterEngine } from "../../master/workcenter/WorkCenterEngine.js";

import { calculateMaterialRequirement } from "./formula/material.js";
import { calculateProductionLeadTime } from "./formula/leadTime.js";
export class ManufacturingEngine {

    calculateManufacturingRequirement(partNumber, orderQty) {

        // ======================================
        // STEP-1
        // Get Master Data
        // ======================================

        const bomEngine = new BomEngine();
        const partEngine = new PartEngine();
        const workCenterEngine = new WorkCenterEngine();

        const bom = bomEngine.findByPartNumber(partNumber);


        // Temporary
        // Routing masih menggunakan Mock
        const routing = mockRouting;

        // ======================================
        // STEP-2
        // Calculate Material Requirement
        // ======================================

        const materialRequirements = bom.materials.map(material => {
            const materialPart = partEngine.findByPartNumber(
                material.materialNumber
            );
            return {
                materialNumber: material.materialNumber,
                materialName: materialPart.partName,
                quantityPerUnit: material.quantityPerUnit,
                requirement: calculateMaterialRequirement(
                    orderQty,
                    material.quantityPerUnit

                ),
                uom: materialPart.uom
            };
        });

        // ======================================
        // STEP-3
        // Calculate Production Plan
        // ======================================

        const productionPlan = routing.operations.map(operation => {
            const workCenter =
            workCenterEngine.findByWorkCenterCode(
                operation.workCenterCode
            );
            return {
                operationNo: operation.operationNo,
                workCenterCode: operation.workCenterCode,
                workCenterName: workCenter.workCenterName,
                unitProcessTime: operation.unitProcessTime,
                leadTime: calculateProductionLeadTime(
                    orderQty,
                    operation.unitProcessTime
                ),
                timeUom: operation.timeUom
            };
        });


        // ======================================
        // STEP-4
        // Calculate Total Lead Time
        // ======================================

        const totalLeadTime = productionPlan.reduce(

            (total, operation) => total + operation.leadTime,

            0

        );

        // ======================================
        // STEP-5
        // Build Manufacturing Order Planning
        // ======================================

        return {

            partNumber,

            orderQty,

            materialRequirements,

            productionPlan,

            totalLeadTime

        };

    }

}
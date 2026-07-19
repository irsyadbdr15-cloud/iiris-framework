/**
 * ===========================================================
 * IIRIS ERP
 * Module : Master Data
 * File   : WorkCenterEngine.js
 * Purpose: Work Center Business Engine
 * ===========================================================
 */

import { mockWorkCenters } from "./MockWorkCenter.js";

export class WorkCenterEngine {

    findAll() {

        return mockWorkCenters;

    }

    findByWorkCenterCode(workCenterCode) {

        return mockWorkCenters.find(

            workCenter =>

                workCenter.workCenterCode === workCenterCode

        );

    }

}
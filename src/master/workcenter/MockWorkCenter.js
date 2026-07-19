/**
 * ===========================================================
 * IIRIS ERP
 * Module : Master Data
 * File   : MockWorkCenter.js
 * Purpose: Mock Work Center
 * ===========================================================
 */

import { createWorkCenter } from "./WorkCenterModel.js";

export const mockWorkCenters = [

    createWorkCenter({

        workCenterCode: "WC001",

        workCenterName: "Mixing",

        workCenterType: "Machine"

    }),

    createWorkCenter({

        workCenterCode: "WC002",

        workCenterName: "Injection",

        workCenterType: "Machine"

    }),

    createWorkCenter({

        workCenterCode: "WC003",

        workCenterName: "Packing",

        workCenterType: "Manual Work"

    })

];
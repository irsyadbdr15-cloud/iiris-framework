/**
 * ===========================================================
 * IIRIS ERP
 * Module : Master Data
 * File   : WorkCenterModel.js
 * Purpose: Work Center Business Object
 * ===========================================================
 */

export function createWorkCenter(data) {

    return {

        workCenterCode: data.workCenterCode,

        workCenterName: data.workCenterName,

        workCenterType: data.workCenterType

    };

}
/**
 * ===========================================================
 * IIRIS ERP
 * Module : Manufacturing
 * Mock Routing
 * ===========================================================
 */

export const mockRouting = {
  routingNumber: 'RT000001',

  partNumber: 'FG001',

  operations: [

    {
        operationNo: 10,

        workCenterCode: "WC001",

        unitProcessTime: 0.2,

        timeUom: "Minute"
    },

    {
        operationNo: 20,

        workCenterCode: "WC002",

        unitProcessTime: 0.5,

        timeUom: "Minute"
    },

    {
        operationNo: 30,

        workCenterCode: "WC003",

        unitProcessTime: 0.1,

        timeUom: "Minute"
    }

]
};
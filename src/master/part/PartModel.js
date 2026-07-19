/**
 * ===========================================================
 * IIRIS ERP
 * Module : Master Data
 * File   : PartModel.js
 * Purpose: Part Business Object
 * ===========================================================
 */

export function createPart(data) {
    return {
        partNumber: data.partNumber,
        partName: data.partName,
        partType: data.partType,
        uom: data.uom,
        productGroup: data.productGroup,
        standardPrice: data.standardPrice
    };
}
import { createPart } from './PartModel.js';

export const mockParts = [

    createPart({
        partNumber: 'FG001',
        partName: 'Plastic Chair',
        partType: 'Manufacture',
        uom: 'PCS',
        productGroup: 'Finished Goods',
        standardPrice: 250000
    }),

    createPart({
        partNumber: 'RM001',
        partName: 'Plastic Resin',
        partType: 'Purchase',
        uom: 'KG',
        productGroup: 'Raw Material',
        standardPrice: 18000
    }),

    createPart({
        partNumber: 'RM002',
        partName: 'Color Masterbatch',
        partType: 'Purchase',
        uom: 'KG',
        productGroup: 'Raw Material',
        standardPrice: 45000
    })

];
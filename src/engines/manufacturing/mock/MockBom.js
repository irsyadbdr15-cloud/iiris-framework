/**
 * ===========================================================
 * IIRIS ERP
 * Module : Manufacturing
 * Mock BOM
 * ===========================================================
 */

export const mockBom = {
  bomNumber: 'BOM000001',

  partNumber: 'FG001',

  partName: 'Plastic Chair',

  materials: [
    {
      materialNumber: 'RM001',
      materialName: 'Plastic Resin',
      unitConsumption: 2,
      uom: 'KG'
    },

    {
      materialNumber: 'RM002',
      materialName: 'Color Masterbatch',
      unitConsumption: 0.05,
      uom: 'KG'
    }
  ]
};
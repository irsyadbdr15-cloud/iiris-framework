import { createBom } from "./BomModel.js";
import { createBomMaterial } from "./BomMaterialModel.js";

export const mockBoms = [

    createBom({

        bomNumber: "BOM000001",

        partNumber: "FG001",

        revision: "A",

        status: "Active",

        materials: [

            createBomMaterial({

                materialNumber: "RM001",

                quantityPerUnit: 2,

                uom: "KG"

            }),

            createBomMaterial({

                materialNumber: "RM002",

                quantityPerUnit: 0.05,

                uom: "KG"

            })

        ]

    })

];
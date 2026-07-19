import { mockBoms } from "./MockBom.js";

export class BomEngine {

    findAll() {

        return mockBoms;

    }

    findByPartNumber(partNumber) {

        return mockBoms.find(

            bom => bom.partNumber === partNumber

        );

    }

    findByBomNumber(bomNumber) {

        return mockBoms.find(

            bom => bom.bomNumber === bomNumber

        );

    }

}
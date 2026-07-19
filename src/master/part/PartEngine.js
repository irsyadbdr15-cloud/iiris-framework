/**
 * ===========================================================
 * IIRIS ERP
 * Module : Master Data
 * File   : PartEngine.js
 * Purpose: Part Business Engine
 * ===========================================================
 */

import { mockParts } from './MockPart.js';

export class PartEngine {

    findAll() {
        return mockParts;
    }

    findByPartNumber(partNumber) {

        return mockParts.find(

            part => part.partNumber === partNumber

        );

    }

}
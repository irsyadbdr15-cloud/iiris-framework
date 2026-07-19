/**
 * ===========================================================
 * IIRIS ERP
 * Module : Manufacturing
 * File   : leadTime.js
 * Purpose: Production Lead Time Formula
 * BFS    : BFS-002
 * ===========================================================
 */

/**
 * Calculate Production Lead Time
 *
 * Formula:
 * Production Lead Time = Order Quantity × Unit Process Time
 *
 * @param {number} orderQty
 * @param {number} unitProcessTime
 * @returns {number}
 */
export function calculateProductionLeadTime(
  orderQty,
  unitProcessTime
) {
  return orderQty * unitProcessTime;
}
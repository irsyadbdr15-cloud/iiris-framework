/**
 * ===========================================================
 * IIRIS ERP
 * Module : Manufacturing
 * File   : material.js
 * Purpose: Material Requirement Formula
 * BFS    : BFS-001
 * ===========================================================
 */

/**
 * Calculate Material Requirement
 *
 * Formula:
 * Material Requirement = Order Quantity × Unit Consumption
 *
 * @param {number} orderQty
 * @param {number} quantityPerUnit
 * @returns {number}
 */
export function calculateMaterialRequirement(orderQty, quantityPerUnit) {
  return orderQty * quantityPerUnit;
}

/**
 * Calculate Material Consumption
 *
 * Formula:
 * Material Consumption = Confirmation Quantity × Unit Consumption
 *
 * @param {number} confirmationQty
 * @param {number} quantityPerUnit
 * @returns {number}
 */
export function calculateMaterialConsumption(
  confirmationQty,
  quantityPerUnit
) {
  return confirmationQty * quantityPerUnit;
}
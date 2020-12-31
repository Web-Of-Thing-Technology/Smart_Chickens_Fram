"use strict";

exports.__esModule = true;
exports.default = void 0;

var _element = require("./../helpers/dom/element");

var _index = require("./index");

/**
 * @private
 * @param {Core} instance The Handsontable instance.
 * @param {HTMLTableCellElement} TD The rendered cell element.
 * @param {number} row The visual row index.
 * @param {number} col The visual column index.
 * @param {number|string} prop The column property (passed when datasource is an array of objects).
 * @param {*} value The rendered value.
 * @param {object} cellProperties The cell meta object ({@see Core#getCellMeta}).
 */
function htmlRenderer(instance, TD, row, col, prop, value, cellProperties) {
  (0, _index.getRenderer)('base').apply(this, [instance, TD, row, col, prop, value, cellProperties]);
  (0, _element.fastInnerHTML)(TD, value === null || value === void 0 ? '' : value, false);
}

var _default = htmlRenderer;
exports.default = _default;
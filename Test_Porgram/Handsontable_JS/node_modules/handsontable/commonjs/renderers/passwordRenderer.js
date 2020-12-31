"use strict";

exports.__esModule = true;
exports.default = void 0;

var _element = require("./../helpers/dom/element");

var _index = require("./index");

var _number = require("./../helpers/number");

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
function passwordRenderer(instance, TD, row, col, prop, value, cellProperties) {
  (0, _index.getRenderer)('text').apply(this, [instance, TD, row, col, prop, value, cellProperties]);
  var hashLength = cellProperties.hashLength || TD.innerHTML.length;
  var hashSymbol = cellProperties.hashSymbol || '*';
  var hash = '';
  (0, _number.rangeEach)(hashLength - 1, function () {
    hash += hashSymbol;
  });
  (0, _element.fastInnerHTML)(TD, hash);
}

var _default = passwordRenderer;
exports.default = _default;
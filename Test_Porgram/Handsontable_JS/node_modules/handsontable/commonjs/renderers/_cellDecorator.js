"use strict";

exports.__esModule = true;
exports.default = void 0;

var _element = require("./../helpers/dom/element");

/**
 * Adds appropriate CSS class to table cell, based on cellProperties.
 */

/**
 * @param {Core} instance The Handsontable instance.
 * @param {HTMLTableCellElement} TD The rendered cell element.
 * @param {number} row The visual row index.
 * @param {number} col The visual column index.
 * @param {number|string} prop The column property (passed when datasource is an array of objects).
 * @param {*} value The rendered value.
 * @param {object} cellProperties The cell meta object ({@see Core#getCellMeta}).
 */
function cellDecorator(instance, TD, row, col, prop, value, cellProperties) {
  var classesToAdd = [];
  var classesToRemove = [];

  if (cellProperties.className) {
    (0, _element.addClass)(TD, cellProperties.className);
  }

  if (cellProperties.readOnly) {
    classesToAdd.push(cellProperties.readOnlyCellClassName);
  }

  if (cellProperties.valid === false && cellProperties.invalidCellClassName) {
    classesToAdd.push(cellProperties.invalidCellClassName);
  } else {
    classesToRemove.push(cellProperties.invalidCellClassName);
  }

  if (cellProperties.wordWrap === false && cellProperties.noWordWrapClassName) {
    classesToAdd.push(cellProperties.noWordWrapClassName);
  }

  if (!value && cellProperties.placeholder) {
    classesToAdd.push(cellProperties.placeholderCellClassName);
  }

  (0, _element.removeClass)(TD, classesToRemove);
  (0, _element.addClass)(TD, classesToAdd);
}

var _default = cellDecorator;
exports.default = _default;
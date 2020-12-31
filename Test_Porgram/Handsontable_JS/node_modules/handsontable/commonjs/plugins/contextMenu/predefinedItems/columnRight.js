"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = columnRightItem;
exports.KEY = void 0;

var _utils = require("./../utils");

var C = _interopRequireWildcard(require("./../../../i18n/constants"));

var _mixed = require("./../../../helpers/mixed");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var KEY = 'col_right';
/**
 * @returns {object}
 */

exports.KEY = KEY;

function columnRightItem() {
  return {
    key: KEY,
    name: function name() {
      return this.getTranslatedPhrase(C.CONTEXTMENU_ITEMS_INSERT_RIGHT);
    },
    callback: function callback(key, normalizedSelection) {
      var isSelectedByCorner = this.selection.isSelectedByCorner();
      var columnRight = 0;

      if (isSelectedByCorner) {
        columnRight = this.countCols();
      } else {
        var _latestSelection$end;

        var latestSelection = normalizedSelection[Math.max(normalizedSelection.length - 1, 0)];
        var selectedColumn = latestSelection === null || latestSelection === void 0 ? void 0 : (_latestSelection$end = latestSelection.end) === null || _latestSelection$end === void 0 ? void 0 : _latestSelection$end.col; // If there is no selection we have clicked on the corner and there is no data.

        columnRight = (0, _mixed.isDefined)(selectedColumn) ? selectedColumn + 1 : 0;
      }

      this.alter('insert_col', columnRight, 1, 'ContextMenu.columnRight');

      if (isSelectedByCorner) {
        this.selectAll();
      }
    },
    disabled: function disabled() {
      if (!this.isColumnModificationAllowed()) {
        return true;
      }

      var selected = (0, _utils.getValidSelection)(this);

      if (!selected) {
        return true;
      }

      if (this.selection.isSelectedByCorner()) {
        // Enable "Insert column right" always when the menu is triggered by corner click.
        return false;
      }

      return this.selection.isSelectedByRowHeader() || this.countCols() >= this.getSettings().maxCols;
    },
    hidden: function hidden() {
      return !this.getSettings().allowInsertColumn;
    }
  };
}
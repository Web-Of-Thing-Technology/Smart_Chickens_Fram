"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = rowBelowItem;
exports.KEY = void 0;

var _utils = require("./../utils");

var _mixed = require("./../../../helpers/mixed");

var C = _interopRequireWildcard(require("./../../../i18n/constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var KEY = 'row_below';
/**
 * @returns {object}
 */

exports.KEY = KEY;

function rowBelowItem() {
  return {
    key: KEY,
    name: function name() {
      return this.getTranslatedPhrase(C.CONTEXTMENU_ITEMS_ROW_BELOW);
    },
    callback: function callback(key, normalizedSelection) {
      var isSelectedByCorner = this.selection.isSelectedByCorner();
      var rowBelow = 0;

      if (isSelectedByCorner) {
        rowBelow = this.countRows();
      } else {
        var _latestSelection$end;

        var latestSelection = normalizedSelection[Math.max(normalizedSelection.length - 1, 0)];
        var selectedRow = latestSelection === null || latestSelection === void 0 ? void 0 : (_latestSelection$end = latestSelection.end) === null || _latestSelection$end === void 0 ? void 0 : _latestSelection$end.row; // If there is no selection we have clicked on the corner and there is no data.

        rowBelow = (0, _mixed.isDefined)(selectedRow) ? selectedRow + 1 : 0;
      }

      this.alter('insert_row', rowBelow, 1, 'ContextMenu.rowBelow');

      if (isSelectedByCorner) {
        this.selectAll();
      }
    },
    disabled: function disabled() {
      var selected = (0, _utils.getValidSelection)(this);

      if (!selected) {
        return true;
      }

      if (this.selection.isSelectedByCorner()) {
        // Enable "Insert row below" always when the menu is triggered by corner click.
        return false;
      }

      return this.selection.isSelectedByColumnHeader() || this.countRows() >= this.getSettings().maxRows;
    },
    hidden: function hidden() {
      return !this.getSettings().allowInsertRow;
    }
  };
}
"use strict";

require("core-js/modules/es.array.concat");

exports.__esModule = true;
exports.default = void 0;

var _array = require("../../helpers/array");

var _number = require("../../helpers/number");

var _object = require("../../helpers/object");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Data class provider responsible for providing a set of range data types, necessary for calculating formulas.
 * Those methods strongly using hot.getData and hot.getSourceData methods with some changes. Data provider additionally
 * collects all changes added to the data source to make them available faster than by using
 * hot.getData and hot.getSourceData methods.
 *
 * @class DataProvider
 * @util
 */
var DataProvider = /*#__PURE__*/function () {
  function DataProvider(hot) {
    _classCallCheck(this, DataProvider);

    /**
     * Handsontable instance.
     *
     * @type {Core}
     */
    this.hot = hot;
    /**
     * Collected changes applied into editors or by calling public Handsontable API. This is require to provide
     * fresh data applied into spreadsheet before they will be available from the public API.
     *
     * @type {object}
     */

    this.changes = {};
  }
  /**
   * Collect all data changes applied to the Handsontable to make them available later.
   *
   * @param {number} row Physical row index.
   * @param {number} column Physical column index.
   * @param {*} value Value to store.
   */


  _createClass(DataProvider, [{
    key: "collectChanges",
    value: function collectChanges(row, column, value) {
      this.changes[this._coordId(row, column)] = value;
    }
    /**
     * Clear all collected changes.
     */

  }, {
    key: "clearChanges",
    value: function clearChanges() {
      this.changes = {};
    }
    /**
     * Check if provided coordinates match to the table range data.
     *
     * @param {number} visualRow Visual row index.
     * @param {number} visualColumn Visual row index.
     * @returns {boolean}
     */

  }, {
    key: "isInDataRange",
    value: function isInDataRange(visualRow, visualColumn) {
      return visualRow >= 0 && visualRow < this.hot.countRows() && visualColumn >= 0 && visualColumn < this.hot.countCols();
    }
    /**
     * Get calculated data at specified cell.
     *
     * @param {number} visualRow Visual row index.
     * @param {number} visualColumn Visual column index.
     * @returns {*}
     */

  }, {
    key: "getDataAtCell",
    value: function getDataAtCell(visualRow, visualColumn) {
      var id = this._coordId(this.hot.toPhysicalRow(visualRow), this.hot.toPhysicalColumn(visualColumn));

      var result;

      if ((0, _object.hasOwnProperty)(this.changes, id)) {
        result = this.changes[id];
      } else {
        result = this.hot.getDataAtCell(visualRow, visualColumn);
      }

      return result;
    }
    /**
     * Get calculated data at specified range.
     *
     * @param {number} [visualRow1] Visual row index.
     * @param {number} [visualColumn1] Visual column index.
     * @param {number} [visualRow2] Visual row index.
     * @param {number} [visualColumn2] Visual column index.
     * @returns {Array}
     */

  }, {
    key: "getDataByRange",
    value: function getDataByRange(visualRow1, visualColumn1, visualRow2, visualColumn2) {
      var _this = this;

      var result = this.hot.getData(visualRow1, visualColumn1, visualRow2, visualColumn2);
      (0, _array.arrayEach)(result, function (rowData, rowIndex) {
        (0, _array.arrayEach)(rowData, function (value, columnIndex) {
          var id = _this._coordId(_this.hot.toPhysicalRow(rowIndex + visualRow1), _this.hot.toPhysicalColumn(columnIndex + visualColumn1));

          if ((0, _object.hasOwnProperty)(_this.changes, id)) {
            result[rowIndex][columnIndex] = _this.changes[id];
          }
        });
      });
      return result;
    }
    /**
     * Get source data at specified physical cell.
     *
     * @param {number} physicalRow Physical row index.
     * @param {number} physicalColumn Physical column index.
     * @returns {*}
     */

  }, {
    key: "getSourceDataAtCell",
    value: function getSourceDataAtCell(physicalRow, physicalColumn) {
      var id = this._coordId(physicalRow, physicalColumn);

      var result;

      if ((0, _object.hasOwnProperty)(this.changes, id)) {
        result = this.changes[id];
      } else {
        result = this.hot.getSourceDataAtCell(physicalRow, physicalColumn);
      }

      return result;
    }
    /**
     * Get source data at specified physical range.
     *
     * @param {number} [physicalRow1] Physical row index.
     * @param {number} [physicalColumn1] Physical column index.
     * @param {number} [physicalRow2] Physical row index.
     * @param {number} [physicalColumn2] Physical column index.
     * @returns {Array}
     */

  }, {
    key: "getSourceDataByRange",
    value: function getSourceDataByRange(physicalRow1, physicalColumn1, physicalRow2, physicalColumn2) {
      return this.hot.getSourceDataArray(physicalRow1, physicalColumn1, physicalRow2, physicalColumn2);
    }
    /**
     * Get source data at specified visual cell.
     *
     * @param {number} visualRow Visual row index.
     * @param {number} visualColumn Visual column index.
     * @returns {*}
     */

  }, {
    key: "getRawDataAtCell",
    value: function getRawDataAtCell(visualRow, visualColumn) {
      return this.getSourceDataAtCell(this.hot.toPhysicalRow(visualRow), this.hot.toPhysicalColumn(visualColumn));
    }
    /**
     * Get source data at specified visual range.
     *
     * @param {number} [visualRow1] Visual row index.
     * @param {number} [visualColumn1] Visual column index.
     * @param {number} [visualRow2] Visual row index.
     * @param {number} [visualColumn2] Visual column index.
     * @returns {Array}
     */

  }, {
    key: "getRawDataByRange",
    value: function getRawDataByRange(visualRow1, visualColumn1, visualRow2, visualColumn2) {
      var _this2 = this;

      var data = [];
      (0, _number.rangeEach)(visualRow1, visualRow2, function (visualRow) {
        var row = [];
        (0, _number.rangeEach)(visualColumn1, visualColumn2, function (visualColumn) {
          var _ref = [_this2.hot.toPhysicalRow(visualRow), _this2.hot.toPhysicalColumn(visualColumn)],
              physicalRow = _ref[0],
              physicalColumn = _ref[1];

          var id = _this2._coordId(physicalRow, physicalColumn);

          if ((0, _object.hasOwnProperty)(_this2.changes, id)) {
            row.push(_this2.changes[id]);
          } else {
            row.push(_this2.getSourceDataAtCell(physicalRow, physicalColumn));
          }
        });
        data.push(row);
      });
      return data;
    }
    /**
     * Update source data.
     *
     * @param {number} physicalRow Physical row index.
     * @param {number} physicalColumn Physical row index.
     * @param {*} value Value to update.
     */

  }, {
    key: "updateSourceData",
    value: function updateSourceData(physicalRow, physicalColumn, value) {
      this.hot.setSourceDataAtCell(physicalRow, this.hot.colToProp(physicalColumn), value);
    }
    /**
     * Generate cell coordinates id where the data changes will be stored.
     *
     * @param {number} row Row index.
     * @param {number} column Column index.
     * @returns {string}
     * @private
     */

  }, {
    key: "_coordId",
    value: function _coordId(row, column) {
      return "".concat(row, ":").concat(column);
    }
    /**
     * Destroy class.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hot = null;
      this.changes = null;
    }
  }]);

  return DataProvider;
}();

var _default = DataProvider;
exports.default = _default;
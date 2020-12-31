import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.reflect.get";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import "core-js/modules/web.timers";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import BasePlugin from './../_base';
import { arrayEach, arrayFilter } from './../../helpers/array';
import { cancelAnimationFrame, requestAnimationFrame } from './../../helpers/feature';
import { isVisible } from './../../helpers/dom/element';
import GhostTable from './../../utils/ghostTable';
import { isObject, hasOwnProperty } from './../../helpers/object';
import { valueAccordingPercent, rangeEach } from './../../helpers/number';
import { registerPlugin } from './../../plugins';
import SamplesGenerator from './../../utils/samplesGenerator';
import { isPercentValue } from './../../helpers/string';
import { PhysicalIndexToValueMap as IndexToValueMap } from './../../translations';
var ROW_WIDTHS_MAP_NAME = 'autoRowSize';
/**
 * @plugin AutoRowSize
 *
 * @description
 * This plugin allows to set row heights based on their highest cells.
 *
 * By default, the plugin is declared as `undefined`, which makes it disabled (same as if it was declared as `false`).
 * Enabling this plugin may decrease the overall table performance, as it needs to calculate the heights of all cells to
 * resize the rows accordingly.
 * If you experience problems with the performance, try turning this feature off and declaring the row heights manually.
 *
 * Row height calculations are divided into sync and async part. Each of this parts has their own advantages and
 * disadvantages. Synchronous calculations are faster but they block the browser UI, while the slower asynchronous
 * operations don't block the browser UI.
 *
 * To configure the sync/async distribution, you can pass an absolute value (number of columns) or a percentage value to a config object:
 * ```js
 * // as a number (300 columns in sync, rest async)
 * autoRowSize: {syncLimit: 300},.
 *
 * // as a string (percent)
 * autoRowSize: {syncLimit: '40%'},.
 *
 * // allow sample duplication
 * autoRowSize: {syncLimit: '40%', allowSampleDuplicates: true},
 * ```.
 *
 * You can also use the `allowSampleDuplicates` option to allow sampling duplicate values when calculating the row
 * height. __Note__, that this might have a negative impact on performance.
 *
 * To configure this plugin see {@link Options#autoRowSize}.
 *
 * @example
 *
 * ```js
 * const hot = new Handsontable(document.getElementById('example'), {
 *   data: getData(),
 *   autoRowSize: true
 * });
 * // Access to plugin instance:
 * const plugin = hot.getPlugin('autoRowSize');
 *
 * plugin.getRowHeight(4);
 *
 * if (plugin.isEnabled()) {
 *   // code...
 * }
 * ```
 */

var AutoRowSize = /*#__PURE__*/function (_BasePlugin) {
  _inherits(AutoRowSize, _BasePlugin);

  var _super = _createSuper(AutoRowSize);

  _createClass(AutoRowSize, null, [{
    key: "CALCULATION_STEP",
    get: function get() {
      return 50;
    }
  }, {
    key: "SYNC_CALCULATION_LIMIT",
    get: function get() {
      return 500;
    }
  }]);

  function AutoRowSize(hotInstance) {
    var _this;

    _classCallCheck(this, AutoRowSize);

    _this = _super.call(this, hotInstance);
    /**
     * PhysicalIndexToValueMap to keep and track heights for physical row indexes.
     *
     * @private
     * @type {PhysicalIndexToValueMap}
     */

    _this.rowHeightsMap = void 0;
    /**
     * Columns header's height cache.
     *
     * @private
     * @type {number}
     */

    _this.headerHeight = null;
    /**
     * Instance of {@link GhostTable} for rows and columns size calculations.
     *
     * @private
     * @type {GhostTable}
     */

    _this.ghostTable = new GhostTable(_this.hot);
    /**
     * Instance of {@link SamplesGenerator} for generating samples necessary for rows height calculations.
     *
     * @private
     * @type {SamplesGenerator}
     */

    _this.samplesGenerator = new SamplesGenerator(function (row, col) {
      var cellValue;

      if (row >= 0) {
        cellValue = _this.hot.getDataAtCell(row, col);
      } else if (row === -1) {
        cellValue = _this.hot.getColHeader(col);
      }

      return {
        value: cellValue
      };
    });
    /**
     * `true` if only the first calculation was performed.
     *
     * @private
     * @type {boolean}
     */

    _this.firstCalculation = true;
    /**
     * `true` if the size calculation is in progress.
     *
     * @type {boolean}
     */

    _this.inProgress = false;
    /**
     * Number of already measured rows (we already know their sizes).
     *
     * @type {number}
     */

    _this.measuredRows = 0;
    /**
     * PhysicalIndexToValueMap to keep and track heights for physical row indexes.
     *
     * @private
     * @type {PhysicalIndexToValueMap}
     */

    _this.rowHeightsMap = new IndexToValueMap();

    _this.hot.rowIndexMapper.registerMap(ROW_WIDTHS_MAP_NAME, _this.rowHeightsMap); // Leave the listener active to allow auto-sizing the rows when the plugin is disabled.
    // This is necesseary for height recalculation for resize handler doubleclick (ManualRowResize).


    _this.addHook('beforeRowResize', function (size, row, isDblClick) {
      return _this.onBeforeRowResize(size, row, isDblClick);
    });

    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link AutoRowSize#enablePlugin} method is called.
   *
   * @returns {boolean}
   */


  _createClass(AutoRowSize, [{
    key: "isEnabled",
    value: function isEnabled() {
      return this.hot.getSettings().autoRowSize === true || isObject(this.hot.getSettings().autoRowSize);
    }
    /**
     * Enables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "enablePlugin",
    value: function enablePlugin() {
      var _this2 = this;

      if (this.enabled) {
        return;
      }

      this.setSamplingOptions();
      this.addHook('afterLoadData', function () {
        return _this2.onAfterLoadData();
      });
      this.addHook('beforeChange', function (changes) {
        return _this2.onBeforeChange(changes);
      });
      this.addHook('beforeColumnResize', function () {
        return _this2.recalculateAllRowsHeight();
      });
      this.addHook('beforeRender', function (force) {
        return _this2.onBeforeRender(force);
      });
      this.addHook('modifyRowHeight', function (height, row) {
        return _this2.getRowHeight(row, height);
      });
      this.addHook('modifyColumnHeaderHeight', function () {
        return _this2.getColumnHeaderHeight();
      });

      _get(_getPrototypeOf(AutoRowSize.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      var _this3 = this;

      this.headerHeight = null;

      _get(_getPrototypeOf(AutoRowSize.prototype), "disablePlugin", this).call(this); // Leave the listener active to allow auto-sizing the rows when the plugin is disabled.
      // This is necesseary for height recalculation for resize handler doubleclick (ManualRowResize).


      this.addHook('beforeRowResize', function (size, row, isDblClick) {
        return _this3.onBeforeRowResize(size, row, isDblClick);
      });
    }
    /**
     * Calculate a given rows height.
     *
     * @param {number|object} rowRange Row index or an object with `from` and `to` indexes as a range.
     * @param {number|object} colRange Column index or an object with `from` and `to` indexes as a range.
     * @param {boolean} [force=false] If `true` the calculation will be processed regardless of whether the width exists in the cache.
     */

  }, {
    key: "calculateRowsHeight",
    value: function calculateRowsHeight() {
      var _this4 = this;

      var rowRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        from: 0,
        to: this.hot.countRows() - 1
      };
      var colRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        from: 0,
        to: this.hot.countCols() - 1
      };
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // eslint-disable-line max-len
      var rowsRange = typeof rowRange === 'number' ? {
        from: rowRange,
        to: rowRange
      } : rowRange;
      var columnsRange = typeof colRange === 'number' ? {
        from: colRange,
        to: colRange
      } : colRange;

      if (this.hot.getColHeader(0) !== null) {
        var samples = this.samplesGenerator.generateRowSamples(-1, columnsRange);
        this.ghostTable.addColumnHeadersRow(samples.get(-1));
      }

      rangeEach(rowsRange.from, rowsRange.to, function (row) {
        // For rows we must calculate row height even when user had set height value manually.
        // We can shrink column but cannot shrink rows!
        if (force || _this4.rowHeightsMap.getValueAtIndex(row) === null) {
          var _samples = _this4.samplesGenerator.generateRowSamples(row, columnsRange);

          arrayEach(_samples, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                rowIndex = _ref2[0],
                sample = _ref2[1];

            return _this4.ghostTable.addRow(rowIndex, sample);
          });
        }
      });

      if (this.ghostTable.rows.length) {
        this.hot.batch(function () {
          _this4.ghostTable.getHeights(function (row, height) {
            if (row < 0) {
              _this4.headerHeight = height;
            } else {
              _this4.rowHeightsMap.setValueAtIndex(_this4.hot.toPhysicalRow(row), height);
            }
          });
        });
        this.measuredRows = rowsRange.to + 1;
        this.ghostTable.clean();
      }
    }
    /**
     * Calculate all rows heights. The calculated row will be cached in the {@link AutoRowSize#heights} property.
     * To retrieve height for specified row use {@link AutoRowSize#getRowHeight} method.
     *
     * @param {object|number} colRange Row index or an object with `from` and `to` properties which define row range.
     */

  }, {
    key: "calculateAllRowsHeight",
    value: function calculateAllRowsHeight() {
      var _this5 = this;

      var colRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        from: 0,
        to: this.hot.countCols() - 1
      };
      var current = 0;
      var length = this.hot.countRows() - 1;
      var timer = null;
      this.inProgress = true;

      var loop = function loop() {
        // When hot was destroyed after calculating finished cancel frame
        if (!_this5.hot) {
          cancelAnimationFrame(timer);
          _this5.inProgress = false;
          return;
        }

        _this5.calculateRowsHeight({
          from: current,
          to: Math.min(current + AutoRowSize.CALCULATION_STEP, length)
        }, colRange);

        current = current + AutoRowSize.CALCULATION_STEP + 1;

        if (current < length) {
          timer = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(timer);
          _this5.inProgress = false; // @TODO Should call once per render cycle, currently fired separately in different plugins

          _this5.hot.view.wt.wtOverlays.adjustElementsSize(true); // tmp


          if (_this5.hot.view.wt.wtOverlays.leftOverlay.needFullRender) {
            _this5.hot.view.wt.wtOverlays.leftOverlay.clone.draw();
          }
        }
      };

      var syncLimit = this.getSyncCalculationLimit(); // sync

      if (this.firstCalculation && syncLimit >= 0) {
        this.calculateRowsHeight({
          from: 0,
          to: syncLimit
        }, colRange);
        this.firstCalculation = false;
        current = syncLimit + 1;
      } // async


      if (current < length) {
        loop();
      } else {
        this.inProgress = false;
        this.hot.view.wt.wtOverlays.adjustElementsSize(false);
      }
    }
    /**
     * Sets the sampling options.
     *
     * @private
     */

  }, {
    key: "setSamplingOptions",
    value: function setSamplingOptions() {
      var setting = this.hot.getSettings().autoRowSize;
      var samplingRatio = setting && hasOwnProperty(setting, 'samplingRatio') ? this.hot.getSettings().autoRowSize.samplingRatio : void 0;
      var allowSampleDuplicates = setting && hasOwnProperty(setting, 'allowSampleDuplicates') ? this.hot.getSettings().autoRowSize.allowSampleDuplicates : void 0;

      if (samplingRatio && !isNaN(samplingRatio)) {
        this.samplesGenerator.setSampleCount(parseInt(samplingRatio, 10));
      }

      if (allowSampleDuplicates) {
        this.samplesGenerator.setAllowDuplicates(allowSampleDuplicates);
      }
    }
    /**
     * Recalculates all rows height (overwrite cache values).
     */

  }, {
    key: "recalculateAllRowsHeight",
    value: function recalculateAllRowsHeight() {
      if (isVisible(this.hot.view.wt.wtTable.TABLE)) {
        this.clearCache();
        this.calculateAllRowsHeight();
      }
    }
    /**
     * Gets value which tells how many rows should be calculated synchronously (rest of the rows will be calculated
     * asynchronously). The limit is calculated based on `syncLimit` set to autoRowSize option (see {@link Options#autoRowSize}).
     *
     * @returns {number}
     */

  }, {
    key: "getSyncCalculationLimit",
    value: function getSyncCalculationLimit() {
      /* eslint-disable no-bitwise */
      var limit = AutoRowSize.SYNC_CALCULATION_LIMIT;
      var rowsLimit = this.hot.countRows() - 1;

      if (isObject(this.hot.getSettings().autoRowSize)) {
        limit = this.hot.getSettings().autoRowSize.syncLimit;

        if (isPercentValue(limit)) {
          limit = valueAccordingPercent(rowsLimit, limit);
        } else {
          // Force to Number
          limit >>= 0;
        }
      }

      return Math.min(limit, rowsLimit);
    }
    /**
     * Gets the calculated row height.
     *
     * @param {number} row Visual row index.
     * @param {number} [defaultHeight] Default row height. It will be picked up if no calculated height found.
     * @returns {number}
     */

  }, {
    key: "getRowHeight",
    value: function getRowHeight(row) {
      var defaultHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
      var cachedHeight = row < 0 ? this.headerHeight : this.rowHeightsMap.getValueAtIndex(this.hot.toPhysicalRow(row));
      var height = defaultHeight;

      if (cachedHeight !== null && cachedHeight > (defaultHeight || 0)) {
        height = cachedHeight;
      }

      return height;
    }
    /**
     * Get the calculated column header height.
     *
     * @returns {number|undefined}
     */

  }, {
    key: "getColumnHeaderHeight",
    value: function getColumnHeaderHeight() {
      return this.headerHeight;
    }
    /**
     * Get the first visible row.
     *
     * @returns {number} Returns row index, -1 if table is not rendered or if there are no rows to base the the calculations on.
     */

  }, {
    key: "getFirstVisibleRow",
    value: function getFirstVisibleRow() {
      var wot = this.hot.view.wt;

      if (wot.wtViewport.rowsVisibleCalculator) {
        return wot.wtTable.getFirstVisibleRow();
      }

      if (wot.wtViewport.rowsRenderCalculator) {
        return wot.wtTable.getFirstRenderedRow();
      }

      return -1;
    }
    /**
     * Gets the last visible row.
     *
     * @returns {number} Returns row index or -1 if table is not rendered.
     */

  }, {
    key: "getLastVisibleRow",
    value: function getLastVisibleRow() {
      var wot = this.hot.view.wt;

      if (wot.wtViewport.rowsVisibleCalculator) {
        return wot.wtTable.getLastVisibleRow();
      }

      if (wot.wtViewport.rowsRenderCalculator) {
        return wot.wtTable.getLastRenderedRow();
      }

      return -1;
    }
    /**
     * Clears cached heights.
     */

  }, {
    key: "clearCache",
    value: function clearCache() {
      this.headerHeight = null;
      this.rowHeightsMap.init();
    }
    /**
     * Clears cache by range.
     *
     * @param {object|number} range Row index or an object with `from` and `to` properties which define row range.
     */

  }, {
    key: "clearCacheByRange",
    value: function clearCacheByRange(range) {
      var _this6 = this;

      var _ref3 = typeof range === 'number' ? {
        from: range,
        to: range
      } : range,
          from = _ref3.from,
          to = _ref3.to;

      this.hot.batch(function () {
        rangeEach(Math.min(from, to), Math.max(from, to), function (row) {
          _this6.rowHeightsMap.setValueAtIndex(row, null);
        });
      });
    }
    /**
     * Checks if all heights were calculated. If not then return `true` (need recalculate).
     *
     * @returns {boolean}
     */

  }, {
    key: "isNeedRecalculate",
    value: function isNeedRecalculate() {
      return !!arrayFilter(this.rowHeightsMap.getValues().slice(0, this.measuredRows), function (item) {
        return item === null;
      }).length;
    }
    /**
     * On before render listener.
     *
     * @private
     */

  }, {
    key: "onBeforeRender",
    value: function onBeforeRender() {
      var force = this.hot.renderCall;
      var fixedRowsBottom = this.hot.getSettings().fixedRowsBottom;
      var firstVisibleRow = this.getFirstVisibleRow();
      var lastVisibleRow = this.getLastVisibleRow();

      if (firstVisibleRow === -1 || lastVisibleRow === -1) {
        return;
      }

      this.calculateRowsHeight({
        from: firstVisibleRow,
        to: lastVisibleRow
      }, void 0, force); // Calculate rows height synchronously for bottom overlay

      if (fixedRowsBottom) {
        var totalRows = this.hot.countRows() - 1;
        this.calculateRowsHeight({
          from: totalRows - fixedRowsBottom,
          to: totalRows
        });
      }

      if (this.isNeedRecalculate() && !this.inProgress) {
        this.calculateAllRowsHeight();
      }
    }
    /**
     * On before row move listener.
     *
     * @private
     * @param {number} from Row index where was grabbed.
     * @param {number} to Destination row index.
     */

  }, {
    key: "onBeforeRowMove",
    value: function onBeforeRowMove(from, to) {
      this.clearCacheByRange({
        from: from,
        to: to
      });
      this.calculateAllRowsHeight();
    }
    /**
     * On before row resize listener.
     *
     * @private
     * @param {number} size The size of the current row index.
     * @param {number} row Current row index.
     * @param {boolean} isDblClick Indicates if the resize was triggered by doubleclick.
     * @returns {number}
     */

  }, {
    key: "onBeforeRowResize",
    value: function onBeforeRowResize(size, row, isDblClick) {
      var newSize = size;

      if (isDblClick) {
        this.calculateRowsHeight(row, void 0, true);
        newSize = this.getRowHeight(row);
      }

      return newSize;
    }
    /**
     * On after load data listener.
     *
     * @private
     */

  }, {
    key: "onAfterLoadData",
    value: function onAfterLoadData() {
      var _this7 = this;

      if (this.hot.view) {
        this.recalculateAllRowsHeight();
      } else {
        // first load - initialization
        setTimeout(function () {
          if (_this7.hot) {
            _this7.recalculateAllRowsHeight();
          }
        }, 0);
      }
    }
    /**
     * On before change listener.
     *
     * @private
     * @param {Array} changes 2D array containing information about each of the edited cells.
     */

  }, {
    key: "onBeforeChange",
    value: function onBeforeChange(changes) {
      var range = null;

      if (changes.length === 1) {
        range = changes[0][0];
      } else if (changes.length > 1) {
        range = {
          from: changes[0][0],
          to: changes[changes.length - 1][0]
        };
      }

      if (range !== null) {
        this.clearCacheByRange(range);
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hot.rowIndexMapper.unregisterMap(ROW_WIDTHS_MAP_NAME);
      this.ghostTable.clean();

      _get(_getPrototypeOf(AutoRowSize.prototype), "destroy", this).call(this);
    }
  }]);

  return AutoRowSize;
}(BasePlugin);

registerPlugin('autoRowSize', AutoRowSize);
export default AutoRowSize;
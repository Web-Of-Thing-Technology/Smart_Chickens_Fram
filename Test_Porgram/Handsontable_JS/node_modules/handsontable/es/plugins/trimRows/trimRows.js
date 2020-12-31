import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.every";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.is-integer";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.reflect.get";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.set";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import BasePlugin from '../_base';
import { registerPlugin } from '../../plugins';
import { TrimmingMap } from '../../translations';
import { arrayEach, arrayReduce } from '../../helpers/array';
/**
 * @plugin TrimRows
 *
 * @description
 * The plugin allows to trim certain rows. The trimming is achieved by applying the transformation algorithm to the data
 * transformation. In this case, when the row is trimmed it is not accessible using `getData*` methods thus the trimmed
 * data is not visible to other plugins.
 *
 * @example
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   data: getData(),
 *   // hide selected rows on table initialization
 *   trimRows: [1, 2, 5]
 * });
 *
 * // access the trimRows plugin instance
 * const trimRowsPlugin = hot.getPlugin('trimRows');
 *
 * // hide single row
 * trimRowsPlugin.trimRow(1);
 *
 * // hide multiple rows
 * trimRowsPlugin.trimRow(1, 2, 9);
 *
 * // or as an array
 * trimRowsPlugin.trimRows([1, 2, 9]);
 *
 * // show single row
 * trimRowsPlugin.untrimRow(1);
 *
 * // show multiple rows
 * trimRowsPlugin.untrimRow(1, 2, 9);
 *
 * // or as an array
 * trimRowsPlugin.untrimRows([1, 2, 9]);
 *
 * // rerender table to see the changes
 * hot.render();
 * ```
 */

var TrimRows = /*#__PURE__*/function (_BasePlugin) {
  _inherits(TrimRows, _BasePlugin);

  var _super = _createSuper(TrimRows);

  function TrimRows(hotInstance) {
    var _this;

    _classCallCheck(this, TrimRows);

    _this = _super.call(this, hotInstance);
    /**
     * Map of skipped rows by the plugin.
     *
     * @private
     * @type {null|TrimmingMap}
     */

    _this.trimmedRowsMap = null;
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link AutoRowSize#enablePlugin} method is called.
   *
   * @returns {boolean}
   */


  _createClass(TrimRows, [{
    key: "isEnabled",
    value: function isEnabled() {
      return !!this.hot.getSettings().trimRows;
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

      this.trimmedRowsMap = this.hot.rowIndexMapper.registerMap('trimRows', new TrimmingMap());
      this.trimmedRowsMap.addLocalHook('init', function () {
        return _this2.onMapInit();
      });

      _get(_getPrototypeOf(TrimRows.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      var _this3 = this;

      var trimmedRows = this.hot.getSettings().trimRows;

      if (Array.isArray(trimmedRows)) {
        this.hot.batch(function () {
          _this3.trimmedRowsMap.clear();

          arrayEach(trimmedRows, function (physicalRow) {
            _this3.trimmedRowsMap.setValueAtIndex(physicalRow, true);
          });
        });
      }

      _get(_getPrototypeOf(TrimRows.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      this.hot.rowIndexMapper.unregisterMap('trimRows');

      _get(_getPrototypeOf(TrimRows.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Get list of trimmed rows.
     *
     * @returns {Array} Physical rows.
     */

  }, {
    key: "getTrimmedRows",
    value: function getTrimmedRows() {
      return this.trimmedRowsMap.getTrimmedIndexes();
    }
    /**
     * Trims the rows provided in the array.
     *
     * @param {number[]} rows Array of physical row indexes.
     * @fires Hooks#beforeTrimRow
     * @fires Hooks#afterTrimRow
     */

  }, {
    key: "trimRows",
    value: function trimRows(rows) {
      var _this4 = this;

      var currentTrimConfig = this.getTrimmedRows();
      var isValidConfig = this.isValidConfig(rows);
      var destinationTrimConfig = currentTrimConfig;

      if (isValidConfig) {
        destinationTrimConfig = Array.from(new Set(currentTrimConfig.concat(rows)));
      }

      var allowTrimRow = this.hot.runHooks('beforeTrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig);

      if (allowTrimRow === false) {
        return;
      }

      if (isValidConfig) {
        this.hot.batch(function () {
          arrayEach(rows, function (physicalRow) {
            _this4.trimmedRowsMap.setValueAtIndex(physicalRow, true);
          });
        });
      }

      this.hot.runHooks('afterTrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig, isValidConfig && destinationTrimConfig.length > currentTrimConfig.length);
    }
    /**
     * Trims the row provided as physical row index (counting from 0).
     *
     * @param {...number} row Physical row index.
     */

  }, {
    key: "trimRow",
    value: function trimRow() {
      for (var _len = arguments.length, row = new Array(_len), _key = 0; _key < _len; _key++) {
        row[_key] = arguments[_key];
      }

      this.trimRows(row);
    }
    /**
     * Untrims the rows provided in the array.
     *
     * @param {number[]} rows Array of physical row indexes.
     * @fires Hooks#beforeUntrimRow
     * @fires Hooks#afterUntrimRow
     */

  }, {
    key: "untrimRows",
    value: function untrimRows(rows) {
      var currentTrimConfig = this.getTrimmedRows();
      var isValidConfig = this.isValidConfig(rows);
      var destinationTrimConfig = currentTrimConfig;
      var trimmingMapValues = this.trimmedRowsMap.getValues().slice();
      var isAnyRowUntrimmed = rows.length > 0;

      if (isValidConfig && isAnyRowUntrimmed) {
        // Preparing new values for trimming map.
        arrayEach(rows, function (physicalRow) {
          trimmingMapValues[physicalRow] = false;
        }); // Preparing new trimming config.

        destinationTrimConfig = arrayReduce(trimmingMapValues, function (trimmedIndexes, isTrimmed, physicalIndex) {
          if (isTrimmed) {
            trimmedIndexes.push(physicalIndex);
          }

          return trimmedIndexes;
        }, []);
      }

      var allowUntrimRow = this.hot.runHooks('beforeUntrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig && isAnyRowUntrimmed);

      if (allowUntrimRow === false) {
        return;
      }

      if (isValidConfig && isAnyRowUntrimmed) {
        this.trimmedRowsMap.setValues(trimmingMapValues);
      }

      this.hot.runHooks('afterUntrimRow', currentTrimConfig, destinationTrimConfig, isValidConfig && isAnyRowUntrimmed, isValidConfig && destinationTrimConfig.length < currentTrimConfig.length);
    }
    /**
     * Untrims the row provided as row index (counting from 0).
     *
     * @param {...number} row Physical row index.
     */

  }, {
    key: "untrimRow",
    value: function untrimRow() {
      for (var _len2 = arguments.length, row = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        row[_key2] = arguments[_key2];
      }

      this.untrimRows(row);
    }
    /**
     * Checks if given row is hidden.
     *
     * @param {number} physicalRow Physical row index.
     * @returns {boolean}
     */

  }, {
    key: "isTrimmed",
    value: function isTrimmed(physicalRow) {
      return this.trimmedRowsMap.getValueAtIndex(physicalRow) || false;
    }
    /**
     * Untrims all trimmed rows.
     */

  }, {
    key: "untrimAll",
    value: function untrimAll() {
      this.untrimRows(this.getTrimmedRows());
    }
    /**
     * Get if trim config is valid. Check whether all of the provided row indexes are within source data.
     *
     * @param {Array} trimmedRows List of physical row indexes.
     * @returns {boolean}
     */

  }, {
    key: "isValidConfig",
    value: function isValidConfig(trimmedRows) {
      var sourceRows = this.hot.countSourceRows();
      return trimmedRows.every(function (trimmedRow) {
        return Number.isInteger(trimmedRow) && trimmedRow >= 0 && trimmedRow < sourceRows;
      });
    }
    /**
     * On map initialized hook callback.
     *
     * @private
     */

  }, {
    key: "onMapInit",
    value: function onMapInit() {
      var _this5 = this;

      var trimmedRows = this.hot.getSettings().trimRows;

      if (Array.isArray(trimmedRows)) {
        this.hot.batch(function () {
          arrayEach(trimmedRows, function (physicalRow) {
            _this5.trimmedRowsMap.setValueAtIndex(physicalRow, true);
          });
        });
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hot.rowIndexMapper.unregisterMap('trimRows');

      _get(_getPrototypeOf(TrimRows.prototype), "destroy", this).call(this);
    }
  }]);

  return TrimRows;
}(BasePlugin);

registerPlugin('trimRows', TrimRows);
export default TrimRows;
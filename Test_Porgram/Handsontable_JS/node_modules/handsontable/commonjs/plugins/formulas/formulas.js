"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.default = void 0;

var _base = _interopRequireDefault(require("../_base"));

var _array = require("../../helpers/array");

var _object = require("../../helpers/object");

var _eventManager = _interopRequireDefault(require("../../eventManager"));

var _plugins = require("../../plugins");

var _utils = require("./utils");

var _sheet = _interopRequireDefault(require("./sheet"));

var _dataProvider = _interopRequireDefault(require("./dataProvider"));

var _undoRedoSnapshot = _interopRequireDefault(require("./undoRedoSnapshot"));

var _value = _interopRequireDefault(require("./cell/value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/**
 * The formulas plugin.
 *
 * @plugin Formulas
 */
var Formulas = /*#__PURE__*/function (_BasePlugin) {
  _inherits(Formulas, _BasePlugin);

  var _super = _createSuper(Formulas);

  function Formulas(hotInstance) {
    var _this;

    _classCallCheck(this, Formulas);

    _this = _super.call(this, hotInstance);
    /**
     * Instance of {@link EventManager}.
     *
     * @private
     * @type {EventManager}
     */

    _this.eventManager = new _eventManager.default(_assertThisInitialized(_this));
    /**
     * Instance of {@link DataProvider}.
     *
     * @private
     * @type {DataProvider}
     */

    _this.dataProvider = new _dataProvider.default(_this.hot);
    /**
     * Instance of {@link Sheet}.
     *
     * @private
     * @type {Sheet}
     */

    _this.sheet = new _sheet.default(_this.hot, _this.dataProvider);
    /**
     * Instance of {@link UndoRedoSnapshot}.
     *
     * @private
     * @type {UndoRedoSnapshot}
     */

    _this.undoRedoSnapshot = new _undoRedoSnapshot.default(_this.sheet);
    /**
     * Flag which indicates if table should be re-render after sheet recalculations.
     *
     * @type {boolean}
     * @default false
     * @private
     */

    _this._skipRendering = false;
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link Formulas#enablePlugin} method is called.
   *
   * @returns {boolean}
   */


  _createClass(Formulas, [{
    key: "isEnabled",
    value: function isEnabled() {
      /* eslint-disable no-unneeded-ternary */
      return this.hot.getSettings().formulas ? true : false;
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

      var settings = this.hot.getSettings().formulas;

      if ((0, _object.isObject)(settings)) {
        if ((0, _object.isObject)(settings.variables)) {
          (0, _object.objectEach)(settings.variables, function (value, name) {
            return _this2.setVariable(name, value);
          });
        }
      }

      this.addHook('afterColumnSort', function () {
        return _this2.onAfterColumnSort.apply(_this2, arguments);
      });
      this.addHook('afterCreateCol', function () {
        return _this2.onAfterCreateCol.apply(_this2, arguments);
      });
      this.addHook('afterCreateRow', function () {
        return _this2.onAfterCreateRow.apply(_this2, arguments);
      });
      this.addHook('afterLoadData', function () {
        return _this2.onAfterLoadData();
      });
      this.addHook('afterRemoveCol', function () {
        return _this2.onAfterRemoveCol.apply(_this2, arguments);
      });
      this.addHook('afterRemoveRow', function () {
        return _this2.onAfterRemoveRow.apply(_this2, arguments);
      });
      this.addHook('afterSetDataAtCell', function () {
        return _this2.onAfterSetDataAtCell.apply(_this2, arguments);
      });
      this.addHook('afterSetDataAtRowProp', function () {
        return _this2.onAfterSetDataAtCell.apply(_this2, arguments);
      });
      this.addHook('beforeColumnSort', function () {
        return _this2.onBeforeColumnSort.apply(_this2, arguments);
      });
      this.addHook('beforeCreateCol', function () {
        return _this2.onBeforeCreateCol.apply(_this2, arguments);
      });
      this.addHook('beforeCreateRow', function () {
        return _this2.onBeforeCreateRow.apply(_this2, arguments);
      });
      this.addHook('beforeRemoveCol', function () {
        return _this2.onBeforeRemoveCol.apply(_this2, arguments);
      });
      this.addHook('beforeRemoveRow', function () {
        return _this2.onBeforeRemoveRow.apply(_this2, arguments);
      });
      this.addHook('beforeValidate', function () {
        return _this2.onBeforeValidate.apply(_this2, arguments);
      });
      this.addHook('beforeValueRender', function () {
        return _this2.onBeforeValueRender.apply(_this2, arguments);
      });
      this.addHook('modifyData', function () {
        return _this2.onModifyData.apply(_this2, arguments);
      });
      this.sheet.addLocalHook('afterRecalculate', function () {
        return _this2.onSheetAfterRecalculate.apply(_this2, arguments);
      });

      _get(_getPrototypeOf(Formulas.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      _get(_getPrototypeOf(Formulas.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Returns cell value (evaluated from formula expression) at specified cell coords.
     *
     * @param {number} row Row index.
     * @param {number} column Column index.
     * @returns {*}
     */

  }, {
    key: "getCellValue",
    value: function getCellValue(row, column) {
      var cell = this.sheet.getCellAt(row, column);
      return cell ? cell.getError() || cell.getValue() : void 0;
    }
    /**
     * Checks if there are any formula evaluations made under specific cell coords.
     *
     * @param {number} row Row index.
     * @param {number} column Column index.
     * @returns {boolean}
     */

  }, {
    key: "hasComputedCellValue",
    value: function hasComputedCellValue(row, column) {
      return this.sheet.getCellAt(row, column) !== null;
    }
    /**
     * Recalculates all formulas (an algorithm will choose the best method of calculation).
     */

  }, {
    key: "recalculate",
    value: function recalculate() {
      this.sheet.recalculate();
    }
    /**
     * Recalculates all formulas (rebuild dependencies from scratch - slow approach).
     */

  }, {
    key: "recalculateFull",
    value: function recalculateFull() {
      this.sheet.recalculateFull();
    }
    /**
     * Recalculates all formulas (recalculate only changed cells - fast approach).
     */

  }, {
    key: "recalculateOptimized",
    value: function recalculateOptimized() {
      this.sheet.recalculateOptimized();
    }
    /**
     * Sets predefined variable name which can be visible while parsing formula expression.
     *
     * @param {string} name Variable name.
     * @param {*} value Variable value.
     */

  }, {
    key: "setVariable",
    value: function setVariable(name, value) {
      this.sheet.setVariable(name, value);
    }
    /**
     * Returns variable name.
     *
     * @param {string} name Variable name.
     * @returns {*}
     */

  }, {
    key: "getVariable",
    value: function getVariable(name) {
      return this.sheet.getVariable(name);
    }
    /**
     * Local hook listener for after sheet recalculation.
     *
     * @private
     * @param {Array} cells An array of recalculated/changed cells.
     */

  }, {
    key: "onSheetAfterRecalculate",
    value: function onSheetAfterRecalculate(cells) {
      if (this._skipRendering) {
        this._skipRendering = false;
        return;
      }

      var hot = this.hot;
      (0, _array.arrayEach)(cells, function (cellValue) {
        if (cellValue instanceof _value.default) {
          var row = cellValue.row,
              column = cellValue.column;
          hot.validateCell(hot.getDataAtCell(row, column), hot.getCellMeta(row, column), function () {});
        }
      });
      hot.render();
    }
    /**
     * On modify row data listener. It overwrites raw values into calculated ones and force upper case all formula expressions.
     *
     * @private
     * @param {number} row Row index.
     * @param {number} column Column index.
     * @param {object} valueHolder Value holder as an object to change value by reference.
     * @param {string} ioMode IO operation (`get` or `set`).
     */

  }, {
    key: "onModifyData",
    value: function onModifyData(row, column, valueHolder, ioMode) {
      if (ioMode === 'get' && this.hasComputedCellValue(row, column)) {
        valueHolder.value = this.getCellValue(row, column);
      } else if (ioMode === 'set' && (0, _utils.isFormulaExpression)(valueHolder.value)) {
        valueHolder.value = (0, _utils.toUpperCaseFormula)(valueHolder.value);
      }
    }
    /**
     * On before value render listener.
     *
     * @private
     * @param {*} value Value to render.
     * @returns {*}
     */

  }, {
    key: "onBeforeValueRender",
    value: function onBeforeValueRender(value) {
      var renderValue = value;

      if ((0, _utils.isFormulaExpressionEscaped)(renderValue)) {
        renderValue = (0, _utils.unescapeFormulaExpression)(renderValue);
      }

      return renderValue;
    }
    /**
     * On before validate listener.
     *
     * @private
     * @param {*} value Value to validate.
     * @param {number} row Row index.
     * @param {number} prop Column property.
     * @returns {*}
     */

  }, {
    key: "onBeforeValidate",
    value: function onBeforeValidate(value, row, prop) {
      var column = this.hot.propToCol(prop);
      var validateValue = value;

      if (this.hasComputedCellValue(row, column)) {
        validateValue = this.getCellValue(row, column);
      }

      return validateValue;
    }
    /**
     * `afterSetDataAtCell` listener.
     *
     * @private
     * @param {Array} changes Array of changes.
     * @param {string} [source] Source of changes.
     */

  }, {
    key: "onAfterSetDataAtCell",
    value: function onAfterSetDataAtCell(changes, source) {
      var _this3 = this;

      if (source === 'loadData') {
        return;
      }

      this.dataProvider.clearChanges();
      (0, _array.arrayEach)(changes, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 4),
            row = _ref2[0],
            column = _ref2[1],
            oldValue = _ref2[2],
            newValue = _ref2[3];

        var physicalColumn = _this3.hot.propToCol(column);

        var physicalRow = _this3.hot.toPhysicalRow(row);

        var value = newValue;

        if ((0, _utils.isFormulaExpression)(value)) {
          value = (0, _utils.toUpperCaseFormula)(value);
        }

        _this3.dataProvider.collectChanges(physicalRow, physicalColumn, value);

        if (oldValue !== value) {
          _this3.sheet.applyChanges(physicalRow, physicalColumn, value);
        }
      });
      this.recalculate();
    }
    /**
     * On before create row listener.
     *
     * @private
     * @param {number} row Row index.
     * @param {number} amount An amount of removed rows.
     * @param {string} source Source of method call.
     */

  }, {
    key: "onBeforeCreateRow",
    value: function onBeforeCreateRow(row, amount, source) {
      if (source === 'UndoRedo.undo') {
        this.undoRedoSnapshot.restore();
      }
    }
    /**
     * On after create row listener.
     *
     * @private
     * @param {number} row Row index.
     * @param {number} amount An amount of created rows.
     * @param {string} source Source of method call.
     */

  }, {
    key: "onAfterCreateRow",
    value: function onAfterCreateRow(row, amount, source) {
      this.sheet.alterManager.triggerAlter('insert_row', row, amount, source !== 'UndoRedo.undo');
    }
    /**
     * On before remove row listener.
     *
     * @private
     * @param {number} row Row index.
     * @param {number} amount An amount of removed rows.
     */

  }, {
    key: "onBeforeRemoveRow",
    value: function onBeforeRemoveRow(row, amount) {
      this.undoRedoSnapshot.save('row', row, amount);
    }
    /**
     * On after remove row listener.
     *
     * @private
     * @param {number} row Row index.
     * @param {number} amount An amount of removed rows.
     */

  }, {
    key: "onAfterRemoveRow",
    value: function onAfterRemoveRow(row, amount) {
      this.sheet.alterManager.triggerAlter('remove_row', row, amount);
    }
    /**
     * On before create column listener.
     *
     * @private
     * @param {number} column Column index.
     * @param {number} amount An amount of removed columns.
     * @param {string} source Source of method call.
     */

  }, {
    key: "onBeforeCreateCol",
    value: function onBeforeCreateCol(column, amount, source) {
      if (source === 'UndoRedo.undo') {
        this.undoRedoSnapshot.restore();
      }
    }
    /**
     * On after create column listener.
     *
     * @private
     * @param {number} column Column index.
     * @param {number} amount An amount of created columns.
     * @param {string} source Source of method call.
     */

  }, {
    key: "onAfterCreateCol",
    value: function onAfterCreateCol(column, amount, source) {
      this.sheet.alterManager.triggerAlter('insert_column', column, amount, source !== 'UndoRedo.undo');
    }
    /**
     * On before remove column listener.
     *
     * @private
     * @param {number} column Column index.
     * @param {number} amount An amount of removed columns.
     */

  }, {
    key: "onBeforeRemoveCol",
    value: function onBeforeRemoveCol(column, amount) {
      this.undoRedoSnapshot.save('column', column, amount);
    }
    /**
     * On after remove column listener.
     *
     * @private
     * @param {number} column Column index.
     * @param {number} amount An amount of created columns.
     */

  }, {
    key: "onAfterRemoveCol",
    value: function onAfterRemoveCol(column, amount) {
      this.sheet.alterManager.triggerAlter('remove_column', column, amount);
    }
    /**
     * On before column sorting listener.
     *
     * @private
     * @param {number} column Sorted column index.
     * @param {boolean} order Order type.
     */

  }, {
    key: "onBeforeColumnSort",
    value: function onBeforeColumnSort(column, order) {
      this.sheet.alterManager.prepareAlter('column_sorting', column, order);
    }
    /**
     * On after column sorting listener.
     *
     * @private
     * @param {number} column Sorted column index.
     * @param {boolean} order Order type.
     */

  }, {
    key: "onAfterColumnSort",
    value: function onAfterColumnSort(column, order) {
      this.sheet.alterManager.triggerAlter('column_sorting', column, order);
    }
    /**
     * On after load data listener.
     *
     * @private
     */

  }, {
    key: "onAfterLoadData",
    value: function onAfterLoadData() {
      this._skipRendering = true;
      this.recalculateFull();
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.dataProvider.destroy();
      this.dataProvider = null;
      this.sheet.destroy();
      this.sheet = null;

      _get(_getPrototypeOf(Formulas.prototype), "destroy", this).call(this);
    }
  }]);

  return Formulas;
}(_base.default);

(0, _plugins.registerPlugin)('formulas', Formulas);
var _default = Formulas;
exports.default = _default;
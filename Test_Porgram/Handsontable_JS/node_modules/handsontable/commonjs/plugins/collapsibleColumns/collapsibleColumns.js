"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.default = void 0;

var _array = require("../../helpers/array");

var _number = require("../../helpers/number");

var _console = require("../../helpers/console");

var _element = require("../../helpers/dom/element");

var _eventManager = _interopRequireDefault(require("../../eventManager"));

var _plugins = require("../../plugins");

var _event = require("../../helpers/dom/event");

var _translations = require("../../translations");

var _base = _interopRequireDefault(require("../_base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var actionDictionary = new Map([['collapse', {
  hideColumn: true,
  beforeHook: 'beforeColumnCollapse',
  afterHook: 'afterColumnCollapse'
}], ['expand', {
  hideColumn: false,
  beforeHook: 'beforeColumnExpand',
  afterHook: 'afterColumnExpand'
}]]);
/**
 * @plugin CollapsibleColumns
 *
 * @description
 * The {@link CollapsibleColumns} plugin allows collapsing of columns, covered by a header with the `colspan` property defined.
 *
 * Clicking the "collapse/expand" button collapses (or expands) all "child" headers except the first one.
 *
 * Setting the {@link Options#collapsibleColumns} property to `true` will display a "collapse/expand" button in every header
 * with a defined `colspan` property.
 *
 * To limit this functionality to a smaller group of headers, define the `collapsibleColumns` property as an array
 * of objects, as in the example below.
 *
 * @example
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   data: generateDataObj(),
 *   colHeaders: true,
 *   rowHeaders: true,
 *   nestedHeaders: true,
 *   // enable plugin
 *   collapsibleColumns: true,
 * });
 *
 * // or
 * const hot = new Handsontable(container, {
 *   data: generateDataObj(),
 *   colHeaders: true,
 *   rowHeaders: true,
 *   nestedHeaders: true,
 *   // enable and configure which columns can be collapsed
 *   collapsibleColumns: [
 *     {row: -4, col: 1, collapsible: true},
 *     {row: -3, col: 5, collapsible: true}
 *   ],
 * });
 * ```
 */

var _collapsedColumnsMap = new WeakMap();

var CollapsibleColumns = /*#__PURE__*/function (_BasePlugin) {
  _inherits(CollapsibleColumns, _BasePlugin);

  var _super = _createSuper(CollapsibleColumns);

  function CollapsibleColumns() {
    var _this;

    _classCallCheck(this, CollapsibleColumns);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "nestedHeadersPlugin", null);

    _defineProperty(_assertThisInitialized(_this), "eventManager", new _eventManager.default(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "headerStateManager", null);

    _collapsedColumnsMap.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    return _this;
  }

  _createClass(CollapsibleColumns, [{
    key: "isEnabled",

    /**
     * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
     * hook and if it returns `true` than the {@link CollapsibleColumns#enablePlugin} method is called.
     *
     * @returns {boolean}
     */
    value: function isEnabled() {
      return !!this.hot.getSettings().collapsibleColumns;
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

      var _this$hot$getSettings = this.hot.getSettings(),
          nestedHeaders = _this$hot$getSettings.nestedHeaders;

      if (!nestedHeaders) {
        (0, _console.warn)('You need to configure the Nested Headers plugin in order to use collapsible headers.');
      }

      _classPrivateFieldSet(this, _collapsedColumnsMap, new _translations.HidingMap());

      this.hot.columnIndexMapper.registerMap(this.pluginName, _classPrivateFieldGet(this, _collapsedColumnsMap));
      this.nestedHeadersPlugin = this.hot.getPlugin('nestedHeaders');
      this.headerStateManager = this.nestedHeadersPlugin.getStateManager();
      this.addHook('init', function () {
        return _this2.onInit();
      });
      this.addHook('afterLoadData', function () {
        return _this2.onAfterLoadData.apply(_this2, arguments);
      });
      this.addHook('afterGetColHeader', function (col, TH) {
        return _this2.onAfterGetColHeader(col, TH);
      });
      this.addHook('beforeOnCellMouseDown', function (event, coords, TD) {
        return _this2.onBeforeOnCellMouseDown(event, coords, TD);
      });

      _get(_getPrototypeOf(CollapsibleColumns.prototype), "enablePlugin", this).call(this); // @TODO: Workaround for broken plugin initialization abstraction (#6806).


      this.updatePlugin();
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      // @TODO: Workaround for broken plugin initialization abstraction (#6806).
      if (!this.hot.view) {
        return;
      }

      if (!this.nestedHeadersPlugin.detectedOverlappedHeaders) {
        var _this$hot$getSettings2 = this.hot.getSettings(),
            collapsibleColumns = _this$hot$getSettings2.collapsibleColumns;

        if (typeof collapsibleColumns === 'boolean') {
          // Add `collapsible: true` attribute to all headers with colspan higher than 1.
          this.headerStateManager.mapState(function (headerSettings) {
            return {
              collapsible: headerSettings.origColspan > 1
            };
          });
        } else if (Array.isArray(collapsibleColumns)) {
          this.headerStateManager.mergeStateWith(collapsibleColumns);
        }
      }

      _get(_getPrototypeOf(CollapsibleColumns.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      this.hot.columnIndexMapper.unregisterMap(this.pluginName);

      _classPrivateFieldSet(this, _collapsedColumnsMap, null);

      this.nestedHeadersPlugin = null;
      this.clearButtons();

      _get(_getPrototypeOf(CollapsibleColumns.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Clears the expand/collapse buttons.
     *
     * @private
     */

  }, {
    key: "clearButtons",
    value: function clearButtons() {
      if (!this.hot.view) {
        return;
      }

      var headerLevels = this.hot.view.wt.getSetting('columnHeaders').length;
      var mainHeaders = this.hot.view.wt.wtTable.THEAD;
      var topHeaders = this.hot.view.wt.wtOverlays.topOverlay.clone.wtTable.THEAD;
      var topLeftCornerHeaders = this.hot.view.wt.wtOverlays.topLeftCornerOverlay ? this.hot.view.wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.THEAD : null;

      var removeButton = function removeButton(button) {
        if (button) {
          button.parentNode.removeChild(button);
        }
      };

      (0, _number.rangeEach)(0, headerLevels - 1, function (i) {
        var masterLevel = mainHeaders.childNodes[i];
        var topLevel = topHeaders.childNodes[i];
        var topLeftCornerLevel = topLeftCornerHeaders ? topLeftCornerHeaders.childNodes[i] : null;
        (0, _number.rangeEach)(0, masterLevel.childNodes.length - 1, function (j) {
          var button = masterLevel.childNodes[j].querySelector('.collapsibleIndicator');
          removeButton(button);

          if (topLevel && topLevel.childNodes[j]) {
            button = topLevel.childNodes[j].querySelector('.collapsibleIndicator');
            removeButton(button);
          }

          if (topLeftCornerHeaders && topLeftCornerLevel && topLeftCornerLevel.childNodes[j]) {
            button = topLeftCornerLevel.childNodes[j].querySelector('.collapsibleIndicator');
            removeButton(button);
          }
        });
      }, true);
    }
    /**
     * Expands section at the provided coords.
     *
     * @param {object} coords Contains coordinates information. (`coords.row`, `coords.col`).
     */

  }, {
    key: "expandSection",
    value: function expandSection(coords) {
      this.toggleCollapsibleSection([coords], 'expand');
    }
    /**
     * Collapses section at the provided coords.
     *
     * @param {object} coords Contains coordinates information. (`coords.row`, `coords.col`).
     */

  }, {
    key: "collapseSection",
    value: function collapseSection(coords) {
      this.toggleCollapsibleSection([coords], 'collapse');
    }
    /**
     * Collapses or expand all collapsible sections, depending on the action parameter.
     *
     * @param {string} action 'collapse' or 'expand'.
     */

  }, {
    key: "toggleAllCollapsibleSections",
    value: function toggleAllCollapsibleSections(action) {
      var _this3 = this;

      var coords = this.headerStateManager.mapNodes(function (_ref) {
        var collapsible = _ref.collapsible,
            origColspan = _ref.origColspan,
            headerLevel = _ref.headerLevel,
            columnIndex = _ref.columnIndex;

        if (collapsible === true && origColspan > 1) {
          return {
            row: _this3.headerStateManager.levelToRowCoords(headerLevel),
            col: columnIndex
          };
        }
      });
      this.toggleCollapsibleSection(coords, action);
    }
    /**
     * Collapses all collapsible sections.
     */

  }, {
    key: "collapseAll",
    value: function collapseAll() {
      this.toggleAllCollapsibleSections('collapse');
    }
    /**
     * Expands all collapsible sections.
     */

  }, {
    key: "expandAll",
    value: function expandAll() {
      this.toggleAllCollapsibleSections('expand');
    }
    /**
     * Collapses/Expands a section.
     *
     * @param {Array} coords Array of coords - section coordinates.
     * @param {string} [action] Action definition ('collapse' or 'expand').
     * @fires Hooks#beforeColumnCollapse
     * @fires Hooks#beforeColumnExpand
     * @fires Hooks#afterColumnCollapse
     * @fires Hooks#afterColumnExpand
     */

  }, {
    key: "toggleCollapsibleSection",
    value: function toggleCollapsibleSection(coords, action) {
      var _this4 = this;

      if (!actionDictionary.has(action)) {
        throw new Error("Unsupported action is passed (".concat(action, ")."));
      }

      if (!Array.isArray(coords)) {
        return;
      } // Ignore coordinates which points to the cells range.


      var filteredCoords = (0, _array.arrayFilter)(coords, function (_ref2) {
        var row = _ref2.row;
        return row < 0;
      });
      var isActionPossible = filteredCoords.length > 0;
      (0, _array.arrayEach)(filteredCoords, function (_ref3) {
        var row = _ref3.row,
            column = _ref3.col;

        var _this4$headerStateMan = _this4.headerStateManager.getHeaderSettings(row, column),
            collapsible = _this4$headerStateMan.collapsible,
            isCollapsed = _this4$headerStateMan.isCollapsed;

        if (!collapsible || isCollapsed && action === 'collapse' || !isCollapsed && action === 'expand') {
          isActionPossible = false;
          return false;
        }
      });
      var nodeModRollbacks = [];
      var affectedColumnsIndexes = [];

      if (isActionPossible) {
        (0, _array.arrayEach)(filteredCoords, function (_ref4) {
          var row = _ref4.row,
              column = _ref4.col;

          var _this4$headerStateMan2 = _this4.headerStateManager.triggerNodeModification(action, row, column),
              colspanCompensation = _this4$headerStateMan2.colspanCompensation,
              affectedColumns = _this4$headerStateMan2.affectedColumns,
              rollbackModification = _this4$headerStateMan2.rollbackModification;

          if (colspanCompensation > 0) {
            affectedColumnsIndexes.push.apply(affectedColumnsIndexes, _toConsumableArray(affectedColumns));
            nodeModRollbacks.push(rollbackModification);
          }
        });
      }

      var currentCollapsedColumns = this.getCollapsedColumns();
      var destinationCollapsedColumns = [];

      if (action === 'collapse') {
        destinationCollapsedColumns = (0, _array.arrayUnique)([].concat(_toConsumableArray(currentCollapsedColumns), affectedColumnsIndexes));
      } else if (action === 'expand') {
        destinationCollapsedColumns = (0, _array.arrayFilter)(currentCollapsedColumns, function (index) {
          return !affectedColumnsIndexes.includes(index);
        });
      }

      var actionTranslator = actionDictionary.get(action);
      var isActionAllowed = this.hot.runHooks(actionTranslator.beforeHook, currentCollapsedColumns, destinationCollapsedColumns, isActionPossible);

      if (isActionAllowed === false) {
        // Rollback all header nodes modification (collapse or expand).
        (0, _array.arrayEach)(nodeModRollbacks, function (nodeModRollback) {
          nodeModRollback();
        });
        return;
      }

      this.hot.batch(function () {
        (0, _array.arrayEach)(affectedColumnsIndexes, function (visualColumn) {
          _classPrivateFieldGet(_this4, _collapsedColumnsMap).setValueAtIndex(_this4.hot.toPhysicalColumn(visualColumn), actionTranslator.hideColumn);
        });
      });
      var isActionPerformed = this.getCollapsedColumns().length !== currentCollapsedColumns.length;
      this.hot.runHooks(actionTranslator.afterHook, currentCollapsedColumns, destinationCollapsedColumns, isActionPossible, isActionPerformed);
      this.hot.render();
      this.hot.view.wt.wtOverlays.adjustElementsSize(true);
    }
    /**
     * Gets an array of physical indexes of collapsed columns.
     *
     * @private
     * @returns {number[]}
     */

  }, {
    key: "getCollapsedColumns",
    value: function getCollapsedColumns() {
      return _classPrivateFieldGet(this, _collapsedColumnsMap).getHiddenIndexes();
    }
    /**
     * Generates the indicator element.
     *
     * @private
     * @param {number} row Row index.
     * @param {number} column Column index.
     * @returns {HTMLElement}
     */

  }, {
    key: "generateIndicator",
    value: function generateIndicator(row, column) {
      var divEl = this.hot.rootDocument.createElement('div');
      var columnSettings = this.headerStateManager.getHeaderSettings(row, column);
      (0, _element.addClass)(divEl, 'collapsibleIndicator');

      if (columnSettings.isCollapsed) {
        (0, _element.addClass)(divEl, 'collapsed');
        (0, _element.fastInnerText)(divEl, '+');
      } else {
        (0, _element.addClass)(divEl, 'expanded');
        (0, _element.fastInnerText)(divEl, '-');
      }

      return divEl;
    }
    /**
     * Adds the indicator to the headers.
     *
     * @private
     * @param {number} column Column index.
     * @param {HTMLElement} TH TH element.
     */

  }, {
    key: "onAfterGetColHeader",
    value: function onAfterGetColHeader(column, TH) {
      var TR = TH.parentNode;
      var THEAD = TR.parentNode;
      var row = -1 * THEAD.childNodes.length + Array.prototype.indexOf.call(THEAD.childNodes, TR);

      var _this$headerStateMana = this.headerStateManager.getHeaderSettings(row, column),
          collapsible = _this$headerStateMana.collapsible,
          origColspan = _this$headerStateMana.origColspan;

      if (collapsible && origColspan > 1 && column >= this.hot.getSettings().fixedColumnsLeft) {
        var button = this.generateIndicator(row, column);
        TH.querySelector('div:first-child').appendChild(button);
      }
    }
    /**
     * Indicator mouse event callback.
     *
     * @private
     * @param {object} event Mouse event.
     * @param {object} coords Event coordinates.
     */

  }, {
    key: "onBeforeOnCellMouseDown",
    value: function onBeforeOnCellMouseDown(event, coords) {
      if ((0, _element.hasClass)(event.target, 'collapsibleIndicator')) {
        if ((0, _element.hasClass)(event.target, 'expanded')) {
          this.eventManager.fireEvent(event.target, 'mouseup');
          this.toggleCollapsibleSection([coords], 'collapse');
        } else if ((0, _element.hasClass)(event.target, 'collapsed')) {
          this.eventManager.fireEvent(event.target, 'mouseup');
          this.toggleCollapsibleSection([coords], 'expand');
        }

        (0, _event.stopImmediatePropagation)(event);
      }
    }
    /**
     * Updates the plugin state after HoT initialization.
     *
     * @private
     */

  }, {
    key: "onInit",
    value: function onInit() {
      // @TODO: Workaround for broken plugin initialization abstraction (#6806).
      this.updatePlugin();
    }
    /**
     * Updates the plugin state after new dataset load.
     *
     * @private
     * @param {Array[]} sourceData Array of arrays or array of objects containing data.
     * @param {boolean} initialLoad Flag that determines whether the data has been loaded
     *                              during the initialization.
     */

  }, {
    key: "onAfterLoadData",
    value: function onAfterLoadData(sourceData, initialLoad) {
      if (!initialLoad) {
        this.updatePlugin();
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _classPrivateFieldSet(this, _collapsedColumnsMap, null);

      this.hot.columnIndexMapper.unregisterMap(this.pluginName);

      _get(_getPrototypeOf(CollapsibleColumns.prototype), "destroy", this).call(this);
    }
  }]);

  return CollapsibleColumns;
}(_base.default);

(0, _plugins.registerPlugin)('collapsibleColumns', CollapsibleColumns);
var _default = CollapsibleColumns;
exports.default = _default;
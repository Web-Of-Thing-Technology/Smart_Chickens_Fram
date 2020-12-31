import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.map";
import "core-js/modules/es.object.freeze";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.reflect.get";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.weak-map";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Your Nested Headers plugin setup contains overlapping headers. This kind of configuration \n                        is currently not supported."], ["Your Nested Headers plugin setup contains overlapping headers. This kind of configuration\\x20\n                        is currently not supported."]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["Your Nested Headers plugin configuration is invalid. The settings has to be \n                        passed as an array of arrays e.q. [['A1', { label: 'A2', colspan: 2 }]]"], ["Your Nested Headers plugin configuration is invalid. The settings has to be\\x20\n                        passed as an array of arrays e.q. [['A1', { label: 'A2', colspan: 2 }]]"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

import { addClass, removeClass, fastInnerHTML, empty } from '../../helpers/dom/element';
import { arrayEach } from '../../helpers/array';
import { toSingleLine } from '../../helpers/templateLiteralTag';
import { warn } from '../../helpers/console';
import { registerPlugin } from '../../plugins';
import BasePlugin from '../_base';
import StateManager from './stateManager';
import GhostTable from './utils/ghostTable';

var _stateManager = new WeakMap();

/**
 * @plugin NestedHeaders
 * @description
 * The plugin allows to create a nested header structure, using the HTML's colspan attribute.
 *
 * To make any header wider (covering multiple table columns), it's corresponding configuration array element should be
 * provided as an object with `label` and `colspan` properties. The `label` property defines the header's label,
 * while the `colspan` property defines a number of columns that the header should cover.
 *
 * __Note__ that the plugin supports a *nested* structure, which means, any header cannot be wider than it's "parent". In
 * other words, headers cannot overlap each other.
 * @example
 *
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   data: getData(),
 *   nestedHeaders: [
 *     ['A', {label: 'B', colspan: 8}, 'C'],
 *     ['D', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, 'G'],
 *     ['H', {label: 'I', colspan: 2}, {label: 'J', colspan: 2}, {label: 'K', colspan: 2}, {label: 'L', colspan: 2}, 'M'],
 *     ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
 *  ],
 * ```
 */
var NestedHeaders = /*#__PURE__*/function (_BasePlugin) {
  _inherits(NestedHeaders, _BasePlugin);

  var _super = _createSuper(NestedHeaders);

  function NestedHeaders() {
    var _this;

    _classCallCheck(this, NestedHeaders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _stateManager.set(_assertThisInitialized(_this), {
      writable: true,
      value: new StateManager()
    });

    _defineProperty(_assertThisInitialized(_this), "ghostTable", new GhostTable(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "detectedOverlappedHeaders", false);

    return _this;
  }

  _createClass(NestedHeaders, [{
    key: "isEnabled",

    /**
     * Check if plugin is enabled.
     *
     * @returns {boolean}
     */
    value: function isEnabled() {
      return !!this.hot.getSettings().nestedHeaders;
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

      if (!Array.isArray(nestedHeaders) || !Array.isArray(nestedHeaders[0])) {
        warn(toSingleLine(_templateObject()));
      }

      this.addHook('init', function () {
        return _this2.onInit();
      });
      this.addHook('afterLoadData', function () {
        return _this2.onAfterLoadData.apply(_this2, arguments);
      });
      this.addHook('afterOnCellMouseDown', function (event, coords) {
        return _this2.onAfterOnCellMouseDown(event, coords);
      });
      this.addHook('beforeOnCellMouseOver', function (event, coords, TD, blockCalculations) {
        return _this2.onBeforeOnCellMouseOver(event, coords, TD, blockCalculations);
      });
      this.addHook('afterGetColumnHeaderRenderers', function (array) {
        return _this2.onAfterGetColumnHeaderRenderers(array);
      });
      this.addHook('modifyColWidth', function (width, column) {
        return _this2.onModifyColWidth(width, column);
      });
      this.addHook('afterViewportColumnCalculatorOverride', function (calc) {
        return _this2.onAfterViewportColumnCalculatorOverride(calc);
      });

      _get(_getPrototypeOf(NestedHeaders.prototype), "enablePlugin", this).call(this);

      this.updatePlugin(); // @TODO: Workaround for broken plugin initialization abstraction.
    }
    /**
     * Updates the plugin state. This method is executed when {@link Core#updateSettings} is invoked.
     */

  }, {
    key: "updatePlugin",
    value: function updatePlugin() {
      if (!this.hot.view) {
        // @TODO: Workaround for broken plugin initialization abstraction.
        return;
      }

      var _this$hot$getSettings2 = this.hot.getSettings(),
          nestedHeaders = _this$hot$getSettings2.nestedHeaders;

      _classPrivateFieldGet(this, _stateManager).setColumnsLimit(this.hot.countCols());

      if (Array.isArray(nestedHeaders)) {
        this.detectedOverlappedHeaders = _classPrivateFieldGet(this, _stateManager).setState(nestedHeaders);
      }

      if (this.detectedOverlappedHeaders) {
        warn(toSingleLine(_templateObject2()));
      }

      this.ghostTable.buildWidthsMapper();

      _get(_getPrototypeOf(NestedHeaders.prototype), "updatePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      this.clearColspans();

      _classPrivateFieldGet(this, _stateManager).clear();

      this.ghostTable.clear();

      _get(_getPrototypeOf(NestedHeaders.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Returns an instance of the internal state manager of the plugin.
     *
     * @private
     * @returns {StateManager}
     */

  }, {
    key: "getStateManager",
    value: function getStateManager() {
      return _classPrivateFieldGet(this, _stateManager);
    }
    /**
     * Gets a total number of headers levels.
     *
     * @private
     * @returns {number}
     */

  }, {
    key: "getLayersCount",
    value: function getLayersCount() {
      return _classPrivateFieldGet(this, _stateManager).getLayersCount();
    }
    /**
     * Gets column settings for a specified header. The returned object contains
     * information about the header label, its colspan length, or if it is hidden
     * in the header renderers.
     *
     * @private
     * @param {number} headerLevel Header level (0 = most distant to the table).
     * @param {number} columnIndex A visual column index.
     * @returns {object}
     */

  }, {
    key: "getHeaderSettings",
    value: function getHeaderSettings(headerLevel, columnIndex) {
      return _classPrivateFieldGet(this, _stateManager).getHeaderSettings(headerLevel, columnIndex);
    }
    /**
     * Gets HTML elements for specified visual column index and header level from
     * all overlays except master.
     *
     * @private
     * @param {number} columnIndex A visual column index.
     * @param {number} headerLevel Header level (0 = most distant to the table).
     * @returns {HTMLElement[]}
     */

  }, {
    key: "getColumnHeaders",
    value: function getColumnHeaders(columnIndex, headerLevel) {
      var wtOverlays = this.hot.view.wt.wtOverlays;
      var renderedColumnIndex = this.hot.columnIndexMapper.getRenderableFromVisualIndex(columnIndex);
      var headers = [];

      if (renderedColumnIndex !== null) {
        if (wtOverlays.topOverlay) {
          headers.push(wtOverlays.topOverlay.clone.wtTable.getColumnHeader(renderedColumnIndex, headerLevel));
        }

        if (wtOverlays.topLeftCornerOverlay) {
          headers.push(wtOverlays.topLeftCornerOverlay.clone.wtTable.getColumnHeader(renderedColumnIndex, headerLevel));
        }
      }

      return headers;
    }
    /**
     * Clear the colspans remaining after plugin usage.
     *
     * @private
     */

  }, {
    key: "clearColspans",
    value: function clearColspans() {
      if (!this.hot.view) {
        return;
      }

      var wt = this.hot.view.wt;
      var headerLevels = wt.getSetting('columnHeaders').length;
      var mainHeaders = wt.wtTable.THEAD;
      var topHeaders = wt.wtOverlays.topOverlay.clone.wtTable.THEAD;
      var topLeftCornerHeaders = wt.wtOverlays.topLeftCornerOverlay ? wt.wtOverlays.topLeftCornerOverlay.clone.wtTable.THEAD : null;

      for (var i = 0; i < headerLevels; i++) {
        var masterLevel = mainHeaders.childNodes[i];

        if (!masterLevel) {
          break;
        }

        var topLevel = topHeaders.childNodes[i];
        var topLeftCornerLevel = topLeftCornerHeaders ? topLeftCornerHeaders.childNodes[i] : null;

        for (var j = 0, masterNodes = masterLevel.childNodes.length; j < masterNodes; j++) {
          masterLevel.childNodes[j].removeAttribute('colspan');
          removeClass(masterLevel.childNodes[j], 'hiddenHeader');

          if (topLevel && topLevel.childNodes[j]) {
            topLevel.childNodes[j].removeAttribute('colspan');
            removeClass(topLevel.childNodes[j], 'hiddenHeader');
          }

          if (topLeftCornerHeaders && topLeftCornerLevel && topLeftCornerLevel.childNodes[j]) {
            topLeftCornerLevel.childNodes[j].removeAttribute('colspan');
            removeClass(topLeftCornerLevel.childNodes[j], 'hiddenHeader');
          }
        }
      }
    }
    /**
     * Generates the appropriate header renderer for a header row.
     *
     * @private
     * @param {number} headerLevel The index of header level counting from the top (positive
     *                             values counting from 0 to N).
     * @returns {Function}
     * @fires Hooks#afterGetColHeader
     */

  }, {
    key: "headerRendererFactory",
    value: function headerRendererFactory(headerLevel) {
      var _this3 = this;

      var fixedColumnsLeft = this.hot.getSettings().fixedColumnsLeft || 0;
      return function (renderedColumnIndex, TH) {
        var _this3$hot = _this3.hot,
            rootDocument = _this3$hot.rootDocument,
            columnIndexMapper = _this3$hot.columnIndexMapper,
            view = _this3$hot.view;
        var visualColumnsIndex = columnIndexMapper.getVisualFromRenderableIndex(renderedColumnIndex);

        if (visualColumnsIndex === null) {
          visualColumnsIndex = renderedColumnIndex;
        }

        TH.removeAttribute('colspan');
        removeClass(TH, 'hiddenHeader');

        var _classPrivateFieldGet2 = _classPrivateFieldGet(_this3, _stateManager).getHeaderSettings(headerLevel, visualColumnsIndex),
            colspan = _classPrivateFieldGet2.colspan,
            label = _classPrivateFieldGet2.label,
            isHidden = _classPrivateFieldGet2.isHidden;

        if (isHidden === true) {
          addClass(TH, 'hiddenHeader');
        } else if (colspan > 1) {
          var _view$wt$wtOverlays$t, _view$wt$wtOverlays$l;

          var isTopLeftOverlay = (_view$wt$wtOverlays$t = view.wt.wtOverlays.topLeftCornerOverlay) === null || _view$wt$wtOverlays$t === void 0 ? void 0 : _view$wt$wtOverlays$t.clone.wtTable.THEAD.contains(TH);
          var isLeftOverlay = (_view$wt$wtOverlays$l = view.wt.wtOverlays.leftOverlay) === null || _view$wt$wtOverlays$l === void 0 ? void 0 : _view$wt$wtOverlays$l.clone.wtTable.THEAD.contains(TH); // Check if there is a fixed column enabled, if so then reduce colspan to fixed column width.

          var correctedColspan = isTopLeftOverlay || isLeftOverlay ? Math.min(colspan, fixedColumnsLeft - visualColumnsIndex) : colspan;

          if (correctedColspan > 1) {
            TH.setAttribute('colspan', correctedColspan);
          }
        }

        var divEl = rootDocument.createElement('div');
        var spanEl = rootDocument.createElement('span');
        addClass(divEl, 'relative');
        addClass(spanEl, 'colHeader');
        fastInnerHTML(spanEl, label);
        divEl.appendChild(spanEl);
        empty(TH);
        TH.appendChild(divEl);

        _this3.hot.runHooks('afterGetColHeader', visualColumnsIndex, TH);
      };
    }
    /**
     * Updates headers highlight in nested structure.
     *
     * @private
     */

  }, {
    key: "updateHeadersHighlight",
    value: function updateHeadersHighlight() {
      var _this4 = this;

      var hot = this.hot;
      var selection = hot.getSelectedRange();

      if (selection === void 0) {
        return;
      }

      var hotSettings = this.hot.getSettings();

      var classNameModifier = function classNameModifier(className) {
        return function (TH, modifier) {
          return function () {
            return TH ? modifier(TH, className) : null;
          };
        };
      };

      var highlightHeader = classNameModifier(hotSettings.currentHeaderClassName);
      var activeHeader = classNameModifier(hotSettings.activeHeaderClassName);
      var selectionByHeader = hot.selection.isSelectedByColumnHeader() || hot.selection.isSelectedByCorner();

      var layersCount = _classPrivateFieldGet(this, _stateManager).getLayersCount();

      var activeHeaderChanges = new Map();
      var highlightHeaderChanges = new Map();
      arrayEach(selection, function (selectionLayer) {
        var coordsFrom = selectionLayer.getTopLeftCorner();
        var coordsTo = selectionLayer.getTopRightCorner(); // If the beginning of the selection (columnFrom) starts in-between colspaned
        // header shift the columnFrom to the header position where it starts.

        var columnFrom = _classPrivateFieldGet(_this4, _stateManager).findLeftMostColumnIndex(-1, coordsFrom.col);

        var columnTo = coordsTo.col;
        var columnSelectionWidth = columnTo - columnFrom + 1;
        var columnCursor = 0;

        for (var column = columnFrom; column <= columnTo; column++) {
          var _loop = function _loop(level) {
            var _classPrivateFieldGet3 = _classPrivateFieldGet(_this4, _stateManager).getHeaderSettings(level, column),
                colspan = _classPrivateFieldGet3.colspan,
                isHidden = _classPrivateFieldGet3.isHidden;

            var isFirstLayer = level === layersCount - 1;
            var isOutOfRange = !isFirstLayer && columnCursor + colspan > columnSelectionWidth;

            var THs = _this4.getColumnHeaders(column, level);

            arrayEach(THs, function (TH) {
              if (isOutOfRange || isHidden) {
                // Reset CSS classes state (workaround for WoT issue which can not render that classes
                // for nested header structure properly).
                activeHeaderChanges.set(TH, activeHeader(TH, removeClass));
                highlightHeaderChanges.set(TH, highlightHeader(TH, removeClass));
              } else if (selectionByHeader) {
                activeHeaderChanges.set(TH, activeHeader(TH, addClass));
                highlightHeaderChanges.set(TH, highlightHeader(TH, addClass));
              } else if (isFirstLayer) {
                highlightHeaderChanges.set(TH, highlightHeader(TH, addClass));
              } else {
                highlightHeaderChanges.set(TH, highlightHeader(TH, removeClass));
              }
            });
          };

          // Traverse header layers from bottom to top.
          for (var level = layersCount - 1; level > -1; level--) {
            _loop(level);
          }

          columnCursor += 1;
        }
      });
      arrayEach(activeHeaderChanges, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            classModifer = _ref2[1];

        return void classModifer();
      });
      arrayEach(highlightHeaderChanges, function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            classModifer = _ref4[1];

        return void classModifer();
      });
      activeHeaderChanges.clear();
      highlightHeaderChanges.clear();
    }
    /**
     * Select all nested headers of clicked cell.
     *
     * @private
     * @param {MouseEvent} event Mouse event.
     * @param {CellCoords} coords Clicked cell coords.
     */

  }, {
    key: "onAfterOnCellMouseDown",
    value: function onAfterOnCellMouseDown(event, coords) {
      if (coords.row < 0) {
        var _classPrivateFieldGet4 = _classPrivateFieldGet(this, _stateManager).getHeaderSettings(coords.row, coords.col),
            origColspan = _classPrivateFieldGet4.origColspan;

        if (origColspan > 1) {
          this.hot.selection.selectColumns(coords.col, coords.col + origColspan - 1);
        }
      }
    }
    /**
     * Make the header-selection properly select the nested headers.
     *
     * @private
     * @param {MouseEvent} event Mouse event.
     * @param {CellCoords} coords Clicked cell coords.
     * @param {HTMLElement} TD The cell element.
     * @param {object} blockCalculations An object which allows or disallows changing the selection for the particular axies.
     */

  }, {
    key: "onBeforeOnCellMouseOver",
    value: function onBeforeOnCellMouseOver(event, coords, TD, blockCalculations) {
      if (coords.row >= 0 || coords.col < 0 || !this.hot.view.isMouseDown()) {
        return;
      }

      var _this$hot$getSelected = this.hot.getSelectedRangeLast(),
          from = _this$hot$getSelected.from,
          to = _this$hot$getSelected.to;

      var _classPrivateFieldGet5 = _classPrivateFieldGet(this, _stateManager).getHeaderSettings(coords.row, coords.col),
          origColspan = _classPrivateFieldGet5.origColspan;

      var lastColIndex = coords.col + origColspan - 1;
      var changeDirection = false;

      if (from.col <= to.col) {
        if (coords.col < from.col && lastColIndex === to.col || coords.col < from.col && lastColIndex < from.col || coords.col < from.col && lastColIndex >= from.col && lastColIndex < to.col) {
          changeDirection = true;
        }
      } else if (coords.col < to.col && lastColIndex > from.col || coords.col > from.col || coords.col <= to.col && lastColIndex > from.col || coords.col > to.col && lastColIndex > from.col) {
        changeDirection = true;
      }

      if (changeDirection) {
        var _ref5 = [to.col, from.col];
        from.col = _ref5[0];
        to.col = _ref5[1];
      }

      if (origColspan > 1) {
        var _this$hot;

        blockCalculations.column = true;
        blockCalculations.cell = true;
        var columnRange = [];

        if (from.col === to.col) {
          if (lastColIndex <= from.col && coords.col < from.col) {
            columnRange.push(to.col, coords.col);
          } else {
            columnRange.push(coords.col < from.col ? coords.col : from.col, lastColIndex > to.col ? lastColIndex : to.col);
          }
        }

        if (from.col < to.col) {
          columnRange.push(coords.col < from.col ? coords.col : from.col, lastColIndex);
        }

        if (from.col > to.col) {
          columnRange.push(from.col, coords.col);
        }

        (_this$hot = this.hot).selectColumns.apply(_this$hot, columnRange);
      }
    }
    /**
     * `afterGetColumnHeader` hook callback - prepares the header structure.
     *
     * @private
     * @param {Array} renderersArray Array of renderers.
     */

  }, {
    key: "onAfterGetColumnHeaderRenderers",
    value: function onAfterGetColumnHeaderRenderers(renderersArray) {
      if (renderersArray) {
        renderersArray.length = 0;

        for (var headerLayer = 0; headerLayer < _classPrivateFieldGet(this, _stateManager).getLayersCount(); headerLayer++) {
          renderersArray.push(this.headerRendererFactory(headerLayer));
        }
      }

      this.updateHeadersHighlight();
    }
    /**
     * Make the renderer render the first nested column in its entirety.
     *
     * @private
     * @param {object} calc Viewport column calculator.
     */

  }, {
    key: "onAfterViewportColumnCalculatorOverride",
    value: function onAfterViewportColumnCalculatorOverride(calc) {
      var newStartColumn = calc.startColumn;

      for (var headerLayer = 0; headerLayer < _classPrivateFieldGet(this, _stateManager).getLayersCount(); headerLayer++) {
        var startColumn = _classPrivateFieldGet(this, _stateManager).findLeftMostColumnIndex(headerLayer, calc.startColumn);

        var renderedStartColumn = this.hot.columnIndexMapper.getRenderableFromVisualIndex(startColumn);

        if (renderedStartColumn < calc.startColumn) {
          newStartColumn = renderedStartColumn;
          break;
        }
      }

      calc.startColumn = newStartColumn;
    }
    /**
     * `modifyColWidth` hook callback - returns width from cache, when is greater than incoming from hook.
     *
     * @private
     * @param {number} width Width from hook.
     * @param {number} column Visual index of an column.
     * @returns {number}
     */

  }, {
    key: "onModifyColWidth",
    value: function onModifyColWidth(width, column) {
      var cachedWidth = this.ghostTable.widthsCache[column];
      return width > cachedWidth ? width : cachedWidth;
    }
    /**
     * Updates the plugin state after HoT initialization.
     *
     * @private
     */

  }, {
    key: "onInit",
    value: function onInit() {
      // @TODO: Workaround for broken plugin initialization abstraction.
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
      _classPrivateFieldSet(this, _stateManager, null);

      _get(_getPrototypeOf(NestedHeaders.prototype), "destroy", this).call(this);
    }
  }]);

  return NestedHeaders;
}(BasePlugin);

registerPlugin('nestedHeaders', NestedHeaders);
export default NestedHeaders;
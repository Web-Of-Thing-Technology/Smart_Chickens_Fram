import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.reflect.get";
import "core-js/modules/es.regexp.to-string";
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

import BasePlugin from './../_base';
import DataObserver from './dataObserver';
import { arrayEach } from './../../helpers/array';
import { warn } from '../../helpers/console';
import { registerPlugin } from './../../plugins'; // Handsontable.hooks.register('afterChangesObserved');

/**
 * @plugin ObserveChanges
 *
 * @deprecated This plugin is deprecated and will be removed in the next major release.
 * @description
 * This plugin allows to observe data source changes. By default, the plugin is declared as `undefined`, which makes it
 * disabled. Enabling this plugin switches the table into one-way data binding where changes are applied into the data
 * source (outside from the table) will be automatically reflected in the table.
 *
 * @example
 * ```js
 * // as a boolean
 * observeChanges: true,
 * ```
 *
 * To configure this plugin see {@link Options#observeChanges}.
 */

var ObserveChanges = /*#__PURE__*/function (_BasePlugin) {
  _inherits(ObserveChanges, _BasePlugin);

  var _super = _createSuper(ObserveChanges);

  function ObserveChanges(hotInstance) {
    var _this;

    _classCallCheck(this, ObserveChanges);

    _this = _super.call(this, hotInstance);
    /**
     * Instance of {@link DataObserver}.
     *
     * @private
     * @type {DataObserver}
     */

    _this.observer = null;
    return _this;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` than the {@link ObserveChanges#enablePlugin} method is called.
   *
   * @returns {boolean}
   */


  _createClass(ObserveChanges, [{
    key: "isEnabled",
    value: function isEnabled() {
      return this.hot.getSettings().observeChanges;
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

      if (!this.observer) {
        warn('The Observe Changes plugin is deprecated and will be removed in the next major release');
        this.observer = new DataObserver(this.hot.getSettings().data);

        this._exposePublicApi();
      }

      this.observer.addLocalHook('change', function (patches) {
        return _this2.onDataChange(patches);
      });
      this.addHook('afterCreateRow', function () {
        return _this2.onAfterTableAlter();
      });
      this.addHook('afterRemoveRow', function () {
        return _this2.onAfterTableAlter();
      });
      this.addHook('afterCreateCol', function () {
        return _this2.onAfterTableAlter();
      });
      this.addHook('afterRemoveCol', function () {
        return _this2.onAfterTableAlter();
      });
      this.addHook('afterChange', function (changes, source) {
        return _this2.onAfterTableAlter(source);
      });
      this.addHook('afterLoadData', function (sourceData, firstRun) {
        return _this2.onAfterLoadData(sourceData, firstRun);
      });

      _get(_getPrototypeOf(ObserveChanges.prototype), "enablePlugin", this).call(this);
    }
    /**
     * Disables the plugin functionality for this Handsontable instance.
     */

  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      if (this.observer) {
        this.observer.destroy();
        this.observer = null;

        this._deletePublicApi();
      }

      _get(_getPrototypeOf(ObserveChanges.prototype), "disablePlugin", this).call(this);
    }
    /**
     * Data change observer.
     *
     * @private
     * @param {Array} patches An array of objects which every item defines coordinates where data was changed.
     */

  }, {
    key: "onDataChange",
    value: function onDataChange(patches) {
      var _this3 = this;

      var render = false;

      if (!this.observer.isPaused()) {
        var sourceName = "".concat(this.pluginName, ".change");
        var actions = {
          add: function add(patch) {
            var _ref = [patch.row, patch.col],
                visualRow = _ref[0],
                visualColumn = _ref[1];

            if (isNaN(visualColumn)) {
              _this3.hot.rowIndexMapper.insertIndexes(visualRow, 1);

              _this3.hot.runHooks('afterCreateRow', visualRow, 1, sourceName);
            } else {
              _this3.hot.columnIndexMapper.insertIndexes(visualColumn, 1);

              _this3.hot.runHooks('afterCreateCol', visualColumn, 1, sourceName);
            }
          },
          remove: function remove(patch) {
            var _ref2 = [patch.row, patch.col],
                visualRow = _ref2[0],
                visualColumn = _ref2[1];

            if (isNaN(visualColumn)) {
              _this3.hot.rowIndexMapper.removeIndexes([visualRow]);

              _this3.hot.runHooks('afterRemoveRow', visualRow, 1, sourceName);
            } else {
              _this3.hot.columnIndexMapper.removeIndexes([visualColumn]);

              _this3.hot.runHooks('afterRemoveCol', visualColumn, 1, sourceName);
            }
          },
          replace: function replace(patch) {
            _this3.hot.runHooks('afterChange', [[patch.row, patch.col, null, patch.value]], sourceName);
          }
        };
        arrayEach(patches, function (patch) {
          if (actions[patch.op]) {
            actions[patch.op](patch);
          }
        });
        render = true;
      }

      this.hot.runHooks('afterChangesObserved');

      if (render) {
        this.hot.render();
      }
    }
    /**
     * On after table alter listener. Prevents infinity loop between internal and external data changing.
     *
     * @private
     * @param {string} source The identifier of the code that performed the action.
     */

  }, {
    key: "onAfterTableAlter",
    value: function onAfterTableAlter(source) {
      var _this4 = this;

      if (source !== 'loadData') {
        this.observer.pause();
        this.hot.addHookOnce('afterChangesObserved', function () {
          return _this4.observer.resume();
        });
      }
    }
    /**
     * On after load data listener.
     *
     * @private
     * @param {Array} sourceData Source data array.
     * @param {boolean} firstRun `true` if event was fired first time.
     */

  }, {
    key: "onAfterLoadData",
    value: function onAfterLoadData(sourceData, firstRun) {
      if (!firstRun) {
        this.observer.setObservedData(sourceData);
      }
    }
    /**
     * Destroys the plugin instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.observer) {
        this.observer.destroy();

        this._deletePublicApi();
      }

      _get(_getPrototypeOf(ObserveChanges.prototype), "destroy", this).call(this);
    }
    /**
     * Expose plugins methods to the core.
     *
     * @private
     */

  }, {
    key: "_exposePublicApi",
    value: function _exposePublicApi() {
      var _this5 = this;

      var hot = this.hot;

      hot.pauseObservingChanges = function () {
        return _this5.observer.pause();
      };

      hot.resumeObservingChanges = function () {
        return _this5.observer.resume();
      };

      hot.isPausedObservingChanges = function () {
        return _this5.observer.isPaused();
      };
    }
    /**
     * Deletes all previously exposed methods.
     *
     * @private
     */

  }, {
    key: "_deletePublicApi",
    value: function _deletePublicApi() {
      var hot = this.hot;
      delete hot.pauseObservingChanges;
      delete hot.resumeObservingChanges;
      delete hot.isPausedObservingChanges;
    }
  }]);

  return ObserveChanges;
}(BasePlugin);

export default ObserveChanges;
registerPlugin('observeChanges', ObserveChanges);
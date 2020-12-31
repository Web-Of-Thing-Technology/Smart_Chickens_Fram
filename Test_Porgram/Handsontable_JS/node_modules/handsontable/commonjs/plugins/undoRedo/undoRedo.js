"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.default = void 0;

var _pluginHooks = _interopRequireDefault(require("./../../pluginHooks"));

var _array = require("./../../helpers/array");

var _number = require("./../../helpers/number");

var _object = require("./../../helpers/object");

var _event = require("./../../helpers/dom/event");

var _utils = require("./../contextMenu/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @description
 * Handsontable UndoRedo plugin allows to undo and redo certain actions done in the table.
 *
 * __Note__, that not all actions are currently undo-able. The UndoRedo plugin is enabled by default.
 * @example
 * ```js
 * undo: true
 * ```
 * @class UndoRedo
 * @plugin UndoRedo
 * @param {Core} instance The Handsontable instance.
 */
function UndoRedo(instance) {
  var plugin = this;
  this.instance = instance;
  this.doneActions = [];
  this.undoneActions = [];
  this.ignoreNewActions = false;
  instance.addHook('afterChange', function (changes, source) {
    var changesLen = changes && changes.length;

    if (!changesLen || ['UndoRedo.undo', 'UndoRedo.redo', 'MergeCells'].includes(source)) {
      return;
    }

    var hasDifferences = changes.find(function (change) {
      var _change = _slicedToArray(change, 4),
          oldValue = _change[2],
          newValue = _change[3];

      return oldValue !== newValue;
    });

    if (!hasDifferences) {
      return;
    }

    var clonedChanges = changes.reduce(function (arr, change) {
      arr.push(_toConsumableArray(change));
      return arr;
    }, []);
    (0, _array.arrayEach)(clonedChanges, function (change) {
      change[1] = instance.propToCol(change[1]);
    });
    var selected = changesLen > 1 ? this.getSelected() : [[clonedChanges[0][0], clonedChanges[0][1]]];
    plugin.done(new UndoRedo.ChangeAction(clonedChanges, selected));
  });
  instance.addHook('afterCreateRow', function (index, amount, source) {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.undo' || source === 'auto') {
      return;
    }

    var action = new UndoRedo.CreateRowAction(index, amount);
    plugin.done(action);
  });
  instance.addHook('beforeRemoveRow', function (index, amount, logicRows, source) {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.redo' || source === 'auto') {
      return;
    }

    var originalData = plugin.instance.getSourceDataArray();
    var rowIndex = (originalData.length + index) % originalData.length;
    var physicalRowIndex = instance.toPhysicalRow(rowIndex);
    var removedData = (0, _object.deepClone)(originalData.slice(physicalRowIndex, physicalRowIndex + amount));
    plugin.done(new UndoRedo.RemoveRowAction(rowIndex, removedData, instance.getSettings().fixedRowsBottom, instance.getSettings().fixedRowsTop));
  });
  instance.addHook('afterCreateCol', function (index, amount, source) {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.redo' || source === 'auto') {
      return;
    }

    plugin.done(new UndoRedo.CreateColumnAction(index, amount));
  });
  instance.addHook('beforeRemoveCol', function (index, amount, logicColumns, source) {
    if (source === 'UndoRedo.undo' || source === 'UndoRedo.redo' || source === 'auto') {
      return;
    }

    var originalData = plugin.instance.getSourceDataArray();
    var columnIndex = (plugin.instance.countCols() + index) % plugin.instance.countCols();
    var removedData = [];
    var headers = [];
    var indexes = [];
    (0, _number.rangeEach)(originalData.length - 1, function (i) {
      var column = [];
      var origRow = originalData[i];
      (0, _number.rangeEach)(columnIndex, columnIndex + (amount - 1), function (j) {
        column.push(origRow[instance.toPhysicalColumn(j)]);
      });
      removedData.push(column);
    });
    (0, _number.rangeEach)(amount - 1, function (i) {
      indexes.push(instance.toPhysicalColumn(columnIndex + i));
    });

    if (Array.isArray(instance.getSettings().colHeaders)) {
      (0, _number.rangeEach)(amount - 1, function (i) {
        headers.push(instance.getSettings().colHeaders[instance.toPhysicalColumn(columnIndex + i)] || null);
      });
    }

    var columnsMap = instance.columnIndexMapper.getIndexesSequence();
    var rowsMap = instance.rowIndexMapper.getIndexesSequence();
    var action = new UndoRedo.RemoveColumnAction(columnIndex, indexes, removedData, headers, columnsMap, rowsMap, instance.getSettings().fixedColumnsLeft);
    plugin.done(action);
  });
  instance.addHook('beforeCellAlignment', function (stateBefore, range, type, alignment) {
    var action = new UndoRedo.CellAlignmentAction(stateBefore, range, type, alignment);
    plugin.done(action);
  });
  instance.addHook('beforeFilter', function (conditionsStack) {
    plugin.done(new UndoRedo.FiltersAction(conditionsStack));
  });
  instance.addHook('beforeRowMove', function (rows, finalIndex) {
    if (rows === false) {
      return;
    }

    plugin.done(new UndoRedo.RowMoveAction(rows, finalIndex));
  });
  instance.addHook('beforeMergeCells', function (cellRange, auto) {
    if (auto) {
      return;
    }

    plugin.done(new UndoRedo.MergeCellsAction(instance, cellRange));
  });
  instance.addHook('afterUnmergeCells', function (cellRange, auto) {
    if (auto) {
      return;
    }

    plugin.done(new UndoRedo.UnmergeCellsAction(instance, cellRange));
  });
}
/**
 * @param {object} action The action desciptor.
 */


UndoRedo.prototype.done = function (action) {
  if (!this.ignoreNewActions) {
    this.doneActions.push(action);
    this.undoneActions.length = 0;
  }
};
/**
 * Undo the last action performed to the table.
 *
 * @function undo
 * @memberof UndoRedo#
 * @fires Hooks#beforeUndo
 * @fires Hooks#afterUndo
 */


UndoRedo.prototype.undo = function () {
  if (this.isUndoAvailable()) {
    var action = this.doneActions.pop();
    var actionClone = (0, _object.deepClone)(action);
    var instance = this.instance;
    var continueAction = instance.runHooks('beforeUndo', actionClone);

    if (continueAction === false) {
      return;
    }

    this.ignoreNewActions = true;
    var that = this;
    action.undo(this.instance, function () {
      that.ignoreNewActions = false;
      that.undoneActions.push(action);
    });
    instance.runHooks('afterUndo', actionClone);
  }
};
/**
 * Redo the previous action performed to the table (used to reverse an undo).
 *
 * @function redo
 * @memberof UndoRedo#
 * @fires Hooks#beforeRedo
 * @fires Hooks#afterRedo
 */


UndoRedo.prototype.redo = function () {
  if (this.isRedoAvailable()) {
    var action = this.undoneActions.pop();
    var actionClone = (0, _object.deepClone)(action);
    var instance = this.instance;
    var continueAction = instance.runHooks('beforeRedo', actionClone);

    if (continueAction === false) {
      return;
    }

    this.ignoreNewActions = true;
    var that = this;
    action.redo(this.instance, function () {
      that.ignoreNewActions = false;
      that.doneActions.push(action);
    });
    instance.runHooks('afterRedo', actionClone);
  }
};
/**
 * Checks if undo action is available.
 *
 * @function isUndoAvailable
 * @memberof UndoRedo#
 * @returns {boolean} Return `true` if undo can be performed, `false` otherwise.
 */


UndoRedo.prototype.isUndoAvailable = function () {
  return this.doneActions.length > 0;
};
/**
 * Checks if redo action is available.
 *
 * @function isRedoAvailable
 * @memberof UndoRedo#
 * @returns {boolean} Return `true` if redo can be performed, `false` otherwise.
 */


UndoRedo.prototype.isRedoAvailable = function () {
  return this.undoneActions.length > 0;
};
/**
 * Clears undo history.
 *
 * @function clear
 * @memberof UndoRedo#
 */


UndoRedo.prototype.clear = function () {
  this.doneActions.length = 0;
  this.undoneActions.length = 0;
};

UndoRedo.Action = function () {};

UndoRedo.Action.prototype.undo = function () {};

UndoRedo.Action.prototype.redo = function () {};
/**
 * Change action.
 *
 * @private
 * @param {Array} changes 2D array containing information about each of the edited cells.
 * @param {number[]} selected The cell selection.
 */


UndoRedo.ChangeAction = function (changes, selected) {
  this.changes = changes;
  this.selected = selected;
  this.actionType = 'change';
};

(0, _object.inherit)(UndoRedo.ChangeAction, UndoRedo.Action);

UndoRedo.ChangeAction.prototype.undo = function (instance, undoneCallback) {
  var data = (0, _object.deepClone)(this.changes);
  var emptyRowsAtTheEnd = instance.countEmptyRows(true);
  var emptyColsAtTheEnd = instance.countEmptyCols(true);

  for (var i = 0, len = data.length; i < len; i++) {
    data[i].splice(3, 1);
  }

  instance.addHookOnce('afterChange', undoneCallback);
  instance.setDataAtCell(data, null, null, 'UndoRedo.undo');

  for (var _i2 = 0, _len = data.length; _i2 < _len; _i2++) {
    var _data$_i = _slicedToArray(data[_i2], 2),
        row = _data$_i[0],
        column = _data$_i[1];

    if (instance.getSettings().minSpareRows && row + 1 + instance.getSettings().minSpareRows === instance.countRows() && emptyRowsAtTheEnd === instance.getSettings().minSpareRows) {
      instance.alter('remove_row', parseInt(row + 1, 10), instance.getSettings().minSpareRows);
      instance.undoRedo.doneActions.pop();
    }

    if (instance.getSettings().minSpareCols && column + 1 + instance.getSettings().minSpareCols === instance.countCols() && emptyColsAtTheEnd === instance.getSettings().minSpareCols) {
      instance.alter('remove_col', parseInt(column + 1, 10), instance.getSettings().minSpareCols);
      instance.undoRedo.doneActions.pop();
    }
  }

  instance.selectCells(this.selected, false, false);
};

UndoRedo.ChangeAction.prototype.redo = function (instance, onFinishCallback) {
  var data = (0, _object.deepClone)(this.changes);

  for (var i = 0, len = data.length; i < len; i++) {
    data[i].splice(2, 1);
  }

  instance.addHookOnce('afterChange', onFinishCallback);
  instance.setDataAtCell(data, null, null, 'UndoRedo.redo');

  if (this.selected) {
    instance.selectCells(this.selected, false, false);
  }
};
/**
 * Create row action.
 *
 * @private
 * @param {number} index The visual row index.
 * @param {number} amount The number of created rows.
 */


UndoRedo.CreateRowAction = function (index, amount) {
  this.index = index;
  this.amount = amount;
  this.actionType = 'insert_row';
};

(0, _object.inherit)(UndoRedo.CreateRowAction, UndoRedo.Action);

UndoRedo.CreateRowAction.prototype.undo = function (instance, undoneCallback) {
  var rowCount = instance.countRows();
  var minSpareRows = instance.getSettings().minSpareRows;

  if (this.index >= rowCount && this.index - minSpareRows < rowCount) {
    this.index -= minSpareRows; // work around the situation where the needed row was removed due to an 'undo' of a made change
  }

  instance.addHookOnce('afterRemoveRow', undoneCallback);
  instance.alter('remove_row', this.index, this.amount, 'UndoRedo.undo');
};

UndoRedo.CreateRowAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterCreateRow', redoneCallback);
  instance.alter('insert_row', this.index, this.amount, 'UndoRedo.redo');
};
/**
 * Remove row action.
 *
 * @private
 * @param {number} index The visual row index.
 * @param {Array} data The removed data.
 * @param {number} fixedRowsBottom Number of fixed rows on the bottom. Remove row action change it sometimes.
 * @param {number} fixedRowsTop Number of fixed rows on the top. Remove row action change it sometimes.
 */


UndoRedo.RemoveRowAction = function (index, data, fixedRowsBottom, fixedRowsTop) {
  this.index = index;
  this.data = data;
  this.actionType = 'remove_row';
  this.fixedRowsBottom = fixedRowsBottom;
  this.fixedRowsTop = fixedRowsTop;
};

(0, _object.inherit)(UndoRedo.RemoveRowAction, UndoRedo.Action);

UndoRedo.RemoveRowAction.prototype.undo = function (instance, undoneCallback) {
  var settings = instance.getSettings(); // Changing by the reference as `updateSettings` doesn't work the best.

  settings.fixedRowsBottom = this.fixedRowsBottom;
  settings.fixedRowsTop = this.fixedRowsTop;
  instance.alter('insert_row', this.index, this.data.length, 'UndoRedo.undo');
  instance.addHookOnce('afterRender', undoneCallback);
  instance.populateFromArray(this.index, 0, this.data, void 0, void 0, 'UndoRedo.undo');
};

UndoRedo.RemoveRowAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterRemoveRow', redoneCallback);
  instance.alter('remove_row', this.index, this.data.length, 'UndoRedo.redo');
};
/**
 * Create column action.
 *
 * @private
 * @param {number} index The visual column index.
 * @param {number} amount The number of created columns.
 */


UndoRedo.CreateColumnAction = function (index, amount) {
  this.index = index;
  this.amount = amount;
  this.actionType = 'insert_col';
};

(0, _object.inherit)(UndoRedo.CreateColumnAction, UndoRedo.Action);

UndoRedo.CreateColumnAction.prototype.undo = function (instance, undoneCallback) {
  instance.addHookOnce('afterRemoveCol', undoneCallback);
  instance.alter('remove_col', this.index, this.amount, 'UndoRedo.undo');
};

UndoRedo.CreateColumnAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterCreateCol', redoneCallback);
  instance.alter('insert_col', this.index, this.amount, 'UndoRedo.redo');
};
/**
 * Remove column action.
 *
 * @private
 * @param {number} index The visual column index.
 * @param {number[]} indexes The visual column indexes.
 * @param {Array} data The removed data.
 * @param {Array} headers The header values.
 * @param {number[]} columnPositions The column position.
 * @param {number[]} rowPositions The row position.
 * @param {number} fixedColumnsLeft Number of fixed columns on the left. Remove column action change it sometimes.
 */


UndoRedo.RemoveColumnAction = function (index, indexes, data, headers, columnPositions, rowPositions, fixedColumnsLeft) {
  this.index = index;
  this.indexes = indexes;
  this.data = data;
  this.amount = this.data[0].length;
  this.headers = headers;
  this.columnPositions = columnPositions.slice(0);
  this.rowPositions = rowPositions.slice(0);
  this.actionType = 'remove_col';
  this.fixedColumnsLeft = fixedColumnsLeft;
};

(0, _object.inherit)(UndoRedo.RemoveColumnAction, UndoRedo.Action);

UndoRedo.RemoveColumnAction.prototype.undo = function (instance, undoneCallback) {
  var _this = this,
      _instance$getPlugin$e,
      _instance$getPlugin;

  var settings = instance.getSettings(); // Changing by the reference as `updateSettings` doesn't work the best.

  settings.fixedColumnsLeft = this.fixedColumnsLeft;
  var ascendingIndexes = this.indexes.slice(0).sort();

  var sortByIndexes = function sortByIndexes(elem, j, arr) {
    return arr[_this.indexes.indexOf(ascendingIndexes[j])];
  };

  var removedDataLength = this.data.length;
  var sortedData = [];

  for (var rowIndex = 0; rowIndex < removedDataLength; rowIndex++) {
    sortedData.push((0, _array.arrayMap)(this.data[rowIndex], sortByIndexes));
  }

  var sortedHeaders = (0, _array.arrayMap)(this.headers, sortByIndexes);
  var isFormulaPluginEnabled = (_instance$getPlugin$e = (_instance$getPlugin = instance.getPlugin('formulas')) === null || _instance$getPlugin === void 0 ? void 0 : _instance$getPlugin.enabled) !== null && _instance$getPlugin$e !== void 0 ? _instance$getPlugin$e : false;
  var changes = [];
  instance.alter('insert_col', this.indexes[0], this.indexes.length, 'UndoRedo.undo');
  (0, _array.arrayEach)(instance.getSourceDataArray(), function (rowData, rowIndex) {
    (0, _array.arrayEach)(ascendingIndexes, function (changedIndex, contiquesIndex) {
      rowData[changedIndex] = sortedData[rowIndex][contiquesIndex];
      changes.push([rowIndex, changedIndex, rowData[changedIndex]]);
    });
  });
  instance.setSourceDataAtCell(changes);
  instance.columnIndexMapper.insertIndexes(ascendingIndexes[0], ascendingIndexes.length); // TODO Temporary hook for undo/redo mess

  if (isFormulaPluginEnabled) {
    var setDataAtCellChanges = [];
    (0, _array.arrayEach)(instance.getSourceDataArray(), function (rowData, rowIndex) {
      (0, _array.arrayEach)(ascendingIndexes, function (changedIndex, contiquesIndex) {
        rowData[changedIndex] = sortedData[rowIndex][contiquesIndex];
        setDataAtCellChanges.push([rowIndex, changedIndex, null, rowData[changedIndex]]);
      });
    });
    instance.getPlugin('formulas').onAfterSetDataAtCell(setDataAtCellChanges);
  }

  if (typeof this.headers !== 'undefined') {
    (0, _array.arrayEach)(sortedHeaders, function (headerData, columnIndex) {
      instance.getSettings().colHeaders[ascendingIndexes[columnIndex]] = headerData;
    });
  }

  instance.batch(function () {
    // Restore row sequence in a case when all columns are removed. the original
    // row sequence is lost in that case.
    instance.rowIndexMapper.setIndexesSequence(_this.rowPositions);
    instance.columnIndexMapper.setIndexesSequence(_this.columnPositions);
  });
  instance.addHookOnce('afterRender', undoneCallback); // TODO Temporary hook for undo/redo mess

  instance.runHooks('afterCreateCol', this.indexes[0], this.indexes.length, 'UndoRedo.undo');

  if (isFormulaPluginEnabled) {
    instance.getPlugin('formulas').recalculateFull();
  }

  instance.render();
};

UndoRedo.RemoveColumnAction.prototype.redo = function (instance, redoneCallback) {
  instance.addHookOnce('afterRemoveCol', redoneCallback);
  instance.alter('remove_col', this.index, this.amount, 'UndoRedo.redo');
};
/**
 * Cell alignment action.
 *
 * @private
 * @param {Array} stateBefore The previous state.
 * @param {object} range The cell range.
 * @param {string} type The type of the alignment ("top", "left", "bottom" or "right").
 * @param {string} alignment The alignment CSS class.
 */


UndoRedo.CellAlignmentAction = function (stateBefore, range, type, alignment) {
  this.stateBefore = stateBefore;
  this.range = range;
  this.type = type;
  this.alignment = alignment;
};

UndoRedo.CellAlignmentAction.prototype.undo = function (instance, undoneCallback) {
  var _this2 = this;

  (0, _array.arrayEach)(this.range, function (range) {
    range.forAll(function (row, col) {
      // Alignment classes should only collected within cell ranges. We skip header coordinates.
      if (row >= 0 && col >= 0) {
        instance.setCellMeta(row, col, 'className', _this2.stateBefore[row][col] || ' htLeft');
      }
    });
  });
  instance.addHookOnce('afterRender', undoneCallback);
  instance.render();
};

UndoRedo.CellAlignmentAction.prototype.redo = function (instance, undoneCallback) {
  (0, _utils.align)(this.range, this.type, this.alignment, function (row, col) {
    return instance.getCellMeta(row, col);
  }, function (row, col, key, value) {
    return instance.setCellMeta(row, col, key, value);
  });
  instance.addHookOnce('afterRender', undoneCallback);
  instance.render();
};
/**
 * Filters action.
 *
 * @private
 * @param {Array} conditionsStack An array of the filter condition.
 */


UndoRedo.FiltersAction = function (conditionsStack) {
  this.conditionsStack = conditionsStack;
  this.actionType = 'filter';
};

(0, _object.inherit)(UndoRedo.FiltersAction, UndoRedo.Action);

UndoRedo.FiltersAction.prototype.undo = function (instance, undoneCallback) {
  var filters = instance.getPlugin('filters');
  instance.addHookOnce('afterRender', undoneCallback);
  filters.conditionCollection.importAllConditions(this.conditionsStack.slice(0, this.conditionsStack.length - 1));
  filters.filter();
};

UndoRedo.FiltersAction.prototype.redo = function (instance, redoneCallback) {
  var filters = instance.getPlugin('filters');
  instance.addHookOnce('afterRender', redoneCallback);
  filters.conditionCollection.importAllConditions(this.conditionsStack);
  filters.filter();
};
/**
 * Merge Cells action.
 *
 * @util
 */


var MergeCellsAction = /*#__PURE__*/function (_UndoRedo$Action) {
  _inherits(MergeCellsAction, _UndoRedo$Action);

  var _super = _createSuper(MergeCellsAction);

  function MergeCellsAction(instance, cellRange) {
    var _this3;

    _classCallCheck(this, MergeCellsAction);

    _this3 = _super.call(this);
    _this3.cellRange = cellRange;

    var topLeftCorner = _this3.cellRange.getTopLeftCorner();

    var bottomRightCorner = _this3.cellRange.getBottomRightCorner();

    _this3.rangeData = instance.getData(topLeftCorner.row, topLeftCorner.col, bottomRightCorner.row, bottomRightCorner.col);
    return _this3;
  }

  _createClass(MergeCellsAction, [{
    key: "undo",
    value: function undo(instance, undoneCallback) {
      var mergeCellsPlugin = instance.getPlugin('mergeCells');
      instance.addHookOnce('afterRender', undoneCallback);
      mergeCellsPlugin.unmergeRange(this.cellRange, true);
      var topLeftCorner = this.cellRange.getTopLeftCorner();
      instance.populateFromArray(topLeftCorner.row, topLeftCorner.col, this.rangeData, void 0, void 0, 'MergeCells');
    }
  }, {
    key: "redo",
    value: function redo(instance, redoneCallback) {
      var mergeCellsPlugin = instance.getPlugin('mergeCells');
      instance.addHookOnce('afterRender', redoneCallback);
      mergeCellsPlugin.mergeRange(this.cellRange);
    }
  }]);

  return MergeCellsAction;
}(UndoRedo.Action);

UndoRedo.MergeCellsAction = MergeCellsAction;
/**
 * Unmerge Cells action.
 *
 * @util
 */

var UnmergeCellsAction = /*#__PURE__*/function (_UndoRedo$Action2) {
  _inherits(UnmergeCellsAction, _UndoRedo$Action2);

  var _super2 = _createSuper(UnmergeCellsAction);

  function UnmergeCellsAction(instance, cellRange) {
    var _this4;

    _classCallCheck(this, UnmergeCellsAction);

    _this4 = _super2.call(this);
    _this4.cellRange = cellRange;
    return _this4;
  }

  _createClass(UnmergeCellsAction, [{
    key: "undo",
    value: function undo(instance, undoneCallback) {
      var mergeCellsPlugin = instance.getPlugin('mergeCells');
      instance.addHookOnce('afterRender', undoneCallback);
      mergeCellsPlugin.mergeRange(this.cellRange, true);
    }
  }, {
    key: "redo",
    value: function redo(instance, redoneCallback) {
      var mergeCellsPlugin = instance.getPlugin('mergeCells');
      instance.addHookOnce('afterRender', redoneCallback);
      mergeCellsPlugin.unmergeRange(this.cellRange, true);
      instance.render();
    }
  }]);

  return UnmergeCellsAction;
}(UndoRedo.Action);

UndoRedo.UnmergeCellsAction = UnmergeCellsAction;
/**
 * ManualRowMove action.
 *
 * @TODO removeRow undo should works on logical index
 * @private
 * @param {number[]} rows An array with moved rows.
 * @param {number} finalIndex The destination index.
 */

UndoRedo.RowMoveAction = function (rows, finalIndex) {
  this.rows = rows.slice();
  this.finalIndex = finalIndex;
};

(0, _object.inherit)(UndoRedo.RowMoveAction, UndoRedo.Action);

UndoRedo.RowMoveAction.prototype.undo = function (instance, undoneCallback) {
  var _this5 = this;

  var manualRowMove = instance.getPlugin('manualRowMove');
  var copyOfRows = [].concat(this.rows);
  var rowsMovedUp = copyOfRows.filter(function (a) {
    return a > _this5.finalIndex;
  });
  var rowsMovedDown = copyOfRows.filter(function (a) {
    return a <= _this5.finalIndex;
  });
  var allMovedRows = rowsMovedUp.sort(function (a, b) {
    return b - a;
  }).concat(rowsMovedDown.sort(function (a, b) {
    return a - b;
  }));
  instance.addHookOnce('afterRender', undoneCallback); // Moving rows from those with higher indexes to those with lower indexes when action was performed from bottom to top
  // Moving rows from those with lower indexes to those with higher indexes when action was performed from top to bottom

  for (var i = 0; i < allMovedRows.length; i += 1) {
    var newPhysicalRow = instance.toVisualRow(allMovedRows[i]);
    manualRowMove.moveRow(newPhysicalRow, allMovedRows[i]);
  }

  instance.render();
  instance.deselectCell();
  instance.selectRows(this.rows[0], this.rows[0] + this.rows.length - 1);
};

UndoRedo.RowMoveAction.prototype.redo = function (instance, redoneCallback) {
  var manualRowMove = instance.getPlugin('manualRowMove');
  instance.addHookOnce('afterRender', redoneCallback);
  manualRowMove.moveRows(this.rows.slice(), this.finalIndex);
  instance.render();
  instance.deselectCell();
  instance.selectRows(this.finalIndex, this.finalIndex + this.rows.length - 1);
};
/**
 *
 */


function init() {
  var instance = this;
  var pluginEnabled = typeof instance.getSettings().undo === 'undefined' || instance.getSettings().undo;

  if (pluginEnabled) {
    if (!instance.undoRedo) {
      /**
       * Instance of Handsontable.UndoRedo Plugin {@link Handsontable.UndoRedo}.
       *
       * @alias undoRedo
       * @memberof! Handsontable.Core#
       * @type {UndoRedo}
       */
      instance.undoRedo = new UndoRedo(instance);
      exposeUndoRedoMethods(instance);
      instance.addHook('beforeKeyDown', onBeforeKeyDown);
      instance.addHook('afterChange', onAfterChange);
    }
  } else if (instance.undoRedo) {
    delete instance.undoRedo;
    removeExposedUndoRedoMethods(instance);
    instance.removeHook('beforeKeyDown', onBeforeKeyDown);
    instance.removeHook('afterChange', onAfterChange);
  }
}
/**
 * @param {Event} event The keyboard event object.
 */


function onBeforeKeyDown(event) {
  if ((0, _event.isImmediatePropagationStopped)(event)) {
    return;
  }

  var instance = this;
  var editor = instance.getActiveEditor();

  if (editor && editor.isOpened()) {
    return;
  }

  var altKey = event.altKey,
      ctrlKey = event.ctrlKey,
      keyCode = event.keyCode,
      metaKey = event.metaKey,
      shiftKey = event.shiftKey;
  var isCtrlDown = (ctrlKey || metaKey) && !altKey;

  if (!isCtrlDown) {
    return;
  }

  var isRedoHotkey = keyCode === 89 || shiftKey && keyCode === 90;

  if (isRedoHotkey) {
    // CTRL + Y or CTRL + SHIFT + Z
    instance.undoRedo.redo();
    (0, _event.stopImmediatePropagation)(event);
  } else if (keyCode === 90) {
    // CTRL + Z
    instance.undoRedo.undo();
    (0, _event.stopImmediatePropagation)(event);
  }
}
/**
 * @param {Array} changes 2D array containing information about each of the edited cells.
 * @param {string} source String that identifies source of hook call.
 * @returns {boolean}
 */


function onAfterChange(changes, source) {
  var instance = this;

  if (source === 'loadData') {
    return instance.undoRedo.clear();
  }
}
/**
 * @param {Core} instance The Handsontable instance.
 */


function exposeUndoRedoMethods(instance) {
  /**
   * {@link UndoRedo#undo}.
   *
   * @alias undo
   * @memberof! Handsontable.Core#
   * @returns {boolean}
   */
  instance.undo = function () {
    return instance.undoRedo.undo();
  };
  /**
   * {@link UndoRedo#redo}.
   *
   * @alias redo
   * @memberof! Handsontable.Core#
   * @returns {boolean}
   */


  instance.redo = function () {
    return instance.undoRedo.redo();
  };
  /**
   * {@link UndoRedo#isUndoAvailable}.
   *
   * @alias isUndoAvailable
   * @memberof! Handsontable.Core#
   * @returns {boolean}
   */


  instance.isUndoAvailable = function () {
    return instance.undoRedo.isUndoAvailable();
  };
  /**
   * {@link UndoRedo#isRedoAvailable}.
   *
   * @alias isRedoAvailable
   * @memberof! Handsontable.Core#
   * @returns {boolean}
   */


  instance.isRedoAvailable = function () {
    return instance.undoRedo.isRedoAvailable();
  };
  /**
   * {@link UndoRedo#clear}.
   *
   * @alias clearUndo
   * @memberof! Handsontable.Core#
   * @returns {boolean}
   */


  instance.clearUndo = function () {
    return instance.undoRedo.clear();
  };
}
/**
 * @param {Core} instance The Handsontable instance.
 */


function removeExposedUndoRedoMethods(instance) {
  delete instance.undo;
  delete instance.redo;
  delete instance.isUndoAvailable;
  delete instance.isRedoAvailable;
  delete instance.clearUndo;
}

var hook = _pluginHooks.default.getSingleton();

hook.add('afterInit', init);
hook.add('afterUpdateSettings', init);
hook.register('beforeUndo');
hook.register('afterUndo');
hook.register('beforeRedo');
hook.register('afterRedo');
var _default = UndoRedo;
exports.default = _default;
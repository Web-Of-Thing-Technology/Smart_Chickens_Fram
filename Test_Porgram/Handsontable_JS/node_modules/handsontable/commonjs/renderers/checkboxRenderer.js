"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

exports.__esModule = true;
exports.default = void 0;

var _element = require("./../helpers/dom/element");

var _string = require("./../helpers/string");

var _eventManager = _interopRequireDefault(require("./../eventManager"));

var _unicode = require("./../helpers/unicode");

var _function = require("./../helpers/function");

var _event = require("./../helpers/dom/event");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isListeningKeyDownEvent = new WeakMap();
var isCheckboxListenerAdded = new WeakMap();
var BAD_VALUE_CLASS = 'htBadValue';
/**
 * Checkbox renderer.
 *
 * @private
 * @param {Core} instance The Handsontable instance.
 * @param {HTMLTableCellElement} TD The rendered cell element.
 * @param {number} row The visual row index.
 * @param {number} col The visual column index.
 * @param {number|string} prop The column property (passed when datasource is an array of objects).
 * @param {*} value The rendered value.
 * @param {object} cellProperties The cell meta object ({@see Core#getCellMeta}).
 */

function checkboxRenderer(instance, TD, row, col, prop, value, cellProperties) {
  var rootDocument = instance.rootDocument;
  (0, _index.getRenderer)('base').apply(this, [instance, TD, row, col, prop, value, cellProperties]);
  registerEvents(instance);
  var input = createInput(rootDocument);
  var labelOptions = cellProperties.label;
  var badValue = false;

  if (typeof cellProperties.checkedTemplate === 'undefined') {
    cellProperties.checkedTemplate = true;
  }

  if (typeof cellProperties.uncheckedTemplate === 'undefined') {
    cellProperties.uncheckedTemplate = false;
  }

  (0, _element.empty)(TD); // TODO identify under what circumstances this line can be removed

  if (value === cellProperties.checkedTemplate || (0, _string.equalsIgnoreCase)(value, cellProperties.checkedTemplate)) {
    input.checked = true;
  } else if (value === cellProperties.uncheckedTemplate || (0, _string.equalsIgnoreCase)(value, cellProperties.uncheckedTemplate)) {
    input.checked = false;
  } else if (value === null) {
    // default value
    (0, _element.addClass)(input, 'noValue');
  } else {
    input.style.display = 'none';
    (0, _element.addClass)(input, BAD_VALUE_CLASS);
    badValue = true;
  }

  input.setAttribute('data-row', row);
  input.setAttribute('data-col', col);

  if (!badValue && labelOptions) {
    var labelText = '';

    if (labelOptions.value) {
      labelText = typeof labelOptions.value === 'function' ? labelOptions.value.call(this, row, col, prop, value) : labelOptions.value;
    } else if (labelOptions.property) {
      var labelValue = instance.getDataAtRowProp(row, labelOptions.property);
      labelText = labelValue !== null ? labelValue : '';
    }

    var label = createLabel(rootDocument, labelText);

    if (labelOptions.position === 'before') {
      label.appendChild(input);
    } else {
      label.insertBefore(input, label.firstChild);
    }

    input = label;
  }

  TD.appendChild(input);

  if (badValue) {
    TD.appendChild(rootDocument.createTextNode('#bad-value#'));
  }

  if (!isListeningKeyDownEvent.has(instance)) {
    isListeningKeyDownEvent.set(instance, true);
    instance.addHook('beforeKeyDown', onBeforeKeyDown);
  }
  /**
   * On before key down DOM listener.
   *
   * @private
   * @param {Event} event The keyboard event object.
   */


  function onBeforeKeyDown(event) {
    var toggleKeys = 'SPACE|ENTER';
    var switchOffKeys = 'DELETE|BACKSPACE';
    var isKeyCode = (0, _function.partial)(_unicode.isKey, event.keyCode);

    if (!instance.getSettings().enterBeginsEditing && isKeyCode('ENTER')) {
      return;
    }

    if (isKeyCode("".concat(toggleKeys, "|").concat(switchOffKeys)) && !(0, _event.isImmediatePropagationStopped)(event)) {
      eachSelectedCheckboxCell(function () {
        (0, _event.stopImmediatePropagation)(event);
        event.preventDefault();
      });
    }

    if (isKeyCode(toggleKeys)) {
      changeSelectedCheckboxesState();
    }

    if (isKeyCode(switchOffKeys)) {
      changeSelectedCheckboxesState(true);
    }
  }
  /**
   * Change checkbox checked property.
   *
   * @private
   * @param {boolean} [uncheckCheckbox=false] The new "checked" state for the checkbox elements.
   */


  function changeSelectedCheckboxesState() {
    var uncheckCheckbox = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var selRange = instance.getSelectedRange();

    if (!selRange) {
      return;
    }

    for (var key = 0; key < selRange.length; key++) {
      var _selRange$key$getTopL = selRange[key].getTopLeftCorner(),
          startRow = _selRange$key$getTopL.row,
          startColumn = _selRange$key$getTopL.col;

      var _selRange$key$getBott = selRange[key].getBottomRightCorner(),
          endRow = _selRange$key$getBott.row,
          endColumn = _selRange$key$getBott.col;

      var changes = [];

      for (var visualRow = startRow; visualRow <= endRow; visualRow += 1) {
        for (var visualColumn = startColumn; visualColumn <= endColumn; visualColumn += 1) {
          var cachedCellProperties = instance.getCellMeta(visualRow, visualColumn);

          if (cachedCellProperties.type !== 'checkbox') {
            return;
          }
          /* eslint-disable no-continue */


          if (cachedCellProperties.readOnly === true) {
            continue;
          }

          if (typeof cachedCellProperties.checkedTemplate === 'undefined') {
            cachedCellProperties.checkedTemplate = true;
          }

          if (typeof cachedCellProperties.uncheckedTemplate === 'undefined') {
            cachedCellProperties.uncheckedTemplate = false;
          }

          var dataAtCell = instance.getDataAtCell(visualRow, visualColumn);

          if (uncheckCheckbox === false) {
            if ([cachedCellProperties.checkedTemplate, cachedCellProperties.checkedTemplate.toString()].includes(dataAtCell)) {
              // eslint-disable-line max-len
              changes.push([visualRow, visualColumn, cachedCellProperties.uncheckedTemplate]);
            } else if ([cachedCellProperties.uncheckedTemplate, cachedCellProperties.uncheckedTemplate.toString(), null, void 0].includes(dataAtCell)) {
              // eslint-disable-line max-len
              changes.push([visualRow, visualColumn, cachedCellProperties.checkedTemplate]);
            }
          } else {
            changes.push([visualRow, visualColumn, cachedCellProperties.uncheckedTemplate]);
          }
        }
      }

      if (changes.length > 0) {
        instance.setDataAtCell(changes);
      }
    }
  }
  /**
   * Call callback for each found selected cell with checkbox type.
   *
   * @private
   * @param {Function} callback The callback function.
   */


  function eachSelectedCheckboxCell(callback) {
    var selRange = instance.getSelectedRange();

    if (!selRange) {
      return;
    }

    for (var key = 0; key < selRange.length; key++) {
      var topLeft = selRange[key].getTopLeftCorner();
      var bottomRight = selRange[key].getBottomRightCorner();

      for (var visualRow = topLeft.row; visualRow <= bottomRight.row; visualRow++) {
        for (var visualColumn = topLeft.col; visualColumn <= bottomRight.col; visualColumn++) {
          var cachedCellProperties = instance.getCellMeta(visualRow, visualColumn);

          if (cachedCellProperties.type !== 'checkbox') {
            return;
          }

          var cell = instance.getCell(visualRow, visualColumn);

          if (cell === null || cell === void 0) {
            callback(visualRow, visualColumn, cachedCellProperties);
          } else {
            var checkboxes = cell.querySelectorAll('input[type=checkbox]');

            if (checkboxes.length > 0 && !cachedCellProperties.readOnly) {
              callback(checkboxes);
            }
          }
        }
      }
    }
  }
}
/**
 * Register checkbox listeners.
 *
 * @param {Core} instance The Handsontable instance.
 * @returns {EventManager}
 */


function registerEvents(instance) {
  var eventManager = isCheckboxListenerAdded.get(instance);

  if (!eventManager) {
    var rootElement = instance.rootElement;
    eventManager = new _eventManager.default(instance);
    eventManager.addEventListener(rootElement, 'click', function (event) {
      return onClick(event, instance);
    });
    eventManager.addEventListener(rootElement, 'mouseup', function (event) {
      return onMouseUp(event, instance);
    });
    eventManager.addEventListener(rootElement, 'change', function (event) {
      return onChange(event, instance);
    });
    isCheckboxListenerAdded.set(instance, eventManager);
  }

  return eventManager;
}
/**
 * Create input element.
 *
 * @param {Document} rootDocument The document owner.
 * @returns {Node}
 */


function createInput(rootDocument) {
  var input = rootDocument.createElement('input');
  input.className = 'htCheckboxRendererInput';
  input.type = 'checkbox';
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('tabindex', '-1');
  return input.cloneNode(false);
}
/**
 * Create label element.
 *
 * @param {Document} rootDocument The document owner.
 * @param {string} text The label text.
 * @returns {Node}
 */


function createLabel(rootDocument, text) {
  var label = rootDocument.createElement('label');
  label.className = 'htCheckboxRendererLabel';
  label.appendChild(rootDocument.createTextNode(text));
  return label.cloneNode(true);
}
/**
 * `mouseup` callback.
 *
 * @private
 * @param {Event} event `mouseup` event.
 * @param {Core} instance The Handsontable instance.
 */


function onMouseUp(event, instance) {
  if (!isCheckboxInput(event.target)) {
    return;
  }

  setTimeout(instance.listen, 10);
}
/**
 * `click` callback.
 *
 * @private
 * @param {Event} event `click` event.
 * @param {Core} instance The Handsontable instance.
 * @returns {boolean|undefined}
 */


function onClick(event, instance) {
  if (!isCheckboxInput(event.target)) {
    return false;
  }

  var row = parseInt(event.target.getAttribute('data-row'), 10);
  var col = parseInt(event.target.getAttribute('data-col'), 10);
  var cellProperties = instance.getCellMeta(row, col);

  if (cellProperties.readOnly) {
    event.preventDefault();
  }
}
/**
 * `change` callback.
 *
 * @param {Event} event `change` event.
 * @param {Core} instance The Handsontable instance.
 * @returns {boolean}
 */


function onChange(event, instance) {
  if (!isCheckboxInput(event.target)) {
    return false;
  }

  var row = parseInt(event.target.getAttribute('data-row'), 10);
  var col = parseInt(event.target.getAttribute('data-col'), 10);
  var cellProperties = instance.getCellMeta(row, col);

  if (!cellProperties.readOnly) {
    var newCheckboxValue = null;

    if (event.target.checked) {
      newCheckboxValue = cellProperties.uncheckedTemplate === void 0 ? true : cellProperties.checkedTemplate;
    } else {
      newCheckboxValue = cellProperties.uncheckedTemplate === void 0 ? false : cellProperties.uncheckedTemplate;
    }

    instance.setDataAtCell(row, col, newCheckboxValue);
  }
}
/**
 * Check if the provided element is the checkbox input.
 *
 * @private
 * @param {HTMLElement} element The element in question.
 * @returns {boolean}
 */


function isCheckboxInput(element) {
  return element.tagName === 'INPUT' && element.getAttribute('type') === 'checkbox';
}

var _default = checkboxRenderer;
exports.default = _default;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports.createHighlight = createHighlight;

var _staticRegister2 = _interopRequireDefault(require("./../../../utils/staticRegister"));

var _activeHeader = _interopRequireDefault(require("./activeHeader"));

var _area = _interopRequireDefault(require("./area"));

var _cell = _interopRequireDefault(require("./cell"));

var _customSelection = _interopRequireDefault(require("./customSelection"));

var _fill = _interopRequireDefault(require("./fill"));

var _header = _interopRequireDefault(require("./header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _staticRegister = (0, _staticRegister2.default)('highlight/types'),
    register = _staticRegister.register,
    getItem = _staticRegister.getItem;

register('active-header', _activeHeader.default);
register('area', _area.default);
register('cell', _cell.default);
register('custom-selection', _customSelection.default);
register('fill', _fill.default);
register('header', _header.default);
/**
 * @param {string} highlightType The selection type.
 * @param {object} options The selection options.
 * @returns {Selection}
 */

function createHighlight(highlightType, options) {
  return getItem(highlightType)(_objectSpread({
    type: highlightType
  }, options));
}
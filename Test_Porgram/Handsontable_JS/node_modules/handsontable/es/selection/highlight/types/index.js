import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export */
import staticRegister from './../../../utils/staticRegister';
import activeHeaderHighlight from './activeHeader';
import areaHighlight from './area';
import cellHighlight from './cell';
import customSelection from './customSelection';
import fillHighlight from './fill';
import headerHighlight from './header';

var _staticRegister = staticRegister('highlight/types'),
    register = _staticRegister.register,
    getItem = _staticRegister.getItem;

register('active-header', activeHeaderHighlight);
register('area', areaHighlight);
register('cell', cellHighlight);
register('custom-selection', customSelection);
register('fill', fillHighlight);
register('header', headerHighlight);
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

export { createHighlight };
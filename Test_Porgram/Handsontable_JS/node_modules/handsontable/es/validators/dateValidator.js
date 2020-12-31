import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.search";
import moment from 'moment';
import { getNormalizedDate } from '../helpers/date';
import { getEditorInstance } from '../editors';
/**
 * The Date cell validator.
 *
 * @private
 * @param {*} value Value of edited cell.
 * @param {Function} callback Callback called with validation result.
 */

export default function dateValidator(value, callback) {
  var dateEditor = getEditorInstance('date', this.instance);
  var valueToValidate = value;
  var valid = true;

  if (valueToValidate === null || valueToValidate === void 0) {
    valueToValidate = '';
  }

  var isValidFormat = moment(valueToValidate, this.dateFormat || dateEditor.defaultDateFormat, true).isValid();
  var isValidDate = moment(new Date(valueToValidate)).isValid() || isValidFormat;

  if (this.allowEmpty && valueToValidate === '') {
    isValidDate = true;
    isValidFormat = true;
  }

  if (!isValidDate) {
    valid = false;
  }

  if (!isValidDate && isValidFormat) {
    valid = true;
  }

  if (isValidDate && !isValidFormat) {
    if (this.correctFormat === true) {
      // if format correction is enabled
      var correctedValue = correctFormat(valueToValidate, this.dateFormat);
      var row = this.instance.toVisualRow(this.row);
      var column = this.instance.toVisualColumn(this.col);
      this.instance.setDataAtCell(row, column, correctedValue, 'dateValidator');
      valid = true;
    } else {
      valid = false;
    }
  }

  callback(valid);
}
/**
 * Format the given string using moment.js' format feature.
 *
 * @param {string} value The value to format.
 * @param {string} dateFormat The date pattern to format to.
 * @returns {string}
 */

export function correctFormat(value, dateFormat) {
  var dateFromDate = moment(getNormalizedDate(value));
  var dateFromMoment = moment(value, dateFormat);
  var isAlphanumeric = value.search(/[A-z]/g) > -1;
  var date;

  if (dateFromDate.isValid() && dateFromDate.format('x') === dateFromMoment.format('x') || !dateFromMoment.isValid() || isAlphanumeric) {
    date = dateFromDate;
  } else {
    date = dateFromMoment;
  }

  return date.format(dateFormat);
}
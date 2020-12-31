import * as C from './../../../i18n/constants';
import { checkSelectionBorders } from './../utils';
/**
 * @param {CustomBorders} customBordersPlugin The plugin instance.
 * @returns {object}
 */

export default function noBorders(customBordersPlugin) {
  return {
    key: 'borders:no_borders',
    name: function name() {
      return this.getTranslatedPhrase(C.CONTEXTMENU_ITEMS_REMOVE_BORDERS);
    },
    callback: function callback(key, selected) {
      customBordersPlugin.prepareBorder(selected, 'noBorders');
    },
    disabled: function disabled() {
      return !checkSelectionBorders(this);
    }
  };
}
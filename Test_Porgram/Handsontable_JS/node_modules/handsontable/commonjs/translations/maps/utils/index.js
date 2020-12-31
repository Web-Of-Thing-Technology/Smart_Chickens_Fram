"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.alterUtilsFactory = void 0;

var _actionsOnIndexes = require("./actionsOnIndexes");

exports.getDecreasedIndexes = _actionsOnIndexes.getDecreasedIndexes;
exports.getIncreasedIndexes = _actionsOnIndexes.getIncreasedIndexes;

var _indexesSequence = require("./indexesSequence");

var _physicallyIndexed = require("./physicallyIndexed");

var alterStrategies = new Map([['indexesSequence', {
  getListWithInsertedItems: _indexesSequence.getListWithInsertedItems,
  getListWithRemovedItems: _indexesSequence.getListWithRemovedItems
}], ['physicallyIndexed', {
  getListWithInsertedItems: _physicallyIndexed.getListWithInsertedItems,
  getListWithRemovedItems: _physicallyIndexed.getListWithRemovedItems
}]]);

var alterUtilsFactory = function alterUtilsFactory(indexationStrategy) {
  if (alterStrategies.has(indexationStrategy) === false) {
    throw new Error("Alter strategy with ID '".concat(indexationStrategy, "' does not exist."));
  }

  return alterStrategies.get(indexationStrategy);
};

exports.alterUtilsFactory = alterUtilsFactory;
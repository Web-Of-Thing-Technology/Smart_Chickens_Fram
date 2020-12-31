import "core-js/modules/es.array.iterator";
import "core-js/modules/es.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import { getDecreasedIndexes, getIncreasedIndexes } from './actionsOnIndexes';
import { getListWithInsertedItems as sequenceStrategyInsert, getListWithRemovedItems as sequenceStrategyRemove } from './indexesSequence';
import { getListWithInsertedItems as physicalStrategyInsert, getListWithRemovedItems as physicalStrategyRemove } from './physicallyIndexed';
var alterStrategies = new Map([['indexesSequence', {
  getListWithInsertedItems: sequenceStrategyInsert,
  getListWithRemovedItems: sequenceStrategyRemove
}], ['physicallyIndexed', {
  getListWithInsertedItems: physicalStrategyInsert,
  getListWithRemovedItems: physicalStrategyRemove
}]]);

var alterUtilsFactory = function alterUtilsFactory(indexationStrategy) {
  if (alterStrategies.has(indexationStrategy) === false) {
    throw new Error("Alter strategy with ID '".concat(indexationStrategy, "' does not exist."));
  }

  return alterStrategies.get(indexationStrategy);
};

export { getDecreasedIndexes, getIncreasedIndexes, alterUtilsFactory };
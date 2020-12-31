import "core-js/modules/es.array.from";
import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.set";
import "core-js/modules/es.string.includes";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { arrayEach } from '../../../helpers/array';
/**
 * The NodeModifiers module is responsible for the modification of a tree
 * structure in a way to achieve new column headers state.
 *
 * @class NodeModifiers
 * @plugin NestedHeaders
 */

var NodeModifiers = /*#__PURE__*/function () {
  function NodeModifiers() {
    _classCallCheck(this, NodeModifiers);
  }

  _createClass(NodeModifiers, [{
    key: "collapseNode",

    /* eslint-disable jsdoc/require-description-complete-sentence */

    /**
     * @memberof NodeModifiers#
     * @function collapseNode
     * Collapsing a node is a process where the processing node is collapsed
     * to the colspan width of the first child. All node children, except the
     * first one, are hidden. To prevent losing a current state of node children
     * on the right, all nodes are cloned (and restored while expanding), and
     * only then original nodes are modified (hidden in this case).
     *
     * @param {TreeNode} nodeToProcess A tree node to process.
     * @returns {object} result Returns an object with properties:
     *                          - rollbackModification: The function that
     *                          rollbacks the tree to the previous state.
     *                          - affectedColumns: The list of the visual column
     *                          indexes which are affected. That list is passed
     *                          to the hiddens column logic.
     *                          - colspanCompensation: The number of colspan by
     *                          which the processed node colspan was reduced.
     */

    /* eslint-enable jsdoc/require-description-complete-sentence */
    value: function collapseNode(nodeToProcess) {
      var _getFirstChildPropert,
          _this = this;

      var nodeData = nodeToProcess.data,
          nodeChilds = nodeToProcess.childs;

      if (nodeData.isCollapsed === true || nodeData.isHidden === true || nodeData.origColspan <= 1) {
        return {
          rollbackModification: function rollbackModification() {},
          affectedColumns: [],
          colspanCompensation: 0
        };
      }

      var isNodeReflected = isNodeReflectsFirstChildColspan(nodeToProcess);

      if (isNodeReflected) {
        return this.collapseNode(nodeChilds[0]);
      }

      nodeData.isCollapsed = true;
      var allLeavesExceptMostLeft = nodeChilds.slice(1);
      var affectedColumns = new Set();

      if (allLeavesExceptMostLeft.length > 0) {
        arrayEach(allLeavesExceptMostLeft, function (node) {
          traverseHiddenNodeColumnIndexes(node, function (nodeColumnIndex) {
            affectedColumns.add(nodeColumnIndex);
          }); // Clone the tree to preserve original tree state after header expanding.

          node.data.clonedTree = node.cloneTree(); // Hide all leaves except the first leaf on the left (on headers context hide all
          // headers on the right).

          node.walkDown(function (_ref) {
            var data = _ref.data;
            data.isHidden = true;
          });
        });
      } else {
        // Add column to "affected" started from 1. The header without children can not be
        // collapsed so the first have to be visible (untouched).
        for (var i = 1; i < nodeData.origColspan; i++) {
          affectedColumns.add(nodeData.columnIndex + i);
        }
      } // Calculate by how many colspan it needs to reduce the headings to match them to
      // the first child colspan width.


      var colspanCompensation = nodeData.colspan - ((_getFirstChildPropert = getFirstChildProperty(nodeToProcess, 'colspan')) !== null && _getFirstChildPropert !== void 0 ? _getFirstChildPropert : 1);
      nodeToProcess.walkUp(function (node) {
        var data = node.data;
        data.colspan -= colspanCompensation;

        if (data.colspan <= 1) {
          data.colspan = 1;
          data.isCollapsed = true;
        } else if (isNodeReflectsFirstChildColspan(node)) {
          data.isCollapsed = getFirstChildProperty(node, 'isCollapsed');
        }
      });
      return {
        rollbackModification: function rollbackModification() {
          return _this.expandNode(nodeToProcess);
        },
        affectedColumns: Array.from(affectedColumns),
        colspanCompensation: colspanCompensation
      };
    }
    /* eslint-disable jsdoc/require-description-complete-sentence */

    /**
     * @memberof NodeModifiers#
     * @function expandNode
     * Expanding a node is a process where the processing node is expanded to
     * its original colspan width. To restore an original state of all node
     * children on the right, the modified nodes are replaced with the cloned
     * nodes (they were cloned while collapsing).
     *
     * @param {TreeNode} nodeToProcess A tree node to process.
     * @returns {object} result Returns an object with properties:
     *                          - rollbackModification: The function that
     *                          rollbacks the tree to the previous state.
     *                          - affectedColumns: The list of the visual column
     *                          indexes which are affected. That list is passed
     *                          to the hiddens column logic.
     *                          - colspanCompensation: The number of colspan by
     *                          which the processed node colspan was increased.
     */

    /* eslint-enable jsdoc/require-description-complete-sentence */

  }, {
    key: "expandNode",
    value: function expandNode(nodeToProcess) {
      var _this2 = this;

      var nodeData = nodeToProcess.data,
          nodeChilds = nodeToProcess.childs;

      if (nodeData.isCollapsed === false || nodeData.isHidden === true || nodeData.origColspan <= 1) {
        return {
          rollbackModification: function rollbackModification() {},
          affectedColumns: [],
          colspanCompensation: 0
        };
      }

      var isNodeReflected = isNodeReflectsFirstChildColspan(nodeToProcess);

      if (isNodeReflected) {
        return this.expandNode(nodeChilds[0]);
      }

      nodeData.isCollapsed = false;
      var allLeavesExceptMostLeft = nodeChilds.slice(1);
      var affectedColumns = new Set();
      var colspanCompensation = 0;

      if (allLeavesExceptMostLeft.length > 0) {
        arrayEach(allLeavesExceptMostLeft, function (node) {
          // Restore original state of the collapsed headers.
          node.replaceTreeWith(node.data.clonedTree);
          node.data.clonedTree = null;
          var leafData = node.data; // Calculate by how many colspan it needs to increase the headings to match them to
          // the colspan width of all its children.

          colspanCompensation += leafData.colspan;
          traverseHiddenNodeColumnIndexes(node, function (nodeColumnIndex) {
            affectedColumns.add(nodeColumnIndex);
          });
        });
      } else {
        var colspan = nodeData.colspan,
            origColspan = nodeData.origColspan,
            columnIndex = nodeData.columnIndex; // In a case when the node doesn't have any children restore the colspan width to
        // its original state.

        colspanCompensation = origColspan - colspan; // Add column to "affected" started from 1. The header without children can not be
        // collapsed so the first column is already visible and we shouldn't touch it.

        for (var i = 1; i < origColspan; i++) {
          affectedColumns.add(columnIndex + i);
        }
      }

      nodeToProcess.walkUp(function (node) {
        var data = node.data;
        data.colspan += colspanCompensation;

        if (data.colspan >= data.origColspan) {
          data.colspan = data.origColspan;
          data.isCollapsed = false;
        } else if (isNodeReflectsFirstChildColspan(node)) {
          data.isCollapsed = getFirstChildProperty(node, 'isCollapsed');
        }
      });
      return {
        rollbackModification: function rollbackModification() {
          return _this2.collapseNode(nodeToProcess);
        },
        affectedColumns: Array.from(affectedColumns),
        colspanCompensation: colspanCompensation
      };
    }
    /**
     * An entry point for triggering a node modifiers. If the triggered action
     * does not exist the exception is thrown.
     *
     * @param {string} actionName An action name to trigger.
     * @param {TreeNode} nodeToProcess A tree node to process.
     * @returns {object}
     */

  }, {
    key: "triggerAction",
    value: function triggerAction(actionName, nodeToProcess) {
      if (!NodeModifiers.AVAILABLE_ACTIONS.includes(actionName)) {
        throw new Error("The node modifier action (\"".concat(actionName, "\") does not exist."));
      }

      return this["".concat(actionName, "Node")](nodeToProcess);
    }
  }]);

  return NodeModifiers;
}();
/**
 * Traverses the tree nodes and calls a callback when no hidden node is found. The callback
 * is called with visual column index then.
 *
 * @param {TreeNode} node A tree node to traverse.
 * @param {Function} callback The callback function which will be called for each node.
 */


_defineProperty(NodeModifiers, "AVAILABLE_ACTIONS", ['collapse', 'expand']);

export { NodeModifiers as default };

function traverseHiddenNodeColumnIndexes(node, callback) {
  node.walkDown(function (_ref2) {
    var data = _ref2.data,
        childs = _ref2.childs;

    if (!data.isHidden) {
      callback(data.columnIndex);

      if (childs.length === 0) {
        for (var i = 1; i < data.colspan; i++) {
          callback(data.columnIndex + i);
        }
      }
    }
  });
}
/**
 * A tree helper for retrieving a data from the first child.
 *
 * @param {TreeNode} node A tree node to check.
 * @param {string} propertyName A name of the property whose value you want to get.
 * @returns {*}
 */


function getFirstChildProperty(_ref3, propertyName) {
  var childs = _ref3.childs;

  if (childs.length === 0) {
    return;
  }

  return childs[0].data[propertyName];
}
/**
 * A tree helper which checks if passed node has the same original colspan as its
 * first child. In that case the node is treated as "mirrored" or "reflected" every
 * action performed on one of that nodes should be reflected to other "mirrored" node.
 *
 * In that case nodes A1 and A2 are "refelcted"
 *   +----+----+----+----+
 *   | A1      | B1      |
 *   +----+----+----+----+
 *   | A2      | B2 | B3 |
 *   +----+----+----+----+.
 *
 * @param {TreeNode} node A tree node to check.
 * @returns {boolean}
 */


function isNodeReflectsFirstChildColspan(node) {
  return getFirstChildProperty(node, 'origColspan') === node.data.origColspan;
}
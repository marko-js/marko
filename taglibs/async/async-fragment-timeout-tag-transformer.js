'use strict';

module.exports = function transform(node, compiler, template) {

    var asyncFragmentNode = node.parentNode;

    // Remove the node from the tree
    node.detach();

    asyncFragmentNode.setProperty('timeoutMessage', node.getBodyContentExpression(template));
};

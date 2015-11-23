'use strict';

module.exports = function transform(node, compiler, template) {

    var asyncFragmentNode = node.parentNode;

    if (!asyncFragmentNode) {
        template.addError('<async-fragment-error> should be nested directly below an <async-fragment> tag.');
        return;
    }

    // Remove the node from the tree
    node.detach();

    asyncFragmentNode.setProperty('errorMessage', node.getBodyContentExpression(template));
};

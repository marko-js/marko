function addPreserve(transformHelper, bodyOnly) {
    var template = transformHelper.template;
    var compiler = transformHelper.compiler;
    var node = transformHelper.node;

    var preserveNode = compiler.createTagHandlerNode('w-preserve');

    preserveNode.setProperty('id', transformHelper.getIdExpression());

    if (bodyOnly) {
        preserveNode.setProperty('bodyOnly', template.makeExpression(bodyOnly));
    }

    if (bodyOnly) {
        node.forEachChild(function(childNode) {
            preserveNode.appendChild(childNode);
        });

        node.appendChild(preserveNode);
    } else {
        node.parentNode.replaceChild(preserveNode, node);
        preserveNode.appendChild(node);
    }

    return preserveNode;
}

module.exports = function handleWidgetPreserve() {
    var node = this.node;
    var props = this.nodeProps;

    var widgetPreserve;
    if ((widgetPreserve = props['w-preserve']) != null) {
        node.removeProperty('w-preserve');
        addPreserve(this, false);
    }

    var widgetPreserveBody;
    if ((widgetPreserveBody = props['w-preserve-body']) != null) {
        node.removeProperty('w-preserve-body');
        addPreserve(this, true);
    }
};
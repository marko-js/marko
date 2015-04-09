function addPreserve(transformHelper, bodyOnly) {
    var template = transformHelper.template;
    var compiler = transformHelper.compiler;
    var node = transformHelper.node;

    var preserveNode = compiler.createTagHandlerNode('w-preserve');
    transformHelper.assignWidgetId(true /* repeated */);

    if (bodyOnly) {
        preserveNode.setProperty('bodyOnly', template.makeExpression(bodyOnly));
    }

    var nextVarId = template.data.nextWidgetPreserveId;
    if (nextVarId == null) {
        nextVarId = template.data.nextWidgetPreserveId = 0;
    }

    var idVarName = '__preserve' + (template.data.nextWidgetPreserveId++);
    var idExpression = template.makeExpression(idVarName);
    if (node.tag) {
        transformHelper.getWidgetArgs().setId(template.makeExpression('"!"+' + idExpression));
    } else {
        node.setAttribute('id', idExpression);
    }

    preserveNode.setProperty('id', idExpression);

    var varNode = compiler.createNode('var', {
        name: idVarName,
        value: transformHelper.getIdExpression()
    });

    node.parentNode.insertBefore(varNode, node);

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
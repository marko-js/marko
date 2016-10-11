'use strict';

module.exports = function generateCode(node, codegen, vdomUtil) {
    var context = codegen.context;
    var builder = codegen.builder;

    // node.name = codegen.generateCode(node.name);
    node.value = codegen.generateCode(node.value);
    node.isStatic = vdomUtil.isStaticValue(node.value);

    var name = node.name;

    if (node.value && node.value.type !== 'Literal') {
        if (name === 'class') {
            node.value = builder.functionCall(context.helper('classAttr'), [node.value]);
        } else if (name === 'style') {
            node.value = builder.functionCall(context.helper('styleAttr'), [node.value]);
        }
    }

    return node;
};
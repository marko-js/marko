"use strict";

module.exports = function generateCode(node, codegen, vdomUtil) {
    var context = codegen.context;
    var builder = codegen.builder;

    if (node.value && node.value.type === "TemplateLiteral") {
        node.value.nonstandard = false;
    }

    // node.name = codegen.generateCode(node.name);
    node.value = codegen.generateCode(node.value);
    node.isStatic = vdomUtil.isStaticValue(node.value);
    var name = node.name;

    var attrValue = node.value;

    if (attrValue) {
        if (attrValue.type === "Literal") {
            var literalValue = attrValue.value;

            if (literalValue instanceof RegExp) {
                node.value = builder.literal(literalValue.source);
            }
        } else {
            if (name === "class") {
                node.value = builder.functionCall(
                    context.helper("classValue"),
                    [attrValue]
                );
            } else if (name === "style") {
                node.value = builder.functionCall(
                    context.helper("styleValue"),
                    [attrValue]
                );
            }
        }
    }

    return node;
};

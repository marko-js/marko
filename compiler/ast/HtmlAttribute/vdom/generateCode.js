module.exports = function generateCode(node, codegen, vdomUtil) {
    node.name = codegen.generateCode(node.name);
    node.value = codegen.generateCode(node.value);
    node.isStatic = vdomUtil.isStaticValue(node.value);
    return node;
};
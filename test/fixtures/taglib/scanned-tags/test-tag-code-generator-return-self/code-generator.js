module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    elNode.setAttributeValue('foo', builder.literal('bar'));
    return elNode;
};
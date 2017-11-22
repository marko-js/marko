module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;
    return builder.functionCall('out.write', [builder.binaryExpression('"Hello "', '+', elNode.getAttributeValue('name'))]);
};
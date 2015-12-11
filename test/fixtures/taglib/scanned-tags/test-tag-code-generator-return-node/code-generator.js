module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;
    return builder.functionCall('out.write', [
        builder.binaryExpression('"Hello "', '+', elNode.getAttributeValue('name'))
    ]);
};
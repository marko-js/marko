module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;
    elNode.setAttributeValue('foo', builder.literal('bar'));
    return elNode;
};
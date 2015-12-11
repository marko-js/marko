module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;
    return [
        builder.text(builder.literal('Hello ')),
        builder.text(elNode.getAttributeValue('name'))
    ];
};
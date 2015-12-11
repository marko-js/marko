module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;

    return builder.htmlElement(
        'div',
        {
            'class': builder.literal('greeting')
        },
        [
            builder.text(builder.literal('Hello ')),
            builder.text(elNode.getAttributeValue('name'))
        ]);
};
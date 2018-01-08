module.exports = function generateCode(elNode, codegen) {
    var builder = codegen.builder;

    return builder.htmlElement('div', {
        'class': builder.literal('greeting')
    }, [builder.text(builder.literal('Hello ')), builder.text(elNode.getAttributeValue('name'))]);
};
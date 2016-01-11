module.exports = function nodeFactory(elNode, context) {
    var argument = elNode.argument;

    if (!argument) {
        context.addError(elNode, 'Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>');
        return elNode;
    }

    var attributes = elNode.attributes;

    if (attributes.length) {
        context.addError(elNode, 'Invalid <unless> tag. Attributes not allowed.');
        return;
    }

    var builder = context.builder;

    var test = builder.parseExpression(argument);
    return context.builder.ifStatement(builder.negate(test));
};
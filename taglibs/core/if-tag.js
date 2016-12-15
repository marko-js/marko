module.exports = function nodeFactory(elNode, context) {
    var argument = elNode.argument;

    if (!argument) {
        context.addError('Invalid <if> tag. Argument is missing. Example; <if(foo === true)>');
        return elNode;
    }

    var attributes = elNode.attributes;

    if (attributes.length) {
        context.addError('Invalid <if> tag. Attributes not allowed.');
        return;
    }

    var test;

    try {
        test = context.builder.parseExpression(argument);
    } catch(e) {
        test = context.builder.literalFalse();
        context.addError('Invalid expression for if statement:\n' + e.message);
    }

    return context.builder.ifStatement(test);
};
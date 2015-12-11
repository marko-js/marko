module.exports = function nodeFactory(elNode, context) {
    var argument = elNode.argument;

    if (!argument) {
        context.addError(elNode, 'Invalid <if> tag. Argument is missing. Example; <if(foo === true)>');
        return elNode;
    }

    var attributes = elNode.attributes;

    if (attributes.length) {
        context.addError(elNode, 'Invalid <if> tag. Attributes not allowed.');
        return;
    }

    return context.builder.ifStatement(argument);
};
module.exports = function nodeFactory(el, context) {
    var argument = el.argument;

    var attributes = el.attributes;
    var ifStatement = context.builder.ifStatement(argument || 'INVALID');

    if (!argument) {
        context.addError(ifStatement, 'Invalid <if> tag. Argument is missing. Example; <if(foo === true)>');
    }

    if (attributes.length) {
        context.addError(ifStatement, 'Invalid <if> tag. Attributes not allowed.');
    }

    return ifStatement;
};
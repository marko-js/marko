module.exports = function nodeFactory(el, context) {
    var argument = el.argument;


    var attributes = el.attributes;
    var elseIfStatement = context.builder.elseIfStatement(argument || 'INVALID');

    if (!argument) {
        context.addError(elseIfStatement, 'Invalid <else-if> tag. Argument is missing. Example; <if(foo === true)>');
    }

    if (attributes.length) {
        context.addError(elseIfStatement, 'Invalid <else-if> tag. Attributes not allowed.');
    }

    return elseIfStatement;
};
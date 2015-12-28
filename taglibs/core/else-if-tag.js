module.exports = function nodeFactory(el, context) {
    var argument = el.argument;
    var attributes = el.attributes;


    if (!argument) {
        context.addError(el, 'Invalid <else-if> tag. Argument is missing. Example; <if(foo === true)>');
        return el;
    }

    if (attributes.length) {
        context.addError(el, 'Invalid <else-if> tag. Attributes not allowed.');
        return el;
    }

    var elseIfStatement = context.builder.elseIfStatement(argument);
    return elseIfStatement;
};
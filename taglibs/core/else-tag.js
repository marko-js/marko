module.exports = function nodeFactory(el, context) {
    var attributes = el.attributes;
    var elseStatement = context.builder.elseStatement();

    var argument = el.argument;
    if (argument) {
        context.addError(elseStatement, 'Invalid <else> tag. Argument is not allowed');
    }

    if (attributes.length) {
        context.addError(elseStatement, 'Invalid <else> tag. Attributes not allowed.');
    }

    return elseStatement;
};
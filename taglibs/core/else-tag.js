module.exports = function nodeFactory(el, compiler) {
    var attributes = el.attributes;
    var elseStatement = compiler.builder.elseStatement();

    var argument = el.argument;
    if (argument) {
        compiler.addError('Invalid <else> tag. Argument is not allowed');
    }

    if (attributes.length) {
        compiler.addError(elseStatement, 'Invalid <else> tag. Attributes not allowed.');
    }

    return elseStatement;
};
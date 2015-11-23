module.exports = function nodeFactory(el, compiler) {
    var argument = el.argument;

    var attributes = el.attributes;
    var ifStatement = compiler.builder.ifStatement(argument || 'INVALID');

    if (!argument) {
        compiler.addError(ifStatement, 'Invalid <if> tag. Argument is missing. Example; <if(foo === true)>');
    }

    if (attributes.length) {
        compiler.addError(ifStatement, 'Invalid <if> tag. Attributes not allowed.');
    }

    return ifStatement;
};
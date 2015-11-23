module.exports = function nodeFactory(el, compiler) {
    var argument = el.argument;


    var attributes = el.attributes;
    var elseIfStatement = compiler.builder.elseIfStatement(argument || 'INVALID');

    if (!argument) {
        compiler.addError(elseIfStatement, 'Invalid <else-if> tag. Argument is missing. Example; <if(foo === true)>');
    }

    if (attributes.length) {
        compiler.addError(elseIfStatement, 'Invalid <else-if> tag. Attributes not allowed.');
    }

    return elseIfStatement;
};
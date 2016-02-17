module.exports = function codeGenerator(elNode, codegen) {
    var argument = elNode.argument;
    if (!argument) {
        codegen.addError('Invalid <while> tag. Argument is missing. Example: <while(i < 4)>');
        return elNode;
    }

    var builder = codegen.builder;

    return builder.whileStatement(builder.parseExpression(argument), elNode.body);
};
module.exports = function codeGenerator(elNode, codegen) {
    var context = codegen.context;
    context.deprecate('The "<invoke>" tag is deprecated. Please use "$" for JavaScript in the template. See: https://github.com/marko-js/marko/issues/558');

    var functionAttr = elNode.attributes[0];
    if (!functionAttr) {
        codegen.addError('Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")');
        return;
    }

    var arg = functionAttr.argument;

    if (arg === undefined) {
        codegen.addError('Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")');
        return;
    }

    var functionName = functionAttr.name;
    var functionCallExpression = functionName + '(' + arg + ')';
    return codegen.builder.parseExpression(functionCallExpression);
};

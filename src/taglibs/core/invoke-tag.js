// module.exports = function codeGenerator(elNode, context) {
//     const functionAttr = elNode.attributes[0];
//     const arg = functionAttr.argument;
//     const functionName = functionAttr.name;
//     const functionCallExpression = functionName + "(" + arg + ")";
//     const newNode = context.builder.scriptlet({
//         value: functionCallExpression
//     });

//     context.deprecate(
//         'The "<invoke>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
//     );

//     if (!functionAttr) {
//         context.addError(
//             'Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")'
//         );
//         return;
//     }

//     if (arg === undefined) {
//         context.addError(
//             'Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")'
//         );
//         return;
//     }

//     elNode.insertSiblingBefore(newNode);
//     elNode.detach();
// };
module.exports = function codeGenerator(elNode, codegen) {
    var context = codegen.context;
    context.deprecate(
        'The "<invoke>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    var functionAttr = elNode.attributes[0];
    if (!functionAttr) {
        codegen.addError(
            'Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")'
        );
        return;
    }

    var arg = functionAttr.argument;

    if (arg === undefined) {
        codegen.addError(
            'Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")'
        );
        return;
    }

    var functionName = functionAttr.name;
    var functionCallExpression = functionName + "(" + arg + ")";
    return codegen.builder.parseExpression(functionCallExpression);
};

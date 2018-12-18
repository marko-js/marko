const renderCallToDynamicTag = require("./util/renderCallToDynamicTag");
const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
    const builder = context.builder;
    const functionAttr = elNode.attributes[0];
    const functionArgs = functionAttr.argument;
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);

    context.deprecate(
        'The "<invoke>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!functionAttr) {
        context.addError(
            'Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")'
        );
        return;
    }

    if (functionArgs === undefined) {
        context.addError(
            'Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")'
        );
        return;
    }

    const functionCallExpression = `${functionAttr.name}(${functionArgs})`;
    const functionAst = context.builder.parseExpression(functionCallExpression);
    let replacement = renderCallToDynamicTag(functionAst, context);

    if (replacement) {
        elNode.forEachAttribute(attr => {
            if (attr !== functionAttr) {
                replacement.addAttribute(attr);
            }
        });
    } else {
        replacement = builder.scriptlet({
            value: functionCallExpression
        });
    }

    elNode.replaceWith(replacement);
};

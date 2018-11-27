const isValidJavaScriptVarName = require("../../compiler/util/isValidJavaScriptVarName");
const replacePlaceholderEscapeFuncs = require("../../compiler/util/replacePlaceholderEscapeFuncs");

module.exports = function nodeFactory(elNode, context) {
    const attributes = elNode.attributes;
    const builder = context.builder;
    const firstChild = elNode.firstChild;
    const lastChild = elNode.lastChild;
    let hasError;

    if (!attributes) {
        context.addError(
            "Invalid <var> tag. Argument is missing. Example; <var x=123 />"
        );
        return elNode;
    }

    context.deprecate(
        'The "<var>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (
        firstChild &&
        firstChild.type === "Text" &&
        /^\s+/.test(firstChild.argument.value)
    ) {
        firstChild.argument.value = firstChild.argument.value.trimLeft();
    }

    if (
        lastChild &&
        lastChild.type === "Text" &&
        /\s+$/.test(lastChild.argument.value)
    ) {
        lastChild.argument.value = lastChild.argument.value.trimRight();
    }

    const vars = elNode.attributes.map(attr => {
        const name = attr.name;
        const val = attr.rawValue;

        if (!isValidJavaScriptVarName(attr.name)) {
            hasError = true;
            context.addError(
                "Invalid JavaScript variable name: " + attr.name,
                "INVALID_VAR_NAME"
            );
            return;
        }

        let parsedExpression = val;
        if (val != null) {
            parsedExpression = replacePlaceholderEscapeFuncs(
                builder.parseExpression(val),
                context
            );
        }

        return builder.variableDeclarator(name, parsedExpression);
    });

    if (hasError) {
        return;
    }

    elNode.insertSiblingBefore(
        builder.scriptlet({ value: builder.vars(vars) })
    );
    elNode.forEachChild(node => elNode.insertSiblingBefore(node));
    elNode.detach();
};

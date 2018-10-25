var isValidJavaScriptVarName = require("../../compiler/util/isValidJavaScriptVarName");

module.exports = function nodeFactory(elNode, context) {
    const builder = context.builder;
    let firstChild = elNode.firstChild;
    let lastChild = elNode.lastChild;
    let newNode = null;
    let hasError = false;

    context.deprecate(
        'The "<var>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    elNode.attributes.map(attr => {
        if (!isValidJavaScriptVarName(attr.name)) {
            context.addError(
                "Invalid JavaScript variable name: " + attr.name,
                "INVALID_VAR_NAME"
            );
            hasError = true;
            return;
        }

        newNode = builder.scriptlet({
            value: "var " + attr.name + "=" + attr.rawValue + ";"
        });

        elNode.insertSiblingBefore(newNode);
    });

    if (hasError) {
        return elNode;
    }

    if (
        firstChild &&
        firstChild.type === "Text" &&
        /^\s+/.test(firstChild.argument.value)
    ) {
        firstChild.argument.value = firstChild.argument.value.replace(
            /^\s*/,
            ""
        );
    }

    if (
        lastChild &&
        lastChild.type === "Text" &&
        /^\s+/.test(lastChild.argument.value)
    ) {
        lastChild.argument.value = lastChild.argument.value.replace(/\s*$/, "");
    }

    elNode.body.forEach(node => {
        elNode.insertSiblingBefore(node);
    });

    elNode.detach();
};

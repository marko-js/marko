var isValidJavaScriptVarName = require("../../compiler/util/isValidJavaScriptVarName");

module.exports = function nodeFactory(elNode, context) {
    const builder = context.builder;
    let vars = undefined;
    let newNode = null;
    let hasError = false;

    context.deprecate(
        'The "<var>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    try {
        vars = context.builder.parseStatement(elNode.tagString);
    } catch (e) {
        /* ignore error */
    }

    if (vars) {
        return vars;
    }

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
            value: "var " + attr.name + "=" + attr.rawValue
        });

        elNode.insertSiblingBefore(newNode);
    });

    if (hasError) {
        return elNode;
    }

    elNode.detach();
};

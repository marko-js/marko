const isValidJavaScriptVarName = require("../../compiler/util/isValidJavaScriptVarName");
const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function nodeFactory(elNode, context) {
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);

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

    const scriptlets = elNode.attributes.map(attr => {
        const name = attr.name;
        const val = attr.rawValue;

        if (!isValidJavaScriptVarName(name)) {
            hasError = true;
            context.addError(
                "Invalid JavaScript variable name: " + name,
                "INVALID_VAR_NAME"
            );
            return;
        }

        return builder.scriptlet({
            value: `var ${
                val == null ? name : `${name} = ${printJS(attr.value, context)}`
            }`
        });
    });

    if (hasError) {
        return;
    }

    scriptlets.forEach(scriptlet => elNode.insertSiblingBefore(scriptlet));
    elNode.forEachChild(node => elNode.insertSiblingBefore(node));
    elNode.detach();
};

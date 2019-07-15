module.exports = function migrate(el, context) {
    const tagDef = el.tagDef;
    const hasParamsFlag =
        tagDef && tagDef.featureFlags && tagDef.featureFlags.includes("params");

    if (hasParamsFlag) {
        enableTagParams(el, context);
    }
};

function enableTagParams(el, context) {
    if (el.argument) {
        context.deprecate(
            `The <${el.tagName}(param)> syntax is deprecated. Please use the <${el.tagName}|param|> syntax instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-paren-params`,
            el
        );
        el.params = context.builder.parseJavaScriptParams(el.argument);
        delete el.argument;
    }
    el.forEachChild(childNode => {
        if (isNestedTag(childNode)) {
            enableTagParams(childNode, context);
        }
    });
}

function isNestedTag(node) {
    return node.tagName && node.tagName[0] === "@";
}

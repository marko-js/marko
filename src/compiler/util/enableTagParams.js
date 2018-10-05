module.exports = function enableTagParams(el, context) {
    if (el.argument) {
        var builder = context.builder;
        el.params = builder.parseJavaScriptParams(el.argument);
        el.params.forEach(param => el.addNestedVariable(param));
        delete el.argument;
        context.setFlag("hasTagParams");
        context.exampleTagParam = el;
    }
    el.forEachChild(childNode => {
        if (isNestedTag(childNode)) {
            enableTagParams(childNode, context);
        }
    });
};

function isNestedTag(node) {
    return node.tagName && node.tagName[0] === "@";
}

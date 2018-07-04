module.exports = function enableTagParams(el, builder) {
    if (el.argument) {
        el.params = builder.parseJavaScriptParams(el.argument);
        el.params.forEach(param => el.addNestedVariable(param));
        delete el.argument;
    }
    el.forEachChild(childNode => {
        if (isNestedTag(childNode)) {
            enableTagParams(childNode, builder);
        }
    });
};

function isNestedTag(node) {
    return node.tagName && node.tagName[0] === "@";
}

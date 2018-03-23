"use strict";

module.exports = function transform(oldNode, context) {
    var argument = oldNode.argument;
    if (!argument) {
        context.addError(
            "Invalid <layout-use> tag. Expected: <layout-use(template[, data]) ...>"
        );
        return;
    }

    context.deprecate(
        "The <layout-use> tag is deprecated. Please use <include> instead. See: https://github.com/marko-js/marko/issues/452"
    );

    var newNode = context.createNodeForEl(
        "include",
        oldNode.getAttributes(),
        argument
    );
    oldNode.moveChildrenTo(newNode);

    oldNode.replaceWith(newNode);
};

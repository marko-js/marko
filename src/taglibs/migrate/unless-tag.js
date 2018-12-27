const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function migrator(oldNode, context) {
    if (oldNode.tagName !== "unless") {
        return;
    }
    const attributes = oldNode.attributes;
    const argument = oldNode.argument;
    commonTagMigrator(oldNode, context);
    oldNode.setTransformerApplied(commonTagMigrator);

    context.deprecate(
        'The "<unless(x)>" tag is deprecated. Please use "<if(!x)>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-unless-tag'
    );
    if (!argument) {
        context.addError(
            "Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>"
        );
        return oldNode;
    }
    if (attributes.length) {
        context.addError("Invalid <unless> tag. Attributes not allowed.");
        return oldNode;
    }

    const builder = context.builder;
    const newNode = builder.htmlElement(
        "if",
        undefined,
        [],
        printJS(`!${argument}`, context),
        false,
        false
    );

    oldNode.moveChildrenTo(newNode);
    oldNode.replaceWith(newNode);
};

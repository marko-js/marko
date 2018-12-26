const commonTagMigrator = require("../all-tags");

module.exports = function migrator(oldNode, context) {
    const attributes = oldNode.attributes;
    commonTagMigrator(oldNode, context);
    oldNode.setTransformerApplied(commonTagMigrator);

    context.deprecate(
        'The "<layout-put>" tag is deprecated. Please use "<@tags>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );
    if (!attributes) {
        context.addError(
            'Invalid <layout-put> tag. Attribute is missing. Example; <layout-put into="body"></layout-put>'
        );
        return oldNode;
    }

    const name = oldNode.getAttributeValue("into").value;
    const value = oldNode.getAttributeValue("value");

    oldNode.removeAttribute("into");
    oldNode.removeAttribute("value");

    const newNode = context.createNodeForEl(
        "@" + name,
        oldNode.getAttributes()
    );

    if (value) {
        newNode.appendChild(context.builder.text(value));
    }

    oldNode.moveChildrenTo(newNode);
    oldNode.replaceWith(newNode);
};

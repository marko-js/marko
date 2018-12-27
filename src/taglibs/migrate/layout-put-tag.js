const commonTagMigrator = require("./all-tags");

module.exports = function migrator(oldNode, context) {
    const attributes = oldNode.attributes;
    commonTagMigrator(oldNode, context);
    oldNode.setTransformerApplied(commonTagMigrator);

    context.deprecate(
        'The "<layout-put>" tag is deprecated and replaced with first class language support. See: https://github.com/marko-js/marko/wiki/Deprecation:-layout-tag'
    );
    if (!attributes) {
        context.addError(
            'Invalid <layout-put> tag. Attribute is missing. Example; <layout-put into="body">Some Value</layout-put>'
        );
        return oldNode;
    }

    const builder = context.builder;
    const name = oldNode.getAttributeValue("into").value;
    const value = oldNode.getAttributeValue("value");

    oldNode.removeAttribute("into");
    oldNode.removeAttribute("value");

    const newNode = builder.htmlElement("@" + name, attributes);

    if (value) {
        newNode.appendChild(builder.text(value));
    }

    oldNode.moveChildrenTo(newNode);
    oldNode.replaceWith(newNode);
};

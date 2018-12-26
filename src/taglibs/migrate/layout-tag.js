const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
    const tagName = elNode.tagName;
    const attributes = elNode.attributes;
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);

    if (tagName == "layout-put") {
        context.deprecate(
            'The "<layout-put>" tag is deprecated. Please use "<@tags>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
        );
        if (!attributes) {
            context.addError(
                'Invalid <layout-put> tag. Attribute is missing. Example; <layout-put into="body"></layout-put>'
            );
            return elNode;
        }
    }
};

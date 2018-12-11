const printJS = require("./util/printJS");
const commonTagMigrator = require("./common-tag-migrator");

module.exports = function migrator(elNode, context) {
    const attributes = elNode.attributes;
    const builder = context.builder;
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);

    context.deprecate(
        'The "<assign>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags'
    );

    if (!attributes) {
        context.addError(
            "Invalid <assign> tag. Argument is missing. Example; <assign x=123 />"
        );
        return elNode;
    }

    elNode.attributes.forEach(attr => {
        elNode.insertSiblingBefore(
            builder.scriptlet({
                value:
                    attr.value == null
                        ? attr.name
                        : `${attr.name} = ${printJS(
                              attr.value,
                              context,
                              null,
                              true
                          )}`
            })
        );
    });

    elNode.detach();
};

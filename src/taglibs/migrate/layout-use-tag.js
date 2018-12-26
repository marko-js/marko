const importTag = require("./util/import-tag");
const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function render(elNode, context) {
    context.deprecate(
        "The <layout-use> tag is deprecated. Please use a combination of the <${dynamic}> tag and imports instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-layout-tags"
    );

    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);

    const rawArg = elNode.argument;
    const attributes = elNode.attributes;
    const builder = context.builder;

    if (!rawArg) {
        context.addError(
            "Invalid <layout-use> tag. Expected: <layout-use(template[, data]) ...>"
        );
        return;
    }

    const parsed = builder.parseJavaScriptArgs(rawArg);
    const target = parsed[0];
    const arg = parsed[1];

    if (arg) {
        attributes.unshift({ spread: true, value: arg });
    }

    const dynamicTag = builder.htmlElement(
        undefined,
        attributes,
        undefined,
        undefined,
        true,
        true
    );

    if (target.type === "Literal") {
        dynamicTag.rawTagNameExpression = importTag(target.value, context);
    } else {
        dynamicTag.rawTagNameExpression = printJS(target, context);
    }

    elNode.moveChildrenTo(dynamicTag);
    elNode.replaceWith(dynamicTag);
};

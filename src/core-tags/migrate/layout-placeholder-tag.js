const removeDashes = require("../../compiler/util/removeDashes");
const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function render(elNode, context) {
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);
    context.deprecate(
        "The <layout-placeholder> tag is deprecated. Please use the <${dynamic}> tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-layout-tag"
    );

    const builder = context.builder;
    const name = elNode.getAttributeValue("name");
    const isLiteralString =
        name.type === "Literal" && typeof name.value === "string";
    const target = isLiteralString
        ? builder.memberExpression("input", removeDashes(name.value))
        : builder.memberExpression("input", name, true);
    const dynamicTag = builder.htmlElement();
    const targetStr = (dynamicTag.rawTagNameExpression = printJS(
        target,
        context
    ));

    if (!elNode.firstChild) {
        elNode.replaceWith(dynamicTag);
        return;
    }

    elNode.insertSiblingBefore(
        builder.htmlElement("if", undefined, [dynamicTag], targetStr)
    );

    elNode.insertSiblingBefore(
        builder.htmlElement("else", undefined, elNode.body)
    );

    elNode.detach();
};

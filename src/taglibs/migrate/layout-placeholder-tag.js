const removeDashes = require("../../compiler/util/removeDashes");
const printJS = require("./util/printJS");
const commonTagMigrator = require("./all-tags");

module.exports = function render(elNode, context) {
    context.deprecate(
        "The <layout-placeholder> tag is deprecated. Please use the <${dynamic}> tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-layout-tags"
    );

    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);

    const builder = context.builder;
    const name = elNode.getAttributeValue("name");
    let target;

    if (name.type === "Literal" && typeof name.value === "string") {
        target = builder.memberExpression("input", removeDashes(name.value));
    } else {
        target = builder.memberExpression("input", name, true);
    }

    const dynamicTag = builder.htmlElement(
        undefined,
        undefined,
        undefined,
        undefined,
        true,
        true
    );

    const targetStr = (dynamicTag.rawTagNameExpression = printJS(
        target,
        context
    ));

    if (!elNode.firstChild) {
        elNode.replaceWith(dynamicTag);
        return;
    }

    elNode.insertSiblingBefore(
        builder.htmlElement(
            "if",
            undefined,
            [dynamicTag],
            targetStr,
            context,
            false,
            false
        )
    );

    elNode.insertSiblingBefore(
        builder.htmlElement(
            "else",
            undefined,
            elNode.body,
            undefined,
            false,
            false
        )
    );

    elNode.detach();
};

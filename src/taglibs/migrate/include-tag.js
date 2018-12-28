const printJS = require("./util/printJS");
const importTag = require("./util/import-tag");
const commonTagMigrator = require("./all-tags");

module.exports = function migrator(elNode, context) {
    commonTagMigrator(elNode, context);
    elNode.setTransformerApplied(commonTagMigrator);
    context.deprecate(
        'The "<include>" tag is deprecated. Please use the "<${dynamic}/>" tag or regular text replacement instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-include-tag'
    );

    const builder = context.builder;
    const rawArg = elNode.argument;

    if (!rawArg) {
        context.addError(
            elNode,
            'The <include(...)> tag must have an argument: <include("./target.marko")/> or <include(data.renderBody)/>'
        );

        return;
    }

    const attributes = elNode.attributes;
    const parsed = builder.parseJavaScriptArgs(rawArg);
    const target = parsed[0];
    const arg = parsed[1];

    if (arg) {
        attributes.unshift({ spread: true, value: arg });
    }

    const dynamicTag = builder.htmlElement(undefined, attributes, elNode.body);

    if (target.type === "Literal") {
        dynamicTag.rawTagNameExpression = importTag(target.value, context);
        elNode.replaceWith(dynamicTag);
    } else {
        dynamicTag.rawTagNameExpression = printJS(target, context);
        elNode.insertSiblingBefore(
            builder.htmlElement(
                "if",
                undefined,
                [builder.text(target)],
                printJS(
                    builder.binaryExpression(
                        builder.unaryExpression(target, "typeof", true),
                        "===",
                        builder.literal("string")
                    ),
                    context
                )
            )
        );
        elNode.insertSiblingBefore(
            builder.htmlElement("else", undefined, [dynamicTag])
        );
        elNode.detach();
    }
};

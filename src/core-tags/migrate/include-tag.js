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
        const isMemberOrIdentifer =
            target.type === "MemberExpression" || target.type === "Identifier";
        let finalTarget = target;

        if (!isMemberOrIdentifer) {
            const complexIncludeIdentifierCount = (context._complexIncludeIdentifierCount =
                (context._complexIncludeIdentifierCount || 0) + 1);
            let identifierName = "includeTarget";

            if (complexIncludeIdentifierCount !== 1) {
                identifierName += `_${complexIncludeIdentifierCount}`;
            }

            elNode.insertSiblingBefore(
                builder.scriptlet({
                    value: builder.vars({
                        [identifierName]: target
                    })
                })
            );

            finalTarget = builder.identifier(identifierName);
        }
        dynamicTag.rawTagNameExpression = printJS(finalTarget, context);
        elNode.insertSiblingBefore(
            builder.htmlElement(
                "if",
                undefined,
                [builder.text(finalTarget)],
                printJS(
                    builder.binaryExpression(
                        builder.unaryExpression(finalTarget, "typeof", true),
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

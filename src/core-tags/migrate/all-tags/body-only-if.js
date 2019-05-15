const printJS = require("../util/printJS");
const importTag = require("../util/import-tag");
module.exports = function migrator(node, context) {
    const argument = node.getAttribute("body-only-if");

    if (argument) {
        context.deprecate(
            'The "body-only-if(x)" tag is deprecated. Please use "<${test ? null : tag>" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-body-only-if-tag'
        );
        const builder = context.builder;

        node.removeAttribute("body-only-if");
        const attributes = node.attributes;
        const tagDef = node.tagDef || {};
        const dynamicTag = builder.htmlElement(
            undefined,
            attributes,
            node.body
        );
        let tagName =
            node.rawTagNameExpression || builder.literal(node.tagName);

        // If tag is dynamic and not a normal HTML tag, then render dynamic version of tagName
        if (!tagDef.html) {
            tagName = importTag(tagDef.renderer || tagDef.template, context);
        }

        dynamicTag.rawTagNameExpression = printJS(
            builder.conditionalExpression(
                builder.expression(argument.argument),
                builder.literalNull(),
                tagName
            ),
            context
        );

        node.replaceWith(dynamicTag);
    }
};

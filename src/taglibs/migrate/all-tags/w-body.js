const printJS = require("../util/printJS");

module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-body")) {
        context.deprecate(
            'The "w-body" attribute is deprecated. Please use the "<${dynamicTag}/>" tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-Widget-body-(w-body)'
        );

        const builder = context.builder;
        const bodyValue =
            el.getAttributeValue("w-body") || builder.identifier("input");
        let renderBodyValue = bodyValue;

        el.removeAttribute("w-body");

        if (
            bodyValue.type !== "MemberExpression" ||
            bodyValue.property.name !== "renderBody"
        ) {
            renderBodyValue = builder.memberExpression(
                bodyValue,
                builder.identifier("renderBody")
            );
        }

        const dynamicTag = builder.htmlElement(
            undefined,
            [],
            undefined,
            undefined,
            true,
            true
        );

        dynamicTag.rawTagNameExpression = printJS(bodyValue, context);

        el.appendChildren([
            builder.htmlElement(
                "if",
                undefined,
                [dynamicTag],
                `typeof ${printJS(renderBodyValue, context)} === 'function'`,
                context,
                false,
                false
            ),
            builder.htmlElement(
                "else",
                undefined,
                [builder.text(renderBodyValue)],
                undefined,
                false,
                false
            )
        ]);
    }
};

const printJS = require("../util/printJS");

module.exports = function migrate(el, context) {
    if (!el.hasAttribute("w-body")) {
        return;
    }

    context.deprecate(
        'The "w-body" attribute is deprecated. Please use the "<${dynamicTag}/>" tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-Widget-body-(w-body)'
    );

    const builder = context.builder;
    const defaultValue = builder.identifier("input");
    const bodyValue = el.getAttributeValue("w-body") || defaultValue;
    const isDefault = bodyValue.name === defaultValue.name;
    const dynamicTag = builder.htmlElement();
    const renderBodyValue = builder.memberExpression(
        bodyValue,
        builder.identifier("renderBody")
    );
    const condition = builder.binaryExpression(
        builder.unaryExpression(renderBodyValue, "typeof", true),
        "===",
        builder.literal("function")
    );

    dynamicTag.rawTagNameExpression = printJS(bodyValue, context);

    el.removeAttribute("w-body");
    el.appendChildren([
        builder.htmlElement(
            "if",
            undefined,
            [dynamicTag],
            printJS(
                isDefault
                    ? condition
                    : builder.binaryExpression(bodyValue, "&&", condition),
                context
            )
        ),
        builder.htmlElement("else", undefined, [
            builder.text(isDefault ? renderBodyValue : bodyValue)
        ])
    ]);
};

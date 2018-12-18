const printJS = require("../util/printJS");

module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-body")) {
        context.deprecate(
            `The "w-body" attribute is deprecated. Please use "<\${dynamicTag}/>" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        const builder = context.builder;
        const bodyValue =
            el.getAttributeValue("w-body") || builder.identifier("input");
        el.removeAttribute("w-body");

        const ifExpressionArg = `typeof ${builder.identifier(
            "renderBody"
        )} === 'string'`;
        const ifTag = builder.htmlElement(
            "if",
            undefined,
            [builder.text(bodyValue)],
            printJS(ifExpressionArg, context),
            false,
            false
        );
        const elseTag = builder.htmlElement(
            "else",
            undefined,
            [bodyValue],
            undefined,
            false,
            false
        );
        el.appendChildren([ifTag, elseTag]);
    }
};

module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-body")) {
        context.deprecate(
            `The "w-body" attribute is deprecated. Please use "<\${dynamicTag}>" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        const builder = context.builder;
        const bodyValue =
            el.getAttributeValue("w-body") || builder.identifier("input");
        el.removeAttribute("w-body");

        const childEl = builder.ifStatement(
            `typeof ${builder.identifier("renderBody")} === 'string'`,
            [builder.identifier("renderBody")],
            bodyValue
        );
        el.appendChild(childEl);
    }
};

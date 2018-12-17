const renderCallToDynamicTag = require("../util/renderCallToDynamicTag");

module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-body")) {
        context.deprecate(
            `The "w-body" attribute is deprecated. Please use "<\${dynamicTag}>" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        const builder = context.builder;
        const bodyValue = el.getAttributeValue("w-body") || {
            value: "input"
        };
        el.removeAttribute("w-body");
        const functionCallExpression = `${bodyValue.value}(out)`;
        const functionAst = builder.parseExpression(functionCallExpression);
        const childEl = renderCallToDynamicTag(functionAst, context);
        el.appendChild(childEl);
    }
};

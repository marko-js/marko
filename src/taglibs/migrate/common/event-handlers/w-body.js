const renderCallToDynamicTag = require("../../util/renderCallToDynamicTag");

module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-body")) {
        context.deprecate(
            `The "w-body" attribute is deprecated. Please use "<\${dynamicTag}>" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        const bodyValue = el.getAttributeValue("w-body") || {
            value: "input.renderBody"
        };
        el.removeAttribute("w-body");
        const functionCallExpression = `${bodyValue.value}(out)`;
        const functionAst = context.builder.parseExpression(
            functionCallExpression
        );
        const childEl = renderCallToDynamicTag(functionAst, context);
        el.appendChild(childEl);
    }
};

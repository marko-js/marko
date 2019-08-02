const CONTROL_FLOW_ATTRIBUTES = [
    "while",
    "for",
    "if",
    "unless",
    "else-if",
    "else"
];

module.exports = function migrate(el, context) {
    const builder = context.builder;

    el.forEachAttribute(attr => {
        const name = attr.name;
        if (
            CONTROL_FLOW_ATTRIBUTES.includes(name) &&
            (name === "else" || attr.argument) &&
            !(el.tagName === "else" && name === "if") // <else if(x)> gets passed through
        ) {
            context.deprecate(
                `The "${name}" attribute is deprecated. Please use the <${name}> tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-control-flow-attributes`
            );
            el.removeAttribute(name);
            el.wrapWith(
                builder.htmlElement(name, undefined, undefined, attr.argument)
            );
        }
    });
};

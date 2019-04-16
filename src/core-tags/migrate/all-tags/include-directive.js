module.exports = function migrate(el, context) {
    const builder = context.builder;
    const attr = el.getAttribute("include");

    if (!attr) {
        return;
    }

    context.deprecate(
        'The "include" attribute is deprecated. Please use the <${dynamic}> tag instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-include-tag'
    );

    el.removeAttribute("include");
    el.appendChild(
        builder.htmlElement("include", undefined, undefined, attr.argument)
    );
};

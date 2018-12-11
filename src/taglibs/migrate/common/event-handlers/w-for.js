module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-for")) {
        el.forEachAttribute(attr => {
            const name = attr.name;
            if (!name || name != "w-for") {
                return;
            }

            context.deprecate(
                `The "w-for" attribute is deprecated. Please use "for:scoped" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );

            el.setAttributeValue("for:scoped", attr.value);
            el.removeAttribute(attr.name);
        });
    }
};

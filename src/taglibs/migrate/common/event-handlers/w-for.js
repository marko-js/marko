module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-for") || el.hasAttribute("for-key")) {
        el.forEachAttribute(attr => {
            const name = attr.name;
            if (!name || (name != "w-for" && name != "for-key")) {
                return;
            }

            context.deprecate(
                `The "w-for" and "for-key" attributes are deprecated. Please use "for:scoped" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );

            if (!el.hasAttribute("for:scoped")) {
                el.setAttributeValue("for:scoped", attr.value);
                el.removeAttribute(attr.name);
            }
        });
    }
};

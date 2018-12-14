const addIdScopedAttr = require("../util/addIdScopedAttr");

module.exports = function migrate(el, context) {
    if (
        el.hasAttribute("w-for") ||
        el.hasAttribute("for-key") ||
        el.hasAttribute("for-ref")
    ) {
        el.forEachAttribute(attr => {
            const name = attr.name;
            if (
                !name ||
                (name != "w-for" && name != "for-key" && name != "for-ref")
            ) {
                return;
            }

            context.deprecate(
                `The "w-for", "for-key" and "for-ref" attributes are deprecated. Please use "for:scoped" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );

            if (!el.hasAttribute("for:scoped")) {
                el.setAttributeValue("for:scoped", attr.value);
                el.removeAttribute(attr.name);
            }
            addIdScopedAttr(context, el, attr.value);
        });
    }
};

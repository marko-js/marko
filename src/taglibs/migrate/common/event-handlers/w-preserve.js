module.exports = function migrate(el, context) {
    if (el.hasAttribute("w-preserve")) {
        el.forEachAttribute(attr => {
            const name = attr.name;
            if (!name || name != "w-preserve") {
                return;
            }

            context.deprecate(
                `The "w-preserve" attribute is deprecated. Please use "no-update" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );

            el.setAttributeValue("no-update");
            el.removeAttribute(attr.name);
        });
    }
};

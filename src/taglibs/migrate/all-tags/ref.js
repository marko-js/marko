module.exports = function migrate(el, context) {
    if (el.hasAttribute("ref")) {
        el.forEachAttribute(attr => {
            let name = attr.name;
            if (!name || name != "ref") {
                return;
            }

            context.deprecate(
                `The "ref" attribute is deprecated. Please use "key" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-ref-attribute`
            );

            el.setAttributeValue("key", attr.value);
            el.removeAttribute(attr.name);
        });
    }
};

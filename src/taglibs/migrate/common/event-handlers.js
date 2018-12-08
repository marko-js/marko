module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        let name = attr.name;
        if (!name || !name.startsWith("w-on")) {
            return;
        }

        context.deprecate(
            `The "w-on-*" attribute is deprecated. Please use the on-* attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        name = name.substring("w-on".length);
        if (name.startsWith("-")) name = name.substring("-".length);
        attr.name = `on-${name.toLowerCase()}`;
        attr.argument = attr.value.toString();
        attr.value = null;
    });
};

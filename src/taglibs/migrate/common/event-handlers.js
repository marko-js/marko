module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const name = attr.name;
        if (!name || !name.startsWith("w-on")) {
            return;
        }

        context.deprecate(
            `The "w-on-*" attribute is deprecated. Please use the on-* attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-control-flow-directive`
        );

        attr.name = name.substring("w-".length);
        attr.argument = attr.value.toString();
        attr.value = null;
    });
};

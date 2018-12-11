module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const name = attr.name;
        if (name.endsWith(":key")) {
            context.deprecate(
                `The ":key" modifier is deprecated. Please use ":scoped" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );

            let nameNoModifier = name.slice(0, 0 - ":key".length);
            attr.name = nameNoModifier + ":scoped";
        }
    });
};

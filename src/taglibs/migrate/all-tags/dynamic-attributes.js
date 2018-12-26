module.exports = function migrate(el, context) {
    el.forEachAttribute((attr, index) => {
        if (!attr.name && !attr.spread) {
            context.deprecate(
                'The "${attributes}" is deprecated. Please use "...attributes" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes'
            );
            el.attributes.splice(index, 1);
            el.addAttribute({
                value: attr.value,
                spread: true
            });
        }
    });
};

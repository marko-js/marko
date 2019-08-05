module.exports = function migrate(el, context) {
    el.forEachAttribute((attr, index) => {
        if (!attr.name && !attr.spread) {
            context.deprecate(
                'The "${attributes}" is deprecated. Please use "...attributes" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes'
            );
            const attribute = el.attributes.splice(index, 1)[0];
            attribute.spread = true;
            el.attributes.unshift(attribute);
        }
    });
};

module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        if (
            attr.name == undefined &&
            (attr.value.type == "MemberExpression" ||
                attr.value.type == "Identifier")
        ) {
            context.deprecate(
                'The "${attributes}" is deprecated. Please use "...attributes" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes'
            );
            attr.spread = true;
        }
    });
};

module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const name = attr.name;
        const value = attr.value;
        if (
            name == undefined &&
            (value.type == "MemberExpression" || value.type == "Identifier")
        ) {
            context.deprecate(
                'The "${attributes}" is deprecated. Please use "...attributes" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes'
            );
            attr.spread = true;
            if (value.property && value.property.value == "*") {
                el.dynamicAttributes = [];
                if (el.addDynamicAttributes) el.addDynamicAttributes(value);
            }
        }
    });
};

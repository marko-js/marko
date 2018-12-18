module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const value = attr.value;

        if (
            !value ||
            value.type !== "FunctionCall" ||
            value.callee.type !== "MemberExpression" ||
            (value.callee.object.name !== "widget" &&
                value.callee.object.name !== "component") ||
            value.callee.property.name !== "elId"
        ) {
            return;
        }

        context.deprecate(
            `The "*=widget.elId("someId")" is deprecated. Please use "*:scoped="someId"" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        attr.name += ":scoped";
        attr.value = value.args[0];
    });
};

module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        let name = attr.name;
        const value = attr.value ? attr.value.toString() : undefined;
        if (!value || !value.startsWith("widget.elId")) {
            return;
        }

        const argument = attr.argument;
        context.deprecate(
            `The "*=widget.elId("someId")" is deprecated. Please use "*:scoped="someId"" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
        );

        name = `${attr.name}:scoped`;
        el.setAttributeValue(name, argument);
        el.removeAttribute(attr.name);
    });
};

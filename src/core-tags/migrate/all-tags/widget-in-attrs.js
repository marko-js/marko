module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const value = attr.value;

        if (
            isWidgetElIdFunctionCall(value) &&
            el.tagName !== "var" &&
            el.tagName !== "assign"
        ) {
            context.deprecate(
                `The "*=widget.elId("someId")" is deprecated. Please use "*:scoped="someId"" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );

            attr.name += ":scoped";
            attr.value = value.args[0];
            return;
        }

        let found;
        const walker = context.createWalker({
            enter(node) {
                if (isWidgetMemberExpression(node)) {
                    node.object.name = "component";
                    found = true;
                }
            }
        });
        walker.walk(value);

        if (found) {
            context.deprecate(
                `The "widget" variable is deprecated. Please use "component" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-widget-identifier`
            );
        }
    });
};

function isWidgetElIdFunctionCall(value) {
    return (
        value &&
        value.type === "FunctionCall" &&
        isWidgetMemberExpression(value.callee) &&
        value.callee.property.name === "elId"
    );
}

function isWidgetMemberExpression(value) {
    return (
        value &&
        value.type === "MemberExpression" &&
        value.object.name === "widget"
    );
}

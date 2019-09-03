const addIdScopedAttr = require("../util/addIdScopedAttr");
const componentElId = /^(component\.(?:getE|e)lId)\((.*)\)$/;

module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        let name = attr.name;
        let value = attr.value;
        let match;

        if (name && name.endsWith(":key")) {
            context.deprecate(
                `The ":key" modifier is deprecated. Please use ":scoped" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
            );
            name = name.slice(0, 0 - ":key".length) + ":scoped";
        } else if ((match = componentElId.exec(attr.rawValue))) {
            context.deprecate(
                `Using ${
                    match[1]
                } is deprecated. Please use ":scoped" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
            );
            name += ":scoped";
            value = context.builder.parseExpression(match[2]);
        } else {
            // skip this attribute
            return;
        }

        el.setAttributeValue(name, value);
        el.removeAttribute(attr.name);
        addIdScopedAttr(context, el, value);
    });
};

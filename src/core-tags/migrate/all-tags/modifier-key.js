const addIdScopedAttr = require("../util/addIdScopedAttr");

module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const name = attr.name;
        if (!name || !name.endsWith(":key")) {
            return;
        }
        context.deprecate(
            `The ":key" modifier is deprecated. Please use ":scoped" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
        );

        let nameNoModifier = name.slice(0, 0 - ":key".length);
        let modifiedName = nameNoModifier + ":scoped";
        el.setAttributeValue(modifiedName, attr.value);
        el.removeAttribute(attr.name);

        addIdScopedAttr(context, el, attr.value);
    });
};

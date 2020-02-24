const newTags = {
    "w-preserve": "no-update",
    "w-preserve-if": "no-update-if",
    "w-preserve-body": "no-update-body",
    "w-preserve-body-if": "no-update-body-if"
};
module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        const name = attr.name;
        if (!name || !Object.keys(newTags).includes(name)) {
            return;
        }

        const newAttrName = newTags[name];
        context.deprecate(
            `The "${name}" attribute is deprecated. Please use "${newAttrName}" attribute instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
        );

        attr.name = newAttrName;
    });
};

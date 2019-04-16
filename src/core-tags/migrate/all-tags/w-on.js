const printJS = require("../util/printJS");
const findBoundParent = require("../util/findBoundParent");

module.exports = function migrate(el, context) {
    el.forEachAttribute(attr => {
        let name = attr.name;
        if (!name || !name.startsWith("w-on")) {
            return;
        }

        if (findBoundParent(el)) {
            context.deprecate(
                `The "w-on*" attributes are deprecated. Please use "on*()" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );
        } else {
            context.deprecate(
                `Using "w-on*" in a template without a "w-bind" is deprecated. The "w-on*" attributes are also deprecated. Please use "on*()" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes`
            );
            context.setMigrationFlag("legacyWidgetAttrsWithoutBind");
        }

        name = name.substring("w-on".length);
        if (name.startsWith("-")) name = name.substring("-".length);
        attr.name = `on${name.charAt(0).toUpperCase() + name.slice(1)}`;
        attr.argument = printJS(attr.value, context);
        attr.value = null;
    });
};

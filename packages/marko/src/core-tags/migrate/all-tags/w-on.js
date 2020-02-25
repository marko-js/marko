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
        `The "w-on*" attributes are deprecated. Please use "on*()" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
      );
    } else {
      context.deprecate(
        `Using "w-on*" in a template without a "w-bind" is deprecated. The "w-on*" attributes are also deprecated. Please use "on*()" instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w‐*-Attributes`
      );
      context.setMigrationFlag("legacyWidgetAttrsWithoutBind");
    }

    name = name.slice("w-on".length);
    const isNativeTag = el.tagDef && el.tagDef.html;
    const isCamelCase = name[0] !== "-";

    if (isNativeTag) {
      name = name.toLowerCase();
    } else if (isCamelCase) {
      name = name[0].toLowerCase() + name.slice(1);
    }

    if (isCamelCase) {
      name = "-" + name;
    }

    attr.name = `on${name}`;
    attr.argument = printJS(attr.value, context);
    attr.value = null;
  });
};

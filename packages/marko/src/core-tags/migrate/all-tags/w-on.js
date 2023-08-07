const printJS = require("../util/printJS");
const findBoundParent = require("../util/findBoundParent");

module.exports = function migrate(el, context) {
  el.forEachAttribute((attr) => {
    let name = attr.name;
    if (!name || !name.startsWith("w-on")) {
      return;
    }

    if (!findBoundParent(el)) {
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

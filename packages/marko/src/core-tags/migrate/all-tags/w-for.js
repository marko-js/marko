const addIdScopedAttr = require("../util/addIdScopedAttr");
const findBoundParent = require("../util/findBoundParent");

module.exports = function migrate(el, context) {
  if (
    el.hasAttribute("w-for") ||
    el.hasAttribute("for-key") ||
    el.hasAttribute("for-ref")
  ) {
    el.forEachAttribute((attr) => {
      const name = attr.name;
      if (
        !name ||
        (name != "w-for" && name != "for-key" && name != "for-ref")
      ) {
        return;
      }

      if (name === "w-for" && !findBoundParent(el)) {
        context.setMigrationFlag("legacyWidgetAttrsWithoutBind");
      }

      if (el.hasAttribute("for:scoped")) {
        context.addError(
          `The "${name}" attribute cannot be used in conjunction with "for:scoped".`
        );
        return;
      }

      el.setAttributeValue("for:scoped", attr.value);
      el.removeAttribute(attr.name);
      addIdScopedAttr(context, el, attr.value);
    });
  }
};

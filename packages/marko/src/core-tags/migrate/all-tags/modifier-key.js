const addIdScopedAttr = require("../util/addIdScopedAttr");
const componentElId = /^component\.(?:getE|e)lId\(.*\)$/;

module.exports = function migrate(el, context) {
  el.forEachAttribute((attr) => {
    let name = attr.name;
    let value = attr.value;

    if (name && name.endsWith(":key")) {
      name = name.slice(0, 0 - ":key".length) + ":scoped";
    } else if (
      value &&
      value.type === "FunctionCall" &&
      componentElId.test(attr.rawValue)
    ) {
      name += ":scoped";
      value = value.args[0];
    } else {
      // skip this attribute
      return;
    }

    el.setAttributeValue(name, value);
    el.removeAttribute(attr.name);
    addIdScopedAttr(context, el, value);
  });
};

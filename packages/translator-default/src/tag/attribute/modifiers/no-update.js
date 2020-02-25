import { types as t } from "@marko/babel-types";

const hasMonkeyPatch = new WeakSet();

/**
 * Does nothing in html mode.
 */
export default {
  exit(tag, attr) {
    const { node, hub } = tag;
    const { properties } = node;
    const isVDOM = hub.options.output !== "html";
    let prop = properties.find(({ key: { name } }) => name === "noupdate");

    if (!prop) {
      prop = t.objectProperty(t.identifier("noupdate"), t.arrayExpression([]));
      properties.push(prop);

      if (isVDOM && !hasMonkeyPatch.has(hub)) {
        hasMonkeyPatch.add(hub);
        hub.importDefault(tag, "marko/src/runtime/vdom/preserve-attrs");
      }
    }

    prop.value.elements.push(t.stringLiteral(attr.node.name));
  }
};

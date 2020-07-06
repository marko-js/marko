import { types as t } from "@marko/babel-types";

const hasMonkeyPatch = new WeakSet();

/**
 * Does nothing in html mode.
 */
export default {
  exit(tag, attr) {
    const {
      node,
      hub: { file }
    } = tag;
    const { properties } = node;
    const isVDOM = file._markoOptions.output !== "html";
    let prop = properties.find(({ key: { name } }) => name === "noupdate");

    if (!prop) {
      prop = t.objectProperty(t.identifier("noupdate"), t.arrayExpression([]));
      properties.push(prop);

      if (isVDOM && !hasMonkeyPatch.has(file)) {
        hasMonkeyPatch.add(file);
        file.importDefault(tag, "marko/src/runtime/vdom/preserve-attrs");
      }
    }

    prop.value.elements.push(t.stringLiteral(attr.node.name));
  }
};

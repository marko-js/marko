import { types as t } from "@marko/babel-types";
import { importDefault } from "@marko/babel-utils";

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
    const isVDOM = file.markoOpts.output !== "html";
    let prop = properties.find(({ key: { name } }) => name === "pa");

    if (!prop) {
      prop = t.objectProperty(t.identifier("pa"), t.arrayExpression([]));
      properties.push(prop);

      if (isVDOM && !hasMonkeyPatch.has(file)) {
        hasMonkeyPatch.add(file);
        importDefault(file, "marko/src/runtime/vdom/preserve-attrs");
      }
    }

    prop.value.elements.push(t.stringLiteral(attr.node.name));
  }
};

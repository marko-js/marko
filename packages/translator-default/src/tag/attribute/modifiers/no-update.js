import { importDefault } from "@marko/babel-utils";

const hasMonkeyPatch = new WeakSet();

/**
 * Does nothing in html mode.
 */
export default {
  exit(tag, attr) {
    const {
      node,
      hub: { file },
    } = tag;
    const isVDOM = file.markoOpts.output !== "html";

    if (!node.preserveAttrs) {
      node.preserveAttrs = [];

      if (isVDOM && !hasMonkeyPatch.has(file)) {
        hasMonkeyPatch.add(file);
        importDefault(file, "marko/src/runtime/vdom/preserve-attrs.js");
      }
    }

    node.preserveAttrs.push(attr.node.name);
  },
};

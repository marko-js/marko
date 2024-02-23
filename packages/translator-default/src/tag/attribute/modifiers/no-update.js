/**
 * Does nothing in html mode.
 */
export default {
  exit(tag, attr) {
    const { node } = tag;

    if (!node.preserveAttrs) {
      node.preserveAttrs = [];
    }

    node.preserveAttrs.push(attr.node.name);
  },
};

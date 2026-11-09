import type { types as t } from "@marko/compiler";

// Leaves a refined attribute's value without a source location, as a node a
// migrator or transform builds is.
export default {
  MarkoAttribute({ node }) {
    if (node.modifier) node.value.loc = null;
  },
} satisfies t.Visitor;

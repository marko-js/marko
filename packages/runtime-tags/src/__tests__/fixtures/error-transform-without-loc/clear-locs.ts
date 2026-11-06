import type { types as t } from "@marko/compiler";

// Leaves each argument, parameter and attribute named `built` without a
// source location, as a node a migrator or transform builds is.
export default {
  MarkoTag({ node }) {
    clearLocs(node.arguments);
    clearLocs(node.body.params);
    clearLocs(node.attributes);
  },
} satisfies t.Visitor;

function clearLocs(nodes: t.Node[] | null | undefined) {
  if (nodes) {
    for (const node of nodes) {
      if (
        (node.type === "Identifier" || node.type === "MarkoAttribute") &&
        node.name === "built"
      ) {
        node.loc = null;
      }
    }
  }
}

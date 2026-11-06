import { types as t } from "@marko/compiler";

// Swaps the method for a copy, which keeps its `loc` but, as Babel's
// `cloneNode` does, drops `start` and `end`.
export default {
  MarkoAttribute({ node }) {
    node.value = t.cloneNode(node.value, true);
  },
} satisfies t.Visitor;

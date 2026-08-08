import { types as t } from "@marko/compiler";

import evaluate from "./evaluate";
import { getHTMLRuntime } from "./runtime";
import { getNodeContentType } from "./sections";

// A run of adjacent static text (literal `MarkoText` and confident non-void escaped
// `${...}`) becomes one DOM text node; only the node starting a run emits a walk step.
export function isStaticText(node?: t.Node) {
  switch (node?.type) {
    case "MarkoText":
      return true;
    case "MarkoPlaceholder": {
      if (node.escape) {
        const { confident, computed } = evaluate(node.value);
        return confident && getHTMLRuntime()._escape(computed) !== "";
      }
      return false;
    }
  }
}

export function getPrevStaticSibling(path: t.NodePath) {
  let prev = path.getPrevSibling();
  // A sibling that renders no node does not break the run, so the text on both
  // sides still merges into one node and must emit only one walk step.
  while (
    prev.node &&
    (getNodeContentType(prev as t.NodePath<t.Statement>, "endType") === null ||
      (prev.isMarkoPlaceholder() && isEmptyPlaceholder(prev.node)))
  ) {
    prev = prev.getPrevSibling();
  }

  return prev.node;
}

// Asking the runtime's own text writers keeps these checks in lockstep with
// what would render (`""`, `NaN` and `0n` write nothing).
function isEmptyPlaceholder(placeholder: t.MarkoPlaceholder) {
  const { confident, computed } = evaluate(placeholder.value);
  return (
    confident &&
    getHTMLRuntime()[placeholder.escape ? "_escape" : "_unescaped"](
      computed,
    ) === ""
  );
}

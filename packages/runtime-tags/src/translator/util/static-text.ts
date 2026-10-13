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
    case "MarkoPlaceholder":
      return node.escape && !!getStaticPlaceholderText(node);
  }
}

export function getPrevStaticSibling(path: t.NodePath) {
  let prev = path.getPrevSibling();
  // A sibling that renders no node does not break the run, so the text on both
  // sides still merges into one node and must emit only one walk step.
  while (
    prev.node &&
    (getNodeContentType(prev as t.NodePath<t.Statement>, "endType") === null ||
      (prev.isMarkoPlaceholder() && getStaticPlaceholderText(prev.node) === ""))
  ) {
    prev = prev.getPrevSibling();
  }

  return prev.node;
}

// What a placeholder known at compile time writes. Asking the runtime's own text
// writers keeps these checks in lockstep with it (`""`, `NaN` and `0n` write nothing).
export function getStaticPlaceholderText(placeholder: t.MarkoPlaceholder) {
  const { confident, computed } = evaluate(placeholder.value);
  if (confident) {
    return getHTMLRuntime()[placeholder.escape ? "_escape" : "_unescaped"](
      computed,
    );
  }
}

import { types as t } from "@marko/compiler";

import { isNotVoid, isVoid } from "../../common/helpers";
import evaluate from "./evaluate";
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
        return confident && isNotVoid(computed);
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

function isEmptyPlaceholder(placeholder: t.MarkoPlaceholder) {
  const { confident, computed } = evaluate(placeholder.value);
  return confident && isVoid(computed);
}

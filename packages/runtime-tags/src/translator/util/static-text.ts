import { types as t } from "@marko/compiler";

import { isNotVoid, isVoid } from "../../common/helpers";
import evaluate from "./evaluate";

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
  while (
    prev.node &&
    (prev.isMarkoComment() ||
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

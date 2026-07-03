import { types as t } from "@marko/compiler";

import { isNotVoid, isVoid } from "../../common/helpers";
import evaluate from "./evaluate";

// A run of adjacent static text -- literal `MarkoText` and confident, non-void
// escaped `${...}` placeholders (comments between them are stripped, so the
// surrounding text merges) -- is written into the template as a single DOM
// text node. Exactly one node in the run may contribute a walk step, so each
// node emits its own step only when it starts a run, i.e. when its previous
// meaningful sibling is not itself static text.
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

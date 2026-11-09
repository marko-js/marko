import { types as t } from "@marko/compiler";

import { getMemberExpressionPropString } from "../util/to-property-name";

// Marko 5's `out.global` is `$global` in a Tags template, so one the interop
// translator compiles reads it as that.
export default {
  ReferencedIdentifier(identifier) {
    if (identifier.node.name !== "out" || identifier.scope.hasBinding("out")) {
      return;
    }
    const { parent } = identifier;
    if (
      t.isMemberExpression(parent) &&
      getMemberExpressionPropString(parent) === "global"
    ) {
      identifier.parentPath.replaceWith(t.identifier("$global"));
    } else {
      throw identifier.buildCodeFrameError(
        "Only `out.global` is supported for compatibility.",
      );
    }
  },
} satisfies t.Visitor;

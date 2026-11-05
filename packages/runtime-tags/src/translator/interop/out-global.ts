import { types as t } from "@marko/compiler";

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
      t.isIdentifier(parent.property) &&
      parent.property.name === "global"
    ) {
      identifier.parentPath.replaceWith(t.identifier("$global"));
    } else {
      throw identifier.buildCodeFrameError(
        "Only `out.global` is supported for compatibility.",
      );
    }
  },
} satisfies t.Visitor;

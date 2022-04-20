import { types as t } from "@marko/compiler";
import isStatic from "../util/is-static";
import { currentProgramPath } from "./program";

const outGlobalIdentifiers = new WeakMap<t.NodePath<t.Program>, t.Identifier>();

export default {
  migrate(identifier: t.NodePath<t.Identifier>) {
    if (identifier.node.name === "out" && !identifier.scope.hasBinding("out")) {
      if (
        t.isMemberExpression(identifier.parent) &&
        t.isIdentifier(identifier.parent.property) &&
        identifier.parent.property.name === "global"
      ) {
        let globalIdentifier = outGlobalIdentifiers.get(currentProgramPath);
        if (!globalIdentifier) {
          globalIdentifier =
            currentProgramPath.scope.generateUidIdentifier("$global");
          outGlobalIdentifiers.set(currentProgramPath, globalIdentifier);
          insertAfterStatic(
            t.markoTag(
              t.stringLiteral("get"),
              undefined,
              t.markoTagBody(),
              undefined,
              globalIdentifier
            )
          );
        }

        identifier.parentPath.replaceWith(globalIdentifier);
      } else {
        throw identifier.buildCodeFrameError(
          "Only out.global is supported for compatibility."
        );
      }
    }
  },
};

function insertAfterStatic(node: t.Node) {
  for (const child of currentProgramPath.get("body")) {
    if (!isStatic(child)) {
      child.insertBefore(node);
      return;
    }
  }

  currentProgramPath.unshiftContainer("body", node);
}

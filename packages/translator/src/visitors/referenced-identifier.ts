import { types as t } from "@marko/compiler";
import isStatic from "../util/is-static";
import { currentProgramPath } from "./program";

const outGlobalIdentifiers = new WeakMap<t.NodePath<t.Program>, t.Identifier>();
const hasAttrsTag = new WeakSet<t.NodePath<t.Program>>();

export default {
  migrate(identifier: t.NodePath<t.Identifier>) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (identifier.node.name) {
      case "input": {
        if (!hasAttrsTag.has(currentProgramPath)) {
          hasAttrsTag.add(currentProgramPath);
          insertAfterStatic(
            t.markoTag(
              t.stringLiteral("attrs"),
              undefined,
              t.markoTagBody(),
              undefined,
              identifier.node,
            ),
          );
        }
        break;
      }
      case "out":
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
                globalIdentifier,
              ),
            );
          }

          identifier.parentPath.replaceWith(globalIdentifier);
        } else {
          throw identifier.buildCodeFrameError(
            "Only out.global is supported for compatibility.",
          );
        }
        break;
    }
  },
};

function insertAfterStatic(node: t.Statement) {
  for (const child of currentProgramPath.get("body")) {
    if (!isStatic(child)) {
      child.insertBefore(node);
      return;
    }
  }

  currentProgramPath.unshiftContainer("body", node);
}

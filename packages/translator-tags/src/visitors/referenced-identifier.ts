import { types as t } from "@marko/compiler";
import isStatic from "../util/is-static";
import { isOutputHTML } from "../util/marko-config";
import { importRuntime } from "../util/runtime";
import { currentProgramPath, scopeIdentifier } from "./program";

const globalImportIdentifier = new WeakMap<
  t.NodePath<t.Program>,
  t.Identifier
>();
const hasAttrsTag = new WeakSet<t.NodePath<t.Program>>();

export default {
  migrate(identifier: t.NodePath<t.Identifier>) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (name) {
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
          identifier.parentPath.replaceWith(t.identifier("$global"));
        } else {
          throw identifier.buildCodeFrameError(
            "Only out.global is supported for compatibility.",
          );
        }
        break;
    }
  },
  translate(identifier: t.NodePath<t.Identifier>) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (name) {
      case "$global":
        {
          if (isOutputHTML()) {
            let streamDataIdentifier =
              globalImportIdentifier.get(currentProgramPath);
            if (!streamDataIdentifier) {
              streamDataIdentifier = importRuntime("$_streamData");
              globalImportIdentifier.set(
                currentProgramPath,
                streamDataIdentifier,
              );
            }
            identifier.replaceWith(
              t.memberExpression(streamDataIdentifier, t.identifier("global")),
            );
          } else {
            identifier.replaceWith(
              t.memberExpression(scopeIdentifier, t.identifier("$global")),
            );
          }
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

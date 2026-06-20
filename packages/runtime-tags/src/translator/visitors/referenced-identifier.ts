import { types as t } from "@marko/compiler";

import { getAccessorProp } from "../util/get-accessor-char";
import { getExprRoot } from "../util/get-root";
import { isOutputHTML } from "../util/marko-config";
import { setReferencesScope } from "../util/references";
import { importRuntime } from "../util/runtime";
import { getOrCreateSection, getSection, type Section } from "../util/sections";
import { addStatement } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";
import { scopeIdentifier } from "./program";

const abortIdsByExpressionForSection = new WeakMap<
  Section,
  Map<t.NodePath<t.Node>, number>
>();

export default {
  analyze(identifier) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    if (name === "out") {
      // Legacy `out.global` compatibility. This was previously handled in a
      // dedicated `migrate` pass, but is done here in `analyze` (the first
      // JavaScript-visiting stage) so the `migrate` stage can stay limited to
      // tag (MarkoTag) visitors. Replacing the `out.global` member with a
      // `$global` identifier re-queues it so the `$global` branch below runs.
      if (
        t.isMemberExpression(identifier.parent) &&
        t.isIdentifier(identifier.parent.property) &&
        identifier.parent.property.name === "global"
      ) {
        identifier.parentPath.replaceWith(t.identifier("$global"));
      } else {
        throw identifier.buildCodeFrameError(
          "Only `out.global` is supported for compatibility.",
        );
      }
    } else if (name === "$global") {
      setReferencesScope(identifier);
    } else if (name === "$signal") {
      const section = getOrCreateSection(identifier);
      section.hasAbortSignal = true;
      setReferencesScope(identifier);
    }
  },
  translate(identifier) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (name) {
      case "$global":
        if (isOutputHTML()) {
          identifier.replaceWith(
            t.callExpression(importRuntime("$global"), []),
          );
        } else {
          identifier.replaceWith(
            t.memberExpression(
              scopeIdentifier,
              t.identifier(getAccessorProp().Global),
            ),
          );
        }
        break;
      case "$signal":
        if (isOutputHTML()) {
          identifier.replaceWith(
            t.callExpression(
              t.arrowFunctionExpression(
                [],
                t.blockStatement([
                  t.throwStatement(
                    t.newExpression(t.identifier("Error"), [
                      t.stringLiteral("Cannot use $signal in a server render."),
                    ]),
                  ),
                ]),
              ),
              [],
            ),
          );
        } else {
          const section = getSection(identifier);
          const exprRoot = getExprRoot(identifier);
          let abortIdsByExpression =
            abortIdsByExpressionForSection.get(section);
          let exprId: number | undefined;

          if (abortIdsByExpression) {
            exprId = abortIdsByExpression.get(exprRoot);
          } else {
            abortIdsByExpression = new Map();
            abortIdsByExpressionForSection.set(section, abortIdsByExpression);
          }

          if (!exprId) {
            exprId = abortIdsByExpression.size;
            abortIdsByExpression.set(exprRoot, exprId);
            addStatement(
              "render",
              section,
              exprRoot.node.extra?.referencedBindings,
              t.expressionStatement(
                t.callExpression(importRuntime("$signalReset"), [
                  scopeIdentifier,
                  t.numericLiteral(exprId),
                ]),
              ),
              false,
            );
          }

          identifier.replaceWith(
            t.callExpression(importRuntime("$signal"), [
              scopeIdentifier,
              t.numericLiteral(exprId),
            ]),
          );
        }
    }
  },
} satisfies TemplateVisitor<t.Identifier>;

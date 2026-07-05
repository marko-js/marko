import { types as t } from "@marko/compiler";

import { getAccessorProp } from "../util/get-accessor-char";
import { getExprRoot } from "../util/get-root";
import { isOutputHTML } from "../util/marko-config";
import { setReferencesScope } from "../util/references";
import { importRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import { createSectionState } from "../util/state";
import type { TemplateVisitor } from "../util/visitors";
import { scopeIdentifier } from "./program";

// Per-translate state (`createSectionState` keys off the current program):
// the compiler cache shares one analyzed file (and its sections) across
// every output/entry compile, and each translate pass works on a fresh AST
// clone -- a module-level section-keyed map would leak allocations across
// compiles and drift the ids.
const [getAbortIdsByExpression] = createSectionState<
  Map<t.NodePath<t.Node>, number>
>("abortIdsByExpression", () => new Map());

export default {
  migrate(identifier) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (name) {
      case "out":
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
        break;
    }
  },
  analyze(identifier) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    if (name === "$global") {
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
          const abortIdsByExpression = getAbortIdsByExpression(section);
          let exprId = abortIdsByExpression.get(exprRoot);

          if (exprId === undefined) {
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

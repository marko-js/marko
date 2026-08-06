import { types as t } from "@marko/compiler";

import { getAccessorProp } from "../util/get-accessor-enums";
import { getExprRoot } from "../util/get-root";
import { isOptimize, isOutputHTML } from "../util/marko-config";
import { setReferencesScope, trackGlobalReference } from "../util/references";
import { callRuntime, importRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import { createSectionState } from "../util/state";
import type { TemplateVisitor } from "../util/visitors";
import { scopeIdentifier } from "./program";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    /** `$signal` abort id for this expression root, allocated in analyze
     * (see below) so every translate reads the same id. */
    abortId?: number;
  }
}

// Abort ids must be identical across every compile of a template (each
// output/entry compile addresses the same resumed scopes with
// `$signal(scope, id)`). Analyze runs once per cached file and stamps
// each id on its expression root's extra, so translates are REQUIRED to
// agree by construction — they read, never allocate. The only
// per-translate state is which roots already emitted their `$signalReset`
// this pass (`createSectionState` keys off the current program; each
// translate works on a fresh AST clone).
const [getAbortResetEmitted] = createSectionState<Set<t.NodePath<t.Node>>>(
  "abortResetEmitted",
  () => new Set<t.NodePath<t.Node>>(),
);

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
      trackGlobalReference(identifier);
    } else if (name === "$signal") {
      const section = getOrCreateSection(identifier);
      section.hasAbortSignal = true;
      setReferencesScope(identifier);
      // Stamped on the raw (not canonical) extra: ids stay one-per-root
      // even if this extra later merges with another expression's.
      const exprRoot = getExprRoot(identifier);
      const rootExtra = (exprRoot.node.extra ??= { section });
      if (rootExtra.abortId === undefined) {
        rootExtra.abortId = section.abortSignalExprs++;
      }
    }
  },
  translate(identifier) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (name) {
      case "$global": {
        // An HTML read resolves to the `$global` const the program declares.
        if (isOutputHTML()) break;

        const globalRead = t.memberExpression(
          scopeIdentifier,
          t.identifier(getAccessorProp().Global),
        );
        const key = !isOptimize() && getSignalGlobalKey(identifier);
        if (key) {
          identifier.parentPath.replaceWith(
            callRuntime("_global_read", globalRead, t.stringLiteral(key)),
          );
        } else {
          identifier.replaceWith(globalRead);
        }
        break;
      }
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
          const exprId = exprRoot.node.extra!.abortId!;
          const resetEmitted = getAbortResetEmitted(section);

          if (!resetEmitted.has(exprRoot)) {
            resetEmitted.add(exprRoot);
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

// A `$global.x` read with referenced bindings becomes a signal, so it re-runs
// against the resumed globals, where an unserialized key is missing entirely.
function getSignalGlobalKey(identifier: t.NodePath<t.Identifier>) {
  const { parent } = identifier;
  if (
    !t.isMemberExpression(parent) ||
    parent.computed ||
    !t.isIdentifier(parent.property) ||
    parent.object !== identifier.node
  ) {
    return;
  }

  const { name } = parent.property;
  if (name === "runtimeId" || name === "renderId") return;
  return getExprRoot(identifier).node.extra?.referencedBindings
    ? name
    : undefined;
}

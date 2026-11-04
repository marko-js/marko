import { types as t } from "@marko/compiler";

import { getExprRoot } from "../util/get-root";
import { isOutputHTML, isPatch } from "../util/marko-config";
import { some } from "../util/optional";
import { runsEffectOnPatch } from "../util/patch/refresh";
import {
  assertReferencedInRender,
  getCanonicalExpr,
  getReferencedBindings,
  setReferencesScope,
  trackGlobalReference,
} from "../util/references";
import { callRuntime, importRuntime } from "../util/runtime";
import { scopeIdentifier } from "../util/scope-read";
import { ensureSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import { createOutputSectionState } from "../util/state";
import type { TemplateVisitor } from "../util/visitors";

const kAbortId = Symbol("abort id");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    /** `$signal` abort id for this expression root, allocated in analyze
     * (see below) so every translate reads the same id. */
    [kAbortId]?: number;
  }
}

// Abort ids must be identical across every compile of a template (each
// output/entry compile addresses the same resumed scopes with
// `$signal(scope, id)`). Analyze runs once per cached file and stamps
// each id on its expression root's extra, so translates are REQUIRED to
// agree by construction — they read, never allocate. The only
// per-translate state is which roots already emitted their `$signalReset`
// in the output being built (`createOutputSectionState`; each translate works
// on a fresh AST clone).
const [getAbortResetEmitted] = createOutputSectionState<Set<t.NodeExtra>>(
  () => new Set<t.NodeExtra>(),
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
    if (name === "$global" || name === "$signal") {
      assertReferencedInRender(identifier, name);
      setReferencesScope(identifier);
      const section = ensureSection(identifier);
      const rootExtra = (getExprRoot(identifier).node.extra ??= { section });
      (identifier.node.extra ??= {}).exprRoot = rootExtra;
      if (name === "$global") {
        trackGlobalReference(identifier);
      } else {
        section.hasAbortSignal = true;
        // Stamped on the raw (not canonical) extra: ids stay one-per-root
        // even if this extra later merges with another expression's.
        if (rootExtra[kAbortId] === undefined) {
          rootExtra[kAbortId] = section.abortSignalExprs++;
        }
      }
    }
  },
  translate(identifier) {
    const { name } = identifier.node;
    if (identifier.scope.hasBinding(name)) return;
    switch (name) {
      case "$signal":
        if (isOutputHTML()) {
          replaceWithExtra(identifier, callRuntime("_signal_read_error"));
        } else {
          const exprRoot = identifier.node.extra!.exprRoot!;
          const canonicalExtra = getCanonicalExpr(exprRoot);
          // A dropped expression is never emitted, so it needs no signal or reset.
          if (canonicalExtra.dropped) break;

          const section = getSection(identifier);
          const exprId = exprRoot[kAbortId]!;
          const resetEmitted = getAbortResetEmitted(section);

          if (!resetEmitted.has(exprRoot)) {
            resetEmitted.add(exprRoot);
            // An effect a patch may queue again resets its `$signal`s as it runs.
            addStatement(
              isPatch() &&
                some(getReferencedBindings(exprRoot), runsEffectOnPatch)
                ? "effect"
                : "render",
              section,
              canonicalExtra,
              t.callExpression(importRuntime("$signalReset"), [
                scopeIdentifier,
                t.numericLiteral(exprId),
              ]),
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

// A bare `$signal` can be a tag's whole value, which the tag checks for
// `dropped` after its children translate, so the replacement must keep it.
function replaceWithExtra(path: t.NodePath, replacement: t.Expression) {
  replacement.extra = path.node.extra;
  path.replaceWith(replacement);
}

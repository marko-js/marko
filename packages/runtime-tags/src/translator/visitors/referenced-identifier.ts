import { types as t } from "@marko/compiler";

import { getExprRoot } from "../util/get-root";
import { isOutputHTML } from "../util/marko-config";
import {
  assertReferencedInRender,
  getCanonicalExpr,
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
const kAbortCleanupOnly = Symbol("abort cleanup only");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    /** `$signal` abort id for this expression root, allocated in analyze
     * (see below) so every translate reads the same id. */
    [kAbortId]?: number;
    /** Its every `$signal` only sets `onabort`, so it needs no controller. */
    [kAbortCleanupOnly]?: boolean;
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
  analyze(identifier) {
    const { name } = identifier.node;
    if (
      (name !== "$global" && name !== "$signal") ||
      identifier.scope.hasBinding(name)
    ) {
      return;
    }
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
      rootExtra[kAbortId] ??= section.abortSignalExprs++;
      rootExtra[kAbortCleanupOnly] =
        (rootExtra[kAbortCleanupOnly] ?? true) &&
        isOnabortStatement(identifier);
    }
  },
  translate(identifier) {
    const { name } = identifier.node;
    if (name !== "$signal" || identifier.scope.hasBinding(name)) return;
    if (isOutputHTML()) {
      replaceWithExtra(identifier, callRuntime("_signal_read_error"));
    } else {
      const exprRoot = identifier.node.extra!.exprRoot!;
      const canonicalExtra = getCanonicalExpr(exprRoot);
      // A dropped expression is never emitted, so it needs no signal or reset.
      if (canonicalExtra.dropped) return;

      const section = getSection(identifier);
      const exprId = exprRoot[kAbortId]!;
      const resetEmitted = getAbortResetEmitted(section);

      if (!resetEmitted.has(exprRoot)) {
        resetEmitted.add(exprRoot);
        addStatement(
          "render",
          section,
          canonicalExtra,
          t.callExpression(importRuntime("$signalReset"), [
            scopeIdentifier,
            t.numericLiteral(exprId),
          ]),
        );
      }

      if (exprRoot[kAbortCleanupOnly]) {
        const assignment = identifier.parentPath
          .parentPath as t.NodePath<t.AssignmentExpression>;
        assignment.replaceWith(
          t.callExpression(importRuntime("onAbort"), [
            scopeIdentifier,
            t.numericLiteral(exprId),
            assignment.node.right,
          ]),
        );
      } else {
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

// `$signal.onabort = fn` as a statement only runs `fn` on cleanup.
function isOnabortStatement(identifier: t.NodePath<t.Identifier>) {
  const member = identifier.parent;
  const assignment = identifier.parentPath.parent;
  return (
    member.type === "MemberExpression" &&
    !member.computed &&
    member.property.type === "Identifier" &&
    member.property.name === "onabort" &&
    assignment?.type === "AssignmentExpression" &&
    assignment.operator === "=" &&
    assignment.left === member &&
    identifier.parentPath.parentPath!.parent.type === "ExpressionStatement"
  );
}

// A bare `$signal` can be a tag's whole value, which the tag checks for
// `dropped` after its children translate, so the replacement must keep it.
function replaceWithExtra(path: t.NodePath, replacement: t.Expression) {
  replacement.extra = path.node.extra;
  path.replaceWith(replacement);
}

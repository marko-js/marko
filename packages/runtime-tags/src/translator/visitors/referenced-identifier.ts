import { types as t } from "@marko/compiler";

import { getExprRoot } from "../util/get-root";
import { isOutputDOM } from "../util/marko-config";
import {
  assertReferencedInRender,
  getCanonicalExpr,
  setReferencesScope,
  trackGlobalReference,
} from "../util/references";
import { importRuntime } from "../util/runtime";
import { scopeIdentifier } from "../util/scope-read";
import { ensureSection, getSection } from "../util/sections";
import { addAbortReset } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";

const kAbortCleanupOnly = Symbol("abort cleanup only");
const kAbortReset = Symbol("abort reset");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    /** The `$signal` read that allocated its root's abort id resets it. */
    [kAbortReset]?: true;
    /** Its every `$signal` only sets `onabort`, so it needs no controller. */
    [kAbortCleanupOnly]?: boolean;
    /** `$signal` abort id for this expression root, allocated in analyze so
     * every translate reads the same id. */
    abortId?: number;
  }
}

// Abort ids must be identical across every compile of a template (each
// output/entry compile addresses the same resumed scopes with
// `$signal(scope, id)`). Analyze runs once per cached file and stamps
// each id on its expression root's extra, so translates are REQUIRED to
// agree by construction — they read, never allocate.

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
      if (rootExtra.abortId === undefined) {
        rootExtra.abortId = section.abortSignalExprs++;
        identifier.node.extra[kAbortReset] = true;
      }
      rootExtra[kAbortCleanupOnly] =
        (rootExtra[kAbortCleanupOnly] ?? true) &&
        isOnabortStatement(identifier);
    }
  },
  translate(identifier) {
    const { name } = identifier.node;
    if (name !== "$signal" || identifier.scope.hasBinding(name)) return;
    // Reads are rewritten where emitted code is written (`getReadReplacement`),
    // since a tag may hold this node from before it translates.
    if (isOutputDOM()) {
      const exprRoot = identifier.node.extra!.exprRoot!;
      const canonicalExtra = getCanonicalExpr(exprRoot);
      // A dropped expression is never emitted, so it needs no signal or reset.
      if (canonicalExtra.dropped) return;

      const exprId = exprRoot.abortId!;
      if (identifier.node.extra![kAbortReset]) {
        addAbortReset(getSection(identifier), canonicalExtra, exprId);
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

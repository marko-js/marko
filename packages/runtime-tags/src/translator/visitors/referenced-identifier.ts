import { types as t } from "@marko/compiler";

import { type Binding, BindingType } from "../util/bindings";
import { getAccessorProp } from "../util/get-accessor-enums";
import { getExprRoot } from "../util/get-root";
import { isOptimize, isOutputHTML, isPatch } from "../util/marko-config";
import { some } from "../util/optional";
import { rerunsEffectOnPatch } from "../util/patch/refresh";
import {
  assertReferencedInRender,
  getCanonicalExtra,
  getReferencedBindings,
  setReferencesScope,
  trackGlobalReference,
} from "../util/references";
import {
  callRuntime,
  importRuntime,
  importRuntimeFeature,
} from "../util/runtime";
import { scopeIdentifier } from "../util/scope-read";
import { ensureSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import { createSectionState } from "../util/state";
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
// this pass (`createSectionState` keys off the current program; each
// translate works on a fresh AST clone).
const [getAbortResetEmitted] = createSectionState<Set<t.NodeExtra>>(
  "abortResetEmitted",
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
    if (name === "$global") {
      assertReferencedInRender(identifier, name);
      setReferencesScope(identifier);
      trackGlobalReference(identifier);
    } else if (name === "$signal") {
      assertReferencedInRender(identifier, name);
      const section = ensureSection(identifier);
      section.hasAbortSignal = true;
      setReferencesScope(identifier);
      // Stamped on the raw (not canonical) extra: ids stay one-per-root
      // even if this extra later merges with another expression's.
      const rootExtra = (getExprRoot(identifier).node.extra ??= { section });
      (identifier.node.extra ??= {}).exprRoot = rootExtra;
      if (rootExtra[kAbortId] === undefined) {
        rootExtra[kAbortId] =
          (section.abortSignalExprs ??= []).push(rootExtra) - 1;
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
        const key = !isOptimize() && getSignalGlobalKey(identifier);
        // Only a patch keyed `$global.key` read becomes a tracked binding (a
        // fill needs an identity); every other shape stays a bag access.
        if (
          !key &&
          (identifier.parent.type === "MemberExpression" ||
            identifier.parent.type === "OptionalMemberExpression") &&
          identifier.parent.extra?.read
        ) {
          break;
        }

        const globalRead = t.memberExpression(
          scopeIdentifier,
          t.identifier(getAccessorProp().Global),
        );
        if (key) {
          identifier.parentPath.replaceWith(
            callRuntime("_global_read", globalRead, t.stringLiteral(key)),
          );
        } else {
          replaceWithExtra(identifier, globalRead);
        }
        break;
      }
      case "$signal":
        if (isOutputHTML()) {
          replaceWithExtra(
            identifier,
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
          const exprRoot = identifier.node.extra!.exprRoot!;
          const canonicalExtra = getCanonicalExtra(exprRoot);
          // A dropped expression is never emitted, so it needs no signal or reset.
          if (canonicalExtra.dropped) break;

          const section = getSection(identifier);
          const exprId = exprRoot[kAbortId]!;
          const resetEmitted = getAbortResetEmitted(section);

          if (!resetEmitted.has(exprRoot)) {
            resetEmitted.add(exprRoot);
            // An effect a patch re-runs resets its `$signal`s first.
            if (
              isPatch() &&
              some(getReferencedBindings(exprRoot), rerunsEffectOnPatch)
            ) {
              importRuntimeFeature("patches/effect-signal");
            }
            addStatement(
              "render",
              section,
              getReferencedBindings(canonicalExtra),
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

// A bare `$global`/`$signal` can be a tag's whole value, which the tag checks
// for `dropped` after its children translate, so the replacement must keep it.
function replaceWithExtra(path: t.NodePath, replacement: t.Expression) {
  replacement.extra = path.node.extra;
  path.replaceWith(replacement);
}

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
  // A patch build's `$global` reads are bindings too; only other reads make
  // this a reactive read.
  return some(
    getReferencedBindings(getExprRoot(identifier).node.extra),
    isNotGlobalBinding,
  )
    ? name
    : undefined;
}

function isNotGlobalBinding(binding: Binding) {
  return binding.type !== BindingType.global;
}

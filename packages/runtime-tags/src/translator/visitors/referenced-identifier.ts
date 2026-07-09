import { types as t } from "@marko/compiler";

import { getAccessorProp } from "../util/get-accessor-char";
import { getExprRoot } from "../util/get-root";
import { isOutputHTML, isPersisted } from "../util/marko-config";
import { setReferencesScope, trackGlobalReference } from "../util/references";
import { importRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import { createSectionState } from "../util/state";
import type { TemplateVisitor } from "../util/visitors";
import { scopeIdentifier } from "./program";

// Abort ids must be identical across every compile of a template (the dom
// entry and its persisted `?update` entry address the same live scopes with
// `$signal(scope, id)`), and they are: each translate allocates them in
// visit order over a clone of the same analyzed AST, re-deriving the same
// ids every pass. That's why this is per-translate state
// (`createSectionState` keys off the current program) rather than a
// module-level section-keyed map: sections are cached-analysis objects
// shared across compiles while NodePath keys are per-clone, so the old map
// never hit, kept growing, and shifted the ids on the second dom-mode
// translate of a cached file.
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
      // Under the persisted option, $global reads join the reactive graph as
      // param-like sources so $global-derived holes get resume markers and
      // spine serialization (values still read the live global object).
      if (isPersisted()) {
        trackGlobalReference(identifier);
      }
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

import { types as t } from "@marko/compiler";

import { getExprRoot } from "../util/get-root";
import { isOutputHTML } from "../util/marko-config";
import { setReferencesScope } from "../util/references";
import { callRuntime, importRuntime } from "../util/runtime";
import {
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { addStatement } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";
import { scopeIdentifier } from "./program";

const abortIdsByExpressionForSection = new WeakMap<
  Section,
  Map<t.NodePath<t.Node>, number>
>();

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
            t.memberExpression(scopeIdentifier, t.identifier("$global")),
          );
        }
        break;
      case "$signal":
        if (isOutputHTML()) {
          const section = getSection(identifier);
          if (!section.hasCleanup) {
            section.hasCleanup = true;
            const exprRoot = getExprRoot(identifier);
            const write = writer.writeTo(exprRoot);
            write`${callRuntime("markResumeCleanup", getScopeIdIdentifier(section))}`;
          }

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
                t.callExpression(importRuntime("resetAbortSignal"), [
                  scopeIdentifier,
                  t.numericLiteral(exprId),
                ]),
              ),
            );
          }

          identifier.replaceWith(
            t.callExpression(importRuntime("getAbortSignal"), [
              scopeIdentifier,
              t.numericLiteral(exprId),
            ]),
          );
        }
    }
  },
} satisfies TemplateVisitor<t.Identifier>;

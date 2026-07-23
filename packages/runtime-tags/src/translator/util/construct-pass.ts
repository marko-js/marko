// Construct-pass fragments: per-section statements that render a
// values-free constructed scope's DOM from its adopted values. Every
// fragment is declared with an explicit kind at the emission site that
// knows its shape — the pass is assembled only from declared fragments and
// never executes user expressions (computed values ride serialized holes;
// structural selections apply from adopted linkage).
import { types as t } from "@marko/compiler";

import { isPersistedEntryBuild } from "./marko-config";
import { isMembraneLive } from "./membranes";
import { BindingType } from "./references";
import { createScopeReadExpression } from "./scope-read";
import type { Section } from "./sections";
import { getSerializeReason } from "./serialize-reasons";
import { createSectionState } from "./state";

export type ConstructKind = "fill" | "structural" | "var-wire" | "owner-wire";

export interface ConstructFragment {
  kind: ConstructKind;
  statement: t.Statement;
}

export const [getConstructFragments] = createSectionState<ConstructFragment[]>(
  "constructFragments",
  () => [],
);

export function addConstructFragment(
  section: Section,
  kind: ConstructKind,
  statement: t.Statement,
) {
  if (isPersistedEntryBuild() && isMembraneLive(section)) {
    getConstructFragments(section).push({ kind, statement });
  }
}

/**
 * A copy of `expr` that reads only adopted scope values, or undefined when
 * the expression is not a bare read chain over serialized bindings — the
 * construct-fill qualifier: anything it rejects must ride a serialized
 * hole (or classify the section non-constructible) instead of executing.
 */
export function getConstructReadExpr(
  expr: t.Node,
  section: Section,
): t.Expression | undefined {
  switch (expr.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
    case "NullLiteral":
      return t.cloneNode(expr, true);
    case "Identifier":
      if (expr.name === "undefined" && !expr.extra?.read) {
        return t.identifier("undefined");
      }
  }
  const read = expr.extra?.read;
  if (read) {
    if (read.props !== undefined || read.getter) return;
    const { binding } = read;
    if (binding.type === BindingType.dom) return;
    // Only serialized values are adopted; an unserialized read means this
    // value was never meant to exist client-side without its compute.
    if (!getSerializeReason(binding.section, binding)) return;
    return createScopeReadExpression(binding, section);
  }
  if (
    (expr.type === "MemberExpression" ||
      expr.type === "OptionalMemberExpression") &&
    !expr.computed
  ) {
    const object = getConstructReadExpr(expr.object, section);
    if (object) {
      const property = t.cloneNode(expr.property as t.Expression, true);
      return expr.type === "OptionalMemberExpression"
        ? t.optionalMemberExpression(
            object,
            property as t.Identifier,
            false,
            expr.optional,
          )
        : t.memberExpression(object, property);
    }
  }
}

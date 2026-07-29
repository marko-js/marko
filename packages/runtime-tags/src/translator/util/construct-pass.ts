// Construct-pass fragments: per-section statements that render a
// values-free constructed scope's DOM from its adopted values. Every
// fragment is declared with an explicit kind at the emission site that
// knows its shape — the pass is assembled only from declared fragments and
// never executes user expressions (computed values ride serialized holes;
// structural selections apply from adopted linkage).
import { types as t } from "@marko/compiler";

import { scopeIdentifier } from "../visitors/program";
import { isPersistedEntryBuild } from "./marko-config";
import { isMembraneLive } from "./membranes";
import { find } from "./optional";
import { type Binding, BindingType } from "./references";
import { callRuntime } from "./runtime";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import { isDynamicClosure, type Section } from "./sections";
import { getSerializeReason } from "./serialize-reasons";
import { getSignal } from "./signals";
import { createSectionState } from "./state";

export type ConstructKind =
  | "fill"
  | "structural"
  | "var-wire"
  | "owner-wire"
  | "closure-wire"
  | "effect";

export interface ConstructFragment {
  kind: ConstructKind;
  statement: t.Statement;
}

const [getConstructFragments] = createSectionState<ConstructFragment[]>(
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
 * The construct pass assembles ONLY from kinds this switch consults —
 * a fragment (or forward) declaring anything else is a compile-visible
 * gap, not silent drift. Extending `ConstructKind` without teaching this
 * assembler is a type error.
 */
export function assembleConstructFragments(section: Section): t.Statement[] {
  const statements: t.Statement[] = [];
  for (const fragment of getConstructFragments(section)) {
    switch (fragment.kind) {
      case "fill":
      case "structural":
      case "var-wire":
      case "owner-wire":
      case "closure-wire":
      case "effect":
        statements.push(fragment.statement);
        break;
      default:
        throw new Error(
          `unconsulted construct kind: ${fragment.kind satisfies never}`,
        );
    }
  }
  return statements;
}

/** Consulted by `addValue`: a declared forward kind must name a family the
 * assembler above consults (its carrier is the section's fragment/merge of
 * that kind — the forward itself is never assembled). */
export function assertConstructForwardKind(kind: ConstructKind) {
  switch (kind) {
    case "fill":
    case "structural":
    case "var-wire":
    case "owner-wire":
    case "closure-wire":
    case "effect":
      return;
    default:
      throw new Error(
        `unconsulted construct forward kind: ${kind satisfies never}`,
      );
  }
}

const [getConstructClosureWires] = createSectionState<Set<Binding>>(
  "constructClosureWires",
  () => new Set<Binding>(),
);

/**
 * Re-establishes closure subscriptions for the owner reads inside an
 * emitted fill fragment: the fill renders the adopted value, and the wire
 * (subscription + notify index, never the signal fn) keeps it reactive to
 * post-construct owner changes. Direct closures are structurally
 * subscribed through branch linkage and need no wire.
 */
export function addConstructClosureWires(section: Section, expr: t.Node) {
  const read = expr.extra?.read;
  if (read) {
    wireClosure(section, read.binding);
  } else if (
    (expr.type === "MemberExpression" ||
      expr.type === "OptionalMemberExpression") &&
    !expr.computed
  ) {
    addConstructClosureWires(section, expr.object);
  }
}

function wireClosure(section: Section, binding: Binding) {
  if (
    // Guarded up front: building the wire imports the runtime helper.
    !isPersistedEntryBuild() ||
    !isMembraneLive(section) ||
    binding.section === section ||
    binding.type === BindingType.dom ||
    !isDynamicClosure(section, binding) ||
    !find(section.referencedClosures, (closure) => closure === binding)
  ) {
    return;
  }
  const wired = getConstructClosureWires(section);
  if (!wired.has(binding)) {
    wired.add(binding);
    addConstructFragment(
      section,
      "closure-wire",
      t.expressionStatement(
        callRuntime(
          "_construct_closure",
          scopeIdentifier,
          getScopeExpression(section, binding.section),
          getSignal(section, binding).identifier,
        ),
      ),
    );
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

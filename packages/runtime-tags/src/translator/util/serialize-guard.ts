import { types as t } from "@marko/compiler";

import { generateUid, getSharedUid } from "./generate-uid";
import { isPatch } from "./marko-config";
import { forEach, some } from "./optional";
import { getWriteSources } from "./patch/decisions";
import { isBranchPathSection } from "./patch/structure";
import {
  type Binding,
  getDebugNames,
  getDebugNamesAsIdentifier,
  isReferencedExtra,
  type Sources,
} from "./references";
import { callRuntime, type HTMLRuntimeHelpers } from "./runtime";
import {
  getParamReasonGroupIndex,
  groupParamsBySection,
  isSameOrChildSection,
  type Section,
} from "./sections";
import {
  isReasonDynamic,
  type SerializeReason,
  type SerializeReasons,
} from "./serialize-reasons";
import { createSectionState } from "./state";
import { withLeadingComment } from "./with-comment";

type DynamicSerializeReason = Sources & { state: undefined };

interface SectionReasonState {
  if: TypeState;
  guard: TypeState;
  declarators: t.VariableDeclarator[];
  page?: true;
}

// Keyed by param reason group: a section's guard for a set of params is
// that group's check, whatever else the reason reads.
interface TypeState {
  names: Map<number, string>;
  pending: Map<number, t.ParenthesizedExpression>;
}

const [getSectionReasonState] = createSectionState<SectionReasonState>(
  "serializeReasonState",
  (section) => ({
    if: createTypeState(),
    guard: createTypeState(),
    declarators: [
      t.variableDeclarator(
        scopeReasonIdentifier(section),
        callRuntime("_scope_reason"),
      ),
    ],
  }),
);

// A call site's reason from its groups' 2-bit values: static ones fold into
// a literal, a dynamic one shifts into its place; only a group past the
// bit range (15) makes it a keyed object. A group with no value contributes
// nothing; one known unfed (`0`) still makes the reason an explicit `0`.
export function buildGroupMask(
  groups: { value: number | t.Expression | undefined; names: string }[],
): t.Expression | undefined {
  let mask = 0;
  let maskNames = "";
  let dynamic: t.Expression | undefined;
  const props: t.ObjectExpression["properties"] = [];
  let needsObject = false;
  let any = false;
  for (let i = 0; i < groups.length; i++) {
    const { value, names } = groups[i];
    if (value === undefined) continue;
    any = true;
    if (value === 0) continue;
    if (i >= 15) {
      needsObject = true;
    } else if (typeof value === "number") {
      mask |= value << (1 + 2 * i);
      if (names) maskNames += maskNames ? ` | ${names}` : names;
    } else {
      const shifted = t.binaryExpression(
        "<<",
        value,
        withLeadingComment(t.numericLiteral(1 + 2 * i), names),
      );
      dynamic = dynamic ? t.binaryExpression("|", dynamic, shifted) : shifted;
    }
    props.push(
      t.objectProperty(
        withLeadingComment(t.numericLiteral(i), names),
        typeof value === "number" ? t.numericLiteral(value) : value,
      ),
    );
  }
  if (needsObject) return t.objectExpression(props);
  if (!any) return;
  const literal = mask
    ? withLeadingComment(t.numericLiteral(mask), maskNames)
    : undefined;
  return literal && dynamic
    ? t.binaryExpression("|", literal, dynamic)
    : literal || dynamic || t.numericLiteral(0);
}

// Every section body consumes (and clears) its caller's reason; it binds it,
// with its hoisted guards, when a guard is dynamic or a patch reads it.
export function getScopeReasonStatement(section: Section): t.Statement {
  return isPatch() || hasDynamicSerializeReason(section)
    ? t.variableDeclaration("const", getSectionReasonState(section).declarators)
    : t.expressionStatement(callRuntime("_scope_reason"));
}

export function getSerializeGuard(
  section: Section,
  reason: undefined | SerializeReason,
  optional: boolean,
) {
  if (!isDynamicSerializeGuard(section, reason)) {
    if (!reason) return t.numericLiteral(0);

    return optional
      ? undefined
      : withLeadingComment(
          t.numericLiteral(1),
          getDebugNames(reason.forced ? undefined : reason.state),
        );
  }

  return getDynamicGuard(section, reason, true);
}

export function getSerializeGuardForAny(
  section: Section,
  reasons: undefined | SerializeReasons,
  optional: boolean,
) {
  if (!Array.isArray(reasons)) {
    return getSerializeGuard(section, reasons, optional);
  }

  // A static member decides before any dynamic guard is built (and hoisted).
  for (const reason of reasons) {
    if (!isReasonDynamic(reason)) {
      return optional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(reason.state));
    }
  }

  let expr!: t.Expression;
  for (const reason of reasons) {
    const guard = getSerializeGuard(section, reason, false)!;
    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr;
}

export function getExprIfSerialized<
  T extends undefined | SerializeReason,
  R extends (T extends {} ? t.Expression : undefined),
>(section: Section, reason: T, expr: t.Expression): R {
  if (!isDynamicSerializeGuard(section, reason)) {
    if (!reason) return undefined as R;
    // A patch has no ordinary resume payload, so a statically serialized
    // value rides the page render's gate; the root declares it.
    if (isPatch() && !section.parent) {
      return t.logicalExpression("&&", scopePageIdentifier(section), expr) as R;
    }
    return expr as R;
  }

  // Branch-path pairing never prunes with a value group: interior patch
  // writes anchor through it, so it rides the root page/patch reason.
  if (isPatch() && isBranchPathSection(section) && section.parent) {
    return t.logicalExpression(
      "&&",
      scopePageIdentifier(section.program),
      expr,
    ) as R;
  }

  const guard = getDynamicGuard(section, reason, false);
  return (guard ? t.logicalExpression("&&", guard, expr) : expr) as R;
}

// A value's own group guard inside a scope write the section reason (or the
// root reason on the branch path) already gates: unfed groups ship nothing.
export function getValueIfSerialized(
  section: Section,
  reason: SerializeReason,
  expr: t.Expression,
) {
  if (!isDynamicSerializeGuard(section, reason)) return expr;
  const guard = getDynamicGuard(section, reason, false);
  return guard ? t.logicalExpression("&&", guard, expr) : expr;
}

// The global dimension has no param slots: it is patch-only, where a
// page render serializes it and a patch re-ships every global instead.
function getDynamicGuard(
  section: Section,
  reason: DynamicSerializeReason,
  isGuard: boolean,
) {
  const paramGuard = reason.param ? getOrHoist(reason, isGuard) : undefined;
  if (!reason.global) return paramGuard;
  const globalGuard = isPatch()
    ? scopePageIdentifier(getReasonSection(section))
    : scopeReasonIdentifier(getReasonSection(section));
  return paramGuard
    ? t.logicalExpression("||", globalGuard, paramGuard)
    : globalGuard;
}

// Branch and boundary bodies declare no reason of their own; the nearest
// enclosing content body or the root does.
function getReasonSection(section: Section) {
  while (section.parent && (section.isBranch || section.isBoundary)) {
    section = section.parent;
  }
  return section;
}

// A page render's gate: statically serialized values and structure a patch
// never speaks ride it, so a flush carries fills alone.
export function scopePageIdentifier(section: Section) {
  const state = getSectionReasonState(section);
  const id = t.identifier(getSharedUid(`scope${section.id}_page`, section));
  if (!state.page) {
    state.page = true;
    state.declarators.push(
      t.variableDeclarator(t.cloneNode(id), callRuntime("_page_render")),
    );
  }
  return id;
}

// Ownership args for an expression's write; a value fixed for the scope's
// lifetime (constant, `<id>`, `<define>`) only seeds a created scope.
export function getExprWriteOwnership(extra: t.NodeExtra | undefined) {
  return getPatchWriteOwnership(getWriteSources(extra), isStableExpr(extra));
}

// An expression with no bindings behind it (a module constant, a call with
// no request-derived argument) renders once: a patch never re-fills it.
export function isStableExpr(extra: t.NodeExtra | undefined) {
  if (!extra) return false;
  let stable = true;
  const check = (binding: Binding) => {
    stable &&= !!binding.stable;
  };
  if (isReferencedExtra(extra)) forEach(extra.referencedBindings, check);
  forEach(extra.constantBindings, check);
  return stable;
}

// A patch writer's trailing `[mask, groupIdx]` ownership args, or `[]` when
// statically server-owned; only root params gate.
export function getPatchWriteOwnership(
  sources: Sources | undefined,
  stable?: boolean,
): [t.Expression, t.Expression] | [] {
  // Never changes: the write only seeds a created scope, like a client-owned
  // group's (mask `0`).
  if (stable) return [t.numericLiteral(0), t.numericLiteral(0)];
  for (const [paramsSection, params] of groupParamsBySection(sources?.param)) {
    if (!paramsSection.parent) {
      return [
        scopeReasonIdentifier(paramsSection),
        withLeadingComment(
          t.numericLiteral(getParamReasonGroupIndex(paramsSection, params)),
          getDebugNames(params),
        ),
      ];
    }
  }
  return [];
}

// The same test as a statement-position guard expression (fills and
// effect writes), or undefined when statically server-owned.
export function getFilledGuard(sources: Sources | undefined) {
  const args = getPatchWriteOwnership(sources);
  return args.length ? callRuntime("_filled_guard", ...args) : undefined;
}

// A root group's 2-bit sources value, composed into child masks.
export function getOwnershipGroupValue(
  section: Section,
  params: NonNullable<Sources["param"]>,
) {
  return callRuntime(
    "_mask_group",
    scopeReasonIdentifier(section),
    withLeadingComment(
      t.numericLiteral(getParamReasonGroupIndex(section, params)),
      getDebugNames(params),
    ),
  );
}

function getOrHoist(
  reason: DynamicSerializeReason,
  isGuard: boolean,
): t.Expression | undefined {
  let expr: t.Expression | undefined;
  for (const [section, params] of groupParamsBySection(reason.param)) {
    const part = getOrHoistSectionGuard(section, params, isGuard);
    expr = expr ? t.logicalExpression("||", expr, part) : part;
  }

  return expr;
}

// The first use stays inline; a second hoists it into a shared declarator.
function getOrHoistSectionGuard(
  section: Section,
  params: NonNullable<Sources["param"]>,
  isGuard: boolean,
): t.Expression {
  if (!section.paramReasonGroups) return scopeReasonIdentifier(section);

  const state = getSectionReasonState(section);
  const tracking = isGuard ? state.guard : state.if;
  const index = getParamReasonGroupIndex(section, params);
  const name = tracking.names.get(index);
  if (name) return t.identifier(name);

  const guard = callRuntime(
    (isPatch()
      ? isGuard
        ? "_source_guard"
        : "_source_if"
      : isGuard
        ? "_serialize_guard"
        : "_serialize_if") satisfies HTMLRuntimeHelpers,
    scopeReasonIdentifier(section),
    withLeadingComment(t.numericLiteral(index), getDebugNames(params)),
  );
  const pending = tracking.pending.get(index);
  if (!pending) {
    const expr = t.parenthesizedExpression(guard);
    tracking.pending.set(index, expr);
    return expr;
  }

  const hoisted = generateUid(
    `${isGuard ? "sg" : "si"}__${getDebugNamesAsIdentifier(params)}`,
  );
  tracking.names.set(index, hoisted);
  tracking.pending.delete(index);
  state.declarators.push(t.variableDeclarator(t.identifier(hoisted), guard));
  pending.expression = t.identifier(hoisted);
  return t.parenthesizedExpression(t.identifier(hoisted));
}

// Whether the guard for a reason is a runtime mask rather than a constant.
function isDynamicSerializeGuard(
  section: Section,
  reason: undefined | SerializeReason,
): reason is DynamicSerializeReason {
  return isReasonDynamic(reason) && !isCrossSection(section, reason);
}

function isCrossSection(section: Section, reason: Sources) {
  return some(
    reason.param,
    (param) => !isSameOrChildSection(param.section, section),
  );
}

function createTypeState(): TypeState {
  return {
    names: new Map(),
    pending: new Map(),
  };
}

function hasDynamicSerializeReason(section: Section) {
  if (section.paramReasonGroups || isReasonDynamic(section.serializeReason)) {
    return true;
  }
  for (const reason of section.serializeReasons.values()) {
    if (isReasonDynamic(reason)) return true;
  }
  return false;
}

function scopeReasonIdentifier(section: Section) {
  return t.identifier(getSharedUid(`scope${section.id}_reason`, section));
}

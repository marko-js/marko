import { types as t } from "@marko/compiler";

import { generateUid, getSharedUid } from "./generate-uid";
import { some } from "./optional";
import {
  getDebugNames,
  getDebugNamesAsIdentifier,
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
// with its hoisted guards, only when a guard is dynamic.
export function getScopeReasonStatement(section: Section): t.Statement {
  return hasDynamicSerializeReason(section)
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

  return getOrHoist(reason, true);
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
    return (reason && expr) as R;
  }

  const guard = getOrHoist(reason, false);
  return (guard ? t.logicalExpression("&&", guard, expr) : expr) as R;
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
    (isGuard
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

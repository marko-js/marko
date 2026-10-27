import { types as t } from "@marko/compiler";

import {
  type Binding,
  getDebugNames,
  getDebugNamesAsIdentifier,
} from "./bindings";
import { generateUid, ensureSharedUid } from "./generate-uid";
import { isPatch } from "./marko-config";
import { some } from "./optional";
import { hasPatchKeyedNodes, isPatchKeyedSlot } from "./patch/decisions";
import {
  isConditionalReason,
  mapBodyParams,
  type Reason,
  type Reasons,
} from "./reasons";
import { callRuntime, type HTMLRuntimeHelpers } from "./runtime";
import {
  getParamReasonGroupIndex,
  isSameOrAncestorSection,
  type ParamReasonGroup,
  reduceParamGroups,
  type Section,
} from "./sections";
import { findSectionSlot, findSlot, type Slot, SlotKind } from "./slots";
import { compareSources, mergeSources, type Sources, ALWAYS } from "./sources";
import { createOutputSectionState } from "./state";
import { withLeadingComment } from "./with-comment";

type ConditionalReason = Sources & { state: undefined };

export function isSameReason(a: Reason | undefined, b: Reason | undefined) {
  // Reasons read always match whatever their sources: both guard as `1`.
  return (
    a === b ||
    (a && b ? (a.always && b.always) || compareSources(a, b) === 0 : false)
  );
}

// The runtime checks a section's guard for a param reason group calls, by the
// prefix their hoisted guards are named with.
const groupCheckPrefixes = {
  _write_guard: "wg",
  _write_if: "wi",
  // A patch build's checks that read only the mask (not the render context).
  _client_guard: "cg",
  _server_guard: "sg",
} satisfies Partial<Record<HTMLRuntimeHelpers, string>>;
type GroupCheck = keyof typeof groupCheckPrefixes;

export function isHoistedGroupCheck(check: string): check is GroupCheck {
  return check in groupCheckPrefixes;
}

interface SectionGuards {
  hoists: Map<GroupCheck, GuardHoists>;
  declarators: t.VariableDeclarator[];
  page?: true;
  /** The statement binding the reason, once a body has it. */
  statement?: t.Statement;
}

// Keyed by param reason group: a section's guard for a set of params is
// that group's check, whatever else the reason reads.
interface GuardHoists {
  names: Map<number, string>;
  pending: Map<number, t.ParenthesizedExpression>;
}

const [getSectionGuards] = createOutputSectionState<SectionGuards>(
  (section) => ({
    hoists: new Map(),
    declarators: [
      t.variableDeclarator(
        scopeReasonIdentifier(section),
        callRuntime("_scope_reason"),
      ),
    ],
  }),
);

// Packs groups' 2-bit values into a call site's reason (a keyed object past
// 15 groups); one known `0` still makes the reason an explicit `0`.
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
// with its hoisted guards, only when a guard is dynamic or in a patch build.
export function getScopeReasonStatement(section: Section): t.Statement {
  // A patch build's child scope writes may still add this body's page guard.
  const guards = getSectionGuards(section);
  return (guards.statement =
    isPatch() || hasConditionalReason(section)
      ? t.variableDeclaration("const", guards.declarators)
      : t.expressionStatement(callRuntime("_scope_reason")));
}

// The statement binding the section's reason, once its body has one.
export function getEmittedReasonStatement(section: Section) {
  return getSectionGuards(section).statement;
}

// A binding's write reason: whether, and under which guard, the server
// writes it (always where a patch keys an entry on it).
export function getWriteReason(binding: Binding) {
  return getSlotWriteReason(findSlot(binding));
}

// A branch's write reason: whether the server writes the scope it resumes.
export function getBranchWriteReason(section: Section) {
  return getSlotWriteReason(findSectionSlot(section, SlotKind.Branch));
}

// The reason a slot writes with (its write reason): its reason, always where
// a patch keys an entry on it.
export function getSlotWriteReason(slot: Slot | undefined) {
  return slot && isPatchKeyedSlot(slot)
    ? mergeSources(ALWAYS, slot.reason)
    : slot?.reason;
}

// A scope is written when any slot in it is, a patch-keyed node's included.
export function getSectionWriteReason(section: Section) {
  return isPatch() && hasPatchKeyedNodes(section)
    ? mergeSources(ALWAYS, section.reason)
    : section.reason;
}

export function getWriteGuard(
  section: Section,
  reason: undefined | Reason,
  omitUnconditional: boolean,
) {
  if (!isDynamicWriteGuard(section, reason)) {
    if (!reason) return t.numericLiteral(0);

    return omitUnconditional
      ? undefined
      : withLeadingComment(
          t.numericLiteral(1),
          getDebugNames(reason.always ? undefined : reason.state),
        );
  }

  return getDynamicGuard(section, reason, "_write_guard");
}

export function getWriteGuardForAny(
  section: Section,
  reasons: undefined | Reasons,
  omitUnconditional: boolean,
) {
  if (!Array.isArray(reasons)) {
    return getWriteGuard(section, reasons, omitUnconditional);
  }

  // A static member decides before any dynamic guard is built (and hoisted).
  for (const reason of reasons) {
    if (!isConditionalReason(reason)) {
      return omitUnconditional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(reason.state));
    }
  }

  let expr!: t.Expression;
  for (const reason of reasons) {
    expr = orGuard(expr, getWriteGuard(section, reason, false)!);
  }

  return expr;
}

export function getExprIfWritten<
  T extends undefined | Reason,
  R extends (T extends {} ? t.Expression : undefined),
>(section: Section, reason: T, expr: t.Expression): R {
  const ownReason = mapBodyParams(section, reason);
  if (!isConditionalReason(ownReason)) {
    return (ownReason && expr) as R;
  }

  return andGuard(getDynamicGuard(section, ownReason, "_write_if"), expr) as R;
}

// The global dimension has no param slots: it is patch-only, where a
// page render serializes it and a patch render re-ships every global instead.
function getDynamicGuard(
  section: Section,
  reason: ConditionalReason,
  check: GroupCheck,
) {
  const paramGuard = orEachParamGroup(reason.param, check);
  if (!reason.global) return paramGuard;
  const globalGuard = scopePageIdentifier(getReasonSection(section));
  return paramGuard
    ? t.logicalExpression("||", globalGuard, paramGuard)
    : globalGuard;
}

// Branch and boundary bodies declare no reason of their own; the nearest
// enclosing content body or the root does.
export function getReasonSection(section: Section) {
  let cur = section;
  while (cur.parent && cur.branch) cur = cur.parent;
  return cur;
}

// A page render's gate: statically serialized values and structure a patch
// never speaks ride it, so a flush carries fills alone.
export function scopePageIdentifier(section: Section) {
  const state = getSectionGuards(section);
  const id = t.identifier(ensureSharedUid(`scope${section.id}_page`, section));
  if (!state.page) {
    state.page = true;
    state.declarators.push(
      t.variableDeclarator(t.cloneNode(id), callRuntime("_page_render")),
    );
  }
  return id;
}

// Whether the client owns a param of the reason, in whichever section it
// lives: what a value written for a patch needs to wire on the client.
export function getClientGuard(section: Section, reason: Reason) {
  if (isDynamicWriteGuard(section, reason)) {
    return orEachParamGroup(reason.param, "_client_guard");
  }
}

// A group's runtime check arguments: its section's reason and its index.
export function getGroupArgs(
  section: Section,
  group: ParamReasonGroup,
  index = getParamReasonGroupIndex(section, group),
): [t.Expression, t.Expression] {
  return [
    scopeReasonIdentifier(section),
    withLeadingComment(t.numericLiteral(index), getDebugNames(group)),
  ];
}

// The 2-bit value of caller groups read together, or'd: what a child's mask
// composes for them, and a write reading several callers' groups.
export function buildComposedGroupValue(groups: [Section, ParamReasonGroup][]) {
  let value: t.Expression | undefined;
  for (const [section, group] of groups) {
    const bits = callRuntime("_mask_group", ...getGroupArgs(section, group));
    value = value ? t.binaryExpression("|", value, bits) : bits;
  }
  return value!;
}

// Each param group's `check`, or-ed together.
function orEachParamGroup(params: Sources["param"], check: GroupCheck) {
  return reduceParamGroups(
    params,
    (expr: t.Expression | undefined, section, group) =>
      orGuard(expr, getOrHoistSectionGuard(section, group, check)),
    undefined,
  );
}

export function orGuard(guard: t.Expression | undefined, other: t.Expression) {
  return guard ? t.logicalExpression("||", guard, other) : other;
}

export function andGuard(
  guard: t.Expression | undefined | false,
  expr: t.Expression,
) {
  return guard ? t.logicalExpression("&&", guard, expr) : expr;
}

// The first use stays inline; a second hoists it into a shared declarator.
export function getOrHoistSectionGuard(
  section: Section,
  params: ParamReasonGroup,
  check: GroupCheck,
): t.Expression {
  if (!section.paramReasonGroups) return scopeReasonIdentifier(section);

  const state = getSectionGuards(section);
  let tracking = state.hoists.get(check);
  if (!tracking) state.hoists.set(check, (tracking = createGuardHoists()));
  const index = getParamReasonGroupIndex(section, params);
  const name = tracking.names.get(index);
  if (name) return t.identifier(name);

  const guard = callRuntime(check, ...getGroupArgs(section, params, index));
  const pending = tracking.pending.get(index);
  if (!pending) {
    const expr = t.parenthesizedExpression(guard);
    tracking.pending.set(index, expr);
    return expr;
  }

  const hoisted = generateUid(
    `${groupCheckPrefixes[check]}__${getDebugNamesAsIdentifier(params)}`,
  );
  tracking.names.set(index, hoisted);
  tracking.pending.delete(index);
  state.declarators.push(t.variableDeclarator(t.identifier(hoisted), guard));
  pending.expression = t.identifier(hoisted);
  return t.parenthesizedExpression(t.identifier(hoisted));
}

// Whether the guard for a reason is a runtime mask rather than a constant.
export function isDynamicWriteGuard(
  section: Section,
  reason: undefined | Reason,
): reason is ConditionalReason {
  return isConditionalReason(reason) && !isCrossSection(section, reason);
}

function isCrossSection(section: Section, reason: Sources) {
  return some(
    reason.param,
    (param) => !isSameOrAncestorSection(param.section, section),
  );
}

function createGuardHoists(): GuardHoists {
  return {
    names: new Map(),
    pending: new Map(),
  };
}

function hasConditionalReason(section: Section) {
  if (
    section.paramReasonGroups ||
    isConditionalReason(mapBodyParams(section, section.reason))
  ) {
    return true;
  }
  return some(section.slots, isConditionalSlot);
}

function isConditionalSlot(slot: Slot) {
  return isConditionalReason(mapBodyParams(slot.section, slot.reason));
}

function scopeReasonIdentifier(section: Section) {
  return t.identifier(ensureSharedUid(`scope${section.id}_reason`, section));
}

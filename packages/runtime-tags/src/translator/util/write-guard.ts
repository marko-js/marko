import { types as t } from "@marko/compiler";

import {
  type Binding,
  getDebugNames,
  getDebugNamesAsIdentifier,
} from "./bindings";
import { createAnalysisMemo } from "./cyclic-memo";
import { generateUid, ensureSharedUid } from "./generate-uid";
import { first, some } from "./optional";
import {
  isGuardedReason,
  mapBodyParams,
  type Reason,
  type Reasons,
} from "./reasons";
import { callRuntime, type HTMLRuntimeHelpers } from "./runtime";
import {
  findParamReasonGroupIndex,
  getParamReasonGroupIndex,
  isOptionalBranch,
  isSameOrAncestorSection,
  type ParamReasonGroup,
  reduceParamGroups,
  type Section,
} from "./sections";
import { findSectionSlot, findSlot, type Slot, SlotKind } from "./slots";
import { compareSources, type Sources } from "./sources";
import { createOutputSectionState } from "./state";
import { withLeadingComment } from "./with-comment";

export function isSameReason(a: Reason | undefined, b: Reason | undefined) {
  // Reasons read always match whatever their sources: both guard as `1`.
  return (
    a === b ||
    (a && b ? (a.always && b.always) || compareSources(a, b) === 0 : false)
  );
}

// The runtime checks a section's guard for a param reason group calls, by the
// prefix their shared guards are named with.
const groupCheckPrefixes = {
  _write_guard: "wg",
  _write_if: "wi",
} satisfies Partial<Record<HTMLRuntimeHelpers, string>>;
type GroupCheck = keyof typeof groupCheckPrefixes;

// Keyed by param reason group: a section's guard for a set of params is
// that group's check, whatever else the reason reads.
interface GuardShares {
  names: Map<number, string>;
  pending: Map<number, t.ParenthesizedExpression>;
}

const [getSectionGuards] = createOutputSectionState((section: Section) => ({
  shares: new Map<GroupCheck, GuardShares>(),
  declarators: [
    t.variableDeclarator(
      scopeReasonIdentifier(section),
      callRuntime("_scope_reason"),
    ),
  ],
}));

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
// with its shared guards, only when a guard is dynamic.
export function getScopeReasonStatement(section: Section): t.Statement {
  return hasGuardedReason(section)
    ? t.variableDeclaration("const", getSectionGuards(section).declarators)
    : t.expressionStatement(callRuntime("_scope_reason"));
}

// A binding's write reason: whether, and under which guard, the server
// writes it.
export function getWriteReason(binding: Binding) {
  return findSlot(binding)?.reason;
}

// The guard a node's resume marker writes under, from its slot's write reason:
// none where it always writes.
export function getMarkerGuard(nodeBinding: Binding) {
  return getWriteGuard(nodeBinding.section, getWriteReason(nodeBinding), true);
}

// Whether a node's resume marker is ever written: its guard isn't the constant never.
export function isMarkerWritten(nodeBinding: Binding) {
  return getWriteBit(nodeBinding.section, getWriteReason(nodeBinding)) !== 0;
}

// A branch's write reason: whether the server writes the scope it resumes.
export function getBranchWriteReason(section: Section) {
  return findSectionSlot(section, SlotKind.Branch)?.reason;
}

// Resume joins a branch to its parent at the marker its tag writes wherever the
// client reads its node, which also resumes the branch.
export function isBranchAlwaysMarked(section: Section) {
  return (
    isOptionalBranch(section) &&
    getWriteBit(
      section.parent!,
      getWriteReason(section.branch.tag.nodeBinding),
    ) === 1
  );
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

  const bit = getGroupsBit(reason.param);
  if (bit !== undefined) {
    return bit && omitUnconditional ? undefined : t.numericLiteral(bit);
  }
  return orEachParamGroup(reason.param, "_write_guard");
}

export function getWriteGuardForAny(
  section: Section,
  reasons: undefined | Reasons,
  omitUnconditional: boolean,
) {
  if (!Array.isArray(reasons)) {
    return getWriteGuard(section, reasons, omitUnconditional);
  }

  // A member always written decides before any dynamic guard is built (and
  // shared); one never written adds nothing.
  for (const reason of reasons) {
    if (getWriteBit(section, reason) === 1) {
      return omitUnconditional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(reason.state));
    }
  }

  let expr: t.Expression | undefined;
  for (const reason of reasons) {
    if (getWriteBit(section, reason) !== 0) {
      expr = orGuard(expr, getWriteGuard(section, reason, false)!);
    }
  }

  return expr || t.numericLiteral(0);
}

// The expression where the server writes it: `undefined` where it never does.
export function getExprIfWritten(
  section: Section,
  reason: undefined | Reason,
  expr: t.Expression,
) {
  const ownReason = mapBodyParams(section, reason);
  if (!isGuardedReason(ownReason)) {
    return ownReason && expr;
  }

  const bit = getGroupsBit(ownReason.param);
  if (bit !== undefined) return bit ? expr : undefined;
  return andGuard(orEachParamGroup(ownReason.param, "_write_if"), expr);
}

// Whether the server ever writes what the reason guards, where `section` reads it.
export function isEverWritten(section: Section, reason: undefined | Reason) {
  const ownReason = mapBodyParams(section, reason);
  return isGuardedReason(ownReason)
    ? getGroupsBit(ownReason.param) !== 0
    : !!ownReason;
}

// Whether a guard on `reason` in a known tag's template writes for every render
// of `call` (in `callSection`): always there, or by a param group it always passes.
export function isWrittenForCall(
  section: Section,
  reason: undefined | Reason,
  call: t.MarkoTagExtra,
  callSection: Section,
) {
  if (getWriteBit(section, reason) === 1) return true;
  const { childScopeBinding, childSection } = call;
  return (
    !!childScopeBinding &&
    isDynamicWriteGuard(section, reason) &&
    reduceParamGroups(
      reason.param,
      (written, groupSection, group) =>
        written ||
        (groupSection === childSection &&
          getWriteBit(
            callSection,
            findSlot(
              childScopeBinding,
              SlotKind.ParamGroup,
              callSection,
              childSection.paramReasonGroups![
                getParamReasonGroupIndex(childSection, group)
              ],
            )?.reason,
          ) === 1),
      false,
    )
  );
}

// The constant a reason's guard folds to: `0` unwritten, `1` always written.
export function getWriteBit(section: Section, reason: undefined | Reason) {
  return isDynamicWriteGuard(section, reason)
    ? getGroupsBit(reason.param)
    : reason
      ? 1
      : 0;
}

// `1` where some group is always written, `0` where every group never is.
function getGroupsBit(params: Sources["param"]) {
  return reduceParamGroups(params, addGroupBit, 0 as number | undefined);
}

function addGroupBit(
  bit: number | undefined,
  section: Section,
  group: ParamReasonGroup,
) {
  const groupBit = getStaticGroupBit(section, group);
  return bit === 1 || groupBit === 1
    ? 1
    : bit === 0 && groupBit === 0
      ? 0
      : undefined;
}

// Each param group's `check`, or-ed together, but for a group never written.
function orEachParamGroup(params: Sources["param"], check: GroupCheck) {
  return reduceParamGroups(params, orGroupChecks[check], undefined)!;
}

const orGroupChecks = {
  _write_guard: orGroupCheck("_write_guard"),
  _write_if: orGroupCheck("_write_if"),
} satisfies Record<GroupCheck, unknown>;

function orGroupCheck(check: GroupCheck) {
  return (
    expr: t.Expression | undefined,
    section: Section,
    group: ParamReasonGroup,
  ) =>
    getStaticGroupBit(section, group) === 0
      ? expr
      : orGuard(expr, getOrShareSectionGuard(section, group, check));
}

function orGuard(guard: t.Expression | undefined, other: t.Expression) {
  return guard ? t.logicalExpression("||", guard, other) : other;
}

export function andGuard(
  guard: t.Expression | undefined | false,
  expr: t.Expression,
) {
  return guard ? t.logicalExpression("&&", guard, expr) : expr;
}

// The first use stays inline; a second shares it through a declarator.
function getOrShareSectionGuard(
  section: Section,
  params: ParamReasonGroup,
  check: GroupCheck,
): t.Expression {
  if (!section.paramReasonGroups) return scopeReasonIdentifier(section);

  const state = getSectionGuards(section);
  let tracking = state.shares.get(check);
  if (!tracking) state.shares.set(check, (tracking = createGuardShares()));
  const index = getParamReasonGroupIndex(section, params);
  const name = tracking.names.get(index);
  if (name) return t.identifier(name);

  const guard = callRuntime(
    check,
    scopeReasonIdentifier(section),
    withLeadingComment(t.numericLiteral(index), getDebugNames(params)),
  );
  const pending = tracking.pending.get(index);
  if (!pending) {
    const expr = t.parenthesizedExpression(guard);
    tracking.pending.set(index, expr);
    return expr;
  }

  const shared = generateUid(
    `${groupCheckPrefixes[check]}__${getDebugNamesAsIdentifier(params)}`,
  );
  tracking.names.set(index, shared);
  tracking.pending.delete(index);
  state.declarators.push(t.variableDeclarator(t.identifier(shared), guard));
  pending.expression = t.identifier(shared);
  return t.parenthesizedExpression(t.identifier(shared));
}

// Whether the guard for a reason is a runtime mask rather than a constant.
function isDynamicWriteGuard(
  section: Section,
  reason: undefined | Reason,
): reason is Sources & { state: undefined } {
  return isGuardedReason(reason) && !isCrossSection(section, reason);
}

function isCrossSection(section: Section, reason: Sources) {
  return some(
    reason.param,
    (param) => !isSameOrAncestorSection(param.section, section),
  );
}

// The constant every render of a `<define>` body's group passes, where each call passes
// the same; none for a recursive call, or params no guard groups (a function's readers').
function getStaticGroupBit(body: Section, group: ParamReasonGroup) {
  const index = findParamReasonGroupIndex(body, group);
  return index === -1
    ? undefined
    : getBodyGroupBit(body.paramReasonGroups![index]);
}

const [getBodyGroupBit] = createAnalysisMemo((group: ParamReasonGroup) => {
  const body = first(group).section;
  return isOnlyCalled(body) ? getCallsBit(body, group) : undefined;
}, undefined);

function getCallsBit(body: Section, group: ParamReasonGroup) {
  const renderedBy = body.renderedBy!;
  let bit: number | undefined;
  for (const call of Array.isArray(renderedBy) ? renderedBy : [renderedBy]) {
    const callSection = call.childScopeBinding.section;
    const callBit = getWriteBit(
      callSection,
      findSlot(call.childScopeBinding, SlotKind.ParamGroup, callSection, group)
        ?.reason,
    );
    if (callBit === undefined || (bit !== undefined && bit !== callBit)) {
      return;
    }
    bit = callBit;
  }
  return bit;
}

// A `<define>` body its known calls alone render: its var is read nowhere else.
function isOnlyCalled(body: Section) {
  return (
    !!body.renderedBy && !!body.derives && !some(body.derives.binding, isUsed)
  );
}

function isUsed(binding: Binding) {
  return (
    !!binding.reads.size ||
    !!binding.aliases.size ||
    !!binding.propertyAliases.size
  );
}

function createGuardShares(): GuardShares {
  return {
    names: new Map(),
    pending: new Map(),
  };
}

function hasGuardedReason(section: Section) {
  if (
    section.paramReasonGroups ||
    isGuardedReason(mapBodyParams(section, section.reason))
  ) {
    return true;
  }
  return section.slots.some(isConditionalSlot);
}

function isConditionalSlot(slot: Slot) {
  return isGuardedReason(mapBodyParams(slot.section, slot.reason));
}

function scopeReasonIdentifier(section: Section) {
  return t.identifier(ensureSharedUid(`scope${section.id}_reason`, section));
}

import { types as t } from "@marko/compiler";

import { UpdatesFrom } from "../../common/types";
import {
  type Binding,
  getDebugNames,
  getDebugNamesAsIdentifier,
} from "./bindings";
import { createAnalysisMemo } from "./cyclic-memo";
import { generateUid, ensureSharedUid } from "./generate-uid";
import { getCallUpdatesFrom, type KnownTagExtra } from "./known-tag";
import { isPatch } from "./marko-config";
import { first, some } from "./optional";
import { hasPatchKeyedNodes, isPatchKeyedSlot } from "./patch/decisions";
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
  getScopeIdIdentifier,
  isOptionalBranch,
  isSameOrAncestorSection,
  type ParamReasonGroup,
  reduceParamGroups,
  type Section,
} from "./sections";
import { findSectionSlot, findSlot, type Slot, SlotKind } from "./slots";
import { ALWAYS, compareSources, mergeSources, type Sources } from "./sources";
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
  // A patch build's checks of the mask alone,
  _client_guard: "cg",
  _server_guard: "sg",
  _updates_from: "uf",
  // and of the render context too, which is fixed only within one body.
  _filled_guard: "fg",
  _unfilled_if: "ui",
} satisfies Partial<Record<HTMLRuntimeHelpers, string>>;
export type GroupCheck = keyof typeof groupCheckPrefixes;
type MaskCheck = Exclude<GroupCheck, "_filled_guard" | "_unfilled_if">;

// Keyed by param reason group: a section's guard for a set of params is
// that group's check, whatever else the reason reads.
interface GuardShares {
  names: Map<ParamReasonGroup, string>;
  pending: Map<ParamReasonGroup, t.ParenthesizedExpression>;
}

interface SharedGuards {
  shares: Map<GroupCheck, GuardShares>;
  declarators: t.VariableDeclarator[];
}

const [getSectionGuards] = createOutputSectionState<
  SharedGuards & {
    page?: true;
    /** The statement binding the reason, once a body has it. */
    statement?: t.Statement;
  }
>((section) => ({
  shares: new Map(),
  declarators: [
    t.variableDeclarator(
      scopeReasonIdentifier(section),
      callRuntime("_scope_reason"),
    ),
  ],
}));

// A body's checks of the render context for groups of the bodies around it,
// shared beside its scope id.
const [getBodyGuards] = createOutputSectionState<SharedGuards>((section) => ({
  shares: new Map(),
  declarators: [
    t.variableDeclarator(
      getScopeIdIdentifier(section),
      callRuntime("_scope_id"),
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
// with its shared guards, only when a guard is dynamic or in a patch build.
export function getScopeReasonStatement(section: Section): t.Statement {
  // A patch build's child scope writes may still add this body's page guard.
  const guards = getSectionGuards(section);
  return (guards.statement =
    isPatch() || hasGuardedReason(section)
      ? t.variableDeclaration("const", guards.declarators)
      : t.expressionStatement(callRuntime("_scope_reason")));
}

// The statement binding the section's reason, once its body has one.
export function getEmittedReasonStatement(section: Section) {
  return getSectionGuards(section).statement;
}

// The statement claiming a body's scope id, with the checks it shares there.
export function getScopeIdStatement(section: Section) {
  return t.variableDeclaration("const", getBodyGuards(section).declarators);
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

  const bit = getGroupsBit(reason.param, "_write_guard");
  if (bit === 1 || (bit === 0 && !reason.global)) {
    return bit && omitUnconditional ? undefined : t.numericLiteral(bit);
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

  const bit = getGroupsBit(ownReason.param, "_write_if");
  if (bit === 1) return expr;
  if (bit === 0 && !ownReason.global) return undefined;
  return andGuard(getDynamicGuard(section, ownReason, "_write_if"), expr);
}

// The global dimension has no param slots: it is patch-only, where a
// page render serializes it and a patch render re-ships every global instead.
function getDynamicGuard(
  section: Section,
  reason: Sources & { state: undefined },
  check: keyof typeof orGroupChecks,
) {
  const paramGuard = orEachParamGroup(reason.param, check);
  if (!reason.global) return paramGuard;
  const globalGuard = scopePageIdentifier(getReasonSection(section));
  return paramGuard ? orGuard(globalGuard, paramGuard) : globalGuard;
}

// Branch and boundary bodies declare no reason of their own; the nearest
// enclosing content body or the root does.
export function getReasonSection(section: Section) {
  let cur = section;
  while (cur.parent && cur.branch) cur = cur.parent;
  return cur;
}

// A page render's gate, for what a page and a patch render pass differently:
// a known child's group arguments, content locals, the global dimension.
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

// The 2-bit value caller groups pass together, or'd into `bits`, where every call
// passes each as a constant; undefined where one composes at render.
export function getGroupsConstant(
  groups: [Section, ParamReasonGroup][],
  bits: number,
) {
  for (const [section, group] of groups) {
    const value = getStaticGroupValue(section, group);
    if (value === undefined) return;
    bits |= value;
  }
  return bits;
}

// The same as a mask value: what a child's mask composes for them, a constant group
// folded into `bits`, the rest read at render.
export function buildGroupsValue(
  groups: [Section, ParamReasonGroup][],
  bits: number,
) {
  let composed: t.Expression | undefined;
  for (const [section, group] of groups) {
    const value = getStaticGroupValue(section, group);
    if (value === undefined) composed = orMaskGroup(composed, section, group);
    else bits |= value;
  }
  if (!composed) return bits;
  return bits
    ? t.binaryExpression("|", t.numericLiteral(bits), composed)
    : composed;
}

// The groups' bits or'd at render.
export function buildComposedGroupValue(groups: [Section, ParamReasonGroup][]) {
  let value: t.Expression | undefined;
  for (const [section, group] of groups) {
    value = orMaskGroup(value, section, group);
  }
  return value!;
}

function orMaskGroup(
  value: t.Expression | undefined,
  section: Section,
  group: ParamReasonGroup,
) {
  const bits = getOrShareSectionGuard(section, group, "_updates_from");
  return value ? t.binaryExpression("|", value, bits) : bits;
}

// Whether the server ever writes what the reason guards, where `section` reads it.
export function isEverWritten(section: Section, reason: undefined | Reason) {
  const ownReason = mapBodyParams(section, reason);
  return isGuardedReason(ownReason)
    ? !!ownReason.global || getGroupsBit(ownReason.param, "_write_if") !== 0
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
  if (!isDynamicWriteGuard(section, reason)) return reason ? 1 : 0;
  return getGroupsBit(reason.param, "_write_guard");
}

// `1` where some group's `check` always holds, `0` where every group's never does.
function getGroupsBit(params: Sources["param"], check: GroupCheck) {
  return reduceParamGroups(
    params,
    (bit: number | undefined, section, group) => {
      const groupBit = getStaticGroupBit(section, group, check);
      return bit === 1 || groupBit === 1
        ? 1
        : bit === 0 && groupBit === 0
          ? 0
          : undefined;
    },
    0,
  );
}

// Each param group's `check`, or-ed together.
function orEachParamGroup(
  params: Sources["param"],
  check: keyof typeof orGroupChecks,
) {
  return reduceParamGroups(params, orGroupChecks[check], undefined)!;
}

const orGroupChecks = {
  _write_guard: orGroupCheck("_write_guard"),
  _write_if: orGroupCheck("_write_if"),
};

function orGroupCheck(check: MaskCheck) {
  return (
    expr: t.Expression | undefined,
    section: Section,
    group: ParamReasonGroup,
  ) => orGuard(expr, getOrShareSectionGuard(section, group, check));
}

// A check folded to `1` holds always, so the guard does; one folded to `0` adds nothing.
export function orGuard(guard: t.Expression | undefined, other: t.Expression) {
  return !guard || isNever(guard) || isAlways(other)
    ? other
    : isNever(other) || isAlways(guard)
      ? guard
      : t.logicalExpression("||", guard, other);
}

// A guard folded to `1` holds always and one folded to `0` never; what is never stays so.
export function andGuard(
  guard: t.Expression | undefined | false,
  expr: t.Expression,
) {
  return !guard || isAlways(guard) || isNever(expr)
    ? expr
    : isNever(guard)
      ? guard
      : t.logicalExpression("&&", guard, expr);
}

// The guarded expression where it ever holds: none where a guard folds to never.
export function ifEver(expr: t.Expression | undefined | false) {
  return expr && !isNever(expr) ? expr : undefined;
}

// A guard's negation, folded where the guard is.
export function notGuard(guard: t.Expression) {
  return isAlways(guard)
    ? t.numericLiteral(0)
    : isNever(guard)
      ? t.numericLiteral(1)
      : t.unaryExpression("!", guard);
}

export function isNever(guard: t.Expression) {
  return t.isNumericLiteral(guard, { value: 0 });
}

export function isAlways(guard: t.Expression) {
  return t.isNumericLiteral(guard, { value: 1 });
}

// A check of the mask alone, shared beside its group's reason.
export function getOrShareSectionGuard(
  section: Section,
  params: ParamReasonGroup,
  check: MaskCheck,
): t.Expression {
  return shareGroupCheck(getSectionGuards(section), section, params, check);
}

// A check `section` evaluates of a group of `groupSection`: one also reading the
// render context shares only within that body, beside its own reason or scope id.
export function getOrShareGroupCheck(
  section: Section,
  groupSection: Section,
  params: ParamReasonGroup,
  check: GroupCheck,
) {
  return shareGroupCheck(
    section === groupSection ||
      (check !== "_filled_guard" && check !== "_unfilled_if")
      ? getSectionGuards(groupSection)
      : getBodyGuards(section),
    groupSection,
    params,
    check,
  );
}

// The first use stays inline; a second shares it through a declarator.
function shareGroupCheck(
  guards: SharedGuards,
  section: Section,
  params: ParamReasonGroup,
  check: GroupCheck,
): t.Expression {
  if (!section.paramReasonGroups) return scopeReasonIdentifier(section);
  const bit = getStaticGroupBit(section, params, check);
  if (bit !== undefined) return t.numericLiteral(bit);

  let tracking = guards.shares.get(check);
  if (!tracking) guards.shares.set(check, (tracking = createGuardShares()));
  const index = getParamReasonGroupIndex(section, params);
  const group = section.paramReasonGroups[index];
  const name = tracking.names.get(group);
  if (name) return t.identifier(name);

  const guard = callRuntime(check, ...getGroupArgs(section, params, index));
  const pending = tracking.pending.get(group);
  if (!pending) {
    const expr = t.parenthesizedExpression(guard);
    tracking.pending.set(group, expr);
    return expr;
  }

  const shared = generateUid(
    `${groupCheckPrefixes[check]}__${getDebugNamesAsIdentifier(params)}`,
  );
  tracking.names.set(group, shared);
  tracking.pending.delete(group);
  guards.declarators.push(t.variableDeclarator(t.identifier(shared), guard));
  pending.expression = t.identifier(shared);
  return t.parenthesizedExpression(t.identifier(shared));
}

// Whether the guard for a reason is a runtime mask rather than a constant.
export function isDynamicWriteGuard(
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
function getStaticGroupValue(body: Section, group: ParamReasonGroup) {
  const index = findParamReasonGroupIndex(body, group);
  return index === -1
    ? undefined
    : getBodyGroupValue(body.paramReasonGroups![index]);
}

const [getBodyGroupValue] = createAnalysisMemo((group: ParamReasonGroup) => {
  const body = first(group).section;
  return isOnlyCalled(body) ? getCallsValue(body, group) : undefined;
}, undefined);

// What `check` returns for a group every call passes the same constant, where that
// decides it: in a plain build its write bit, in a patch build its value's answer.
export function getStaticGroupBit(
  section: Section,
  group: ParamReasonGroup,
  check: GroupCheck,
) {
  const value = getStaticGroupValue(section, group);
  return value === undefined || !isPatch()
    ? value
    : getPatchCheckBit(check, value);
}

// What a patch build's check returns for a group's value, where that decides it; others
// also read whether a page renders, the whole mask or the render context.
export function getPatchCheckBit(check: GroupCheck, value: number) {
  switch (check) {
    case "_client_guard":
      return value & UpdatesFrom.Client;
    case "_server_guard":
      return +(value === UpdatesFrom.Server);
    case "_unfilled_if":
      return value & UpdatesFrom.Client || (value ? undefined : 0);
    case "_filled_guard":
      return value ? +(value === UpdatesFrom.Server) : undefined;
    case "_write_if":
      return value ? undefined : 0;
  }
}

// What every call passes in its mask for the group, where each passes the same constant:
// a plain call its write bit, a patch call where the group updates from.
function getCallsValue(body: Section, group: ParamReasonGroup) {
  const renderedBy = body.renderedBy!;
  let value: number | undefined;
  for (const call of Array.isArray(renderedBy) ? renderedBy : [renderedBy]) {
    const callValue = isPatch()
      ? getCallUpdatesFrom(call, group)
      : getCallWriteBit(call, group);
    if (
      callValue === undefined ||
      (value !== undefined && value !== callValue)
    ) {
      return;
    }
    value = callValue;
  }
  return value;
}

// The write bit a plain call passes for its child's group, where it is a constant.
function getCallWriteBit(call: KnownTagExtra, group: ParamReasonGroup) {
  const callSection = call.childScopeBinding.section;
  return getWriteBit(
    callSection,
    findSlot(call.childScopeBinding, SlotKind.ParamGroup, callSection, group)
      ?.reason,
  );
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

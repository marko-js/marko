import { types as t } from "@marko/compiler";

import {
  type Binding,
  getDebugNames,
  getDebugNamesAsIdentifier,
} from "./bindings";
import { generateUid, getSharedUid } from "./generate-uid";
import { isPatch } from "./marko-config";
import { first, forEach, some, type SortedOpt } from "./optional";
import { getWriteSources } from "./patch/decisions";
import { isBranchPathSection } from "./patch/structure";
import { isConditionalReason, type Reason, type Reasons } from "./reasons";
import {
  getCanonicalExtra,
  getConstantBindings,
  getReferencedBindings,
  isReferencedExtra,
} from "./references";
import { callRuntime, type HTMLRuntimeHelpers } from "./runtime";
import {
  getParamReasonGroupIndex,
  groupParamsBySection,
  isSameOrChildSection,
  type Section,
} from "./sections";
import { type Slot } from "./slots";
import {
  compareSources,
  getRootParams,
  hasRootParamSource,
  type Sources,
} from "./sources";
import { createSectionState } from "./state";
import { withLeadingComment } from "./with-comment";

type ConditionalReason = Sources & { state: undefined };

export function isSameReason(a: Reason | undefined, b: Reason | undefined) {
  // Reasons read always match whatever their sources: both guard as `1`.
  return (
    a === b ||
    (a && b ? (a.always && b.always) || compareSources(a, b) === 0 : false)
  );
}

interface SectionGuards {
  if: GuardHoists;
  guard: GuardHoists;
  declarators: t.VariableDeclarator[];
  page?: true;
}

// Keyed by param reason group: a section's guard for a set of params is
// that group's check, whatever else the reason reads.
interface GuardHoists {
  names: Map<number, string>;
  pending: Map<number, t.ParenthesizedExpression>;
}

const [getSectionGuards] = createSectionState<SectionGuards>(
  "sectionGuards",
  (section) => ({
    if: createGuardHoists(),
    guard: createGuardHoists(),
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
// with its hoisted guards, when a guard is dynamic or a patch reads it.
export function getScopeReasonStatement(section: Section): t.Statement {
  return isPatch() || hasConditionalReason(section)
    ? t.variableDeclaration("const", getSectionGuards(section).declarators)
    : t.expressionStatement(callRuntime("_scope_reason"));
}

export function getWriteGuard(
  section: Section,
  reason: undefined | Reason,
  optional: boolean,
) {
  if (!isDynamicWriteGuard(section, reason)) {
    if (!reason) return t.numericLiteral(0);

    return optional
      ? undefined
      : withLeadingComment(
          t.numericLiteral(1),
          getDebugNames(reason.always ? undefined : reason.state),
        );
  }

  return getDynamicGuard(section, reason, true);
}

export function getWriteGuardForAny(
  section: Section,
  reasons: undefined | Reasons,
  optional: boolean,
) {
  if (!Array.isArray(reasons)) {
    return getWriteGuard(section, reasons, optional);
  }

  // A static member decides before any dynamic guard is built (and hoisted).
  for (const reason of reasons) {
    if (!isConditionalReason(reason)) {
      return optional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(reason.state));
    }
  }

  let expr!: t.Expression;
  for (const reason of reasons) {
    const guard = getWriteGuard(section, reason, false)!;
    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr;
}

export function getExprIfWritten<
  T extends undefined | Reason,
  R extends (T extends {} ? t.Expression : undefined),
>(section: Section, reason: T, expr: t.Expression): R {
  if (!isDynamicWriteGuard(section, reason)) {
    if (!reason) return undefined as R;
    // A patch render has no ordinary resume payload, so a statically written
    // value rides the page render's gate; the root declares it.
    if (isPatch() && !section.parent) {
      return t.logicalExpression("&&", scopePageIdentifier(section), expr) as R;
    }
    return expr as R;
  }

  // Branch-path pairing never prunes with a value group: interior patch
  // writes reach through it, so it rides the root page/patch reason.
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
// root reason on the branch path) already gates: constant groups ship nothing.
export function getValueIfWritten(
  section: Section,
  reason: Reason,
  expr: t.Expression,
) {
  if (!isDynamicWriteGuard(section, reason)) return expr;
  const guard = getDynamicGuard(section, reason, false);
  return guard ? t.logicalExpression("&&", guard, expr) : expr;
}

// A value a patch fills every client read of: a page ships it for the
// client-sourced groups, or where its scope renders under unpatched structure.
export function getUnfilledValueIfWritten(
  section: Section,
  reason: Reason,
  rebuilds: SortedOpt<Sources>,
  expr: t.Expression,
) {
  if (!isDynamicWriteGuard(section, reason)) return;
  return t.logicalExpression(
    "&&",
    getUnfilledGuard(reason.param, rebuilds, !!reason.global),
    expr,
  );
}

// Where such a value is still read unfilled: a client-sourced group, or
// (`unpatched`, a server-only source) a scope under unpatched structure.
export function getUnfilledGuard(
  params: Sources["param"],
  rebuilds: SortedOpt<Sources>,
  unpatched: boolean,
) {
  let guard: t.Expression | undefined;
  const add = (part: t.Expression) => {
    guard = guard ? t.logicalExpression("||", guard, part) : part;
  };
  // Each root group once: a rebuild may gate on one the params already name.
  const rootGroups = new Set<number>();
  const addGroup = (section: Section, group: ParamGroup) => {
    const index = getParamReasonGroupIndex(section, group);
    if (!section.parent) {
      if (rootGroups.has(index)) return;
      rootGroups.add(index);
    }
    add(callRuntime("_unfilled_if", ...getGroupArgs(section, group, index)));
  };
  for (const [paramSection, group] of groupParamsBySection(params)) {
    addGroup(paramSection, group);
  }
  forEach(rebuilds, (sources) => {
    const rootParams = getRootParams(sources.param);
    if (rootParams) addGroup(first(rootParams).section, rootParams);
  });
  if (unpatched) add(callRuntime("_unfilled_if"));
  return guard!;
}

// The global dimension has no param slots: it is patch-only, where a
// page render serializes it and a patch render re-ships every global instead.
function getDynamicGuard(
  section: Section,
  reason: ConditionalReason,
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
  while (section.parent && section.branch) {
    section = section.parent;
  }
  return section;
}

// A page render's gate: statically serialized values and structure a patch
// never speaks ride it, so a flush carries fills alone.
export function scopePageIdentifier(section: Section) {
  const state = getSectionGuards(section);
  const id = t.identifier(getSharedUid(`scope${section.id}_page`, section));
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
  if (!isDynamicWriteGuard(section, reason)) return;
  let expr: t.Expression | undefined;
  for (const [paramSection, params] of groupParamsBySection(reason.param)) {
    const part = callRuntime(
      "_client_guard",
      scopeReasonIdentifier(paramSection),
      withLeadingComment(
        t.numericLiteral(getParamReasonGroupIndex(paramSection, params)),
        getDebugNames(params),
      ),
    );
    expr = expr ? t.logicalExpression("||", expr, part) : part;
  }
  return expr;
}

// Ownership args for an expression's write; a value fixed for the scope's
// lifetime (constant, `<id>`, `<define>`) only seeds a created scope.
export function getExprWriteOwnership(extra: t.NodeExtra | undefined) {
  return getPatchWriteOwnership(getWriteSources(extra), isStableExpr(extra));
}

// An expression with nothing request-derived behind it renders once, so no
// patch fills it again; a `$global` read changes per request.
export function isStableExpr(extra: t.NodeExtra | undefined) {
  if (!extra || getWriteSources(extra)?.global) return false;
  let stable = true;
  const check = (binding: Binding) => {
    stable &&= !!binding.stable;
  };
  // A merged expression's references live on its canonical extra.
  const canonical = getCanonicalExtra(extra);
  if (isReferencedExtra(canonical)) {
    forEach(getReferencedBindings(canonical), check);
  }
  forEach(getConstantBindings(canonical), check);
  return stable;
}

// Whether a patch write's value reads a root param, whose caller decides at
// runtime who feeds it (`getPatchWriteOwnership` gates on its group).
export function readsRootParam(extra: t.NodeExtra | undefined) {
  return !isStableExpr(extra) && hasRootParamSource(getWriteSources(extra));
}

// A patch writer's trailing `[mask, groupIdx]` ownership args, or `[]` when
// the sources read no root param (only a root param's group is gated).
export function getPatchWriteOwnership(
  sources: Sources | undefined,
  stable?: boolean,
): [t.Expression, t.Expression] | [] {
  // Never changes: the write only seeds a created scope, as under a group
  // mask of `0`.
  if (stable) return [t.numericLiteral(0), t.numericLiteral(0)];
  const rootParams = getRootParams(sources?.param);
  return rootParams ? getGroupArgs(first(rootParams).section, rootParams) : [];
}

// The index of the root param group a write of these sources is gated on.
export function getRootParamGroupIndex(sources: Sources | undefined) {
  const rootParams = getRootParams(sources?.param);
  return (
    rootParams &&
    getParamReasonGroupIndex(first(rootParams).section, rootParams)
  );
}

type ParamGroup = NonNullable<Sources["param"]>;

// A group's runtime check arguments: its section's reason and its index.
function getGroupArgs(
  section: Section,
  group: ParamGroup,
  index = getParamReasonGroupIndex(section, group),
): [t.Expression, t.Expression] {
  return [
    scopeReasonIdentifier(section),
    withLeadingComment(t.numericLiteral(index), getDebugNames(group)),
  ];
}

// The same test as a statement-position guard expression (fills and
// effect writes), or undefined when no root param gates the write.
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
  reason: ConditionalReason,
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

  const state = getSectionGuards(section);
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
        ? "_write_guard"
        : "_write_if") satisfies HTMLRuntimeHelpers,
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
    `${isGuard ? "wg" : "wi"}__${getDebugNamesAsIdentifier(params)}`,
  );
  tracking.names.set(index, hoisted);
  tracking.pending.delete(index);
  state.declarators.push(t.variableDeclarator(t.identifier(hoisted), guard));
  pending.expression = t.identifier(hoisted);
  return t.parenthesizedExpression(t.identifier(hoisted));
}

// Whether the guard for a reason is a runtime mask rather than a constant.
function isDynamicWriteGuard(
  section: Section,
  reason: undefined | Reason,
): reason is ConditionalReason {
  return isConditionalReason(reason) && !isCrossSection(section, reason);
}

function isCrossSection(section: Section, reason: Sources) {
  return some(
    reason.param,
    (param) => !isSameOrChildSection(param.section, section),
  );
}

function createGuardHoists(): GuardHoists {
  return {
    names: new Map(),
    pending: new Map(),
  };
}

function hasConditionalReason(section: Section) {
  if (section.paramReasonGroups || isConditionalReason(section.reason)) {
    return true;
  }
  return some(section.slots, isConditionalSlot);
}

function isConditionalSlot(slot: Slot) {
  return isConditionalReason(slot.reason);
}

function scopeReasonIdentifier(section: Section) {
  return t.identifier(getSharedUid(`scope${section.id}_reason`, section));
}

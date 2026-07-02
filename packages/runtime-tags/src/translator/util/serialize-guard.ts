import { types as t } from "@marko/compiler";

import { generateUid, getSharedUid } from "./generate-uid";
import { type OneMany, type Opt, some, Sorted } from "./optional";
import {
  compareSources,
  getDebugNames,
  getDebugNamesAsIdentifier,
  type InputBinding,
  type ParamBinding,
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

const sourcesUtil = new Sorted(compareSources);

type DynamicSerializeReason = {
  state: undefined;
  param: Opt<InputBinding | ParamBinding>;
  global: true | undefined;
};

type DynamicParamSerializeReason = DynamicSerializeReason & {
  param: OneMany<InputBinding | ParamBinding>;
};

interface SectionReasonState {
  if: TypeState;
  guard: TypeState;
  declarators: t.VariableDeclarator[];
}

interface TypeState {
  names: Map<Sources, string>;
  pending: Map<Sources, t.ParenthesizedExpression>;
  seenReasons: Opt<Sources>;
  hoistedReasons: Opt<Sources>;
}

const [getSectionReasonState] = createSectionState<SectionReasonState>(
  "serializeReasonState",
  (section) => ({
    if: createTypeState(),
    guard: createTypeState(),
    declarators: [
      t.variableDeclarator(
        t.identifier(getSharedUid(`scope${section.id}_reason`, section)),
        callRuntime("_scope_reason"),
      ),
    ],
  }),
);

export function getScopeReasonDeclaration(
  section: Section,
): t.VariableDeclaration {
  return t.variableDeclaration(
    "const",
    getSectionReasonState(section).declarators,
  );
}

export function getSerializeGuard(
  section: Section,
  reason: undefined | SerializeReason,
  optional: boolean,
) {
  if (!isReasonDynamic(reason) || isCrossSection(section, reason)) {
    return reason
      ? optional
        ? undefined
        : withLeadingComment(
            t.numericLiteral(1),
            getDebugNames(reason === true ? undefined : reason.state),
          )
      : t.numericLiteral(0);
  }

  return withPersistedGuard(reason, getParamGuard(reason, true));
}

// Splits a dynamic reason for guard building: the param part rides the
// existing per-group `_scope_reason()` guards (identical to output without
// global sources, preserving byte-identity), while a global part ORs in
// `_persisted_reason()`, which reads the render's persisted flag directly --
// no parent threading, so cross-template $global reads gate correctly even
// when the parent passes no dynamic props.
function getParamGuard(reason: DynamicSerializeReason, isGuard: boolean) {
  return reason.param
    ? getOrHoist(getParamPart(reason as DynamicParamSerializeReason), isGuard)
    : undefined;
}

function withPersistedGuard(
  reason: DynamicSerializeReason,
  guard: t.Expression | undefined,
) {
  if (!reason.global) return guard;
  const persisted = callRuntime(
    "_persisted_reason" satisfies HTMLRuntimeHelpers,
  );
  return guard ? t.logicalExpression("||", guard, persisted) : persisted;
}

const paramPartCache = new WeakMap<
  DynamicParamSerializeReason,
  DynamicParamSerializeReason
>();
function getParamPart(reason: DynamicParamSerializeReason) {
  if (!reason.global) return reason;
  let paramPart = paramPartCache.get(reason);
  if (!paramPart) {
    paramPartCache.set(
      reason,
      (paramPart = {
        state: undefined,
        param: reason.param,
        global: undefined,
      }),
    );
  }
  return paramPart;
}

export function getSerializeGuardForAny(
  section: Section,
  reasons: undefined | SerializeReasons,
  optional: boolean,
) {
  if (!reasons || reasons === true) {
    return getSerializeGuard(section, reasons, optional);
  }

  if (reasons.length === 1) {
    return getSerializeGuard(section, reasons[0], optional);
  }

  let expr!: t.Expression;
  for (const reason of reasons) {
    if (!isReasonDynamic(reason)) {
      return optional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(reason.state));
    }

    const guard = getSerializeGuard(section, reason, false)!;
    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr;
}

export function getExprIfSerialized<
  T extends undefined | SerializeReason,
  R extends T extends {} ? t.Expression : undefined,
>(section: Section, reason: T, expr: t.Expression): R {
  if (!isReasonDynamic(reason) || isCrossSection(section, reason)) {
    return (reason && expr) as R;
  }

  // A purely global-sourced reason never serializes values: a stateful
  // parent cannot change `$global`, and persisted updates always supply
  // fresh values. Only reachable under the persisted option, where callers
  // handle the undefined result.
  if (!reason.param) return undefined as R;

  const guard = getOrHoist(
    getParamPart(reason as DynamicParamSerializeReason),
    false,
  );
  return (guard ? t.logicalExpression("&&", guard, expr) : expr) as R;
}

// The guard-class sibling of `getExprIfSerialized`: gates on any reason bit
// (stateful or persisted) instead of requiring the stateful bit. Used under
// the `persisted` option for spine emission (scope writes, owner links,
// structural bookkeeping) that updates rely on even when values are elided.
export function getExprGuardSerialized<
  T extends undefined | SerializeReason,
  R extends T extends {} ? t.Expression : undefined,
>(section: Section, reason: T, expr: t.Expression): R {
  if (!isReasonDynamic(reason) || isCrossSection(section, reason)) {
    return (reason && expr) as R;
  }

  const guard = withPersistedGuard(reason, getParamGuard(reason, true));
  return (guard ? t.logicalExpression("&&", guard, expr) : expr) as R;
}

function getOrHoist(
  reason: DynamicParamSerializeReason,
  isGuard: boolean,
): t.Expression | undefined {
  const onlySection = getOnlySection(reason.param);

  if (onlySection) {
    const state = getSectionReasonState(onlySection);
    const tracking = isGuard ? state.guard : state.if;
    const existingFound = sourcesUtil.find(tracking.hoistedReasons, reason);

    if (existingFound) {
      return t.identifier(tracking.names.get(existingFound)!);
    }

    const guard = buildGuardExpr(onlySection, reason.param, isGuard);
    const seenFound = sourcesUtil.find(tracking.seenReasons, reason);
    if (!seenFound) {
      const expr = t.parenthesizedExpression(guard);
      tracking.pending.set(reason, expr);
      tracking.seenReasons = sourcesUtil.add(tracking.seenReasons, reason);
      return expr;
    }

    const name = generateUid(
      `${isGuard ? "sg" : "si"}__${getDebugNamesAsIdentifier(reason.param)}`,
    );
    tracking.hoistedReasons = sourcesUtil.add(tracking.hoistedReasons, reason);
    tracking.names.set(reason, name);
    state.declarators.push(t.variableDeclarator(t.identifier(name), guard));

    const pendingParen = tracking.pending.get(seenFound);
    if (pendingParen) {
      pendingParen.expression = t.identifier(name);
      tracking.pending.delete(seenFound);
    }

    return t.parenthesizedExpression(t.identifier(name));
  }

  let orExpr: t.Expression | undefined;
  for (const [paramsSection, params] of groupParamsBySection(reason.param)) {
    const expr = buildGuardExpr(paramsSection, params, isGuard);
    orExpr = orExpr ? t.logicalExpression("||", orExpr, expr) : expr;
  }

  return orExpr;
}

function buildGuardExpr(
  paramsSection: Section,
  params: DynamicParamSerializeReason["param"],
  isGuard: boolean,
) {
  const serializeIdentifier = t.identifier(
    getSharedUid(`scope${paramsSection.id}_reason`, paramsSection),
  );
  return paramsSection.paramReasonGroups
    ? callRuntime(
        (isGuard
          ? "_serialize_guard"
          : "_serialize_if") satisfies HTMLRuntimeHelpers,
        serializeIdentifier,
        withLeadingComment(
          t.numericLiteral(getParamReasonGroupIndex(paramsSection, params)),
          getDebugNames(params),
        ),
      )
    : serializeIdentifier;
}

function getOnlySection(params: Opt<{ section: Section }>) {
  if (params === undefined) return undefined;
  if (!Array.isArray(params)) return params.section;
  const { section } = params[0];
  return section === params[params.length - 1].section ? section : undefined;
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
    seenReasons: undefined,
    hoistedReasons: undefined,
  };
}

import { types as t } from "@marko/compiler";

import { generateUid, getSharedUid } from "./generate-uid";
import { isPersisted } from "./marko-config";
import { forEach, type Opt, some } from "./optional";
import { scopeReasonRuntime } from "./persisted/intrinsics";
import { isBranchPathSection } from "./persisted/structure";
import {
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
  getSerializeSourcesForExpr,
  isReasonDynamic,
  type SerializeReason,
  type SerializeReasons,
  sourcesUtil,
} from "./serialize-reasons";
import { createSectionState } from "./state";
import { withLeadingComment } from "./with-comment";

type DynamicSerializeReason = Sources & { state: undefined };

interface SectionReasonState {
  if: TypeState;
  guard: TypeState;
  declarators: t.VariableDeclarator[];
  owned?: true;
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
        callRuntime(scopeReasonRuntime()),
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
    if (!reason) return t.numericLiteral(0);

    return optional
      ? undefined
      : withLeadingComment(
          t.numericLiteral(1),
          getDebugNames(reason === true ? undefined : reason.state),
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
  R extends (T extends {} ? t.Expression : undefined),
>(section: Section, reason: T, expr: t.Expression): R {
  if (!isReasonDynamic(reason) || isCrossSection(section, reason)) {
    if (!reason) return undefined as R;
    // A patch has no ordinary resume payload, so a statically serialized value
    // rides the scope reason (`1` page / `undefined` patch); the root declares it.
    if (isPersisted() && !section.parent) {
      return t.logicalExpression(
        "&&",
        scopeReasonIdentifier(section),
        expr,
      ) as R;
    }
    return expr as R;
  }

  // Branch-path pairing never prunes with a value group: interior patch
  // writes anchor through it, so it rides the root page/patch reason.
  if (isPersisted() && isBranchPathSection(section) && section.parent) {
    let rootSection = section;
    while (rootSection.parent) rootSection = rootSection.parent;
    return t.logicalExpression(
      "&&",
      scopeReasonIdentifier(rootSection),
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
  if (!isReasonDynamic(reason) || isCrossSection(section, reason)) return expr;
  const guard = getDynamicGuard(section, reason, false);
  return guard ? t.logicalExpression("&&", guard, expr) : expr;
}

// The global dimension has no param slots: it is persisted-only, where the
// scope reason itself is `1` for a page render and `undefined` for a patch.
function getDynamicGuard(
  section: Section,
  reason: DynamicSerializeReason,
  isGuard: boolean,
) {
  const paramGuard = reason.param ? getOrHoist(reason, isGuard) : undefined;
  if (!reason.global) return paramGuard;
  const globalGuard = scopeReasonIdentifier(getReasonSection(section));
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

export function scopeReasonIdentifier(section: Section) {
  return t.identifier(getSharedUid(`scope${section.id}_reason`, section));
}

export function scopeOwnedIdentifier(section: Section) {
  return t.identifier(getSharedUid(`scope${section.id}_owned`, section));
}

// The ownership mask local reads the ambient slot the parent set, so its
// declarator leads the reason's (which clears that slot).
function ensureScopeOwned(section: Section) {
  const state = getSectionReasonState(section);
  if (!state.owned) {
    state.owned = true;
    state.declarators.unshift(
      t.variableDeclarator(
        scopeOwnedIdentifier(section),
        callRuntime("_persisted_ownership"),
      ),
    );
  }
}

// Ownership args for an expression's write; a value fixed for the scope's
// lifetime (constant, `<id>`, `<define>`) only seeds a created scope.
export function getExprWriteOwnership(extra: t.NodeExtra | undefined) {
  return getPatchWriteOwnership(
    getSerializeSourcesForExpr(extra || {}),
    isStableExpr(extra),
  );
}

export function isStableExpr(extra: t.NodeExtra | undefined) {
  if (!extra || !isReferencedExtra(extra)) return false;
  let stable = true;
  forEach(extra.referencedBindings, (binding) => {
    stable &&= !!binding.stable;
  });
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
      ensureScopeOwned(paramsSection);
      return [
        scopeOwnedIdentifier(paramsSection),
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
  ensureScopeOwned(section);
  return callRuntime(
    "_mask_group",
    scopeOwnedIdentifier(section),
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
  const onlySection = getOnlySection(reason.param!);

  if (onlySection) {
    const state = getSectionReasonState(onlySection);
    const tracking = isGuard ? state.guard : state.if;
    const existingFound = sourcesUtil.find(tracking.hoistedReasons, reason);

    if (existingFound) {
      return t.identifier(tracking.names.get(existingFound)!);
    }

    const guard = buildGuardExpr(onlySection, reason.param!, isGuard);
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
  params: NonNullable<Sources["param"]>,
  isGuard: boolean,
) {
  const serializeIdentifier = t.identifier(
    getSharedUid(`scope${paramsSection.id}_reason`, paramsSection),
  );
  return paramsSection.paramReasonGroups
    ? callRuntime(
        (isPersisted()
          ? isGuard
            ? "_source_guard"
            : "_source_if"
          : isGuard
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

import { types as t } from "@marko/compiler";

import {
  type Binding,
  bindingUtil,
  getDeepestPropertyAlias,
  isOwnBinding,
  type ParamBinding,
  propertiesUtil,
  type ReferencedBindings,
} from "./bindings";
import { getCallSiteSources } from "./known-tag";
import {
  concat,
  forEach,
  fromIter,
  type Opt,
  type SortedOneMany,
  reduce,
} from "./optional";
import {
  isReferencedExtra,
  getCanonicalExpr,
  getReferencedBindings,
} from "./references";
import {
  forEachAncestorSection,
  isSameOrAncestorSection,
  type ParamReasonGroups,
  type Section,
  StructureKind,
  type StructureOp,
} from "./sections";
import {
  ensureSectionSlot,
  ensureSlot,
  findSlot,
  type Slot,
  SlotKind,
} from "./slots";
import {
  ALWAYS,
  mergeSources,
  type Sources,
  sourcesUtil,
  withSources,
} from "./sources";

// Alternatives any one of which leads to a read (a chain's branches, a
// section's dom nodes); a guard answers for the set.
export type Reasons = SortedOneMany<Sources>;

// The `Sources` whose changes lead client code to read something after resume;
// an `always` one is never guarded but still says what it reads.
export type Reason = Sources;

// The single point of assigning slot reasons, to aid in debugging. A merge
// adding nothing returns the reason it had.
export function addReason(slot: Slot, reason: undefined | false | Reason) {
  if (reason) {
    const newReason = mergeSources(slot.reason, reason);
    if (slot.reason !== newReason) {
      reasonsVersion++;
      slot.reason = newReason;
    }
  }
}

export function addAlwaysReason(binding: Binding) {
  addReason(ensureSlot(binding), ALWAYS);
}

export function addReasonExprs(slot: Slot, expr: Opt<t.NodeExtra>) {
  slot.reasonExprs = concat(slot.reasonExprs, expr);
}

export function addOwnerReason(
  from: Section,
  to: Section,
  reason: undefined | false | Reason,
) {
  if (reason) forEachAncestorSection(from, to, addOwnerSlotReason, reason);
}

function addOwnerSlotReason(section: Section, reason: Reason) {
  addReason(ensureSectionSlot(section, SlotKind.Owner), reason);
}

// A reason as `section` guards it: a param of a `<define>` body it cannot
// guard by becomes what the body's calls pass, as if they were inlined.
export function mapBodyParams(
  section: Section,
  reason: undefined | Reason,
  // A param already mapped adds nothing, so a recursive call passing a body's
  // param back to it settles on what its other calls pass.
  seen?: Set<ParamBinding>,
): Reason | undefined {
  if (!reason) return;
  let mapped: Sources | undefined;
  const params = bindingUtil.filter(reason.param, (param) => {
    if (isSameOrAncestorSection(param.section, section)) return true;
    seen ??= new Set();
    if (!seen.has(param)) {
      seen.add(param);
      mapped = mergeSources(mapped, getCallSiteSources(param));
    }
    return false;
  });
  if (params === reason.param) return reason;
  return mergeSources(
    mapBodyParams(section, mapped, seen),
    withSources(reason, reason.state, params),
  );
}

// Read only when a caller's params (or `$global`) change, so each call site
// guards it.
export function isGuardedReason(
  reason: undefined | Reason,
): reason is Sources & { state: undefined; always: undefined } {
  return !!reason && !reason.always && !reason.state;
}

// Read when state changes; state only has readers when it can change on the
// client, which keeps its signal (and everything it renders) in the bundle.
export function isStateReason(reason: undefined | Reason): reason is Sources {
  return !!reason && !reason.always && !!reason.state;
}

export function getSourcesForExpr(expr: t.NodeExtra) {
  const root = getCanonicalExpr(expr);
  return isReferencedExtra(root)
    ? getSourcesForReferencedBindings(getReferencedBindings(root))
    : undefined;
}

export function getSourcesForExprs(exprs: Opt<t.NodeExtra> | boolean) {
  if (exprs) {
    if (exprs === true) {
      return ALWAYS;
    }
    return reduce(exprs, mergeExprSources);
  }
}

export function getSourcesForReferencedBindings(bindings: ReferencedBindings) {
  return reduce(bindings, mergeBindingSources);
}

// What reruns the call site expressions passing content to the bindings that
// derive from it, down the property path it lands at.
export function getSourcesForDerived({
  binding,
  exprs,
  properties,
}: NonNullable<Section["derives"]>) {
  if (exprs) {
    return reduce(binding, (sources: Sources | undefined, binding) =>
      mergeSources(
        sources,
        getSourcesForExprs(
          mapParamBindingToExpr(
            exprs,
            getDeepestPropertyAlias(binding, properties) as ParamBinding,
          ),
        ),
      ),
    );
  }
}

function mergeExprSources(sources: Sources | undefined, expr: t.NodeExtra) {
  return mergeSources(sources, getSourcesForExpr(expr));
}

function mergeBindingSources(sources: Sources | undefined, binding: Binding) {
  return mergeSources(sources, binding.sources);
}

// Dereferences params through the call site's expressions (every one of
// them without expressions), keeping the others in their own terms: the
// deriving program's params (`ownParams`), or every other program's,
// for a reason a deriving template recorded in its own terms.
export function mapParamReason(
  program: Section,
  reason: Sources,
  exprs: KnownExprs | undefined,
  ownParams: boolean,
): Reason | undefined {
  let mapped: Reason | undefined;
  // The params kept in their own terms: mapping one drops it.
  const params = bindingUtil.filter(reason.param, (param) => {
    if ((param.section.program === program) !== ownParams) return true;
    mapped = exprs
      ? mergeSources(
          mapped,
          getSourcesForExprs(mapParamBindingToExpr(exprs, param)),
        )
      : ALWAYS;
    return false;
  });
  // Another template's state is nothing this one tracks: it is read always.
  const state = bindingUtil.filter(reason.state, isOwnBinding);
  const foreignState = state !== reason.state;
  if (params === reason.param && !foreignState) return reason;
  return mergeSources(
    mergeSources(mapped, withSources(reason, state, params)),
    foreignState ? ALWAYS : undefined,
  );
}

// The call site expressions a child template's params derive from, keyed the
// way the child destructures them; `value` is the whole-value expression.
export interface KnownExprs {
  known?: Record<string, KnownExprs>;
  value?: t.NodeExtra;
}

export function mapParamReasonToExpr(
  exprs: KnownExprs,
  reason: Opt<ParamBinding>,
): Opt<t.NodeExtra>;
export function mapParamReasonToExpr(
  exprs: KnownExprs,
  reason: boolean | Opt<ParamBinding>,
): Opt<t.NodeExtra> | true;
export function mapParamReasonToExpr(
  exprs: KnownExprs,
  reason: boolean | Opt<ParamBinding>,
) {
  if (reason) {
    if (reason === true) return true;
    const result = new Set<t.NodeExtra>();
    forEach(reason, (prop) => {
      forEach(mapParamBindingToExpr(exprs, prop), (expr) => {
        result.add(expr);
      });
    });
    return fromIter(result);
  }
}

export function mapParamBindingToExpr(
  exprs: KnownExprs,
  binding: ParamBinding,
): Opt<t.NodeExtra> {
  // Property-less with an aliased binding covers every whole-value link: rests,
  // rest grains, and aliases.
  const isWholeAlias =
    binding.property === undefined && binding.aliasOf !== undefined;
  const curExpr = getKnownExprsAt(
    exprs,
    isWholeAlias ? binding.aliasOf! : binding,
  );

  if (isWholeAlias) {
    let result: Opt<t.NodeExtra> = curExpr.value;
    if (curExpr.known) {
      for (const key in curExpr.known) {
        if (!propertiesUtil.has(binding.excludeProperties, key)) {
          result = concat(result, curExpr.known[key].value);
        }
      }
    }
    return result;
  }

  return curExpr.value;
}

// The call site's known expressions at `binding`, passing through property-less
// links; past the properties it lists, only the value expression holding it.
function getKnownExprsAt(exprs: KnownExprs, binding: Binding): KnownExprs {
  const aliased = binding.aliasOf;
  if (!aliased) return exprs;
  const known = getKnownExprsAt(exprs, aliased);
  return binding.property === undefined || !known.known
    ? known
    : (known.known[binding.property] ?? { value: known.value });
}

export function applyReasonExprs(section: Section) {
  for (const slot of section.slots) {
    addReason(slot, getSourcesForExprs(slot.reasonExprs));
  }
}

export function mergeSlotReasons(section: Section) {
  section.reason = section.slots.reduce(mergeSlotReason, section.reason);
}

// A scope is written when any slot in it is.
function mergeSlotReason(sectionReason: Reason | undefined, slot: Slot) {
  return mergeSources(sectionReason, slot.reason);
}

// Each reason a node of the section resumes for, kept apart so each one's guard
// stays buildable.
export function getNodeReasons(section: Section) {
  return section.structure?.reduce<Reasons | undefined>(
    addNodeReason,
    undefined,
  );
}

function addNodeReason(reasons: Reasons | undefined, op: StructureOp) {
  const reason =
    typeof op === "object" &&
    op.kind === StructureKind.Node &&
    op.binding &&
    findSlot(op.binding)?.reason;
  return reason ? sourcesUtil.add(reasons, reason) : reasons;
}

// Moves when a slot's reason gains a source or a section gains a param reason
// group; both only grow, so a pass repeating until this holds settles.
let reasonsVersion = 0;
export function getReasonsVersion() {
  return reasonsVersion;
}

// Exists as the single point of assigning param reason groups: call sites
// map each group, so a new one moves the version too.
export function setParamReasonGroups(
  section: Section,
  groups: ParamReasonGroups,
) {
  reasonsVersion++;
  section.paramReasonGroups = groups;
}

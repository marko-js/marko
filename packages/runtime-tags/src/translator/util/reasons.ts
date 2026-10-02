import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { getPropertyPathAlias } from "./binding-has-prop";
import {
  type Binding,
  BindingType,
  bindingUtil,
  type InputBinding,
  type ReferencedBindings,
} from "./bindings";
import {
  concat,
  forEach,
  type Opt,
  Sorted,
  type SortedOneMany,
  reduce,
  some,
} from "./optional";
import {
  isReferencedExtra,
  type KnownExprs,
  mapParamBindingToExpr,
  getCanonicalExtra,
} from "./references";
import {
  forEachAncestorSection,
  type ParamReasonGroups,
  type Section,
} from "./sections";
import { getSectionSlot, type Slot, SlotKind } from "./slots";
import {
  compareSources,
  ALWAYS,
  mergeSources,
  type Sources,
  withSources,
} from "./sources";

// Reasons any one of which serializes (a chain's branches, a section's
// dom nodes); the guard builder answers for the set.
export type Reasons = SortedOneMany<Sources>;

export const sourcesUtil = new Sorted(compareSources);
// The `Sources` whose changes lead client code to read something after resume;
// an `always` one is unconditional but still says what it reads.
export type Reason = Sources;

export function isSameReason(a: Reason | undefined, b: Reason | undefined) {
  // Always reasons match whatever their sources: both guard as `1`.
  return (
    a === b ||
    (a && b ? (a.always && b.always) || compareSources(a, b) === 0 : false)
  );
}

// The one place translate reads a slot's reason, so what it writes follows
// a single rule.
export function getWriteReason(slot: Slot | undefined) {
  return slot?.reason;
}

export function addReason(slot: Slot, reason: undefined | false | Reason) {
  if (reason) {
    const curReason = slot.reason;
    const newReason = mergeReasons(curReason, reason);
    if (curReason !== newReason) {
      setSlotReason(slot, newReason);
    }
  }
}

export function addReasonExprs(slot: Slot, expr: Opt<t.NodeExtra>) {
  if (expr) {
    slot.reasonExprs = slot.reasonExprs ? concat(slot.reasonExprs, expr) : expr;
  }
}

export function addOwnerReason(
  from: Section,
  to: Section,
  reason: undefined | false | Reason,
) {
  if (reason) forEachAncestorSection(from, to, addOwnerSlotReason, reason);
}

function addOwnerSlotReason(section: Section, reason: Reason) {
  addReason(getSectionSlot(section, SlotKind.Owner), reason);
}

export function isConditionalReason(
  reason: undefined | Reason,
): reason is Sources & { state: undefined; always: undefined } {
  return !!reason && !reason.always && !reason.state;
}

// A reason whose serialize guard is statically truthy (`true` or backed by
// state), meaning whatever it gates is unconditionally emitted at runtime.
export function isUnconditionalReason(
  reason: undefined | Reason,
): reason is Reason {
  return !!reason && !isConditionalReason(reason);
}

// A reason backed by state sources. State only serializes when it can change
// client side, keeping its signal (and everything it renders) in the bundle.
export function isStateReason(reason: undefined | Reason): reason is Sources {
  return !!reason && !reason.always && !!reason.state;
}

// Whether anything in the section's scope serializes.
export function hasReason(section: Section | undefined) {
  return !!section && some(section.slots, hasSlotReason);
}

function hasSlotReason(slot: Slot) {
  return !!slot.reason;
}

export function getSourcesForExpr(expr: t.NodeExtra) {
  const root = getCanonicalExtra(expr);
  return isReferencedExtra(root)
    ? getSourcesForRef(root.referencedBindings)
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

export function getSourcesForRef(ref: ReferencedBindings) {
  return reduce(ref, mergeBindingSources);
}

// What reruns the call site expressions passing content to the bindings it
// feeds, down the property path it lands at.
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
            getPropertyPathAlias(binding, properties) as InputBinding,
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
// downstream program's params (`ownParams`), or every other program's,
// for a reason a downstream template recorded in its own terms.
export function mapParamReason(
  program: Section,
  reason: Sources,
  exprs: KnownExprs | undefined,
  ownParams: boolean,
): Reason | undefined {
  let params: Sources["param"];
  let mapped: Reason | undefined;
  let any = false;
  forEach(reason.param, (param) => {
    if ((param.section.program === program) === ownParams) {
      any = true;
      mapped = exprs
        ? mergeReasons(
            mapped,
            getSourcesForExprs(mapParamBindingToExpr(exprs, param)),
          )
        : ALWAYS;
    } else {
      params = bindingUtil.add(params, param) as Sources["param"];
    }
  });
  // Another template's state is nothing this one tracks, so it only forces.
  const foreignState = some(reason.state, isForeignBinding);
  if (!any && !foreignState) return reason;
  return mergeReasons(
    mergeReasons(
      mapped,
      withSources(
        reason,
        foreignState
          ? bindingUtil.filter(reason.state, isOwnBinding)
          : reason.state,
        any ? params : reason.param,
      ),
    ),
    foreignState ? ALWAYS : undefined,
  );
}

function isOwnBinding(binding: Binding) {
  return binding.section.program === getProgram().node.extra.section;
}

function isForeignBinding(binding: Binding) {
  return !isOwnBinding(binding);
}

export function mergeReasons(a: Reason, b: undefined | Reason): Reason;

export function mergeReasons(a: undefined | Reason, b: Reason): Reason;

export function mergeReasons(
  a: undefined | Reason,
  b: undefined | Reason,
): Reason | undefined;

export function mergeReasons(
  a: undefined | Reason,
  b: undefined | Reason,
): Reason | undefined {
  return mergeSources(a, b);
}

// Whether a reason revives the scope from its own template (state, or always):
// a param-only one revives through a parent whose client work bundles it.
export function isOwnResumeReason(reason: Reason | undefined) {
  return !!reason && !!(reason.state || reason.always);
}

export function applyReasonExprs(section: Section) {
  forEach(section.slots, applySlotExprs);
}

function applySlotExprs(slot: Slot) {
  addReason(slot, getSourcesForExprs(slot.reasonExprs));
}

export function finalizeReason(section: Section) {
  section.reason = reduce(section.slots, mergeSlotReason, section.reason);
}

// A scope is written when any slot in it is.
function mergeSlotReason(sectionReason: Reason | undefined, slot: Slot) {
  return mergeSources(sectionReason, slot.reason);
}

// Each reason a node of the section resumes for, kept apart so each one's guard
// stays buildable.
export function getNodeReasons(section: Section) {
  return reduce(section.slots, addNodeReason, undefined);
}

function addNodeReason(reasons: Reasons | undefined, slot: Slot) {
  return slot.reason &&
    slot.kind === SlotKind.Value &&
    slot.owner.type === BindingType.dom
    ? sourcesUtil.add(reasons, slot.reason)
    : reasons;
}

// Moves when a slot's reason gains a source or a section gains a param reason
// group; both only grow, so a pass repeating until this holds settles.
let reasonsVersion = 0;
export function getReasonsVersion() {
  return reasonsVersion;
}

// Exists as the single point of assigning slot reasons to aid in debugging.
function setSlotReason(slot: Slot, reason: Reason) {
  if (!isSameSources(slot.reason, reason)) reasonsVersion++;
  slot.reason = reason;
}

// Exists as the single point of assigning param reason groups: call sites feed
// each group a reason, so a new one moves the version too.
export function setParamReasonGroups(
  section: Section,
  groups: ParamReasonGroups,
) {
  reasonsVersion++;
  section.paramReasonGroups = groups;
}

// Merges rebuild equal sources, so only a change in them counts.
function isSameSources(a: Reason | undefined, b: Reason) {
  return !!a && compareSources(a, b) === 0;
}

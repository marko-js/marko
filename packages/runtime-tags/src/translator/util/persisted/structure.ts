// Analyze-side structure facts for persisted pages, in template terms;
// ownership conclusions and wire channels belong to translate (./delivery).
import type { types as t } from "@marko/compiler";

import { isPersisted } from "../marko-config";
import { every, forEach, type Opt, some } from "../optional";
import type { Binding, Sources } from "../references";
import { ensureReasonGroups, type Section } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { isPatchFillBinding, paramsDeliverAsFills } from "./delivery";
import { onFinalizePersisted } from "./lifecycle";

// Whether the section renders inside state-selected structure
// (inclusive): patch renders skip those bodies, so nothing inside may
// rely on a patch write.
export function inStateSelectedStructure(section: Section | undefined) {
  while (section) {
    if (isStateSelected(section)) return true;
    section = section.parent;
  }
  return false;
}

// A branch body selected by a state reason (or nested in one) whose param
// feeds all deliver; resolved sources are required, so call at finalize or later.
const stateSelectedBySection = new WeakMap<Section, boolean>();
export function isStateSelected(section: Section): boolean {
  let stateSelected = stateSelectedBySection.get(section);
  if (stateSelected === undefined) {
    const expr =
      isPersisted() && section.isBranch
        ? section.upstreamExpression
        : undefined;
    const sources = expr && getSerializeSourcesForExpr(expr);
    stateSelectedBySection.set(
      section,
      (stateSelected =
        !!expr &&
        !sources?.global &&
        (!!sources?.state || inStateSelectedStructure(section.parent)) &&
        every(expr.referencedBindings, selectionFeedDelivers)),
    );
  }
  return stateSelected;
}

// A state-mixed ref recomputes client-side, so its param ORIGINS must fill;
// a pure-param ref ships its own computed value.
function selectionFeedDelivers(binding: Binding) {
  const sources = getSerializeSourcesForRef(binding);
  return (
    !sources?.param ||
    (sources.state
      ? paramsDeliverAsFills(sources.param)
      : isPatchFillBinding(binding)) ||
    inStateSelectedStructure(binding.section)
  );
}

// Structure selection and `$global` mixing both record here: neither
// read lets the value leave through an expression channel.
export function recordStructuralOrGlobalParams(sources: Sources | undefined) {
  forEach(sources?.param, (binding) => {
    if (!binding.section.parent) binding.structuralOrGlobalParam = true;
  });
}

export function hasStructuralOrGlobalParam(params: Opt<Binding>) {
  return some(params, (binding) => binding.structuralOrGlobalParam);
}

// Shared per-patch-write analyze hook: freezes the value's reason groups
// translate-time ownership gates and records `$global`-mixed params.
export function ensurePersistedWriteGroups(getExtra: () => t.NodeExtra) {
  onFinalizePersisted(() => {
    const sources = getSerializeSourcesForExpr(getExtra());
    ensureReasonGroups(sources);
    // A `$global` mixed into a param-fed value cannot survive a withheld
    // patch write: call sites derive ownership requirements from the fact.
    if (sources?.param && sources.global) {
      recordStructuralOrGlobalParams(sources);
    }
  });
}

// Sections whose text/attr holes emit direct patch writes: the root and
// any branch body reachable through branches alone — the walk pairs (or
// constructs) every level structurally, so depth does not matter.
export function isBranchPathSection(section: Section) {
  while (section.parent) {
    if (!section.isBranch && !section.isBoundary) return false;
    section = section.parent;
  }
  return true;
}

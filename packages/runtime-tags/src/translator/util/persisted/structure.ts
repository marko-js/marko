// Analyze-side structure facts for persisted pages: what the template
// does (sources, structural/global param uses, branch paths, and whether
// a branch body is client-reselectable). Ownership conclusions and wire
// channels belong to translate (see ./delivery).
import type { types as t } from "@marko/compiler";

import { every, forEach, type Opt, some } from "../optional";
import type { Binding, Sources } from "../references";
import { ensureReasonGroups, type Section } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { isPatchFillBinding, paramsDeliverAsFills } from "./delivery";
import { onFinalizePersisted } from "./lifecycle";

// Whether the section renders inside client-reselectable structure
// (inclusive): patch renders skip those bodies, so nothing inside may
// rely on a patch write.
export function inClientReselectableStructure(section: Section | undefined) {
  while (section) {
    if (section.isClientReselectable) return true;
    section = section.parent;
  }
  return false;
}

// Client-evaluable sources classify structure client-reselectable; nesting
// in reselectable structure inherits the classification (its bodies
// already bundle). Delivery is judged per READ binding (a root derived
// ships its computed value), mirroring the expression matrix inside
// reselectable structure.
export function classifiesClientReselectable(
  sources: Sources | undefined,
  section: Section,
  refs: Opt<Binding>,
) {
  return (
    (!!sources?.state || inClientReselectableStructure(section)) &&
    !sources?.global &&
    every(refs, (binding) => {
      const refSources = getSerializeSourcesForRef(binding);
      // A state-mixed ref recomputes client-side, so its param ORIGINS
      // must fill; a pure-param ref ships its own computed value.
      return (
        !refSources?.param ||
        (refSources.state
          ? paramsDeliverAsFills(refSources.param)
          : isPatchFillBinding(binding)) ||
        inClientReselectableStructure(binding.section)
      );
    })
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

// Analyze-side structure facts for persisted pages, in template terms;
// ownership conclusions and wire channels belong to translate (./delivery).
import type { types as t } from "@marko/compiler";

import { kDirectContent } from "../binding-prop-tree";
import { isBranchSelector } from "../branch-tag";
import { isPersisted } from "../marko-config";
import { every, forEach, some, toArray } from "../optional";
import type { Binding, Sources } from "../references";
import { ensureReasonGroups, type Section } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { isPatchFillBinding, paramsDeliverAsFills } from "./delivery";
import { onFinalizePersisted } from "./lifecycle";

// A boundary branch live on every persisted page (serialized on every page
// render, nothing on the chain diverges), so it pairs without a construct.
export function boundaryAlwaysPairs(bodySection: Section) {
  if (!bodySection.serializeReason) return false;
  for (let s: Section | undefined = bodySection; s; s = s.parent) {
    if (s.isBranch || s.boundaryContent) return false;
    // A content section can materialize at any site (or none), so nothing
    // below it is provably live and unique on every page.
    if (s !== bodySection && !s.isBoundary && s.parent) return false;
  }
  return true;
}

// Whether the section renders inside stateful structure (inclusive), whose
// bodies patch renders skip.
export function inStatefulBranch(section: Section | undefined) {
  while (section) {
    if (isStatefulBranch(section)) return true;
    section = section.parent;
  }
  return false;
}

// Whether a child renders this prop (any prop, unnamed) inside stateful
// structure; a child still mid-analysis (a cycle) counts as yes.
export function childRendersStateful(
  childExtra: t.ProgramExtra | undefined,
  prop?: string,
) {
  const params = childExtra?.domExports?.params;
  const input = params?.props?.[0]?.binding;
  if (!input) {
    const paramsBinding = (childExtra as t.NodeExtra | undefined)?.binding;
    return !params && !!paramsBinding && !paramsBinding.pruned;
  }
  return prop === undefined
    ? rendersStateful(input)
    : rendersStatefulProp(input, prop);
}

// A binding (or a property of it) rendered as a tag inside stateful
// structure, here or by the child binding a read feeds.
const rendering = new Set<Binding>();
function rendersStateful(binding: Binding): boolean {
  if (rendering.has(binding)) return false;
  rendering.add(binding);
  try {
    if (readsRenderStateful(binding)) return true;
    for (const alias of binding.propertyAliases.values()) {
      if (rendersStateful(alias)) return true;
    }
    for (const alias of binding.aliases) {
      if (rendersStateful(alias)) return true;
    }
    return false;
  } finally {
    rendering.delete(binding);
  }
}
function rendersStatefulProp(binding: Binding, prop: string) {
  // A whole read (`...input` onward) may hand any prop over.
  if (readsRenderStateful(binding)) return true;
  const alias = binding.propertyAliases.get(prop);
  return !!alias && rendersStateful(alias);
}
// A read inside stateful structure renders there (directly, or by the
// child it feeds); elsewhere only the child's own structure decides.
function readsRenderStateful(binding: Binding) {
  for (const read of binding.reads) {
    if (
      (read[kDirectContent] || read.downstream) &&
      inStatefulBranch(read.section)
    ) {
      return true;
    }
    if (some(read.downstream, rendersStateful)) return true;
  }
  return false;
}
// A tag body is stateful when the prop it feeds renders so in the child;
// the last hop stays a prop query so whole reads of its owner count.
function bodyRendersStateful(section: Section) {
  const downstream = section.downstreamBinding;
  if (!downstream) return false;
  const props = toArray(downstream.properties, (prop) => prop);
  let target: Binding | undefined = downstream.binding;
  for (let i = 0; target && i < props.length - 1; i++) {
    target = target.propertyAliases.get(props[i]);
  }
  return !!target && rendersStatefulProp(target, props[props.length - 1]);
}

// A branch body selected by a state reason (or nested in one) whose param
// feeds all deliver; resolved sources are required, so call at finalize or later.
const statefulBySection = new WeakMap<Section, boolean>();
const computing = new Map<Section, number>();
let provisionalAt = Infinity;
export function isStatefulBranch(section: Section): boolean {
  let stateful = statefulBySection.get(section);
  if (stateful === undefined) {
    // An in-flight re-ask (a read inside the branch its own selection walks)
    // answers false: statefulness needs a grounded source, never itself.
    const at = computing.get(section);
    if (at !== undefined) {
      if (at < provisionalAt) provisionalAt = at;
      return false;
    }
    const frame = computing.size;
    computing.set(section, frame);
    const outerProvisionalAt = provisionalAt;
    provisionalAt = Infinity;
    const expr =
      isPersisted() && section.isBranch
        ? section.upstreamExpression
        : undefined;
    const sources = expr && getSerializeSourcesForExpr(expr);
    stateful =
      (!expr && bodyRendersStateful(section)) ||
      (!!expr &&
        (!!sources?.state || inStatefulBranch(section.parent)) &&
        every(expr.referencedBindings, selectionFeedDelivers));
    computing.delete(section);
    // A frame that consumed an OUTER frame's provisional answer must not
    // cache: that outer result may still land stateful.
    if (provisionalAt >= frame) {
      statefulBySection.set(section, stateful);
      provisionalAt = outerProvisionalAt;
    } else if (outerProvisionalAt < provisionalAt) {
      provisionalAt = outerProvisionalAt;
    }
  }
  return stateful;
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
    inStatefulBranch(binding.section)
  );
}

// A param read only as branch selectors: its value never joins a client
// derivation, so pairing delivers it and no fill is needed.
export function readsOnlySelect(binding: Binding) {
  for (const read of binding.reads) {
    if (!isBranchSelector(read)) return false;
  }
  return true;
}

// Selected by params alone: a call site feeding them from state hands the
// branch to the client at run time. Call at finalize or later.
export function getParamSelectorSources(section: Section) {
  if (
    !isPersisted() ||
    !section.isBranch ||
    !isBranchPathSection(section) ||
    isStatefulBranch(section)
  ) {
    return;
  }
  const sources =
    section.upstreamExpression &&
    getSerializeSourcesForExpr(section.upstreamExpression);
  return sources?.param && !sources.state ? sources : undefined;
}

// The selector sources of every param-selected branch around the section
// (inclusive), or undefined when none.
export function getParamSelectorChain(section: Section | undefined) {
  let chain: Sources[] | undefined;
  for (; section; section = section.parent) {
    const sources = getParamSelectorSources(section);
    if (sources) (chain ??= []).push(sources);
  }
  return chain;
}

// Structure selection and `$global` mixing record here; a branch/loop
// selector's root params select structure.
export function recordStructuralParams(sources: Sources | undefined) {
  forEach(sources?.param, (binding) => {
    if (!binding.section.parent) binding.selectsStructure = true;
  });
}

// Shared per-patch-write analyze hook: freezes the value's reason groups
// for translate-time ownership gates.
export function ensurePersistedWriteGroups(getExtra: () => t.NodeExtra) {
  onFinalizePersisted(() => {
    ensureReasonGroups(getSerializeSourcesForExpr(getExtra()));
  });
}

// Sections whose holes patch-write directly: every level down to them links
// structurally, except boundary content, which renders outside the patch.
export function isBranchPathSection(section: Section) {
  while (section.parent) {
    if (section.boundaryContent) return false;
    section = section.parent;
  }
  return true;
}

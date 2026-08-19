// Analyze-side structure facts for persisted pages, in template terms;
// ownership conclusions and wire channels belong to translate (./delivery).
import type { types as t } from "@marko/compiler";

import { kDirectContent } from "../binding-prop-tree";
import { isPersisted } from "../marko-config";
import { every, forEach, type Opt, some, toArray } from "../optional";
import type { Binding, Sources } from "../references";
import { ensureReasonGroups, type Section } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { isPatchFillBinding, paramsDeliverAsFills } from "./delivery";
import { onFinalizePersisted } from "./lifecycle";

// Whether the section renders inside stateful structure
// (inclusive): patch renders skip those bodies, so nothing inside may
// rely on a patch write.
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
        !sources?.global &&
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

// Sections whose holes patch-write directly: every level down to them links
// structurally, except boundary content, which renders outside the patch.
export function isBranchPathSection(section: Section) {
  while (section.parent) {
    if (section.boundaryContent) return false;
    section = section.parent;
  }
  return true;
}

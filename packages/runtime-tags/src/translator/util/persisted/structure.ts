// Analyze-side structure facts for persisted pages, in template terms;
// ownership conclusions and wire channels belong to translate (./refresh).
import type { types as t } from "@marko/compiler";

import { kDirectContent } from "../binding-prop-tree";
import { isPersisted } from "../marko-config";
import { every, forEach, type Opt, some, toArray } from "../optional";
import type { Binding, ReferencedExtra, Sources } from "../references";
import {
  ensureReasonGroups,
  getChildSections,
  type Section,
} from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { onFinalizePersisted } from "./lifecycle";
import { isPatchFillBinding } from "./refresh";

// A boundary branch live on every persisted page (serialized on every page
// render, nothing on the chain diverges), so it pairs without creating.
export function boundaryAlwaysPairs(bodySection: Section) {
  if (!bodySection.serializeReason) return false;
  for (let s: Section | undefined = bodySection; s; s = s.parent) {
    if (s.isBranch || s.boundaryContent) return false;
    // A content section can materialize at any consumer (or none), so nothing
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

// The one walk over a content body's consumers (the binding it feeds
// through its property path, aliases, bindings its reads hand it to).
export function someContentRead(
  binding: Binding,
  properties: Opt<string>,
  leaf: (read: ReferencedExtra) => boolean,
) {
  const props = toArray(properties, (prop: string) => prop);
  let target: Binding | undefined = binding;
  for (let i = 0; target && i < props.length; i++) {
    if (someRead(target, leaf, new Set())) return true;
    target = target.propertyAliases.get(props[i]);
  }
  return !!target && someBindingRead(target, leaf);
}
export function someBindingRead(
  binding: Binding,
  leaf: (read: ReferencedExtra) => boolean,
  visiting = new Set<Binding>(),
): boolean {
  if (visiting.has(binding)) return false;
  visiting.add(binding);
  try {
    if (someRead(binding, leaf, visiting)) return true;
    for (const alias of binding.propertyAliases.values()) {
      if (someBindingRead(alias, leaf, visiting)) return true;
    }
    for (const alias of binding.aliases) {
      if (someBindingRead(alias, leaf, visiting)) return true;
    }
    return false;
  } finally {
    visiting.delete(binding);
  }
}
function someRead(
  binding: Binding,
  leaf: (read: ReferencedExtra) => boolean,
  visiting: Set<Binding>,
) {
  for (const read of binding.reads) {
    if (leaf(read)) return true;
    if (
      some(read.downstream, (downstream) =>
        someBindingRead(downstream, leaf, visiting),
      )
    ) {
      return true;
    }
  }
  return false;
}

// A read inside stateful structure renders the content there (directly, or
// by the child it is upstream of).
function isStatefulLeaf(read: ReferencedExtra) {
  return (
    !!(read[kDirectContent] || read.downstream) &&
    inStatefulBranch(read.section)
  );
}
function rendersStateful(binding: Binding) {
  return someBindingRead(binding, isStatefulLeaf);
}
function rendersStatefulProp(binding: Binding, prop: string) {
  return someContentRead(binding, prop, isStatefulLeaf);
}
// A tag body is stateful when the prop it is upstream of renders so in the
// child; the last hop stays a prop query so whole reads of its owner count.
function bodyRendersStateful(section: Section) {
  const downstream = section.downstream;
  return (
    !!downstream?.binding &&
    someContentRead(downstream.binding, downstream.properties, isStatefulLeaf)
  );
}

// A branch body whose upstream has a state reason (or nested in one) and
// whose param sources a patch fills; needs resolved sources (finalize or later).
const statefulBySection = new WeakMap<Section, boolean>();
const computing = new Map<Section, number>();
let provisionalAt = Infinity;
export function isStatefulBranch(section: Section): boolean {
  let stateful = statefulBySection.get(section);
  if (stateful === undefined) {
    // An in-flight re-ask (a read inside the branch its own upstream walk hits)
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
    // The walk state outlives a compile (a diagnostic may throw mid-walk),
    // so every exit restores it.
    try {
      // A branch body or a dynamic tag body; a boundary body has no upstream
      // of its own (its value settles, it never re-selects).
      const expr =
        isPersisted() && !section.isBoundary
          ? section.upstreamExpression
          : undefined;
      const sources = expr && getSerializeSourcesForExpr(expr);
      // A body the child renders stateful (any consumer), or one whose own
      // upstream selects it from state.
      stateful =
        bodyRendersStateful(section) ||
        (!!expr &&
          (!!sources?.state || inStatefulBranch(section.parent)) &&
          every(expr.referencedBindings, upstreamSourcesFill));
      // A frame that consumed an OUTER frame's provisional answer must not
      // cache: that outer result may still land stateful.
      if (provisionalAt >= frame) statefulBySection.set(section, stateful);
    } finally {
      computing.delete(section);
      if (provisionalAt >= frame || outerProvisionalAt < provisionalAt) {
        provisionalAt = outerProvisionalAt;
      }
    }
  }
  return stateful;
}

// The client recomputes a state-mixed ref from what it holds: its state, a
// fill, or a derivation it can recompute the same way.
function upstreamSourcesFill(binding: Binding): boolean {
  const sources = getSerializeSourcesForRef(binding);
  return (
    !sources?.param ||
    isPatchFillBinding(binding) ||
    inStatefulBranch(binding.section) ||
    (binding.upstreamAlias
      ? upstreamSourcesFill(binding.upstreamAlias)
      : !!binding.upstreams && every(binding.upstreams, upstreamSourcesFill))
  );
}

// Read as a value: anywhere but as the upstream of a branch in the read's
// section, or passed to a child param that is. Call at finalize or later.
export function isReadAsValue(
  binding: Binding,
  seen = new Set<Binding>(),
): boolean {
  if (seen.has(binding)) return false;
  seen.add(binding);
  for (const read of binding.reads) {
    if (
      !getChildSections(read.section).some(
        (child) => child.isBranch && child.upstreamExpression === read,
      ) &&
      (read.referencedBindings !== binding ||
        !read.downstream ||
        some(read.downstream, (downstream) => isReadAsValue(downstream, seen)))
    ) {
      return true;
    }
  }
  return false;
}

// Params alone upstream: a call site with state upstream of them hands the
// branch to the client at run time. Call at finalize or later.
export function getParamUpstreamSources(section: Section) {
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
export function getParamUpstreamChain(section: Section | undefined) {
  let chain: Sources[] | undefined;
  for (; section; section = section.parent) {
    const sources = getParamUpstreamSources(section);
    if (sources) (chain ??= []).push(sources);
  }
  return chain;
}

// Structure upstream and `$global` mixing record here: a branch/loop
// upstream's root params sit upstream of structure.
export function recordStructuralParams(sources: Sources | undefined) {
  forEach(sources?.param, (binding) => {
    if (!binding.section.parent) binding.upstreamOfStructure = true;
  });
}

// Shared per-patch-write analyze hook: freezes the value's reason groups
// for translate-time ownership gates.
export function ensurePersistedWriteGroups(getExtra: () => t.NodeExtra) {
  onFinalizePersisted(() => {
    ensureReasonGroups(getSerializeSourcesForExpr(getExtra()));
  });
}

// Structure resumed code renders on its own: boundary content, or a
// stateful branch's body (patch renders skip both).
export function inResumedStructure(section: Section) {
  return !isBranchPathSection(section) || inStatefulBranch(section);
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

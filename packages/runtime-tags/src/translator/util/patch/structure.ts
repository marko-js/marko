// Analyze-side structure facts for patches, in template terms;
// ownership conclusions and wire channels belong to translate (./refresh).
import type { types as t } from "@marko/compiler";

import { kDirectContent } from "../binding-prop-tree";
import { createCyclicMemo } from "../cyclic-memo";
import { isPatch } from "../marko-config";
import { every, forEach, type Opt, some, toArray } from "../optional";
import type { Binding, ReferencedExtra, Sources } from "../references";
import {
  ensureReasonGroups,
  getChildSectionOf,
  type Section,
} from "../sections";
import {
  getSerializeSourcesForDownstream,
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { onFinalizePatch } from "./lifecycle";
import { isPatchFillBinding } from "./refresh";

// A boundary branch live on every patch page (serialized on every page
// render, nothing on the chain diverges), so it pairs without creating; the
// server drops the elision at render time where a catch or branch encloses.
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

// A patch render reaches the section: the page patches, and no stateful
// structure (which resumed code re-renders) encloses it.
export function isPatchRendered(section: Section) {
  return isPatch() && !inStatefulBranch(section);
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

// The one walk over a content body's consumers (the binding it feeds
// through its property path, aliases, bindings its reads hand it to).
export function someContentRead(
  bindings: Opt<Binding>,
  properties: Opt<string>,
  leaf: (read: ReferencedExtra) => boolean,
) {
  const props = toArray(properties, (prop: string) => prop);
  return some(bindings, (binding) => {
    let target: Binding | undefined = binding;
    for (let i = 0; target && i < props.length; i++) {
      if (someRead(target, leaf, new Set())) return true;
      target = target.propertyAliases.get(props[i]);
    }
    return !!target && someBindingRead(target, leaf);
  });
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
export const isStatefulBranch = createCyclicMemo((section: Section) => {
  // A branch body or a dynamic tag body; a boundary body has no upstream
  // of its own (its value settles, it never re-selects).
  const expr =
    isPatch() && !section.isBoundary ? section.upstreamExpression : undefined;
  const sources = expr && getSerializeSourcesForExpr(expr);
  // A body the child renders stateful (any consumer), or one whose own
  // upstream selects it from state.
  return (
    bodyRendersStateful(section) ||
    (!!expr &&
      (!!sources?.state || inStatefulBranch(section.parent)) &&
      every(expr.referencedBindings, upstreamSourcesFill))
  );
}, false);

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
export const isReadAsValue = createCyclicMemo((binding: Binding) => {
  for (const read of binding.reads) {
    if (
      !getChildSectionOf(read)?.isBranch &&
      (read.referencedBindings !== binding ||
        !read.downstream ||
        some(read.downstream, isReadAsValue))
    ) {
      return true;
    }
  }
  return false;
}, false);

// Params alone upstream: a call site with state upstream of them hands the
// branch to the client at run time. Call at finalize or later.
export function getParamUpstreamSources(section: Section) {
  if (
    !isPatch() ||
    !isBranchPathSection(section) ||
    isStatefulBranch(section)
  ) {
    return;
  }
  const sources = getRebuildSources(section);
  return sources?.param && !sources.state ? sources : undefined;
}

// What makes the section anew on the client: a branch's upstream, or the call
// site expression passing content (an attribute tag item of a param loop).
function getRebuildSources(section: Section) {
  if (section.isBranch) {
    return (
      section.upstreamExpression &&
      getSerializeSourcesForExpr(section.upstreamExpression)
    );
  }
  if (!section.isBoundary && section.downstream) {
    return getSerializeSourcesForDownstream(section.downstream);
  }
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
export function ensurePatchWriteGroups(getExtra: () => t.NodeExtra) {
  onFinalizePatch(() => {
    ensureReasonGroups(getSerializeSourcesForExpr(getExtra()));
  });
}

// Structure resumed code renders on its own: boundary content, or a
// stateful branch's body (patch renders skip both).
export function inResumedStructure(section: Section) {
  return !isBranchPathSection(section) || inStatefulBranch(section);
}

// Whether a patch writes the section's holes directly. Finalize or later:
// `isStatefulBranch` memoizes, so an earlier call would cache a wrong answer.
export function writesPatchIn(section: Section) {
  return isPatch() && !inResumedStructure(section);
}

// Whether every section from `section` up to (exclusive) `owner` is a
// branch: only those chains compose per-hop closure builders.
export function isBranchSectionChain(section: Section, owner: Section) {
  for (
    let cur: Section | undefined = section;
    cur && cur !== owner;
    cur = cur.parent
  ) {
    if (!cur.isBranch) return false;
  }
  return true;
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

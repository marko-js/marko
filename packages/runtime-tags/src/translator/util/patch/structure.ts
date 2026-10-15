// Analyze-side structure facts for patches, in template terms; ownership
// conclusions and wire channels belong to ./decisions, ./refresh, ./writers.
import { type Binding, bindingUtil } from "../bindings";
import { createCyclicMemo } from "../cyclic-memo";
import { isPatch } from "../marko-config";
import { at, every, first, type Opt, size, some } from "../optional";
import {
  addStructuralParams,
  getSourcesForDerived,
  getSourcesForExpr,
  getSourcesForRef,
} from "../reasons";
import {
  getBindingsDerivedFrom,
  getReferencedBindings,
  type ReferencedExtra,
} from "../references";
import {
  getCallerParamGroups,
  type Section,
  StructureKind,
  type ParamReasonGroup,
} from "../sections";
import type { Sources } from "../sources";
import { createSectionState } from "../state";
import { isPatchFillBinding } from "./refresh";

// A patch render reaches the section: the page patches, and no stateful
// structure (which resumed code re-renders) encloses it.
export function isPatchRendered(section: Section) {
  return isPatch() && !inStatefulBranch(section);
}

// Whether a patch may reach the section: no branch on its chain is stateful.
// A content body counts not, since another consumer may render it patched.
export function mayPatchReach(section: Section | undefined) {
  for (let cur = section; cur; cur = cur.parent) {
    if (!cur.derives && isStatefulBranch(cur)) return false;
  }
  return true;
}

// Whether the section renders inside stateful structure (inclusive), whose
// bodies patch renders skip.
export function inStatefulBranch(section: Section | undefined) {
  for (let cur = section; cur; cur = cur.parent) {
    if (isStatefulBranch(cur)) return true;
  }
  return false;
}

// The one walk over a content body's consumers (the binding it derives
// through its property path, aliases, bindings its reads hand it to).
export function someContentRead(
  bindings: Opt<Binding>,
  properties: Opt<string>,
  leaf: (read: ReferencedExtra) => boolean,
) {
  const seen = new Set<Binding>();
  const depth = size(properties);
  return some(bindings, (binding) => {
    let target: Binding | undefined = binding;
    for (let i = 0; target && i < depth; i++) {
      if (someRead(target, leaf, seen)) return true;
      target = target.propertyAliases.get(at(properties, i)!);
    }
    return !!target && someBindingRead(target, leaf, seen);
  });
}
// `seen` keeps every binding walked: `leaf` reads no path, so one that held
// no match never will, and a cycle stops where it started.
function someBindingRead(
  binding: Binding,
  leaf: (read: ReferencedExtra) => boolean,
  seen = new Set<Binding>(),
): boolean {
  if (seen.has(binding)) return false;
  seen.add(binding);
  if (someRead(binding, leaf, seen)) return true;
  for (const alias of binding.propertyAliases.values()) {
    if (someBindingRead(alias, leaf, seen)) return true;
  }
  for (const alias of binding.aliases) {
    if (someBindingRead(alias, leaf, seen)) return true;
  }
  return false;
}
function someRead(
  binding: Binding,
  leaf: (read: ReferencedExtra) => boolean,
  seen: Set<Binding>,
) {
  for (const read of binding.reads.keys()) {
    if (
      leaf(read) ||
      some(read.derives, (derived) => someBindingRead(derived, leaf, seen))
    ) {
      return true;
    }
  }
  return false;
}

// Content read inside stateful structure renders there; a tag rendering it
// with client state re-renders it on the client wherever it sits.
function isStatefulLeaf(read: ReferencedExtra) {
  const rendersContent = read.rendersContent || read.nameOnly;
  return (
    !!(rendersContent || read.derives) &&
    (inStatefulBranch(read.section) ||
      (!!read.rendersContent && !!getSourcesForExpr(read)?.state))
  );
}
// A tag body is stateful when the prop it derives renders so in the
// child; the last hop stays a prop query so whole reads of its owner count.
function bodyRendersStateful(section: Section) {
  const { derives } = section;
  return (
    !!derives &&
    someContentRead(derives.binding, derives.properties, isStatefulLeaf)
  );
}

// A branch body whose branch expression has a state reason (or nested in one) and
// whose param sources a patch fills; needs resolved sources (finalize or later).
export const isStatefulBranch = createCyclicMemo((section: Section) => {
  // An optional branch or a dynamic tag body; an `<await>`/`<try>` body
  // renders for every value its branch expression takes.
  const expr =
    isPatch() && section.branch?.optional !== false
      ? section.branchExpr
      : undefined;
  const sources = expr && getSourcesForExpr(expr);
  // A body the child renders stateful (any consumer), or one whose own
  // branch expression derives from state.
  return (
    bodyRendersStateful(section) ||
    (!!expr &&
      (!!sources?.state || inStatefulBranch(section.parent)) &&
      every(getReferencedBindings(expr), clientRecomputes))
  );
}, false);

// The client recomputes a state-mixed ref from what it holds: its state, a
// fill, or a derivation it can recompute the same way.
function clientRecomputes(binding: Binding): boolean {
  const sources = getSourcesForRef(binding);
  if (!sources?.param) return true;
  if (isPatchFillBinding(binding) || inStatefulBranch(binding.section)) {
    return true;
  }
  const inputs = getBindingsDerivedFrom(binding);
  return !!inputs && every(inputs, clientRecomputes);
}

// Rebuild sources that are params alone: a call site passing state for them
// hands the branch to the client at run time. Call at finalize or later.
export function getParamRebuildSources(section: Section) {
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

// What makes the section anew on the client: a branch's expression, or the call
// site expression passing content (an attribute tag item of a param loop).
function getRebuildSources(section: Section) {
  if (section.branch?.optional) {
    return section.branchExpr && getSourcesForExpr(section.branchExpr);
  }
  if (!section.branch && section.derives) {
    return getSourcesForDerived(section.derives);
  }
}

// The param rebuild sources of every branch around the section (inclusive),
// or undefined when none.
export function getParamRebuildChain(section: Section | undefined) {
  let chain: Sources[] | undefined;
  for (let cur = section; cur; cur = cur.parent) {
    const sources = getParamRebuildSources(cur);
    if (sources) (chain ??= []).push(sources);
  }
  return chain;
}

// The params a branch or loop expression derives from are structural where
// a caller passes them: a template's, or a `<define>` body's.
export function recordStructuralParams(sources: Sources | undefined) {
  for (const [section, group] of getCallerParamGroups(sources?.param)) {
    addStructuralParams(section, group);
  }
}

// Whether a param reason group (one section's params) holds a structural one.
export function hasStructuralParam(group: ParamReasonGroup) {
  return bindingUtil.intersects(group, first(group).section.structuralParams);
}

// Structure resumed code renders on its own, which patch renders skip: boundary
// content, a stateful branch's body, or a `@catch` reading none of its error.
export function inResumedStructure(section: Section) {
  return (
    !isBranchPathSection(section) ||
    inStatefulBranch(section) ||
    inUnreadCatch(section)
  );
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
    if (!cur.branch?.optional) return false;
  }
  return true;
}

// Sections whose holes patch-write directly: every level down to them links
// structurally, except a `@placeholder` (rendered outside the patch) and dropped content.
export function isBranchPathSection(section: Section) {
  for (let cur = section; cur.parent; cur = cur.parent) {
    if (cur.boundaryContent === "placeholder" || cur.dropped) return false;
  }
  return true;
}

// A `@catch` (inclusive) reading none of its error: the client renders it from
// its renderer and closures, as from any throw. Finalize or later.
export function inUnreadCatch(section: Section) {
  for (let cur: Section | undefined = section; cur; cur = cur.parent) {
    if (cur.boundaryContent === "catch" && (!cur.params || cur.params.pruned)) {
      return true;
    }
  }
  return false;
}

// Whether a patch renders the branches or loop rows at the node: it writes
// the node's section, and none is stateful (a chain with one is the client's).
export function patchesBranchesAt(binding: Binding) {
  return writesPatchIn(binding.section) && !hasStatefulBranchAt(binding);
}

export function hasStatefulBranchAt(binding: Binding) {
  for (const child of binding.section.children) {
    if (child.branch?.nodeBinding === binding && isStatefulBranch(child)) {
      return true;
    }
  }
  return false;
}

// A known child renders at the node, which holds the child's scope.
export function isKnownChildNode(binding: Binding) {
  return getKnownChildNodes(binding.section).has(binding);
}

const [getKnownChildNodes] = createSectionState(
  "knownChildNodes",
  (section) => {
    const nodes = new Set<Binding>();
    for (const op of section.structure || []) {
      if (typeof op === "object" && op.kind === StructureKind.Child) {
        nodes.add(op.binding);
      }
    }
    return nodes;
  },
);

// The child section a read is the branch expression of, if any.
export function getBranchOf(read: ReferencedExtra) {
  return read.section.children.find((child) => child.branchExpr === read);
}

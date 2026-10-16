// Analyze-side structure facts for patches, in template terms; ownership
// conclusions and wire channels belong to ./decisions, ./refresh, ./writers.
import { type Binding, bindingUtil } from "../bindings";
import { createProgramCyclicMemo } from "../cyclic-memo";
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
  isKnownChild,
  type Section,
  StructureKind,
  type ParamReasonGroup,
} from "../sections";
import type { Sources } from "../sources";
import { createSectionState } from "../state";
import { canPatchFill } from "./refresh";

// Every render of the section is patch-written: on the branch path, outside
// stateful structure. Finalize or later, as `isStatefulBranch` memoizes.
export function patchWrites(section: Section) {
  return (
    isPatch() && section.enclosing.branchPath && !inStatefulBranch(section)
  );
}

// Some render of the section may be patch-written: no branch on its chain is
// stateful, but content, which another consumer may render patched.
export const [patchMayWrite] = createProgramCyclicMemo(
  (section: Section): boolean =>
    (!section.parent || patchMayWrite(section.parent)) &&
    (!isStatefulBranch(section) || !!section.derives),
  false,
);

// A scope a flush writes into: a known child, a branch or boundary body, a
// `@catch` or attribute tag `<for>` content, where every render is patch-written.
export function patchWritesScope(section: Section) {
  return (
    patchWrites(section) &&
    (isKnownChild(section) ||
      !!section.branch ||
      section.boundaryContent === "catch" ||
      !!section.localClosures)
  );
}

// Inside stateful structure (inclusive). The parent is asked first, so only the
// section's own answer can loop back to it, where it reads as not stateful.
export const [inStatefulBranch] = createProgramCyclicMemo(
  (section: Section): boolean =>
    (!!section.parent && inStatefulBranch(section.parent)) ||
    isStatefulBranch(section),
  false,
);

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
export const [isStatefulBranch] = createProgramCyclicMemo(
  (section: Section) => {
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
        (!!sources?.state || inStatefulBranch(section.parent!)) &&
        every(getReferencedBindings(expr), clientRecomputes))
    );
  },
  false,
);

// The client recomputes a state-mixed ref from what it holds: its state, a
// fill (the read here calls for one), or a derivation it can recompute so.
function clientRecomputes(binding: Binding): boolean {
  const sources = getSourcesForRef(binding);
  if (!sources?.param) return true;
  if (inStatefulBranch(binding.section) || canPatchFill(binding)) return true;
  const inputs = getBindingsDerivedFrom(binding);
  return !!inputs && every(inputs, clientRecomputes);
}

// What selects the section: a branch's expression, or the call site
// expression passing content (an attribute tag item of a param loop).
function getStructureSources(section: Section) {
  if (section.branch?.optional) {
    return section.branchExpr && getSourcesForExpr(section.branchExpr);
  }
  if (!section.branch && section.derives) {
    return getSourcesForDerived(section.derives);
  }
}

// The sources of each branch around it (inclusive) selected by params alone,
// caller-owned structure: a call site passing state for them hands it to the client.
export const [getCallerOwnedStructure] = createProgramCyclicMemo(
  (section: Section): Sources[] | undefined => {
    const chain = section.parent && getCallerOwnedStructure(section.parent);
    const sources = patchWrites(section)
      ? getStructureSources(section)
      : undefined;
    return sources?.param && !sources.state
      ? chain?.concat(sources) || [sources]
      : chain;
  },
  undefined,
);

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

// What a `@catch` a patch creates renders through its renderer's setup:
// whatever reads none of its error (its params).
export function catchSetupRenders(
  section: Section,
  sources: Sources | undefined,
) {
  return (
    section.boundaryContent === "catch" &&
    !some(sources?.param, (param) => param.section === section)
  );
}

// Whether a patch renders the branches or loop rows at the node: it writes
// the node's section, and none is stateful (a chain with one is the client's).
export function patchesBranchesAt(binding: Binding) {
  return patchWrites(binding.section) && !hasStatefulBranchAt(binding);
}

export function hasStatefulBranchAt(binding: Binding) {
  return some(binding.branchBodies, isStatefulBranch);
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

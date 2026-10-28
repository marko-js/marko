// Analyze-side structure facts for patches, in template terms; group guards
// and wire channels belong to ./decisions, ./refresh, ./writers.
import { type Binding, bindingUtil } from "../bindings";
import { createPassMemo } from "../cyclic-memo";
import { everyCallPasses } from "../known-tag";
import { isPatch } from "../marko-config";
import { every, first, some } from "../optional";
import {
  addStructuralParams,
  getSourcesForDerived,
  getSourcesForExpr,
} from "../reasons";
import { type ReferencedExtra } from "../references";
import {
  forEachParamGroup,
  getRendererReason,
  isContentRender,
  getCallerParamGroups,
  type Section,
  type ParamReasonGroup,
} from "../sections";
import { getDerivedReaders, someRead } from "../solve-reasons";
import { hasParamOrGlobalSource, type Sources } from "../sources";
import { hasClientState, holdsInitialValue } from "./decisions";

// Every render of the section is patch-written: on the branch path, outside
// stateful structure.
export function patchWrites(section: Section) {
  return (
    isPatch() && section.enclosing.branchPath && !inStatefulBranch(section)
  );
}

// Some render of the section may be patch-written: no branch on its chain is
// stateful, but content, which another consumer may render patched.
export const patchMayWrite = createPassMemo(
  (section: Section): boolean =>
    (!section.parent || patchMayWrite(section.parent)) &&
    (!isStatefulBranch(section) || !!section.derives),
  false,
);

// Inside stateful structure (inclusive). The parent is asked first, so only the
// section's own answer can loop back to it, where it reads as not stateful.
export const inStatefulBranch = createPassMemo(
  (section: Section): boolean =>
    (!!section.parent && inStatefulBranch(section.parent)) ||
    isStatefulBranch(section),
  false,
);

// Content read inside stateful structure renders there; content rendered with
// client state, or held by it, may render on the client anywhere.
export function isStatefulLeaf(read: ReferencedExtra) {
  return (
    (isContentRender(read) || !!read.derives) &&
    (inStatefulBranch(read.section) ||
      (!!read.rendersContent && hasClientState(getSourcesForExpr(read))) ||
      some(read.derives, holdsClientState))
  );
}

// A read using content other than to render it: anything but passing it on, or
// passing it on in stateful structure, where no patch renders.
export function usesApart(read: ReferencedExtra) {
  return !read.derives || inStatefulBranch(read.section);
}

function holdsClientState(binding: Binding) {
  return hasClientState(binding.sources);
}
// A read rendering the content where a patch may too: outside stateful structure,
// or naming a created scope's `<let>` alone, which the patch creates first.
function isPatchedLeaf(read: ReferencedExtra) {
  return (
    isContentRender(read) &&
    (!isStatefulLeaf(read) ||
      (!!read.nameOnly &&
        every(getSourcesForExpr(read)?.state, (state) =>
          holdsInitialValue(state, read.section),
        )))
  );
}

// Which consumers render a tag body with client state (as its prop renders in the child):
// some, or every one where no patched read or call outside stateful structure is left.
export const getStatefulConsumers = createPassMemo(
  (section: Section): "some" | "every" | undefined => {
    const { derives } = section;
    const readers = derives && getDerivedReaders(derives);
    if (!readers || !someRead(readers, isStatefulLeaf)) return;
    return some(section.callSections, isPatchedCall) ||
      someRead(readers, isPatchedLeaf)
      ? "some"
      : "every";
  },
  undefined,
);

function isPatchedCall(callSection: Section) {
  return !inStatefulBranch(callSection);
}

// A branch body whose branch expression has a state reason (or nested in one), or
// that every consumer or call makes stateful.
export const isStatefulBranch = createPassMemo((section: Section) => {
  // An optional branch, a dynamic tag body, or an `<await>` body: the client settles
  // one whose promise derives from client state or that every call passes it.
  const expr =
    isPatch() && (section.branch?.optional !== false || section.branch.await)
      ? section.branchExpr
      : undefined;
  const sources = expr && getSourcesForExpr(expr);
  // A body every consumer renders stateful by the renderer the client registers
  // (else the patch keeps it), or one whose own branch expression derives from state.
  return (
    (getStatefulConsumers(section) === "every" &&
      !!getRendererReason(section)) ||
    (!!expr &&
      (hasClientState(sources) ||
        inStatefulBranch(section.parent!) ||
        isPassedStateByEveryCall(sources)))
  );
}, false);

// Params of `<define>` bodies that every call passes client state, where nothing
// else renders the bodies: each group's, or (`anyGroup`) one group's.
export function isPassedStateByEveryCall(
  sources: Sources | undefined,
  anyGroup?: boolean,
) {
  let passes = !anyGroup && !!sources?.param;
  forEachParamGroup(sources?.param, (body, params) => {
    const { derives } = body;
    const groupPasses =
      !!derives &&
      !someRead(getDerivedReaders(derives), isAnyRead) &&
      everyCallPasses(body, params, hasClientState);
    passes = anyGroup ? passes || groupPasses : passes && groupPasses;
  });
  return passes;
}

function isAnyRead() {
  return true;
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
// param-selected structure: a call passing them state hands it to the client.
export const getParamSelectedStructure = createPassMemo(
  (section: Section): Sources[] | undefined => {
    const chain = section.parent && getParamSelectedStructure(section.parent);
    const sources = patchWrites(section)
      ? getStructureSources(section)
      : undefined;
    return sources?.param && !sources.state
      ? chain?.concat(sources) || [sources]
      : chain;
  },
  undefined,
);

// A call input its callee keeps per instance where a patch renders the call: its
// own fill or holes where its group is the server's, a written join where it mixes.
export function calleeKeepsInput(
  section: Section,
  sources: Sources | undefined,
) {
  return (
    patchWrites(section) && !sources?.state && hasParamOrGlobalSource(sources)
  );
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

// Whether a patch renders the branches or loop rows at the node: it writes
// the node's section, and none is stateful (a chain with one is the client's).
export function patchesBranchesAt(binding: Binding) {
  return (
    patchWrites(binding.section) &&
    !some(binding.branchBodies, isStatefulBranch)
  );
}

// A known child renders at the node, which holds the child's scope.
export function isKnownChildNode(binding: Binding) {
  return !!binding.section.knownTags?.some(
    (tagExtra) => tagExtra.childScopeBinding === binding,
  );
}

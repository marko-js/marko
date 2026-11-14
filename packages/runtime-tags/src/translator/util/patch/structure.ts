// Analyze-side structure facts for patches, in template terms; group guards
// and wire channels belong to ./decisions, ./refresh, ./writers.
import { type Binding, bindingUtil } from "../bindings";
import { createPassMemo, createPassPathMemo } from "../cyclic-memo";
import { everyCallPasses, type KnownTagExtra } from "../known-tag";
import { isPatch } from "../marko-config";
import { first, type Opt, reduce, some } from "../optional";
import {
  addStructuralParams,
  getSourcesForDerived,
  getSourcesForExpr,
} from "../reasons";
import { type ReferencedExtra } from "../references";
import {
  forEachParamGroup,
  isContentRender,
  isOptionalBranch,
  type ParamReasonGroup,
  type Section,
} from "../sections";
import {
  isRenderedContent,
  someContentRead,
  someReachedRead,
} from "../solve-reasons";
import { type Sources } from "../sources";
import {
  getCallerParamGroups,
  hasClientState,
  hasParamOrGlobalSource,
} from "./decisions";

// Every render of the section is patch-written: on the branch path, outside
// stateful structure.
export function patchFillsSection(section: Section) {
  return (
    isPatch() && section.enclosing.branchPath && !inStatefulStructure(section)
  );
}

// Some render of the section may be patch-written: no branch on its chain is
// stateful, but content, which another consumer may render patched.
export const patchMayFillSection = createPassMemo(
  (section: Section): boolean =>
    (!section.parent || patchMayFillSection(section.parent)) &&
    (!isStatefulStructure(section) || !!section.derives),
  false,
);

// Inside stateful structure (inclusive). The parent is asked first, so only the
// section's own answer can loop back to it, where it reads as not stateful.
export const inStatefulStructure = createPassMemo(
  (section: Section): boolean =>
    (!!section.parent && inStatefulStructure(section.parent)) ||
    isStatefulStructure(section),
  false,
);

// Some render of the section is the client's: stateful structure holds it, or a
// consumer renders it (or a body holding it) with client state.
export const mayRenderOnClient = createPassMemo(
  (section: Section): boolean =>
    (!!section.parent && mayRenderOnClient(section.parent)) ||
    inStatefulStructure(section) ||
    !!getStatefulConsumers(section),
  false,
);

// Content read inside stateful structure renders there; a tag rendering it
// with client state renders it on the client wherever it sits.
export function isStatefulRead(read: ReferencedExtra) {
  return (
    (isContentRender(read) || !!read.derives) &&
    (inStatefulStructure(read.section) ||
      // State the client never changes renders as the server does.
      ((!!read.rendersContent || derivesRenderedContent(read)) &&
        hasClientState(getSourcesForExpr(read))))
  );
}

// A read handing the value on to a render of it as content: a call passing it to
// a child, or a `<const>`.
export function derivesRenderedContent(read: ReferencedExtra) {
  return some(read.derives, isRenderedContent);
}

function isAnyRead() {
  return true;
}

// A read rendering the content where a patch may too: outside stateful structure.
function isPatchedLeaf(read: ReferencedExtra) {
  return isContentRender(read) && !isStatefulRead(read);
}

// Which consumers render a tag body with client state (as its prop renders in the child):
// some, or every one where no patched read or call outside stateful structure is left.
export const getStatefulConsumers = createPassMemo(
  (section: Section): "some" | "every" | undefined => {
    const { derives } = section;
    if (!derives || !someReaches(derives, reachesStatefulRead)) return;
    return some(section.renderedBy, isPatchedCall) ||
      someReaches(derives, reachesPatchedLeaf)
      ? "some"
      : "every";
  },
  undefined,
);

// Whether content passed at a binding and path reaches a stateful read, or a
// patched leaf: one answer for every content section passed there.
const reachesStatefulRead = createPassPathMemo(
  (binding: Binding, path: Opt<string> | true) =>
    someReachedRead(binding, path, isStatefulRead),
  false,
);

const reachesPatchedLeaf = createPassPathMemo(
  (binding: Binding, path: Opt<string> | true) =>
    someReachedRead(binding, path, isPatchedLeaf),
  false,
);

function someReaches(
  { binding, properties }: NonNullable<Section["derives"]>,
  reaches: (binding: Binding, path: Opt<string> | true) => boolean,
) {
  return some(binding, (part) => reaches(part, properties));
}

function isPatchedCall(call: KnownTagExtra) {
  return !inStatefulStructure(call.childScopeBinding.section);
}

// A branch body whose branch expression has a state reason (or nested in one), or
// that every consumer or call makes stateful.
export const isStatefulStructure = createPassMemo((section: Section) => {
  // An optional branch or a dynamic tag body the client renders by its branch
  // expression, or a body every consumer renders stateful.
  return (
    (isPatch() &&
      (!section.branch || isOptionalBranch(section)) &&
      !!section.branchExpr &&
      hasStatefulBranchExpr(section)) ||
    getStatefulConsumers(section) === "every"
  );
}, false);

// The client renders the body, or settles an `<await>` body's promise, by its branch
// expression: client state or every call passing state picks it, or stateful structure holds it.
export function hasStatefulBranchExpr(body: Section) {
  const sources = getSourcesForExpr(body.branchExpr!);
  return (
    hasClientState(sources) ||
    inStatefulStructure(body.parent!) ||
    isPassedStateByEveryCall(sources)
  );
}

// Params of `<define>` bodies that every call passes client state, where nothing
// else renders the bodies: each group's, or (`anyGroup`) one group's.
export function isPassedStateByEveryCall(
  sources: Sources | undefined,
  anyGroup?: boolean,
) {
  let passes = !anyGroup && !!sources?.param;
  forEachParamGroup(sources?.param, (body, params) => {
    const groupPasses =
      !!body.derives &&
      !someContentRead(body, isAnyRead) &&
      everyCallPasses(body, params, hasClientState);
    passes = anyGroup ? passes || groupPasses : passes && groupPasses;
  });
  return passes;
}

// What selects the section: a branch's expression (a dynamic tag's name too), or the
// call site expression passing content (an attribute tag item of a param loop).
function getStructureSources(section: Section) {
  if (isOptionalBranch(section) || (!section.branch && section.branchExpr)) {
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
    const { parent, renderedBy } = section;
    // A `<define>` body sits in the structure around each call rendering it.
    const chain =
      parent &&
      (renderedBy
        ? reduce(renderedBy, addCallStructure)
        : getParamSelectedStructure(parent));
    const sources = patchFillsSection(section)
      ? getStructureSources(section)
      : undefined;
    return sources?.param && !sources.state
      ? chain?.concat(sources) || [sources]
      : chain;
  },
  undefined,
);

function addCallStructure(
  structure: Sources[] | undefined,
  call: KnownTagExtra,
) {
  const around = getParamSelectedStructure(call.childScopeBinding.section);
  return structure && around ? structure.concat(around) : structure || around;
}

// A call input its callee keeps per instance where a patch renders the call: its
// own fill or holes where its group is the server's, a filled intersection where it mixes.
export function calleeKeepsInput(
  section: Section,
  sources: Sources | undefined,
) {
  return (
    patchFillsSection(section) &&
    !sources?.state &&
    hasParamOrGlobalSource(sources)
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
    patchFillsSection(binding.section) &&
    !some(binding.branchBodies, isStatefulStructure)
  );
}

// A known child renders at the node, which holds the child's scope.
export function isKnownChildNode(binding: Binding) {
  return !!binding.section.knownTags?.some(
    (tagExtra) => tagExtra.childScopeBinding === binding,
  );
}

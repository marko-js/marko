import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import {
  type Binding,
  type Intersection,
  type ParamBinding,
  bindingUtil,
  getCanonicalBinding,
  isDirectAlias,
  isIndexProperty,
  propertiesUtil,
} from "./bindings";
import {
  createAnalysisMemo,
  createPassMemo,
  createPassPathMemo,
  createPathKeys,
  resetPassMemos,
} from "./cyclic-memo";
import { addKnownTagReasons, recordKnownTagPatchFacts } from "./known-tag";
import { isPatch } from "./marko-config";
import { addFunctionReasons } from "./module-registrations";
import {
  at,
  concat,
  every,
  first,
  forEach,
  type Opt,
  push,
  reduce,
  rest,
  size,
  some,
} from "./optional";
import { ensurePatchReasonGroups } from "./patch/refresh";
import { mayRenderOnClient } from "./patch/structure";
import {
  addOwnerReason,
  addReason,
  getReasonsVersion,
  getSourcesForDerived,
  getSourcesForExpr,
  mapParamReason,
  mergeSlotReasons,
  type Reason,
} from "./reasons";
import {
  type Read,
  type ReferencedExtra,
  getFunctionReadsByExpression,
  getConstantBindings,
  getConstantBindingsInFunction,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  getBindingsDerivedFrom,
} from "./references";
import {
  ensureSectionReasonGroups,
  forEachSection,
  forEachSectionReverse,
  getDynamicClosureIndex,
  getRendererReason,
  isContentRender,
  isDynamicClosure,
  isSameOrAncestorSection,
  type Section,
} from "./sections";
import { findSlot, ensureSlot, SlotKind } from "./slots";
import {
  ALWAYS,
  type Sources,
  isCoveredParam,
  isSupersetSources,
  mergeSources,
  sharesSources,
  withSources,
} from "./sources";

export function solveReasons(
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  // Rules that follow other reasons repeat until none moves; every
  // write merges, so they only grow and this settles, even through cycles.
  let reasonsVersion: number;
  do {
    reasonsVersion = getReasonsVersion();
    resetPassMemos();
    forEachSection((section) =>
      addIntersectionReasons(section, intersectionsBySection.get(section)),
    );
    forEachSection(addClosureReasons);
    forEachSection(addCallOwnerReasons);
    addRegisteredFnReasons(getFunctionReadsByExpression());
    forEachSectionReverse((section) =>
      solveSectionReasons(section, intersectionsBySection.get(section)),
    );
  } while (reasonsVersion !== getReasonsVersion());
  getFunctionReadsByExpression().clear();
}

function solveSectionReasons(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  addKnownTagReasons(section);
  if (isPatch()) recordKnownTagPatchFacts(section);
  mergeSlotReasons(section);
  // Groups lay out the mask callers pack: one per set of params a runtime
  // question asks of, whether the client reads a write and what sources a patch's.
  ensureSectionReasonGroups(section);
  if (isPatch()) ensurePatchReasonGroups(section, intersections);
}

// An intersection member is read when its partners' sources change, unless
// those changes always recompute it.
function addIntersectionReasons(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  if (intersections) {
    for (const intersection of intersections) {
      // Every pair merges even when a member is already read: that leaves its
      // reason unchanged, and its owners may still need the pair.
      for (let i = 0; i < intersection.length - 1; i++) {
        for (let j = i + 1; j < intersection.length; j++) {
          addIntersectionMemberReason(
            section,
            intersection[i],
            intersection[j],
          );
          addIntersectionMemberReason(
            section,
            intersection[j],
            intersection[i],
          );
        }
      }
    }
  }
}

function addIntersectionMemberReason(
  section: Section,
  member: Binding,
  partner: Binding,
) {
  // A partner a changed `$global` key refreshes re-runs the join wherever the
  // client holds the member, so the member's own sources say where.
  addMemberReason(
    section,
    member,
    !isSupersetSources(member, partner) ||
      hasReadIntermediate(member, partner, new Set())
      ? partner.sources
      : partner.sources?.global && member.sources,
  );
}

// A changed `$global` key re-runs what reads it wherever the client holds the
// values it reads, so each value's own sources say where it is read.
export function addGlobalReadReasons(section: Section) {
  for (const expr of section.globalReadExprs || []) {
    forEach(getReferencedBindings(expr), (member) => {
      addMemberReason(section, member, member.sources);
    });
    forEach(getConstantBindings(expr), (key) => {
      addMemberReason(section, key, key.sources);
    });
  }
}

function addMemberReason(
  section: Section,
  member: Binding,
  reason: Reason | undefined | false,
) {
  if (reason) {
    // A member of an ancestor, even one always written, is read through the
    // owner chain, so a change that re-runs it needs that chain written.
    if (member.section !== section) {
      addOwnerReason(
        section,
        member.section,
        mergeSources(member.sources, reason),
      );
    }
    addReason(ensureSlot(member), reason);
  }
}

// Whether `member` reads `partner`'s sources through a binding with readers,
// whose dirty check then holds the resumed value and can skip `member`.
function hasReadIntermediate(
  member: Binding,
  partner: Binding,
  seen: Set<Binding>,
): boolean {
  return some(getBindingsDerivedFrom(member), (from) => {
    if (seen.has(from) || !sharesSources(from, partner)) return false;
    seen.add(from);
    if (
      bindingUtil.has(partner.sources!.state, from) ||
      some(partner.sources!.param, (param) =>
        isCoveredParam(param, from as ParamBinding),
      )
    ) {
      return false;
    }
    return !!findSlot(from)?.reason || hasReadIntermediate(from, partner, seen);
  });
}

// `sources` less the closure's own, whose change recomputes it before creating
// a branch that reads it, unless a read binding's dirty check skips that.
function withoutOwnSources(closure: Binding, sources: Sources | undefined) {
  const own = closure.sources;
  if (!sources || !own || hasReadIntermediate(closure, closure, new Set())) {
    return sources;
  }
  const state = bindingUtil.difference(sources.state, own.state);
  const param = bindingUtil.filter(
    sources.param,
    (binding) => !isCoveredParam(binding, own.param),
  );
  return withSources(sources, state, param);
}

// What creates a section anew on the client: a branch's expression, or for
// content given to a tag, what reads its renderer and the expression passing it.
function getBranchExprReason(section: Section) {
  const { derives, branchExpr } = section;
  if (derives) {
    let reason = mergeSources(
      getRendererReason(section) || undefined,
      getSourcesForDerived(derives),
    );
    // A direct call renders the body in place, so what creates a section from
    // the call up to the define (or the body, for a recursive call) creates it.
    forEach(section.renderedBy, (call) => {
      const callSection = call.childScopeBinding.section;
      reason = mergeSources(
        reason,
        getBranchExprReasonUntil(
          callSection,
          isSameOrAncestorSection(section, callSection)
            ? section
            : section.parent!,
        ),
      );
    });
    return reason;
  }
  // An `<await>`'s promise settles into the body its owner made.
  if (section.branch?.kind === "await") return;
  return branchExpr ? getSourcesForExpr(branchExpr) : ALWAYS;
}

// What creates `section`, or a section between it and `ancestor`, anew on the
// client (always, still with its sources, when anything can).
export function getBranchExprReasonUntil(section: Section, ancestor: Section) {
  let reason: Sources | undefined;
  for (let cur = section; cur !== ancestor; cur = cur.parent!) {
    reason = mergeSources(reason, getBranchExprReason(cur));
  }
  return reason;
}

// A loop key a section reads in place takes a closure's reasons, and a closure's
// signal also reaches the section through subscriber sets where no branch links them.
function addClosureReasons(section: Section) {
  forEach(section.referencedConstants, (constant) =>
    addClosureReason(section, constant),
  );
  forEach(section.referencedClosures, (closure) => {
    addClosureReason(section, closure);
    const { sources } = closure;
    if (sources && isDynamicClosure(section, closure)) {
      // A patch changing `$global` re-runs one reading it alone, whose set reaches
      // the scopes the client renders.
      const reason =
        isPatch() &&
        !sources.state &&
        !sources.param &&
        mayRenderOnClient(section)
          ? ALWAYS
          : sources;
      addReason(ensureSlot(closure, SlotKind.ClosureScopes), reason);
      if (getDynamicClosureIndex(closure, section)) {
        addReason(
          ensureSlot(closure, SlotKind.ClosureSignalIndex, section),
          reason,
        );
      }
    }
  });
}

// A closure a section reads is read whenever a branch or content between the
// read and the closure's own section is created, unless that recomputes it.
function addClosureReason(section: Section, binding: Binding) {
  const sourceSection = binding.section;
  const branchesReason = getBranchExprReasonUntil(section, sourceSection);
  addReason(
    ensureSlot(binding),
    branchesReason?.always
      ? branchesReason
      : withoutOwnSources(binding, branchesReason),
  );
  if (isDynamicClosure(section, binding)) {
    addOwnerReason(section, sourceSection, branchesReason);
  }
}

// A call links its body's scope to the body's owner as the calling scope is
// created, reading the owner chain between them.
function addCallOwnerReasons(body: Section) {
  if (body.readsOwner) {
    forEach(body.renderedBy, (call) => {
      const callSection = call.childScopeBinding.section;
      addOwnerReason(
        callSection,
        body.parent!,
        getBranchExprReasonUntil(callSection, body.parent!),
      );
    });
  }
}

// Client code reading a function reads what the function references, owners
// included.
function addRegisteredFnReasons(
  fnReadsByExpression: ReturnType<typeof getFunctionReadsByExpression>,
) {
  addFunctionReasons();
  for (const exprFnReads of fnReadsByExpression.values()) {
    for (const fn of exprFnReads.keys()) {
      const reason = fn.reason;
      if (reason) {
        const addReadReason = (binding: Binding) => {
          addReason(ensureSlot(binding), reason);
          if (binding.section !== fn.section) {
            addOwnerReason(fn.section, binding.section, reason);
          }
        };
        forEach(getReferencedBindingsInFunction(fn), addReadReason);
        forEach(getConstantBindingsInFunction(fn), addReadReason);
      }
    }
  }
}

// Who reads a value through its aliases and derives links (a cyclic graph):
// what rereads it after resume, and the `LANDS_*` bits of the reads it lands in.
interface Readers {
  reason: undefined | Reason;
  lands: number;
}

// Lands in a retained read, where client code may read it as is.
const LANDS_RETAINED = 1;
// Reaches a retained read as more than a dynamic tag's name.
const LANDS_RETAINED_INPUT = 2;
// Lands in a read rendering it as content (`isContentRender`).
const LANDS_CONTENT_RENDER = 4;
// Reaches the initial value of an uncontrolled `<let>` read after resume.
const LANDS_INITIAL_VALUE = 8;

const UNREAD: Readers = { reason: undefined, lands: 0 };

const ALWAYS_READ: Readers = { reason: ALWAYS, lands: 0 };

const exprReaders = createPassMemo(computeExprReaders, UNREAD);

// A binding's answer is per asked path: the value itself, one of its
// properties (a destructured part), or the whole with every property.
const bindingReaders = createPassPathMemo(computeBindingReaders, UNREAD);

export function getReasonForBinding(
  binding: Binding,
  properties?: Opt<string> | true,
): undefined | Reason {
  return bindingReaders(binding, properties).reason;
}

// An expression's `getReasonForBinding`: what rereads its value after resume,
// which the server writes it for.
export function getReasonForExpr(extra: t.NodeExtra): undefined | Reason {
  return extra.isEffect ? ALWAYS : exprReaders(extra).reason;
}

// Whether a binding's value lands in a retained read as more than a dynamic
// tag's name, where client code may read it as is.
export function bindingLandsRetained(
  binding: Binding,
  properties: Opt<string>,
) {
  return !!(bindingReaders(binding, properties).lands & LANDS_RETAINED_INPUT);
}

// Where content renders: its content sites in the template it is passed to, its
// deep sites past a further call, or else `unseen`, where a read hands it on.
export function getContentSites({
  binding,
  properties,
}: NonNullable<Section["derives"]>) {
  return reduce(
    binding,
    (sites, part) => joinSites(sites, getSitesAt(getWalkKey(part, properties))),
    NO_SITES,
  );
}

interface ContentSites {
  unseen: boolean;
  sites?: Opt<t.MarkoTagExtra>;
  deepSites?: Opt<t.MarkoTagExtra>;
}

const NO_SITES: ContentSites = { unseen: false };

const UNSEEN_SITES: ContentSites = { unseen: true };

// The content sites of a value passed at a binding and path, shared by every
// content section passed there.
const [getSitesAt] = createAnalysisMemo(
  ([binding, properties]: [Binding, Opt<string> | true]): ContentSites => {
    let sites: Opt<t.MarkoTagExtra>;
    let deepSites: Opt<t.MarkoTagExtra>;
    const unseen = someReachedRead(
      binding,
      properties,
      (read, reader, pastCall) => {
        if (read.isEffect) return false;
        // A read deriving nothing may hand it on to render anywhere: a spread, a
        // native element's `content=` or a class component's body.
        if (!isNamedBy(read, reader)) return !read.derives;
        if (pastCall) {
          deepSites = push(deepSites, read);
        } else {
          sites = push(sites, read);
        }
        return false;
      },
    );
    return unseen ? UNSEEN_SITES : { unseen, sites, deepSites };
  },
  NO_SITES,
);

function joinSites(a: ContentSites, b: ContentSites): ContentSites {
  return a === NO_SITES
    ? b
    : a.unseen || b.unseen
      ? UNSEEN_SITES
      : {
          unseen: false,
          sites: concat(a.sites, b.sites),
          deepSites: concat(a.deepSites, b.deepSites),
        };
}

// Whether the value lands somewhere retained (itself included) as more than a
// dynamic tag's name.
export function landsRetainedAsInput(extra: t.NodeExtra) {
  return (
    !!extra.retained || !!(exprReaders(extra).lands & LANDS_RETAINED_INPUT)
  );
}

// Whether the value lands somewhere retained (itself included), where client
// code may read a function as is.
export function landsRetained(extra: t.NodeExtra) {
  return (
    !!extra.retained ||
    (!extra.isEffect && !!(exprReaders(extra).lands & LANDS_RETAINED))
  );
}

// Whether the value reaches the initial value of an uncontrolled `<let>` that
// client code reads after resume.
export function landsInitialValue(extra: t.NodeExtra) {
  return !!(exprReaders(extra).lands & LANDS_INITIAL_VALUE);
}

// Whether the value lands in a read rendering it as content.
export function isRenderedContent(binding: Binding) {
  return !!(bindingReaders(binding, true).lands & LANDS_CONTENT_RENDER);
}

// Whether `test` passes a read the content reaches (`someReachedRead`).
export function someContentRead(content: Section, test: ReadTest) {
  const { binding, properties } = content.derives!;
  return someReachedRead(binding, properties, test);
}

// Whether `test` passes a read the expression's value reaches, each past the call
// where it is a call site's (`someReachedRead`).
export function someExprRead(extra: t.NodeExtra, test: ReadTest) {
  const reach: ReadTest = extra.callSiteExprs
    ? (read, reader) => test(read, reader, true)
    : test;
  return someReachedRead(extra.derives, true, reach);
}

function computeExprReaders(extra: t.NodeExtra): Readers {
  const folding: Folding = {
    readers: isReturned(extra) ? ALWAYS_READ : UNREAD,
    head: undefined,
  };
  forEachDerivedStep(extra, undefined, undefined, READERS_STEP, folding);
  return folding.readers;
}

// Who reads a binding the value reaches, in this program's terms: past a call,
// the callee's reason maps through what the call passes.
function readersOf(
  binding: Binding,
  path: Opt<string> | true,
  via: t.NodeExtra | undefined,
): Readers {
  const linked = bindingReaders(binding, path);
  const exprs = via?.callSiteExprs;
  return exprs && linked.reason
    ? {
        reason: mapParamReason(
          binding.section.program,
          linked.reason,
          exprs,
          true,
        ),
        lands: linked.lands,
      }
    : linked;
}

// Where a path into `part` lands in a derives `binding`: the same path when
// it is `part` or spreads it as is, an item's path when iterating it, or whole.
function getDerivedPath(
  extra: t.NodeExtra,
  binding: Binding,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
): Opt<string> | true {
  if (properties === undefined || properties === true || !part) return true;
  if (isReferenceTo(extra, part) || bindingUtil.has(extra.spreadFrom, part)) {
    return properties;
  }
  const iterates = binding.iterates;
  if (iterates && isReferenceTo(iterates.expr, part)) {
    if (iterates.type === "in") return concat("1", rest(properties));
    // An `of` item is an array's index or an attribute tag itself (its first
    // item); paths only start at attribute tag bodies, so no other iterable.
    return concat(
      "0",
      isIndexProperty(first(properties)) ? rest(properties) : properties,
    );
  }
  return true;
}

// The expression is `binding` itself, not something computed from it.
function isReferenceTo(extra: t.NodeExtra, binding: Binding) {
  const { read } = extra;
  return (
    !!read &&
    read.properties === undefined &&
    getCanonicalBinding(read.binding) === getCanonicalBinding(binding)
  );
}

// A destructured property or rest of the value (a direct alias is not).
function isPartOf(binding: Binding, value: Binding | undefined) {
  return !!value && binding.aliasOf === value && !isDirectAlias(binding);
}

function computeBindingReaders(
  binding: Binding,
  properties: Opt<string> | true | undefined,
): Readers {
  if (isLeftOut(binding, properties)) return UNREAD;
  const head =
    properties === true || properties === undefined
      ? undefined
      : first(properties);
  const reason = findSlot(binding)?.reason;
  const folding: Folding = {
    readers: reason ? { reason, lands: 0 } : UNREAD,
    head,
  };
  forEachStep(binding, properties, READERS_STEP, folding);
  return folding.readers;
}

interface Folding {
  readers: Readers;
  head: string | undefined;
}

const READERS_STEP: Step<Folding> = {
  land(folding, read, binding) {
    folding.readers = landIn(folding.readers, read, binding, folding.head);
  },
  reach(folding, binding, path, via) {
    folding.readers = mergeReaders(
      folding.readers,
      readersOf(binding, path, via),
    );
  },
};

// What a read the binding's value lands in adds: its bits, and an always reason
// where the template returns it or an effect reads it (other than as content).
function landIn(
  readers: Readers,
  read: ReferencedExtra,
  binding: Binding,
  head: string | undefined,
): Readers {
  if (read.isEffect) {
    return head === "content" &&
      read.rendersContent &&
      bindingUtil.has(read.spreadFrom, binding)
      ? readers
      : mergeReaders(readers, ALWAYS_READ);
  }
  return withLands(
    isReturned(read) ? mergeReaders(readers, ALWAYS_READ) : readers,
    getLandingBits(read, binding),
  );
}

function mergeReaders(a: Readers, b: Readers): Readers {
  if (a === UNREAD) return b;
  if (b === UNREAD) return a;
  const reason = mergeSources(a.reason, b.reason);
  const lands = a.lands | b.lands;
  if (reason === a.reason && lands === a.lands) return a;
  if (reason === b.reason && lands === b.lands) return b;
  return { reason, lands };
}

function withLands(readers: Readers, lands: number): Readers {
  return (readers.lands | lands) === readers.lands
    ? readers
    : { reason: readers.reason, lands: readers.lands | lands };
}

// The bits a read the binding's value lands in adds: only a retained one counts.
function getLandingBits(read: ReferencedExtra, binding: Binding) {
  return (
    (read.retained
      ? isNamedBy(read, binding)
        ? LANDS_RETAINED
        : LANDS_RETAINED | LANDS_RETAINED_INPUT
      : 0) | (isPatch() ? getPatchLandingBits(read) : 0)
  );
}

function getPatchLandingBits(read: ReferencedExtra) {
  return (
    (isContentRender(read) ? LANDS_CONTENT_RENDER : 0) |
    (read.initialValue && some(read.derives, isReadAfterResume)
      ? LANDS_INITIAL_VALUE
      : 0)
  );
}

function isReadAfterResume(binding: Binding) {
  return !!bindingReaders(binding, true).reason;
}

// A dynamic tag reads the value only as its name.
export function isNamedBy(read: ReferencedExtra, binding: Binding) {
  return every(binding.reads.get(read), isTagNameRead);
}

function isTagNameRead({ extra }: Read) {
  return !!extra.exprRoot?.tagName;
}

// The path names a property the binding (a rest) leaves out.
function isLeftOut(binding: Binding, properties: Opt<string> | true) {
  return (
    properties !== undefined &&
    properties !== true &&
    propertiesUtil.has(binding.excludeProperties, first(properties))
  );
}

// Each step a value at `properties` takes through its aliases and derives links:
// a read it lands in, or a binding and path it goes on to (`via` the read deriving it).
function forEachStep<S>(
  binding: Binding,
  properties: Opt<string> | true,
  step: Step<S>,
  state: S,
) {
  // A property is read with the value it is read from.
  const aliased = binding.aliasOf;
  if (properties !== true && aliased) {
    step.reach(state, aliased, concat(binding.property, properties), undefined);
  }
  for (const read of binding.reads.keys()) {
    step.land(state, read, binding);
    if (!read.isEffect) {
      forEachDerivedStep(read, binding, properties, step, state);
    }
  }
  for (const alias of binding.aliases) {
    step.reach(state, alias, properties, undefined);
  }
  if (properties === true) {
    for (const part of binding.propertyAliases.values()) {
      step.reach(state, part, true, undefined);
    }
  } else if (properties !== undefined) {
    const property = first(properties);
    let part = binding.propertyAliases.get(property);
    if (part) step.reach(state, part, rest(properties), undefined);
    for (const alias of binding.aliases) {
      part = alias.propertyAliases.get(property);
      if (part) step.reach(state, part, rest(properties), undefined);
    }
  }
}

// The bindings a read derives, at the path into `part` it carries; none past the
// template's return, nor `part`'s own destructured parts (they answer for their path).
function forEachDerivedStep<S>(
  read: t.NodeExtra,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
  step: Step<S>,
  state: S,
) {
  const { derives } = read;
  if (!isReturned(read)) {
    for (let i = 0; i < size(derives); i++) {
      const binding = at(derives, i)!;
      if (!isPartOf(binding, part)) {
        step.reach(
          state,
          binding,
          getDerivedPath(read, binding, part, properties),
          read,
        );
      }
    }
  }
}

interface Step<S> {
  land(state: S, read: ReferencedExtra, binding: Binding): void;
  reach(
    state: S,
    binding: Binding,
    path: Opt<string> | true,
    via: t.NodeExtra | undefined,
  ): void;
}

function isReturned(extra: t.NodeExtra) {
  return extra === getProgram().node.extra.section!.returnValueExpr;
}

const getWalkKey = createPathKeys<Binding>();

// Stops the walk by passing; a visit returning nothing walks every read.
type ReadTest = (
  read: ReferencedExtra,
  reader: Binding,
  pastCall: boolean,
) => boolean | void;

// Whether `test` passes a read the value at `properties` reaches, given the binding
// reading it and whether past a call.
export function someReachedRead(
  value: Opt<Binding>,
  properties: Opt<string> | true,
  test: ReadTest,
) {
  const walk: Walk = {
    test,
    found: false,
    pastCall: false,
    walked: new Set(),
    walkedPastCall: new Set(),
  };
  forEach(value, (binding) => walkFrom(walk, binding, properties));
  return walk.found;
}

interface Walk {
  test: ReadTest;
  found: boolean;
  pastCall: boolean;
  // Each binding and path is walked once, and once more past a call.
  walked: Set<object>;
  walkedPastCall: Set<object>;
}

const WALK_STEP: Step<Walk> = {
  land(walk, read, binding) {
    walk.found ||= !!walk.test(read, binding, walk.pastCall);
  },
  reach(walk, binding, path, via) {
    const { pastCall } = walk;
    walk.pastCall ||= !!via?.callSiteExprs;
    walkFrom(walk, binding, path);
    walk.pastCall = pastCall;
  },
};

function walkFrom(
  walk: Walk,
  binding: Binding,
  properties: Opt<string> | true,
) {
  const seen = walk.pastCall ? walk.walkedPastCall : walk.walked;
  const key = getWalkKey(binding, properties);
  if (walk.found || seen.has(key) || isLeftOut(binding, properties)) return;
  seen.add(key);
  forEachStep(binding, properties, WALK_STEP, walk);
}

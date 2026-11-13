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
  createPassMemo,
  createPassPathMemo,
  createPathKeys,
  resetPassMemos,
} from "./cyclic-memo";
import { addKnownTagReasons, recordKnownTagPatchFacts } from "./known-tag";
import { isPatch } from "./marko-config";
import { addFunctionReasons } from "./module-registrations";
import {
  concat,
  every,
  first,
  forEach,
  type OneMany,
  type Opt,
  push,
  reduce,
  rest,
  some,
  Sorted,
  type SortedOpt,
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
import { createAnalysisSectionState } from "./state";

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

// Who reads a value through its aliases and derives links (a cyclic graph): what
// rereads it after resume, the `LANDS_*` bits of the reads it lands in, and those reads.
export interface Readers {
  reason: undefined | Reason;
  lands: number;
  reads?: SortedOpt<ReferencedExtra>;
  /**
   * Of its reads, those reached directly: not through a tag the value is passed
   * to (as its input, or back through its tag variable).
   */
  directReads?: SortedOpt<ReferencedExtra>;
  /** Of its reads, those reached past a tag it is passed to, which may be direct too. */
  deepReads?: SortedOpt<ReferencedExtra>;
  /** Of its reads, those it reaches as more than a dynamic tag's name. */
  asInput?: SortedOpt<ReferencedExtra>;
}

const kLandingOrder = Symbol("order a read first lands in");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kLandingOrder]?: number;
  }
}
let landings = 0;
// Reads in the order a value first lands in them: one order for every template a
// process compiles, as a value's reads cross into its callees'.
const readUtil = new Sorted(function compareReads(
  a: ReferencedExtra,
  b: ReferencedExtra,
) {
  return a[kLandingOrder]! - b[kLandingOrder]!;
});

// Lands in a retained read, where client code may read it as is.
const LANDS_RETAINED = 1;
// Reaches a retained read as more than a dynamic tag's name.
const LANDS_RETAINED_INPUT = 2;

const UNREAD: Readers = { reason: undefined, lands: 0 };

const ALWAYS_READ: Readers = { reason: ALWAYS, lands: 0 };

export const exprReaders = createPassMemo(computeExprReaders, UNREAD);

// A binding's answer is per asked path: the value itself, one of its
// properties (a destructured part), or the whole with every property.
export const bindingReaders = createPassPathMemo(computeBindingReaders, UNREAD);

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
export const [getContentSites] = createAnalysisSectionState(
  (section: Section) => {
    const { binding, properties } = section.derives!;
    let sites: Opt<t.MarkoTagExtra>;
    let deepSites: Opt<t.MarkoTagExtra>;
    const unseen = someReachedRead(
      binding,
      properties,
      (read, asInput, pastCall) => {
        if (read.isEffect) return false;
        // A read deriving nothing may hand it on to render anywhere: a spread, a
        // native element's `content=` or a class component's body.
        if (asInput) return !read.derives;
        if (pastCall) {
          deepSites = push(deepSites, read);
        } else {
          sites = push(sites, read);
        }
        return false;
      },
    );
    return unseen ? { unseen } : { unseen, sites, deepSites };
  },
);

// Whether the value lands somewhere retained (itself included) as more than a
// dynamic tag's name.
export function landsRetainedAsInput(extra: t.NodeExtra) {
  return !!extra.retained || some(exprReaders(extra).asInput, isRetained);
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
  return some(exprReaders(extra).reads, isReadInitialValue);
}

// Whether a read the value reaches passes `leaf`, given whether it reaches it
// as more than a dynamic tag's name.
export function someRead(
  readers: Readers,
  leaf: (read: ReferencedExtra, asInput: boolean) => boolean,
) {
  return some(readers.reads, (read) =>
    leaf(read, readUtil.has(readers.asInput, read)),
  );
}

// Who reads what content derives: the bindings it passes through, at its path.
export function getDerivedReaders({
  binding,
  properties,
}: NonNullable<Section["derives"]>) {
  return reduce(
    binding,
    (readers, derived) =>
      mergeReaders(readers, bindingReaders(derived, properties)),
    UNREAD,
  );
}

function computeExprReaders(extra: t.NodeExtra): Readers {
  let readers = isReturned(extra) ? ALWAYS_READ : UNREAD;
  forEachDerivedStep(extra, undefined, undefined, (binding, path, via) => {
    readers = mergeReaders(readers, readersOf(binding, path, via));
  });
  return readers;
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
  if (!exprs) return linked;
  // A callee's reads are its call site's: past the call.
  return linked.reason || linked.directReads
    ? {
        reason:
          linked.reason &&
          mapParamReason(binding.section.program, linked.reason, exprs, true),
        lands: linked.lands,
        reads: linked.reads,
        directReads: undefined,
        deepReads: readUtil.union(linked.deepReads, linked.directReads),
        asInput: linked.asInput,
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
  let readers: Readers = reason ? { reason, lands: 0 } : UNREAD;
  forEachStep(
    binding,
    properties,
    (read) => {
      readers = landIn(readers, read, binding, head);
    },
    (to, path, via) => {
      readers = mergeReaders(readers, readersOf(to, path, via));
    },
  );
  return readers;
}

// What a read the binding's value lands in adds: its bits, and an always reason
// where the template returns it or an effect reads it (other than as content).
function landIn(
  readers: Readers,
  read: ReferencedExtra,
  binding: Binding,
  head: string | undefined,
): Readers {
  readers = withLandingRead(readers, read, binding);
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
  const reads = readUtil.union(a.reads, b.reads);
  const directReads = readUtil.union(a.directReads, b.directReads);
  const deepReads = readUtil.union(a.deepReads, b.deepReads);
  const asInput = readUtil.union(a.asInput, b.asInput);
  if (isSameReaders(a, reason, lands, reads, directReads, deepReads, asInput))
    return a;
  if (isSameReaders(b, reason, lands, reads, directReads, deepReads, asInput))
    return b;
  return { reason, lands, reads, directReads, deepReads, asInput };
}

function withLands(readers: Readers, lands: number): Readers {
  return (readers.lands | lands) === readers.lands
    ? readers
    : {
        reason: readers.reason,
        lands: readers.lands | lands,
        reads: readers.reads,
        directReads: readers.directReads,
        deepReads: readers.deepReads,
        asInput: readers.asInput,
      };
}

// The bits a read the binding's value lands in adds: only a retained one counts.
function getLandingBits(read: ReferencedExtra, binding: Binding) {
  return read.retained
    ? isNamedBy(read, binding)
      ? LANDS_RETAINED
      : LANDS_RETAINED | LANDS_RETAINED_INPUT
    : 0;
}

function isSameReaders(
  readers: Readers,
  reason: Readers["reason"],
  lands: number,
  reads: Readers["reads"],
  directReads: Readers["directReads"],
  deepReads: Readers["deepReads"],
  asInput: Readers["asInput"],
) {
  return (
    reason === readers.reason &&
    lands === readers.lands &&
    reads === readers.reads &&
    directReads === readers.directReads &&
    deepReads === readers.deepReads &&
    asInput === readers.asInput
  );
}

// A read the value lands in, reached in the caller itself; adding one already held
// keeps the identity, as answers are shared across memo keys.
function withLandingRead(
  readers: Readers,
  read: ReferencedExtra,
  binding: Binding,
): Readers {
  read[kLandingOrder] ??= landings++;
  const reads = readUtil.add(readers.reads, read);
  const directReads = readUtil.add(readers.directReads, read);
  const asInput = every(binding.reads.get(read), isTagNameRead)
    ? readers.asInput
    : readUtil.add(readers.asInput, read);
  return isSameReaders(
    readers,
    readers.reason,
    readers.lands,
    reads,
    directReads,
    readers.deepReads,
    asInput,
  )
    ? readers
    : {
        reason: readers.reason,
        lands: readers.lands,
        reads,
        directReads,
        deepReads: readers.deepReads,
        asInput,
      };
}

function isReadInitialValue(read: ReferencedExtra) {
  return !!read.initialValue && some(read.derives, isReadAfterResume);
}

function isReadAfterResume(binding: Binding) {
  return !!bindingReaders(binding, true).reason;
}

function isRetained(read: ReferencedExtra) {
  return !!read.retained;
}

// A dynamic tag reads the value only as its name.
function isNamedBy(read: ReferencedExtra, binding: Binding) {
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
function forEachStep(
  binding: Binding,
  properties: Opt<string> | true,
  land: (read: ReferencedExtra) => void,
  reach: Reach,
) {
  // A property is read with the value it is read from.
  const aliased = binding.aliasOf;
  if (properties !== true && aliased) {
    reach(aliased, concat(binding.property, properties), undefined);
  }
  for (const read of binding.reads.keys()) {
    land(read);
    if (!read.isEffect) forEachDerivedStep(read, binding, properties, reach);
  }
  for (const alias of binding.aliases) reach(alias, properties, undefined);
  if (properties === true) {
    for (const part of binding.propertyAliases.values()) {
      reach(part, true, undefined);
    }
  } else if (properties !== undefined) {
    const property = first(properties);
    let part = binding.propertyAliases.get(property);
    if (part) reach(part, rest(properties), undefined);
    for (const alias of binding.aliases) {
      part = alias.propertyAliases.get(property);
      if (part) reach(part, rest(properties), undefined);
    }
  }
}

// The bindings a read derives, at the path into `part` it carries; none past the
// template's return, nor `part`'s own destructured parts (they answer for their path).
function forEachDerivedStep(
  read: t.NodeExtra,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
  reach: Reach,
) {
  if (!isReturned(read)) {
    forEach(read.derives, (binding) => {
      if (!isPartOf(binding, part)) {
        reach(binding, getDerivedPath(read, binding, part, properties), read);
      }
    });
  }
}

type Reach = (
  binding: Binding,
  path: Opt<string> | true,
  via: t.NodeExtra | undefined,
) => void;

function isReturned(extra: t.NodeExtra) {
  return extra === getProgram().node.extra.section!.returnValueExpr;
}

const getWalkKey = createPathKeys<Binding>();

// Whether `test` passes a read the value at `properties` reaches, given whether as more
// than a dynamic tag's name and whether past a call.
function someReachedRead(
  value: OneMany<Binding>,
  properties: Opt<string> | true,
  test: (read: ReferencedExtra, asInput: boolean, pastCall: boolean) => boolean,
) {
  let found = false;
  // Each binding and path is walked once, and once more past a call.
  const walked = new Set<object>();
  const walkedPastCall = new Set<object>();
  const walk = (
    binding: Binding,
    properties: Opt<string> | true,
    pastCall: boolean,
  ) => {
    const seen = pastCall ? walkedPastCall : walked;
    const key = getWalkKey(binding, properties);
    if (found || seen.has(key) || isLeftOut(binding, properties)) return;
    seen.add(key);
    forEachStep(
      binding,
      properties,
      (read) => {
        found ||= test(read, !isNamedBy(read, binding), pastCall);
      },
      (to, path, via) => walk(to, path, pastCall || !!via?.callSiteExprs),
    );
  };
  forEach(value, (binding) => walk(binding, properties, false));
  return found;
}

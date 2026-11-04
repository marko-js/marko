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
  resetPassMemos,
} from "./cyclic-memo";
import { addKnownTagReasons, recordKnownTagPatchFacts } from "./known-tag";
import { isPatch } from "./marko-config";
import { addFunctionReasons } from "./module-registrations";
import {
  concat,
  every,
  filter,
  first,
  forEach,
  type OneMany,
  type Opt,
  reduce,
  rest,
  some,
  Sorted,
  type SortedOpt,
} from "./optional";
import { ensurePatchReasonGroups } from "./patch/refresh";
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
    if (closure.sources && isDynamicClosure(section, closure)) {
      addReason(ensureSlot(closure, SlotKind.ClosureScopes), closure.sources);
      if (getDynamicClosureIndex(closure, section)) {
        addReason(
          ensureSlot(closure, SlotKind.ClosureSignalIndex, section),
          closure.sources,
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
// rereads it after resume, and the reads it lands in (an effect, an input).
export interface Readers {
  reason: undefined | Reason;
  reads?: SortedOpt<ReferencedExtra>;
  /**
   * Of its reads, those reached directly: not through a tag the value is passed
   * to (as its input, or back through its tag variable).
   */
  directReads?: SortedOpt<ReferencedExtra>;
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

const UNREAD: Readers = { reason: undefined };

const ALWAYS_READ: Readers = { reason: ALWAYS };

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
  return some(bindingReaders(binding, properties).asInput, isRetained);
}

// Where content passed to templates renders: the dynamic tags naming it (`sites`,
// and `deepSites` past a further call), or `unseen` where a read hands it on.
export function getContentSites({
  binding,
  properties,
}: NonNullable<Section["derives"]>) {
  const { reads, directReads, asInput } = reduce(
    binding,
    (readers, part) => mergeReaders(readers, bindingReaders(part, properties)),
    UNREAD,
  );
  const isNamedBy = (read: ReferencedExtra) =>
    !read.isEffect && !readUtil.has(asInput, read);
  return {
    unseen: some(asInput, isHandedOn),
    sites: filter(directReads, isNamedBy) as Opt<t.MarkoTagExtra>,
    deepSites: filter(
      reads,
      (read) => isNamedBy(read) && !readUtil.has(directReads, read),
    ) as Opt<t.MarkoTagExtra>,
  };
}

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
    (!extra.isEffect && some(exprReaders(extra).reads, isRetained))
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
  return readersOfDerives(extra, undefined);
}

// Who reads an expression: the template's return, or its derives bindings'
// readers, except `part`'s own destructured parts (they answer for their path).
function readersOfDerives(
  extra: t.NodeExtra,
  part: Binding | undefined,
  properties?: Opt<string> | true,
): Readers {
  if (extra === getProgram().node.extra.section!.returnValueExpr) {
    return ALWAYS_READ;
  }
  let readers = UNREAD;
  forEach(extra.derives, (binding) => {
    if (!isPartOf(binding, part)) {
      readers = mergeReaders(
        readers,
        readersOfDerived(extra, binding, part, properties),
      );
    }
  });
  return readers;
}

// Who reads a derives binding, in this program's terms.
function readersOfDerived(
  extra: t.NodeExtra,
  binding: Binding,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
): Readers {
  const linked = bindingReaders(
    binding,
    getDerivedPath(extra, binding, part, properties),
  );
  const exprs = extra.callSiteExprs;
  if (!exprs) return linked;
  // A callee's reads are its call site's: past the call.
  return linked.reason || linked.directReads
    ? {
        reason:
          linked.reason &&
          mapParamReason(binding.section.program, linked.reason, exprs, true),
        reads: linked.reads,
        directReads: undefined,
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
  const head =
    properties === true || properties === undefined
      ? undefined
      : first(properties);
  const reason = findSlot(binding)?.reason;
  let readers: Readers = reason ? { reason } : UNREAD;
  // A property is read with the value it is read from.
  const aliased = binding.aliasOf;
  if (properties !== true && aliased) {
    readers = mergeReaders(
      readers,
      bindingReaders(
        aliased,
        properties === undefined
          ? binding.property
          : concat(binding.property, properties),
      ),
    );
  }
  for (const expr of binding.reads.keys()) {
    if (expr.isEffect) {
      if (
        !(
          head === "content" &&
          expr.rendersContent &&
          bindingUtil.has(expr.spreadFrom, binding)
        )
      ) {
        readers = mergeReaders(readers, ALWAYS_READ);
      }
      readers = withLandingRead(readers, expr, binding);
      continue;
    }
    readers = withLandingRead(readers, expr, binding);
    readers = mergeReaders(
      readers,
      readersOfDerives(expr, binding, properties),
    );
  }
  for (const alias of binding.aliases) {
    readers = mergeReaders(readers, bindingReaders(alias, properties));
  }
  if (properties === undefined) return readers;
  if (properties === true) {
    for (const propBinding of binding.propertyAliases.values()) {
      readers = mergeReaders(readers, bindingReaders(propBinding, true));
    }
    return readers;
  }
  const property = first(properties);
  if (propertiesUtil.has(binding.excludeProperties, property)) return UNREAD;
  readers = mergePropertyReaders(readers, binding, property, properties);
  for (const alias of binding.aliases) {
    readers = mergePropertyReaders(readers, alias, property, properties);
  }
  return readers;
}

function mergePropertyReaders(
  readers: Readers,
  owner: Binding,
  property: string,
  properties: OneMany<string>,
) {
  const propBinding = owner.propertyAliases.get(property);
  return propBinding
    ? mergeReaders(readers, bindingReaders(propBinding, rest(properties)))
    : readers;
}

function mergeReaders(a: Readers, b: Readers): Readers {
  if (a === UNREAD) return b;
  if (b === UNREAD) return a;
  const reason = mergeSources(a.reason, b.reason);
  const reads = readUtil.union(a.reads, b.reads);
  const directReads = readUtil.union(a.directReads, b.directReads);
  const asInput = readUtil.union(a.asInput, b.asInput);
  if (isSameReaders(a, reason, reads, directReads, asInput)) return a;
  if (isSameReaders(b, reason, reads, directReads, asInput)) return b;
  return { reason, reads, directReads, asInput };
}

function isSameReaders(
  readers: Readers,
  reason: Readers["reason"],
  reads: Readers["reads"],
  directReads: Readers["directReads"],
  asInput: Readers["asInput"],
) {
  return (
    reason === readers.reason &&
    reads === readers.reads &&
    directReads === readers.directReads &&
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
  return isSameReaders(readers, readers.reason, reads, directReads, asInput)
    ? readers
    : { reason: readers.reason, reads, directReads, asInput };
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

function isTagNameRead({ extra }: Read) {
  return !!extra.exprRoot?.tagName;
}

// A read deriving nothing may hand the value on to render anywhere: a spread, a
// native element's `content=` or a class component's body.
function isHandedOn(read: ReferencedExtra) {
  return !read.isEffect && !read.derives;
}

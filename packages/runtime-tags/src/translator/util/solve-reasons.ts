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
import { addKnownTagReasons } from "./known-tag";
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
} from "./optional";
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
  getConstantBindingsInFunction,
  getReferencedBindingsInFunction,
  getBindingsDerivedFrom,
  readsProperty,
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
    forEachSectionReverse(solveSectionReasons);
  } while (reasonsVersion !== getReasonsVersion());
  getFunctionReadsByExpression().clear();
}

function solveSectionReasons(section: Section) {
  addKnownTagReasons(section);
  mergeSlotReasons(section);
  ensureSectionReasonGroups(section);
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
  if (
    !isSupersetSources(member, partner) ||
    hasReadIntermediate(member, partner, new Set())
  ) {
    // A member of an ancestor, even one always written, is read through the
    // owner chain, so its partners' changes need that chain written.
    if (member.section !== section) {
      addOwnerReason(
        section,
        member.section,
        mergeSources(member.sources, partner.sources),
      );
    }
    addReason(ensureSlot(member), partner.sources);
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
function getBranchExprReasonUntil(section: Section, ancestor: Section) {
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

// Who reads a value through its aliases and derives links (a cyclic graph):
// what rereads it after resume, and the `LANDS_*` bits of the reads it lands in.
interface Readers {
  reason: undefined | Reason;
  lands: number;
  /** The content sites rendering it, and its deep sites past a further call. */
  sites?: Opt<t.MarkoTagExtra>;
  deepSites?: Opt<t.MarkoTagExtra>;
}

// Lands in a retained read, where client code may read it as is.
const LANDS_RETAINED = 1;
// Reaches a retained read as more than a dynamic tag's name.
const LANDS_RETAINED_INPUT = 2;
// Handed on by a read that derives nothing, so it may render anywhere.
const LANDS_UNSEEN = 4;

const UNREAD: Readers = { reason: undefined, lands: 0 };

const ALWAYS_READ: Readers = { reason: ALWAYS, lands: 0 };

const UNSEEN_READ: Readers = { reason: undefined, lands: LANDS_UNSEEN };

const RETAINED_TAG_NAME_READ: Readers = {
  reason: undefined,
  lands: LANDS_RETAINED,
};

const RETAINED_INPUT_READ: Readers = {
  reason: undefined,
  lands: LANDS_RETAINED | LANDS_RETAINED_INPUT,
};

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

// Where content passed to templates renders: `sites` and `deepSites` (see
// `Readers`), or `unseen` where a read hands it on.
export function getContentSites({
  binding,
  properties,
}: NonNullable<Section["derives"]>) {
  const { lands, sites, deepSites } = reduce(
    binding,
    (readers, part) => mergeReaders(readers, bindingReaders(part, properties)),
    UNREAD,
  );
  return { unseen: !!(lands & LANDS_UNSEEN), sites, deepSites };
}

// Whether the value lands somewhere retained (itself included), where client
// code may read a function as is.
export function landsRetained(extra: t.NodeExtra) {
  return (
    !!extra.retained ||
    (!extra.isEffect && !!(exprReaders(extra).lands & LANDS_RETAINED))
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
  // Past another call, a template's root edge follows that call's place.
  return exprs && (linked.reason || linked.sites)
    ? {
        reason:
          linked.reason &&
          mapParamReason(binding.section.program, linked.reason, exprs, true),
        lands: linked.lands,
        deepSites: mergeSites(linked.deepSites, linked.sites),
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
    !readsProperty(read) &&
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
  let readers: Readers = reason ? { reason, lands: 0 } : UNREAD;
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
      continue;
    }
    readers = mergeReaders(readers, landingReaders(expr, binding));
    readers = mergeReaders(readers, renderingReaders(expr, binding));
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
  const lands = a.lands | b.lands;
  const sites = mergeSites(a.sites, b.sites);
  const deepSites = mergeSites(a.deepSites, b.deepSites);
  if (
    reason === a.reason &&
    lands === a.lands &&
    sites === a.sites &&
    deepSites === a.deepSites
  ) {
    return a;
  }
  if (
    reason === b.reason &&
    lands === b.lands &&
    sites === b.sites &&
    deepSites === b.deepSites
  ) {
    return b;
  }
  return { reason, lands, sites, deepSites };
}

function mergeSites(
  a: Opt<t.MarkoTagExtra>,
  b: Opt<t.MarkoTagExtra>,
): Opt<t.MarkoTagExtra> {
  return reduce(
    b,
    (sites, site) =>
      some(sites, (held) => held === site) ? sites : push(sites, site),
    a,
  );
}

// What a read the binding's value lands in adds: only a retained one counts.
function landingReaders(read: ReferencedExtra, binding: Binding): Readers {
  return !read.retained
    ? UNREAD
    : every(binding.reads.get(read), isTagNameRead)
      ? RETAINED_TAG_NAME_READ
      : RETAINED_INPUT_READ;
}

function isTagNameRead({ extra }: Read) {
  return !!extra.exprRoot?.tagName;
}

// A dynamic tag naming the value, or what holds it as `content`, renders it; a
// read deriving nothing may hand it on to render anywhere.
function renderingReaders(expr: ReferencedExtra, binding: Binding): Readers {
  const reads = binding.reads.get(expr);
  if (reads && every(reads, isTagNameRead)) {
    return {
      reason: undefined,
      lands: 0,
      sites: first(reads).extra.exprRoot.tagName,
    };
  }
  // So does a spread, a native element's `content=` or a class component's body,
  // even where it renders the content first inside an element.
  return expr.derives ? UNREAD : UNSEEN_READ;
}

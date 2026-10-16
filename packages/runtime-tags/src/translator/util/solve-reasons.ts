import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import {
  type Binding,
  BindingType,
  type Intersection,
  type ParamBinding,
  bindingUtil,
  getCanonicalBinding,
  isDirectAlias,
  isIndexProperty,
  propsUtil,
  someUpToAliasRoot,
} from "./bindings";
import { createAnalysisMemo, createAnalysisPathMemo } from "./cyclic-memo";
import { addKnownTagReasons } from "./known-tag";
import { addFunctionReasons } from "./module-registrations";
import {
  concat,
  first,
  forEach,
  type OneMany,
  type Opt,
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
  type ReferencedExtra,
  getFunctionReadsByExpression,
  getConstantBindingsInFunction,
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
  isInParams,
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
    // Answers read the reasons of the moment, so each pass asks afresh.
    resetExtraReaders();
    resetBindingReaders();
    forEachSection((section) =>
      addIntersectionReasons(section, intersectionsBySection.get(section)),
    );
    forEachSection(addClosureReasons);
    addRegisteredFnReasons(getFunctionReadsByExpression());
    forEachSectionReverse(solveSectionReasons);
  } while (reasonsVersion !== getReasonsVersion());
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
    !findSlot(member)?.reason?.always &&
    (!isSupersetSources(member, partner) ||
      hasReadIntermediate(member, partner, new Set()))
  ) {
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
      bindingUtil.has(partner.sources!.param, from as ParamBinding)
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
    (binding) => !someUpToAliasRoot(binding, isInParams, own.param),
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
    forEach(section.callSections, (callSection) => {
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

// A closure a section reads is read whenever a branch or content between the
// read and the closure's own section is created, unless that recomputes it.
function addClosureReasons(section: Section) {
  forEach(section.referencedClosures, (closure) => {
    const sourceSection = closure.section;
    const branchesReason = getBranchExprReasonUntil(section, sourceSection);
    addReason(
      ensureSlot(closure),
      branchesReason?.always
        ? branchesReason
        : withoutOwnSources(closure, branchesReason),
    );

    if (isDynamicClosure(section, closure)) {
      addOwnerReason(section, sourceSection, branchesReason);

      // A constant never changes, so no signal subscribes to it.
      if (closure.sources && closure.type !== BindingType.constant) {
        addReason(ensureSlot(closure, SlotKind.ClosureScopes), closure.sources);
        if (getDynamicClosureIndex(closure, section)) {
          addReason(
            ensureSlot(closure, SlotKind.ClosureSignalIndex, section),
            closure.sources,
          );
        }
      }
    }
  });
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
// what rereads it after resume, and the reads it lands in (an effect, an input).
interface Readers {
  reason: undefined | Reason;
  reads: ReadonlySet<ReferencedExtra> | undefined;
}

const UNREAD: Readers = { reason: undefined, reads: undefined };

const ALWAYS_READ: Readers = {
  reason: ALWAYS,
  reads: undefined,
};

const [extraReaders, resetExtraReaders] = createAnalysisMemo(
  computeExtraReaders,
  UNREAD,
);

// A binding's answer is per asked path: the value itself, one of its
// properties (a destructured part), or the whole with every property.
const [bindingReaders, resetBindingReaders] = createAnalysisPathMemo(
  computeBindingReaders,
  UNREAD,
);

export function getReasonForBinding(
  binding: Binding,
  properties?: Opt<string> | true,
): undefined | Reason {
  return bindingReaders(binding, properties).reason;
}

// An expression's `getReasonForBinding`: what rereads its value after resume,
// which the server writes it for.
export function getReasonForExpr(extra: t.NodeExtra): undefined | Reason {
  return extra.isEffect ? ALWAYS : extraReaders(extra).reason;
}

// Whether the value lands somewhere retained (itself included), where client
// code may read a function as is.
export function landsRetained(extra: t.NodeExtra) {
  if (extra.retained) return true;
  if (!extra.isEffect) {
    const { reads } = extraReaders(extra);
    if (reads) {
      for (const read of reads) if (read.retained) return true;
    }
  }
  return false;
}

function computeExtraReaders(extra: t.NodeExtra): Readers {
  return readersOfDerives(extra, undefined);
}

// Who reads an expression: the template's return, or its derives bindings'
// readers, except `part`'s own destructured parts (they answer for their path).
function readersOfDerives(
  extra: t.NodeExtra,
  part: Binding | undefined,
  properties?: Opt<string> | true,
): Readers {
  if (extra === getProgram().node.extra?.section!.returnValueExpr) {
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
  return linked.reason && exprs
    ? {
        reason: mapParamReason(
          binding.section.program,
          linked.reason,
          exprs,
          true,
        ),
        reads: linked.reads,
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
    read.props === undefined &&
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
  let readers: Readers = reason ? { reason, reads: undefined } : UNREAD;
  // A property is read with the value it is read from.
  const aliased = binding.aliasOf;
  if (properties !== true && aliased) {
    readers = mergeReaders(
      readers,
      bindingReaders(
        aliased,
        properties === undefined
          ? binding.property
          : concat(binding.property, properties as Opt<string>),
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
    readers = mergeReaders(
      withLandingRead(readers, expr),
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
  if (propsUtil.has(binding.excludeProperties, property)) return UNREAD;
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
  const reads = unionReads(a.reads, b.reads);
  if (reason === a.reason && reads === a.reads) return a;
  if (reason === b.reason && reads === b.reads) return b;
  return { reason, reads };
}

// Answers are shared across memo keys: adding copies (at most once per
// merge), and adding nothing new keeps the identity.
function withLandingRead(readers: Readers, read: ReferencedExtra): Readers {
  return readers.reads?.has(read)
    ? readers
    : { reason: readers.reason, reads: new Set(readers.reads).add(read) };
}

function unionReads(
  a: ReadonlySet<ReferencedExtra> | undefined,
  b: ReadonlySet<ReferencedExtra> | undefined,
) {
  if (!a || !b || a === b) return a || b;
  let result: Set<ReferencedExtra> | undefined;
  for (const read of b) {
    if (!a.has(read)) (result ??= new Set(a)).add(read);
  }
  return result || a;
}

import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { resolveFunctionReason } from "../visitors/function";
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
  someUpstream,
} from "./bindings";
import {
  createCyclicMemo,
  createCyclicPathMemo,
  type MemoPath,
} from "./cyclic-memo";
import { getValueInputs } from "./finalize-references";
import { finalizeKnownTags } from "./known-tag";
import { concat, first, forEach, type Opt, rest, some } from "./optional";
import {
  addOwnerReason,
  addReason,
  finalizeReason,
  getReasonsVersion,
  getSourcesForDownstream,
  getSourcesForExpr,
  mapParamReason,
  type Reason,
} from "./reasons";
import {
  type ReferencedExtra,
  getFunctionReadsByExpression,
  isReferencedExtra,
} from "./references";
import {
  finalizeParamReasonGroups,
  forEachSection,
  forEachSectionReverse,
  getDynamicClosureIndex,
  getRendererReason,
  isDynamicClosure,
  isSameOrChildSection,
  type Section,
} from "./sections";
import { findSlot, getSlot, SlotKind } from "./slots";
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
  // Rules that follow other reasons repeat until none moves; every write merges,
  // so reasons only grow and this settles, even through cycles.
  let reasonsVersion: number;
  do {
    reasonsVersion = getReasonsVersion();
    resetReaders();
    forEachSection((section) =>
      addIntersectionReasons(section, intersectionsBySection.get(section)),
    );
    forEachSection(addClosureReasons);
    addRegisteredFnReasons(getFunctionReadsByExpression());
    forEachSectionReverse(finalizeSectionReasons);
  } while (reasonsVersion !== getReasonsVersion());
}

function finalizeSectionReasons(section: Section) {
  finalizeKnownTags(section);
  finalizeReason(section);
  finalizeParamReasonGroups(section);
}

// Serializes an intersection member for its partners' sources, unless those
// changes always recompute it.
function addIntersectionReasons(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  if (intersections) {
    for (const intersection of intersections) {
      // Every pair merges even when a member is already serialized: that leaves
      // its covering reason unchanged, and its owners may still need the pair.
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
    if (!isSameOrChildSection(section, member.section)) {
      addOwnerReason(
        section,
        member.section,
        mergeSources(member.sources, partner.sources),
      );
    }
    addReason(getSlot(member), partner.sources);
  }
}

// Whether `member` reads `partner`'s sources through a serialized binding,
// whose dirty check then holds the resumed value and can skip `member`.
function hasReadIntermediate(
  member: Binding,
  partner: Binding,
  seen: Set<Binding>,
): boolean {
  return some(getValueInputs(member), (input) => {
    if (seen.has(input) || !sharesSources(input, partner)) return false;
    seen.add(input);
    if (
      bindingUtil.has(partner.sources!.state, input) ||
      bindingUtil.has(partner.sources!.param, input as ParamBinding)
    ) {
      return false;
    }
    return (
      !!findSlot(input)?.reason || hasReadIntermediate(input, partner, seen)
    );
  });
}

// `sources` less the closure's own, whose change recomputes it before creating
// a branch that reads it, unless a serialized binding's dirty check skips that.
function withoutOwnSources(closure: Binding, sources: Sources | undefined) {
  const own = closure.sources;
  if (!sources || !own || hasReadIntermediate(closure, closure, new Set())) {
    return sources;
  }
  const state = bindingUtil.difference(sources.state, own.state);
  const param = bindingUtil.filter(
    sources.param,
    (binding) => !someUpstream(binding, isInParams, own.param),
  );
  return withSources(sources, state, param);
}

// What creates a section anew on the client: a branch's expression, or for
// content given to a tag, what registers it and the expression passing it.
function getSectionUpstreamReason(section: Section) {
  const { downstream, upstreamExpression } = section;
  if (downstream) {
    const registerReason = getRendererReason(section) || undefined;
    if (registerReason === true) return true;
    let reason = mergeSources(
      registerReason,
      getSourcesForDownstream(downstream),
    );
    // A direct call renders the body in place, so what creates a section from
    // the call up to the define (or the body, for a recursive call) creates it.
    forEach(section.callSections, (callSection) => {
      reason = mergeSources(
        reason,
        getUpstreamReasonUntil(
          callSection,
          isSameOrChildSection(section, callSection)
            ? section
            : section.parent!,
        ),
      );
    });
    return reason;
  }
  return !upstreamExpression || getSourcesForExpr(upstreamExpression);
}

// What creates `section`, or a section between it and `ancestor`, anew on the
// client (always, still with its sources, when anything can).
function getUpstreamReasonUntil(section: Section, ancestor: Section) {
  let reason: Sources | undefined;
  for (let cur = section; cur !== ancestor; cur = cur.parent!) {
    const upstream = getSectionUpstreamReason(cur);
    if (upstream) {
      reason = mergeSources(reason, upstream === true ? ALWAYS : upstream);
    }
  }
  return reason;
}

// Serializes each closure a section reads for every branch or content between
// the read and the closure's own section, unless creating it recomputes the closure.
function addClosureReasons(section: Section) {
  forEach(section.referencedClosures, (closure) => {
    // mark bindings that need to be serialized due to being closed over by stateful sections
    const sourceSection = closure.section;
    const branchesReason = getUpstreamReasonUntil(section, sourceSection);
    addReason(
      getSlot(closure),
      branchesReason?.always
        ? branchesReason
        : withoutOwnSources(closure, branchesReason),
    );

    if (isDynamicClosure(section, closure)) {
      addOwnerReason(section, sourceSection, branchesReason);

      // A constant never changes, so no signal subscribes to it.
      if (closure.sources && closure.type !== BindingType.constant) {
        addReason(getSlot(closure, SlotKind.ClosureScopes), closure.sources);
        if (getDynamicClosureIndex(closure, section)) {
          addReason(
            getSlot(closure, SlotKind.ClosureSignalIndex, section),
            closure.sources,
          );
        }
      }
    }
  });
}

// A registered function serializes what it reads, owners included.
function addRegisteredFnReasons(
  fnReadsByExpression: ReturnType<typeof getFunctionReadsByExpression>,
) {
  resolveFunctionReason();
  for (const exprFnReads of fnReadsByExpression.values()) {
    for (const fn of exprFnReads.keys()) {
      const reason = fn.reason;
      if (reason) {
        const addRead = (binding: Binding) => {
          addReason(getSlot(binding), reason);
          if (binding.section !== fn.section) {
            addOwnerReason(fn.section, binding.section, reason);
          }
        };
        forEach(fn.referencedBindingsInFunction, addRead);
        forEach(fn.constantBindingsInFunction, addRead);
      }
    }
  }
}

// How a value serializes, through its aliases and downstream links (a
// cyclic graph): the reason its scope values serialize, and the reads it
// lands in, each recording its position (an effect, a dynamic tag's input).
interface Readers {
  reason: undefined | Reason;
  reads: ReadonlySet<ReferencedExtra> | undefined;
}

const UNREAD: Readers = { reason: undefined, reads: undefined };

const ALWAYS_READ: Readers = {
  reason: ALWAYS,
  reads: undefined,
};

let extraReaders: (extra: t.NodeExtra) => Readers;

let bindingReaders: (binding: Binding, path: MemoPath) => Readers;

resetReaders();

// Answers read the reasons of the moment, so each pass that grows them
// asks afresh.
function resetReaders() {
  extraReaders = createCyclicMemo(computeExtraReaders, UNREAD);
  // A binding's answer is per asked path: the value itself, one of its
  // properties (a destructured part), or the whole with every property.
  bindingReaders = createCyclicPathMemo(computeBindingReaders, UNREAD);
}

// Resume: do the value's scope values serialize, and why.
export function getReasonForExtra(extra: t.NodeExtra): undefined | Reason {
  return readersOfExtra(extra).reason;
}

export function getReasonForBinding(
  binding: Binding,
  properties?: Opt<string> | true,
): undefined | Reason {
  return readersOfBinding(binding, properties).reason;
}

// Registration: does the value reach the client at all, by its reasons or
// by landing where it is written as is.
export function getValueReason(extra: t.NodeExtra): undefined | Reason {
  if (extra.retained) return ALWAYS;
  const { reason, reads } = readersOfExtra(extra);
  if (reads) {
    for (const read of reads) if (read.retained) return ALWAYS;
  }
  return reason;
}

function readersOfExtra(extra: t.NodeExtra): Readers {
  if (extra.isEffect) return ALWAYS_READ;
  const serialization = extraReaders(extra);
  const reads = isReferencedExtra(extra)
    ? addLandingRead(serialization.reads, extra)
    : serialization.reads;
  return reads === serialization.reads
    ? serialization
    : { reason: serialization.reason, reads };
}

function readersOfBinding(
  binding: Binding,
  properties: Opt<string> | true | undefined,
): Readers {
  return bindingReaders(binding, properties);
}

function computeExtraReaders(extra: t.NodeExtra): Readers {
  return readersOfDownstreams(extra, undefined);
}

// What an expression serializes for: the template's return, or what the
// bindings it feeds serialize for, except `part`'s own destructured parts
// (they answer for their own path).
function readersOfDownstreams(
  extra: t.NodeExtra,
  part: Binding | undefined,
  properties?: Opt<string> | true,
): Readers {
  if (extra === getProgram().node.extra?.section!.returnValueExpr) {
    return ALWAYS_READ;
  }
  let serialization = UNREAD;
  forEach(extra.downstream, (binding) => {
    if (!isPartOf(binding, part)) {
      serialization = mergeReaders(
        serialization,
        readersOfDownstream(extra, binding, part, properties),
      );
    }
  });
  return serialization;
}

// What a downstream binding serializes for, in this program's terms.
function readersOfDownstream(
  extra: t.NodeExtra,
  binding: Binding,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
): Readers {
  const linked = readersOfBinding(
    binding,
    getDownstreamPath(extra, binding, part, properties),
  );
  const exprs = extra.downstreamExprs;
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

// Where a path into `part` lands in a downstream `binding`: the same path when
// it is `part` or spreads it as is, an item's path when iterating it, or whole.
function getDownstreamPath(
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
  return !!value && binding.upstreamAlias === value && !isDirectAlias(binding);
}

// An effect runs on resume with the values it references, unless it reads back
// a value its tag retained.
export function readsValuesOnResume(expr: t.NodeExtra) {
  return !!expr.isEffect && !expr.retained;
}

export function addAlwaysRead(binding: Binding) {
  addReason(getSlot(binding), ALWAYS);
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
  let serialization: Readers = reason ? { reason, reads: undefined } : UNREAD;
  // A property serializes with the value it is read from.
  const upstream = binding.upstreamAlias;
  if (properties !== true && upstream) {
    serialization = mergeReaders(
      serialization,
      readersOfBinding(
        upstream,
        properties === undefined
          ? binding.property
          : concat(binding.property, properties as Opt<string>),
      ),
    );
  }
  for (const expr of binding.reads) {
    if (expr.isEffect) {
      if (
        !(
          head === "content" &&
          expr.rendersContent &&
          bindingUtil.has(expr.spreadFrom, binding)
        )
      ) {
        serialization = mergeReaders(serialization, ALWAYS_READ);
      }
      continue;
    }
    const reads = addLandingRead(serialization.reads, expr);
    if (reads !== serialization.reads) {
      serialization = { reason: serialization.reason, reads };
    }
    serialization = mergeReaders(
      serialization,
      readersOfDownstreams(expr, binding, properties),
    );
  }
  for (const alias of binding.aliases) {
    serialization = mergeReaders(
      serialization,
      readersOfBinding(alias, properties),
    );
  }
  if (properties === undefined) return serialization;
  if (properties === true) {
    for (const propBinding of binding.propertyAliases.values()) {
      serialization = mergeReaders(
        serialization,
        readersOfBinding(propBinding, true),
      );
    }
    return serialization;
  }
  const property = first(properties);
  if (propsUtil.has(binding.excludeProperties, property)) return UNREAD;
  const propBinding = binding.propertyAliases.get(property);
  if (propBinding) {
    serialization = mergeReaders(
      serialization,
      readersOfBinding(propBinding, rest(properties)),
    );
  }
  for (const alias of binding.aliases) {
    const propBinding = alias.propertyAliases.get(property);
    if (propBinding) {
      serialization = mergeReaders(
        serialization,
        readersOfBinding(propBinding, rest(properties)),
      );
    }
  }
  return serialization;
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
function addLandingRead(
  reads: ReadonlySet<ReferencedExtra> | undefined,
  read: ReferencedExtra,
) {
  return reads?.has(read) ? reads : new Set(reads).add(read);
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

import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { resolveFunctionRegisterReasons } from "../visitors/function";
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
import { getAccessorPrefix } from "./get-accessor-enums";
import { finalizeKnownTags } from "./known-tag";
import { concat, first, forEach, type Opt, rest, some } from "./optional";
import {
  type ReferencedExtra,
  getFunctionReadsByExpression,
  isReferencedExtra,
} from "./references";
import {
  finalizeParamSerializeReasonGroups,
  forEachSection,
  forEachSectionReverse,
  getDynamicClosureIndex,
  getSectionRegisterReasons,
  isDynamicClosure,
  isSameOrChildSection,
  type Section,
} from "./sections";
import {
  addOwnerSerializeReason,
  addSerializeReason,
  finalizeSerializeReason,
  getSerializeReason,
  getSerializeReasonsVersion,
  getSerializeSourcesForDownstream,
  getSerializeSourcesForExpr,
  isForceSerialized,
  mapParamReason,
  type SerializeReason,
} from "./serialize-reasons";
import {
  FORCED,
  type Sources,
  isInParams,
  isSupersetSources,
  mergeSources,
  sharesSources,
  withSources,
} from "./sources";

export function solveSerializeReasons(
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  // Rules that follow other reasons repeat until none moves; every write merges,
  // so reasons only grow and this settles, even through cycles.
  let reasonsVersion: number;
  do {
    reasonsVersion = getSerializeReasonsVersion();
    resetSerializations();
    forEachSection((section) =>
      addIntersectionSerializeReasons(
        section,
        intersectionsBySection.get(section),
      ),
    );
    forEachSection(addClosureSerializeReasons);
    addRegisteredFnSerializeReasons(getFunctionReadsByExpression());
    forEachSectionReverse((section) => {
      finalizeKnownTags(section);
      finalizeSerializeReason(section);
      finalizeParamSerializeReasonGroups(section);
    });
  } while (reasonsVersion !== getSerializeReasonsVersion());
}

// Serializes an intersection member for its partners' sources, unless those
// changes always recompute it.
function addIntersectionSerializeReasons(
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
    !isForceSerialized(section, member) &&
    (!isSupersetSources(member, partner) ||
      hasSerializedIntermediate(member, partner, new Set()))
  ) {
    if (!isSameOrChildSection(section, member.section)) {
      addOwnerSerializeReason(
        section,
        member.section,
        mergeSources(member.sources, partner.sources),
      );
    }
    addSerializeReason(member.section, partner.sources, member);
  }
}

// Whether `member` reads `partner`'s sources through a serialized binding,
// whose dirty check then holds the resumed value and can skip `member`.
function hasSerializedIntermediate(
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
      !!getSerializeReason(input.section, input) ||
      hasSerializedIntermediate(input, partner, seen)
    );
  });
}

// `sources` less the closure's own, whose change recomputes it before creating
// a branch that reads it, unless a serialized binding's dirty check skips that.
function withoutOwnSources(closure: Binding, sources: Sources | undefined) {
  const own = closure.sources;
  if (
    !sources ||
    !own ||
    hasSerializedIntermediate(closure, closure, new Set())
  ) {
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
    const registerReason = getSectionRegisterReasons(section) || undefined;
    if (registerReason === true) return true;
    let reason = mergeSources(
      registerReason,
      getSerializeSourcesForDownstream(downstream),
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
  return !upstreamExpression || getSerializeSourcesForExpr(upstreamExpression);
}

// What creates `section`, or a section between it and `ancestor`, anew on the
// client (forced, still with its sources, when anything can).
function getUpstreamReasonUntil(section: Section, ancestor: Section) {
  let reason: Sources | undefined;
  for (let cur = section; cur !== ancestor; cur = cur.parent!) {
    const upstream = getSectionUpstreamReason(cur);
    if (upstream) {
      reason = mergeSources(reason, upstream === true ? FORCED : upstream);
    }
  }
  return reason;
}

// Serializes each closure a section reads for every branch or content between
// the read and the closure's own section, unless creating it recomputes the closure.
function addClosureSerializeReasons(section: Section) {
  forEach(section.referencedClosures, (closure) => {
    // mark bindings that need to be serialized due to being closed over by stateful sections
    const sourceSection = closure.section;
    const branchesReason = getUpstreamReasonUntil(section, sourceSection);
    addSerializeReason(
      sourceSection,
      branchesReason?.forced
        ? branchesReason
        : withoutOwnSources(closure, branchesReason),
      closure,
    );

    if (isDynamicClosure(section, closure)) {
      addOwnerSerializeReason(section, sourceSection, branchesReason);

      // A constant never changes, so no signal subscribes to it.
      if (closure.sources && closure.type !== BindingType.constant) {
        addSerializeReason(
          sourceSection,
          closure.sources,
          closure,
          getAccessorPrefix().ClosureScopes,
        );
        if (getDynamicClosureIndex(closure, section)) {
          addSerializeReason(
            section,
            closure.sources,
            closure,
            getAccessorPrefix().ClosureSignalIndex,
          );
        }
      }
    }
  });
}

// A registered function serializes what it reads, owners included.
function addRegisteredFnSerializeReasons(
  fnReadsByExpression: ReturnType<typeof getFunctionReadsByExpression>,
) {
  resolveFunctionRegisterReasons();
  for (const exprFnReads of fnReadsByExpression.values()) {
    for (const fn of exprFnReads.keys()) {
      const reason = fn.registerReason;
      if (reason) {
        const addRead = (binding: Binding) => {
          addSerializeReason(binding.section, reason, binding);
          if (binding.section !== fn.section) {
            addOwnerSerializeReason(fn.section, binding.section, reason);
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
interface Serialization {
  reason: undefined | SerializeReason;
  reads: ReadonlySet<ReferencedExtra> | undefined;
}

const UNSERIALIZED: Serialization = { reason: undefined, reads: undefined };

const FORCED_SERIALIZATION: Serialization = {
  reason: FORCED,
  reads: undefined,
};

let extraSerialization: (extra: t.NodeExtra) => Serialization;

let bindingSerialization: (binding: Binding, path: MemoPath) => Serialization;

resetSerializations();

// Answers read the reasons of the moment, so each pass that grows them
// asks afresh.
function resetSerializations() {
  extraSerialization = createCyclicMemo(
    computeExtraSerialization,
    UNSERIALIZED,
  );
  // A binding's answer is per asked path: the value itself, one of its
  // properties (a destructured part), or the whole with every property.
  bindingSerialization = createCyclicPathMemo(
    computeBindingSerialization,
    UNSERIALIZED,
  );
}

// Resume: do the value's scope values serialize, and why.
export function getAllSerializeReasonsForExtra(
  extra: t.NodeExtra,
): undefined | SerializeReason {
  return serializationForExtra(extra).reason;
}

export function getAllSerializeReasonsForBinding(
  binding: Binding,
  properties?: Opt<string> | true,
): undefined | SerializeReason {
  return serializationForBinding(binding, properties).reason;
}

// Registration: does the value reach the client at all, by its reasons or
// by landing where it is written as is.
export function getRegisterReasonForExtra(
  extra: t.NodeExtra,
): undefined | SerializeReason {
  if (extra.forceRegister) return FORCED;
  const { reason, reads } = serializationForExtra(extra);
  if (reads) {
    for (const read of reads) if (read.forceRegister) return FORCED;
  }
  return reason;
}

function serializationForExtra(extra: t.NodeExtra): Serialization {
  if (extra.isEffect) return FORCED_SERIALIZATION;
  const serialization = extraSerialization(extra);
  const reads = isReferencedExtra(extra)
    ? addSerializationRead(serialization.reads, extra)
    : serialization.reads;
  return reads === serialization.reads
    ? serialization
    : { reason: serialization.reason, reads };
}

function serializationForBinding(
  binding: Binding,
  properties: Opt<string> | true | undefined,
): Serialization {
  return bindingSerialization(binding, properties);
}

function computeExtraSerialization(extra: t.NodeExtra): Serialization {
  return readSerialization(extra, undefined);
}

// What an expression serializes for: the template's return, or what the
// bindings it feeds serialize for, except `part`'s own destructured parts
// (they answer for their own path).
function readSerialization(
  extra: t.NodeExtra,
  part: Binding | undefined,
  properties?: Opt<string> | true,
): Serialization {
  if (extra === getProgram().node.extra?.section!.returnValueExpr) {
    return FORCED_SERIALIZATION;
  }
  let serialization = UNSERIALIZED;
  forEach(extra.downstream, (binding) => {
    if (!isPartOf(binding, part)) {
      serialization = mergeSerialization(
        serialization,
        downstreamSerialization(extra, binding, part, properties),
      );
    }
  });
  return serialization;
}

// What a downstream binding serializes for, in this program's terms.
function downstreamSerialization(
  extra: t.NodeExtra,
  binding: Binding,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
): Serialization {
  const linked = serializationForBinding(
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

// An effect runs on resume with the values it references, except a native tag
// spread's, which reads only the element data `_attrs` wrote.
export function readsValuesOnResume(expr: t.NodeExtra) {
  return !!expr.isEffect && !expr.nativeTagSpread;
}

export function forceSerialize(binding: Binding) {
  addSerializeReason(binding.section, FORCED, binding);
}

function computeBindingSerialization(
  binding: Binding,
  properties: Opt<string> | true | undefined,
): Serialization {
  const head =
    properties === true || properties === undefined
      ? undefined
      : first(properties);
  const reason = getSerializeReason(binding.section, binding);
  let serialization: Serialization = reason
    ? { reason, reads: undefined }
    : UNSERIALIZED;
  // A property serializes with the value it is read from.
  const upstream = binding.upstreamAlias;
  if (properties !== true && upstream) {
    serialization = mergeSerialization(
      serialization,
      serializationForBinding(
        upstream,
        properties === undefined
          ? binding.property
          : concat(binding.property, properties as Opt<string>),
      ),
    );
  }
  for (const expr of binding.reads) {
    if (expr.isEffect) {
      // A native tag renders the `content` of a value it only spreads as is,
      // sending just its key (on `<meta>` it is a plain attribute).
      if (
        !(
          head === "content" &&
          expr.nativeTagSpread &&
          bindingUtil.has(expr.spreadFrom, binding)
        )
      ) {
        serialization = mergeSerialization(serialization, FORCED_SERIALIZATION);
      }
      continue;
    }
    const reads = addSerializationRead(serialization.reads, expr);
    if (reads !== serialization.reads) {
      serialization = { reason: serialization.reason, reads };
    }
    serialization = mergeSerialization(
      serialization,
      readSerialization(expr, binding, properties),
    );
  }
  for (const alias of binding.aliases) {
    serialization = mergeSerialization(
      serialization,
      serializationForBinding(alias, properties),
    );
  }
  if (properties === undefined) return serialization;
  if (properties === true) {
    for (const propBinding of binding.propertyAliases.values()) {
      serialization = mergeSerialization(
        serialization,
        serializationForBinding(propBinding, true),
      );
    }
    return serialization;
  }
  const property = first(properties);
  if (propsUtil.has(binding.excludeProperties, property)) return UNSERIALIZED;
  const propBinding = binding.propertyAliases.get(property);
  if (propBinding) {
    serialization = mergeSerialization(
      serialization,
      serializationForBinding(propBinding, rest(properties)),
    );
  }
  for (const alias of binding.aliases) {
    const propBinding = alias.propertyAliases.get(property);
    if (propBinding) {
      serialization = mergeSerialization(
        serialization,
        serializationForBinding(propBinding, rest(properties)),
      );
    }
  }
  return serialization;
}

function mergeSerialization(a: Serialization, b: Serialization): Serialization {
  if (a === UNSERIALIZED) return b;
  if (b === UNSERIALIZED) return a;
  const reason = mergeSources(a.reason, b.reason);
  const reads = unionSerializationReads(a.reads, b.reads);
  if (reason === a.reason && reads === a.reads) return a;
  if (reason === b.reason && reads === b.reads) return b;
  return { reason, reads };
}

// Answers are shared across memo keys: adding copies (at most once per
// merge), and adding nothing new keeps the identity.
function addSerializationRead(
  reads: ReadonlySet<ReferencedExtra> | undefined,
  read: ReferencedExtra,
) {
  return reads?.has(read) ? reads : new Set(reads).add(read);
}

function unionSerializationReads(
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

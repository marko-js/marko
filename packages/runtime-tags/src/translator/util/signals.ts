import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import { toAccess } from "../../html/serializer";
import {
  type Binding,
  BindingType,
  bindingUtil,
  getCanonicalBinding,
  getDebugName,
  getDebugNames,
  getDebugNamesAsIdentifier,
  getDebugAccess,
  type Getter,
  hasNonConstantPropertyAlias,
  type Intersection,
  getPropertyPath,
  isDirectAlias,
  isRest,
  type ReferencedBindings,
  someAlias,
  someReadIn,
} from "./bindings";
import { createAnalysisMemo } from "./cyclic-memo";
import { forEachIdentifier } from "./for-each-identifier";
import { isForSelectorValue } from "./for-selector";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-enums";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { isOptimize, isOutputHTML, isPatch } from "./marko-config";
import {
  every,
  filter,
  forEach,
  type Opt,
  push,
  reduce,
  some,
} from "./optional";
import { writesPatchHole } from "./patch/decisions";
import {
  getCreatedInits,
  getLiveCaptures,
  isPatchWrittenJoin,
  getPatchFillKey,
  joinsFillOverSubscribers,
  registersJoinFill,
  subscribesFill,
  getUnfillableSources,
  getPatchFill,
  fillsWithheldContent,
  isReadInJoin,
  fillSubscribes,
  getClosureReadSources,
  isResumedRead,
  clientMayRender,
  closureCarriesFill,
  dispatchesUnpatchedAt,
  rerunsEffectOnPatch,
  hasTagCallerParamAt,
  effectEntryNamesFill,
  initedJoinDependsOn,
  rerunsByEntry,
} from "./patch/refresh";
import { patchesBranchesAt } from "./patch/structure";
import {
  comparesBoundFn,
  getCallerGroupGuard,
  getClosureScopesIfWritten,
  getEffectEntryArgs,
  getExprIfUnfilled,
  getPatchFillCalls,
  getRootGroupArgs,
  hasCallerGroupsAt,
  getMixedJoinInits,
  isBoundLiveCapture,
  isScopeBoundFn,
  writePatchResumeStatements,
} from "./patch/writers";
import { getReadReplacement } from "./read-replacement";
import {
  getNodeReasons,
  getSourcesForRef,
  isConditionalReason,
  isUnconditionalReason,
  type Reason,
} from "./reasons";
import {
  type AssignedBindingExtra,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  getCanonicalExtra,
  getGlobalReads,
  hasResumableAssignment,
  isAssignedBindingExtra,
  isRegisteredFnExtra,
  type Read,
} from "./references";
import {
  callRuntime,
  importRuntimeFeature,
  registerRuntimeValue,
} from "./runtime";
import {
  getClosureAccessorLiteral,
  getLocalsScopeAccessor,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
  getSectionInstancesAccessorLiteral,
  getSlotAccessor,
} from "./scope-accessor";
import {
  createScopeReadExpression,
  getScopeExpression,
  localsIdentifier,
  scopeIdentifier,
} from "./scope-read";
import {
  forEachAncestorSection,
  getDynamicTagContentClosures,
  getDynamicClosureIndex,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isKnownChild,
  isDynamicClosure,
  isInParentSection,
  isLoopBody,
  isOptionalBranch,
  isValueRead,
  type Section,
  sectionUtil,
} from "./sections";
import { isQueuedOnCreate, inCreatedCatch, shipsContentShell } from "./shell";
import { replaceMethodNode, simplifyFunction } from "./simplify-fn";
import { findSectionSlot, findSlot, type PlaceSlot, SlotKind } from "./slots";
import { hasParamOrGlobalSource, mergeSources, type Sources } from "./sources";
import { createOutputState, createOutputSectionState } from "./state";
import { toOnlyExpressionOrBlock } from "./to-only-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { getRestPattern, withRestFallback } from "./translate-var";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";
import {
  getExprIfWritten,
  getWriteGuardForAny,
  getBranchWriteReason,
  getWriteReason,
  isSameReason,
  getSlotWriteReason,
  getSectionWriteReason,
  getEmittedReasonStatement,
} from "./write-guard";
import { flushInto } from "./writer";

export interface Signal {
  identifier: t.Identifier;
  referencedBindings: ReferencedBindings;
  section: Section;
  build: undefined | (() => t.Expression | undefined);
  // A registration resuming the signal by id; a patch's fill takes it too.
  register?: boolean | "fill";
  // Other emitted statements reference this signal's identifier directly (eg
  // the `_var` setup call), so even an empty signal keeps its declaration.
  referenced?: boolean;
  values: Array<{
    signal: Signal;
    /** None for a signal that runs on the scope alone. */
    value: t.Expression | undefined;
  }>;
  intersections: Opt<Signal>;
  /** Its `$global` joins: work reading `$global` keys, which it calls. */
  globalJoins: Opt<Signal>;
  /** As a `$global` join, the reads its id names: a script's own, so it
   * re-runs on exactly those, else the keys its work reads under. */
  globalJoinReads: ReferencedBindings;
  /** As a `$global` join, the reads its work makes: a changed value re-runs it. */
  globalReads: ReferencedBindings;
  /** Signals this one forwards into: they must declare first when the
   * forward simplifies to a bare, eagerly evaluated reference. */
  forwards: Opt<Signal>;
  render: t.Statement[];
  /** Renders a patch does itself (its hole writes, forwards into work it
   * renders): a client render needs them, a fill's run does not. */
  patch: t.Statement[];
  /** Dispatch into param-selected structure a fill reaches only under its
   * unpatched key: a client render and that key's run need it, the fill's not. */
  unpatched: t.Statement[];
  /** Whether a patch renders every render of this signal (`patchRenders`). */
  patchRendered?: boolean;
  /** A fill's run when it differs from the render (`render` without `patch`). */
  fillFn: t.Expression | undefined;
  effect: t.Statement[];
  hasHTMLEffect: boolean;
  storesValue: boolean;
  forceStore: boolean;
  inline: { value: t.Expression | undefined } | undefined;
  export: boolean;
  extraArgs: t.Expression[] | undefined;
  prependStatements: t.Statement[] | undefined;
  buildAssignment:
    | ((valueSection: Section, value: t.Expression) => t.Expression | undefined)
    | undefined;
}

type closureSignalBuilder = (
  closure: Binding,
  render: t.Expression,
) => t.Expression;
// Structured facts about a branch section's closure hop: what kind of
// branch it is and which node binding (plus branch index) addresses it.
export type ClosureHop =
  | { kind: "if"; nodeBinding: Binding; index: number }
  | { kind: "for"; nodeBinding: Binding };
export const [getSignals] = createOutputSectionState<Map<unknown, Signal>>(
  () => new Map(),
);
const [getClosureSignalBuilder, _setClosureSignal] = createOutputSectionState<
  { hop: ClosureHop; build: closureSignalBuilder } | undefined
>();
export function setClosureSignalBuilder(
  tag: t.NodePath<t.MarkoTag>,
  hop: ClosureHop,
  build: closureSignalBuilder = (_closure, render) =>
    buildClosureHop(hop, render),
) {
  _setClosureSignal(getSectionForBody(tag.get("body"))!, { hop, build });
}

export function buildClosureHop(hop: ClosureHop, render: t.Expression) {
  const accessor = getScopeAccessorLiteral(hop.nodeBinding, true);
  return hop.kind === "if"
    ? callRuntime("_if_closure", accessor, t.numericLiteral(hop.index), render)
    : callRuntime("_for_closure", accessor, render);
}

// A branch section whose scope ids ride a resume marker carrying the parent scope
// id when its scopes serialize, so the client links the owner and `_` is not serialized.
const [getOwnerResumedByMarker, setOwnerResumedByMarker] =
  createOutputSectionState<true | undefined>();
export function setSectionOwnerResumedByMarker(section: Section) {
  setOwnerResumedByMarker(section, true);
}

// Registered content's closures its owners' scope flushes may lack, by section:
// one values object per owner down to the content's own.
export function getContentClosureValues(bodySection: Section) {
  const contentClosures = bindingUtil.filter(
    getDynamicTagContentClosures(bodySection),
    mayBeUnwritten,
  );
  if (!contentClosures) return;
  const scope = generateUidIdentifier("scope");
  const closures = Array.isArray(contentClosures)
    ? contentClosures
    : [contentClosures];
  const ownerAccessor = getAccessorProp().Owner;
  const levels: t.Expression[] = [];
  // Where the flush fills a closure, a patch render keeps the levels up to the
  // outermost with values no fill writes and the client lacks (`<await>`'s).
  const patchProps: t.ObjectProperty[][] = [];
  let patchDepth = 0;
  let filled = false;
  for (let i = closures.length, section = bodySection.parent!; i;) {
    const props: t.ObjectProperty[] = [];
    const kept: t.ObjectProperty[] = [];
    while (i && closures[i - 1].section === section) {
      const closure = closures[--i];
      const prop = toObjectProperty(
        getScopeAccessor(closure),
        getDeclaredBindingExpression(closure),
      );
      props.push(prop);
      if (isPatch() && fillsWithheldContent(closure, bodySection)) {
        filled = true;
      } else if (flushMayChange(closure)) {
        kept.push(prop);
      }
    }
    if (kept.length) patchDepth = patchProps.length + 1;
    patchProps.push(kept);
    // Resume walks up through each owner while the payload evaluates, before
    // any scope flush could link it, so every level below another links its owner.
    if (i) {
      const link = toObjectProperty(
        ownerAccessor,
        t.callExpression(scope, [getScopeIdIdentifier(section.parent!)]),
      );
      props.push(link);
      kept.push(link);
    }
    levels.push(t.objectExpression(props));
    section = section.parent!;
  }
  let patchLevels: t.Expression[] | undefined;
  if (filled) {
    patchLevels = [];
    for (let depth = patchDepth; depth--;) {
      patchLevels.push(t.objectExpression(patchProps[depth]));
    }
  }
  return { scope, levels: levels.reverse(), patchLevels };
}

// A server value a flush may send anew; the client holds state's.
function flushMayChange(closure: Binding) {
  return !closure.sources?.state && hasParamOrGlobalSource(closure.sources);
}

function mayBeUnwritten(closure: Binding) {
  return !isUnconditionalReason(getWriteReason(closure));
}

export const [getScopeProperties] = createOutputSectionState<
  Map<string, { expression: t.Expression; reason: Reason }>
>(() => new Map());
export function writeSlot(
  slot: PlaceSlot | undefined,
  expression: t.Expression,
) {
  const reason = getSlotWriteReason(slot);
  if (reason) {
    const accessor = getSlotAccessor(slot!);
    getScopeProperties(slot!.section).set(accessor, {
      expression,
      reason,
    });
    return accessor;
  }
}

const [getSectionDebugVars] = createOutputSectionState<
  Map<string, [name: string, loc?: string]>
>(() => new Map());
// Names a runtime-serialized internal slot (eg a controllable's handler) in
// debug "Unable to serialize" errors; these never pass through `writeScope`.
export function setSectionDebugVar(
  section: Section,
  accessor: string,
  name: string,
  loc: t.SourceLocation | null | undefined,
) {
  if (!isOptimize()) {
    getSectionDebugVars(section).set(
      accessor,
      loc ? [name, getDebugLoc(loc)] : [name],
    );
  }
}

const [getSectionWriteScopeBuilder, setSectionWriteScopeBuilder] =
  createOutputSectionState<
    undefined | ((expr: t.Expression) => t.Expression)
  >();
export function addWriteScopeBuilder(
  section: Section,
  builder: (writeCall: t.Expression) => t.Expression,
) {
  const prev = getSectionWriteScopeBuilder(section);
  setSectionWriteScopeBuilder(
    section,
    prev ? (expr) => builder(prev(expr)) : builder,
  );
}

const htmlDynamicClosureInstancesIdentifier = new WeakMap<
  Signal,
  t.Identifier
>();

export const [getHTMLSectionStatements] = createOutputSectionState<
  t.Statement[]
>(() => []);

// What a section's html renderer returns: its `<return>` value.
const [getSectionReturnValueIdentifier, setReturnValueIdentifier] =
  createOutputSectionState<t.Identifier | undefined>();
export { setReturnValueIdentifier };

const [getBindingGetterIdMap] = createOutputSectionState<
  Map<Binding, t.Identifier>
>(() => new Map());

export function getBindingGetterIdentifier(
  binding: Binding,
  getterSection: Getter["hoisted"],
) {
  const section = getterSection || binding.section;
  const idsMap = getBindingGetterIdMap(section);
  let identifier = idsMap.get(binding);
  if (!identifier) {
    idsMap.set(
      binding,
      (identifier = generateUidIdentifier(
        `${section.name ? `${section.name}__` : ""}${binding.originalName ?? binding.name}_getter`,
      )),
    );
  }
  return identifier;
}

export function getSignal(
  section: Section,
  referencedBindings: ReferencedBindings,
  name?: string,
  globalJoinReads?: ReferencedBindings,
) {
  if (
    !globalJoinReads &&
    referencedBindings &&
    !Array.isArray(referencedBindings)
  ) {
    if (referencedBindings.type === BindingType.constant) {
      return getSignal(section, undefined);
    }

    if (referencedBindings.section !== section) {
      const canonicalReference = getCanonicalBinding(referencedBindings);
      if (canonicalReference !== referencedBindings) {
        return getSignal(section, canonicalReference);
      }
    }
  }

  const signals = getSignals(section);
  const key = globalJoinReads
    ? getGlobalJoinId(section, referencedBindings, globalJoinReads)
    : referencedBindings;
  let signal = signals.get(key)!;
  if (!signal) {
    let signalName =
      name ??
      (referencedBindings
        ? getDebugNamesAsIdentifier(referencedBindings)
        : "setup");
    let exportName = referencedBindings
      ? !Array.isArray(referencedBindings) &&
        referencedBindings.section === section &&
        getProgram().node.extra.exportNames!.params.get(referencedBindings)
      : !section.parent && getProgram().node.extra.exportNames!.setup;
    if (globalJoinReads) {
      signalName += "__" + getDebugNamesAsIdentifier(globalJoinReads);
      exportName = false;
    }

    signals.set(
      key,
      (signal = {
        identifier: exportName
          ? t.identifier(exportName)
          : generateUidIdentifier(
              section.name ? `${section.name}__${signalName}` : signalName,
            ),
        referencedBindings,
        section,
        values: [],
        intersections: undefined,
        globalJoins: undefined,
        globalJoinReads,
        globalReads: undefined,
        forwards: undefined,
        render: [],
        patch: [],
        unpatched: [],
        fillFn: undefined,
        effect: [],
        hasHTMLEffect: false,
        build: undefined,
        export: !!exportName,
        storesValue: !!(
          referencedBindings &&
          (Array.isArray(referencedBindings) ||
            referencedBindings.type === BindingType.dom ||
            referencedBindings.type === BindingType.let ||
            referencedBindings.section !== section ||
            referencedBindings.closureSections ||
            referencedBindings.hoists ||
            referencedBindings.localOf)
        ),
        forceStore: false,
        inline: undefined,
        extraArgs: undefined,
        prependStatements: undefined,
        buildAssignment: undefined,
      }),
    );

    if (isOutputHTML()) {
      return signal;
    } else if (globalJoinReads) {
      const parent = getSignal(section, referencedBindings);
      parent.globalJoins = push(parent.globalJoins, signal);
      // The runtime runs a join on the scope alone, so it reads values there.
      parent.storesValue = signal.storesValue = true;
      signal.build = () => buildSignalFn(signal);
    } else if (!referencedBindings) {
      signal.build = () => buildSignalFn(signal);
    } else if (Array.isArray(referencedBindings)) {
      const meta = section.intersections!.get(referencedBindings)!;
      subscribe(meta.source || referencedBindings, signal);
      if (meta.source) {
        const sourceSignal = getSignal(section, meta.source);
        forEach(referencedBindings, (member) => {
          const memberSignal = getSignal(section, member);
          const inline =
            member.type === BindingType.derived &&
            !member.aliasOf &&
            !member.propertyAliases.size &&
            member.reads.size === 1 &&
            sourceSignal.values.find((v) => v.signal === memberSignal);
          if (inline) {
            memberSignal.inline = inline;
          } else {
            memberSignal.storesValue = memberSignal.forceStore = true;
          }
        });
      }
      signal.build = () =>
        buildIntersection(section, referencedBindings, buildSignalFn(signal));
    } else if (
      referencedBindings.section !== section &&
      sectionUtil.has(referencedBindings.closureSections, section)
    ) {
      signal.build = () => {
        const closure = referencedBindings;
        const render = buildSignalFn(signal);
        const closureSignalBuilder = getClosureSignalBuilder(section);

        if (closureSignalBuilder && !isDynamicClosure(section, closure)) {
          return closureSignalBuilder.build(closure, render);
        }

        // A created scope's subscriber subscribes by its resume id.
        const init = isPatch() && getCreatedInits(section).get(closure);
        const changeable = resumesSubscriber(section, closure);
        const subscribe = init && init.subscribe;
        const fills = isPatch() && registersClosureFill(section, closure);
        // Keyed by this subscriber's section, as the HTML registration is; a
        // created scope's init names the same id, subscribing as a resume does.
        const resumeId =
          (changeable || subscribe) &&
          t.stringLiteral(getResumeRegisterId(section, closure, "subscribe"));
        // Only the declaration's closure reaches a subscriber whose join's fill
        // reaches the scope elsewhere: it ships with that declaration.
        const withDeclaration =
          subscribe === "always" &&
          registersJoinFill(closure) &&
          !subscribesFill(closure, section);
        // Kept: a scope a flush creates runs only the ids its shell or flush names, so no shipped
        // code reaches one it always subscribes; code changing its structure keeps the rest.
        const patchResumed = subscribe === "always" && !withDeclaration;
        // Kept for the flush naming it, unless what changes it keeps it as in
        // plain: a fill only param-selected structure ships, or entry content.
        const kept =
          patchResumed &&
          getPatchFill(closure).fillsWithoutStructure &&
          someReadIn(closure, section, isValueRead);
        // Built trimmed: the signal's writer trims only the outermost call,
        // which a wrapper around the subscriber becomes.
        let closureGet: t.Expression = callRuntime(
          "_closure_get",
          ...trimEmptyArgs([
            getClosureAccessorLiteral(closure),
            render,
            isInParentSection(closure, section)
              ? undefined
              : t.arrowFunctionExpression(
                  [scopeIdentifier],
                  getScopeExpression(section, closure.section),
                ),
            !kept && resumeId,
          ]),
        );
        const index = getDynamicClosureIndex(closure, section);
        if (fills) {
          // Deep closure positions reassemble the indexed composite via a
          // shared per-key table, keyed by the serialized index.
          closureGet = buildClosureFillJoin(
            "_fill_closure",
            section,
            closure,
            closureGet,
            index,
          );
        } else if (index && isPatch() && dispatchesByIndex(closure)) {
          // A created later position carries the index its owner's composite
          // would stamp, which a fill join over the subscribers matches.
          closureGet = callRuntime(
            "_closure_index",
            t.numericLiteral(index),
            closureGet,
          );
        }
        return kept
          ? callRuntime("_closure_resume", resumeId, closureGet)
          : closureGet;
      };
    }
  }
  return signal;
}

// A document scope's subscriber resumes by its id: a shell chain registers no
// subscribe, and one the client cannot change is shaken with its owner's signal.
function resumesSubscriber(section: Section, closure: Binding) {
  return (
    isChangeableDynamicClosure(section, closure) &&
    !(isPatch() && inShellChain(section))
  );
}

// A dynamic closure the client can change before a subscriber that resumes
// after its owner; state no resumed instance can write never changes.
function isChangeableDynamicClosure(section: Section, closure: Binding) {
  const { sources } = closure;
  return (
    !!sources &&
    isDynamicClosure(section, closure) &&
    (!sources.state || some(sources.state, hasResumableAssignment)) &&
    shipsClosureScopes(closure)
  );
}

// A resumed subscriber joins its owner's set, which a patch page ships only
// where analysis gave it a reason (never for a value read for `$global` alone).
function shipsClosureScopes(closure: Binding) {
  return !!findSlot(closure, SlotKind.ClosureScopes)?.reason;
}

// A dynamic content shell elides the chain's dom renderers, and with them the
// `_closure_get` subscribe registration; a known child's direct calls keep both.
function inShellChain(section: Section) {
  for (let cur: Section | undefined = section; cur; cur = cur.parent) {
    if (shipsContentShell(cur) && !isKnownChild(cur)) return true;
  }
  return false;
}

// The joins whose scopes a document subscribes, which a changed `$global` member
// re-runs: `true` if resumed code renders the read, else the sources the client may own.
const [getGlobalJoins] = createAnalysisMemo((section: Section) => {
  const joins = new Map<string, true | Sources | undefined>();
  const effects = new Set<string>();
  for (const expr of section.globalReadExprs || []) {
    const referencedBindings = getReferencedBindings(expr);
    const id = getGlobalJoinId(
      section,
      referencedBindings,
      getGlobalJoinReads(expr, getGlobalReads(expr)!),
    );
    // An effect subscribes its scope as it runs, which a document's do on resume,
    // for any join of its id.
    if (getCanonicalExtra(expr).isEffect) {
      effects.add(id);
      continue;
    }
    // The client runs a written join wherever its group has a client member.
    const unfilled =
      getUnfillableSources(referencedBindings) ||
      isResumedRead(expr) ||
      (Array.isArray(referencedBindings) &&
        isPatchWrittenJoin(referencedBindings) &&
        getSourcesForRef(referencedBindings));
    const prev = joins.get(id);
    joins.set(
      id,
      prev === true || unfilled === true
        ? true
        : mergeSources(prev, unfilled || undefined),
    );
  }
  for (const id of effects) joins.delete(id);
  return joins;
}, new Map<string, true | Sources | undefined>());

// Registers a `$global` join under the members it reads: pure, so the
// consumer's retention decides if a member has a reader.
function wrapGlobalJoins(signal: Signal, value: t.Expression): t.Expression {
  const id = t.stringLiteral(getSignalRegisterId(signal));
  const { path, args } = getGlobalMembers(signal);
  return subscribesLoopOwner(signal.section) &&
    getGlobalJoins(signal.section).has(id.value)
    ? callRuntime(
        path ? "_fill_global_path_for" : "_fill_global_for",
        id,
        getScopeAccessorLiteral(signal.section.branch!.nodeBinding, true),
        value,
        ...args,
      )
    : callRuntime(
        path ? "_fill_global_path" : "_fill_global",
        id,
        value,
        ...args,
      );
}

// Rows a loop's markers always resume into its owner: the owner subscribes once
// to each `$global` join of theirs (no effects), and a change walks its rows.
function subscribesLoopOwner(section: Section) {
  return (
    isLoopBody(section) &&
    isUnconditionalReason(getBranchWriteReason(section)) &&
    isUnconditionalReason(getWriteReason(section.branch!.nodeBinding))
  );
}

// The `$global` members a signal reads by their keys (`""`: the whole object), a `0`
// between them where one is nested (`path`); a read below another is covered by it.
function getGlobalMembers(signal: Signal) {
  const members: string[][] = [];
  forEach(signal.globalReads, (read) => {
    for (let above = read.aliasOf; above; above = above.aliasOf) {
      if (bindingUtil.has(signal.globalReads, above)) return;
    }
    const keys = getPropertyPath(read, getProgram().node.extra.globalBinding!);
    members.push(Array.isArray(keys) ? keys : [keys ?? ""]);
  });
  const path = members.some(isNestedMember);
  const args: t.Expression[] = [];
  for (const keys of members) {
    if (path && args.length) args.push(t.numericLiteral(0));
    for (const key of keys) args.push(t.stringLiteral(key));
  }
  return { path, args };
}

function isNestedMember(keys: string[]) {
  return keys.length > 1;
}

// A first-hop `$global` key, or `$global` itself for a whole-object read.
function isGlobalKey(read: Binding) {
  return !read.aliasOf?.aliasOf;
}

// The key a `$global` read reads under.
function toGlobalKey(read: Binding) {
  while (!isGlobalKey(read)) read = read.aliasOf!;
  return read;
}

export function initValue(binding: Binding, isLet = false) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  // Lazy reads read the value from its scope slot.
  if (binding.hasLazyReads) signal.forceStore = true;
  signal.build = () => {
    if (isPureMemberForwarder(binding)) {
      return undefined;
    }

    // A fill runs from its scope slot, never as a value forwarder.
    const fills = isPatch() && getPatchFill(binding).fillsReads;
    if (fills) signal.storesValue = true;
    const fn = buildSignalFn(signal);
    const helper = isLet
      ? signal.extraArgs
        ? "_let_change"
        : "_let"
      : "_const";
    // A fill binding's own declaration doubles as its fill registration
    // (even a pure forwarder); renders the flush writes itself stay out.
    if (fills) {
      const { fillsWithoutStructure, ownRegistration, unpatchedSections } =
        getPatchFill(binding);
      const key = t.stringLiteral(getPatchFillKey(binding));
      const accessor = getScopeAccessorLiteral(binding, true, isLet);
      // Where only the key reaches it, the fill's registration ships it and
      // its value signal stays pure; elsewhere what reaches the signal does.
      const fillFn = signal.fillFn && markFill(signal, signal.fillFn);
      // A value whose only work is a join it registers a fill for: that
      // registration is its fill, whose run runs the join.
      if (
        !ownRegistration &&
        registersJoinFill(binding) &&
        runsOneJoin(signal)
      ) {
        return callRuntime(helper, ...trimEmptyArgs([accessor, fn]));
      }
      if (!ownRegistration) {
        return callRuntime(`_fill${helper}`, key, accessor, fn, fillFn);
      }
      if (!signal.fillFn && !fillsWithoutStructure) {
        return callRuntime(`_fill${helper}`, key, accessor, fn);
      }
      const value = callRuntime(helper, ...trimEmptyArgs([accessor, fn]));
      // A fill that ships only with param-selected structure is reached where
      // that structure's render code (plain's) keeps its signal.
      if (!signal.fillFn) return callRuntime("_fill_resume", key, value);
      // The registration keeps the fill's run alone, and as a join under its
      // unpatched key, for closures below its own param-selected structure.
      (signal.prependStatements ||= []).push(
        t.expressionStatement(
          callRuntime(
            "_fill_run",
            key,
            getScopeAccessorLiteral(binding, true),
            fillFn!,
            unpatchedSections &&
              t.stringLiteral(getPatchFillKey(binding, "unpatched")),
          ),
        ),
      );
      return value;
    }
    if (
      !signal.forceStore &&
      (isDirectAlias(binding) ||
        (!signal.storesValue &&
          !someAlias(binding, aliasStoresValue, binding, true)) ||
        !signalHasWork(signal))
    ) {
      return fn;
    }

    return callRuntime(
      helper,
      getScopeAccessorLiteral(binding, true, isLet),
      fn,
    );
  };

  binding.aliases.forEach(initAliasValue);
  binding.propertyAliases.forEach(initAliasValue);
  return signal;
}

function initAliasValue(alias: Binding) {
  if (alias.type !== BindingType.constant) initValue(alias);
}

// A direct alias's work reads the slot of the binding it aliases.
function aliasStoresValue(alias: Binding, binding: Binding) {
  return alias !== binding && getSignal(alias.section, alias).storesValue;
}

export function signalHasWork(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.forceStore ||
    signal.render.length ||
    signal.patch.length ||
    signal.unpatched.length ||
    signal.effect.length ||
    signal.hasHTMLEffect ||
    signal.values.length ||
    signal.intersections ||
    signal.globalJoins
  ) {
    return true;
  }
  const binding = signal.referencedBindings;
  if (binding) {
    if (
      !Array.isArray(binding) &&
      (binding.closureSections ||
        binding.type === BindingType.dom ||
        (binding.section === signal.section &&
          (binding.hoists ||
            binding.aliases.size ||
            hasNonConstantPropertyAlias(binding))))
    ) {
      return true;
    }
  } else if (signal.section.referencedClosures) {
    return true;
  }
  return false;
}

function isPureMemberForwarder(binding: Binding): boolean {
  if (
    binding.property === undefined ||
    binding.reads.size ||
    binding.exposed ||
    binding.aliases.size ||
    binding.assignments ||
    isForSelectorValue(binding) ||
    findSlot(binding)?.reason ||
    getSignal(binding.section, binding).storesValue
  ) {
    return false;
  }

  return hasNonConstantPropertyAlias(binding);
}

// Left out of a created scope's shell: an effect its render queues, or one its
// entry re-runs, which nothing a created `@catch` holds has (no patch pairs it).
export function isEffectOutsideShell(
  section: Section,
  refs: ReferencedBindings,
) {
  return (
    isQueuedOnCreate(section, refs) ||
    (!inCreatedCatch(section) && some(refs, rerunsEffectOnPatch))
  );
}

// The sources an effect re-runs on where one is a param a calling tag passes.
export function getEffectCallerSources(
  section: Section,
  refs: ReferencedBindings,
) {
  const sources = reduce(
    filter(refs, rerunsEffectOnPatch),
    pushCanonicalSources,
  );
  if (some(sources, (s) => hasTagCallerParamAt(s, section))) return sources;
}

function pushCanonicalSources(list: Opt<Sources>, binding: Binding) {
  const { sources } = getCanonicalBinding(binding);
  return sources ? push(list, sources) : list;
}

function setsInitialValue({ referencedBindings }: Signal) {
  return (
    !!referencedBindings &&
    !Array.isArray(referencedBindings) &&
    isLetBinding(referencedBindings) &&
    !!(referencedBindings.derivedFrom as t.NodeExtra | undefined)?.initialValue
  );
}

// A fill's run leaving out what its change judges (an init's join, an effect's
// entry, a live function's bind) marks it; the signal's own run needs none.
function markFill(signal: Signal, fillFn: t.Expression) {
  const binding = signal.referencedBindings as Binding;
  return initedJoinDependsOn(binding) ||
    effectEntryNamesFill(binding) ||
    isBoundLiveCapture(binding)
    ? callRuntime("_fill_mark", getScopeAccessorLiteral(binding, true), fillFn)
    : fillFn;
}

// A value an entry depends on that a join's fill sets, under its key or its
// unpatched one: the fill then marks its change (`patches/fill-change`).
export function isJoinFilled(binding: Binding) {
  const root = getCanonicalBinding(binding);
  return registersJoinFill(root) || !!getPatchFill(root).unpatchedJoins;
}

// A signal doing nothing but run one join of its section (no source runs it
// instead): every read of its value is that join, or resolves as a function runs.
function runsOneJoin(signal: Signal) {
  const binding = signal.referencedBindings as Binding;
  let join: Intersection | undefined;
  for (const [expr, reads] of binding.reads) {
    if (expr.invokeOnly && every(reads, isDeferredRead)) continue;
    const refs = getReferencedBindings(expr);
    if (
      !Array.isArray(refs) ||
      expr.section !== binding.section ||
      (join && join !== refs)
    ) {
      return false;
    }
    join = refs;
  }
  return !!join && !signal.section.intersections!.get(join)!.source;
}

function isDeferredRead(read: Read) {
  return read.deferred;
}

function getForwardStatements(signal: Signal, target: Signal) {
  return isPatch() && patchRendersInto(target) ? signal.patch : signal.render;
}

// A patch render runs a signal when every render is a hole it writes or a
// forward it runs (a cycle resolves as the client's).
function patchRenders(signal: Signal): boolean {
  if (signal.patchRendered === undefined) {
    signal.patchRendered = false;
    signal.patchRendered =
      patchesStructure(signal) ||
      rendersWrittenJoin(signal) ||
      !hasClientRender(signal);
  }
  return signal.patchRendered;
}

// A join whose reads the patch writes: its members' fills leave it to the patch.
function rendersWrittenJoin({ referencedBindings }: Signal) {
  return (
    Array.isArray(referencedBindings) && isPatchWrittenJoin(referencedBindings)
  );
}

// A loop or branch chain a patch renders whenever it writes the scope: the
// signal's binding is the node its optional bodies render at.
function patchesStructure({ referencedBindings }: Signal) {
  return (
    !!referencedBindings &&
    !Array.isArray(referencedBindings) &&
    some(referencedBindings.branchBodies, isOptionalBranch) &&
    patchesBranchesAt(referencedBindings)
  );
}

// A patch renders a forward into a value it fills itself as well.
function patchRendersInto(target: Signal) {
  const binding = target.referencedBindings;
  return (
    patchRenders(target) ||
    (!!binding &&
      !target.globalReads &&
      !Array.isArray(binding) &&
      binding.section === target.section &&
      getPatchFill(binding).fillsReads)
  );
}

function hasClientRender(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.register ||
    (signal.effect.length &&
      !(isPatch() && rerunsByEntry(signal.referencedBindings))) ||
    signal.hasHTMLEffect ||
    signal.render.length ||
    signal.unpatched.length ||
    signal.values.some(isClientRenderedValue) ||
    !every(signal.intersections, patchRenders) ||
    !every(signal.globalJoins, patchRenders)
  ) {
    return true;
  }
  const binding = signal.referencedBindings;
  if (binding) {
    return (
      !Array.isArray(binding) &&
      (binding.type === BindingType.dom ||
        // Only the binding's own signal runs its closure signals; a closure
        // signal is itself one of them, so checking there would find itself.
        (binding.section === signal.section &&
          (some(
            binding.closureSections,
            (closureSection) =>
              !patchRenders(getSignal(closureSection, binding)),
          ) ||
            !!binding.hoists ||
            hasClientRenderedAlias(binding))))
    );
  }
  return !!signal.section.referencedClosures;
}

function isClientRenderedValue({ signal }: Signal["values"][number]) {
  return !signal.inline && !patchRendersInto(signal);
}

// A whole or property alias a client render reaches (not a constant).
function hasClientRenderedAlias(binding: Binding) {
  for (const alias of binding.aliases) {
    if (isClientRenderedAlias(alias)) return true;
  }
  for (const alias of binding.propertyAliases.values()) {
    if (isClientRenderedAlias(alias)) return true;
  }
  return false;
}

function isClientRenderedAlias(alias: Binding) {
  return (
    alias.type !== BindingType.constant &&
    !patchRendersInto(getSignal(alias.section, alias))
  );
}

function pushMemberForwards(
  signal: Signal,
  value: t.Expression,
  alias: Binding,
) {
  if (isPureMemberForwarder(alias)) {
    for (const [key, child] of alias.propertyAliases) {
      if (child.type !== BindingType.constant) {
        pushMemberForwards(
          signal,
          toMemberExpression(t.cloneNode(value, true), key, alias.nullable),
          child,
        );
      }
    }
  } else {
    pushForward(signal, getSignal(alias.section, alias), value);
  }
}

function pushForward(signal: Signal, target: Signal, value: t.Expression) {
  signal.forwards = push(signal.forwards, target);
  getForwardStatements(signal, target).push(
    t.expressionStatement(
      t.callExpression(target.identifier, [
        scopeIdentifier,
        value,
        ...getTranslatedExtraArgs(target),
      ]),
    ),
  );
}

// A source intersection runs in its source's pass, so it needs no `_or`.
function buildIntersection(
  section: Section,
  intersection: Intersection,
  fn: t.Expression,
) {
  const { source, id, returnedBy } = section.intersections!.get(intersection)!;
  if (source) return fn;
  // A created scope runs the join by its init id (`getCreatedInits`), as any
  // scope does a written join's where its group mixes (`patches/init`).
  const init = isPatch() && getCreatedInits(section).get(intersection);
  const initResumeId =
    init && getResumeRegisterId(section, intersection, "init");
  // One a caller's groups decide links where the call sends it (`recordJoinInits`).
  if (
    initResumeId &&
    init.init === "mixed" &&
    !hasCallerGroupsAt(section, getSourcesForRef(intersection))
  ) {
    importRuntimeFeature("patches/init");
  }
  return callRuntime(
    initResumeId ? "_or_resume" : "_or",
    ...(initResumeId ? [t.stringLiteral(initResumeId)] : []),
    t.numericLiteral(id),
    fn,
    returnedBy || intersection.length > 2
      ? t.numericLiteral(intersection.length - 1)
      : undefined,
    returnedBy && getScopeOffsetAccessorLiteral(returnedBy, true),
  );
}

export function buildSignalFn(signal: Signal): t.Expression {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue =
    isBinding && binding.section === section && !signal.globalReads;
  const assertsHoists = isValue && binding.hoists && !isOptimize();

  if (isValue) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      if (signalHasWork(aliasSignal)) {
        let value: t.Expression = createScopeReadExpression(binding);
        if (isRest(alias)) {
          const aliasId = t.identifier(alias.name);
          value = t.callExpression(
            t.arrowFunctionExpression(
              [getRestPattern(alias, aliasId, binding, true)],
              aliasId,
            ),
            [withRestFallback(alias, binding, value)],
          );
        }
        pushForward(signal, aliasSignal, value);
      }
    }

    for (const [key, alias] of binding.propertyAliases) {
      if (alias.type !== BindingType.constant) {
        pushMemberForwards(
          signal,
          toMemberExpression(
            createScopeReadExpression(binding),
            key,
            binding.nullable,
          ),
          alias,
        );
      }
    }

    if (assertsHoists) {
      signal.render.push(
        t.expressionStatement(
          callRuntime("_assert_hoist", createScopeReadExpression(binding)),
        ),
      );
    }
  }

  for (const value of signal.values) {
    if (value.signal.inline) {
      continue;
    }
    // A `<let>`'s initial value takes it only as a created scope first renders,
    // from this value's seed, which no patch renders the `<let>` for.
    (isValue && setsInitialValue(value.signal)
      ? signal.render
      : getForwardStatements(signal, value.signal)
    ).push(
      t.expressionStatement(
        signalHasWork(value.signal)
          ? t.callExpression(value.signal.identifier, [
              scopeIdentifier,
              ...(value.value ? [value.value] : []),
              ...getTranslatedExtraArgs(value.signal),
            ])
          : withLeadingComment(
              value.value!,
              getDebugNames(value.signal.referencedBindings),
            ),
      ),
    );
  }

  forEach(signal.intersections, (intersection) => {
    pushScopeCall(
      getForwardStatements(signal, intersection),
      intersection.identifier,
    );
  });

  forEach(signal.globalJoins, (join) => {
    pushScopeCall(getForwardStatements(signal, join), join.identifier);
  });

  if (isValue && binding.sources) {
    let dynamicClosureArgs: t.Expression[] | undefined;
    let dynamicClosureSignalIdentifier: t.Identifier | undefined;
    forEach(binding.closureSections, (closureSection) => {
      if (isDynamicClosure(closureSection, binding)) {
        if (!dynamicClosureArgs) {
          dynamicClosureArgs = [];
          dynamicClosureSignalIdentifier = generateUidIdentifier(
            signal.identifier.name + "__closure",
          );
          pushScopeCall(signal.render, dynamicClosureSignalIdentifier);
        }

        dynamicClosureArgs.push(getSignal(closureSection, binding).identifier);
      } else {
        // A fill reaches a closure in structure the client may own, which
        // no patch writes there.
        const closureSignal = getSignal(closureSection, binding);
        pushScopeCall(
          !isPatch()
            ? signal.render
            : dispatchesUnpatchedAt(binding, closureSection)
              ? signal.unpatched
              : registersClosureFill(closureSection, binding)
                ? signal.render
                : getForwardStatements(signal, closureSignal),
          closureSignal.identifier,
        );
      }
    });

    if (dynamicClosureSignalIdentifier) {
      (signal.prependStatements ||= []).push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            dynamicClosureSignalIdentifier,
            callRuntime("_closure", ...dynamicClosureArgs!),
          ),
        ]),
      );
    }
  }

  // An effect its entry re-runs is one a patch renders itself.
  if (signal.effect.length) {
    pushScopeCall(
      isPatch() && rerunsByEntry(signal.referencedBindings)
        ? signal.patch
        : signal.render,
      getSignalEffectIdentifier(signal),
    );
  }

  // A registered function reads what it captures from the scope, though a
  // seeded one gives it no reason.
  if (
    isValue &&
    (findSlot(binding)?.reason ||
      (isPatch() && getPatchFill(binding).fnCapture))
  ) {
    signal.storesValue = true;
  }

  let render = signal.render;
  // A fill's run is the render without what the patch renders itself, or
  // what only its unpatched key reaches.
  if (signal.patch.length || signal.unpatched.length) {
    if (isValue && getPatchFill(binding).fillsReads) {
      signal.fillFn = toScopeFn(render);
    }
    render = render.concat(signal.unpatched, signal.patch);
  }

  if (!signal.storesValue) {
    const call = isValue && getOnlyCall(render);
    if (
      call &&
      call.callee.type === "Identifier" &&
      call.arguments.length === 2 &&
      call.arguments[0] === scopeIdentifier &&
      isOwnValueRead(call.arguments[1], binding)
    ) {
      // The signal only forwards its scope and value to another signal:
      // `(scope, value) => fn(scope, value)` is equivalent to `fn`.
      return call.callee;
    }

    return t.arrowFunctionExpression(
      isValue
        ? [scopeIdentifier, getSignalValueIdentifier(signal)]
        : [scopeIdentifier],
      toOnlyExpressionOrBlock(render),
    );
  }

  return toScopeFn(render);
}

// `(scope) => fn(scope)` is `fn`.
function toScopeFn(render: t.Statement[]): t.Expression {
  const call = getOnlyCall(render);
  if (
    call &&
    call.arguments.length === 1 &&
    call.arguments[0] === scopeIdentifier
  ) {
    if (
      call.callee.type === "MemberExpression" &&
      call.callee.property.type === "Identifier" &&
      call.callee.property.name === getAccessorProp().Owner
    ) {
      // Special case closure reads of `IDENTIFIER._`.
      return call.callee.object;
    }

    return call.callee as t.Expression;
  }

  return t.arrowFunctionExpression(
    [scopeIdentifier],
    toOnlyExpressionOrBlock(render),
  );
}

// The call a render of a single call statement makes.
function getOnlyCall(render: t.Statement[]) {
  if (render.length === 1) {
    const [first] = render;
    if (
      first.type === "ExpressionStatement" &&
      first.expression.type === "CallExpression"
    ) {
      return first.expression;
    }
  }
}

function pushScopeCall(render: t.Statement[], callee: t.Expression) {
  render.push(
    t.expressionStatement(t.callExpression(callee, [scopeIdentifier])),
  );
}

function getSignalEffectIdentifier(signal: Signal) {
  return t.identifier(`${signal.identifier.name}__script`);
}

const hasTranslatedExtraArgs = new WeakSet<{ extraArgs?: t.Expression[] }>();
const emptyExtraArgs: never[] = [];
function getTranslatedExtraArgs(signal: { extraArgs?: t.Expression[] }) {
  if (signal.extraArgs) {
    if (!hasTranslatedExtraArgs.has(signal)) {
      hasTranslatedExtraArgs.add(signal);
      traverseReplace(signal, "extraArgs", replaceRenderNode);
    }

    return signal.extraArgs;
  }

  return emptyExtraArgs;
}

export function getSignalValueIdentifier(signal: Signal) {
  const canonicalBinding = getCanonicalBinding(
    signal.referencedBindings as Binding,
  );
  return t.identifier(canonicalBinding.name);
}

function isOwnValueRead(node: t.Node, binding: Binding) {
  const extra = (node as { extra?: t.NodeExtra }).extra;
  const read = extra?.read;
  return (
    !!read &&
    !extra!.assignment &&
    read.binding === binding &&
    read.props === undefined &&
    !read.getter?.invoked
  );
}

function subscribe(references: ReferencedBindings, intersection: Signal) {
  if (references) {
    forEach(references, (binding) => {
      if (binding.type !== BindingType.constant) {
        const source = getCanonicalBinding(binding);
        const providerSignal = getSignal(intersection.section, source);
        providerSignal.storesValue = true;
        providerSignal.intersections = push(
          providerSignal.intersections,
          intersection,
        );
      }
    });
  }
}

export function trimEmptyArgs(
  args: (t.Expression | undefined | false)[],
): t.Expression[] {
  const len = args.length;
  let finalLen: undefined | number = undefined;

  for (let i = len; i--;) {
    const arg = args[i];
    if (!arg) {
      args[i] = t.numericLiteral(0);
      continue;
    }

    if (
      t.isNullLiteral(arg) ||
      (t.isUnaryExpression(arg) && arg.operator === "void")
    ) {
      args[i] = t.numericLiteral(0);
      continue;
    }

    if (t.isArrowFunctionExpression(arg) && t.isBlockStatement(arg.body)) {
      const body = arg.body.body;
      if (body.length === 0) {
        args[i] = t.numericLiteral(0);
        continue;
      }

      if (body.length === 1 && t.isExpressionStatement(body[0])) {
        arg.body = body[0].expression;
      }
    }

    if (finalLen === undefined) {
      finalLen = i + 1;
    }
  }

  args.length = finalLen || 0;
  return args as t.Expression[];
}
// Work for `expr` runs when what it references changes, in setup if nothing
// (or no `expr`); a `statement` given as an expression is wrapped as one.
export function addStatement(
  type: "render" | "effect" | "patch",
  targetSection: Section,
  expr: t.NodeExtra | undefined,
  statement: t.Statement | t.Statement[] | t.Expression,
  isPure?: boolean,
): void {
  const signal = getExprSignal(targetSection, expr);
  // A render of a hole the patch fills is the patch's own (`Signal.patch`).
  const statements =
    signal[
      type === "render" &&
      isPatch() &&
      !!expr?.rendersValue &&
      writesPatchHole(targetSection, expr)
        ? "patch"
        : type
    ];

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(
      t.isExpression(statement) ? t.expressionStatement(statement) : statement,
    );
  }

  if (!isPure || type === "effect") {
    signal.storesValue = true;
  }
}

// Runs a `<log>` or `<debug>` statement where the tag is: in place on the
// server, and on the client whenever its value changes.
export function addTagStatement(
  tag: t.NodePath<t.MarkoTag>,
  statement: t.Statement,
) {
  if (isOutputHTML()) {
    // Buffered markup is deliberately not flushed first: source-order
    // interleaving of a dev statement is not worth splitting the html write.
    tag.insertBefore(statement);
  } else {
    addStatement(
      "render",
      getSection(tag),
      tag.node.attributes[0]?.value.extra,
      statement,
    );
  }

  tag.remove();
}

export function addValue(
  targetSection: Section,
  expr: t.NodeExtra | undefined,
  signal: Signal,
  value?: t.Expression,
) {
  const parentSignal = getExprSignal(targetSection, expr);
  parentSignal.values.push({
    signal,
    value,
  });

  if (
    t.isFunction(value) &&
    value.extra &&
    getReferencedBindingsInFunction(value.extra)
  ) {
    parentSignal.storesValue = true;
  }
}

// An expression reading `$global` keys (a patch build's) adds its work to its
// signal's join for those keys, along with what it reads.
function getExprSignal(section: Section, expr: t.NodeExtra | undefined) {
  const reads = getGlobalReads(expr);
  const signal = getSignal(
    section,
    getReferencedBindings(expr),
    undefined,
    reads && getGlobalJoinReads(expr!, reads),
  );
  if (reads) signal.globalReads = bindingUtil.union(signal.globalReads, reads);
  return signal;
}

// The reads naming an expression's `$global` join: a script's own, else the
// keys it reads under, so idempotent work under the same keys shares one join.
function getGlobalJoinReads(expr: t.NodeExtra, reads: ReferencedBindings) {
  return getCanonicalExtra(expr).isEffect
    ? reads
    : reduce(reads, addGlobalKey, undefined as ReferencedBindings);
}

function addGlobalKey(keys: ReferencedBindings, read: Binding) {
  return bindingUtil.add(keys, toGlobalKey(read));
}

function buildResumeRegisterKey(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  // Every segment is self-delimiting (`#id` per binding, `*` for string kinds),
  // and a binding another section owns names that section, since ids restart.
  let name = "";
  if (referencedBindings) {
    if (typeof referencedBindings === "string") {
      name += `*${referencedBindings}`;
    } else {
      name = reduce(
        referencedBindings,
        (name, binding) => appendBindingKey(name, binding, section),
        name,
      );
    }
  }
  return `${section.id}${name}${type ? "/" + type : ""}`;
}

export function getResumeRegisterId(
  section: Section,
  referencedBindings: string | ReferencedBindings,
  type?: string,
) {
  const {
    markoOpts,
    opts: { filename },
  } = getFile();
  const key = buildResumeRegisterKey(section, referencedBindings, type);
  return getTemplateId(markoOpts, filename as string, key);
}

// A `$global` join's register id names its keys beside its signal's bindings.
function getGlobalJoinId(
  section: Section,
  referencedBindings: ReferencedBindings,
  keys: ReferencedBindings,
) {
  return getResumeRegisterId(
    section,
    bindingUtil.union(referencedBindings, keys),
  );
}

export function getSignalRegisterId({
  section,
  referencedBindings,
  globalJoinReads,
}: Signal) {
  return globalJoinReads
    ? getGlobalJoinId(section, referencedBindings, globalJoinReads)
    : getResumeRegisterId(section, referencedBindings);
}

export function writeSignals(section: Section) {
  const seen = new Set<Signal>();
  const written = new Set<Signal>();
  writeGetters(section);

  for (const signal of getSignals(section).values()) {
    writeSignal(signal);
  }

  function writeSignal(signal: Signal) {
    if (seen.has(signal)) return;
    seen.add(signal);

    for (const value of signal.values) {
      writeSignal(value.signal);
      traverseReplace(value, "value", replaceRenderNode);
    }

    forEach(signal.intersections, writeSignal);
    forEach(signal.globalJoins, writeSignal);

    let effectDeclarator: t.VariableDeclarator | undefined;
    if (signal.effect.length) {
      // An effect reading a value a patch writes re-runs by the flush's entry.
      if (
        isPatch() &&
        !inCreatedCatch(signal.section) &&
        some(signal.referencedBindings, rerunsEffectOnPatch)
      ) {
        importRuntimeFeature("patches/effect");
        if (some(signal.referencedBindings, isJoinFilled)) {
          importRuntimeFeature("patches/fill-change");
        }
      }
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = getSignalEffectIdentifier(signal);
      const id = t.stringLiteral(getSignalRegisterId(signal));
      const effectFn = t.arrowFunctionExpression(
        [scopeIdentifier],
        toOnlyExpressionOrBlock(signal.effect),
      );
      // An effect reading `$global` runs once per run however many reach it, and
      // its registration carries the members whose change re-runs it.
      const members = signal.globalReads && getGlobalMembers(signal);
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        members
          ? callRuntime(
              members.path ? "_fill_global_path_script" : "_fill_global_script",
              id,
              effectFn,
              ...members.args,
            )
          : callRuntime("_script", id, effectFn),
      );
    }

    let signalDeclaration: t.Statement | undefined;
    if (signal.build) {
      // A join with no work but its effect is that effect, which its script
      // registration puts under each member already.
      const onlyEffect =
        !signal.render.length &&
        !signal.values.length &&
        !signal.patch.length &&
        !signal.unpatched.length;
      let value = signal.build();
      // A built bare identifier, or one a `_const`/`_let` store takes as its
      // fn, references its forward target when the module evaluates.
      const buildsEagerForward =
        t.isIdentifier(value) ||
        (t.isCallExpression(value) && t.isIdentifier(value.arguments.at(-1)));

      if (
        !value ||
        (!signal.register &&
          !signal.referenced &&
          t.isFunction(value) &&
          t.isBlockStatement(value.body) &&
          !value.body.body.length)
      ) {
        return;
      }

      if (t.isCallExpression(value)) {
        trimEmptyArgs(value.arguments as t.Expression[]);
      }

      if (isPatch()) {
        const unwrapped = value;
        const binding = signal.referencedBindings;
        if (signal.globalReads) {
          if (!onlyEffect) value = wrapGlobalJoins(signal, value);
        } else if (Array.isArray(binding)) {
          value = wrapJoinFills(signal, binding, value);
        } else if (binding) {
          value = wrapCreatedInit(
            signal,
            binding,
            wrapClosureFill(signal, binding, value),
          );
        }
        // A wrapper takes the signal as a callback whose result goes unused.
        if (
          value !== unwrapped &&
          t.isArrowFunctionExpression(unwrapped) &&
          t.isBlockStatement(unwrapped.body)
        ) {
          unwrapped.body = toOnlyExpressionOrBlock(unwrapped.body.body);
        }
      }

      if (signal.register) {
        // A variable's fill applies by the value patcher, imported beside it.
        if (signal.register === "fill") importRuntimeFeature("patches/fill");
        // A patch may carry the registered value (as an entry or in data),
        // so registering it links its resolution.
        if (isPatch()) importRuntimeFeature("patches/bind");
        value = callRuntime(
          signal.register === "fill" ? "_fill_var_resume" : "_var_resume",
          t.stringLiteral(
            getResumeRegisterId(section, signal.referencedBindings, "var"),
          ),
          value,
        );
      }

      if (buildsEagerForward) forEach(signal.forwards, writeSignal);
      const signalDeclarator = t.variableDeclarator(signal.identifier, value);
      signalDeclaration =
        !section.parent &&
        !signal.referencedBindings &&
        (t.isFunctionExpression(value) || t.isArrowFunctionExpression(value))
          ? t.functionDeclaration(
              signal.identifier,
              value.params,
              t.isExpression(value.body)
                ? t.blockStatement([t.expressionStatement(value.body)])
                : value.body,
            )
          : t.variableDeclaration("const", [signalDeclarator]);
      if (signal.export) {
        signalDeclaration = t.exportNamedDeclaration(signalDeclaration);
      }
    }

    traverseReplace(signal, "render", replaceRenderNode, signal);
    traverseReplace(signal, "patch", replaceRenderNode, signal);
    traverseReplace(signal, "unpatched", replaceRenderNode, signal);

    const signalStatements = signal.prependStatements || [];

    if (effectDeclarator) {
      signalStatements.push(t.variableDeclaration("const", [effectDeclarator]));
    }

    if (signalDeclaration) {
      signalStatements.push(signalDeclaration);
    }
    getProgram().node.body.push(...signalStatements);

    written.add(signal);
  }

  return written;
}

// A join's fill members register on its declaration, so tree-shaking keeps
// each with the join.
function wrapJoinFills(
  signal: Signal,
  join: Intersection,
  value: t.Expression,
) {
  const { section } = signal;
  let expr = value;
  // A written join's members re-run it by their join fills where the scope does
  // not init it, else only set their values; an unpatched key re-runs it too.
  const written = isPatchWrittenJoin(join);
  for (const ref of join) {
    const member = getCanonicalBinding(ref);
    const registers = registersJoinFill(member);
    const { unpatchedJoins, joinFill, unpatchedSections } =
      getPatchFill(member);
    const keys: string[] = [];
    let valueKey: string | undefined;
    if (written) {
      if (joinFill === join) keys.push(getPatchFillKey(member));
      else if (registers) valueKey = getPatchFillKey(member);
      if (unpatchedJoins?.includes(join)) {
        keys.push(getPatchFillKey(member, "unpatched"));
      }
    } else if (registers) {
      // In param-selected structure of its own, only its unpatched key reaches.
      if (!dispatchesUnpatchedAt(member, section)) {
        keys.push(getPatchFillKey(member));
      }
      // The unpatched key runs whatever the member's fill does.
      if (unpatchedJoins || unpatchedSections) {
        keys.push(getPatchFillKey(member, "unpatched"));
      }
    }
    // Its keys run the join where its scope reaches it; one after `|` sets the value
    // alone (another signal's may be shaken where this join is kept), on any path.
    const path = keys.length ? getJoinFillPath(section, member) : undefined;
    if (!path) keys.length = 0;
    if (valueKey) keys.push("|", valueKey);
    if (keys.length) {
      const { helper, args } = path || ownSectionPath;
      expr = callRuntime(
        helper,
        t.stringLiteral(keys.join(" ")),
        getScopeAccessorLiteral(member, true),
        expr,
        ...args,
      );
    }
  }
  return expr;
}

const ownSectionPath = { helper: "_fill", args: [] } as const;

// What runs the join from the member's fill: the join in its own section, the
// branch hops from the member's section, or its owner's closure subscribers.
function getJoinFillPath(section: Section, member: Binding) {
  if (member.section === section) return ownSectionPath;
  if (
    section.enclosing.nonOptionalAncestor ===
    member.section.enclosing.nonOptionalAncestor
  ) {
    return getFillJoinHops(section, member.section);
  }
  if (joinsFillOverSubscribers(section, member)) {
    // A chain passing a non-optional section runs the join in its owner's
    // closure subscribers; in stateful structure its closure signal does.
    return {
      helper: "_fill_subscribers",
      args: [
        getClosureAccessorLiteral(member),
        t.numericLiteral(getDynamicClosureIndex(member, section)),
      ],
    } as const;
  }
}

// The fill join over the branch hops from `section` up to `owner`: a chain of one
// kind flattens onto its helper owner-first, as the runtime folds trailing hops.
function getFillJoinHops(section: Section, owner: Section) {
  const hops: ClosureHop[] = [];
  for (let cur = section; cur !== owner; cur = cur.parent!) {
    hops.push(getClosureSignalBuilder(cur)!.hop);
  }
  const conditional = hops[0].kind === "if";
  if (hops.every((hop) => (hop.kind === "if") === conditional)) {
    return {
      helper: conditional ? "_fill_if" : "_fill_for",
      args: hops.reverse().flatMap(getHopArgs),
    } as const;
  }
  // A mixed chain compiles a dispatch builder: the arrow pulls in only the
  // closure kinds its chain uses.
  const joinId = generateUidIdentifier("join");
  let dispatch: t.Expression = joinId;
  for (const hop of hops) {
    dispatch = buildClosureHop(hop, dispatch);
  }
  return {
    helper: "_fill",
    args: [t.arrowFunctionExpression([joinId], dispatch)],
  } as const;
}

// Inside unpatched structure a lone closure over a server fill IS the refresh
// channel: it registers the fill join itself (a branch hop's, here).
function wrapClosureFill(
  signal: Signal,
  closure: Binding,
  value: t.Expression,
) {
  const { section } = signal;
  if (isDynamicClosure(section, closure) || !getClosureSignalBuilder(section)) {
    return value;
  }
  return registersClosureFill(section, closure)
    ? buildClosureFillJoin("_fill", section, closure, value)
    : value;
}

// A closure's fill join in `section`, under its key unless its declaration's
// registration carries it, and under its unpatched key, which re-runs joins too.
function buildClosureFillJoin(
  helper: "_fill" | "_fill_closure",
  section: Section,
  closure: Binding,
  value: t.Expression,
  index?: number,
) {
  // Content a consumer may withhold refreshes under a key of its own; in
  // param-selected structure of its own, only the unpatched key reaches.
  const { splitsContent, unpatchedJoins, unpatchedSections, ownRegistration } =
    getPatchFill(closure);
  const content = section.enclosing.inContentSection && splitsContent;
  const keys: string[] = [];
  if (
    content ||
    (registersJoinFill(closure) && !dispatchesUnpatchedAt(closure, section))
  ) {
    keys.push(getPatchFillKey(closure, content ? "content" : undefined));
  }
  // A declaration registering its unpatched key runs every closure but these.
  if (
    ownRegistration && unpatchedSections
      ? dispatchesUnpatchedAt(closure, section)
      : unpatchedJoins || unpatchedSections
  ) {
    keys.push(getPatchFillKey(closure, "unpatched"));
  }
  return keys.length
    ? callRuntime(
        helper,
        t.stringLiteral(keys.join(" ")),
        getScopeAccessorLiteral(closure, true),
        value,
        index !== undefined && t.numericLiteral(index),
      )
    : value;
}

// A scope a flush creates runs the closure by its init, registered with the
// signal it runs (each fill wrapper returns it).
function wrapCreatedInit(
  signal: Signal,
  closure: Binding,
  value: t.Expression,
) {
  const { section } = signal;
  if (!getCreatedInits(section).get(closure)?.init) return value;
  return callRuntime(
    "_init_resume",
    t.stringLiteral(getResumeRegisterId(section, closure, "init")),
    value,
  );
}

// A fill walks the closure's subscribers by the position each stamped where a
// section reading it joins over them or registers a closure fill join.
const [dispatchesByIndex] = createAnalysisMemo(
  (closure: Binding) =>
    some(
      closure.closureSections,
      (section) =>
        registersClosureFill(section, closure) ||
        (isReadInJoin(section, closure) &&
          joinsFillOverSubscribers(section, closure)),
    ),
  false,
);

// A closure's signal in `section` registers a fill join where that signal is
// the read's only refresh channel: structure the client may render.
function registersClosureFill(section: Section, closure: Binding) {
  return (
    !closure.sources?.state &&
    closure.section !== section &&
    getPatchFill(closure).fillsReads &&
    clientMayRender(section) &&
    closureCarriesFill(closure, section)
  );
}

// A homogeneous hop's runtime args: its owner's node accessor, and an `if`
// hop's branch index.
function getHopArgs(hop: ClosureHop) {
  return hop.kind === "if"
    ? [
        getScopeAccessorLiteral(hop.nodeBinding, true),
        t.numericLiteral(hop.index),
      ]
    : [getScopeAccessorLiteral(hop.nodeBinding, true)];
}

function writeGetters(section: Section) {
  forEach(section.bindings, (binding) => {
    for (const [hoistSection, hasReference] of binding.getters) {
      // A registered getter (`_el`, `_hoist_resume`) is a scope-bound value too.
      if (isPatch() && (!hoistSection || hasReference)) {
        importRuntimeFeature("patches/bind");
      }
      const getterIdentifier = getBindingGetterIdentifier(
        binding,
        hoistSection,
      );
      const accessors: t.Expression[] = [
        getScopeAccessorLiteral(binding, true),
      ];

      if (hoistSection) {
        forEachAncestorSection(
          binding.section,
          hoistSection,
          pushInstancesAccessor,
          accessors,
        );
      }

      getProgram().node.body.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            getterIdentifier,
            hoistSection
              ? hasReference
                ? callRuntime(
                    "_hoist_resume",
                    t.stringLiteral(
                      getResumeRegisterId(hoistSection, binding, "hoist"),
                    ),
                    ...accessors,
                  )
                : callRuntime("_hoist", ...accessors)
              : callRuntime(
                  "_el",
                  t.stringLiteral(getResumeRegisterId(section, binding)),
                  ...accessors,
                ),
          ),
        ]),
      );
    }
  });
}

function pushInstancesAccessor(section: Section, accessors: t.Expression[]) {
  const instancesAccessor = getSectionInstancesAccessorLiteral(section);
  const { branch } = section;
  // The branches of an `<if>` chain share one slot, so the read checks which renders.
  accessors.push(
    branch?.index !== undefined &&
      Array.isArray(branch.nodeBinding.branchBodies)
      ? t.arrayExpression([
          instancesAccessor,
          t.stringLiteral(
            getAccessorPrefix().ConditionalRenderer +
              getScopeAccessor(branch.nodeBinding),
          ),
          t.numericLiteral(branch.index),
        ])
      : instancesAccessor,
  );
}

export function writeRegisteredFns() {
  const registeredFns = getRegisteredFns();
  const statements: t.Statement[] = [];
  for (const registeredFn of registeredFns) {
    let fn: t.Statement;
    if (isScopeBoundFn(registeredFn.node.extra!)) {
      // A scope-bound registration reaches any patched value derived from it: its module
      // links the bind patchers.
      if (isPatch()) {
        importRuntimeFeature("patches/bind");
        // One a holder compares keeps its owner's record.
        if (comparesBoundFn(registeredFn.node.extra!)) {
          importRuntimeFeature("patches/marked-bind");
        }
      }
      let params: (t.Identifier | t.Pattern)[];
      let prologue: t.Statement[] | undefined;
      if (registeredFn.referencedLocals) {
        // The scope hop stays inside the returned function: resume may call
        // the factory before its scopes hydrate (stubs fill in place).
        params = [localsIdentifier];
        if (registeredFn.referencedBindings || registeredFn.referencesScope) {
          prologue = [
            t.variableDeclaration("const", [
              t.variableDeclarator(
                scopeIdentifier,
                t.memberExpression(
                  localsIdentifier,
                  t.identifier(getAccessorProp().Owner),
                ),
              ),
            ]),
          ];
        }
      } else {
        params = [scopeIdentifier];
      }
      // A const arrow (unlike a function declaration) lets the minifier fold
      // the factory into its lone `_resume` call site.
      const body = toReturnedFunction(registeredFn.node, prologue);
      fn = t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(registeredFn.id),
          t.arrowFunctionExpression(
            params,
            body.length === 1 && body[0].type === "ReturnStatement"
              ? body[0].argument!
              : t.blockStatement(body),
          ),
        ),
      ]);
    } else if (
      registeredFn.node.type === "FunctionDeclaration" &&
      registeredFn.node.id?.name === registeredFn.id
    ) {
      fn = registeredFn.node;
    } else {
      fn = t.functionDeclaration(
        t.identifier(registeredFn.id),
        registeredFn.node.params as t.FunctionDeclaration["params"],
        registeredFn.node.body.type === "BlockStatement"
          ? registeredFn.node.body
          : t.blockStatement([t.returnStatement(registeredFn.node.body)]),
        registeredFn.node.generator,
        registeredFn.node.async,
      );
    }

    statements.push(fn);
  }

  for (const registeredFn of registeredFns) {
    const fn = registeredFn.node.extra as t.FunctionExtra & t.NodeExtra;
    const live = isPatch() && !!getLiveCaptures(fn);
    // A capture a join's fill sets marks its change, which judges the bind.
    if (live && some(getReferencedBindingsInFunction(fn), isJoinFilled)) {
      importRuntimeFeature("patches/fill-change");
    }
    statements.push(
      t.expressionStatement(
        // A live function a patch binds records what resume revives of it.
        live
          ? callRuntime(
              "_bind_resume",
              t.stringLiteral(
                registeredFn.registerId + " " + getLiveCaptures(fn),
              ),
              t.identifier(registeredFn.id),
            )
          : registerRuntimeValue(
              registeredFn.registerId,
              t.identifier(registeredFn.id),
            ),
      ),
    );
  }

  getProgram().node.body.push(...statements);
}

function toReturnedFunction(rawFn: t.Function, prologue?: t.Statement[]) {
  const fn = simplifyFunction(rawFn);
  if (prologue) {
    if (fn.body.type !== "BlockStatement") {
      fn.body = t.blockStatement([t.returnStatement(fn.body)]);
    }
    fn.body.body.unshift(...prologue);
  }
  return fn.type === "FunctionDeclaration"
    ? [fn, t.returnStatement(fn.id!)]
    : [t.returnStatement(fn)];
}

export function addHTMLEffectCall(section: Section, expr?: t.NodeExtra) {
  const signal = getExprSignal(section, expr);
  signal.hasHTMLEffect = signal.storesValue = true;
}

export function toSequenceExpression(exprs: t.Expression[]) {
  return exprs.length === 1 ? exprs[0] : t.sequenceExpression(exprs);
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>,
) {
  const bodyPath = flushInto(path);
  const section = getSectionForBody(bodyPath);
  if (!section) return;

  const body = bodyPath.node.body as t.Statement[];
  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);
  // Whether any node of the section writes a marker, as the same argument
  // shape `_if` and `_await` take: absent when always, `0` when never.
  const markerGuard = getWriteGuardForAny(
    section,
    getNodeReasons(section),
    true,
  );
  const sectionReason = getSectionWriteReason(section);
  forEach(section.referencedClosures, (closure) => {
    // A constant never changes, so nothing subscribes to it.
    if (closure.sources && closure.type !== BindingType.constant) {
      if (isDynamicClosure(section, closure) && shipsClosureScopes(closure)) {
        const closureSignal = getSignal(closure.section, closure);
        let identifier =
          htmlDynamicClosureInstancesIdentifier.get(closureSignal);
        if (!identifier) {
          htmlDynamicClosureInstancesIdentifier.set(
            closureSignal,
            (identifier = generateUidIdentifier(
              closureSignal.identifier.name + "__closures",
            )),
          );

          getHTMLSectionStatements(closure.section).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                t.newExpression(t.identifier("Set"), []),
              ),
            ]),
          );
          const scopesSlot = findSlot(closure, SlotKind.ClosureScopes);
          // Only an unfilled read subscribes; a set none joins still ships, as
          // writing it at its first join costs more runtime than it saves.
          writeSlot(
            scopesSlot,
            (isPatch() &&
              getClosureScopesIfWritten(
                closure,
                scopesSlot?.reason,
                identifier,
              )) ||
              identifier,
          );
        }

        const closureIndex = getDynamicClosureIndex(closure, section);
        if (closureIndex) {
          writeSlot(
            findSlot(closure, SlotKind.ClosureSignalIndex, section),
            t.numericLiteral(closureIndex),
          );
        }

        const closureScopesReason = findSlot(
          closure,
          SlotKind.ClosureScopes,
        )?.reason;
        const readSources =
          isPatch() && !closure.sources.state
            ? getClosureReadSources(closure, section)
            : undefined;
        const groupArgs = readSources && getRootGroupArgs(section, readSources);
        // A patch-filled reader needs no dispatch unless the client can change
        // the owner value (`_unfilled_if`).
        const unfilledGroupArgs =
          isPatch() && !someReadIn(closure, section, isResumedRead)
            ? groupArgs
            : undefined;
        const subscribeArg =
          isConditionalReason(closureScopesReason) &&
          !isSameReason(closureScopesReason, sectionReason) &&
          // `_unfilled_if` on the same root group already tests the mask.
          !(
            unfilledGroupArgs?.length &&
            isSameReason(closureScopesReason, readSources)
          )
            ? getExprIfWritten(closure.section, closureScopesReason, identifier)
            : identifier;
        const subscribed = unfilledGroupArgs
          ? t.logicalExpression(
              "&&",
              callRuntime("_unfilled_if", ...unfilledGroupArgs),
              subscribeArg,
            )
          : subscribeArg;
        const changeable = resumesSubscriber(section, closure);
        addWriteScopeBuilder(section, (expr) => {
          const resumeId =
            changeable &&
            t.stringLiteral(getResumeRegisterId(section, closure, "subscribe"));
          return callRuntime(
            "_subscribe",
            subscribed,
            expr,
            // A value a patch fills can change before the subscriber resumes.
            resumeId && groupArgs?.length && !fillSubscribes(closure, section)
              ? t.logicalExpression(
                  "&&",
                  getCallerGroupGuard(section, "_client_guard", readSources)!,
                  resumeId,
                )
              : resumeId,
            resumeId && markerGuard,
          );
        });
      }
    }
  });

  // A scope with client work reading `$global` keys joins their readers.
  for (const [id, unfilled] of getGlobalJoins(section)) {
    body.push(
      t.expressionStatement(
        callRuntime(
          "_fill_global_subscribe",
          t.stringLiteral(id),
          subscribesLoopOwner(section)
            ? getScopeIdIdentifier(section.parent!)
            : scopeIdIdentifier,
          unfilled === true
            ? t.numericLiteral(1)
            : unfilled &&
                getCallerGroupGuard(section, "_client_guard", unfilled),
        ),
      ),
    );
  }

  // Effects carry no order (CONTEXT.md Effect), so neither this loop's direction
  // nor its place after the section's body holds one.
  const patches = isPatch();
  const initScripts = new Map<Signal, t.Expression>();
  for (let i = allSignals.length; i--;) {
    const signal = allSignals[i];
    if (signal.hasHTMLEffect) {
      const entry = patches && getEffectEntryArgs(section, signal);
      const script = callRuntime(
        "_script",
        scopeIdIdentifier,
        t.stringLiteral(getSignalRegisterId(signal)),
        entry ? markerGuard || t.numericLiteral(1) : markerGuard,
        ...(entry || []),
      );
      // A patch's join init may run the effect instead of its entry.
      const ref = signal.referencedBindings;
      if (entry && Array.isArray(ref) && getMixedJoinInits(section).has(ref)) {
        initScripts.set(signal, script);
      } else {
        body.push(t.expressionStatement(script));
      }
    }
  }

  const debug = !isOptimize();
  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const pendingProperties = getScopeProperties(section);
  const scopeProperties: t.ObjectProperty[] = [];
  // A patch root writes on every page render, so each property keeps its
  // own guard.
  const scopeGuardsReason = !patches || !!section.parent;
  const ifWritten = (reason: Reason, expr: t.Expression) => {
    if (scopeGuardsReason && isSameReason(sectionReason, reason)) return expr;
    return getExprIfWritten(section, reason, expr);
  };

  let debugVars: t.ObjectProperty[] | undefined;
  const writeBinding = (binding: Binding) => {
    const reason = getWriteReason(binding);
    if (!reason) return;
    const accessor = getScopeAccessor(binding);
    const value = getDeclaredBindingExpression(binding);
    pendingProperties.delete(accessor);
    scopeProperties.push(
      toObjectProperty(
        accessor,
        (isPatch() && getExprIfUnfilled(section, binding, reason, value)) ||
          ifWritten(reason, value),
      ),
    );

    if (debug) {
      const { root, access } = getDebugAccess(binding, false, toAccess);
      const locExpr = root.loc && t.stringLiteral(getDebugLoc(root.loc));
      (debugVars ||= []).push(
        toObjectProperty(
          getScopeAccessor(binding),
          root !== binding
            ? t.arrayExpression(
                locExpr
                  ? [t.stringLiteral(root.name + access), locExpr]
                  : [t.stringLiteral(root.name + access)],
              )
            : locExpr || t.numericLiteral(0),
        ),
      );
    }
  };

  forEach(section.bindings, (binding) => {
    if (binding.type !== BindingType.dom) {
      writeBinding(binding);
    }
  });

  const paramWrites: t.Statement[] = [];
  const fillCalls = patches ? getPatchFillCalls(section, paramWrites) : [];
  if (patches) {
    writePatchResumeStatements(section, body, paramWrites, initScripts);
  }

  if (section.parent) {
    const ownerAccessor = getAccessorProp().Owner;
    const ownerReason = findSectionSlot(section, SlotKind.Owner)?.reason;
    if (ownerReason) {
      pendingProperties.delete(ownerAccessor);
      if (!getOwnerResumedByMarker(section)) {
        scopeProperties.push(
          toObjectProperty(
            ownerAccessor,
            ifWritten(
              ownerReason,
              callRuntime(
                "_scope_with_id",
                getScopeIdIdentifier(section.parent),
              ),
            ),
          ),
        );
      }
    }
  }

  for (const [key, { expression, reason }] of pendingProperties) {
    scopeProperties.push(toObjectProperty(key, ifWritten(reason, expression)));
  }

  if (sectionReason) {
    for (const prop of scopeProperties) {
      if (
        prop.key.type === "Identifier" &&
        prop.value.type === "Identifier" &&
        prop.key.name === prop.value.name
      ) {
        prop.shorthand = true;
      }
    }

    const writeScopeArgs: t.Expression[] = [
      scopeIdIdentifier,
      t.objectExpression(scopeProperties),
    ];

    if (debug) {
      writeScopeArgs.push(
        t.stringLiteral(getFile().opts.filenameRelative as string),
        section.loc && section.loc.start.line != null
          ? t.stringLiteral(getDebugLoc(section.loc))
          : t.numericLiteral(0),
      );

      for (const [accessor, varLoc] of getSectionDebugVars(section)) {
        (debugVars ||= []).push(
          toObjectProperty(accessor, t.valueToNode(varLoc)),
        );
      }

      if (debugVars) {
        writeScopeArgs.push(t.objectExpression(debugVars));
      }
    }

    const writeCall = writeScopeBuilder
      ? writeScopeBuilder(callRuntime("_scope", ...writeScopeArgs))
      : callRuntime("_scope", ...writeScopeArgs);
    // Child sections gate through their cross-section guards, but for a global
    // reason: it holds on every page, and a patch render's `_scope` writes nothing.
    const write =
      scopeGuardsReason &&
      !(isConditionalReason(sectionReason) && sectionReason.global)
        ? getExprIfWritten(section, sectionReason, writeCall)
        : writeCall;
    // A known child's fills take its write's place in a patch render, where
    // `_scope` writes nothing.
    body.push(
      t.expressionStatement(
        fillCalls.length && isKnownChild(section)
          ? t.logicalExpression("||", write, toSequenceExpression(fillCalls))
          : write,
      ),
    );
  } else if (fillCalls.length) {
    body.push(t.expressionStatement(toSequenceExpression(fillCalls)));
  }

  const resumeClosestBranch =
    !isOptionalBranch(section) &&
    (section.hasAbortSignal ||
      !!section.referencedClosures ||
      (sectionReason && some(section.bindings, isLetBinding)));

  // The walker places a scope whose marker it visits, so a section that always
  // writes one needs no link; a dynamic marker guards it, none writes it plain.
  if (resumeClosestBranch && markerGuard) {
    // An abort signal's effect always ships; a closure subscription only with
    // the scope write, so the link borrows that guard.
    const call = callRuntime("_resume_branch", scopeIdIdentifier);
    const link = section.hasAbortSignal
      ? call
      : getExprIfWritten(section, sectionReason, call);
    if (link) {
      body.push(
        t.expressionStatement(
          markerGuard.type === "NumericLiteral"
            ? link
            : t.logicalExpression("||", markerGuard, link),
        ),
      );
    }
  }

  if (paramWrites.length) {
    // The params' writes lead the body, after its reason where it has one.
    const reason = getEmittedReasonStatement(section);
    body.splice(reason ? body.indexOf(reason) + 1 : 0, 0, ...paramWrites);
  }
  const additionalStatements = getHTMLSectionStatements(section);
  if (body.length || additionalStatements.length) {
    body.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(scopeIdIdentifier, callRuntime("_scope_id")),
      ]),
      ...additionalStatements,
    );
  }

  if (debug) {
    forEach(section.bindings, (binding) => {
      if (binding.hoists && binding.type !== BindingType.dom) {
        body.push(
          t.expressionStatement(
            callRuntime("_assert_hoist", t.identifier(binding.name)),
          ),
        );
      }
    });
  }

  const returnIdentifier = getSectionReturnValueIdentifier(section);
  if (returnIdentifier !== undefined) {
    body.push(t.returnStatement(returnIdentifier));
  }
}

export function getSetup(section: Section) {
  return getSignals(section).get(undefined);
}

function replaceRenderNode(node: t.Node, signal?: Signal) {
  return (
    replaceAssignedNode(node) ||
    replaceBindingReadNode(node, signal) ||
    replaceRegisteredFunctionNode(node)
  );
}

function replaceEffectNode(node: t.Node) {
  return replaceAssignedNode(node) || replaceBindingReadNode(node);
}

function replaceBindingReadNode(node: t.Node, signal?: Signal) {
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "OptionalMemberExpression": {
      return getReadReplacement(node, signal);
    }
    case "CallExpression":
    case "OptionalCallExpression": {
      const { extra } = node.callee;

      if (extra?.read) {
        const { binding, getter } = extra.read;

        if (binding.type === BindingType.dom && !getter) {
          const replacement = createScopeReadExpression(
            binding,
            extra!.section,
          );
          return isOptimize()
            ? replacement
            : callRuntime("_el_read", replacement);
        } else if (getter?.hoisted) {
          node.callee = t.callExpression(
            getBindingGetterIdentifier(binding, getter.hoisted),
            [getScopeExpression(extra.section!, getter.hoisted)],
          );
        }
      }
      break;
    }
  }
}

const updateExpressions = new WeakSet<t.Node>();
function replaceAssignedNode(node: t.Node): t.Node | undefined {
  switch (node.type) {
    case "ExpressionStatement": {
      if (
        node.expression.type === "BinaryExpression" &&
        updateExpressions.delete(node.expression)
      ) {
        node.expression = node.expression.left as t.Expression;
      }

      if (
        node.expression.type === "CallExpression" &&
        updateExpressions.delete(node.expression)
      ) {
        node.expression.callee = node.expression
          .arguments[0] as t.MemberExpression;
        node.expression.arguments = [node.expression.arguments[1]];
      }
      break;
    }
    case "UpdateExpression": {
      const { extra } = node.argument;
      if (isAssignedBindingExtra(extra)) {
        // `+` applies `ToNumber` so a string tag variable increments numerically;
        // a bigint one throws either way and is deliberately unsupported here.
        let builtAssignment = getBuildAssignment(extra)?.(
          extra.section,
          t.binaryExpression(
            node.operator === "++" ? "+" : "-",
            t.unaryExpression(
              "+",
              createScopeReadExpression(extra.assignment, extra.section),
            ),
            t.numericLiteral(1),
          ),
        );
        if (builtAssignment) {
          if (!node.prefix) {
            builtAssignment = t.binaryExpression(
              node.operator === "++" ? "-" : "+",
              builtAssignment,
              t.numericLiteral(1),
            );
            updateExpressions.add(builtAssignment);
          }

          return builtAssignment;
        }
      }
      break;
    }
    case "AssignmentExpression":
      switch (node.left.type) {
        case "Identifier": {
          const { extra } = node.left;
          if (isAssignedBindingExtra(extra)) {
            const { operator } = node;
            const shortCircuits =
              operator === "||=" || operator === "&&=" || operator === "??=";
            const readAssigned = () =>
              createScopeReadExpression(extra.assignment, extra.section);
            const builtAssignment = getBuildAssignment(extra)?.(
              extra.section,
              operator === "=" || shortCircuits
                ? node.right
                : t.binaryExpression(
                    operator.slice(0, -1) as t.BinaryExpression["operator"],
                    readAssigned(),
                    node.right,
                  ),
            );

            if (builtAssignment) {
              // Short circuits as the source does, so the setter — and any
              // `valueChange` it calls — is skipped when the read decides.
              return shortCircuits
                ? t.logicalExpression(
                    operator.slice(0, -1) as t.LogicalExpression["operator"],
                    readAssigned(),
                    builtAssignment,
                  )
                : builtAssignment;
            }
          }

          return (
            extra?.assignment &&
            withLeadingComment(node.right, getDebugName(extra.assignment))
          );
        }
        case "ArrayPattern":
        case "ObjectPattern": {
          let params: undefined | t.Identifier[];
          let assignments: undefined | t.Expression[];
          forEachIdentifier(node.left, (id) => {
            const { extra } = id;
            if (isAssignedBindingExtra(extra)) {
              const buildAssignment = getBuildAssignment(extra);
              if (buildAssignment) {
                const uid = generateUid(id.name);
                const builtAssignment = buildAssignment(
                  extra.section,
                  t.identifier(uid),
                );
                if (builtAssignment) {
                  id.name = uid;
                  (params ||= []).push(t.identifier(uid));
                  (assignments ||= []).push(builtAssignment);
                  return;
                }
              }
            }

            if (extra?.assignment) {
              (params ||= []).push(t.identifier(id.name));
            }
          });
          if (assignments || params) {
            const resultId = generateUid("result");
            return t.callExpression(
              t.arrowFunctionExpression(
                [t.identifier(resultId), ...(params || [])],
                t.sequenceExpression([
                  t.assignmentExpression(
                    "=",
                    node.left,
                    t.identifier(resultId),
                  ),
                  ...(assignments || []),
                  t.identifier(resultId),
                ]),
              ),
              [node.right],
            );
          }
          break;
        }
      }
      break;
  }
}

// A pruned change binding (an ancestor is already tracked) reads through the
// nearest kept ancestor's property chain.
function getChangeHandlerRead(
  binding: Binding,
  section: Section,
): t.Expression {
  return binding.pruned && binding.property !== undefined && binding.aliasOf
    ? toMemberExpression(
        getChangeHandlerRead(binding.aliasOf, section),
        binding.property,
        false,
      )
    : createScopeReadExpression(binding, section);
}

function getBuildAssignment(extra: AssignedBindingExtra) {
  const { assignmentTo, assignment } = extra;
  if (assignmentTo) {
    return (section: Section, value: t.Expression) => {
      const replacement = callRuntime(
        "_call",
        getChangeHandlerRead(assignmentTo, section),
        value,
      );
      updateExpressions.add(replacement);
      return replacement;
    };
  }

  return getSignal(assignment.section, assignment).buildAssignment;
}

const [getRegisteredFns] = createOutputState<
  {
    id: string;
    registerId: string;
    node: t.Function;
    section: Section;
    referencesScope: undefined | boolean;
    referencedBindings: ReferencedBindings;
    referencedLocals: Opt<Binding>;
  }[]
>(() => []);
export function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod": {
      const replacement = registerFnExpression(node);
      return replacement && replaceMethodNode(node, replacement);
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return registerFnExpression(node);
    case "FunctionDeclaration": {
      const replacement = registerFnExpression(node);
      return (
        replacement &&
        t.variableDeclaration("const", [
          t.variableDeclarator(node.id!, replacement),
        ])
      );
    }
  }
}

function registerFnExpression(node: t.Function) {
  const { extra } = node;
  if (isRegisteredFnExtra(extra)) {
    const id = extra.name;
    const referencesScope = extra.referencesScope;
    const referencedBindings = getReferencedBindingsInFunction(extra);
    const referencedLocals = extra.referencedLocalBindingsInFunction;
    getRegisteredFns().push({
      id,
      node,
      registerId: extra.registerId,
      section: extra.section,
      referencesScope,
      referencedBindings,
      referencedLocals,
    });

    if (referencedLocals) {
      // The argument mirrors the locals scope `_resume_locals` serializes.
      const properties: t.ObjectExpression["properties"] = [];
      if (referencesScope || referencedBindings) {
        properties.push(
          t.objectProperty(
            t.identifier(getAccessorProp().Owner),
            scopeIdentifier,
          ),
        );
      }
      forEach(referencedLocals, (binding) => {
        properties.push(
          toObjectProperty(
            getLocalsScopeAccessor(binding),
            getDeclaredBindingExpression(binding),
          ),
        );
      });
      return t.callExpression(t.identifier(id), [
        t.objectExpression(properties),
      ]);
    } else if (referencesScope || referencedBindings) {
      return t.callExpression(t.identifier(id), [scopeIdentifier]);
    } else {
      return t.identifier(id);
    }
  }
}

function appendBindingKey(name: string, binding: Binding, section: Section) {
  return `${name}_${binding.name}#${binding.section === section ? "" : binding.section.id + ":"}${binding.id}`;
}

function isLetBinding(binding: Binding) {
  return binding.type === BindingType.let;
}

function getDebugLoc({ start }: t.SourceLocation) {
  return `${start.line}:${start.column + 1}`;
}

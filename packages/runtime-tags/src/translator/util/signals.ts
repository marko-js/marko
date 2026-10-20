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
  isTemplateParam,
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
  last,
  type Opt,
  push,
  reduce,
  some,
  toArray,
} from "./optional";
import {
  getCreatedInits,
  isPatchWrittenJoin,
  getPatchFillKey,
  joinsFillOverSubscribers,
  registersJoinFill,
  getCallerHeldSources,
  getPatchFill,
  getPatchWrite,
  isReadInJoin,
  fillSubscribes,
  getClosureReadSources,
  isResumedRead,
  closureCarriesFill,
  dispatchesUnpatchedAt,
  rerunsEffectOnPatch,
  hasTagCallerParamAt,
} from "./patch/refresh";
import {
  patchWrites,
  getCallerOwnedStructure,
  patchesBranchesAt,
} from "./patch/structure";
import {
  getClosureScopesIfWritten,
  getPatchWriteOwnership,
  getUnfilledValueIfWritten,
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
  isOptionalBranch,
  type Section,
  sectionUtil,
} from "./sections";
import { isQueuedOnCreate, shipsContentShell } from "./shell";
import { replaceMethodNode, simplifyFunction } from "./simplify-fn";
import { findSectionSlot, findSlot, type PlaceSlot, SlotKind } from "./slots";
import { mergeSources, type Sources } from "./sources";
import { createOutputSectionState, createOutputState } from "./state";
import { toOnlyExpressionOrBlock } from "./to-only-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { getRestPattern, withRestFallback } from "./translate-var";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";
import {
  getExprIfWritten,
  getWriteGuardForAny,
  getWriteReason,
  isSameReason,
  scopePageIdentifier,
  getSlotWriteReason,
  getSectionWriteReason,
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
  /** Dispatch into caller-owned structure a fill reaches only under its
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
const [getClosureSignal, _setClosureSignal] = createOutputSectionState<
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
  for (let i = closures.length, section = bodySection.parent!; i;) {
    const props: t.ObjectProperty[] = [];
    while (i && closures[i - 1].section === section) {
      const closure = closures[--i];
      props.push(
        toObjectProperty(
          getScopeAccessor(closure),
          getDeclaredBindingExpression(closure),
        ),
      );
    }
    // Resume walks up through each owner while the payload evaluates, before
    // any scope flush could link it, so every level below another links its owner.
    if (i) {
      props.push(
        toObjectProperty(
          ownerAccessor,
          t.callExpression(scope, [getScopeIdIdentifier(section.parent!)]),
        ),
      );
    }
    levels.push(t.objectExpression(props));
    section = section.parent!;
  }
  return { scope, levels: levels.reverse() };
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
    const signalName =
      (name ??
        (referencedBindings
          ? getDebugNamesAsIdentifier(referencedBindings)
          : "setup")) +
      (globalJoinReads
        ? "__" + getDebugNamesAsIdentifier(globalJoinReads)
        : "");
    const exportName =
      !globalJoinReads &&
      (referencedBindings
        ? !Array.isArray(referencedBindings) &&
          referencedBindings.section === section &&
          getProgram().node.extra.exportNames!.params.get(referencedBindings)
        : !section.parent && getProgram().node.extra.exportNames!.setup);

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
          globalJoinReads ||
          (referencedBindings &&
            (Array.isArray(referencedBindings) ||
              referencedBindings.type === BindingType.dom ||
              referencedBindings.type === BindingType.let ||
              referencedBindings.section !== section ||
              referencedBindings.closureSections ||
              referencedBindings.hoists ||
              referencedBindings.localOf))
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
      parent.storesValue = true;
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
        const closureSignal = getClosureSignal(section);
        if (closureSignal && !isDynamicClosure(section, closure)) {
          return closureSignal.build(closure, render);
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
        // Kept: a scope a flush creates runs only the ids its shell or flush
        // names, so no shipped code reaches a subscriber it names.
        const patchResumed =
          !!subscribe && (subscribe === "always" || !!subscribe.unfilled);
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
            !patchResumed && resumeId,
          ]),
        );
        const index = getDynamicClosureIndex(closure, section);
        if (fills) {
          // Deep closure positions reassemble the indexed composite via a
          // shared per-key table, keyed by the serialized index.
          closureGet = buildClosureFillJoin(
            "_fill_join_closure",
            section,
            closure,
            closureGet,
            index,
          );
        } else if (index && dispatchesByIndex(closure)) {
          // A created later position carries the index its owner's composite
          // would stamp, which a fill join over the subscribers matches.
          closureGet = callRuntime(
            "_closure_index",
            t.numericLiteral(index),
            closureGet,
          );
        }
        if (patchResumed) {
          closureGet = callRuntime("_closure_resume", resumeId, closureGet);
        }
        return closureGet;
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

// The joins a changed `$global` key re-runs on `section`'s scopes: `true` if
// resumed code renders the read, else the sources the client may own.
export function getGlobalJoins(section: Section) {
  const joins = new Map<string, true | Sources | undefined>();
  for (const expr of section.globalReadExprs || []) {
    const referencedBindings = getReferencedBindings(expr);
    // The client runs a written join wherever its group has a client member.
    const unfilled =
      getCallerHeldSources(referencedBindings) ||
      isResumedRead(expr) ||
      (Array.isArray(referencedBindings) &&
        isPatchWrittenJoin(referencedBindings) &&
        getSourcesForRef(referencedBindings));
    const id = getGlobalJoinId(
      section,
      referencedBindings,
      getGlobalJoinReads(expr, getGlobalReads(expr)!),
    );
    const prev = joins.get(id);
    joins.set(
      id,
      prev === true || unfilled === true
        ? true
        : mergeSources(prev, unfilled || undefined),
    );
  }
  return joins;
}

// Registers a `$global` join under each key it reads, with any nested paths it
// reads there: pure, so the consumer's retention decides if a key has a reader.
function wrapGlobalJoins(signal: Signal, value: t.Expression): t.Expression {
  const id = t.stringLiteral(getSignalRegisterId(signal));
  let join = value;
  for (const [key, paths] of getGlobalPaths(signal)) {
    join = callRuntime(
      "_fill_global_path_join",
      t.stringLiteral(key),
      id,
      join,
      ...paths,
    );
  }
  return reduce(
    filter(signal.globalReads, isGlobalKey),
    (expr, key) =>
      callRuntime("_fill_global_join", toGlobalKeyLiteral(key), id, expr),
    join,
  );
}

// The nested paths a signal reads, by key and relative to it, as arrays so any
// property holds; a read below another of its reads is covered by that one.
function getGlobalPaths(signal: Signal) {
  const paths = new Map<string, t.ArrayExpression[]>();
  forEach(signal.globalReads, (read) => {
    if (isGlobalKey(read)) return;
    for (let above = read.aliasOf; above; above = above.aliasOf) {
      if (bindingUtil.has(signal.globalReads, above)) return;
    }
    const key = toGlobalKey(read);
    const path = t.arrayExpression(
      toArray(getPropertyPath(read, key), (property) =>
        t.stringLiteral(property),
      ),
    );
    const keyPaths = paths.get(key.property!);
    if (keyPaths) keyPaths.push(path);
    else paths.set(key.property!, [path]);
  });
  return paths;
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

// A key's name in `$global`; `""` is the whole object.
function toGlobalKeyLiteral(key: Binding) {
  return t.stringLiteral(key.property ?? "");
}

export function initValue(binding: Binding, isLet = false) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  // Lazy reads read the value from its scope slot.
  if (binding.hasLazyReads) signal.forceStore = true;
  signal.build = () => {
    // A value a patch writes in place takes the write patcher; a join's member
    // write rides `patches/value`, which the caller's client state fill brings.
    if (isPatch() && getPatchWrite(binding).write) {
      importRuntimeFeature("patches/write");
    }
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
      // A fill no caller-owned structure re-renders applies by its patcher;
      // one only caller-owned structure or a join needs rides the call site's.
      if (fillsWithoutStructure) importRuntimeFeature("patches/value");
      const key = t.stringLiteral(getPatchFillKey(binding));
      const accessor = getScopeAccessorLiteral(binding, true, isLet);
      // Where only the key reaches it, the fill's registration ships it and
      // its value signal stays pure; elsewhere what reaches the signal does.
      if (!ownRegistration) {
        return callRuntime(`_fill${helper}`, key, accessor, fn, signal.fillFn);
      }
      const value = callRuntime(helper, ...trimEmptyArgs([accessor, fn]));
      if (!signal.fillFn) return callRuntime("_fill_resume", key, value);
      // The registration keeps the fill's run alone, under its unpatched key as a
      // join, which closures below caller-owned structure of its own chain onto.
      const id = getScopeAccessorLiteral(binding, true);
      const run = unpatchedSections
        ? callRuntime(
            "_fill_join",
            t.stringLiteral(getPatchFillKey(binding, "unpatched")),
            id,
            signal.fillFn,
          )
        : signal.fillFn;
      (signal.prependStatements ||= []).push(
        t.expressionStatement(
          callRuntime("_fill_resume", key, callRuntime("_const", id, run)),
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

// An effect a created scope's shell leaves out: one its render queues, or one
// reading a value a patch writes, which its entry mounts.
export function isEffectOutsideShell(
  section: Section,
  refs: ReferencedBindings,
) {
  return isQueuedOnCreate(section, refs) || some(refs, rerunsEffectOnPatch);
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

// A forward a patch renders is a patch statement, like a hole it writes.
function forwardsTo(signal: Signal, target: Signal) {
  return isPatch() && patchRendersInto(target) ? signal.patch : signal.render;
}

// A patch render runs a signal when every render is a hole it writes or a
// forward it runs (a cycle resolves as the client's).
function patchRenders(signal: Signal): boolean {
  if (signal.patchRendered === undefined) {
    signal.patchRendered = false;
    signal.patchRendered = patchesStructure(signal) || !hasClientRender(signal);
  }
  return signal.patchRendered;
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
    signal.effect.length ||
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
  forwardsTo(signal, target).push(
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
  // scope does a written join's where its group mixes, whose init brings its patcher.
  const init = isPatch() && getCreatedInits(section).get(intersection);
  const shellInitId =
    init && getResumeRegisterId(section, intersection, "init");
  return callRuntime(
    shellInitId ? (init.init === "mixed" ? "_patch_or" : "_shell_or") : "_or",
    ...(shellInitId ? [t.stringLiteral(shellInitId)] : []),
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
    forwardsTo(signal, value.signal).push(
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
    pushScopeCall(forwardsTo(signal, intersection), intersection.identifier);
  });

  forEach(signal.globalJoins, (join) => {
    pushScopeCall(forwardsTo(signal, join), join.identifier);
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
          dispatchesUnpatchedAt(binding, closureSection)
            ? signal.unpatched
            : registersClosureFill(closureSection, binding)
              ? signal.render
              : forwardsTo(signal, closureSignal),
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

  if (signal.effect.length) {
    pushScopeCall(signal.render, getSignalEffectIdentifier(signal));
  }

  if (isValue && findSlot(binding)?.reason) {
    signal.storesValue = true;
  }

  let render = signal.render;
  // A fill's run is the render without what the patch renders itself, or
  // what only its unpatched key reaches.
  if (signal.patch.length || signal.unpatched.length) {
    if (isValue && getPatchFill(binding).fillsReads) {
      signal.fillFn = t.cloneNode(toScopeFn(render), true);
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
  const statements = (signal[type] ??= []);

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
    : reduce(
        reads,
        (keys, read) => bindingUtil.add(keys, toGlobalKey(read)),
        undefined as ReferencedBindings,
      );
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
      if (isPatch() && some(signal.referencedBindings, rerunsEffectOnPatch)) {
        importRuntimeFeature("patches/effect");
      }
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = getSignalEffectIdentifier(signal);
      const effectFn = t.arrowFunctionExpression(
        [scopeIdentifier],
        toOnlyExpressionOrBlock(signal.effect),
      );
      // An effect reading `$global` keys runs once per run however many reach
      // it, and its registration carries the keys whose change re-runs it.
      const id = t.stringLiteral(getSignalRegisterId(signal));
      const keys = toArray(
        filter(signal.globalReads, isGlobalKey),
        toGlobalKeyLiteral,
      );
      const paths = getGlobalPaths(signal);
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        paths.size
          ? callRuntime(
              "_fill_global_path_script",
              id,
              effectFn,
              t.objectExpression(
                Array.from(paths, ([key, keyPaths]) =>
                  toObjectProperty(key, t.arrayExpression(keyPaths)),
                ),
              ),
              ...keys,
            )
          : callRuntime(
              signal.globalReads ? "_fill_global_script" : "_script",
              id,
              effectFn,
              ...keys,
            ),
      );
    }

    let signalDeclaration: t.Statement | undefined;
    if (signal.build) {
      // A join with no work but its effect is that effect, which its script
      // registration puts under each key and nested path already.
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
        if (signal.register === "fill") importRuntimeFeature("patches/value");
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
    traverseReplace(signal, "fillFn", replaceRenderNode, signal);

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
  // The member's fill under `key` runs the join where the member's scope reaches it.
  const register = (member: Binding, key: string) => {
    if (member.section === section) {
      expr = callRuntime(
        "_fill_join",
        t.stringLiteral(key),
        getScopeAccessorLiteral(member, true),
        expr,
      );
    } else if (
      section.enclosing.nonOptionalAncestor ===
      member.section.enclosing.nonOptionalAncestor
    ) {
      const { helper, hops } = getFillJoinHops(section, member.section);
      expr = callRuntime(
        helper,
        t.stringLiteral(key),
        getScopeAccessorLiteral(member, true),
        expr,
        ...hops,
      );
    } else if (joinsFillOverSubscribers(section, member)) {
      // A chain passing a non-optional section runs the join in its owner's
      // closure subscribers; in stateful structure its closure signal does.
      expr = callRuntime(
        "_fill_join_subscribers",
        t.stringLiteral(key),
        getScopeAccessorLiteral(member, true),
        expr,
        getClosureAccessorLiteral(member),
        t.numericLiteral(getDynamicClosureIndex(member, section)),
      );
    }
  };
  // A written join's members re-run it by their join fills where the scope does
  // not init it, else only set their values; an unpatched key re-runs it too.
  const written = isPatchWrittenJoin(join);
  for (const ref of join) {
    const member = getCanonicalBinding(ref);
    const registers = registersJoinFill(member);
    const { unpatchedJoins, joinFill, unpatchedSections } =
      getPatchFill(member);
    if (written) {
      if (joinFill === join) register(member, getPatchFillKey(member));
      else expr = registerValueAlone(member, expr);
      if (unpatchedJoins?.includes(join)) {
        register(member, getPatchFillKey(member, "unpatched"));
      }
    } else if (registers) {
      // In caller-owned structure of its own, only its unpatched key reaches.
      if (!dispatchesUnpatchedAt(member, section)) {
        register(member, getPatchFillKey(member));
      }
      // The unpatched key runs whatever the member's fill does.
      if (unpatchedJoins || unpatchedSections) {
        register(member, getPatchFillKey(member, "unpatched"));
      }
    }
  }
  return expr;
}

// A member's value registers alone on the join: a key on another signal may be
// shaken where this join is kept.
function registerValueAlone(member: Binding, expr: t.Expression) {
  return registersJoinFill(member)
    ? callRuntime(
        "_fill_join",
        t.stringLiteral(getPatchFillKey(member)),
        getScopeAccessorLiteral(member, true),
        expr,
        t.arrowFunctionExpression(
          [],
          t.arrowFunctionExpression([], t.blockStatement([])),
        ),
      )
    : expr;
}

// The fill join over the branch hops from `section` up to `owner`, each from
// its branch's registered hop: a homogeneous chain flattens onto its kind's
// helper owner-first, as the runtime folds trailing hops outward.
function getFillJoinHops(section: Section, owner: Section) {
  const hops: ClosureHop[] = [];
  for (let cur = section; cur !== owner; cur = cur.parent!) {
    hops.push(getClosureSignal(cur)!.hop);
  }
  const conditional = hops[0].kind === "if";
  if (hops.every((hop) => (hop.kind === "if") === conditional)) {
    return {
      helper: conditional ? "_fill_join_if" : "_fill_join_for",
      hops: hops.reverse().flatMap(getHopArgs),
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
    helper: "_fill_join",
    hops: [t.arrowFunctionExpression([joinId], dispatch)],
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
  return !isDynamicClosure(section, closure) &&
    getClosureSignal(section) &&
    registersClosureFill(section, closure)
    ? buildClosureFillJoin("_fill_join", section, closure, value)
    : value;
}

// A closure's fill join in `section`, under its key unless its declaration's
// registration carries it, and under its unpatched key, which re-runs joins too.
function buildClosureFillJoin(
  helper: "_fill_join" | "_fill_join_closure",
  section: Section,
  closure: Binding,
  value: t.Expression,
  index?: number,
) {
  const register = (
    split: "content" | "unpatched" | undefined,
    value: t.Expression,
  ) =>
    callRuntime(
      helper,
      t.stringLiteral(getPatchFillKey(closure, split)),
      getScopeAccessorLiteral(closure, true),
      value,
      index !== undefined && t.numericLiteral(index),
    );
  // Content a consumer may withhold refreshes under a key of its own; in
  // caller-owned structure of its own, only the unpatched key reaches.
  const { splitsContent, unpatchedJoins, unpatchedSections, ownRegistration } =
    getPatchFill(closure);
  const content = section.enclosing.inContentSection && splitsContent;
  const fill =
    content ||
    (registersJoinFill(closure) && !dispatchesUnpatchedAt(closure, section))
      ? register(content ? "content" : undefined, value)
      : value;
  // A declaration registering its unpatched key runs every closure but these.
  return (
    ownRegistration && unpatchedSections
      ? dispatchesUnpatchedAt(closure, section)
      : unpatchedJoins || unpatchedSections
  )
    ? register("unpatched", fill)
    : fill;
}

// A scope a flush creates runs the closure by its init, registered with the
// signal it runs (each fill wrapper returns it).
function wrapCreatedInit(
  signal: Signal,
  closure: Binding,
  value: t.Expression,
) {
  const { section } = signal;
  return getCreatedInits(section).get(closure)?.init
    ? callRuntime(
        "_shell_init",
        t.stringLiteral(getResumeRegisterId(section, closure, "init")),
        value,
      )
    : value;
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
// the read's only refresh channel.
function registersClosureFill(section: Section, closure: Binding) {
  return (
    !closure.sources?.state &&
    closure.section !== section &&
    getPatchFill(closure).fillsReads &&
    (section.enclosing.inContentSection ||
      !patchWrites(section) ||
      !!getCallerOwnedStructure(section)) &&
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
  for (const [id, registeredFn] of registeredFns) {
    let fn: t.Statement;
    if (
      registeredFn.referencedBindings ||
      registeredFn.referencesScope ||
      registeredFn.referencedLocals
    ) {
      // A scope-bound registration can reach any patched value derived from it
      // (an entry, or a reference in data); the module registering it links it.
      if (isPatch()) importRuntimeFeature("patches/bind");
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
          t.identifier(id),
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
      registeredFn.node.id?.name === id
    ) {
      fn = registeredFn.node;
    } else {
      fn = t.functionDeclaration(
        t.identifier(id),
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

  for (const [id, registeredFn] of registeredFns) {
    statements.push(
      t.expressionStatement(
        registerRuntimeValue(registeredFn.registerId, t.identifier(id)),
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
          // Only an unfilled read subscribes, so the set ships only there.
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
        const ownershipArgs =
          readSources && getPatchWriteOwnership(section, readSources);
        // A patch-filled reader needs no dispatch unless the client can change
        // the owner value (`_unfilled_if`).
        const ownership = someReadIn(closure, section, isResumedRead)
          ? undefined
          : ownershipArgs;
        let subscribeArg: t.Expression = identifier;
        if (
          isConditionalReason(closureScopesReason) &&
          !isSameReason(closureScopesReason, sectionReason) &&
          // `_unfilled_if` on the same root group already tests the mask.
          !(
            ownership?.length &&
            isSameReason(closureScopesReason, readSources) &&
            // Root params sort first, so all are when the last is.
            isTemplateParam(last(closureScopesReason.param!))
          )
        ) {
          subscribeArg = getExprIfWritten(
            closure.section,
            closureScopesReason,
            identifier,
          );
        }
        if (ownership) {
          subscribeArg = t.logicalExpression(
            "&&",
            callRuntime("_unfilled_if", ...ownership),
            subscribeArg,
          );
        }
        const changeable = resumesSubscriber(section, closure);
        addWriteScopeBuilder(section, (expr) => {
          let resumeId: t.Expression | undefined;
          if (changeable) {
            resumeId = t.stringLiteral(
              getResumeRegisterId(section, closure, "subscribe"),
            );
            // A value a patch fills can change before the subscriber resumes.
            if (ownershipArgs?.length && !fillSubscribes(closure, section)) {
              resumeId = t.logicalExpression(
                "&&",
                callRuntime("_client_guard", ...ownershipArgs),
                resumeId,
              );
            }
          }
          return callRuntime(
            "_subscribe",
            subscribeArg,
            expr,
            resumeId,
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
          scopeIdIdentifier,
          unfilled === true
            ? t.numericLiteral(1)
            : unfilled &&
                callRuntime(
                  "_client_guard",
                  ...getPatchWriteOwnership(section, unfilled),
                ),
        ),
      ),
    );
  }

  // Mount-effect order is unspecified: resume runs these in reverse
  // signal order, CSR runs the signal graph forward — the two paths differ.
  for (let i = allSignals.length; i--;) {
    if (allSignals[i].hasHTMLEffect) {
      const outsideShell =
        isPatch() &&
        isEffectOutsideShell(section, allSignals[i].referencedBindings);
      body.push(
        t.expressionStatement(
          callRuntime(
            "_script",
            scopeIdIdentifier,
            t.stringLiteral(getSignalRegisterId(allSignals[i])),
            // `_script` reads only a `0` guard, so `1` stands in for none.
            outsideShell ? markerGuard || t.numericLiteral(1) : markerGuard,
            outsideShell && t.numericLiteral(1),
          ),
        ),
      );
    }
  }

  const debug = !isOptimize();
  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const pendingProperties = getScopeProperties(section);
  const scopeProperties: t.ObjectProperty[] = [];
  const patches = isPatch();
  // A patch root writes under `$scope_page`, not its reason, so each
  // property keeps its own guard.
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
        (isPatch() &&
          getUnfilledValueIfWritten(section, binding, reason, value)) ||
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

  const fillCalls: t.Expression[] = patches
    ? writePatchResumeStatements(section, body)
    : [];

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
    // Child sections gate through their cross-section guards (derived
    // from the root reason, so still binary under patches).
    const write = scopeGuardsReason
      ? getExprIfWritten(section, sectionReason, writeCall)
      : writeCall;
    body.push(
      t.expressionStatement(
        // A known child's fills take its write's place in a patch render.
        fillCalls.length && isKnownChild(section)
          ? t.conditionalExpression(
              scopePageIdentifier(section),
              write,
              toSequenceExpression(fillCalls),
            )
          : scopeGuardsReason
            ? write
            : t.logicalExpression("&&", scopePageIdentifier(section), write),
      ),
    );
  } else if (fillCalls.length) {
    body.push(
      t.expressionStatement(
        t.logicalExpression(
          "||",
          scopePageIdentifier(section),
          toSequenceExpression(fillCalls),
        ),
      ),
    );
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

// Keyed by id: a fill's run clones its render, handlers included, and each
// registered function declares once.
const [getRegisteredFns] = createOutputState(
  () =>
    new Map<
      string,
      {
        registerId: string;
        node: t.Function;
        section: Section;
        referencesScope: undefined | boolean;
        referencedBindings: ReferencedBindings;
        referencedLocals: Opt<Binding>;
      }
    >(),
);
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
    const registeredFns = getRegisteredFns();
    // A fill's run clones its render, handlers included: each declares once.
    if (!registeredFns.has(id)) {
      registeredFns.set(id, {
        node,
        registerId: extra.registerId,
        section: extra.section,
        referencesScope,
        referencedBindings,
        referencedLocals,
      });
    }

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

import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import { getSectionReturnValueIdentifier } from "../core/return";
import { localsIdentifier, scopeIdentifier } from "../visitors/program";
import { getAbortIds } from "../visitors/referenced-identifier";
import {
  type Binding,
  BindingType,
  getCanonicalBinding,
  getDebugName,
  getDebugNames,
  getDebugNamesAsIdentifier,
  getDebugScopeAccess,
  type Getter,
  hasNonConstantPropertyAlias,
  type Intersection,
  isDirectAlias,
  isRest,
  type ReferencedBindings,
  bindingUtil,
} from "./bindings";
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
  type SortedOpt,
  toArray,
} from "./optional";
import {
  closureInitsCreated,
  isCreatableBody,
  getCreatedJoins,
  initsCreatedJoin,
  isCreatedScopeSeed,
  contentMayCreate,
  fillJoinsIn,
  getFillRoot,
  getFillConditions,
  getLocalFillClosures,
  getPatchFillBindings,
  getPatchFillKey,
  getCallerHeldSources,
  hasUnfillableGlobalJoinReads,
  hasUnfillablePatchReads,
  hasPatchEffect,
  isPatchWriteBinding,
  isPatchFillBinding,
  fillsReads,
} from "./patch/refresh";
import {
  inResumedStructure,
  getParamRebuildChain,
  inStatefulBranch,
  isBranchPathSection,
  isBranchSectionChain,
  isStatefulBranch,
  getWriteReason,
  hasPatchKeyedNodes,
  getSlotWriteReason,
  getSectionWriteReason,
} from "./patch/structure";
import { getReadReplacement } from "./read-replacement";
import {
  getNodeReasons,
  getSourcesForRef,
  isConditionalReason,
  isUnconditionalReason,
  type Reason,
  sourcesUtil,
} from "./reasons";
import {
  type AssignedBindingExtra,
  getReferencedBindingsInFunction,
  getGlobalKey,
  hasResumableWriter,
  isAssignedBindingExtra,
  isRegisteredFnExtra,
  type ReferencedExtra,
  getLazyBindings,
  getReferencedBindings,
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
  getPrefixedScopeAccessor,
} from "./scope-accessor";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import {
  forEachAncestorSection,
  getContentClosures,
  getDynamicClosureIndex,
  getScopeIdIdentifier,
  getSectionForBody,
  isDynamicClosure,
  isImmediateOwner,
  isResumedBranch,
  type Section,
  sectionUtil,
} from "./sections";
import { simplifyFunction } from "./simplify-fn";
import { findSectionSlot, findSlot, type PlaceSlot, SlotKind } from "./slots";
import { readsValuesOnResume } from "./solve-reasons";
import {
  hasRootParamSource,
  isRootParam,
  mergeSources,
  type Sources,
} from "./sources";
import { createProgramState, createSectionState } from "./state";
import { toFirstExpressionOrBlock } from "./to-first-expression-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { getRestPattern, withRestFallback } from "./translate-var";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";
import {
  getFilledGuard,
  getPatchWriteOwnership,
  getRootParamGroupIndex,
  getUnfilledGuard,
  getUnfilledValueIfWritten,
  getValueIfWritten,
  scopePageIdentifier,
} from "./write-guard";
import {
  getExprIfWritten,
  getWriteGuardForAny,
  isSameReason,
} from "./write-guard";

export interface Signal {
  identifier: t.Identifier;
  referencedBindings: ReferencedBindings;
  section: Section;
  build: undefined | (() => t.Expression | undefined);
  register?: boolean;
  // Other emitted statements reference this signal's identifier directly (eg
  // the `_var` setup call), so even an empty signal keeps its declaration.
  referenced?: boolean;
  values: Array<{
    signal: Signal;
    /** None for a signal that runs on the scope alone. */
    value: t.Expression | undefined;
  }>;
  intersection: Opt<Signal>;
  /** Signals this one forwards into: they must declare first when the
   * forward simplifies to a bare, eagerly evaluated reference. */
  forwards: Opt<Signal>;
  render: t.Statement[];
  /** Renders a patch does itself (its hole writes, forwards into work it
   * renders): a client render needs them, a fill's run does not. */
  patch: t.Statement[];
  /** Whether a patch renders every render of this signal (`patchRenders`). */
  patchRendered?: boolean;
  /** A fill's run when it differs from the render (`render` without `patch`). */
  fillFn: t.Expression | undefined;
  effect: t.Statement[];
  hasHTMLEffect: boolean;
  hasSideEffect: boolean;
  forcePersist: boolean;
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
  initId?: string,
) => t.Expression;
// Structured facts about a branch section's closure hop: what kind of
// branch it is and which accessor (plus branch index) addresses it.
export type ClosureHop =
  | { kind: "if"; ref: Binding; index: number }
  | { kind: "for"; ref: Binding };
export const [getSignals] = createSectionState<Map<unknown, Signal>>(
  "signals",
  () => new Map(),
);
const [getClosureSignal, _setClosureSignal] = createSectionState<
  { hop: ClosureHop; build: closureSignalBuilder } | undefined
>("queue");
export function setClosureSignalBuilder(
  tag: t.NodePath<t.MarkoTag>,
  hop: ClosureHop,
  build: closureSignalBuilder = (_closure, render, initId) =>
    buildClosureHop(hop, render, initId),
) {
  _setClosureSignal(getSectionForBody(tag.get("body"))!, { hop, build });
}

function buildClosureHop(
  hop: ClosureHop,
  render: t.Expression,
  initId?: string,
) {
  const accessor = getScopeAccessorLiteral(hop.ref, true);
  const init = initId && t.stringLiteral(initId);
  return hop.kind === "if"
    ? init
      ? callRuntime(
          "_shell_if_closure",
          init,
          accessor,
          t.numericLiteral(hop.index),
          render,
        )
      : callRuntime(
          "_if_closure",
          accessor,
          t.numericLiteral(hop.index),
          render,
        )
    : init
      ? callRuntime("_shell_for_closure", init, accessor, render)
      : callRuntime("_for_closure", accessor, render);
}

// A branch section whose scope ids ride a resume marker carrying the parent scope
// id when its scopes serialize, so the client links the owner and `_` is not serialized.
const [getOwnerResumedByMarker, setOwnerResumedByMarker] = createSectionState<
  true | undefined
>("ownerResumedByMarker");
export function setSectionOwnerResumedByMarker(section: Section) {
  setOwnerResumedByMarker(section, true);
}

// Registered content's closures its owners' fills may lack, sorted by section:
// one values object per owner down to the content's own.
export function getContentClosureValues(bodySection: Section) {
  const contentClosures = filter(
    getContentClosures(bodySection),
    isConditionallyWritten,
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
    // any fill could link it, so every level below another links its owner.
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

function isConditionallyWritten(closure: Binding) {
  return !isUnconditionalReason(findSlot(closure)?.reason);
}

const [getScopeProperties] = createSectionState<
  Map<string, { expression: t.Expression; reason: Reason }>
>("scopeProperties", () => new Map());
export function setScopeProperty(
  found: PlaceSlot | undefined,
  expression: t.Expression,
) {
  const reason = getSlotWriteReason(found);
  if (reason) {
    const accessor = getSlotAccessor(found!);
    getScopeProperties(found!.section).set(accessor, {
      expression,
      reason,
    });
    return accessor;
  }
}

const [getSectionDebugVars] = createSectionState<
  Map<string, [name: string, loc?: string]>
>("sectionDebugVars", () => new Map());
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
      loc ? [name, `${loc.start.line}:${loc.start.column + 1}`] : [name],
    );
  }
}

const [getSectionWriteScopeBuilder, setSectionWriteScopeBuilder] =
  createSectionState<undefined | ((expr: t.Expression) => t.Expression)>(
    "sectionWriteScopeBuilder",
  );
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

export const [getHTMLSectionStatements] = createSectionState<t.Statement[]>(
  "htmlScopeStatements",
  () => [],
);

const [getBindingGetterIdMap] = createSectionState<Map<Binding, t.Identifier>>(
  "bindingGetterIdMap",
  () => new Map(),
);

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
) {
  if (referencedBindings && !Array.isArray(referencedBindings)) {
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
  let signal = signals.get(referencedBindings)!;
  if (!signal) {
    const signalName =
      name ??
      (referencedBindings
        ? getDebugNamesAsIdentifier(referencedBindings)
        : "setup");
    const exportName = referencedBindings
      ? !Array.isArray(referencedBindings) &&
        referencedBindings.section === section &&
        getProgram().node.extra.exportNames!.params.get(referencedBindings)
      : !section.parent && getProgram().node.extra.exportNames!.setup;

    signals.set(
      referencedBindings,
      (signal = {
        identifier: exportName
          ? t.identifier(exportName)
          : generateUidIdentifier(
              section.name ? `${section.name}__${signalName}` : signalName,
            ),
        referencedBindings,
        section,
        values: [],
        intersection: undefined,
        forwards: undefined,
        render: [],
        patch: [],
        fillFn: undefined,
        effect: [],
        hasHTMLEffect: false,
        build: undefined,
        export: !!exportName,
        hasSideEffect: !!(
          referencedBindings &&
          (Array.isArray(referencedBindings) ||
            referencedBindings.type === BindingType.dom ||
            referencedBindings.type === BindingType.let ||
            referencedBindings.type === BindingType.global ||
            referencedBindings.section !== section ||
            referencedBindings.closureSections ||
            referencedBindings.hoists ||
            referencedBindings.localOf)
        ),
        forcePersist: false,
        inline: undefined,
        extraArgs: undefined,
        prependStatements: undefined,
        buildAssignment: undefined,
      }),
    );

    if (isOutputHTML()) {
      return signal;
    } else if (!referencedBindings) {
      signal.build = () => getSignalFn(signal);
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
            memberSignal.hasSideEffect = memberSignal.forcePersist = true;
          }
        });
      }
      signal.build = () =>
        buildIntersection(
          section,
          referencedBindings,
          getSignalFn(signal),
          true,
        );
    } else if (
      referencedBindings.section !== section &&
      sectionUtil.has(referencedBindings.closureSections, section)
    ) {
      signal.build = () => {
        const closure = referencedBindings;
        const render = getSignalFn(signal);
        const closureSignal = getClosureSignal(section);
        // The creation INIT registers on the closure signal itself (pure
        // fused helpers), so shaking the signal makes a creation fail closed.
        const initId = createsWithInit(section, closure)
          ? getResumeRegisterId(section, closure, "init")
          : undefined;

        // A shell names its creation inits whatever client code reaches the
        // signal, so an init registration is never shaken.
        if (closureSignal && !isDynamicClosure(section, closure)) {
          const built = closureSignal.build(closure, render, initId);
          if (initId) built.leadingComments = null;
          return built;
        }

        const changeable = isChangeableDynamicClosure(section, closure);
        const keepsOwnInit = !!initId && keepsInit(section, closure);
        const getter = callRuntime(
          initId
            ? keepsOwnInit
              ? "_shell_closure_get"
              : "_shell_subscribe_closure_get"
            : "_closure_get",
          ...(initId ? [t.stringLiteral(initId)] : []),
          getClosureAccessorLiteral(closure),
          render,
          isImmediateOwner(section, closure)
            ? undefined
            : t.arrowFunctionExpression(
                [scopeIdentifier],
                getScopeExpression(section, closure.section),
              ),
          // Match the HTML registration, which is gated on this subscriber
          // section (writeHTMLResumeStatements); keying on any sibling closure
          // section would ship a subscribe id that nothing looks up.
          changeable
            ? t.stringLiteral(
                getResumeRegisterId(section, closure, "subscribe"),
              )
            : undefined,
        );
        // A patch page resumes a filled closure's subscriber whatever it
        // derives from, so its registration stays when no client code reaches it.
        if (keepsOwnInit || (changeable && fillSubscribes(closure, section))) {
          getter.leadingComments = null;
        }
        return getter;
      };
    }
  }
  return signal;
}

// A dynamic closure the client can change before a subscriber that resumes
// after its owner; state no resumed instance can write never changes.
function isChangeableDynamicClosure(section: Section, closure: Binding) {
  const { sources } = closure;
  return (
    !!sources &&
    isDynamicClosure(section, closure) &&
    (!sources.state || some(sources.state, hasResumableWriter)) &&
    shipsClosureScopes(closure)
  );
}

// A resumed subscriber joins its owner's set, which a patch page ships only
// where analysis gave it a reason (never for a value read for `$global` alone).
function shipsClosureScopes(closure: Binding) {
  return !isPatch() || !!findSlot(closure, SlotKind.ClosureScopes)?.reason;
}

// A dynamic content shell elides the chain's dom renderers, and with them
// the `_closure_get` subscribe registration the resume script would look up.
function inShellChain(section: Section) {
  for (let cur: Section | undefined = section; cur; cur = cur.parent) {
    if (cur.contentShell === true) return true;
  }
  return false;
}

// Setup renders a keyed `$global` read from the shared globals object; a
// resumed scope keeps the server's rendering (joins: `writeSignals`).
export function initGlobalRead(binding: Binding) {
  const { section } = binding;
  const signal = getSignal(section, binding);
  // Setup calls it even when its own work collapsed into an intersection.
  signal.referenced = true;
  signal.build = () => getSignalFn(signal);
  addValue(section, undefined, signal);
}

// Joins a changed `$global` key queues on `section` (for a closure, its owner):
// `true` if resumed code renders the read, else the sources the client may own.
export function getGlobalJoins(section: Section) {
  const joins = new Map<string, true | Sources | undefined>();
  if (isPatch()) {
    forEach(section.bindings, (binding) => {
      if (binding.type !== BindingType.global) return;
      for (const read of binding.reads.keys()) {
        // A function reading it when invoked reads the globals object live.
        if (bindingUtil.has(getLazyBindings(read), binding)) continue;
        const refs = getReferencedBindings(read);
        // A signal derived from a server value the client never receives is
        // server-computed.
        if (hasUnfillableGlobalJoinReads(refs)) continue;
        const unfilled = getCallerHeldSources(refs) || isResumedRead(read);
        const id = getResumeRegisterId(
          section,
          Array.isArray(refs) ? refs : binding,
          "global",
        );
        const prev = joins.get(id);
        joins.set(
          id,
          prev === true || unfilled === true
            ? true
            : mergeSources(prev, unfilled || undefined),
        );
      }
    });
  }
  return joins;
}

// A read resumed code renders wherever its scope sits, so no patch fills it
// and a change to the owner value must dispatch to it.
function isResumedRead(read: ReferencedExtra) {
  return (
    readsValuesOnResume(read) ||
    !!getSourcesForRef(getReferencedBindings(read))?.state ||
    inResumedStructure(read.section)
  );
}
function hasResumedRead(binding: Binding, section: Section) {
  for (const read of binding.reads.keys()) {
    if (read.section === section && isResumedRead(read)) return true;
  }
  return false;
}

// When a server source changes, `false` unless a patch fills every client read
// of `binding`, else the rebuilds that leave one unfilled (a fill partner's).
function patchFillsClientReads(
  binding: Binding,
  seen = new Set<Binding>(),
): SortedOpt<Sources> | false {
  if (seen.has(binding)) return;
  seen.add(binding);
  let rebuilds: SortedOpt<Sources>;
  for (const read of binding.reads.keys()) {
    // A value reaching the client as written (a spread, a handler) runs there.
    if (
      isResumedRead(read) ||
      read.isEffect ||
      read.retained ||
      read.callSiteExprs
    ) {
      return false;
    }
    // Content (a tag body) renders client side wherever its tag puts it, and
    // a created scope on the way may init the closure from its owner.
    for (
      let section: Section | undefined = read.section;
      section && section !== binding.section;
      section = section.parent
    ) {
      if (
        !section.branch ||
        closureInitsCreated(binding, section) ||
        bindingUtil.has(getLocalFillClosures(section), binding)
      ) {
        return false;
      }
    }
    const refs = getReferencedBindings(read);
    if (Array.isArray(refs)) {
      for (const ref of refs) {
        const partner = getCanonicalBinding(ref);
        if (partner === binding) continue;
        if (isPatchFillBinding(partner)) {
          const conditions = getFillConditions(partner);
          if (!conditions || conditions.contents || conditions.fills) {
            return false;
          }
          rebuilds = sourcesUtil.union(
            sourcesUtil.union(rebuilds, conditions.rebuilds),
            conditions.joins,
          );
        }
        // A root param fills where the caller's ownership bits say, at render.
        if (hasRootParamSource(partner.sources)) {
          rebuilds = sourcesUtil.add(
            rebuilds,
            getSourcesForRef(getReferencedBindings(read))!,
          );
        }
      }
    }
    if (
      some(read.derives, (derived) => {
        const more =
          derived.section.program === binding.section.program &&
          patchFillsClientReads(derived, seen);
        if (more === false) return true;
        rebuilds = sourcesUtil.union(rebuilds, more);
        return false;
      })
    ) {
      return false;
    }
  }
  for (const alias of binding.aliases) {
    const more = patchFillsClientReads(alias, seen);
    if (more === false) return false;
    rebuilds = sourcesUtil.union(rebuilds, more);
  }
  for (const alias of binding.propertyAliases.values()) {
    const more = patchFillsClientReads(alias, seen);
    if (more === false) return false;
    rebuilds = sourcesUtil.union(rebuilds, more);
  }
  return rebuilds;
}

// The `$global` keys a signal joins; none when it also derives from a server
// value the client never receives (server-computed: a patch fills it).
function getGlobalJoinKeys(signal: Signal) {
  const keys: string[] = [];
  if (!hasUnfillableGlobalJoinReads(signal.referencedBindings)) {
    forEach(signal.referencedBindings, (ref) => {
      // An opaque read (`$global` whole) joins every key, as `""`.
      if (ref.type === BindingType.global) keys.push(getGlobalKey(ref) ?? "");
    });
  }
  return keys;
}

function getGlobalJoinId(signal: Signal) {
  return getResumeRegisterId(
    signal.section,
    signal.referencedBindings,
    "global",
  );
}

// Wraps a signal reading `$global` keys as each key's join: pure, so the
// consumer's own retention decides whether a changed key has a reader.
function wrapGlobalJoins(signal: Signal, value: t.Expression): t.Expression {
  for (const key of getGlobalJoinKeys(signal)) {
    value = callRuntime(
      "_fill_global_join",
      t.stringLiteral(key),
      t.stringLiteral(getGlobalJoinId(signal)),
      value,
    );
  }
  // A scope a flush creates runs the join of a key its effects read as a shell
  // init, so a later change re-runs them; shells name it, so it stays bundled.
  const binding = signal.referencedBindings;
  if (
    binding &&
    !Array.isArray(binding) &&
    binding.type === BindingType.global &&
    patchCreates(signal.section) &&
    signal.effect.length
  ) {
    value = callRuntime(
      "_shell_join",
      t.stringLiteral(getResumeRegisterId(signal.section, binding, "init")),
      value,
    );
    value.leadingComments = null;
  }
  return value;
}

// An effect on its own scope joins alone first; where the client renders the
// signal, the signal's join under the same id replaces it and runs the effect.
function getGlobalEffectJoins(signal: Signal, effect: t.Identifier) {
  return getGlobalJoinKeys(signal).map((key) =>
    t.expressionStatement(
      callRuntime(
        "_fill_global_join_resume",
        t.stringLiteral(key),
        t.stringLiteral(getGlobalJoinId(signal)),
        effect,
      ),
    ),
  );
}

export function initValue(binding: Binding, isLet = false) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  // Keep persisting the scope slot for lazy reads.
  if (binding.hasLazyReads) signal.forcePersist = true;
  signal.build = () => {
    if (isPureMemberForwarder(binding)) {
      return undefined;
    }

    // A fill runs from its scope slot, never as a value forwarder.
    const fills = isPatch() && fillsReads(binding);
    if (fills) signal.hasSideEffect = true;
    const fn = getSignalFn(signal);
    const helper = isLet
      ? signal.extraArgs
        ? "_let_change"
        : "_let"
      : "_const";
    // A fill binding's own declaration doubles as its fill registration
    // (even a pure forwarder); renders the flush writes itself stay out.
    if (fills) {
      return callRuntime(
        `_fill${helper}`,
        t.stringLiteral(getPatchFillKey(binding)),
        getScopeAccessorLiteral(binding, true, isLet),
        fn,
        signal.fillFn,
      );
    }
    if (
      !signal.forcePersist &&
      (isDirectAlias(binding) ||
        (!signal.hasSideEffect && !hasAliasSideEffect(binding)) ||
        !signalHasStatements(signal))
    ) {
      return fn;
    }

    return callRuntime(
      helper,
      getScopeAccessorLiteral(binding, true, isLet),
      fn,
    );
  };

  for (const alias of binding.aliases) {
    if (alias.type !== BindingType.constant) {
      initValue(alias);
    }
  }

  for (const alias of binding.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      initValue(alias);
    }
  }

  return signal;
}

// A direct alias's work reads the slot of the binding it aliases.
function hasAliasSideEffect(binding: Binding): boolean {
  for (const alias of binding.aliases) {
    if (
      isDirectAlias(alias) &&
      (getSignal(alias.section, alias).hasSideEffect ||
        hasAliasSideEffect(alias))
    ) {
      return true;
    }
  }
  return false;
}

export function signalHasStatements(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.forcePersist ||
    signal.render.length ||
    signal.patch.length ||
    signal.effect.length ||
    signal.hasHTMLEffect ||
    signal.values.length ||
    signal.intersection
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
    getSignal(binding.section, binding).hasSideEffect
  ) {
    return false;
  }

  for (const alias of binding.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      return true;
    }
  }

  return false;
}

// A forward a patch renders is a patch statement, like a hole it writes.
function pushForward(signal: Signal, target: Signal, statement: t.Statement) {
  (isPatch() && patchRendersInto(target) ? signal.patch : signal.render).push(
    statement,
  );
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

// A loop or branch chain a patch renders whenever it writes the scope: its
// bodies are the signal's branch sections, none stateful, on the branch path.
function patchesStructure(signal: Signal) {
  const bodies = signal.section.children.filter(
    (child) =>
      child.branch?.optional &&
      child.branch.nodeBinding === signal.referencedBindings,
  );
  return (
    bodies.length > 0 &&
    isBranchPathSection(signal.section) &&
    !bodies.some(isStatefulBranch)
  );
}

// A patch renders a forward into a value it fills itself as well.
function patchRendersInto(target: Signal) {
  const binding = target.referencedBindings;
  return (
    patchRenders(target) ||
    (!!binding &&
      !Array.isArray(binding) &&
      binding.section === target.section &&
      fillsReads(binding))
  );
}

function hasClientRender(signal: Signal): boolean {
  if (
    signal.extraArgs ||
    signal.register ||
    signal.effect.length ||
    signal.hasHTMLEffect ||
    signal.render.length ||
    signal.values.some(
      (value) => !value.signal.inline && !patchRendersInto(value.signal),
    ) ||
    some(signal.intersection, (intersection) => !patchRenders(intersection))
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
    const aliasSignal = getSignal(alias.section, alias);
    signal.forwards = push(signal.forwards, aliasSignal);
    pushForward(
      signal,
      aliasSignal,
      t.expressionStatement(
        t.callExpression(aliasSignal.identifier, [
          scopeIdentifier,
          value,
          ...getTranslatedExtraArgs(aliasSignal),
        ]),
      ),
    );
  }
}

// A source intersection runs in its source's pass, so it needs no `_or`.
function buildIntersection(
  section: Section,
  intersection: Intersection,
  fn: t.Expression,
  init?: boolean,
) {
  const { source, id, returnedBy } = section.intersections!.get(intersection)!;
  if (source) return fn;
  const args = [
    t.numericLiteral(id),
    fn,
    returnedBy || intersection.length > 2
      ? t.numericLiteral(intersection.length - 1)
      : undefined,
    returnedBy && getScopeOffsetAccessorLiteral(returnedBy, true),
  ] as const;
  // A created scope's flush runs the join by its init id (`getCreatedJoins`).
  return init && initsCreatedJoin(section, intersection)
    ? callRuntime(
        "_shell_or",
        t.stringLiteral(getResumeRegisterId(section, intersection, "init")),
        ...args,
      )
    : callRuntime("_or", ...args);
}

export function getSignalFn(signal: Signal): t.Expression {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue = isBinding && binding.section === section;
  const assertsHoists = isValue && binding.hoists && !isOptimize();

  if (isValue) {
    for (const alias of binding.aliases) {
      const aliasSignal = getSignal(alias.section, alias);
      if (signalHasStatements(aliasSignal)) {
        signal.forwards = push(signal.forwards, aliasSignal);
        if (isRest(alias)) {
          const aliasId = t.identifier(alias.name);
          pushForward(
            signal,
            aliasSignal,
            t.expressionStatement(
              t.callExpression(aliasSignal.identifier, [
                scopeIdentifier,
                t.callExpression(
                  t.arrowFunctionExpression(
                    [getRestPattern(alias, aliasId, binding, true)],
                    aliasId,
                  ),
                  [
                    withRestFallback(
                      alias,
                      binding,
                      createScopeReadExpression(binding),
                    ),
                  ],
                ),
                ...getTranslatedExtraArgs(aliasSignal),
              ]),
            ),
          );
        } else {
          pushForward(
            signal,
            aliasSignal,
            t.expressionStatement(
              t.callExpression(aliasSignal.identifier, [
                scopeIdentifier,
                createScopeReadExpression(binding),
                ...getTranslatedExtraArgs(aliasSignal),
              ]),
            ),
          );
        }
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
    pushForward(
      signal,
      value.signal,
      t.expressionStatement(
        signalHasStatements(value.signal)
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

  forEach(signal.intersection, (intersection) => {
    pushForward(
      signal,
      intersection,
      t.expressionStatement(
        t.callExpression(intersection.identifier, [scopeIdentifier]),
      ),
    );
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

          signal.render.push(
            t.expressionStatement(
              t.callExpression(dynamicClosureSignalIdentifier, [
                scopeIdentifier,
              ]),
            ),
          );
        }

        dynamicClosureArgs.push(getSignal(closureSection, binding).identifier);
      } else {
        const closureSignal = getSignal(closureSection, binding);
        pushForward(
          signal,
          closureSignal,
          t.expressionStatement(
            t.callExpression(closureSignal.identifier, [scopeIdentifier]),
          ),
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
    const effectIdentifier = t.identifier(`${signal.identifier.name}__script`);
    signal.render.push(
      t.expressionStatement(
        t.callExpression(effectIdentifier, [scopeIdentifier]),
      ),
    );
  }

  if (isValue && findSlot(binding)?.reason) {
    signal.hasSideEffect = true;
  }

  let render = signal.render;
  // A fill's run is the render without what the patch renders itself.
  if (signal.patch.length) {
    if (isValue && fillsReads(binding)) {
      signal.fillFn = t.cloneNode(toScopeFn(render), true);
    }
    render = render.concat(signal.patch);
  }

  if (!signal.hasSideEffect) {
    if (isValue && render.length === 1) {
      const first = render[0];
      if (first.type === "ExpressionStatement") {
        const { expression } = first;
        if (
          expression.type === "CallExpression" &&
          expression.callee.type === "Identifier" &&
          expression.arguments.length === 2 &&
          expression.arguments[0] === scopeIdentifier &&
          isOwnValueRead(expression.arguments[1], binding as Binding)
        ) {
          // The signal only forwards its scope and value to another signal:
          // `(scope, value) => fn(scope, value)` is equivalent to `fn`.
          return expression.callee;
        }
      }
    }

    return t.arrowFunctionExpression(
      isValue
        ? [scopeIdentifier, getSignalValueIdentifier(signal)]
        : [scopeIdentifier],
      toFirstExpressionOrBlock(render),
    );
  }

  return toScopeFn(render);
}

// `(scope) => fn(scope)` is `fn`.
function toScopeFn(render: t.Statement[]): t.Expression {
  if (render.length === 1) {
    const first = render[0];
    if (first.type === "ExpressionStatement") {
      const { expression } = first;
      if (expression.type === "CallExpression") {
        const args = expression.arguments;
        if (args.length === 1 && args[0] === scopeIdentifier) {
          if (
            expression.callee.type === "MemberExpression" &&
            expression.callee.property.type === "Identifier" &&
            expression.callee.property.name === getAccessorProp().Owner
          ) {
            // Special case closure reads of `IDENTIFIER._`.
            return expression.callee.object;
          }

          return expression.callee as t.Expression;
        }
      }
    }
  }

  return t.arrowFunctionExpression([scopeIdentifier], t.blockStatement(render));
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

function subscribe(references: ReferencedBindings, subscriber: Signal) {
  if (references) {
    forEach(references, (binding) => {
      if (binding.type !== BindingType.constant) {
        const source = (isDirectAlias(binding) && binding.aliasOf) || binding;
        const providerSignal = getSignal(subscriber.section, source);
        providerSignal.hasSideEffect = true;
        providerSignal.intersection = push(
          providerSignal.intersection,
          subscriber,
        );
      }
    });
  }
}

export function replaceNullishAndEmptyFunctionsWith0(
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
export function addStatement(
  type: "render" | "effect" | "patch",
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  statement: t.Statement | t.Statement[],
  isPure?: boolean,
): void {
  const signal = getSignal(targetSection, referencedBindings);
  const statements = (signal[type] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }

  if (!isPure || type === "effect") {
    signal.hasSideEffect = true;
  }
}

export function addValue(
  targetSection: Section,
  referencedBindings: ReferencedBindings,
  signal: Signal,
  value?: t.Expression,
) {
  const parentSignal = getSignal(targetSection, referencedBindings);
  parentSignal.values.push({
    signal,
    value,
  });

  if (
    t.isFunction(value) &&
    value.extra &&
    getReferencedBindingsInFunction(value.extra)
  ) {
    parentSignal.hasSideEffect = true;
  }
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

    forEach(signal.intersection, writeSignal);

    let effectDeclarator: t.VariableDeclarator | undefined;
    if (signal.effect.length) {
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = t.identifier(
        `${signal.identifier.name}__script`,
      );
      const effectFn = t.arrowFunctionExpression(
        [scopeIdentifier],
        toFirstExpressionOrBlock(signal.effect),
      );
      // An effect reading `$global` keys can be reached by a render and by
      // a changed key in one run: `_fill_global_script` runs it once.
      effectDeclarator = t.variableDeclarator(
        effectIdentifier,
        callRuntime(
          isPatch() && getGlobalJoinKeys(signal).length
            ? "_fill_global_script"
            : "_script",
          t.stringLiteral(
            getResumeRegisterId(section, signal.referencedBindings),
          ),
          effectFn,
        ),
      );
    }

    let signalDeclaration: t.Statement | undefined;
    if (signal.build) {
      let value = signal.build();
      // A shell names a creatable body's inits whatever client code reaches
      // the join that registers them, so that join is never shaken.
      let registersInit = false;
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
        replaceNullishAndEmptyFunctionsWith0(value.arguments as t.Expression[]);
      }

      // Fill registration rides the join's declaration, so tree-shaking keeps
      // it with the join; a fill runs the whole join, which no patch writes.
      if (isPatch()) {
        if (Array.isArray(signal.referencedBindings)) {
          for (const ref of signal.referencedBindings) {
            const member = getCanonicalBinding(ref);
            // An assigned fill's declaration registers it (its assignments
            // keep it) and what derives from it reaches the join, which never replaces it.
            if (
              isPatchFillBinding(member) &&
              !(member.assignments && fillsReads(member))
            ) {
              let helper: "_fill_join" | "_fill_join_if" | "_fill_join_for" =
                "_fill_join";
              let hopExprs: t.Expression[] = [];
              if (member.section !== signal.section) {
                // A chain that leaves the branch ladder refreshes through the
                // member's own closure signal (`_fill_join_closure`) instead.
                if (!isBranchSectionChain(signal.section, member.section)) {
                  if (inStatefulBranch(signal.section)) {
                    continue;
                  }
                  value = callRuntime(
                    "_fill_join_subscribers",
                    t.stringLiteral(getPatchFillKey(member)),
                    getScopeAccessorLiteral(member, true),
                    value,
                    getClosureAccessorLiteral(member),
                    t.numericLiteral(
                      getDynamicClosureIndex(member, signal.section),
                    ),
                  );
                  continue;
                }
                // Each branch's registered hop facts are the source of
                // truth; deeper reads compose the chain.
                const hops: ClosureHop[] = [];
                for (
                  let hopSection: Section | undefined = signal.section;
                  hopSection && hopSection !== member.section;
                  hopSection = hopSection.parent
                ) {
                  hops.push(getClosureSignal(hopSection)!.hop);
                }
                const conditional = hops[0].kind === "if";
                if (hops.every((hop) => (hop.kind === "if") === conditional)) {
                  // Homogeneous chains flatten onto the per-kind helper,
                  // owner-first: the runtime folds trailing hops outward.
                  helper = conditional ? "_fill_join_if" : "_fill_join_for";
                  hopExprs = hops
                    .reverse()
                    .flatMap((hop) =>
                      hop.kind === "if"
                        ? [
                            getScopeAccessorLiteral(hop.ref, true),
                            t.numericLiteral(hop.index),
                          ]
                        : [getScopeAccessorLiteral(hop.ref, true)],
                    );
                } else {
                  // Mixed chains compile a dispatch builder: the arrow
                  // pulls in only the closure kinds its chain uses.
                  const joinId = generateUidIdentifier("join");
                  let dispatch: t.Expression = joinId;
                  for (const hop of hops) {
                    dispatch = buildClosureHop(hop, dispatch);
                  }
                  hopExprs = [t.arrowFunctionExpression([joinId], dispatch)];
                }
              }
              // A creatable body's fill closure inits as the arrival at this
              // join, registered under the closure's init id.
              if (
                member.section !== signal.section &&
                !member.sources?.state &&
                fillJoinsIn(member, signal.section) &&
                patchCreates(signal.section)
              ) {
                registersInit = true;
                value = callRuntime(
                  "_shell_join",
                  t.stringLiteral(
                    getResumeRegisterId(signal.section, member, "init"),
                  ),
                  value,
                );
              }
              value = callRuntime(
                helper,
                t.stringLiteral(getPatchFillKey(member)),
                getScopeAccessorLiteral(member, true),
                value,
                hopExprs.length ? t.numericLiteral(0) : undefined,
                ...hopExprs,
              );
            }
          }
        } else if (
          signal.referencedBindings &&
          !Array.isArray(signal.referencedBindings) &&
          !signal.referencedBindings.sources?.state &&
          (inResumedStructure(signal.section) ||
            inContentSection(signal.section) ||
            getParamRebuildChain(signal.section)) &&
          fillsReads(signal.referencedBindings) &&
          signal.section !== signal.referencedBindings.section &&
          // A dynamic closure dispatches through its owner-held
          // subscriber set, so its chain shape does not matter.
          (isBranchChainTo(signal.section, signal.referencedBindings.section) ||
            isDynamicClosure(signal.section, signal.referencedBindings)) &&
          closureCarriesFill(signal.referencedBindings, signal.section)
        ) {
          // Inside unpatched structure a lone closure over a server
          // fill IS the refresh channel: it registers the join itself.
          value =
            !getClosureSignal(signal.section) ||
            isDynamicClosure(signal.section, signal.referencedBindings)
              ? // Deep closure positions reassemble the indexed composite via a
                // shared per-key table, keyed by the serialized index.
                callRuntime(
                  "_fill_join_closure",
                  t.stringLiteral(getPatchFillKey(signal.referencedBindings)),
                  getScopeAccessorLiteral(signal.referencedBindings, true),
                  value,
                  t.numericLiteral(
                    getDynamicClosureIndex(
                      signal.referencedBindings,
                      signal.section,
                    ),
                  ),
                )
              : callRuntime(
                  "_fill_join",
                  t.stringLiteral(getPatchFillKey(signal.referencedBindings)),
                  getScopeAccessorLiteral(signal.referencedBindings, true),
                  value,
                );
        }
      }

      if (isPatch()) value = wrapGlobalJoins(signal, value);

      if (signal.register) {
        value = callRuntime(
          "_var_resume",
          t.stringLiteral(
            getResumeRegisterId(section, signal.referencedBindings, "var"),
          ),
          value,
        );
      }

      if (registersInit) value.leadingComments = null;
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
    traverseReplace(signal, "fillFn", replaceRenderNode, signal);

    const signalStatements = signal.prependStatements || [];

    if (effectDeclarator) {
      signalStatements.push(t.variableDeclaration("const", [effectDeclarator]));
      if (isPatch()) {
        signalStatements.push(
          ...getGlobalEffectJoins(signal, effectDeclarator.id as t.Identifier),
        );
      }
    }

    if (signalDeclaration) {
      signalStatements.push(signalDeclaration);
    }
    getProgram().node.body.push(...signalStatements);

    written.add(signal);
  }

  return written;
}

// Whether every hop to `owner` dispatches from the owner scope: branches
// always; inside unpatched structure, content sections too (lexical owners).
function isBranchChainTo(section: Section, owner: Section) {
  const stateful = inStatefulBranch(section) || inContentSection(section);
  while (section !== owner) {
    if (
      (!section.branch && !section.boundaryContent && !stateful) ||
      !section.parent
    ) {
      return false;
    }
    section = section.parent;
  }
  return true;
}

// Whether the section is content a consumer renders (inclusive): a
// consumer may withhold it, so server values inside register their fills.
function inContentSection(section: Section | undefined) {
  while (section?.parent) {
    if (!section.branch && section.derives) {
      return true;
    }
    section = section.parent;
  }
  return false;
}

// A fill needs a subscriber where no join dispatch reaches the read, or in
// boundary content, which may resume after a patch render and must catch up.
function fillSubscribes(closure: Binding, section: Section) {
  return (
    fillsReads(closure) &&
    // Client-rebuilt structure's own render code keeps the subscriber.
    !getFillConditions(closure)?.rebuilds &&
    (closureCarriesFill(closure, section) ||
      (inBoundaryBody(section, closure.section) &&
        hasFilledRead(closure, section)))
  );
}

function inBoundaryBody(section: Section, owner: Section) {
  for (let cur = section; cur !== owner; cur = cur.parent!) {
    if (cur.branch?.optional === false) return true;
  }
  return false;
}

// The closure's own signal carries a fill to the section's reads: a lone
// read, or a join inside stateful structure, which no join dispatch reaches.
function closureCarriesFill(closure: Binding, section: Section) {
  return (
    hasLoneRead(closure, section) ||
    (inStatefulBranch(section) && hasFilledRead(closure, section))
  );
}

// A read of the binding (or a direct alias) in the section that renders
// through the closure itself, rather than a join.
function hasLoneRead(binding: Binding, section: Section): boolean {
  for (const read of binding.reads.keys()) {
    if (
      read.section === section &&
      (!readsValuesOnResume(read) || !read.invokeOnly) &&
      !Array.isArray(getReferencedBindings(read))
    ) {
      return true;
    }
  }
  for (const alias of binding.aliases) {
    if (getCanonicalBinding(alias) === binding && hasLoneRead(alias, section)) {
      return true;
    }
  }
  return false;
}

// A lone read, or an intersection member whose chain leaves the branch
// ladder, renders through the closure itself (over-counting is safe).
function hasFilledRead(binding: Binding, section: Section): boolean {
  for (const read of binding.reads.keys()) {
    // A script (not a handler) inside the section re-runs from the closure.
    if (
      (!readsValuesOnResume(read) || !read.invokeOnly) &&
      read.section === section
    ) {
      if (
        !Array.isArray(getReferencedBindings(read)) ||
        !isBranchSectionChain(section, binding.section)
      ) {
        return true;
      }
    }
  }
  // A direct alias reads this value (an alias never fills on its own).
  for (const alias of binding.aliases) {
    if (
      getCanonicalBinding(alias) === binding &&
      hasFilledRead(alias, section)
    ) {
      return true;
    }
  }
  return false;
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
      section.parent!.children.some(
        (child) =>
          child !== section && child.branch?.nodeBinding === branch.nodeBinding,
      )
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
  const registeredFns = registeredFnsForProgram.get(getProgram().node);
  const statements: t.Statement[] = [];
  if (registeredFns) {
    for (const registeredFn of registeredFns.values()) {
      let fn: t.Statement;
      if (
        registeredFn.referencedBindings ||
        registeredFn.referencesScope ||
        registeredFn.referencedLocals
      ) {
        // A scope-bound registration can reach any patched value derived from it
        // (an entry, or a reference in data); the module registering it links it.
        if (isPatch()) importRuntimeFeature("patch-bind");
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

    for (const registeredFn of registeredFns.values()) {
      statements.push(
        t.expressionStatement(
          registerRuntimeValue(
            registeredFn.registerId,
            t.identifier(registeredFn.id),
          ),
        ),
      );
    }

    getProgram().node.body.push(...statements);
  }
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

export function addHTMLEffectCall(
  section: Section,
  referencedBindings?: ReferencedBindings,
) {
  const signal = getSignal(section, referencedBindings);
  signal.hasHTMLEffect = signal.hasSideEffect = true;
}

function toSequenceExpression(exprs: t.Expression[]) {
  return exprs.length === 1 ? exprs[0] : t.sequenceExpression(exprs);
}

// A closure whose init a created scope may run registers it on its closure
// get; a fill a state join reads registers on the join (`_shell_join`).
function createsWithInit(section: Section, closure: Binding) {
  return (
    patchCreates(section) &&
    (keepsInit(section, closure) || subscribesCreated(section, closure))
  );
}

// Inits a flush may name whatever client code reaches their signal.
function keepsInit(section: Section, closure: Binding) {
  return (
    (closureInitsCreated(closure, section) && !fillJoinsIn(closure, section)) ||
    bindingUtil.has(getLocalFillClosures(section), closure)
  );
}

// A root param a created content scope reads subscribes by its init, which
// the flush runs where the param is client-sourced; other inits own the id.
function subscribesCreated(section: Section, closure: Binding) {
  return (
    isDynamicClosure(section, closure) &&
    closure.type !== BindingType.constant &&
    !closure.sources?.state &&
    !closureInitsCreated(closure, section) &&
    !bindingUtil.has(getLocalFillClosures(section), closure) &&
    hasRootParamSource(closure.sources)
  );
}

// A branch or boundary body that ships a shell, or content whose shell a
// patch may create (a shell kept only for reference never creates).
export function patchCreates(section: Section) {
  return (
    isPatch() &&
    (!!section.branch ||
      (section.contentShell === true && contentMayCreate(section))) &&
    !inResumedStructure(section) &&
    !sectionHasServerEffect(section)
  );
}

// Plain fill write of a branch local with no state source, gated at runtime
// by its group's ownership; an unfilled instance re-derives via closure inits.
export function writeLocalFill(section: Section, binding: Binding) {
  getWrittenLocalFills().add(binding);
  const write = callRuntime(
    "_patch_value",
    getScopeIdIdentifier(section),
    t.stringLiteral(getPatchFillKey(binding)),
    getDeclaredBindingExpression(binding),
  );
  const filledGuard = getFilledGuard(getSourcesForRef(binding));
  if (!filledGuard) return write;
  let initIds = "";
  forEach(binding.sources?.param, (param) => {
    // Only a closure the section reads re-derives through its init; a value
    // its creator passes (a loop param) has none to run.
    if (bindingUtil.has(section.referencedClosures, param)) {
      initIds += (initIds && " ") + getResumeRegisterId(section, param, "init");
    }
  });
  return initIds
    ? t.conditionalExpression(
        filledGuard,
        write,
        callRuntime(
          "_patch_init",
          getScopeIdIdentifier(section),
          t.stringLiteral(initIds),
        ),
      )
    : t.logicalExpression("&&", filledGuard, write);
}

// Plain write of a branch local with no state source that effects or handlers
// read, gated like the root's writes.
export function writeLocalWrite(section: Section, binding: Binding) {
  getWrittenLocalFills().add(binding);
  const write = gateUnfilledWrite(
    binding,
    callRuntime(
      "_patch_write",
      getScopeIdIdentifier(section),
      t.stringLiteral(getScopeAccessor(binding)),
      getDeclaredBindingExpression(binding),
    ),
  );
  const filledGuard = getFilledGuard(getSourcesForRef(binding));
  return filledGuard ? t.logicalExpression("&&", filledGuard, write) : write;
}

// A capture only patch-filled reads use is kept fresh where it is still
// read unfilled; a patch renders every other read itself.
function gateUnfilledWrite(binding: Binding, write: t.Expression) {
  const rebuilds = patchFillsClientReads(binding);
  return rebuilds === false
    ? write
    : t.logicalExpression(
        "&&",
        getUnfilledGuard(undefined, rebuilds, true),
        write,
      );
}

// Locals whose declaration already wrote their fill or write
// (`translateVar`), so the section's leading writes cover only the rest.
const [getWrittenLocalFills] = createProgramState(() => new Set<Binding>());

// An effect read the wire cannot keep current blocks creation; fills,
// wire writes and direct `$global` reads stay current.
export function sectionHasServerEffect(section: Section) {
  const hasServerEffect = (binding: Binding) => {
    for (const read of binding.reads.keys()) {
      if (
        read.section === section &&
        readsValuesOnResume(read) &&
        hasUnfillablePatchReads(getReferencedBindings(read))
      ) {
        return true;
      }
    }
    return false;
  };
  return (
    some(section.bindings, hasServerEffect) ||
    some(section.referencedClosures, hasServerEffect)
  );
}

// The section's mount effects as space-joined register ids, in resume
// order, for its shell to ship.
export function getSectionEffectRegisterIds(
  section: Section,
  skip?: (referencedBindings: ReferencedBindings) => boolean,
) {
  let ids = "";
  const allSignals = Array.from(getSignals(section).values());
  for (let i = allSignals.length; i--;) {
    const { hasHTMLEffect, referencedBindings } = allSignals[i];
    if (hasHTMLEffect && !skip?.(referencedBindings)) {
      ids += (ids && " ") + getResumeRegisterId(section, referencedBindings);
    }
  }
  return ids;
}

export function writeHTMLResumeStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>,
) {
  const section = getSectionForBody(path);
  if (!section) return;

  const body = path.node.body as t.Statement[];
  const allSignals = Array.from(getSignals(section).values());
  const scopeIdIdentifier = getScopeIdIdentifier(section);
  // Whether any node of the section writes a marker, as the same argument
  // shape `_if` and `_await` take: absent when always, `0` when never.
  const markerGuard = hasPatchKeyedNodes(section)
    ? undefined
    : getWriteGuardForAny(section, getNodeReasons(section), true);
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
          // Only an unfilled read subscribes, so the set ships only there.
          const scopesSlot = findSlot(closure, SlotKind.ClosureScopes);
          const scopesReason = scopesSlot?.reason;
          const rebuilds = isPatch() && patchFillsClientReads(closure);
          setScopeProperty(
            scopesSlot,
            (rebuilds !== false &&
              scopesReason &&
              getUnfilledValueIfWritten(
                closure.section,
                scopesReason,
                rebuilds,
                identifier,
              )) ||
              identifier,
          );
        }

        const closureIndex = getDynamicClosureIndex(closure, section);
        if (closureIndex) {
          setScopeProperty(
            findSlot(closure, SlotKind.ClosureSignalIndex, section),
            t.numericLiteral(closureIndex),
          );
        }

        const closureScopesReason = findSlot(
          closure,
          SlotKind.ClosureScopes,
        )?.reason;
        const ownershipArgs =
          isPatch() && !closure.sources.state
            ? getPatchWriteOwnership(closure.sources)
            : undefined;
        // A patch-filled reader needs no dispatch unless the client can change
        // the owner value (`_unfilled_if`).
        const ownership = hasResumedRead(closure, section)
          ? undefined
          : ownershipArgs;
        let subscribeArg: t.Expression = identifier;
        if (
          isConditionalReason(closureScopesReason) &&
          !isSameReason(closureScopesReason, sectionReason) &&
          // `_unfilled_if` on the same root group already tests the mask.
          !(
            ownership?.length &&
            !closureScopesReason.global &&
            isSameReason(closureScopesReason, closure.sources) &&
            every(closureScopesReason.param, isRootParam)
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
        // A shell chain registers no subscribe, and one the client cannot
        // change is shaken with its owner's signal.
        const changeable =
          isChangeableDynamicClosure(section, closure) &&
          !(isPatch() && inShellChain(section));
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
                  ...getPatchWriteOwnership(unfilled),
                ),
        ),
      ),
    );
  }

  // Mount-effect order is unspecified: resume runs these in reverse
  // signal order, CSR runs the signal graph forward — the two paths differ.
  for (let i = allSignals.length; i--;) {
    if (allSignals[i].hasHTMLEffect) {
      const signalRefs = allSignals[i].referencedBindings;
      body.push(
        t.expressionStatement(
          callRuntime(
            "_script",
            scopeIdIdentifier,
            t.stringLiteral(getResumeRegisterId(section, signalRefs)),
            markerGuard,
          ),
        ),
      );
    }
  }

  const debug = !isOptimize();
  const writeScopeBuilder = getSectionWriteScopeBuilder(section);
  const pendingProperties = getScopeProperties(section);
  const scopeProperties: t.ObjectProperty[] = [];
  // Under patches the scope write rides the section (or root) reason:
  // structural props need no guard, a binding's value keeps its group's.
  const patches = isPatch();
  const ifWritten = (reason: Reason, expr: t.Expression) => {
    if (patches || isSameReason(sectionReason, reason)) return expr;
    return getExprIfWritten(section, reason, expr);
  };
  const onBranchPath =
    patches && !!section.parent && isBranchPathSection(section);
  const ifValueWritten = (reason: Reason, expr: t.Expression) => {
    if (!onBranchPath && isSameReason(sectionReason, reason)) {
      return expr;
    }
    return patches
      ? getValueIfWritten(section, reason, expr)
      : getExprIfWritten(section, reason, expr);
  };

  let debugVars: t.ObjectProperty[] | undefined;
  const writeBinding = (binding: Binding) => {
    const reason = getWriteReason(binding);
    if (!reason) return;
    const accessor = getScopeAccessor(binding);
    const value = getDeclaredBindingExpression(binding);
    const rebuilds = patches && patchFillsClientReads(binding);
    pendingProperties.delete(accessor);
    scopeProperties.push(
      toObjectProperty(
        accessor,
        (rebuilds !== false &&
          getUnfilledValueIfWritten(section, reason, rebuilds, value)) ||
          ifValueWritten(reason, value),
      ),
    );

    if (debug) {
      const { root, access } = getDebugScopeAccess(binding);
      const locExpr =
        root.loc &&
        t.stringLiteral(`${root.loc.start.line}:${root.loc.start.column + 1}`);
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
    // A keyed `$global` read lives on the globals object, never in a slot.
    if (binding.type === BindingType.global) {
      pendingProperties.delete(getScopeAccessor(binding));
    } else if (binding.type !== BindingType.dom) {
      writeBinding(binding);
    }
  });

  // A fill runs under its group's ownership and, when conditional, only for
  // client-rebuilt structure or withheld content, else `otherwise` runs.
  const gatePatchWrite = (
    binding: Binding,
    write: t.Expression,
    otherwise?: t.Expression,
  ) => {
    let guard: t.Expression | undefined = getFilledGuard(
      getSourcesForRef(binding),
    );
    const conditions = getFillConditions(binding);
    if (conditions) {
      let needed: t.Expression | undefined;
      const add = (term: t.Expression) => {
        needed = needed ? t.logicalExpression("||", needed, term) : term;
      };
      // Each runtime check of a root param group once.
      const seen = new Set<string>();
      const addGroup = (
        check: "_client_guard" | "_filled_guard",
        sources: Sources,
      ) => {
        const index = getRootParamGroupIndex(sources);
        if (index !== undefined && !seen.has(check + index)) {
          seen.add(check + index);
          add(callRuntime(check, ...getPatchWriteOwnership(sources)));
        }
      };
      forEach(sourcesUtil.union(conditions.rebuilds, conditions.joins), (s) =>
        addGroup("_client_guard", s),
      );
      forEach(conditions.fills, (s) => addGroup("_filled_guard", s));
      forEach(conditions.contents, (content) =>
        add(
          callRuntime(
            "_content_withheld",
            t.stringLiteral(getResumeRegisterId(content, "content")),
          ),
        ),
      );
      if (needed && otherwise) {
        write = t.conditionalExpression(needed, write, otherwise);
      } else if (needed) {
        guard = guard ? t.logicalExpression("&&", guard, needed) : needed;
      }
    }
    return guard ? t.logicalExpression("&&", guard, write) : write;
  };
  const getPatchWrite = (binding: Binding) =>
    gateUnfilledWrite(
      binding,
      callRuntime(
        "_patch_write",
        scopeIdIdentifier,
        t.stringLiteral(getScopeAccessor(binding)),
        getDeclaredBindingExpression(binding),
      ),
    );
  // Root state seeds (below); a plain write would clobber the client's.
  const fillCalls = toArray(
    filter(getPatchFillBindings(section), (binding) => !binding.sources?.state),
    (binding) =>
      gatePatchWrite(
        binding,
        callRuntime(
          "_patch_value",
          scopeIdIdentifier,
          t.stringLiteral(getPatchFillKey(binding)),
          getDeclaredBindingExpression(binding),
        ),
        isPatchWriteBinding(binding) ? getPatchWrite(binding) : undefined,
      ),
  );

  // Effect-read values need no client registration: the wire writes the
  // accessor and each reading effect re-runs by register id on change.
  if (isPatch()) {
    forEach(section.bindings, (binding) => {
      if (isPatchWriteBinding(binding) && !isPatchFillBinding(binding)) {
        const write = gatePatchWrite(binding, getPatchWrite(binding));
        // A branch local writes at its declaration (`translateVar`), other
        // branch bindings up front; root writes ride the reason's complement.
        if (!section.parent) {
          fillCalls.push(write);
        } else if (!getWrittenLocalFills().has(binding)) {
          getHTMLSectionStatements(section).push(t.expressionStatement(write));
        }
      }
    });
    // One entry per effect listing its effect-read accessors, grouped under
    // a numeric owner-hop token, so a patch changing several re-runs it ONCE.
    for (const signal of allSignals) {
      if (signal.hasHTMLEffect) {
        const byHops: string[][] = [];
        forEach(signal.referencedBindings, (binding) => {
          const root = getFillRoot(binding);
          if (hasPatchEffect(root)) {
            (byHops[section.depth - root.section.depth] ??= []).push(
              getScopeAccessor(root),
            );
          }
        });
        let accessors = "";
        byHops.forEach((group, hops) => {
          accessors +=
            (accessors && " ") + (hops ? hops + " " : "") + group.join(" ");
        });
        if (accessors) {
          // A re-run resets the effect's `$signal`s first, as a render does.
          const aborts = getAbortIds(section, signal.referencedBindings);
          body.push(
            t.expressionStatement(
              callRuntime(
                "_patch_effect",
                scopeIdIdentifier,
                t.stringLiteral(
                  getResumeRegisterId(section, signal.referencedBindings),
                ),
                t.stringLiteral(aborts ? accessors + "!" + aborts : accessors),
              ),
            ),
          );
        }
      }
    }
  }

  // A created scope has no resume data: what its resumed twin reads from
  // the document and nothing else supplies arrives as a setup write.
  if (patches) {
    forEach(section.bindings, (binding) => {
      if (isCreatedScopeSeed(binding) && getWriteReason(binding)) {
        body.push(
          t.expressionStatement(
            callRuntime(
              "_patch_write",
              scopeIdIdentifier,
              t.stringLiteral(getScopeAccessor(binding)),
              getDeclaredBindingExpression(binding),
              t.numericLiteral(1),
            ),
          ),
        );
      }
    });
  }

  // Each join whose output the client owns renders once the flush settles.
  if (patches) {
    for (const join of getCreatedJoins(section) || []) {
      body.push(
        t.expressionStatement(
          t.logicalExpression(
            "&&",
            callRuntime(
              "_client_guard",
              ...getPatchWriteOwnership(getSourcesForRef(join)),
            ),
            callRuntime(
              "_patch_init",
              scopeIdIdentifier,
              t.stringLiteral(getResumeRegisterId(section, join, "init")),
            ),
          ),
        ),
      );
    }
  }

  // A created content scope subscribes to the client-sourced root params.
  if (patches && patchCreates(section)) {
    forEach(section.referencedClosures, (closure) => {
      if (subscribesCreated(section, closure)) {
        body.push(
          t.expressionStatement(
            t.logicalExpression(
              "&&",
              callRuntime(
                "_client_guard",
                ...getPatchWriteOwnership(closure.sources),
              ),
              callRuntime(
                "_patch_init",
                scopeIdIdentifier,
                t.stringLiteral(getResumeRegisterId(section, closure, "init")),
              ),
            ),
          ),
        );
      }
    });
  }

  // A `<return>` change handler wires like a controllable's: the bind
  // installs it on a created scope, a paired one keeps its own.
  if (patches) {
    const change = pendingProperties.get(getAccessorProp().TagVariableChange);
    if (change) {
      body.push(
        t.expressionStatement(
          callRuntime(
            "_patch_bind",
            scopeIdIdentifier,
            t.stringLiteral(getAccessorProp().TagVariableChange),
            t.cloneNode(change.expression, true),
          ),
        ),
      );
    }
  }

  // A body or root a flush may create seeds its state in the setup envelope;
  // content an attribute tag `<for>` creates also seeds its loop params.
  if (
    patches &&
    (!section.parent ||
      isCreatableBody(section) ||
      (!!section.localClosures && isBranchPathSection(section)))
  ) {
    forEach(getPatchFillBindings(section), (binding) => {
      if (!binding.sources?.state) {
        // A local with no state source writes plainly once it exists (root
        // fills already write as the scope reason's complement).
        if (section.parent && !getWrittenLocalFills().has(binding)) {
          getHTMLSectionStatements(section).push(
            t.expressionStatement(writeLocalFill(section, binding)),
          );
        }
        return;
      }
      body.push(
        t.expressionStatement(
          callRuntime(
            "_patch_value",
            scopeIdIdentifier,
            t.stringLiteral(getPatchFillKey(binding)),
            getDeclaredBindingExpression(binding),
            t.numericLiteral(1),
          ),
        ),
      );
      // A controllable let's change handler wires through `_patch_bind` after the
      // value so a seed cannot clobber an installed handler.
      const changeAccessor = getPrefixedScopeAccessor(
        binding,
        getAccessorPrefix().TagVariableChange,
      );
      const change =
        binding.reserveSize && pendingProperties.get(changeAccessor);
      if (change) {
        // The runtime decides the wiring from the rendered value alone; a param-sourced
        // handler binds only under server ownership.
        const bindGuard = change.reason.always
          ? undefined
          : getFilledGuard(change.reason);
        const bindCall = callRuntime(
          "_patch_bind",
          scopeIdIdentifier,
          t.stringLiteral(changeAccessor),
          t.cloneNode(change.expression, true),
        );
        body.push(
          t.expressionStatement(
            bindGuard
              ? t.logicalExpression("&&", bindGuard, bindCall)
              : bindCall,
          ),
        );
      }
    });
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
          ? t.stringLiteral(
              `${section.loc.start.line}:${section.loc.start.column + 1}`,
            )
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
    body.push(
      t.expressionStatement(
        // Child sections gate through their cross-section guards (derived
        // from the root reason, so still binary under patches).
        patches && !section.parent
          ? fillCalls.length
            ? t.conditionalExpression(
                scopePageIdentifier(section),
                writeCall,
                toSequenceExpression(fillCalls),
              )
            : t.logicalExpression("&&", scopePageIdentifier(section), writeCall)
          : getExprIfWritten(section, sectionReason, writeCall),
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
    !isResumedBranch(section) &&
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
const registeredFnsForProgram = new WeakMap<
  t.Program,
  Map<
    string,
    {
      id: string;
      registerId: string;
      node: t.Function;
      section: Section;
      referencesScope: undefined | boolean;
      referencedBindings: ReferencedBindings;
      referencedLocals: Opt<Binding>;
    }
  >
>();
export function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement &&
        t.classProperty(
          node.key,
          replacement,
          undefined,
          undefined,
          node.computed,
          node.static,
        )
      );
    }
    case "ClassPrivateMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement &&
        t.classPrivateProperty(node.key, replacement, undefined, node.static)
      );
    }
    case "ObjectMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement && t.objectProperty(node.key, replacement, node.computed)
      );
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression": {
      return getRegisteredFnExpression(node);
    }
    case "FunctionDeclaration": {
      const replacement = getRegisteredFnExpression(node);
      if (replacement) {
        return t.variableDeclaration("const", [
          t.variableDeclarator(node.id!, replacement),
        ]);
      }
      break;
    }
  }
}

function getRegisteredFnExpression(node: t.Function) {
  const { extra } = node;
  if (isRegisteredFnExtra(extra)) {
    const id = extra.name;
    const referencesScope = extra.referencesScope;
    const referencedBindings = getReferencedBindingsInFunction(extra);
    const referencedLocals = extra.referencedLocalBindingsInFunction;
    let registeredFns = registeredFnsForProgram.get(getProgram().node);
    if (!registeredFns) {
      registeredFnsForProgram.set(
        getProgram().node,
        (registeredFns = new Map()),
      );
    }

    if (!registeredFns.has(id)) {
      registeredFns.set(id, {
        id,
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

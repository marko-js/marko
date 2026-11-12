import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import { toAccess } from "../../html/serializer";
import {
  bindingUtil,
  forEachGlobalBinding,
  type Binding,
  BindingType,
  getCanonicalBinding,
  getDebugName,
  getDebugNames,
  getDebugNamesAsIdentifier,
  getDebugAccess,
  type Getter,
  hasNonConstantPropertyAlias,
  type Intersection,
  withoutGlobals,
  getPropertyPath,
  isGlobalBinding,
  isDirectAlias,
  isRest,
  type ReferencedBindings,
  someAlias,
  someBindingRead,
  someReadIn,
} from "./bindings";
import { createAnalysisMemo } from "./cyclic-memo";
import { getLastOwnSourceReturn } from "./finalize-references";
import { forEachIdentifier } from "./for-each-identifier";
import { isForSelectorValue } from "./for-selector";
import { generateUid, generateUidIdentifier } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-enums";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { isOptimize, isOutputHTML, isPatch } from "./marko-config";
import { every, forEach, type Opt, push, reduce, some } from "./optional";
import { fillsHole } from "./patch/decisions";
import {
  inKeptContent,
  keepsClosureFills,
  hasGuardedSources,
  getCreatedSetup,
  getFilledReferences,
  isFilledIntersection,
  getPatchFillKey,
  getUnfillableSources,
  getPatchFill,
  getPatchWrite,
  fillSubscribes,
  getClosureReadSources,
  isResumedRead,
  runsSubscribersByWrite,
  runsByEntry,
  leavesReadToPatch,
} from "./patch/refresh";
import { patchesBranchesAt, patchFillsSection } from "./patch/structure";
import {
  comparesBoundFn,
  getCallerGroupBit,
  getCallerGroupGuard,
  getClosureScopesIfWritten,
  getEffectEntryArgs,
  getEffectReads,
  getExprIfUnfilled,
  getClientBranchGuardWrites,
  getPatchScopeCalls,
  hasCallerGroupsAt,
  getBodyEntries,
  writePatchResumeStatements,
} from "./patch/writers";
import { getReadReplacement } from "./read-replacement";
import {
  getNodeReasons,
  getSourcesForReferencedBindings,
  isGuardedReason,
  type Reason,
  type Reasons,
} from "./reasons";
import {
  type AssignedBindingExtra,
  getBindingsDerivedFrom,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  getCanonicalExpr,
  hasResumableAssignment,
  hasResumableWriter,
  isAssignedBindingExtra,
  isPureExpr,
  isRegisteredFnExtra,
  type ReferencedExtra,
} from "./references";
import {
  insertStatementBefore,
  replaceWithStatements,
} from "./replace-with-statements";
import {
  callRuntime,
  importRuntimeFeature,
  registerRuntimeValue,
  trimFalsyArgs,
} from "./runtime";
import {
  getClosureAccessorLiteral,
  getLocalsScopeAccessor,
  getPrefixedScopeAccessor,
  getScopeAccessor,
  getScopeAccessorLiteral,
  getScopeOffsetAccessorLiteral,
  getSectionScopesAccessorLiteral,
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
  getForClosureIndex,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  isDirectClosure,
  isDynamicClosure,
  isInParentSection,
  isOptionalBranch,
  type Section,
  sectionUtil,
} from "./sections";
import { replaceMethodNode, simplifyFunction } from "./simplify-fn";
import { findSectionSlot, findSlot, type PlaceSlot, SlotKind } from "./slots";
import { mergeSources, type Sources, sourcesUtil } from "./sources";
import {
  createAnalysisState,
  createOutputState,
  createOutputSectionState,
} from "./state";
import {
  toOnlyExpressionOrBlock,
  toSequenceExpression,
} from "./to-only-or-block";
import { toMemberExpression, toObjectProperty } from "./to-property-name";
import { getRestPattern, withRestFallback } from "./translate-var";
import { traverseReplace } from "./traverse";
import { withLeadingComment } from "./with-comment";
import {
  andGuard,
  getBranchWriteReason,
  getExprIfWritten,
  getWriteGuardForAny,
  getWriteReason,
  isBranchAlwaysMarked,
  ifEver,
  isSameReason,
  getSlotWriteReason,
  getSectionWriteReason,
  getEmittedReasonStatement,
  getScopeIdStatement,
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
  /** Signals this one forwards into: they must declare first when the
   * forward simplifies to a bare, eagerly evaluated reference. */
  forwards: Opt<Signal>;
  render: t.Statement[];
  /** Renders a patch does itself (its hole writes, forwards into work it
   * renders): a client render needs them, a fill's run does not. */
  patch: t.Statement[];
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

// `setupId`: a created scope's setup registers the signal under it.
type closureSignalBuilder = (
  closure: Binding,
  render: t.Expression,
  setupId: t.StringLiteral | undefined,
) => t.Expression;
export const [getSignals] = createOutputSectionState<Map<unknown, Signal>>(
  () => new Map(),
);
const [getClosureSignalBuilder, _setClosureSignalBuilder] =
  createOutputSectionState<closureSignalBuilder | undefined>();
export function setClosureSignalBuilder(
  tag: t.NodePath<t.MarkoTag>,
  build?: closureSignalBuilder,
) {
  const section = getSectionForBody(tag.get("body"))!;
  _setClosureSignalBuilder(
    section,
    build ||
      ((closure, render, setupId) =>
        buildClosureHop(section, closure, render, setupId)),
  );
}

// The hop from a branch of an `<if>` or `<for>` to the scope its closure is in.
export function buildClosureHop(
  section: Section,
  closure: Binding,
  render: t.Expression,
  setupId: t.StringLiteral | undefined,
) {
  const branch = section.branch!;
  const accessor = getScopeAccessorLiteral(branch.tag.nodeBinding, true);
  if (branch.kind === "if") {
    const index = t.numericLiteral(branch.index);
    return setupId
      ? callRuntime("_if_closure_patch", setupId, accessor, index, render)
      : callRuntime("_if_closure", accessor, index, render);
  }
  const id = t.numericLiteral(
    closure.closureId! + getForClosureIndex(closure, section),
  );
  const order = getLoopRenderOrder(section);
  return setupId
    ? callRuntime("_for_closure_patch", setupId, accessor, render, id, order)
    : callRuntime("_for_closure", accessor, render, id, order);
}

// A loop settles its rows in its value's render, which waits for the scope offset
// of the last child whose returned value that value reads.
export function getLoopRenderOrder(bodySection: Section) {
  const returnedBy = getLastOwnSourceReturn(
    getReferencedBindings(bodySection.branch!.tag),
    bodySection.parent!,
  );
  return returnedBy && getScopeOffsetAccessorLiteral(returnedBy, true);
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
  const contentClosures = getDynamicTagContentClosures(bodySection);
  if (!contentClosures) return;
  const scope = generateUidIdentifier("scope");
  const closures = Array.isArray(contentClosures)
    ? contentClosures
    : [contentClosures];
  const ownerAccessor = getAccessorProp().Owner;
  const levels: t.Expression[] = [];
  let written = false;
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
      written ||= isPatch() && !!getPatchWrite(closure).write;
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
  return { scope, levels: levels.reverse(), written };
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
        intersections: undefined,
        forwards: undefined,
        render: [],
        patch: [],
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
            referencedBindings.localOf ||
            getWriteReason(referencedBindings) ||
            // A registered function reads what it references from the scope,
            // though a seeded one gives it no reason.
            (isPatch() && getPatchFill(referencedBindings).fnReference))
        ),
        forceStore: false,
        inline: undefined,
        extraArgs: undefined,
        prependStatements: undefined,
        buildAssignment: undefined,
      }),
    );

    const arriving =
      Array.isArray(referencedBindings) &&
      section.intersections!.get(referencedBindings)!.arriving;
    if (isOutputHTML()) {
      return signal;
    } else if (!referencedBindings) {
      signal.build = () => buildSignalFn(signal);
    } else if (arriving) {
      // An intersection with `$global` keys runs as the work of its other values'.
      const arrivingSignal = getSignal(section, arriving);
      arrivingSignal.intersections = push(arrivingSignal.intersections, signal);
      forEach(referencedBindings, (binding) => {
        if (isGlobalBinding(binding)) getSignal(section, binding);
      });
      signal.build = () =>
        getEffectOnlyIntersections().get(signal) ||
        buildGlobalIntersection(signal, buildSignalFn(signal));
    } else if (Array.isArray(referencedBindings)) {
      const meta = section.intersections!.get(referencedBindings)!;
      subscribe(meta.source || referencedBindings, signal);
      if (meta.source) {
        const sourceSignal = getSignal(section, meta.source);
        forEach(referencedBindings, (member) => {
          const memberSignal = getSignal(section, member);
          // A member only its intersection reads is computed there from the source,
          // unless client code reads it after resume: then it reads what the server wrote.
          const inline =
            !member.propertyAliases.size &&
            member.reads.size === 1 &&
            !getWriteReason(member) &&
            sourceSignal.values.find((v) => v.signal === memberSignal);
          if (inline) {
            memberSignal.inline = inline;
          } else {
            memberSignal.storesValue = memberSignal.forceStore = true;
          }
        });
      }
      forEach(referencedBindings, (binding) => {
        if (isGlobalBinding(binding)) getSignal(section, binding);
      });
      // Setup runs one of `$global` keys alone, none of which arrives.
      if (!withoutGlobals(referencedBindings)) {
        addValue(section, undefined, signal);
      }
      signal.build = () =>
        buildIntersection(section, referencedBindings, signal);
    } else if (isGlobalBinding(referencedBindings)) {
      // The section's work reading a `$global` key, which setup runs where the section reads
      // the key alone (an intersection's or effect's run subscribes the scope).
      signal.storesValue = true;
      for (const expr of getGlobalExprs().get(section)!) {
        if (
          !expr.isEffect &&
          getReferencedBindings(expr) === referencedBindings
        ) {
          addValue(section, undefined, signal);
          break;
        }
      }
      signal.build = () => {
        const binding = referencedBindings;
        // A change re-runs where a path the template reads under the key differs.
        const paths: t.Expression[] = [];
        const pathsId: (string | 0)[] = [];
        const addReadPaths = (alias: Binding) => {
          for (const read of alias.reads.keys()) {
            if (
              bindingUtil.has(
                getReferencedBindings(getCanonicalExpr(read)),
                binding,
              )
            ) {
              if (paths.length) {
                pathsId.push(0);
                paths.push(t.numericLiteral(0));
              }
              forEach(
                getPropertyPath(alias, getProgram().node.extra.globalBinding!),
                (property) => {
                  pathsId.push(property);
                  paths.push(t.stringLiteral(property));
                },
              );
              return;
            }
          }
          for (const child of alias.propertyAliases.values()) {
            addReadPaths(child);
          }
        };
        addReadPaths(binding);
        const declarations = getGlobalKeyDeclarations();
        let declaration = declarations.get(JSON.stringify(pathsId));
        if (!declaration) {
          declarations.set(
            JSON.stringify(pathsId),
            (declaration = generateUidIdentifier(
              getDebugNamesAsIdentifier(binding) + "_key",
            )),
          );
          (signal.prependStatements ||= []).push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                declaration,
                callRuntime("_global_key", ...paths),
              ),
            ]),
          );
        }
        getKeySignalDeclarations().set(signal, declaration);
        const fn =
          (signal.render.length ||
            signal.patch.length ||
            signal.values.length) &&
          buildSignalFn(signal);
        // Named only where a document or created scope subscribes by it, which most do.
        const id =
          getGlobalSubscriptions(section).has(binding) &&
          t.stringLiteral(getResumeRegistryId(section, binding, "subscribe"));
        if (!isWalkedFromOwner(section)) {
          return callRuntime("_global_closure", declaration, id, fn);
        }
        const branch = section.branch!;
        const accessor = getScopeAccessorLiteral(branch.tag.nodeBinding, true);
        return branch.kind === "if"
          ? callRuntime(
              "_global_if",
              declaration,
              accessor,
              t.numericLiteral(branch.index),
              id,
              fn,
            )
          : callRuntime("_global_for", declaration, accessor, id, fn);
      };
    } else if (
      referencedBindings.section !== section &&
      sectionUtil.has(referencedBindings.closureSections, section)
    ) {
      signal.build = () => {
        const closure = referencedBindings;
        const render = buildSignalFn(signal);
        const closureSignalBuilder = getClosureSignalBuilder(section);

        if (closureSignalBuilder && isDirectClosure(section, closure)) {
          // A created scope sets the closure up by its id, registered with the
          // signal it runs.
          const setup =
            isPatch() && getCreatedSetup(section).get(closure)?.setup;
          // A patch may render a mixed one on any scope, whoever renders this body.
          if (setup === "mixed") importRuntimeFeature("patches/render");
          return closureSignalBuilder(
            closure,
            render,
            setup
              ? t.stringLiteral(getResumeRegistryId(section, closure, "setup"))
              : undefined,
          );
        }

        const subscribeId = t.stringLiteral(
          getResumeRegistryId(section, closure, "subscribe"),
        );
        const ownerScope = isInParentSection(closure, section)
          ? undefined
          : t.arrowFunctionExpression(
              [scopeIdentifier],
              getScopeExpression(section, closure.section),
            );
        const walked = isPatch() && runsSubscribersByWrite(closure, section);
        if (walked) importRuntimeFeature("patches/render");
        // A subscriber a flush names (a created scope's setup or subscribe, a walk's
        // position) registers once by its resume id, keyed by this section as HTML's is.
        if (walked || (isPatch() && getCreatedSetup(section).has(closure))) {
          return callRuntime(
            // Off the pure list: in resumed content no renderer registers, this subscriber
            // alone updates the closure, and nothing else references it.
            walked && keepsClosureFills(section)
              ? "_closure_resume"
              : "_closure_get_patch",
            ...trimEmptyArgs([
              subscribeId,
              getClosureAccessorLiteral(closure),
              render,
              ownerScope,
              walked && t.stringLiteral(getClosureSubscribersId(closure)),
              walked &&
                t.numericLiteral(getDynamicClosureIndex(closure, section)),
            ]),
          );
        }
        return callRuntime(
          "_closure_get",
          ...trimEmptyArgs([
            getClosureAccessorLiteral(closure),
            render,
            ownerScope,
            isChangeableDynamicClosure(section, closure) && subscribeId,
          ]),
        );
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

// A resumed subscriber enters its owner's set, which a patch page ships only
// where analysis gave it a reason (never for a value read for `$global` alone).
export function shipsClosureScopes(closure: Binding) {
  return !!findSlot(closure, SlotKind.ClosureScopes)?.reason;
}

// Each section's expressions reading `$global` keys, gathered once.
export const [getGlobalExprs] = createAnalysisState(() => {
  const bySection = new Map<Section, Set<ReferencedExtra>>();
  forEachGlobalBinding((binding) => {
    for (const read of binding.reads.keys()) {
      const expr = getCanonicalExpr(read);
      if (some(getReferencedBindings(expr), isGlobalBinding)) {
        let exprs = bySection.get(read.section);
        if (!exprs) bySection.set(read.section, (exprs = new Set()));
        exprs.add(expr);
      }
    }
  });
  return bySection;
});

// The `$global` keys whose signal in the section a document subscribes by its own id:
// `true` where resumed code renders a read, else the sources the client may own.
export const [getGlobalSubscriptions] = createAnalysisMemo(
  (section: Section) => {
    const subscriptions = new Map<Binding, true | Sources | undefined>();
    // Kept content's scopes never subscribe: no client code reads for them.
    if (inKeptContent(section)) return subscriptions;
    const effects = new Set<Binding>();
    for (const expr of getGlobalExprs().get(section) || []) {
      const referencedBindings = getReferencedBindings(expr);
      // The client runs a filled intersection wherever its group has a client value, one
      // with state always, and derives one a patch writes only for a caller's state.
      const unfilled =
        (Array.isArray(referencedBindings) &&
          !!getSourcesForReferencedBindings(referencedBindings)?.state) ||
        getUnfillableSources(referencedBindings) ||
        (some(expr.derives, hasGuardedSources)
          ? getSourcesForReferencedBindings(referencedBindings)
          : isResumedRead(expr)) ||
        (Array.isArray(referencedBindings) &&
          isFilledIntersection(referencedBindings) &&
          getSourcesForReferencedBindings(referencedBindings));
      forEach(referencedBindings, (binding) => {
        if (isGlobalBinding(binding)) {
          // An effect's resume subscribes its scope to the keys it reads.
          if (expr.isEffect) effects.add(binding);
          const prev = subscriptions.get(binding);
          subscriptions.set(
            binding,
            prev === true || unfilled === true
              ? true
              : mergeSources(prev, unfilled || undefined),
          );
        }
      });
    }
    for (const binding of effects) subscriptions.delete(binding);
    return subscriptions;
  },
  new Map<Binding, true | Sources | undefined>(),
);

// An `<if>` or `<for>` body whose markers always resume its scopes into its owner, which
// walks them, as `_if_closure` and `_for_closure` do; others' scopes subscribe.
export function isWalkedFromOwner(section: Section) {
  if (!isOptionalBranch(section)) return false;
  const branchReason = getBranchWriteReason(section);
  const nodeReason = getWriteReason(section.branch.tag.nodeBinding);
  return (
    !!branchReason &&
    !isGuardedReason(branchReason) &&
    !!nodeReason &&
    !isGuardedReason(nodeReason)
  );
}

// The key signals of an intersection's `$global` keys in its section.
function getKeySignals(signal: Signal) {
  const keySignals: t.Expression[] = [];
  forEach(signal.referencedBindings, (binding) => {
    if (isGlobalBinding(binding)) {
      keySignals.push(getSignal(signal.section, binding).identifier);
    }
  });
  return keySignals;
}

// An intersection with `$global` keys whose only work is its effect: that effect's
// registration, which runs it from the key signals as it subscribes by them.
const [getEffectOnlyIntersections] = createOutputState(
  () => new Map<Signal, t.Expression>(),
);

// An intersection of `$global` keys with the section's values (`fn`, or the `_or` running
// it), which the key signals run on a change.
function buildGlobalIntersection(signal: Signal, fn: t.Expression) {
  return (
    getEffectOnlyIntersections().get(signal) ||
    callRuntime("_global_or", fn, ...getKeySignals(signal))
  );
}

// The signal an effect reading `$global` keys registers with: its key's, or one of its own on
// the key's declaration beside a render; its intersection's, or that `_or`'s `_global_or`.
function getEffectSignal(signal: Signal) {
  const ref = signal.referencedBindings;
  if (!Array.isArray(ref)) {
    return signal.render.length || signal.patch.length || signal.values.length
      ? callRuntime("_global_closure", getKeySignalDeclarations().get(signal)!)
      : signal.identifier;
  }
  return Array.isArray(withoutGlobals(ref)) &&
    !signal.section.intersections!.get(ref)!.arriving
    ? getOrIntersection(signal)
    : signal.identifier;
}

// The `_global_or` an `_or` runs for an intersection with `$global` keys and an effect.
const [getOrIntersections] = createOutputState(
  () => new Map<Signal, t.Identifier>(),
);
function getOrIntersection(signal: Signal) {
  let identifier = getOrIntersections().get(signal);
  if (!identifier) {
    getOrIntersections().set(
      signal,
      (identifier = generateUidIdentifier(
        signal.identifier.name + "__global_or",
      )),
    );
  }
  return identifier;
}

// A template's declaration of the `$global` keys it reads under one set of paths, and
// each key signal's.
const [getGlobalKeyDeclarations] = createOutputState(
  () => new Map<string, t.Identifier>(),
);
const [getKeySignalDeclarations] = createOutputState(
  () => new Map<Signal, t.Identifier>(),
);

export function initValue(binding: Binding, isLet = false) {
  const section = binding.section;
  const signal = getSignal(section, binding);
  // Lazy reads read the value from its scope slot.
  signal.forceStore ||= binding.hasLazyReads;
  signal.build = () => {
    if (isPureMemberForwarder(binding)) {
      return undefined;
    }

    // A fill runs from its scope slot, never as a value forwarder.
    const fills = isPatch() && getPatchFill(binding).fill;
    signal.storesValue ||= !!fills;
    const fn = buildSignalFn(signal);
    const letHelper = signal.extraArgs ? "_let_change" : "_let";
    const helper = isLet ? letHelper : "_const";
    // A filled `<let>`'s own declaration doubles as its fill registration
    // (even a pure forwarder); renders the flush writes itself stay out.
    if (fills) {
      const { ownRegistration } = getPatchFill(binding);
      const key = t.stringLiteral(getPatchFillKey(binding));
      const accessor = getScopeAccessorLiteral(binding, true, true);
      // Where only the key reaches it, the fill's registration ships it and
      // its value signal stays pure; elsewhere what reaches the signal does.
      return callRuntime(
        `_fill${letHelper}${ownRegistration ? "_resume" : ""}`,
        key,
        accessor,
        fn,
        signal.fillFn,
      );
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
    signal.effect.length ||
    signal.hasHTMLEffect ||
    signal.values.length ||
    signal.intersections
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
    getWriteReason(binding) ||
    getSignal(binding.section, binding).storesValue
  ) {
    return false;
  }

  return hasNonConstantPropertyAlias(binding);
}

// Only an uncontrolled `<let>`'s `value=` is marked its initial value (`core/let.ts`).
function setsInitialValue({ referencedBindings }: Signal) {
  return !!(
    (referencedBindings as Binding).derivedFrom as t.NodeExtra | undefined
  )?.initialValue;
}

function getForwardStatements(signal: Signal, target: Signal) {
  return isPatch() && leavesForwardToPatch(target)
    ? signal.patch
    : signal.render;
}

// A fill's run leaves a forward to the patch when the patch fills the value, or does
// every read the target runs: all of a value's, or its bindings' in its section.
function leavesForwardToPatch({
  referencedBindings,
  section,
}: Signal): boolean {
  if (!referencedBindings) return false;
  if (
    Array.isArray(referencedBindings) ||
    referencedBindings.section !== section
  ) {
    return every(
      referencedBindings,
      (binding) => !someReadIn(binding, section, fillRunsRead),
    );
  }
  // A node's own work: a loop or branch chain the patch renders wherever it writes the scope.
  if (referencedBindings.type === BindingType.dom) {
    return (
      some(referencedBindings.branchBodies, isOptionalBranch) &&
      patchesBranchesAt(referencedBindings)
    );
  }
  return (
    getPatchFill(referencedBindings).fill ||
    leavesValueToPatch(referencedBindings)
  );
}

// Every read of the value, and of each alias a forward reaches, leaves its work to the patch.
function leavesValueToPatch(binding: Binding) {
  if (someBindingRead(binding, fillRunsRead)) return false;
  // A `$global` key's paths have signals of their own.
  if (isGlobalBinding(binding)) return true;
  for (const alias of binding.aliases) {
    if (!leavesForwardToPatch(getSignal(alias.section, alias))) return false;
  }
  for (const alias of binding.propertyAliases.values()) {
    if (!leavesForwardToPatch(getSignal(alias.section, alias))) return false;
  }
  return true;
}

// The fill's run does the read's work itself.
function fillRunsRead(read: ReferencedExtra) {
  return !leavesReadToPatch(read);
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
  if (pushSignalCall(signal, target, value)) {
    signal.forwards = push(signal.forwards, target);
  }
}

// Calls `target` with `value`, or runs its statements in place when it is
// inlined; true for a call.
function pushSignalCall(
  signal: Signal,
  target: Signal,
  value: t.Expression | undefined,
  statements = getForwardStatements(signal, target),
) {
  if (isInlinedValue(target)) {
    // Its one read, now in the caller, reads the value as the caller reads it.
    target.inline = { value };
    traverseReplace(target.inline, "value", replaceRenderNode, signal);
    buildSignalFn(target);
    statements.push(...target.render);
    signal.patch.push(...target.patch);
    return false;
  }

  statements.push(
    t.expressionStatement(
      t.callExpression(
        target.identifier,
        trimFalsyArgs([
          scopeIdentifier,
          value,
          ...getTranslatedExtraArgs(target),
        ]),
      ),
    ),
  );
  return true;
}

// A derived value or property alias read once has one caller, the signal
// computing it, so its read runs there with its value in place.
function isInlinedValue(signal: Signal) {
  const binding = signal.referencedBindings;
  if (
    !binding ||
    Array.isArray(binding) ||
    binding.reads.size !== 1 ||
    signal.storesValue ||
    signal.referenced ||
    binding.exposed ||
    binding.assignments ||
    binding.aliases.size ||
    binding.propertyAliases.size ||
    (binding.property === undefined &&
      (binding.type !== BindingType.derived ||
        binding.aliasOf ||
        // Moved into its read, it must not depend on running first.
        !every(binding.derivedFrom || undefined, isPureExpr)))
  ) {
    return false;
  }

  // A read in a function names the value lexically, so it needs the param.
  const [read] = binding.reads.values();
  if (Array.isArray(read) || read!.fnRoot) return false;

  // A local closure's signal is built after its reads resolve, too late to
  // take in what it computes; a fill runs from its own signal's scope slot.
  const from = getBindingsDerivedFrom(binding);
  return (
    (Array.isArray(from) || !from?.localOf) &&
    !(isPatch() && getPatchFill(binding).fill)
  );
}

// A source intersection runs in its source's pass, so it needs no `_or`.
function buildIntersection(
  section: Section,
  intersection: Intersection,
  signal: Signal,
) {
  const { source, id, returnedBy } = section.intersections!.get(intersection)!;
  if (source) return buildSignalFn(signal);
  // A patch changing a `$global` key runs the intersection by the key's signals, its
  // other values arriving: one alone runs it as its own work, more by the `_or` it runs.
  const arrivals = withoutGlobals(intersection);
  const keys = arrivals !== intersection;
  const effectOnly = keys && getEffectOnlyIntersections().get(signal);
  let fn = effectOnly || buildSignalFn(signal);
  if (!Array.isArray(arrivals)) {
    return keys ? buildGlobalIntersection(signal, fn) : fn;
  }
  // One with an effect runs it once the `_or` renders, from the `_global_or` it runs.
  const runsEffect = keys && !effectOnly && !!signal.effect.length;
  if (runsEffect) {
    const run = getOrIntersection(signal);
    (signal.prependStatements ||= []).push(
      t.variableDeclaration("const", [
        t.variableDeclarator(run, buildGlobalIntersection(signal, fn)),
      ]),
    );
    fn = run;
  }
  // A created scope sets the intersection up by its id (`getCreatedSetup`), as any scope
  // renders a filled intersection where its group mixes (`patches/render`).
  const setup = isPatch() && getCreatedSetup(section).get(intersection);
  const setupId = setup && getResumeRegistryId(section, intersection, "setup");
  // One a caller's groups decide links where the call sends it (`recordIntersectionRenders`).
  if (
    setupId &&
    setup.setup === "mixed" &&
    !hasCallerGroupsAt(section, getSourcesForReferencedBindings(intersection))
  ) {
    importRuntimeFeature("patches/render");
  }
  const defaultPending =
    returnedBy || arrivals.length > 2
      ? t.numericLiteral(arrivals.length - 1)
      : undefined;
  const scopeIdAccessor =
    returnedBy && getScopeOffsetAccessorLiteral(returnedBy, true);
  const or = setupId
    ? callRuntime(
        "_or_patch",
        t.stringLiteral(setupId),
        t.numericLiteral(id),
        fn,
        defaultPending,
        scopeIdAccessor,
      )
    : callRuntime(
        "_or",
        t.numericLiteral(id),
        fn,
        defaultPending,
        scopeIdAccessor,
      );
  return keys && !effectOnly && !runsEffect
    ? buildGlobalIntersection(signal, or)
    : or;
}

export function buildSignalFn(signal: Signal): t.Expression {
  const section = signal.section;
  const binding = signal.referencedBindings;
  const isIntersection = Array.isArray(binding);
  const isBinding = binding && !isIntersection;
  const isValue = isBinding && binding.section === section;
  const assertsHoists = isValue && binding.hoists && !isOptimize();

  // A `$global` key's paths have signals of their own, run by their own declarations.
  if (isValue && !isGlobalBinding(binding)) {
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
    const statements =
      isValue && setsInitialValue(value.signal)
        ? signal.render
        : getForwardStatements(signal, value.signal);
    if (signalHasWork(value.signal)) {
      pushSignalCall(signal, value.signal, value.value, statements);
    } else {
      statements.push(
        t.expressionStatement(
          withLeadingComment(
            value.value!,
            getDebugNames(value.signal.referencedBindings),
          ),
        ),
      );
    }
  }

  forEach(signal.intersections, (intersection) => {
    pushScopeCall(
      getForwardStatements(signal, intersection),
      intersection.identifier,
    );
  });

  if (isBinding && binding.sources) {
    let dynamicClosureArgs: t.Expression[] | undefined;
    let dynamicClosureSignalIdentifier: t.Identifier | undefined;
    forEach(binding.closureSections, (closureSection) => {
      if (!isDynamicClosure(closureSection, binding)) {
        // An optional branch's direct closure comes from its parent's signal; a fill
        // reaches it in structure that may update from the client, which no patch writes.
        if (closureSection.parent === section) {
          const closureSignal = getSignal(closureSection, binding);
          pushScopeCall(
            getForwardStatements(signal, closureSignal),
            closureSignal.identifier,
          );
        }
      } else if (isValue) {
        if (!dynamicClosureArgs) {
          dynamicClosureArgs = [];
          dynamicClosureSignalIdentifier = generateUidIdentifier(
            signal.identifier.name + "__closure",
          );
          pushScopeCall(signal.render, dynamicClosureSignalIdentifier);
        }

        dynamicClosureArgs.push(getSignal(closureSection, binding).identifier);
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

  // An effect its entry re-runs is one a patch renders itself; one reading `$global` keys
  // runs from what it registers with (`_global_script`), or setup for a key's own.
  if (signal.effect.length && !some(binding, isGlobalBinding)) {
    pushScopeCall(
      isPatch() && runsByEntry(signal.referencedBindings)
        ? signal.patch
        : signal.render,
      getSignalEffectIdentifier(signal),
    );
  }

  let render = signal.render;
  // A fill's run is the render without what the patch renders itself.
  if (signal.patch.length) {
    if (isValue && getPatchFill(binding).fill) {
      signal.fillFn = toScopeFn(render);
    }
    render = render.concat(signal.patch);
  }

  if (isValue && !signal.storesValue) {
    const call = getOnlyCall(render);
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
      [scopeIdentifier, getSignalValueIdentifier(signal)],
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
    read.properties === undefined &&
    !read.getter?.invoked
  );
}

function subscribe(references: ReferencedBindings, intersection: Signal) {
  if (references) {
    forEach(references, (binding) => {
      // A `$global` key never arrives at an intersection, which registers with its signal.
      if (binding.type !== BindingType.constant && !isGlobalBinding(binding)) {
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
  const referencedBindings = getReferencedBindings(expr);
  const signal = getSignal(targetSection, referencedBindings);
  if (
    type === "effect" &&
    !signal.effect.length &&
    referencedBindings &&
    !Array.isArray(referencedBindings) &&
    isGlobalBinding(referencedBindings)
  ) {
    pushScopeCall(
      getSignal(targetSection, undefined).render,
      getSignalEffectIdentifier(signal),
    );
  }
  // A render of a hole the patch fills is the patch's own (`Signal.patch`).
  const statements =
    signal[
      type === "render" &&
      isPatch() &&
      !!expr?.rendersValue &&
      fillsHole(targetSection, expr)
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

  signal.storesValue ||= !isPure || type === "effect";
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
    insertStatementBefore(tag, statement);
  } else {
    addStatement(
      "render",
      getSection(tag),
      tag.node.attributes[0]?.value.extra,
      statement,
    );
    replaceWithStatements(tag);
  }
}

export function addValue(
  targetSection: Section,
  expr: t.NodeExtra | undefined,
  signal: Signal,
  value?: t.Expression,
) {
  const parentSignal = getSignal(targetSection, getReferencedBindings(expr));
  parentSignal.values.push({
    signal,
    value,
  });

  parentSignal.storesValue ||= !!(
    t.isFunction(value) &&
    value.extra &&
    getReferencedBindingsInFunction(value.extra)
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

export function getResumeRegistryId(
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

    forEach(signal.intersections, writeSignal);
    // An intersection with `$global` keys registers with their signals as the module
    // evaluates.
    if (Array.isArray(signal.referencedBindings)) {
      forEach(signal.referencedBindings, (binding) => {
        if (isGlobalBinding(binding)) writeSignal(getSignal(section, binding));
      });
    }

    // Its caller writes its reads in place.
    if (isInlinedValue(signal)) return;

    let effectDeclarator: t.VariableDeclarator | undefined;
    // Declared after its signal, which it takes.
    let buildEffectDeclarator: (() => t.VariableDeclarator) | undefined;
    if (signal.effect.length) {
      // An effect's registration names the writes a flush's entry re-runs it on, as a
      // function's names its filled references.
      const reads = isPatch() && getEffectReads(signal.section, signal);
      if (reads) importRuntimeFeature("patches/effect");
      traverseReplace(signal, "effect", replaceEffectNode);
      const effectIdentifier = getSignalEffectIdentifier(signal);
      const key = t.stringLiteral(
        getResumeRegistryId(section, signal.referencedBindings) +
          (reads ? " " + reads : ""),
      );
      const effectFn = t.arrowFunctionExpression(
        [scopeIdentifier],
        toOnlyExpressionOrBlock(signal.effect),
      );
      const ref = signal.referencedBindings;
      if (some(ref, isGlobalBinding)) {
        // An effect reading `$global` keys registers with the signal it runs from and
        // subscribes its scope by; one that is an intersection's only work is that intersection.
        const effectOnly =
          Array.isArray(ref) &&
          !signal.render.length &&
          !signal.patch.length &&
          !signal.values.length &&
          !signal.intersections;
        const registration = (signals: t.Expression[]) =>
          callRuntime(
            "_global_script",
            reads ? callRuntime("_filled_id", key) : key,
            effectFn,
            ...signals,
          );
        if (effectOnly) {
          getEffectOnlyIntersections().set(
            signal,
            registration(getKeySignals(signal)),
          );
        } else {
          buildEffectDeclarator = () =>
            t.variableDeclarator(
              effectIdentifier,
              registration([getEffectSignal(signal)]),
            );
        }
      } else {
        effectDeclarator = t.variableDeclarator(
          effectIdentifier,
          callRuntime(reads ? "_script_patch" : "_script", key, effectFn),
        );
      }
    }

    let signalDeclaration: t.Statement | undefined;
    if (signal.build) {
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

      if (signal.register) {
        // A variable's fill applies by the value patcher, imported beside it.
        if (signal.register === "fill") importRuntimeFeature("patches/fill");
        // A patch may carry the registered value (as an entry or in data),
        // so registering it links its resolution.
        if (isPatch()) importRuntimeFeature("patches/bind");
        value = callRuntime(
          signal.register === "fill" ? "_fill_var_resume" : "_var_resume",
          t.stringLiteral(
            getResumeRegistryId(section, signal.referencedBindings, "var"),
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

    const signalStatements = signal.prependStatements || [];

    if (effectDeclarator) {
      signalStatements.push(t.variableDeclaration("const", [effectDeclarator]));
    }

    if (signalDeclaration) {
      signalStatements.push(signalDeclaration);
    }

    if (buildEffectDeclarator) {
      signalStatements.push(
        t.variableDeclaration("const", [buildEffectDeclarator()]),
      );
    }
    getProgram().node.body.push(...signalStatements);

    written.add(signal);
  }

  return written;
}

// The id a created scope runs `ref`'s setup by: a subscriber's resume id (its setup
// being its `._`, `_closure_get_patch`), else its own.
export function getCreatedSetupId(
  section: Section,
  ref: Binding | Intersection,
) {
  return getResumeRegistryId(
    section,
    ref,
    !Array.isArray(ref) && isDynamicClosure(section, ref)
      ? "subscribe"
      : "setup",
  );
}

// The id an owner's entry runs a closure's subscribers by.
export function getClosureSubscribersId(closure: Binding) {
  return getResumeRegistryId(closure.section, closure, "subscribers");
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
                      getResumeRegistryId(hoistSection, binding, "hoist"),
                    ),
                    ...accessors,
                  )
                : callRuntime("_hoist", ...accessors)
              : callRuntime(
                  "_el",
                  t.stringLiteral(getResumeRegistryId(section, binding)),
                  ...accessors,
                ),
          ),
        ]),
      );
    }
  });
}

function pushInstancesAccessor(section: Section, accessors: t.Expression[]) {
  const instancesAccessor = getSectionScopesAccessorLiteral(section);
  const { branch } = section;
  // The branches of an `<if>` chain share one slot, so the read checks which renders.
  accessors.push(
    branch?.kind === "if" && Array.isArray(branch.tag.nodeBinding.branchBodies)
      ? t.arrayExpression([
          instancesAccessor,
          t.stringLiteral(
            getPrefixedScopeAccessor(
              branch.tag.nodeBinding,
              getAccessorPrefix().ConditionalRenderer,
            ),
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
    if (registeredFn.referencesScope || registeredFn.referencedLocals) {
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
        // the factory before its scopes resume (stubs fill in place).
        params = [localsIdentifier];
        if (registeredFn.referencesScope) {
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
    const filled = isPatch() && !!getFilledReferences(fn);
    statements.push(
      t.expressionStatement(
        // A function with filled references a patch binds records what resume revives of it.
        filled
          ? callRuntime(
              "_bind_resume",
              t.stringLiteral(
                registeredFn.registryId + " " + getFilledReferences(fn),
              ),
              t.identifier(registeredFn.id),
            )
          : registerRuntimeValue(
              registeredFn.registryId,
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
  const signal = getSignal(section, getReferencedBindings(expr));
  signal.hasHTMLEffect = signal.storesValue = true;
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
  const nodeReasons = getNodeReasons(section);
  const markerGuard = getWriteGuardForAny(section, nodeReasons, true);
  const sectionReason = getSectionWriteReason(section);
  // The client reads the scope's closest branch wherever the server writes
  // state its handlers assign or a subscription for it: with the scope, or with
  // subscriber sets written only for some renders.
  let linkedWithScope = some(section.bindings, isClientAssignedLet);
  let linkReasons: Reasons | undefined;
  forEach(section.referencedClosures, (closure) => {
    if (closure.sources) {
      if (isDynamicClosure(section, closure) && shipsClosureScopes(closure)) {
        const scopesSlot = findSlot(closure, SlotKind.ClosureScopes)!;
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
          // Only an unfilled read subscribes; a set none enters still ships, as
          // writing it at its first entry costs more runtime than it saves.
          writeSlot(
            scopesSlot,
            (isPatch() &&
              getClosureScopesIfWritten(
                closure,
                scopesSlot.reason,
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

        const closureScopesReason = scopesSlot.reason;
        const readSources =
          isPatch() && !closure.sources.state
            ? getClosureReadSources(closure, section)
            : undefined;
        const callerGroups = hasCallerGroupsAt(section, readSources);
        // A scope a patch pairs takes its reads by fills and entries, so it subscribes only where
        // the client can change the owner value (`_unfilled_if`); one no patch pairs, for the walk too.
        const unfilled = !!readSources && patchFillsSection(section);
        // A scope no call leaves the read unfilled for joins no set.
        if (
          unfilled &&
          getCallerGroupBit(section, "_unfilled_if", readSources) === 0
        ) {
          return;
        }
        const subscribeArg =
          isGuardedReason(closureScopesReason) &&
          !isSameReason(closureScopesReason, sectionReason) &&
          // `_unfilled_if` on the same root group already tests the mask.
          !(
            unfilled &&
            callerGroups &&
            isSameReason(closureScopesReason, readSources)
          )
            ? getExprIfWritten(closure.section, closureScopesReason, identifier)
            : identifier;
        // No call writes the subscriber set: the scope joins none.
        if (subscribeArg) {
          const changeable = isChangeableDynamicClosure(section, closure);
          if (subscribeArg === identifier) {
            linkedWithScope = true;
          } else {
            linkReasons = sourcesUtil.add(linkReasons, closureScopesReason!);
          }
          // In a `@catch` of a template with no client work, only where a caller's client
          // state loads its module.
          const subscribed = unfilled
            ? andGuard(
                getCallerGroupGuard(section, "_unfilled_if", readSources) ||
                  callRuntime("_unfilled_if"),
                subscribeArg,
              )
            : subscribeArg;
          addWriteScopeBuilder(section, (expr) => {
            const resumeId =
              changeable &&
              t.stringLiteral(
                getResumeRegistryId(section, closure, "subscribe"),
              );
            // A value a patch fills can change before the subscriber resumes.
            const resumes = ifEver(
              resumeId && callerGroups && !fillSubscribes(closure, section)
                ? andGuard(
                    getCallerGroupGuard(section, "_client_guard", readSources),
                    resumeId,
                  )
                : resumeId,
            );
            return callRuntime(
              "_subscribe",
              subscribed,
              expr,
              resumes,
              resumes && markerGuard,
            );
          });
        }
      }
    }
  });

  // A scope with client work reading `$global` keys subscribes to them, or, in a body its
  // owner walks, the owner does, once per render however many bodies it renders.
  const walked = isWalkedFromOwner(section);
  for (const [binding, unfilled] of getGlobalSubscriptions(section)) {
    const clientGuard =
      unfilled === true
        ? t.numericLiteral(1)
        : unfilled && getCallerGroupGuard(section, "_client_guard", unfilled);
    body.push(
      t.expressionStatement(
        callRuntime(
          "_global_subscribe",
          t.stringLiteral(getResumeRegistryId(section, binding, "subscribe")),
          walked ? getScopeIdIdentifier(section.parent!) : scopeIdIdentifier,
          ifEver(clientGuard),
        ),
      ),
    );
  }

  // Effects carry no order (CONTEXT.md Effect), so neither this loop's direction
  // nor its place after the section's body holds one.
  const patches = isPatch();
  const renderScripts = new Map<Intersection, (t.Expression | undefined)[][]>();
  const entries = getBodyEntries(section);
  for (let i = allSignals.length; i--;) {
    const signal = allSignals[i];
    if (signal.hasHTMLEffect) {
      // A patch's intersection render may run the effect instead of its entry: the
      // intersection's own effect and those of the intersections with `$global` it runs.
      const ref = signal.referencedBindings;
      const intersection =
        Array.isArray(ref) &&
        (section.intersections!.get(ref)!.arriving || ref);
      const rendered =
        patches &&
        intersection &&
        getCreatedSetup(section).get(intersection)?.setup === "mixed"
          ? intersection
          : undefined;
      const entry =
        patches &&
        getEffectEntryArgs(
          section,
          signal,
          !!rendered,
          entries && section.parent,
        );
      const registryId = t.stringLiteral(
        getResumeRegistryId(section, signal.referencedBindings),
      );
      const args = entry
        ? [
            scopeIdIdentifier,
            registryId,
            markerGuard || t.numericLiteral(1),
            ...entry,
          ]
        : [scopeIdIdentifier, registryId, markerGuard];
      if (rendered && entry) {
        let scripts = renderScripts.get(rendered);
        if (!scripts) renderScripts.set(rendered, (scripts = []));
        scripts.push(args);
      } else {
        const script = t.expressionStatement(callRuntime("_script", ...args));
        body.push(script);
        // An effect's entry is one its `<await>` writes where no copy renders.
        if (entry && entries) entries.push(script);
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
    // Where a patch build's unfilled guard applies it decides, also where it folds to never.
    const written = ifEver(
      (isPatch() && getExprIfUnfilled(section, binding, reason, value)) ||
        ifWritten(reason, value),
    );
    if (written) scopeProperties.push(toObjectProperty(accessor, written));

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
  const scopeCalls = patches ? getPatchScopeCalls(section, paramWrites) : [];
  if (patches) {
    writePatchResumeStatements(section, body, paramWrites, renderScripts);
  }

  if (section.parent) {
    const ownerAccessor = getAccessorProp().Owner;
    const ownerReason = findSectionSlot(section, SlotKind.Owner)?.reason;
    if (ownerReason) {
      pendingProperties.delete(ownerAccessor);
      const owner =
        !getOwnerResumedByMarker(section) &&
        ifWritten(
          ownerReason,
          callRuntime("_scope_with_id", getScopeIdIdentifier(section.parent)),
        );
      if (owner) scopeProperties.push(toObjectProperty(ownerAccessor, owner));
    }
  }

  for (const [key, { expression, reason }] of pendingProperties) {
    const value = ifWritten(reason, expression);
    if (value) scopeProperties.push(toObjectProperty(key, value));
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
      !(isGuardedReason(sectionReason) && sectionReason.global)
        ? getExprIfWritten(section, sectionReason, writeCall)
        : writeCall;
    // A section's patch calls take its write's place in a patch render, where
    // `_scope` writes nothing.
    const calls = scopeCalls.length
      ? toSequenceExpression(scopeCalls)
      : undefined;
    const statement =
      write && calls ? t.logicalExpression("||", write, calls) : write || calls;
    if (statement) body.push(t.expressionStatement(statement));
  } else if (scopeCalls.length) {
    body.push(t.expressionStatement(toSequenceExpression(scopeCalls)));
  }
  if (patches) body.push(...getClientBranchGuardWrites(section));

  // The walker places a scope whose marker it visits, so a section that always
  // writes one needs no link; a dynamic marker guards it, none writes it plain.
  if (markerGuard && !isBranchAlwaysMarked(section)) {
    let link: t.Expression | undefined;
    if (section.hasAbortSignal) {
      // An abort signal's effect always ships.
      link = callRuntime("_resume_branch", scopeIdIdentifier);
    } else if (sectionReason && !sourcesUtil.has(nodeReasons, sectionReason)) {
      // The rest ship with the scope write, but where a marker written for the
      // same reason places the scope.
      const guard = linkedWithScope
        ? undefined
        : getWriteGuardForAny(
            section,
            sourcesUtil.difference(linkReasons, nodeReasons),
            true,
          );
      if (guard?.type !== "NumericLiteral") {
        const call = callRuntime("_resume_branch", scopeIdIdentifier);
        link = getExprIfWritten(section, sectionReason, andGuard(guard, call));
      }
    }
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
  // A patch page names each scope by the id its caller peeks (a marker, a patch
  // link, a child scope ref) whatever it writes, so every section claims its id.
  if (body.length || additionalStatements.length || isPatch()) {
    body.unshift(getScopeIdStatement(section), ...additionalStatements);
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
          const replacement = createScopeReadExpression(binding, extra.section);
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
    registryId: string;
    node: t.Function;
    section: Section;
    referencesScope: undefined | boolean;
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
    const referencedLocals = extra.referencedLocalBindingsInFunction;
    getRegisteredFns().push({
      id,
      node,
      registryId: extra.registryId,
      section: extra.section,
      referencesScope,
      referencedLocals,
    });

    if (referencedLocals) {
      // The argument mirrors the locals scope `_resume_locals` serializes.
      const properties: t.ObjectExpression["properties"] = [];
      if (referencesScope) {
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
    } else if (referencesScope) {
      return t.callExpression(t.identifier(id), [scopeIdentifier]);
    } else {
      return t.identifier(id);
    }
  }
}

function appendBindingKey(name: string, binding: Binding, section: Section) {
  return `${name}_${binding.name}#${binding.section === section ? "" : binding.section.id + ":"}${binding.id}`;
}

// State a resumed handler or effect can assign, which queues the scope's render.
function isClientAssignedLet(binding: Binding) {
  return binding.type === BindingType.let && hasResumableAssignment(binding);
}

function getDebugLoc({ start }: t.SourceLocation) {
  return `${start.line}:${start.column + 1}`;
}

// Patch writers: the calls a flush's entries come from, with the param group
// guards, group args and boundary flags gating them.
import { types as t } from "@marko/compiler";

import { type Falsy, UpdatesFrom } from "../../../common/types";
import {
  type Binding,
  bindingUtil,
  getCanonicalBinding,
  type Intersection,
  getDebugNames,
  getNearestDeclared,
  isInvokeOnlyBinding,
  isStateSourced,
  someAlias,
} from "../bindings";
import { createAnalysisMemo } from "../cyclic-memo";
import { generateUidIdentifier } from "../generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
  getPatchKey,
} from "../get-accessor-enums";
import { getDeclaredBindingExpression } from "../get-declared-binding-expression";
import { derivesConstantInput, isJoinedWithClientState } from "../known-tag";
import { isOptimize } from "../marko-config";
import { isTrackedFunction } from "../module-registrations";
import {
  every,
  forEach,
  fromIter,
  type Opt,
  push,
  some,
  type SortedOpt,
  toArray,
} from "../optional";
import {
  getSourcesForExpr,
  getSourcesForRef,
  isConditionalReason,
  isUnconditionalReason,
  mapBodyParams,
  type Reason,
} from "../reasons";
import {
  getReferencedBindings,
  getReferencedBindingsInFunction,
  isReferencedExtra,
  type Read,
  type ReferencedExtra,
} from "../references";
import {
  callRuntime,
  type HTMLRuntimeHelpers,
  importRuntime,
} from "../runtime";
import { getPrefixedScopeAccessor, getScopeAccessor } from "../scope-accessor";
import {
  findParamReasonGroupIndex,
  forEachParamGroup,
  getCallerParamGroupsAt,
  getConditionalCallerGroupsAt,
  getParamReasonGroupIndex,
  getRendererReason,
  getScopeIdIdentifier,
  isKnownChild,
  isCallerParamAt,
  isLoopBody,
  type ParamReasonGroup,
  type Section,
  sectionUtil,
  isDynamicClosure,
} from "../sections";
import { inCreatedCatch, isQueuedOnCreate } from "../shell";
import {
  getResumeRegisterId,
  getScopeProperties,
  getEffectCallerSources,
  getSignals,
  type Signal,
  toSequenceExpression,
} from "../signals";
import { findSlot } from "../slots";
import { mergeSources, type Sources, sourcesUtil } from "../sources";
import { TagNameType } from "../tag-name-type";
import { withLeadingComment } from "../with-comment";
import {
  andGuard,
  buildComposedGroupValue,
  buildGroupMask,
  getGroupArgs,
  getOrHoistSectionGuard,
  getWriteReason,
  isDynamicWriteGuard,
  isHoistedGroupCheck,
  getSectionWriteReason,
  orGuard,
} from "../write-guard";
import {
  getRenderedValueSources,
  getWriteSources,
  seedsOnly,
} from "./decisions";
import {
  addLiveDeps,
  getCreatedInits,
  getLiveCaptures,
  getPatchFill,
  getPatchFillBindings,
  isSectionParam,
  getPatchFillKey,
  getPatchWrite,
  getRendererCallerSources,
  getRendererRead,
  hasContents,
  getBuiltObject,
  holdsBuiltObject,
  isEffectRead,
  someDerivedRead,
  someReached,
  isPatchWrittenJoin,
  getUnfilledReadSources,
  getUnfilledSubscribedSources,
  rerunsByEntry,
  patchWritesScope,
  seedsLetWhole,
  type CreatedInit,
  type FillConditions,
  initedJoinDependsOn,
  getSentHop,
  rerunsEffectOnPatch,
} from "./refresh";
import { getParamSelectedStructure } from "./structure";

// The fills (and a known child's writes) a section's patch writes as `_scope`'s else;
// a known child's live captures write where declared, its params' to `paramWrites`.
export function getPatchFillCalls(
  section: Section,
  paramWrites: t.Statement[],
) {
  // Root state seeds (below); a plain write would clobber the client's.
  const fillCalls: t.Expression[] = [];
  forEach(getPatchFillBindings(section), (binding) => {
    pushKnownChildCalls(section, binding, fillCalls, paramWrites);
  });
  // A `<let>` keeps the content it is given: what it derives from reports it,
  // with no fill of its own (or a state one) to report it otherwise.
  forEach(section.bindings, (binding) => {
    const { fill, keptInLet } = getPatchFill(binding);
    if (keptInLet && (!fill || isStateSourced(binding))) {
      const withheld = getWithholdCall(section, binding);
      if (withheld) fillCalls.push(withheld);
    }
  });

  // Effect-read values need no client registration: the wire writes the accessor and
  // each effect runs again by register id on change; a known child's ride the complement.
  if (isKnownChild(section)) {
    forEach(section.bindings, (binding) => {
      if (!getPatchFill(binding).fill) {
        pushKnownChildCalls(section, binding, fillCalls, paramWrites);
      }
    });
  }
  return fillCalls;
}

function pushKnownChildCalls(
  section: Section,
  binding: Binding,
  fillCalls: t.Expression[],
  paramWrites: t.Statement[],
) {
  if (!isKnownChild(section) || !isBoundLiveCapture(binding)) {
    fillCalls.push(...buildPatchCalls(section, binding));
  } else if (isSectionParam(binding) && !isNamedWhereHidden(binding)) {
    const write = buildDeclarationWrite(binding);
    if (write) paramWrites.push(t.expressionStatement(write));
  }
}

// A binding's fill and the content it keeps, else its write.
function buildPatchCalls(section: Section, binding: Binding) {
  const calls: t.Expression[] = [];
  if (!getPatchFill(binding).fill) {
    if (getPatchWrite(binding).write) {
      calls.push(
        gatePatchWrite(
          section,
          binding,
          getUnfilledPatchWrite(section, binding),
        )!,
      );
    }
  } else if (!isStateSourced(binding)) {
    const fill = gatePatchWrite(
      section,
      binding,
      buildPatchFill(
        section,
        binding,
        undefined,
        getConstantSetup(section, binding),
      ),
      getPatchWrite(binding).write
        ? getUnfilledPatchWrite(section, binding)
        : undefined,
      getPatchFill(binding).splitsContent
        ? buildPatchFill(section, binding, "content")
        : undefined,
    );
    if (fill) calls.push(fill);
    const withheld = getWithholdCall(section, binding);
    if (withheld) calls.push(withheld);
  }
  return calls;
}

// The patch side of an effect's `_script`: its entry (`1`, or `2` queued) where
// a patch writes in place a value the effect read, then those values.
export function getEffectEntryArgs(section: Section, signal: Signal) {
  // Only a value the patch writes in place re-runs it: a server group's.
  let written: Opt<Sources>;
  let always = false;
  const deps: Binding[] = [];
  const byEntry = rerunsByEntry(signal.referencedBindings);
  forEach(signal.referencedBindings, (binding) => {
    const root = getCanonicalBinding(binding);
    if (rerunsEffectOnPatch(root) || (byEntry && getPatchFill(root).fill)) {
      deps.push(root);
      const sources = getSourcesForRef(root);
      if (sources && getRootGroupArgs(section, sources).length) {
        written = push(written, sources);
      } else {
        always = true;
      }
    }
  });
  // No patch pairs what a created `@catch` holds, so their shells mount their effects.
  if (!deps.length || inCreatedCatch(section)) return;
  // The entry mounts the effect in a created scope where no render of the
  // scope queues it: one its caller passes client state does.
  const queued = isQueuedOnCreate(section, signal.referencedBindings);
  // A constant read still mounts the effect where a flush may create.
  const check = queued ? "_server_guard" : "_filled_guard";
  const group = !always && getSoleCallerGroup(section, written);
  const guard =
    !always && orCallerGroupGuards(section, undefined, check, written);
  const callerSources =
    !queued && getEffectCallerSources(section, signal.referencedBindings);
  // A group the guard fills is no client group there.
  const clientGuard =
    callerSources &&
    orCallerGroupGuards(
      section,
      undefined,
      "_client_guard",
      callerSources,
      new Set(group ? [group] : []),
    );
  const entry = queued
    ? t.numericLiteral(2)
    : clientGuard
      ? t.conditionalExpression(
          clientGuard,
          t.numericLiteral(2),
          t.numericLiteral(1),
        )
      : undefined;
  return [
    guard
      ? entry
        ? t.logicalExpression("&&", guard, entry)
        : guard
      : entry || t.numericLiteral(1),
    ...getDeps(section, deps, check, group),
  ];
}

// An effect whose join a patch inits on the scope: the init runs it, else its
// entry ships (`writePatchResumeStatements`).
export function isJoinInitEffect(section: Section, signal: Signal) {
  const ref = signal.referencedBindings;
  return (
    Array.isArray(ref) &&
    getCreatedInits(section).get(ref)?.init === "mixed" &&
    getJoinInitGuard(section, ref) !== false
  );
}

// A section's patch entries beside its resume data: the setup a created scope
// gets, and the join inits that run an effect or else its `_script`.
export function writePatchResumeStatements(
  section: Section,
  body: t.Statement[],
  paramWrites: t.Statement[],
  initScripts: Map<Signal, t.Expression>,
) {
  const pendingProperties = getScopeProperties(section);
  // A branch param writes as its body starts, a local once it exists.
  if (!isKnownChild(section)) {
    forEach(section.bindings, (binding) => {
      if (isSectionParam(binding) && !isNamedWhereHidden(binding)) {
        const write = buildDeclarationWrite(binding);
        if (write) paramWrites.push(t.expressionStatement(write));
      }
    });
  }
  // Beside fills: a created scope's seeds, written join members' slot writes and
  // unpatched values, and a local's fill or write chosen at the section's end.
  forEach(section.bindings, (binding) => {
    const { seed, write } = getPatchWrite(binding);
    const seeds = seed && getWriteReason(binding);
    // A fill or effect write's own call carries its entry.
    const unpatched =
      !(getPatchFill(binding).fill || write) &&
      getPatchFill(binding).unpatchedStructure;
    // A value written in place wherever its group is the server's needs no more.
    const joinWrites = write ? undefined : getPatchFill(binding).joinWrites;
    // In place where a join the patch writes runs on the client (another
    // member is the client's), unless the unpatched key ships there already.
    const othersClient =
      joinWrites &&
      !(
        unpatched &&
        (unpatched === true ||
          sourcesUtil.isSuperset(unpatched.structure, joinWrites))
      )
        ? orCallerGroupGuards(section, undefined, "_client_guard", joinWrites)
        : undefined;
    const filled =
      othersClient || unpatched ? getFilledGuard(section, binding) : undefined;
    const inPlace = othersClient && andGuard(filled, othersClient);
    // A seed writes what plain's document would: a group-gated value only
    // where the group is the client's.
    const entry =
      seeds || inPlace
        ? seeds
          ? andGuard(
              getStateInitGuard(section, binding),
              andGuard(
                isDynamicWriteGuard(section, seeds)
                  ? getCallerGroupGuard(section, "_client_guard", seeds)
                  : undefined,
                buildPatchWrite(
                  section,
                  binding,
                  undefined,
                  inPlace
                    ? t.unaryExpression("!", inPlace)
                    : t.numericLiteral(1),
                ),
              ),
            )
          : t.logicalExpression(
              "&&",
              inPlace!,
              buildPatchWrite(section, binding),
            )
        : undefined;
    const expr = unpatched
      ? orUnpatchedValue(section, binding, filled, entry)
      : entry;
    if (expr) body.push(t.expressionStatement(expr));
    // A local whose fill or write its section's end decides writes here.
    if (!isKnownChild(section) && writesAtSectionEnd(binding)) {
      const local = getPatchFill(binding).fill
        ? buildLocalFill(section, binding)
        : write && buildLocalWrite(section, binding);
      if (local) body.push(t.expressionStatement(local));
    }
  });

  // What content under an `<await>` body reads from outside (there or in a
  // `<define>` it calls) fills at the body's end, where the content exists.
  for (
    let above = section.branch?.await && section.parent;
    above;
    above = above.parent
  ) {
    forEach(getPatchFillBindings(above), (binding) => {
      const { fill, splitsContent } = getPatchFill(binding);
      if (fill && fill !== true && sectionUtil.has(fill.awaits, section)) {
        const withheld = getWithheldGuard(
          binding.section,
          fill.awaitedContents,
          section,
        )!;
        // No constant seed: the owner's setup entry went out before the
        // body settled, so a seed would never reach a created owner.
        const write = buildPatchFill(
          binding.section,
          binding,
          splitsContent ? "content" : undefined,
        );
        body.push(
          t.expressionStatement(
            andGuard(
              getFilledGuard(binding.section, binding),
              withheld === true
                ? write
                : t.logicalExpression("&&", withheld, write),
            ),
          ),
        );
      }
    });
  }

  // A closure over a patch-written slot (a value or a live function's new bind)
  // the client renders re-runs on a live scope once marked: no node reaches it.
  forEach(section.bindings, (binding) => {
    forEach(binding.closureSections, (closureSection) => {
      if (rerunsClosureByWrite(binding, closureSection)) {
        const sources = getSourcesForRef(binding);
        body.push(
          t.expressionStatement(
            andGuard(
              getCallerGroupGuard(section, "_filled_guard", sources),
              andGuard(
                // A call may hand the client param-selected structure.
                orCallerGroupGuards(
                  section,
                  undefined,
                  "_client_guard",
                  fromIter(getParamSelectedStructure(closureSection) || []),
                ),
                callPatchRuntime(
                  "_patch_effect",
                  section,
                  getPatchKey().Init +
                    getResumeRegisterId(closureSection, binding, "init"),
                  ...getDeps(
                    section,
                    [binding],
                    "_filled_guard",
                    isConditionalReason(sources) &&
                      !sources.global &&
                      getSoleCallerGroup(section, sources),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    });
  });

  // The inits a flush names: a created or composed scope's where the client
  // contributes the group, a subscriber, and on any scope a written join's.
  for (const [ref, init] of getCreatedInits(section)) {
    if (Array.isArray(ref)) {
      if (init.init === "mixed") {
        const needed = getJoinInitGuard(section, ref);
        const groupArgs = getRootGroupArgs(section, getSourcesForRef(ref));
        const deps = getDeps(
          section,
          toArray(ref, getCanonicalBinding),
          "_filled_guard",
        );
        if (needed !== false) {
          // A mixed join re-runs as its members change, under its group where params decide it.
          const init = andGuard(
            needed,
            groupArgs.length
              ? callPatchRuntime(
                  "_patch_join_init",
                  section,
                  getResumeRegisterId(section, ref, "init"),
                  ...groupArgs,
                  ...deps,
                )
              : callPatchRuntime(
                  "_patch_effect",
                  section,
                  getPatchKey().Init +
                    getResumeRegisterId(section, ref, "init"),
                  ...deps,
                ),
          );
          // The join's effect ships its entry only where the init doesn't run it.
          const effect = initScripts.get(getSignals(section).get(ref)!);
          body.push(
            t.expressionStatement(
              effect ? t.logicalExpression("||", init, effect) : init,
            ),
          );
        }
      } else if (init.init === "client") {
        body.push(
          t.expressionStatement(
            buildClientInit(
              section,
              getSourcesForRef(ref),
              getResumeRegisterId(section, ref, "init"),
            ),
          ),
        );
      }
    } else if (typeof init.subscribe === "object") {
      body.push(
        t.expressionStatement(
          buildSubscribe(section, ref, init.init, init.subscribe.unfilled),
        ),
      );
    } else if (init.init === "client") {
      body.push(
        t.expressionStatement(
          buildClientInit(
            section,
            ref.sources,
            getResumeRegisterId(section, ref, "init"),
          ),
        ),
      );
    }
  }

  // A `<return>` handler's slot holds its bind (`buildReturnChangeBind`), which
  // returns the handler: hoisted, a patch render binds it too.
  const change = pendingProperties.get(getAccessorProp().TagVariableChange);
  if (change) {
    const local = generateUidIdentifier("valueChange");
    body.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(local, change.expression),
      ]),
    );
    change.expression = local;
  }

  // A controlled `<let>`'s handler is hoisted: its scope slot, value write and
  // bind share one read.
  const letChanges = new Map<
    Binding,
    { expression: t.Expression; reason: Reason }
  >();
  forEach(getPatchFillBindings(section), (binding) => {
    const change =
      binding.reserveSize &&
      pendingProperties.get(
        getPrefixedScopeAccessor(
          binding,
          getAccessorPrefix().TagVariableChange,
        ),
      );
    if (change) {
      const local = generateUidIdentifier(binding.name + "Change");
      body.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(local, change.expression),
        ]),
      );
      change.expression = local;
      letChanges.set(binding, change);
    }
  });

  // A scope a flush writes, and so may create, seeds its state in the setup
  // envelope; content an attribute tag `<for>` creates also seeds its loop params.
  if (patchWritesScope(section)) {
    forEach(getPatchFillBindings(section), (binding) => {
      if (!isStateSourced(binding)) return;
      const change = letChanges.get(binding);
      letChanges.delete(binding);
      for (const write of change
        ? buildLetChangeWrites(section, binding, change)
        : buildLetSeeds(section, binding)) {
        body.push(t.expressionStatement(write));
      }
    });
  }

  // Elsewhere a controlled `<let>` only fills, while its handler controls it
  // and the server owns its controller.
  for (const [binding, change] of letChanges) {
    const controller = getSourcesForExpr(binding.derivedFrom as t.NodeExtra);
    if (!controller?.state) {
      const filledGuard = getCallerGroupGuard(
        section,
        "_filled_guard",
        controller,
      );
      body.push(
        t.expressionStatement(
          t.logicalExpression(
            "&&",
            filledGuard
              ? t.logicalExpression(
                  "&&",
                  t.cloneNode(change.expression),
                  filledGuard,
                )
              : t.cloneNode(change.expression),
            buildPatchFill(section, binding),
          ),
        ),
      );
    }
  }
}

// A controlled `<let>`'s value, a fill while its handler controls it and the
// server owns its controller, else a seed; then its handler binds.
function buildLetChangeWrites(
  section: Section,
  binding: Binding,
  change: { expression: t.Expression; reason: Reason },
) {
  // A param-sourced handler binds only where its group updates from the server.
  const bindGroupArgs = change.reason.always
    ? []
    : getRootGroupArgs(section, change.reason);
  const bindKey =
    getPatchKey().Write +
    getPrefixedScopeAccessor(binding, getAccessorPrefix().TagVariableChange);
  const controller = getSourcesForExpr(binding.derivedFrom as t.NodeExtra);
  if (controller?.state) {
    // A state-sourced controller is the client's: the value only seeds.
    return [
      buildPatchFill(section, binding, undefined, t.numericLiteral(1)),
      callPatchRuntime(
        "_patch_bind",
        section,
        bindKey,
        t.cloneNode(change.expression),
        ...bindGroupArgs,
      ),
    ];
  }
  const groupArgs = getRootGroupArgs(section, controller);
  return [
    callPatchRuntime(
      "_patch_let_change",
      section,
      getPatchKey().Fill + getPatchFillKey(binding),
      getDeclaredBindingExpression(binding),
      t.stringLiteral(bindKey),
      t.cloneNode(change.expression),
      groupArgs[0],
      groupArgs[1],
      initsLetValue(section, binding) && t.numericLiteral(1),
      ...bindGroupArgs,
    ),
  ];
}

// A created scope re-derives the `<let>` where the client contributes it: each
// closure its value and handler read inits there.
function initsLetValue(section: Section, binding: Binding) {
  const refs = getReferencedBindings(binding.derivedFrom as t.NodeExtra);
  return (
    !!refs &&
    every(refs, (ref) => getCreatedInits(section).get(ref)?.init === "client")
  );
}

// A created scope's `<let>` seeds what the document writes of it or its renders
// read, whole or by member: one value its signals derive where they render it.
function buildLetSeeds(section: Section, binding: Binding) {
  const setup = t.numericLiteral(1);
  const sources = getSourcesForExpr(binding.derivedFrom as t.NodeExtra);
  const guard = getCallerGroupGuard(section, "_filled_guard", sources);
  if (seedsLetWhole(binding)) {
    return [
      andGuard(guard, buildPatchFill(section, binding, undefined, setup)),
    ];
  }
  // A client source's init sets the members.
  if (sources?.state) return [];
  const writes: t.Expression[] = [];
  const addMemberSeeds = (member: Binding) => {
    for (const alias of member.propertyAliases.values()) {
      if (getWriteReason(alias)) {
        writes.push(
          andGuard(guard, buildPatchWrite(section, alias, undefined, setup)),
        );
      } else {
        addMemberSeeds(alias);
      }
    }
  };
  addMemberSeeds(binding);
  return writes;
}

// A created scope's own state starts from its inits' values: the server's
// only where it owns their caller groups.
function getStateInitGuard(section: Section, binding: Binding) {
  return getCallerGroupGuard(
    section,
    "_filled_guard",
    getStateInitSources(binding.sources?.state),
  );
}

// The sources of each state's init, merged.
function getStateInitSources(states: Sources["state"]) {
  let inits: Sources | undefined;
  forEach(states, (state) => {
    if (state.derivedFrom) {
      inits = mergeSources(
        inits,
        getSourcesForExpr(state.derivedFrom as t.NodeExtra),
      );
    }
  });
  return inits;
}

// A local reaching a written join the client may own, or read in content a
// consumer may withhold (its section's end knows); never a live capture.
export function writesAtSectionEnd(binding: Binding) {
  const { fill, unpatchedStructure } = getPatchFill(binding);
  return (
    !isBoundLiveCapture(binding) &&
    (!!unpatchedStructure || (!!fill && fill !== true && hasContents(fill)))
  );
}

// The writes a declared value makes once it exists, and those of the members
// read through it that no name declares.
export function pushDeclarationWrites(
  statements: t.Statement[],
  binding: Binding,
) {
  const write = buildDeclarationWrite(binding);
  if (write) statements.push(t.expressionStatement(write));
  for (const alias of binding.propertyAliases.values()) {
    if (!alias.declared) pushDeclarationWrites(statements, alias);
  }
}

// A param read through a name declared where what that name reads from is
// hidden: the name exists only from its tag on.
function isNamedWhereHidden(binding: Binding) {
  const named = getNearestDeclared(binding);
  return !!named?.aliasOf && !!getNearestDeclared(named.aliasOf);
}

// A known child's live capture's calls, else a branch local's write, unless
// its section's end decides it.
function buildDeclarationWrite(binding: Binding) {
  const { section } = binding;
  if (isKnownChild(section)) {
    if (isBoundLiveCapture(binding)) {
      const calls = buildPatchCalls(section, binding);
      if (calls.length) return toSequenceExpression(calls);
    }
  } else if (!isStateSourced(binding) && !writesAtSectionEnd(binding)) {
    return getPatchFill(binding).fill
      ? buildLocalFill(section, binding)
      : getPatchWrite(binding).write && buildLocalWrite(section, binding);
  }
}

// Plain fill write of a branch local with no state source, gated at runtime
// by its fill's conditions and group; an unfilled instance re-derives by inits.
export function buildLocalFill(section: Section, binding: Binding) {
  const write = orUnpatchedValue(
    section,
    binding,
    undefined,
    gateFillConditions(
      section,
      binding,
      buildPatchFill(section, binding),
      getPatchWrite(binding).write
        ? getUnfilledPatchWrite(section, binding)
        : undefined,
    ),
  );
  const withheld = getWithholdCall(section, binding);
  if (!write) return withheld;
  const filledGuard = getFilledGuard(section, binding);
  if (!filledGuard) {
    return withheld ? t.sequenceExpression([withheld, write]) : write;
  }
  // Only a closure the section reads re-derives through its init; a value
  // its creator passes (a loop param) has none to run.
  const inits = toArray(
    bindingUtil.filter(binding.sources?.param, (param) => {
      const init = getCreatedInits(section).get(param)?.init;
      return (
        typeof init === "object" && bindingUtil.has(init.localFills, binding)
      );
    }),
    (param) =>
      callPatchRuntime(
        "_patch_init",
        section,
        getResumeRegisterId(section, param, "init"),
      ),
  );
  const fill = inits.length
    ? t.conditionalExpression(filledGuard, write, toSequenceExpression(inits))
    : t.logicalExpression("&&", filledGuard, write);
  return withheld ? t.sequenceExpression([withheld, fill]) : fill;
}

// Content the value holds stays live where a read rendering it may be the
// client's, whether or not the flush ships the value (`_content_withheld`).
function getWithholdCall(section: Section, binding: Binding) {
  const kind = getPatchFill(binding).contentKind;
  if (!kind) return;
  const call = callRuntime(
    "_content_withhold",
    getDeclaredBindingExpression(binding),
  );
  // Content under an `<await>` counts too: a settled one renders at once,
  // with nothing pending.
  const contents =
    kind === true ||
    getWithheldGuard(
      section,
      sectionUtil.union(kind.contents, kind.awaitedContents),
    );
  if (contents === true) return call;
  const needed = orCallerGroupGuards(
    section,
    orCallerGroupGuards(
      section,
      contents,
      "_client_guard",
      sourcesUtil.union(
        sourcesUtil.union(kind.structure, kind.joins),
        kind.writes,
      ),
    ),
    "_filled_guard",
    kind.fills,
  );
  return needed && t.logicalExpression("&&", needed, call);
}

// Plain write of a branch local with no state source that effects or handlers
// read, gated like the root's writes.
export function buildLocalWrite(section: Section, binding: Binding) {
  const write = orUnpatchedValue(
    section,
    binding,
    undefined,
    getUnfilledPatchWrite(section, binding),
  )!;
  const filledGuard = getFilledGuard(section, binding);
  return andGuard(filledGuard, write);
}

// A value a patch fills every client read of: a page ships it for the
// client-sourced groups, or where its scope renders under unpatched structure.
export function getExprIfUnfilled(
  section: Section,
  binding: Binding,
  reason: Reason | undefined,
  expr: t.Expression,
) {
  return buildUnfilledIfWritten(
    section,
    reason,
    expr,
    getUnfilledReadSources(binding),
    binding,
  );
}

// A closure's scope set, which ships only where an unfilled read subscribes.
export function getClosureScopesIfWritten(
  closure: Binding,
  reason: Reason | undefined,
  expr: t.Expression,
) {
  return buildUnfilledIfWritten(
    closure.section,
    reason,
    expr,
    getUnfilledSubscribedSources(closure),
  );
}

function buildUnfilledIfWritten(
  section: Section,
  reason: Reason | undefined,
  expr: t.Expression,
  structure: SortedOpt<Sources> | false,
  binding?: Binding,
) {
  const ownReason = mapBodyParams(section, reason);
  if (structure === false || !isDynamicWriteGuard(section, ownReason)) return;
  return t.logicalExpression(
    "&&",
    getUnfilledGuard(
      section,
      ownReason.param,
      structure,
      !!ownReason.global,
      binding && getOwnParamGroup(binding),
    ),
    expr,
  );
}

interface OwnParamGroup {
  section: Section;
  index: number;
}

// The `_unfilled_if` arg naming the value's own group, for a group of its section.
function getOwnGroupArg(own: OwnParamGroup | undefined, section: Section) {
  return (
    own?.section === section &&
    withLeadingComment(
      t.numericLiteral(own.index),
      getDebugNames(section.paramReasonGroups![own.index]),
    )
  );
}

// A known child's param as a group of its own: where a call passes it a
// constant, the client derives it wherever it renders the call.
function getOwnParamGroup(binding: Binding): OwnParamGroup | undefined {
  const { section } = binding;
  const index = derivesConstantInput(binding)
    ? findParamReasonGroupIndex(section, getSourcesForRef(binding)!.param!)
    : -1;
  if (index !== -1) return { section, index };
}

// An `<await>` or `<try>` body every patch page renders, so it pairs without creating;
// the server drops the elision at render where a branch encloses.
export function alwaysPairs(bodySection: Section) {
  if (!getSectionWriteReason(bodySection)) return false;
  for (let s: Section | undefined = bodySection; s; s = s.parent) {
    if (s.branch?.optional || s.boundaryContent) return false;
    // A content section can materialize at any consumer (or none), so nothing
    // below it is provably live and unique on every page.
    if (s !== bodySection && !s.branch && s.parent) return false;
  }
  return true;
}

// A value-keyed node's marker: where a value's group is not constant (none fills or changes
// a constant's), or always where client code reads the node for more than those values.
export function getValueNodeMarkerGuard(section: Section, binding: Binding) {
  const rendered = getRenderedValueSources(binding);
  const callerOnly = (sources: Sources) =>
    !sources.state &&
    !sources.always &&
    !sources.global &&
    every(sources.param, (param) => isCallerParamAt(param, section));
  const client = findSlot(binding)!.reason;
  if (
    every(rendered, callerOnly) &&
    (!client ||
      (callerOnly(client) &&
        every(client.param, (param) =>
          some(rendered, (sources) => bindingUtil.has(sources.param, param)),
        )))
  ) {
    return (
      orCallerGroupGuards(section, undefined, "_mask_group", rendered) ||
      t.numericLiteral(0)
    );
  }
}

// A patch writer's call: the scope it writes, then its entry key.
export function callPatchRuntime(
  name: HTMLRuntimeHelpers,
  section: Section,
  key: string,
  ...args: Array<t.Expression | Falsy>
) {
  return callRuntime(
    name,
    getScopeIdIdentifier(section),
    t.stringLiteral(key),
    ...args,
  );
}

// A fill's patch write; a `setup` applies it only to a scope the flush creates.
export function buildPatchFill(
  section: Section,
  binding: Binding,
  split?: "content" | "unpatched",
  setup?: t.Expression,
) {
  return callPatchRuntime(
    "_patch_fill",
    section,
    getPatchKey().Fill + getPatchFillKey(binding, split),
    getDeclaredBindingExpression(binding),
    setup,
  );
}

export function buildPatchWrite(
  section: Section,
  binding: Binding,
  value: t.Expression = getDeclaredBindingExpression(binding),
  setup?: t.Expression,
) {
  const marked = isMarkedWrite(binding);
  return callPatchRuntime(
    "_patch_write",
    section,
    (marked ? getPatchKey().MarkedWrite : getPatchKey().Write) +
      getScopeAccessor(binding),
    value,
    setup,
  );
}

// A `<return>` handler binds where its sources' owner is the server; a
// state-sourced one is the client's, so only a created scope takes it.
export function buildReturnChangeBind(
  section: Section,
  handler: t.Expression,
  extra: t.NodeExtra,
) {
  // Every created scope's init of what the handler reads sets it.
  const refs = getReferencedBindings(extra);
  if (refs && getCreatedInits(section).get(refs)?.init === "always") {
    return handler;
  }
  const sources = getWriteSources(extra);
  return callPatchRuntime(
    "_patch_bind",
    section,
    getPatchKey().Write + getAccessorProp().TagVariableChange,
    handler,
    ...getRootGroupArgs(section, sources, !sources || !!sources.state),
  );
}

// An attribute or style entry's key: optimized accessors are base-36, so the
// client splits a key at its first `$`.
export function getNamedPatchKey(
  prefix: string,
  nodeBinding: Binding,
  name: string,
) {
  return (
    prefix + getScopeAccessor(nodeBinding) + (isOptimize() ? "$" : " ") + name
  );
}

// A text-only body's patch write renders the text itself, escaped on the way.
export function buildPatchTextContent(
  section: Section,
  nodeBinding: Binding,
  text: t.Expression,
  escape: HTMLRuntimeHelpers,
  extra: t.NodeExtra,
) {
  return callPatchRuntime(
    "_patch_text_content",
    section,
    getPatchKey().TextContent + getScopeAccessor(nodeBinding),
    text,
    importRuntime(escape),
    ...getExprRootGroupArgs(section, extra),
  );
}

// A created scope runs the init where the client contributes the sources'
// groups.
function buildClientInit(
  section: Section,
  sources: Sources | undefined,
  initId: string,
) {
  return t.logicalExpression(
    "&&",
    getCallerGroupGuard(section, "_client_guard", sources)!,
    callPatchRuntime("_patch_init", section, initId),
  );
}

// A created subscriber joins its owner's set where no patch fills the closure,
// else for its subscribers' fill; it inits where the client contributes.
function buildSubscribe(
  section: Section,
  closure: Binding,
  init: CreatedInit["init"],
  structure: SortedOpt<Sources>,
) {
  const initId =
    init === "client" && getResumeRegisterId(section, closure, "init");
  const subscribeId = t.stringLiteral(
    getResumeRegisterId(section, closure, "subscribe"),
  );
  const patchInit = callRuntime(
    "_patch_init",
    getScopeIdIdentifier(section),
    initId
      ? t.conditionalExpression(
          getCallerGroupGuard(section, "_client_guard", closure.sources)!,
          t.stringLiteral(initId),
          subscribeId,
        )
      : subscribeId,
  );
  return andGuard(
    orCallerGroupGuards(
      section,
      getCallerGroupGuard(section, "_unfilled_if", closure.sources),
      "_unfilled_if",
      structure,
    ),
    patchInit,
  );
}

// Group args for a hole whose helper shares main's name: one with no group
// passes the server's group `0`, since main's calls pass none.
export function getPatchHoleGroupArgs(section: Section, extra: t.NodeExtra) {
  const groupArgs = getExprRootGroupArgs(section, extra);
  return groupArgs.length
    ? groupArgs
    : [
        buildGroupMask([{ value: UpdatesFrom.Server, names: "" }])!,
        t.numericLiteral(0),
      ];
}

// Group args for an expression's write in `section`; a value fixed for the
// scope's lifetime (constant, `<id>`, `<define>`) only seeds a created scope.
export function getExprRootGroupArgs(section: Section, extra: t.NodeExtra) {
  const sources = getWriteSources(extra);
  if (seedsOnly(section, sources)) {
    return getSeedOnlyGroupArgs(section, sources!);
  }
  const groupArgs = getRootGroupArgs(section, sources, !sources);
  // Where every filled member's unpatched key re-runs a written join, the
  // client writes its hole: the group reads as client-sourced there.
  const join = isReferencedExtra(extra) && getReferencedBindings(extra);
  if (
    !groupArgs.length ||
    !Array.isArray(join) ||
    !isPatchWrittenJoin(join) ||
    !some(join, (ref) =>
      unpatchedPastGroup(section, getCanonicalBinding(ref), join),
    )
  ) {
    return groupArgs;
  }
  const needed = getJoinInitGuard(section, join);
  if (needed === undefined) return groupArgs;
  const client = t.numericLiteral(1);
  return [
    buildGroupMask([
      {
        value: needed
          ? t.conditionalExpression(
              needed,
              callRuntime("_mask_group", ...groupArgs),
              client,
            )
          : client,
        names: "",
      },
    ])!,
    t.numericLiteral(0),
  ];
}

// The group args a dynamic tag's renderer changes by, where its name renders
// one value unchanged, if not the tag's: a handed name's caller group or fixed.
export function getRendererGroupArgs(
  section: Section,
  extra: t.NodeExtra,
  [mask, group]: t.Expression[],
) {
  const renderer = getRendererRead(extra);
  const args =
    renderer &&
    getRootGroupArgs(
      section,
      getRendererCallerSources(extra),
      !renderer.binding.sources,
    );
  if (!args?.length) return [];
  // The renderer's group first: its mask defaults to the tag's.
  const sameMask = t.isNodesEquivalent(args[0], mask);
  return sameMask
    ? t.isNodesEquivalent(args[1], group)
      ? []
      : [args[1]]
    : [args[1], args[0]];
}

// A hole of first values seeds a created scope alone (a group mask of `0`), and
// is the client's where it holds a caller group their inits read.
function getSeedOnlyGroupArgs(section: Section, sources: Sources) {
  const inits = getStateInitSources(sources.state);
  const groups = getCallerParamGroupsAt(inits?.param, section);
  return [
    groups.length
      ? buildGroupMask([
          {
            value: t.binaryExpression(
              "&",
              buildComposedGroupValue(groups),
              t.numericLiteral(UpdatesFrom.Client),
            ),
            names: getDebugNames(inits!.param),
          },
        ])!
      : t.numericLiteral(0),
    t.numericLiteral(0),
  ];
}

// Whether a value's group args come from the caller groups of `section` (a call
// passes their bits), as `getRootGroupArgs` builds them.
export function hasCallerGroupsAt(
  section: Section,
  sources: Sources | false | undefined,
): sources is Sources & { param: NonNullable<Sources["param"]> } {
  return (
    !!sources &&
    isConditionalReason(sources) &&
    getCallerParamGroupsAt(sources.param, section).length > 0
  );
}

// A patch writer's trailing `[mask, groupIdx]` group args, or `[]` when
// a write in `section` gates on no group of the sources' params.
export function getRootGroupArgs(
  section: Section,
  sources: Sources | undefined,
  stable?: boolean,
): [t.Expression, t.Expression] | [] {
  // Never changes: the write only seeds a created scope, as under a group
  // mask of `0`.
  if (stable) return [t.numericLiteral(0), t.numericLiteral(0)];
  // A state-mixed write has no caller group (`ensureCallerParamGroups`).
  if (!isConditionalReason(sources)) return [];
  const groups = getCallerParamGroupsAt(sources.param, section);
  if (groups.length > 1 || (groups.length && sources.global)) {
    // A `<define>` body's group beside its template's, or a `$global` read's
    // static server source: one mask composes them, as a call site does.
    const value = buildComposedGroupValue(groups);
    return [
      buildGroupMask([
        {
          value: sources.global
            ? t.binaryExpression(
                "|",
                t.numericLiteral(UpdatesFrom.Server),
                value,
              )
            : value,
          names: getDebugNames(sources.param),
        },
      ])!,
      t.numericLiteral(0),
    ];
  }
  return groups.length ? getGroupArgs(...groups[0]) : [];
}

// The same test as a guard expression (`_filled_guard` for fills and effect
// writes), or undefined when no caller group gates a write in `section`.
export function getCallerGroupGuard(
  section: Section,
  check: HTMLRuntimeHelpers,
  sources: Sources | undefined,
) {
  // One caller group's mask-only check hoists, as a write guard does.
  if (isHoistedGroupCheck(check) && isConditionalReason(sources)) {
    const groups = getCallerParamGroupsAt(sources.param, section);
    if (groups.length === 1 && !sources.global) {
      return getOrHoistSectionGuard(...groups[0], check);
    }
  }
  const args = getRootGroupArgs(section, sources);
  return args.length ? callRuntime(check, ...args) : undefined;
}

// Where a patch fills the binding: its caller groups are the server's.
function getFilledGuard(section: Section, binding: Binding) {
  return getCallerGroupGuard(
    section,
    "_filled_guard",
    getSourcesForRef(binding),
  );
}

// Each caller group a write in `section` gates on, its `check` once, or'd
// onto `guard`, which already checks the groups in `checked`.
export function orCallerGroupGuards(
  section: Section,
  guard: t.Expression | undefined,
  check: HTMLRuntimeHelpers,
  list: Opt<Sources>,
  checked = new Set<ParamReasonGroup>(),
  own?: OwnParamGroup,
) {
  let expr = guard;
  forEachCallerGroup(section, list, checked, (paramSection, group, index) => {
    const ownArg = getOwnGroupArg(own, paramSection);
    expr = orGuard(
      expr,
      !ownArg && isHoistedGroupCheck(check)
        ? getOrHoistSectionGuard(paramSection, group, check)
        : callRuntime(
            check,
            ...getGroupArgs(paramSection, group, index),
            ownArg,
          ),
    );
  });
  return expr;
}

// Each caller group a write in `section` gates on, once: `seen` collects them
// by their section's own list entry, as one may be reached through several sets.
function forEachCallerGroup(
  section: Section,
  list: Opt<Sources>,
  seen: Set<ParamReasonGroup>,
  fn: (paramSection: Section, group: ParamReasonGroup, index: number) => void,
) {
  forEach(list, (sources) => {
    for (const [paramSection, group] of getConditionalCallerGroupsAt(
      sources,
      section,
    )) {
      const index = getParamReasonGroupIndex(paramSection, group);
      const key = paramSection.paramReasonGroups![index];
      if (!seen.has(key)) {
        seen.add(key);
        fn(paramSection, group, index);
      }
    }
  });
}

// Where a value a patch fills is still read unfilled: a client-sourced group,
// or (`unpatched`, a server-only source) a scope under unpatched structure.
export function getUnfilledGuard(
  section: Section,
  params: Sources["param"],
  structure: SortedOpt<Sources>,
  unpatched: boolean,
  own?: OwnParamGroup,
) {
  let guard: t.Expression | undefined;
  // Each group once, keyed by its section's own list entry: param-selected
  // structure may gate on one the params already name.
  const checked = new Set<ParamReasonGroup>();
  forEachParamGroup(params, (paramSection, group) => {
    const index = getParamReasonGroupIndex(paramSection, group);
    checked.add(paramSection.paramReasonGroups![index]);
    const part = callRuntime(
      "_unfilled_if",
      ...getGroupArgs(paramSection, group, index),
      getOwnGroupArg(own, paramSection),
    );
    guard = orGuard(guard, part);
  });
  guard = orCallerGroupGuards(
    section,
    guard,
    "_unfilled_if",
    structure,
    checked,
    own,
  );
  if (unpatched) guard = orGuard(guard, callRuntime("_unfilled_if"));
  return guard!;
}

// A fill runs under its group's guard; a conditional one only where its
// conditions hold, else `otherwise`, or `contentWrite` for withheld content.
function gatePatchWrite(
  section: Section,
  binding: Binding,
  write: t.Expression,
  otherwise?: t.Expression,
  contentWrite?: t.Expression,
) {
  const guard = getFilledGuard(section, binding);
  const gated = orUnpatchedValue(
    section,
    binding,
    undefined,
    gateFillConditions(section, binding, write, otherwise, contentWrite),
  );
  return gated && andGuard(guard, gated);
}

// The write under its fill's run-time conditions: where the client owns what
// reads it, a caller's group fills it, or content holding a read is live.
function gateFillConditions(
  section: Section,
  binding: Binding,
  write: t.Expression,
  otherwise?: t.Expression,
  contentWrite?: t.Expression,
) {
  const {
    fill: conditions,
    unpatchedOnly,
    unpatchedStructure,
  } = getPatchFill(binding);
  let expr: t.Expression | undefined = unpatchedOnly ? undefined : write;
  if (conditions && conditions !== true) {
    // Content under an `<await>` body gates at the body's end instead.
    if (
      conditions.awaits &&
      !conditions.contents &&
      !conditions.structure &&
      !conditions.joins &&
      !conditions.writes &&
      !conditions.fills
    ) {
      return otherwise;
    }
    // Groups the unpatched arm tests are the server's wherever this one runs.
    let needed = orCallerGroupGuards(
      section,
      undefined,
      "_client_guard",
      sourcesUtil.difference(
        sourcesUtil.union(
          sourcesUtil.union(conditions.structure, conditions.joins),
          conditions.writes,
        ),
        unpatchedStructure === true ? undefined : unpatchedStructure?.structure,
      ),
    );
    needed = orCallerGroupGuards(
      section,
      needed,
      "_filled_guard",
      conditions.fills,
    );
    // A live function's capture writes before its consumers render, so it
    // fills wherever they may keep content.
    const contents =
      !!conditions.contents && isBoundLiveCapture(binding)
        ? true
        : getWithheldGuard(section, conditions.contents);
    const always = contents === true;
    const withheld = always ? undefined : contents;
    if (contentWrite && (always || withheld)) {
      const content = !withheld
        ? contentWrite
        : otherwise
          ? t.conditionalExpression(withheld, contentWrite, otherwise)
          : t.logicalExpression("&&", withheld, contentWrite);
      expr =
        needed && expr
          ? t.conditionalExpression(needed, expr, content)
          : content;
      needed = undefined;
    } else if (always) {
      needed = undefined;
    } else if (withheld) {
      needed = orGuard(needed, withheld);
    }
    if (needed && expr && otherwise) {
      expr = t.conditionalExpression(needed, expr, otherwise);
    } else if (needed && expr) {
      expr = t.logicalExpression("&&", needed, expr);
    }
  }
  return expr;
}

// A member of a join the patch writes ships, where the client may own the
// join's structure there, under its unpatched key: its run also re-runs the join.
function orUnpatchedValue(
  section: Section,
  binding: Binding,
  guard: t.Expression | undefined,
  otherwise: t.Expression | undefined,
) {
  const { unpatchedStructure } = getPatchFill(binding);
  if (!unpatchedStructure) return otherwise;
  const unpatched =
    unpatchedStructure !== true &&
    getUnpatchedGuard(section, binding, unpatchedStructure);
  const where = unpatched ? andGuard(guard, unpatched) : guard;
  const value = buildPatchFill(section, binding, "unpatched");
  return !where
    ? value
    : otherwise
      ? t.conditionalExpression(where, value, otherwise)
      : t.logicalExpression("&&", where, value);
}

// Where a filled member of a written join ships no unpatched key that re-runs
// the join on this scope: `false` where every member's always does.
function getJoinInitGuard(section: Section, join: Intersection) {
  if (
    !some(join, (ref) =>
      rerunsJoinInPairedRows(section, getCanonicalBinding(ref), join),
    )
  ) {
    return;
  }
  let guard: t.Expression | false = false;
  for (const ref of join) {
    const member = getCanonicalBinding(ref);
    const filled = getFilledGuard(section, member);
    let term: t.Expression | undefined = filled;
    if (rerunsJoinInPairedRows(section, member, join)) {
      const { unpatchedStructure } = getPatchFill(member);
      const unpatched =
        unpatchedStructure !== true &&
        getUnpatchedGuard(section, member, unpatchedStructure!);
      if (!unpatched) continue;
      term = andGuard(filled, t.unaryExpression("!", unpatched));
    }
    if (!term) return;
    guard = guard ? orGuard(guard, term) : term;
  }
  return guard;
}

// The client may own the member's structure where the join's own groups are
// the server's, as where the hole is written.
function unpatchedPastGroup(
  section: Section,
  member: Binding,
  join: Intersection,
) {
  const { unpatchedStructure } = getPatchFill(member);
  return (
    rerunsJoinInPairedRows(section, member, join) &&
    (unpatchedStructure === true ||
      !!unpatchedStructure!.contents ||
      !every(unpatchedStructure!.structure, (sources) =>
        bindingUtil.isSuperset(getSourcesForRef(join)!.param, sources.param),
      ))
  );
}

// The member's unpatched key re-runs the join by its hops in loop rows: a patch
// pairs those where the client may own them, as it renders no such branch.
function rerunsJoinInPairedRows(
  section: Section,
  member: Binding,
  join: Intersection,
) {
  const rows = getPairedRows(section);
  return (
    !!rows &&
    rows.depth > member.section.depth &&
    section.enclosing.nonOptionalAncestor ===
      member.section.enclosing.nonOptionalAncestor &&
    !!getPatchFill(member).unpatchedJoins?.includes(join)
  );
}

// The nearest loop rows around the section (inclusive).
const [getPairedRows] = createAnalysisMemo(
  (section: Section): Section | undefined =>
    isLoopBody(section)
      ? section
      : section.parent && getPairedRows(section.parent),
  undefined,
);

// Where the client may own structure: its caller groups are the client's, or
// its content is live there.
function getUnpatchedGuard(
  section: Section,
  binding: Binding,
  unpatched: FillConditions,
) {
  const kept = sectionUtil.union(unpatched.contents, unpatched.awaitedContents);
  // A live function's capture writes before its consumers render, as for its
  // fill, so where they may keep content it counts as kept.
  const contents =
    kept && isBoundLiveCapture(binding)
      ? true
      : getWithheldGuard(section, kept);
  if (contents === true) return;
  const structure = orCallerGroupGuards(
    section,
    undefined,
    "_client_guard",
    unpatched.structure,
  );
  return contents ? orGuard(structure, contents) : structure;
}

// Where content is live on the client: `true` where something renders it
// unconditionally (a `@catch` or `@placeholder` may, at any time).
function getWithheldGuard(
  section: Section,
  contents: Opt<Section>,
  scopeSection = section,
) {
  if (some(contents, rendersUnconditionally)) return true;
  let withheld: t.Expression | undefined;
  const clientGroups = new Set<ParamReasonGroup>();
  forEach(contents, (content) => {
    const id = getResumeRegisterId(content, "content");
    const check = callRuntime(
      "_content_withheld",
      t.stringLiteral(id),
      getScopeIdIdentifier(scopeSection),
    );
    withheld = orGuard(withheld, check);
    // Live too where the client owns what picks it, which a patch never
    // sees: each group once.
    const reason = getRendererReason(content);
    if (reason && isDynamicWriteGuard(section, reason)) {
      withheld = orCallerGroupGuards(
        section,
        withheld,
        "_client_guard",
        reason,
        clientGroups,
      );
    }
  });
  return withheld;
}

// A dynamic tag's body is live only where its renderer withholds it, which
// `_content_withheld` sees.
function rendersUnconditionally(content: Section) {
  const reason = getRendererReason(content);
  return !content.branchExpr && !!reason && isUnconditionalReason(reason);
}

// A capture only patch-filled reads use is kept fresh where it is still
// read unfilled; a patch renders every other read itself.
function getUnfilledPatchWrite(section: Section, binding: Binding) {
  const write = buildPatchWrite(
    section,
    binding,
    undefined,
    getConstantSetup(section, binding),
  );
  // A built object's source rides its readers' entries, where a patch sends them.
  const structure =
    !getPatchFill(binding).objectSource &&
    getUnfilledSubscribedSources(binding);
  return structure === false
    ? write
    : t.logicalExpression(
        "&&",
        orCallerGroupGuards(section, undefined, "_unfilled_if", structure)!,
        write,
      );
}

// A constant group's value seeds a created scope alone: a live one holds it.
function getConstantSetup(section: Section, binding: Binding) {
  const guard = getCallerGroupGuard(
    section,
    "_server_guard",
    getSourcesForRef(binding),
  );
  if (guard) return t.unaryExpression("!", guard);
}

// What an entry depends on, as shells' hops (`>` per owner up), each where this
// instance's patch sends it; bare where the entry's guard checks its one group.
function getDeps(
  section: Section,
  roots: Binding[],
  check: HTMLRuntimeHelpers,
  entryGroup?: ParamReasonGroup | false,
) {
  const deps: t.Expression[] = [];
  for (const root of roots.reduce(addLiveDeps, new Set<Binding>())) {
    const hop = getSentHop(section, root);
    if (hop) {
      const sources = getSourcesForRef(root)!;
      deps.push(
        entryGroup &&
          !sources.global &&
          isConditionalReason(sources) &&
          getSoleCallerGroup(section, sources) === entryGroup
          ? t.stringLiteral(hop)
          : andGuard(
              getCallerGroupGuard(section, check, sources),
              t.stringLiteral(hop),
            ),
      );
    }
  }
  return deps;
}

// The one caller group a guard over `list` checks at `section`, if just one.
function getSoleCallerGroup(section: Section, list: Opt<Sources>) {
  const groups = new Set<ParamReasonGroup>();
  forEachCallerGroup(section, list, groups, noop);
  const [sole, other] = groups;
  return other ? undefined : sole;
}

function noop() {}

// A written value an effect entry depends on: one an effect outside a created
// `@catch` reads, a built object's source, or a live function's capture.
function effectEntryDependsOn(binding: Binding) {
  const root = getCanonicalBinding(binding);
  return (
    (!holdsBuiltObject(root) &&
      rerunsEffectOnPatch(root) &&
      isEffectRead(root)) ||
    isBoundLiveCapture(root) ||
    someAlias(
      root,
      (alias) =>
        someDerivedRead(alias, (derived, expr) => {
          const built = getBuiltObject(derived, root, expr);
          return (
            !!built &&
            someReached(built, (held) => rereadsBuiltObject(held, root))
          );
        }),
      undefined,
      true,
    )
  );
}

// A capture of a live function a patch may bind: its change makes one anew.
export function isBoundLiveCapture(binding: Binding) {
  return someAlias(
    getCanonicalBinding(binding),
    hasBoundLiveFnRead,
    undefined,
    true,
  );
}

// A scope-bound function a holder compares by identity (`patches/marked-bind`): a
// marked slot or a fill, or any that binds a live one, here or in a call's template.
export const [comparesBoundFn] = createAnalysisMemo(
  (fn: t.NodeExtra) =>
    // A live function keeps its record wherever a patch binds it (its captures
    // judge it); a `<return>`'s caller links the record where it compares.
    getLiveCaptures(fn)
      ? reachesBoundHolder(fn, bindsLive, isDynamicTagInput)
      : reachesBoundHolder(fn, comparesHeld, isDynamicTagInput, readsAsValue),
  false,
);

// A holder that compares a function by identity: a marked slot or a fill in its
// template, an effect or a fill in a call's.
function comparesHeld(held: Binding, own: boolean) {
  return (
    someAlias(held, hasValueRead, undefined, true) &&
    !isInvokeOnlyBinding(held) &&
    (own
      ? isMarkedWrite(held) || !!getPatchFill(held).fill
      : rerunsEffectOnPatch(held) || !!getPatchFill(held).fill)
  );
}

// A read taking the binding as a value, not only as a change handler its tag
// holds apart from what it changes (`changeHandler`).
function hasValueRead(binding: Binding) {
  for (const reads of binding.reads.values()) {
    if (some(reads, isValueRead)) return true;
  }
  return false;
}

function readsAsValue(binding: Binding, expr: ReferencedExtra) {
  return some(binding.reads.get(expr), isValueRead);
}

function isValueRead(read: Read) {
  return !(read.extra.exprRoot || read.extra).changeHandler;
}

// A holder of a live function a patch binds: one this template writes or fills, or
// another template's its entries or fill read.
function bindsLive(held: Binding, own: boolean, expr?: t.NodeExtra) {
  return own
    ? getPatchWrite(held).write || !!getPatchFill(held).fill
    : rerunsEffectOnPatch(held) ||
        !!getPatchFill(held).fill ||
        isJoinedWithClientState(held, expr!);
}

// A read of the binding lands in a live function its template registers.
function hasBoundLiveFnRead(binding: Binding) {
  for (const reads of binding.reads.values()) {
    if (some(reads, isBoundLiveFnRead)) return true;
  }
  return false;
}

function isBoundLiveFnRead({ fnRoot }: Read) {
  return !!fnRoot?.reason && !!getLiveCaptures(fnRoot);
}

// A function reaches a holder `test` accepts (`own`: in its template, not a
// call's), or one `unknown` places in a template this one cannot see.
function reachesBoundHolder(
  fn: t.NodeExtra,
  test: (held: Binding, own: boolean, expr?: t.NodeExtra) => boolean,
  unknown = holdsUnknown,
  carries?: (binding: Binding, expr: ReferencedExtra) => boolean,
) {
  const { program } = fn.section!;
  return (
    unknown(fn) ||
    some(fn.derives, (holder) =>
      someReached(
        holder,
        (held, expr) =>
          test(held, held.section.program === program, expr) ||
          readsAsUnknown(held, unknown),
        fn,
        carries,
      ),
    )
  );
}

// A value that may hold a live function a known child's `<return>` registers:
// the child leaves its record to the caller, which sees the holder.
export function mayHoldReturnedLiveFnIn(binding: Binding) {
  return someHeldFnIn(binding, isLiveFn, true, false);
}

export function mayHoldReturnedLiveFn(exprs: Opt<t.NodeExtra>) {
  return someHeldFn(exprs, isLiveFn, true, false);
}

// A value that may be or hold a function its template registers with a scope,
// which a patch sends as a bind (a live one, as a live bind).
export function mayHoldScopeBoundFn(exprs: Opt<t.NodeExtra>) {
  return someHeldFn(exprs, isScopeBoundValueFn, false, true);
}

function isLiveFn(expr: t.NodeExtra) {
  return !!getLiveCaptures(expr);
}

function isScopeBoundValueFn(expr: t.NodeExtra) {
  return isTrackedFunction(expr) && isScopeBoundFn(expr) && !isLiveFn(expr);
}

// A value the expressions may be passes `test` (`own`: once past a known child's
// `<return>` where `returns` follows them, else from the start).
function someHeldFn(
  exprs: Opt<t.NodeExtra>,
  test: (expr: t.NodeExtra) => boolean,
  returns: boolean,
  own: boolean,
  seen = new Set<Binding>(),
): boolean {
  return some(
    exprs,
    (expr) =>
      (own && test(expr)) ||
      some(getReferencedBindings(expr), (ref) =>
        someHeldFnIn(getCanonicalBinding(ref), test, returns, own, seen),
      ),
  );
}

function someHeldFnIn(
  binding: Binding,
  test: (expr: t.NodeExtra) => boolean,
  returns: boolean,
  own: boolean,
  seen = new Set<Binding>(),
): boolean {
  if (seen.has(binding)) return false;
  seen.add(binding);
  const returnedBy = returns && binding.returnedBy;
  return returnedBy
    ? !!returnedBy.section &&
        someHeldFn(
          returnedBy.section.returnValueExpr,
          test,
          returns,
          true,
          own ? seen : undefined,
        )
    : someHeldFn(binding.derivedFrom || undefined, test, returns, own, seen);
}

// A reader of a built object that re-runs by its sources: an effect, an inited join,
// or another template's fill.
function rereadsBuiltObject(held: Binding, root: Binding) {
  return (
    rerunsEffectOnPatch(held) ||
    initedJoinDependsOn(held) ||
    (held.section.program !== root.section.program && !!getPatchFill(held).fill)
  );
}

// A registered function its template binds to one of its scopes.
export function isScopeBoundFn(expr: t.NodeExtra) {
  const fn = expr as t.FunctionExtra;
  return !!(
    fn.referencesScope ||
    getReferencedBindingsInFunction(fn) ||
    fn.referencedLocalBindingsInFunction
  );
}

// A value an entry may depend on marks its change (`patches/marked-write`).
// Asked once shells build, after the passes settle, so no pass resets it.
export const [isMarkedWrite] = createAnalysisMemo(
  (binding: Binding) =>
    effectEntryDependsOn(binding) ||
    initedJoinDependsOn(binding) ||
    some(binding.closureSections, (section) =>
      rerunsClosureByWrite(getCanonicalBinding(binding), section),
    ),
  false,
);

// The caller groups a closure's re-run by a write ships under: the written value's
// own, and those of the param-selected structure around the closure.
export function getClosureInitGroups(closure: Binding, section: Section) {
  const { section: own } = closure;
  return {
    own: getCallerParamGroupsAt(getSourcesForRef(closure)?.param, own),
    structure: (getParamSelectedStructure(section) || []).flatMap((sources) =>
      getCallerParamGroupsAt(sources.param, own),
    ),
  };
}

// A closure a created scope inits, over a slot a patch writes but no fill re-runs:
// the write re-runs it on a live scope too.
export function rerunsClosureByWrite(closure: Binding, section: Section) {
  const root = getCanonicalBinding(closure);
  return (
    !isDynamicClosure(section, closure) &&
    getPatchWrite(root).write &&
    !getPatchFill(root).fill &&
    !!getCreatedInits(section).get(closure)?.init
  );
}

// A holder a template this one cannot see reads as it is (`unknown`).
function readsAsUnknown(held: Binding, unknown: typeof holdsUnknown) {
  for (const read of held.reads.keys()) {
    if (unknown(read)) return true;
  }
  return false;
}

// An expression a template this one cannot see may hold as it is, and mark: a
// dynamic tag's input, or the template's `<return>`.
function holdsUnknown(expr: t.NodeExtra) {
  return (
    isDynamicTagInput(expr) ||
    (!!expr.section &&
      !expr.section.parent &&
      (expr.exprRoot || expr) === expr.section.returnValueExpr)
  );
}

function isDynamicTagInput(expr: t.NodeExtra) {
  return expr.tagNameType === TagNameType.DynamicTag;
}

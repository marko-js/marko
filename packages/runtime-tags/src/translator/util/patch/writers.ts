// Patch writers: the calls a flush's entries come from, with the param group
// guards, group args and boundary flags gating them.
import { types as t } from "@marko/compiler";

import { UpdatesFrom } from "../../../common/types";
import {
  BindingType,
  type Binding,
  bindingUtil,
  getCanonicalBinding,
  getDebugNames,
  getNearestDeclared,
  isInvokeOnlyBinding,
  isStateSourced,
  someAlias,
  somePart,
} from "../bindings";
import { createAnalysisMemo } from "../cyclic-memo";
import { generateUidIdentifier } from "../generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
  getPatchKey,
} from "../get-accessor-enums";
import { getDeclaredBindingExpression } from "../get-declared-binding-expression";
import {
  derivesConstantInput,
  intersectsClientState,
  type KnownTagExtra,
} from "../known-tag";
import { isOptimize } from "../marko-config";
import { isTrackedFunction } from "../module-registrations";
import {
  every,
  forEach,
  fromIter,
  type Opt,
  reduce,
  some,
  type SortedOpt,
  toArray,
} from "../optional";
import {
  getSourcesForExpr,
  getSourcesForReferencedBindings,
  isGuardedReason,
  mapBodyParams,
  type Reason,
} from "../reasons";
import {
  getReferencedBindings,
  type Read,
  type ReferencedExtra,
} from "../references";
import { absentArg, callRuntime, type HTMLRuntimeHelpers } from "../runtime";
import { getPrefixedScopeAccessor, getScopeAccessor } from "../scope-accessor";
import {
  findParamReasonGroupIndex,
  forEachParamGroup,
  getCallerParamGroupsAt,
  getConditionalCallerGroupsAt,
  getDynamicTagContentClosures,
  getParamReasonGroupIndex,
  getRendererReason,
  getScopeIdIdentifier,
  isCallerParamAt,
  isDynamicClosure,
  isKnownChild,
  isOptionalBranch,
  type ParamReasonGroup,
  type Section,
  sectionUtil,
} from "../sections";
import { isQueuedOnCreate } from "../shell";
import {
  getClosureSubscribersId,
  getCreatedSetupId,
  getResumeRegistryId,
  getScopeProperties,
  getEffectCallerSources,
  getSignals,
  type Signal,
  toSequenceExpression,
} from "../signals";
import { findSlot } from "../slots";
import { bindingReaders, someRead } from "../solve-reasons";
import { type Sources } from "../sources";
import { createOutputSectionState } from "../state";
import { TagNameType } from "../tag-name-type";
import { withLeadingComment } from "../with-comment";
import {
  andGuard,
  buildComposedGroupValue,
  buildGroupsValue,
  buildGroupMask,
  getGroupArgs,
  getOrShareSectionGuard,
  getWriteReason,
  isDynamicWriteGuard,
  sharesGroupCheck,
  getSectionWriteReason,
  orGuard,
} from "../write-guard";
import {
  getEffectWrites,
  getExprWriteGroups,
  getRenderedValueSources,
  getSeedWriteGroups,
  getStateInitialValueSources,
  getWriteGroups,
  getFillSources,
  type WriteGroups,
} from "./decisions";
import {
  setupFromClient,
  clientMayRenderInAnyCall,
  addFilledReads,
  hasFilledReferences,
  someFnValue,
  someReturnedFnValue,
  someReturnedFnValueOf,
  getCreatedSetup,
  getSetupSources,
  getFilledReferences,
  getPatchFill,
  getPatchFillBindings,
  isSectionParam,
  getPatchFillKey,
  getPatchWrite,
  getRendererCallerSources,
  getRendererRead,
  someReached,
  getUnfilledReadSources,
  getUnfilledSubscribedSources,
  patchFillsScope,
  getWriteHop,
  runsEffectOnPatch,
  runsSubscribersByWrite,
  seedsOwnerConstant,
} from "./refresh";
import { getParamSelectedStructure } from "./structure";

// The fills (and a known child's writes) a section's patch writes as `_scope`'s else;
// a known child's filled references write where declared, its params' to `paramWrites`.
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
      const branchCall = getClientBranchCall(section, binding);
      if (branchCall) fillCalls.push(branchCall);
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
  if (!isKnownChild(section) || !isFilledReference(binding)) {
    fillCalls.push(...buildPatchCalls(section, binding));
  } else if (isSectionParam(binding) && !isNamedWhereHidden(binding)) {
    const write = buildDeclarationWrite(binding);
    if (write) paramWrites.push(t.expressionStatement(write));
  }
}

// A binding's write, where it has no fill.
function buildPatchCalls(section: Section, binding: Binding) {
  const calls: t.Expression[] = [];
  if (!getPatchFill(binding).fill && getPatchWrite(binding).write) {
    const write = getUnfilledPatchWrite(section, binding);
    if (write) calls.push(andGuard(getFilledGuard(section, binding), write));
  }
  return calls;
}

// The patch side of an effect's `_script`: its entry (`1`, or `2` queued) where
// a patch writes in place a value the effect read, then those values.
export function getEffectEntryArgs(section: Section, signal: Signal) {
  const writes = getEffectWrites(section, signal);
  if (!writes) return;
  const { reads, written } = writes;
  // The entry mounts the effect in a created scope where no render of the
  // scope queues it: one its caller passes client state does.
  const queued = isQueuedOnCreate(section, signal.referencedBindings);
  // A constant read still mounts the effect where a flush may create.
  const check = queued ? "_server_guard" : "_filled_guard";
  const group = written && getSoleCallerGroup(section, written);
  const guard =
    written && orCallerGroupGuards(section, undefined, check, written);
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
    getReads(section, reads, check, group),
  ];
}

// Each controlled `<let>`'s handler, which a patch's fill reads whether or not
// it serializes.
export const [getLetChanges] = createOutputSectionState<
  Map<Binding, t.Expression>
>(() => new Map());

// A section's patch entries beside its resume data: the setup a created scope
// gets, and the intersection renders that run an effect or else its `_script`.
export function writePatchResumeStatements(
  section: Section,
  body: t.Statement[],
  paramWrites: t.Statement[],
  renderScripts: Map<Signal, t.Expression>,
) {
  const pendingProperties = getScopeProperties(section);
  // A branch param writes as its body starts, a local once it exists.
  if (!isKnownChild(section)) {
    forEach(section.bindings, (binding) => {
      if (
        isSectionParam(binding) &&
        !isNamedWhereHidden(binding) &&
        !hasClientBranchGuard(binding)
      ) {
        const write = buildDeclarationWrite(binding);
        if (write) paramWrites.push(t.expressionStatement(write));
      }
    });
  }
  // Beside fills: a created scope's seeds and filled intersection members' slot writes.
  forEach(section.bindings, (binding) => {
    const { seed, write } = getPatchWrite(binding);
    const seeds = seed && getWriteReason(binding);
    // A value written in place wherever its group is the server's needs no more; in place
    // where an intersection the patch writes runs on the client (another member is the client's).
    const filledMembers = write
      ? undefined
      : getPatchFill(binding).filledMembers;
    const othersClient =
      filledMembers &&
      orCallerGroupGuards(section, undefined, "_client_guard", filledMembers);
    const inPlace =
      othersClient && andGuard(getFilledGuard(section, binding), othersClient);
    // A seed writes a group-gated value only where the group is the client's, as
    // plain's document would; client state always, since no later patch writes it.
    const entry =
      seeds || inPlace
        ? seeds
          ? andGuard(
              getStateInitialValueGuard(section, binding),
              andGuard(
                isDynamicWriteGuard(section, seeds) && !isStateSourced(binding)
                  ? getCallerGroupGuard(section, "_unfilled_if", seeds)
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
    if (entry) body.push(t.expressionStatement(entry));
  });

  // An enclosing scope's constant this scope's client code reads, which the page ships
  // only for a client group: written there where this scope renders unpatched.
  forEach(section.referencedClosures, (closure) => {
    const reason = getWriteReason(closure);
    if (
      seedsOwnerConstant(section, closure) &&
      isDynamicWriteGuard(closure.section, reason)
    ) {
      const client = getCallerGroupGuard(
        closure.section,
        "_client_guard",
        reason,
      );
      body.push(
        t.expressionStatement(
          andGuard(
            client && t.unaryExpression("!", client),
            andGuard(
              callRuntime("_unfilled_if"),
              buildPatchWrite(closure.section, closure),
            ),
          ),
        ),
      );
    }
  });

  // A closure over a patch-written slot (a value or a function with filled references' new bind)
  // the client renders re-runs on a live scope once marked: no node reaches it.
  forEach(section.bindings, (binding) => {
    // A call may hand the client the structure around each subscriber, unless no param selects one's.
    let walks = false;
    let structure: Sources[] | undefined = [];
    forEach(binding.closureSections, (closureSection) => {
      if (runsSubscribersByWrite(binding, closureSection)) {
        walks = true;
        const selected = getCallerSelectedStructure(binding, closureSection);
        structure = selected ? structure?.concat(selected) : undefined;
      }
    });
    if (walks) {
      const sources = getSourcesForReferencedBindings(binding);
      body.push(
        t.expressionStatement(
          andGuard(
            getCallerGroupGuard(section, "_filled_guard", sources),
            andGuard(
              orCallerGroupGuards(
                section,
                undefined,
                "_client_guard",
                fromIter(structure || []),
              ),
              callRuntime(
                "_patch_subscribers",
                getScopeIdIdentifier(section),
                t.stringLiteral(getClosureSubscribersId(binding)),
                getReads(
                  section,
                  [binding],
                  "_filled_guard",
                  isGuardedReason(sources) &&
                    !sources.global &&
                    getSoleCallerGroup(section, sources),
                ),
              ),
            ),
          ),
        ),
      );
    }
    forEach(binding.closureSections, (closureSection) => {
      if (runsClosureByWrite(binding, closureSection)) {
        const sources = getSourcesForReferencedBindings(binding);
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
                  fromIter(
                    getCallerSelectedStructure(binding, closureSection) || [],
                  ),
                ),
                callRuntime(
                  "_patch_render",
                  getScopeIdIdentifier(section),
                  t.stringLiteral(
                    getResumeRegistryId(closureSection, binding, "setup"),
                  ),
                  getReads(
                    section,
                    [binding],
                    "_filled_guard",
                    isGuardedReason(sources) &&
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

  // The setup a flush names: a created or composed scope's where the client contributes
  // the group, a subscriber, and on any scope a filled intersection's render.
  for (const [ref, setup] of getCreatedSetup(section)) {
    if (Array.isArray(ref)) {
      if (setup.setup === "mixed") {
        // A mixed intersection re-renders as its members change, by its group where params decide.
        const render = callRuntime(
          "_patch_render",
          getScopeIdIdentifier(section),
          t.stringLiteral(getResumeRegistryId(section, ref, "setup")),
          getReads(
            section,
            toArray(ref, getCanonicalBinding),
            "_filled_guard",
          ) || absentArg(0),
          ...getRootGroupArgs(section, getSourcesForReferencedBindings(ref)),
        );
        // The intersection's effect ships its entry only where the render doesn't run it.
        const effect = renderScripts.get(getSignals(section).get(ref)!);
        body.push(
          t.expressionStatement(
            effect ? t.logicalExpression("||", render, effect) : render,
          ),
        );
      } else if (setup.setup === "client") {
        body.push(
          t.expressionStatement(
            buildClientSetup(
              section,
              getSetupSources(ref),
              getCreatedSetupId(section, ref),
            ),
          ),
        );
      }
    } else if (setup.subscribe) {
      body.push(
        t.expressionStatement(
          buildSubscribe(
            section,
            ref,
            setupFromClient(section, ref, setup.setup),
          ),
        ),
      );
    } else if (setupFromClient(section, ref, setup.setup)) {
      body.push(
        t.expressionStatement(
          buildClientSetup(
            section,
            getSetupSources(ref),
            getCreatedSetupId(section, ref),
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

  // A controlled `<let>`'s handler, hoisted where it serializes so its scope slot,
  // value write and bind share one read.
  const letChanges = new Map<
    Binding,
    { expression: t.Expression; reason?: Reason }
  >();
  forEach(getPatchFillBindings(section), (binding) => {
    const handler = getLetChanges(section).get(binding);
    if (!handler) return;
    const property = pendingProperties.get(
      getPrefixedScopeAccessor(binding, getAccessorPrefix().TagVariableChange),
    );
    if (property) {
      const local = generateUidIdentifier(binding.name + "Change");
      body.push(
        t.variableDeclaration("const", [t.variableDeclarator(local, handler)]),
      );
      property.expression = local;
      letChanges.set(binding, { expression: local, reason: property.reason });
    } else {
      letChanges.set(binding, { expression: handler });
    }
  });

  // A scope a flush writes, and so may create, seeds its state in the setup
  // envelope; content an attribute tag `<for>` creates also seeds its loop params.
  if (patchFillsScope(section)) {
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
  // and its controller updates from the server.
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
// controller updates from the server, else a seed; then its handler binds where it serializes.
function buildLetChangeWrites(
  section: Section,
  binding: Binding,
  { expression, reason }: { expression: t.Expression; reason?: Reason },
) {
  // A param-sourced handler binds only where its group updates from the server.
  const bindGroupArgs =
    !reason || reason.always ? [] : getRootGroupArgs(section, reason);
  const changeKey = reason
    ? t.stringLiteral(
        getPatchKey().Write +
          getPrefixedScopeAccessor(
            binding,
            getAccessorPrefix().TagVariableChange,
          ),
      )
    : absentArg(0);
  const controller = getSourcesForExpr(binding.derivedFrom as t.NodeExtra);
  if (controller?.state) {
    // A state-sourced controller is the client's: the value only seeds, but
    // where its initial value reads a caller group, in that group.
    const seedGroup = getSeedOnlyGroupArgs(section, binding);
    const seed = buildPatchFill(
      section,
      binding,
      t.numericLiteral(1),
      ...(t.isNumericLiteral(seedGroup[0]) ? [] : seedGroup),
    );
    if (!reason) return [seed];
    return [
      seed,
      callRuntime(
        "_patch_bind",
        getScopeIdIdentifier(section),
        changeKey,
        t.cloneNode(expression),
        ...bindGroupArgs,
      ),
    ];
  }
  const groupArgs = getRootGroupArgs(section, controller);
  return [
    callRuntime(
      "_patch_let_change",
      getScopeIdIdentifier(section),
      t.stringLiteral(getPatchKey().Fill + getPatchFillKey(binding)),
      getDeclaredBindingExpression(binding),
      changeKey,
      t.cloneNode(expression),
      groupArgs[0],
      groupArgs[1],
      ...bindGroupArgs,
    ),
  ];
}

// A created scope's `<let>` seeds its value, which its signals render from.
function buildLetSeeds(section: Section, binding: Binding) {
  const setup = t.numericLiteral(1);
  const guard = getCallerGroupGuard(
    section,
    "_filled_guard",
    getStateInitialValueSources(binding),
  );
  return [andGuard(guard, buildPatchFill(section, binding, setup))];
}

// A created scope's own state starts from its initial values: the server's
// only where their caller groups update from the server.
function getStateInitialValueGuard(section: Section, binding: Binding) {
  return getCallerGroupGuard(
    section,
    "_filled_guard",
    getStateInitialValueSources(binding.sources?.state),
  );
}

// The writes a declared value makes once it exists, and those of the members
// read through it that no name declares.
export function pushDeclarationWrites(
  statements: t.Statement[],
  binding: Binding,
) {
  const write =
    !hasClientBranchGuard(binding) && buildDeclarationWrite(binding);
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

// A known child's filled reference's calls, else a branch local's write, unless
// its section's end decides it.
function buildDeclarationWrite(binding: Binding) {
  const { section } = binding;
  if (isKnownChild(section)) {
    if (isFilledReference(binding)) {
      const calls = buildPatchCalls(section, binding);
      if (calls.length) return toSequenceExpression(calls);
    }
  } else if (!isStateSourced(binding) && getPatchWrite(binding).write) {
    return buildLocalWrite(section, binding);
  }
}

// Content the value holds stays live where a read rendering it may be the
// client's, whether or not the flush ships the value (`_client_branch_if`).
function getClientBranchCall(section: Section, binding: Binding) {
  const kind = getPatchFill(binding).contentKind;
  if (!kind) return;
  const call = callRuntime(
    "_client_branch",
    getDeclaredBindingExpression(binding),
  );
  const contents =
    kind === true || getClientBranchGuard(section, kind.contents);
  if (contents === true) return call;
  return contents && t.logicalExpression("&&", contents, call);
}

// Plain write of a branch local with no state source that effects or handlers
// read, gated like the root's writes.
export function buildLocalWrite(section: Section, binding: Binding) {
  const write = getUnfilledPatchWrite(section, binding);
  return write && andGuard(getFilledGuard(section, binding), write);
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
    ? findParamReasonGroupIndex(
        section,
        getSourcesForReferencedBindings(binding)!.param!,
      )
    : -1;
  if (index !== -1) return { section, index };
}

// An `<await>` or `<try>` body every patch page renders, so it pairs without creating;
// the server drops the elision at render where a branch encloses.
export function alwaysPairs(bodySection: Section) {
  if (!getSectionWriteReason(bodySection)) return false;
  for (let s: Section | undefined = bodySection; s; s = s.parent) {
    if (isOptionalBranch(s) || s.boundaryContent) return false;
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
      orCallerGroupGuards(section, undefined, "_updates_from", rendered) ||
      t.numericLiteral(0)
    );
  }
}

// A fill's patch write; a `setup` applies it only to a scope the flush creates.
export function buildPatchFill(
  section: Section,
  binding: Binding,
  setup?: t.Expression,
  ...groupArgs: t.Expression[]
) {
  return callRuntime(
    "_patch_fill",
    getScopeIdIdentifier(section),
    t.stringLiteral(getPatchKey().Fill + getPatchFillKey(binding)),
    getDeclaredBindingExpression(binding),
    setup,
    ...groupArgs,
  );
}

export function buildPatchWrite(
  section: Section,
  binding: Binding,
  value: t.Expression = getDeclaredBindingExpression(binding),
  setup?: t.Expression,
) {
  const marked = getPatchWrite(binding).write;
  return callRuntime(
    "_patch_write",
    getScopeIdIdentifier(section),
    t.stringLiteral(
      (marked ? getPatchKey().MarkedWrite : getPatchKey().Write) +
        getScopeAccessor(binding),
    ),
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
  // Every created scope's setup of what the handler reads sets it.
  const refs = getReferencedBindings(extra);
  if (refs && getCreatedSetup(section).get(refs)?.setup === "always") {
    return handler;
  }
  const sources = getFillSources(extra);
  return callRuntime(
    "_patch_bind",
    getScopeIdIdentifier(section),
    t.stringLiteral(getPatchKey().Write + getAccessorProp().TagVariableChange),
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

// A text-only body's patch write is its escape call, with the patch's arguments
// after main's: it renders the whole text, so the entry carries it once.
export function buildPatchTextContent(
  section: Section,
  nodeBinding: Binding,
  text: t.Expression,
  escape: HTMLRuntimeHelpers,
  extra: t.NodeExtra,
) {
  return callRuntime(
    escape,
    text,
    getScopeIdIdentifier(section),
    t.stringLiteral(getPatchKey().TextContent + getScopeAccessor(nodeBinding)),
    ...getPatchHoleGroupArgs(section, extra),
  );
}

// A created scope runs the setup where the client contributes the sources'
// groups.
function buildClientSetup(
  section: Section,
  sources: Sources | undefined,
  initId: string,
) {
  return t.logicalExpression(
    "&&",
    getCallerGroupGuard(section, "_client_guard", sources)!,
    callRuntime(
      "_patch_render",
      getScopeIdIdentifier(section),
      t.stringLiteral(initId),
    ),
  );
}

// A created subscriber enters its owner's set where no patch fills the closure,
// running its setup where the client contributes, else resuming.
function buildSubscribe(
  section: Section,
  closure: Binding,
  fromClient: boolean,
) {
  return andGuard(
    getCallerGroupGuard(section, "_unfilled_if", closure.sources),
    callRuntime(
      "_patch_subscribe",
      getScopeIdIdentifier(section),
      t.stringLiteral(getResumeRegistryId(section, closure, "subscribe")),
      fromClient &&
        getCallerGroupGuard(section, "_client_guard", closure.sources),
    ),
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
export function getExprRootGroupArgs(
  section: Section,
  extra: t.NodeExtra,
): t.Expression[] {
  return buildWriteGroupArgs(getExprWriteGroups(section, extra));
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

// A hole of initial values seeds a created scope alone (a group mask of `0`), and
// is the client's where it holds a caller group their initial values read.
function getSeedOnlyGroupArgs(section: Section, states: Sources["state"]) {
  return buildWriteGroupArgs(getSeedWriteGroups(section, states));
}

// Whether a value's group args come from the caller groups of `section` (a call
// passes their bits), as `getRootGroupArgs` builds them.
export function hasCallerGroupsAt(
  section: Section,
  sources: Sources | false | undefined,
): sources is Sources & { param: NonNullable<Sources["param"]> } {
  return !!sources && !!getWriteGroups(section, sources);
}

// A patch writer's trailing `[mask, groupIdx]` group args, or `[]` when
// a write in `section` gates on no group of the sources' params.
export function getRootGroupArgs(
  section: Section,
  sources: Sources | undefined,
  stable?: boolean,
) {
  return buildWriteGroupArgs(getWriteGroups(section, sources, stable));
}

// A write's group args: one group's own, else one mask composing them, as a call
// site does (a `<define>` body's beside its template's, `$global`'s server bit).
function buildWriteGroupArgs(
  write: WriteGroups | undefined,
): [t.Expression, t.Expression] | [] {
  if (!write) return [];
  const { groups } = write;
  // Never changes: the write only seeds a created scope.
  if (!groups.length) return [t.numericLiteral(0), t.numericLiteral(0)];
  if (groups.length === 1 && !write.global && !write.seed) {
    const [section, group] = groups[0];
    return getGroupArgs(section, group);
  }
  return [
    buildGroupMask([
      {
        value: buildWriteGroupValue(write),
        names: getDebugNames(write.params),
      },
    ])!,
    t.numericLiteral(0),
  ];
}

// A composed mask's value: its groups' bits or'd, with `$global`'s server bit, or a
// seed's client bit alone (one group's is its client guard, shared as a guard is).
function buildWriteGroupValue({ groups, global, seed }: WriteGroups) {
  if (seed && groups.length === 1) {
    const [section, group] = groups[0];
    return getOrShareSectionGuard(section, group, "_client_guard");
  }
  return seed
    ? t.binaryExpression(
        "&",
        buildComposedGroupValue(groups),
        t.numericLiteral(UpdatesFrom.Client),
      )
    : buildGroupsValue(groups, global ? UpdatesFrom.Server : 0);
}

// The same test as a guard expression (`_filled_guard` for fills and effect
// writes), or undefined when no caller group gates a write in `section`.
export function getCallerGroupGuard(
  section: Section,
  check: HTMLRuntimeHelpers,
  sources: Sources | undefined,
) {
  const write = getWriteGroups(section, sources);
  // One caller group's mask-only check is shared, as a write guard is.
  if (
    write?.groups.length === 1 &&
    !write.global &&
    sharesGroupCheck(check, write.groups[0][0], section)
  ) {
    const [groupSection, group] = write.groups[0];
    return getOrShareSectionGuard(groupSection, group, check);
  }
  const args = buildWriteGroupArgs(write);
  return args.length ? callRuntime(check, ...args) : undefined;
}

// Where a patch fills the binding: its caller groups are the server's.
function getFilledGuard(section: Section, binding: Binding) {
  return getCallerGroupGuard(
    section,
    "_filled_guard",
    getSourcesForReferencedBindings(binding),
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
      !ownArg && sharesGroupCheck(check, paramSection, section)
        ? getOrShareSectionGuard(paramSection, group, check)
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

// Where content is live on the client: `true` where something renders it
// unconditionally (a `@catch` or `@placeholder` may, at any time).
function getClientBranchGuard(
  section: Section,
  contents: Opt<Section>,
  scopeSection = section,
) {
  let guard: t.Expression | undefined;
  const clientGroups = new Set<ParamReasonGroup>();
  forEach(contents, (content) => {
    const id = getResumeRegistryId(content, "content");
    const check = callRuntime(
      "_client_branch_if",
      t.stringLiteral(id),
      getScopeIdIdentifier(scopeSection),
    );
    guard = orGuard(guard, check);
    // Live too where what picks it updates from the client, which a patch never
    // sees: each group once.
    const reason = getRendererReason(content);
    if (reason && isDynamicWriteGuard(section, reason)) {
      guard = orCallerGroupGuards(
        section,
        guard,
        "_client_guard",
        reason,
        clientGroups,
      );
    }
  });
  return guard;
}

// A patch writes a value where main serializes it: where client code may read it
// after resume (its write reason), a caller's client bit deciding a guarded one.
function getUnfilledPatchWrite(section: Section, binding: Binding) {
  const write = buildPatchWrite(
    section,
    binding,
    undefined,
    getConstantSetup(section, binding),
  );
  // A built object's source rides its readers' entries, where a patch fills them.
  if (getPatchFill(binding).objectSource) return write;
  const canonical = getCanonicalBinding(binding);
  const contents = getClosureContents(canonical);
  if (contents === true) return write;
  // Content taking the value as a closure needs it where the client keeps an instance.
  const guard = contents && getClientBranchGuard(section, contents);
  const reason = mapBodyParams(section, findSlot(canonical)?.reason);
  if (!isDynamicWriteGuard(section, reason)) {
    return reason ? write : guard && andGuard(guard, write);
  }
  return andGuard(
    orCallerGroupGuards(section, guard, "_client_guard", reason),
    write,
  );
}

// The writes a client branch guard decides, at the section's end: its dynamic tags report
// the content they render as a client branch.
export function getClientBranchGuardWrites(section: Section) {
  return isKnownChild(section)
    ? []
    : reduce(section.bindings, addClientBranchGuardWrite, [] as t.Statement[]);
}

function addClientBranchGuardWrite(writes: t.Statement[], binding: Binding) {
  const write = hasClientBranchGuard(binding) && buildDeclarationWrite(binding);
  if (write) writes.push(t.expressionStatement(write));
  return writes;
}

// A value dynamic tag content takes as a closure is written where a consumer
// renders that content as a client branch (`_client_branch_if`), which no `<let>` keeping it decides.
function hasClientBranchGuard(binding: Binding) {
  const contents = getClosureContents(getCanonicalBinding(binding));
  return !!contents && contents !== true;
}

// The dynamic tag contents between a read and the value that take it as a content
// closure, or `true` where a `<let>` keeps one; a define renders where it is called.
export const [getClosureContents] = createAnalysisMemo(
  computeClosureContents,
  undefined,
);

function computeClosureContents(binding: Binding) {
  const seen = new Set<Section>();
  let contents: SortedOpt<Section>;
  const visit = (section: Section): boolean => {
    for (let cur = section; cur !== binding.section; cur = cur.parent!) {
      if (seen.has(cur)) return false;
      seen.add(cur);
      if (isKeptInLet(cur) || some(cur.renderedBy, visitCall)) return true;
      if (bindingUtil.has(getDynamicTagContentClosures(cur), binding)) {
        contents = sectionUtil.add(contents, cur);
      }
    }
    return false;
  };
  const visitCall = (call: KnownTagExtra) =>
    visit(call.childScopeBinding.section);
  return some(binding.closureSections, visit) || contents;
}

// Content a `<let>` keeps: the client renders that instance from its own state, with
// the values it reads from its owners.
function isKeptInLet(content: Section) {
  const { derives } = content;
  return (
    !!derives &&
    some(derives.binding, (binding) =>
      someRead(bindingReaders(binding, derives.properties), (read) =>
        some(read.derives, isLet),
      ),
    )
  );
}

function isLet(binding: Binding) {
  return binding.type === BindingType.let;
}

// A constant group's value seeds a created scope alone: a live one holds it.
function getConstantSetup(section: Section, binding: Binding) {
  const guard = getCallerGroupGuard(
    section,
    "_server_guard",
    getSourcesForReferencedBindings(binding),
  );
  if (guard) return t.unaryExpression("!", guard);
}

// What an entry depends on, as shells' hops (`>` per owner up), each where this instance's
// patch fills it (bare where the entry's guard checks its one group); one read stands alone.
function getReads(
  section: Section,
  roots: Binding[],
  check: HTMLRuntimeHelpers,
  entryGroup?: ParamReasonGroup | false,
) {
  const reads: t.Expression[] = [];
  for (const root of roots.reduce(addFilledReads, new Set<Binding>())) {
    const hop = getWriteHop(section, root);
    if (hop) {
      const sources = getSourcesForReferencedBindings(root)!;
      reads.push(
        entryGroup &&
          !sources.global &&
          isGuardedReason(sources) &&
          getSoleCallerGroup(section, sources) === entryGroup
          ? t.stringLiteral(hop)
          : andGuard(
              getCallerGroupGuard(section, check, sources),
              t.stringLiteral(hop),
            ),
      );
    }
  }
  return reads.length > 1 ? t.arrayExpression(reads) : reads[0];
}

// The one caller group a guard over `list` checks at `section`, if just one.
function getSoleCallerGroup(section: Section, list: Opt<Sources>) {
  const groups = new Set<ParamReasonGroup>();
  forEachCallerGroup(section, list, groups, noop);
  const [sole, other] = groups;
  return other ? undefined : sole;
}

function noop() {}

// A filled reference of a function a patch may bind: its change makes the function anew.
export function isFilledReference(binding: Binding) {
  return someAlias(
    getCanonicalBinding(binding),
    hasFilledReferenceRead,
    undefined,
    true,
  );
}

// A scope-bound function a holder compares by identity (`patches/marked-bind`): a
// marked slot or a fill, or any that binds a live one, here or in a call's template.
export const [comparesBoundFn] = createAnalysisMemo(
  (fn: t.NodeExtra) =>
    // A function with filled references keeps its record wherever a patch binds it (its references
    // judge it); a `<return>`'s caller links the record where it compares.
    getFilledReferences(fn)
      ? reachesBoundHolder(fn, bindsLive)
      : reachesBoundHolder(fn, comparesHeld, readsAsValue),
  false,
);

// A holder that compares a function by identity: a marked slot or a fill in its
// template, an effect or a fill in a call's.
function comparesHeld(held: Binding, own: boolean) {
  return (
    someAlias(held, hasValueRead, undefined, true) &&
    !isInvokeOnlyBinding(held) &&
    (own
      ? !!getPatchWrite(held).write || !!getPatchFill(held).fill
      : runsEffectOnPatch(held) || !!getPatchFill(held).fill)
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
  return !read.extra.exprRoot.changeHandler;
}

// A holder of a function with filled references a patch binds: one this template writes or fills, or
// another template's its entries or fill read.
function bindsLive(held: Binding, own: boolean, expr?: t.NodeExtra) {
  return own
    ? getPatchWrite(held).write || !!getPatchFill(held).fill
    : runsEffectOnPatch(held) ||
        !!getPatchFill(held).fill ||
        intersectsClientState(held, expr!);
}

// A read of the binding lands in a function with filled references its template registers.
function hasFilledReferenceRead(binding: Binding) {
  for (const reads of binding.reads.values()) {
    if (some(reads, isFilledReferenceRead)) return true;
  }
  return false;
}

function isFilledReferenceRead({ fnRoot }: Read) {
  return !!fnRoot?.reason && !!getFilledReferences(fnRoot);
}

// A function reaches a holder `test` accepts (`own`: in its template, not a
// call's), or a dynamic tag's input, a template this one cannot see.
function reachesBoundHolder(
  fn: t.NodeExtra,
  test: (held: Binding, own: boolean, expr?: t.NodeExtra) => boolean,
  carries?: (binding: Binding, expr: ReferencedExtra) => boolean,
) {
  const { program } = fn.section!;
  const reaches = (holder: Binding) =>
    someReached(
      holder,
      (held, expr) =>
        test(held, held.section.program === program, expr) ||
        readsAsDynamicTagInput(held),
      fn,
      carries,
    );
  // Its holders are what its root expression derives, and their parts, as main
  // registers it (`trackFunction`).
  return (
    isDynamicTagInput(fn) ||
    some((fn.exprRoot || fn).derives, (holder) => somePart(holder, reaches))
  );
}

// A value that may hold a function with filled references a known child's `<return>` registers:
// the child leaves its record to the caller, which sees the holder.
export function mayHoldReturnedFnWithFilledReferencesIn(binding: Binding) {
  return someReturnedFnValueOf(binding, hasFilledReferences);
}

export function mayHoldReturnedFnWithFilledReferences(exprs: Opt<t.NodeExtra>) {
  return someReturnedFnValue(exprs, hasFilledReferences);
}

// A value that may be or hold a function its template registers with a scope,
// which a patch sends as a bind.
export function mayHoldScopeBoundFn(exprs: Opt<t.NodeExtra>) {
  return someFnValue(exprs, isScopeBoundTrackedFn);
}

function isScopeBoundTrackedFn(expr: t.NodeExtra) {
  return isTrackedFunction(expr) && isScopeBoundFn(expr);
}

// A registered function its template binds to one of its scopes.
export function isScopeBoundFn(expr: t.NodeExtra) {
  const fn = expr as t.FunctionExtra;
  return !!(fn.referencesScope || fn.referencedLocalBindingsInFunction);
}

// The caller groups a closure's re-run by a write ships under: the written value's
// own, and those of the param-selected structure around the closure.
export function getClosureRenderGroups(closure: Binding, section: Section) {
  const { section: own } = closure;
  return {
    own: getCallerParamGroupsAt(
      getSourcesForReferencedBindings(closure)?.param,
      own,
    ),
    structure: (getCallerSelectedStructure(closure, section) || []).flatMap(
      (sources) => getCallerParamGroupsAt(sources.param, own),
    ),
  };
}

// The param-selected structure around a closure's reader that a call passing client
// state hands the client; none where the client may render it below the closure.
function getCallerSelectedStructure(closure: Binding, section: Section) {
  return clientMayRenderInAnyCall(section, closure.section)
    ? undefined
    : getParamSelectedStructure(section);
}

// A closure a created scope sets up, over a slot a patch writes but no fill re-runs:
// the write re-renders it on a live scope too.
export function runsClosureByWrite(closure: Binding, section: Section) {
  const root = getCanonicalBinding(closure);
  return (
    !isDynamicClosure(section, closure) &&
    getPatchWrite(root).write &&
    !getPatchFill(root).fill &&
    !!getCreatedSetup(section).get(closure)?.setup
  );
}

// A holder a dynamic tag's input reads as it is.
function readsAsDynamicTagInput(held: Binding) {
  for (const read of held.reads.keys()) {
    if (isDynamicTagInput(read)) return true;
  }
  return false;
}

function isDynamicTagInput(expr: t.NodeExtra) {
  return expr.tagNameType === TagNameType.DynamicTag;
}

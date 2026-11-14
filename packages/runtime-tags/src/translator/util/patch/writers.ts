// Patch writers: the calls a flush's entries come from, with the param group
// guards, group args and boundary flags gating them.
import { types as t } from "@marko/compiler";

import { UpdatesFrom } from "../../../common/types";
import {
  type Binding,
  bindingUtil,
  getCanonicalBinding,
  getDebugNames,
  getNearestDeclared,
  type Intersection,
  isInvokeOnlyBinding,
  isSectionParam,
  type ReferencedBindings,
  someAlias,
  someBindingRead,
  someDerivedRead,
  somePart,
} from "../bindings";
import { createAnalysisMemo } from "../cyclic-memo";
import { forEachIdentifier } from "../for-each-identifier";
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
import { isTrackedFunction } from "../module-registrations";
import {
  every,
  filter,
  forEach,
  fromIter,
  type Opt,
  push,
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
import { insertStatementBefore } from "../replace-with-statements";
import { absentArg, callRuntime, type HTMLRuntimeHelpers } from "../runtime";
import {
  getPrefixedScopeAccessor,
  getScopeAccessor,
  getScopeAccessorLiteral,
} from "../scope-accessor";
import {
  findParamReasonGroupIndex,
  forEachParamGroup,
  getDynamicTagContentClosures,
  getParamReasonGroupIndex,
  getRendererReason,
  getScopeIdIdentifier,
  isDynamicClosure,
  isKnownChild,
  isOptionalBranch,
  type ParamReasonGroup,
  type Section,
  sectionUtil,
} from "../sections";
import { isQueuedOnCreate } from "../shell";
import {
  getResumeRegistryId,
  getScopeProperties,
  type Signal,
} from "../signals";
import { findSlot } from "../slots";
import { type Sources } from "../sources";
import { createOutputSectionState, createOutputState } from "../state";
import { TagNameType } from "../tag-name-type";
import { toSequenceExpression } from "../to-only-or-block";
import { toObjectProperty } from "../to-property-name";
import { withLeadingComment } from "../with-comment";
import {
  andGuard,
  buildGroupMask,
  getEmittedReasonStatement,
  getExprIfWritten,
  getGroupArgs,
  getOrShareGroupCheck,
  getOrShareSectionGuard,
  getPatchCheckBit,
  getReasonSection,
  getStaticGroupBit,
  getStaticGroupValue,
  getWriteReason,
  type GroupCheck,
  isDynamicWriteGuard,
  isAlways,
  ifEver,
  isNever,
  notGuard,
  getSectionWriteReason,
  orGuard,
  scopePageIdentifier,
} from "../write-guard";
import {
  fillsHole,
  getCallerParamGroupsAt,
  getEffectWrites,
  getExprWriteGroups,
  getFillSources,
  getRenderedValueSources,
  getSeedWriteGroups,
  getStateInitialValueSources,
  getWriteGroups,
  getWriteGroupsValue,
  hasClientState,
  isCallerParamAt,
  keepsSeededMarker,
  passesNoMask,
  type WriteGroups,
} from "./decisions";
import {
  setupFromClient,
  getCallerSelectedStructure,
  mayHandStructureToClient,
  addFilledReads,
  someFnValue,
  type CreatedSetup,
  getCreatedSetup,
  getCreatedSetupId,
  getClosureSubscribersId,
  getSetupSources,
  getFilledReferences,
  getPatchFill,
  getPatchFillBindings,
  getPatchFillKey,
  getPatchWrite,
  getRendererCallerSources,
  getRendererRead,
  getClosureReadSources,
  getUnfilledReadSources,
  getUnfilledSubscribedSources,
  getWriteHop,
  hasTagCallerParamAt,
  patchCreates,
  runsEffectOnPatch,
  runsSubscribersByWrite,
  seedsOwnerConstant,
  writesSeed,
} from "./refresh";

// What a section's patch calls in `_scope`'s place: its client branch reports and a known
// child's writes; a filled reference writes where declared instead, a param's into `paramWrites`.
function getPatchScopeCalls(section: Section, paramWrites: t.Statement[]) {
  const scopeCalls: t.Expression[] = [];
  // Effect-read values need no client registration: the wire writes the accessor and
  // each effect runs again by register id on change.
  if (isKnownChild(section)) {
    forEach(section.bindings, (binding) => {
      pushKnownChildCalls(section, binding, scopeCalls, paramWrites);
    });
  }
  return scopeCalls;
}

function pushKnownChildCalls(
  section: Section,
  binding: Binding,
  scopeCalls: t.Expression[],
  paramWrites: t.Statement[],
) {
  if (!isFilledReference(binding)) {
    const write = buildLocalWrite(section, binding);
    if (write) scopeCalls.push(write);
  } else if (isSectionParam(binding) && !isNamedWhereHidden(binding)) {
    const write = buildLocalWrite(section, binding);
    if (write) paramWrites.push(t.expressionStatement(write));
  }
}

// The patch side of an effect's `_script`: its entry (`1`, or `2` queued) where
// a patch writes in place a value the effect read, then those values.
function getEffectEntryArgs(
  section: Section,
  signal: Signal,
  rendered: boolean,
  checksIn?: Section,
) {
  const writes = getEffectWrites(section, signal);
  if (!writes) return;
  // A mixed intersection's render passes the values, and stands in for the entry on
  // every patch where no caller's groups decide.
  if (
    rendered &&
    !hasCallerGroupsAt(
      section,
      getSourcesForReferencedBindings(signal.referencedBindings),
    )
  ) {
    return [absentArg(0)];
  }
  const { written } = writes;
  // The entry mounts the effect in a created scope where no render of the
  // scope queues it: one its caller passes client state does.
  const queued = isQueuedOnCreate(section, signal.referencedBindings);
  // A constant read still mounts the effect where a flush may create.
  const check = queued ? "_server_guard" : "_filled_guard";
  const group = written && getSoleCallerGroup(section, written);
  // Each read value's own check, as its writes compose it.
  const guard = reduce(
    written,
    (guard: t.Expression | undefined, sources) =>
      orGuard(guard, getCallerGroupGuard(section, check, sources, checksIn)),
    undefined,
  );
  // No call's patch writes what the effect reads.
  if (!rendered && guard && isNever(guard)) return;
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
  const entry =
    queued || (clientGuard && isAlways(clientGuard))
      ? t.numericLiteral(2)
      : clientGuard
        ? t.conditionalExpression(
            clientGuard,
            t.numericLiteral(2),
            t.numericLiteral(1),
          )
        : undefined;
  return [entry ? andGuard(guard, entry) : guard || t.numericLiteral(1)];
}

// What an effect's entry re-runs it on, as hops from its section, where some call's
// patch fills it: its registration names them (`_script_patch`), as a function's do.
export function getEffectReads(section: Section, signal: Signal) {
  const hops = new Set<string>();
  const writes = getEffectWrites(section, signal);
  if (writes) {
    for (const root of writes.reads.reduce(
      addFilledReads,
      new Set<Binding>(),
    )) {
      if (getCallerGroupBit(section, "_filled_guard", root.sources) !== 0) {
        hops.add(getWriteHop(section, root)!);
      }
    }
  }
  return [...hops].join(" ");
}

// The sources an effect re-runs on where one is a param a calling tag passes.
function getEffectCallerSources(
  section: Section,
  referencedBindings: ReferencedBindings,
) {
  const sources = reduce(
    filter(referencedBindings, runsEffectOnPatch),
    pushCanonicalSources,
  );
  if (some(sources, (s) => hasTagCallerParamAt(s, section))) return sources;
}

function pushCanonicalSources(list: Opt<Sources>, binding: Binding) {
  const { sources } = getCanonicalBinding(binding);
  return sources ? push(list, sources) : list;
}

// Each controlled `<let>`'s handler, which a patch's fill reads whether or not
// it serializes.
export const [getLetChanges] = createOutputSectionState<
  Map<Binding, t.Expression>
>(() => new Map());

// The entries of an `<await>` body its server copy may not render: they read no value,
// so where no copy renders its `<await>` writes them too, sharing their checks with it.
export const [getBodyEntries, setBodyEntries] =
  createOutputSectionState<t.Statement[]>();

// The `_script`s a mixed intersection's render may run in place of their entries.
const [getRenderScripts] = createOutputSectionState(
  () => new Map<Intersection, (t.Expression | undefined)[][]>(),
);

// Writes an effect's `_script` with its entry, extending the caller's `args`, or
// leaves it to its intersection's render; false where it has no entry.
export function writePatchScript(
  section: Section,
  signal: Signal,
  args: (t.Expression | undefined)[],
  body: t.Statement[],
) {
  // A patch's intersection render may run the effect instead of its entry:
  // the intersection's own effect and each of its `$global` signals'.
  const ref = signal.referencedBindings;
  const rendered =
    Array.isArray(ref) && getCreatedSetup(section).get(ref)?.setup === "mixed"
      ? ref
      : undefined;
  const entries = getBodyEntries(section);
  const entry = getEffectEntryArgs(
    section,
    signal,
    !!rendered,
    entries && section.parent,
  );
  if (!entry) return false;
  args[2] ||= t.numericLiteral(1);
  args.push(...entry);
  if (rendered) {
    const renderScripts = getRenderScripts(section);
    let scripts = renderScripts.get(rendered);
    if (!scripts) renderScripts.set(rendered, (scripts = []));
    scripts.push(args);
  } else {
    const script = t.expressionStatement(callRuntime("_script", ...args));
    body.push(script);
    // An effect's entry is one its `<await>` writes where no copy renders.
    entries?.push(script);
  }
  return true;
}

// A section's patch entries beside its resume data (a created scope's setup, the
// intersection renders); returns what its patch calls in `_scope`'s place.
export function writePatchResumeStatements(
  section: Section,
  body: t.Statement[],
) {
  const paramWrites: t.Statement[] = [];
  const scopeCalls = getPatchScopeCalls(section, paramWrites);
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
    const seeds = writesSeed(binding);
    // A seed writes a caller group's value only where the group is the client's, as
    // plain's document would; any other always, since no later patch writes it.
    const reason =
      seeds &&
      !hasClientState(binding.sources) &&
      mapBodyParams(section, getWriteReason(binding));
    // In place where an intersection the patch writes runs on the client (another
    // member is the client's).
    const { filledMembers } = getPatchFill(binding);
    const inPlace =
      filledMembers &&
      orCallerGroupGuards(section, undefined, "_client_guard", filledMembers);
    const entry = seeds
      ? andGuard(
          getStateInitialValueGuard(section, binding.sources?.state),
          andGuard(
            hasCallerGroupsAt(section, reason) &&
              getCallerGroupGuard(section, "_unfilled_if", reason),
            buildPatchWrite(
              section,
              binding,
              getPatchKey().Write,
              t.numericLiteral(1),
            ),
          ),
        )
      : inPlace &&
        andGuard(
          inPlace,
          buildPatchWrite(section, binding, getPatchKey().Write),
        );
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
      if (!isAlways(client)) {
        body.push(
          t.expressionStatement(
            andGuard(
              notGuard(client),
              andGuard(
                callRuntime("_unfilled_if"),
                buildPatchWrite(closure.section, closure, getPatchKey().Write),
              ),
            ),
          ),
        );
      }
    }
  });

  // A closure over a patch-written slot (a value or a function with filled references' new bind)
  // the client renders re-runs on a live scope once marked: no node reaches it.
  forEach(section.bindings, (binding) => {
    const { sources } = binding;
    forEach(binding.closureSections, (closureSection) => {
      if (
        runsClosureByWrite(binding, closureSection) &&
        getCallerGroupBit(section, "_filled_guard", sources) !== 0
      ) {
        body.push(
          t.expressionStatement(
            andGuard(
              getCallerGroupGuard(section, "_filled_guard", sources),
              andGuard(
                orCallerGroupGuards(
                  section,
                  undefined,
                  "_client_guard",
                  // A call may hand the client param-selected structure.
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
  const entries = getBodyEntries(section);
  const setupStart = body.length;
  for (const [ref, setup] of getCreatedSetup(section)) {
    if (Array.isArray(ref)) {
      if (setup.setup === "mixed") {
        // A mixed intersection re-renders as its members change, by its group where params decide.
        const renderId = t.stringLiteral(
          getResumeRegistryId(section, ref, "setup"),
        );
        const reads =
          getReads(
            section,
            toArray(ref, getCanonicalBinding),
            "_filled_guard",
            undefined,
            entries && section.parent,
          ) || absentArg(0);
        const groupArgs = getRootGroupArgs(
          section,
          getSourcesForReferencedBindings(ref),
        );
        // The intersection's effects ship their entries only where the render doesn't run
        // them: the first takes the render, the rest run where it shipped none.
        const [script, ...scripts] = getRenderScripts(section).get(ref) || [];
        const rendered =
          script &&
          callRuntime("_script", ...script, reads, renderId, ...groupArgs);
        body.push(
          t.expressionStatement(
            rendered
              ? scripts.length
                ? t.logicalExpression(
                    "||",
                    rendered,
                    toSequenceExpression(scripts.map(buildScriptCall)),
                  )
                : rendered
              : callRuntime(
                  "_patch_render",
                  getScopeIdIdentifier(section),
                  renderId,
                  reads,
                  ...groupArgs,
                ),
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
        t.expressionStatement(buildSubscribe(section, ref, setup.subscribe)),
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
  entries?.push(...body.slice(setupStart));

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

  // A fill's scope is one a flush writes, and so may create: it seeds its state in
  // the setup envelope.
  forEach(getPatchFillBindings(section), (binding) => {
    const change = letChanges.get(binding);
    for (const write of change
      ? buildLetChangeWrites(section, binding, change)
      : buildLetSeeds(section, binding)) {
      body.push(t.expressionStatement(write));
    }
  });

  if (paramWrites.length) {
    // The params' writes lead the body, after its reason where it has one.
    const reason = getEmittedReasonStatement(section);
    body.splice(reason ? body.indexOf(reason) + 1 : 0, 0, ...paramWrites);
  }
  return scopeCalls;
}

function buildScriptCall(args: (t.Expression | undefined)[]) {
  return callRuntime("_script", ...args);
}

// A controlled `<let>`'s value, a fill while its handler controls it and the
// controller updates from the server, else a seed; then its handler binds where it serializes.
function buildLetChangeWrites(
  section: Section,
  binding: Binding,
  { expression, reason }: { expression: t.Expression; reason?: Reason },
) {
  // A param-sourced handler binds only where its group updates from the server.
  const bindGroupArgs = getRootGroupArgs(section, reason);
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
    const seedGroups = getSeedWriteGroups(section, binding);
    const seed = seedGroups.groups.length
      ? buildPatchFill(
          section,
          binding,
          getDeclaredBindingExpression(binding),
          t.numericLiteral(1),
          ...buildWriteGroupArgs(seedGroups),
        )
      : buildPatchFill(
          section,
          binding,
          getDeclaredBindingExpression(binding),
          t.numericLiteral(1),
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
  const guard = getStateInitialValueGuard(section, binding);
  // None where no call's patch fills the initial value.
  return guard && isNever(guard)
    ? []
    : [
        andGuard(
          guard,
          buildPatchFill(section, binding, buildReadValue(binding), setup),
        ),
      ];
}

// What client code reads of a `<let>`: the value where read whole, else each member
// read, as plain writes them.
function buildReadValue(binding: Binding): t.Expression {
  return binding.reads.size || binding.aliases.size
    ? getDeclaredBindingExpression(binding)
    : t.objectExpression(Array.from(binding.propertyAliases, buildReadMember));
}

function buildReadMember([name, member]: [string, Binding]) {
  return toObjectProperty(name, buildReadValue(member));
}

// A created scope's own state starts from its initial values: the server's where
// they read no param or `$global`, else where their caller groups are the server's.
function getStateInitialValueGuard(section: Section, states: Sources["state"]) {
  const sources = getStateInitialValueSources(states);
  return sources && getCallerGroupGuard(section, "_filled_guard", sources);
}

// A patch render writes each content closure the client reads, so where it writes
// one, registered content's args send only its locals.
export function getPatchContentLocals(
  bodySection: Section,
  values: t.ArrayExpression,
  locals: t.Expression[],
) {
  return some(getDynamicTagContentClosures(bodySection), isPatchWritten)
    ? t.conditionalExpression(
        scopePageIdentifier(getReasonSection(bodySection.parent!)),
        values,
        t.arrayExpression(locals),
      )
    : values;
}

function isPatchWritten(binding: Binding) {
  return !!getPatchWrite(binding).write;
}

// An `<id>`'s address numbers each call site rendering another scope's content
// across its template: a branch adds nothing, so accessors could repeat.
const [getIdSites, setIdSites] = createOutputState(() => 0);
export function nextIdSite() {
  const site = getIdSites();
  setIdSites(site + 1);
  return site;
}

// An `<if>`'s branches never render together, so each numbers its sites from
// the first branch's, and what follows numbers past all of them.
const [getBranchIdSites] = createOutputState(
  () => new Map<object, [first: number, next: number]>(),
);
export function enterBranchIdSites(branches: object) {
  const range = getBranchIdSites().get(branches);
  if (range) setIdSites(range[0]);
  else getBranchIdSites().set(branches, [getIdSites(), 0]);
}
export function exitBranchIdSites(branches: object) {
  const range = getBranchIdSites().get(branches)!;
  setIdSites((range[1] = Math.max(range[1], getIdSites())));
}

// The patch writes a declaration's values make once they exist, after it:
// pushed onto `statements` where the declaration was, else inserted.
export function insertDeclarationWrites(
  target: t.NodePath,
  id: t.LVal,
  binding?: Binding,
  statements?: t.Statement[],
) {
  const writes = statements || [];
  if (binding) pushDeclarationWrites(writes, binding);
  forEachIdentifier(id, (name) => {
    if (name.extra?.binding && name.extra.binding !== binding) {
      pushDeclarationWrites(writes, name.extra.binding);
    }
  });
  if (!statements) {
    for (const write of writes) insertStatementBefore(target, write);
  }
}

// The writes a declared value makes once it exists, and those of the members
// read through it that no name declares.
function pushDeclarationWrites(statements: t.Statement[], binding: Binding) {
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

// The write where a value is declared: a branch local's, or a known child's filled
// reference's (its other values write in `_scope`'s place).
function buildDeclarationWrite(binding: Binding) {
  const { section } = binding;
  return (
    (!isKnownChild(section) || isFilledReference(binding)) &&
    buildLocalWrite(section, binding)
  );
}

// The marked write of a value a patch writes, gated like the root's writes: none where
// its guards fold to never, decided before either guard is built.
function buildLocalWrite(section: Section, binding: Binding) {
  if (
    !getPatchWrite(binding).write ||
    getCallerGroupBit(section, "_filled_guard", binding.sources) === 0
  ) {
    return;
  }
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
  const unfilled = andGuard(
    getUnfilledGuard(
      section,
      ownReason.param,
      structure,
      !!ownReason.global,
      binding && getOwnParamGroup(binding),
    ),
    expr,
  );
  // A caller param past the write reason's leaves a read unfilled only where main writes it.
  return some(structure, (sources) =>
    some(
      sources.param,
      (param) =>
        isCallerParamAt(param, section) &&
        !bindingUtil.has(ownReason.param, param),
    ),
  )
    ? getExprIfWritten(section, reason, unfilled)
    : unfilled;
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
    ? findParamReasonGroupIndex(section, binding.sources!.param!)
    : -1;
  if (index !== -1) return { section, index };
}

// A patch creates a `<try>` from its body's shell; an always-pairing body drops
// it outside structure a flush may create.
export function getPatchTryArgs(
  bodySection: Section,
  catchSection: Section | undefined,
) {
  return [
    t.stringLiteral(getResumeRegistryId(bodySection, "content")),
    alwaysPairs(bodySection) ? t.numericLiteral(1) : absentArg(0),
    // A flush creates a catch whose effects its entries mount.
    catchSection && patchCreates(catchSection)
      ? t.numericLiteral(1)
      : absentArg(0),
  ];
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
function buildPatchFill(
  section: Section,
  binding: Binding,
  value: t.Expression,
  setup?: t.Expression,
  ...groupArgs: t.Expression[]
) {
  return callRuntime(
    "_patch_fill",
    getScopeIdIdentifier(section),
    t.stringLiteral(getPatchKey().Fill + getPatchFillKey(binding)),
    value,
    setup,
    ...groupArgs,
  );
}

// A value's patch write under `key` (`MarkedWrite` where entries read its change mark);
// a `setup` applies it only to a scope the flush creates.
function buildPatchWrite(
  section: Section,
  binding: Binding,
  key: string,
  setup?: t.Expression,
) {
  return callRuntime(
    "_patch_write",
    getScopeIdIdentifier(section),
    t.stringLiteral(key + getScopeAccessor(binding)),
    getDeclaredBindingExpression(binding),
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

// A filled text or markup hole's marking helper is also its patch write, so the value
// evaluates once; a seed's node keeps its marker whatever its group (`1`).
export function buildPatchTextMark(
  helper: "_text_mark" | "_html_mark",
  nodeBinding: Binding,
  value: t.Expression,
  markerGuard: t.Expression,
) {
  const { section } = nodeBinding;
  const extra = value.extra!;
  const scopeId = getScopeIdIdentifier(section);
  const accessor = getScopeAccessorLiteral(nodeBinding);
  return keepsSeededMarker(section, extra)
    ? callRuntime(
        helper,
        scopeId,
        accessor,
        value,
        markerGuard,
        ...getExprRootGroupArgs(section, extra),
        t.numericLiteral(1),
      )
    : callRuntime(
        helper,
        scopeId,
        accessor,
        value,
        markerGuard,
        ...getPatchHoleGroupArgs(section, extra),
      );
}

// A filled attribute's helper renders it and writes its entry, so the value evaluates
// once; class, style and an `<option>`'s value (which marks it selected) have their own.
export function buildPatchAttr(
  nodeBinding: Binding,
  tagName: string,
  name: string,
  value: t.Expression,
) {
  const { section } = nodeBinding;
  const scopeId = getScopeIdIdentifier(section);
  const accessor = getScopeAccessorLiteral(nodeBinding);
  const groupArgs = getExprRootGroupArgs(section, value.extra!);
  return tagName === "option" && name === "value"
    ? callRuntime("_attr_option_value", value, scopeId, accessor, ...groupArgs)
    : name === "class" || name === "style"
      ? callRuntime(`_attr_${name}`, value, scopeId, accessor, ...groupArgs)
      : callRuntime(
          "_attr",
          t.stringLiteral(name),
          value,
          scopeId,
          accessor,
          ...groupArgs,
        );
}

// A filled control's args after its helper's own: the entries it writes (1 the
// control's, 2 its handler's bind, which client code sets with the value), then their group.
export function getPatchControlArgs(
  section: Section,
  controlExtra: t.NodeExtra,
  hasChangeHandler: boolean,
) {
  if (fillsHole(section, controlExtra)) {
    return [
      t.numericLiteral(hasChangeHandler ? 3 : 1),
      ...getExprRootGroupArgs(section, controlExtra),
    ];
  }
}

// A `<style>` value where a patch fills its section: its helper writes the declaration
// and its entry, which only seeds a created scope for a value no patch fills (group `0`).
export function buildPatchStyleValue(
  nodeBinding: Binding,
  name: string,
  value: t.Expression,
) {
  const { section } = nodeBinding;
  const [mask, group] = fillsHole(section, value.extra)
    ? getExprRootGroupArgs(section, value.extra!)
    : [t.numericLiteral(0), t.numericLiteral(0)];
  return callRuntime(
    "_escape_style_value",
    value,
    getScopeIdIdentifier(section),
    getScopeAccessorLiteral(nodeBinding),
    t.stringLiteral(name),
    mask,
    group,
  );
}

// A filled `<show>` display's args after `_show_end`'s own: its entry and group, and the
// start marker's accessor, by which with the node's a created scope finds the range.
export function getPatchShowArgs(
  section: Section,
  extra: t.NodeExtra,
  start: Binding | undefined,
) {
  const [mask, group] = getExprRootGroupArgs(section, extra);
  return [
    t.numericLiteral(1),
    mask,
    group,
    start && getScopeAccessorLiteral(start, true),
  ];
}

// A created scope runs the setup where the client contributes the sources'
// groups.
function buildClientSetup(
  section: Section,
  sources: Sources | undefined,
  initId: string,
) {
  return andGuard(
    getCallerGroupGuard(section, "_client_guard", sources),
    callRuntime(
      "_patch_render",
      getScopeIdIdentifier(section),
      t.stringLiteral(initId),
    ),
  );
}

// A created subscriber enters its owner's set where no patch fills its reads of the
// closure, rendering at once as its setup says, else resuming.
function buildSubscribe(
  section: Section,
  closure: Binding,
  subscribe: NonNullable<CreatedSetup["subscribe"]>,
) {
  return t.logicalExpression(
    "&&",
    // By the reads' caller groups, as a document's; with none, only unpatched structure.
    callRuntime(
      "_unfilled_if",
      ...getRootGroupArgs(section, getClosureReadSources(closure, section)),
    ),
    callRuntime(
      "_patch_subscribe",
      getScopeIdIdentifier(section),
      t.stringLiteral(getResumeRegistryId(section, closure, "subscribe")),
      subscribe === "render"
        ? t.numericLiteral(1)
        : subscribe === "client" &&
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

// Whether a value's group args come from the caller groups of `section` (a call
// passes their bits), as `getRootGroupArgs` builds them.
export function hasCallerGroupsAt(
  section: Section,
  sources: Sources | false | undefined,
): sources is Sources & { param: NonNullable<Sources["param"]> } {
  return !!sources && !!getWriteGroups(section, sources).groups.length;
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
// site does (a `<define>` body's beside its template's, an ungated source's server bit).
function buildWriteGroupArgs(
  write: WriteGroups | undefined,
): [t.Expression, t.Expression] | [] {
  if (!write) return [];
  const { groups } = write;
  if (!groups.length) {
    if (passesNoMask(write)) return [];
    // Never changes: the write only seeds a created scope.
    return [t.numericLiteral(0), t.numericLiteral(0)];
  }
  if (groups.length === 1 && !write.ungated && !write.seed) {
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

// A composed mask's value: its groups' bits or'd, with an ungated source's server bit, or a
// seed's client bit alone (one group's is its client guard, shared as a guard is).
function buildWriteGroupValue(write: WriteGroups) {
  const { groups, seed } = write;
  if (seed && groups.length === 1) {
    const [section, group] = groups[0];
    const client = getOrShareSectionGuard(section, group, "_client_guard");
    // A folded check packs into the mask as the constant it is.
    return t.isNumericLiteral(client) ? client.value : client;
  }
  return seed
    ? t.binaryExpression(
        "&",
        buildComposedGroupValue(groups),
        t.numericLiteral(UpdatesFrom.Client),
      )
    : getWriteGroupsValue(write, buildGroupsValue);
}

// The same test as a guard expression (`_filled_guard` for fills and effect
// writes) of a write in `section`: a constant where its mask's value decides it.
export function getCallerGroupGuard(
  section: Section,
  check: GroupCheck,
  sources: Sources | undefined,
  checksIn = section,
) {
  const write = getWriteGroups(section, sources);
  const value = getWriteGroupsValue(write, getGroupsConstant);
  const bit = value === undefined ? undefined : getPatchCheckBit(check, value);
  if (bit !== undefined) return t.numericLiteral(bit);
  const { groups, ungated } = write!;
  // One caller group's check is shared, as a write guard is.
  if (groups.length === 1 && !ungated) {
    const [groupSection, group] = groups[0];
    return getOrShareGroupCheck(checksIn, groupSection, group, check);
  }
  // The server's constant alone leaves `_unfilled_if` the render context.
  if (value === UpdatesFrom.Server && check === "_unfilled_if") {
    return callRuntime("_unfilled_if");
  }
  return callRuntime(check, ...buildWriteGroupArgs(write!));
}

// What `getCallerGroupGuard` folds to, without building it, so a guard deciding a
// never is asked before what it guards is built.
export function getCallerGroupBit(
  section: Section,
  check: GroupCheck,
  sources: Sources | undefined,
) {
  const value = getWriteGroupsValue(
    getWriteGroups(section, sources),
    getGroupsConstant,
  );
  return value === undefined ? undefined : getPatchCheckBit(check, value);
}

// Where a patch fills the binding: its caller groups are the server's.
function getFilledGuard(section: Section, binding: Binding) {
  return getCallerGroupGuard(section, "_filled_guard", binding.sources);
}

// Each caller group a write in `section` gates on, its `check` once, or'd
// onto `guard`, which already checks the groups in `checked`.
function orCallerGroupGuards(
  section: Section,
  guard: t.Expression | undefined,
  check: GroupCheck,
  list: Opt<Sources>,
  checked = new Set<ParamReasonGroup>(),
  own?: OwnParamGroup,
) {
  return orGroupChecks(
    section,
    guard,
    check,
    getCallerGroups(section, list, checked, []),
    own,
  );
}

// Each group's check or-ed onto `guard`: `1`, with none of them built, where one
// always holds.
function orGroupChecks(
  section: Section,
  guard: t.Expression | undefined,
  check: GroupCheck,
  groups: CallerGroup[],
  own: OwnParamGroup | undefined,
) {
  for (const [paramSection, group] of groups) {
    if (getStaticGroupBit(paramSection, group, check) === 1) {
      return t.numericLiteral(1);
    }
  }
  let expr = guard;
  for (const [paramSection, group, index] of groups) {
    expr = orGuard(
      expr,
      buildGroupCheck(section, paramSection, group, index, check, own),
    );
  }
  return expr;
}

// A group's check in `section`, shared but where it names the value's own group.
function buildGroupCheck(
  section: Section,
  paramSection: Section,
  group: ParamReasonGroup,
  index: number,
  check: GroupCheck,
  own: OwnParamGroup | undefined,
) {
  const ownArg = getOwnGroupArg(own, paramSection);
  return !ownArg
    ? getOrShareGroupCheck(section, paramSection, group, check)
    : callRuntime(check, ...getGroupArgs(paramSection, group, index), ownArg);
}

type CallerGroup = [
  paramSection: Section,
  group: ParamReasonGroup,
  index: number,
];

// Each caller group a write in `section` gates on, once, pushed onto `groups`: `seen`
// collects them by their section's own list entry, as one may be reached through several sets.
function getCallerGroups(
  section: Section,
  list: Opt<Sources>,
  seen: Set<ParamReasonGroup>,
  groups: CallerGroup[],
) {
  forEach(list, (sources) => {
    for (const [paramSection, group] of getWriteGroups(section, sources)
      .groups) {
      const index = getParamReasonGroupIndex(paramSection, group);
      const key = paramSection.paramReasonGroups![index];
      if (!seen.has(key)) {
        seen.add(key);
        groups.push([paramSection, group, index]);
      }
    }
  });
  return groups;
}

// Where a value a patch fills is still read unfilled: a client-sourced group,
// or (`unpatched`, a server-only source) a scope under unpatched structure.
function getUnfilledGuard(
  section: Section,
  params: Sources["param"],
  structure: SortedOpt<Sources>,
  unpatched: boolean,
  own?: OwnParamGroup,
) {
  // Each group once, keyed by its section's own list entry: param-selected
  // structure may gate on one the params already name.
  const checked = new Set<ParamReasonGroup>();
  const groups: CallerGroup[] = [];
  forEachParamGroup(params, (paramSection, group) => {
    const index = getParamReasonGroupIndex(paramSection, group);
    checked.add(paramSection.paramReasonGroups![index]);
    groups.push([paramSection, group, index]);
  });
  const wider = getCallerGroups(section, structure, checked, []);
  const guard = orGroupChecks(
    section,
    undefined,
    "_unfilled_if",
    // A structure group holding a params group of its section gets the client bit, or any
    // bit, wherever the params group does, so its check implies the params group's.
    groups
      .filter(
        ([paramSection, params]) =>
          !wider.some(
            ([groupSection, group]) =>
              groupSection === paramSection &&
              bindingUtil.isSuperset(group, params),
          ),
      )
      .concat(wider),
    own,
  );
  return unpatched ? orGuard(guard, callRuntime("_unfilled_if")) : guard!;
}

// Where content is live on the client: `true` where something renders it
// unconditionally (a `@catch` or `@placeholder` may, at any time).
function getClientBranchGuard(section: Section, contents: Opt<Section>) {
  let guard: t.Expression | undefined;
  const clientGroups = new Set<ParamReasonGroup>();
  forEach(contents, (content) => {
    const id = getResumeRegistryId(content, "content");
    const check = callRuntime(
      "_client_branch_if",
      t.stringLiteral(id),
      getScopeIdIdentifier(section),
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
// after resume (its write reason), a guarded one where no patch fills its reads.
function getUnfilledPatchWrite(section: Section, binding: Binding) {
  const contents = getClosureContents(binding);
  const reason = mapBodyParams(section, getWriteReason(binding));
  if (!contents && !reason) return;
  // Content taking the value as a closure needs it where the client keeps an instance.
  const guard = !isDynamicWriteGuard(section, reason)
    ? !reason && getClientBranchGuard(section, contents)
    : orCallerGroupGuards(
        section,
        contents && getClientBranchGuard(section, contents),
        "_unfilled_if",
        reason,
      );
  // None where the guard folds to never, decided before the write is built.
  if (!guard || !isNever(guard)) {
    let write: t.Expression = buildPatchWrite(
      section,
      binding,
      getPatchKey().MarkedWrite,
      getConstantSetup(section, binding),
    );
    // The walk re-runs subscribers where the write marked a change, so it ships after it;
    // a call may hand the client each subscriber's structure, unless no param selects one's.
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
      const { sources } = binding;
      write = t.logicalExpression(
        "&&",
        write,
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
      );
    }
    return andGuard(guard, write);
  }
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
// renders that content as a client branch (`_client_branch_if`).
function hasClientBranchGuard(binding: Binding) {
  return !!getClosureContents(getCanonicalBinding(binding));
}

// The dynamic tag contents between a read and the value that take it as a content
// closure; a define renders where it is called.
export const [getClosureContents] = createAnalysisMemo(
  computeClosureContents,
  undefined,
);

function computeClosureContents(binding: Binding) {
  const seen = new Set<Section>();
  let contents: SortedOpt<Section>;
  const visit = (section: Section) => {
    for (let cur = section; cur !== binding.section; cur = cur.parent!) {
      if (seen.has(cur)) return;
      seen.add(cur);
      forEach(cur.renderedBy, visitCall);
      if (bindingUtil.has(getDynamicTagContentClosures(cur), binding)) {
        contents = sectionUtil.add(contents, cur);
      }
    }
  };
  const visitCall = (call: KnownTagExtra) =>
    visit(call.childScopeBinding.section);
  forEach(binding.closureSections, visit);
  return contents;
}

// A constant group's value seeds a created scope alone: a live one holds it.
function getConstantSetup(section: Section, binding: Binding) {
  return ifEver(
    notGuard(getCallerGroupGuard(section, "_server_guard", binding.sources)),
  );
}

// What an entry depends on, as shells' hops (`>` per owner up), each where this instance's
// patch fills it (bare where the entry's guard checks its one group), joined as it renders.
function getReads(
  section: Section,
  roots: Binding[],
  check: GroupCheck,
  entryGroup?: ParamReasonGroup | false,
  checksIn?: Section,
) {
  let joined = "";
  const guarded: [t.Expression, string][] = [];
  for (const root of roots.reduce(addFilledReads, new Set<Binding>())) {
    const hop = getWriteHop(section, root);
    if (hop) {
      const sources = root.sources!;
      const guard =
        !(
          entryGroup &&
          !sources.global &&
          isGuardedReason(sources) &&
          getSoleCallerGroup(section, sources) === entryGroup
        ) && getCallerGroupGuard(section, check, sources, checksIn);
      if (!guard || isAlways(guard)) joined += " " + hop;
      // A read no call's patch fills names nothing.
      else if (!isNever(guard)) guarded.push([guard, hop]);
    }
  }
  if (!guarded.length) {
    return joined ? t.stringLiteral(joined.slice(1)) : undefined;
  }
  if (!joined && guarded.length === 1) {
    return andGuard(guarded[0][0], t.stringLiteral(guarded[0][1]));
  }
  // Each guarded read leads with its space, which a sum of only those drops.
  let sum: t.Expression | undefined = joined
    ? t.stringLiteral(joined.slice(1))
    : undefined;
  for (const [guard, hop] of guarded) {
    const read = t.conditionalExpression(
      guard,
      t.stringLiteral(" " + hop),
      t.stringLiteral(""),
    );
    sum = sum ? t.binaryExpression("+", sum, read) : read;
  }
  return joined
    ? sum
    : t.callExpression(t.memberExpression(sum!, t.identifier("slice")), [
        t.numericLiteral(1),
      ]);
}

// The one caller group a guard over `list` checks at `section`, if just one.
function getSoleCallerGroup(section: Section, list: Opt<Sources>) {
  const seen = new Set<ParamReasonGroup>();
  getCallerGroups(section, list, seen, []);
  const [sole, other] = seen;
  return other ? undefined : sole;
}

// A filled reference of a function a patch may bind: its change makes the function anew.
function isFilledReference(binding: Binding) {
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
      : reachesBoundHolder(fn, comparesIdentity, readsAsValue),
  false,
);

// A holder that compares a function by identity: a marked slot or a fill in its
// template, an effect or a fill in a call's.
function comparesIdentity(holder: Binding, own: boolean) {
  return (
    someAlias(holder, hasValueRead, undefined, true) &&
    !isInvokeOnlyBinding(holder) &&
    (own
      ? !!getPatchWrite(holder).write || !!getPatchFill(holder).fill
      : runsEffectOnPatch(holder) || !!getPatchFill(holder).fill)
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
function bindsLive(holder: Binding, own: boolean, expr?: t.NodeExtra) {
  return own
    ? getPatchWrite(holder).write || !!getPatchFill(holder).fill
    : runsEffectOnPatch(holder) ||
        !!getPatchFill(holder).fill ||
        intersectsClientState(holder, expr!.callSiteExprs);
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
  test: (holder: Binding, own: boolean, expr?: t.NodeExtra) => boolean,
  carries?: (binding: Binding, expr: ReferencedExtra) => boolean,
) {
  const { program } = fn.section!;
  // Each holder walks once what its value reaches: one choosing it, another template's
  // input, and on.
  const reaches = (holder: Binding) => {
    const seen = new Set<Binding>();
    const visit = (reached: Binding, expr?: t.NodeExtra): boolean => {
      if (seen.has(reached)) return false;
      seen.add(reached);
      return (
        test(reached, reached.section.program === program, expr) ||
        readsAsDynamicTagInput(reached) ||
        someAlias(
          reached,
          (alias) =>
            someDerivedRead(
              alias,
              (derived, expr) =>
                (!carries || carries(alias, expr)) && visit(derived, expr),
            ),
          undefined,
          true,
        )
      );
    };
    return visit(holder, fn);
  };
  // Its holders are what its root expression derives, and their parts, as main
  // registers it (`trackFunction`).
  return (
    isDynamicTagInput(fn) ||
    some((fn.exprRoot || fn).derives, (holder) => somePart(holder, reaches))
  );
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
function isScopeBoundFn(expr: t.NodeExtra) {
  const fn = expr as t.FunctionExtra;
  return !!(fn.referencesScope || fn.referencedLocalBindingsInFunction);
}

// The caller groups a closure's re-run by a write ships under: the written value's
// own, and those of the param-selected structure around the closure.
export function getClosureRenderGroups(closure: Binding, section: Section) {
  const { section: own } = closure;
  return {
    own: getCallerParamGroupsAt(closure.sources?.param, own),
    structure: (getCallerSelectedStructure(closure, section) || []).flatMap(
      (sources) => getCallerParamGroupsAt(sources.param, own),
    ),
  };
}

// A closure over a slot a patch writes, read by a child section the client may render (a
// `mixed` setup): the write re-renders it where no entry reaches; that child notifies deeper ones.
export function runsClosureByWrite(closure: Binding, section: Section) {
  const root = getCanonicalBinding(closure);
  return (
    section.parent === closure.section &&
    !isDynamicClosure(section, closure) &&
    getPatchWrite(root).write &&
    getCreatedSetup(section).get(closure)?.setup === "mixed" &&
    mayHandStructureToClient(closure, section)
  );
}

// A holder a dynamic tag's input reads as it is.
function readsAsDynamicTagInput(holder: Binding) {
  return someBindingRead(holder, isDynamicTagInput);
}

function isDynamicTagInput(expr: t.NodeExtra) {
  return expr.tagNameType === TagNameType.DynamicTag;
}

// The 2-bit value caller groups pass together, or'd into `bits`, where every call
// passes each as a constant; undefined where one composes at render.
export function getGroupsConstant(
  groups: [Section, ParamReasonGroup][],
  bits: number,
) {
  for (const [section, group] of groups) {
    const value = getStaticGroupValue(section, group);
    if (value === undefined) return;
    bits |= value;
  }
  return bits;
}

// The same as a mask value: what a child's mask composes for them, a constant group
// folded into `bits`, the rest read at render.
export function buildGroupsValue(
  groups: [Section, ParamReasonGroup][],
  bits: number,
) {
  let composed: t.Expression | undefined;
  for (const [section, group] of groups) {
    const value = getStaticGroupValue(section, group);
    if (value === undefined) composed = orMaskGroup(composed, section, group);
    else bits |= value;
  }
  if (!composed) return bits;
  return bits
    ? t.binaryExpression("|", t.numericLiteral(bits), composed)
    : composed;
}

// The groups' bits or'd at render.
function buildComposedGroupValue(groups: [Section, ParamReasonGroup][]) {
  let value: t.Expression | undefined;
  for (const [section, group] of groups) {
    value = orMaskGroup(value, section, group);
  }
  return value!;
}

function orMaskGroup(
  value: t.Expression | undefined,
  section: Section,
  group: ParamReasonGroup,
) {
  const bits = getOrShareSectionGuard(section, group, "_updates_from");
  return value ? t.binaryExpression("|", value, bits) : bits;
}

// Patch writers: the calls a flush's entries come from, with the param group
// guards, ownership args and boundary flags gating them.
import { types as t } from "@marko/compiler";

import type { Falsy } from "../../../common/types";
import {
  type Binding,
  bindingUtil,
  getCanonicalBinding,
  getDebugNames,
  isStateSourced,
  type ReferencedBindings,
} from "../bindings";
import { generateUidIdentifier } from "../generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
  getPatchKey,
} from "../get-accessor-enums";
import { getDeclaredBindingExpression } from "../get-declared-binding-expression";
import { forEach, type Opt, some, type SortedOpt, toArray } from "../optional";
import {
  getSourcesForExpr,
  getSourcesForRef,
  isUnconditionalReason,
  type Reason,
} from "../reasons";
import { getReferencedBindings } from "../references";
import {
  callRuntime,
  type HTMLRuntimeHelpers,
  importRuntime,
} from "../runtime";
import { getPrefixedScopeAccessor, getScopeAccessor } from "../scope-accessor";
import {
  forEachParamGroup,
  getCallerParamGroupsAt,
  getParamReasonGroupIndex,
  getRendererReason,
  getScopeIdIdentifier,
  isCalledBody,
  type ParamReasonGroup,
  type Section,
} from "../sections";
import {
  getHTMLSectionStatements,
  getResumeRegisterId,
  getScopeProperties,
  getSignals,
  toSequenceExpression,
} from "../signals";
import { type Sources, sourcesUtil } from "../sources";
import { createProgramState } from "../state";
import {
  andGuard,
  buildComposedGroupValue,
  buildGroupMask,
  getClientGuard,
  getGroupArgs,
  getWriteReason,
  isDynamicWriteGuard,
  getSectionWriteReason,
  orGuard,
} from "../write-guard";
import {
  getWriteSources,
  isStableExpr,
  isStableWrite,
  isStateSourcedExpr,
} from "./decisions";
import {
  getCreatedJoins,
  getFillConditions,
  getPatchFillBindings,
  getPatchFillKey,
  hasPatchEffect,
  isCreatableBody,
  isCreatedScopeSeed,
  isPatchFillBinding,
  isPatchWriteBinding,
  patchCreates,
  patchFillsClientReads,
  patchFillsSubscribedReads,
  splitsContentFill,
  subscribesCreated,
} from "./refresh";
import { isBranchPathSection } from "./structure";

// A section's patch entries beside its resume data: effect re-runs, the setup
// a created scope gets, and the fills a called body writes as `_scope`'s else.
export function writePatchResumeStatements(
  section: Section,
  body: t.Statement[],
) {
  const pendingProperties = getScopeProperties(section);
  // Root state seeds (below); a plain write would clobber the client's.
  const fillCalls: t.Expression[] = [];
  forEach(getPatchFillBindings(section), (binding) => {
    if (!isStateSourced(binding)) {
      fillCalls.push(
        gatePatchWrite(
          section,
          binding,
          buildPatchValue(section, binding),
          isPatchWriteBinding(binding)
            ? getPatchWrite(section, binding)
            : undefined,
          splitsContentFill(binding)
            ? buildPatchValue(section, binding, true)
            : undefined,
        ),
      );
    }
  });

  // Effect-read values need no client registration: the wire writes the
  // accessor and each reading effect re-runs by register id on change.
  forEach(section.bindings, (binding) => {
    if (isPatchWriteBinding(binding) && !isPatchFillBinding(binding)) {
      // A branch local writes at its declaration (`translateVar`), other
      // branch bindings up front; a called body's ride the reason's complement.
      if (isCalledBody(section)) {
        fillCalls.push(
          gatePatchWrite(section, binding, getPatchWrite(section, binding)),
        );
      } else if (!getWrittenLocalFills().has(binding)) {
        getHTMLSectionStatements(section).push(
          t.expressionStatement(writeLocalWrite(section, binding)),
        );
      }
    }
  });
  // One entry per effect listing its effect-read accessors, grouped under
  // a numeric owner-hop token, so a patch changing several re-runs it ONCE.
  for (const signal of getSignals(section).values()) {
    if (signal.hasHTMLEffect) {
      const byHops: string[][] = [];
      forEach(signal.referencedBindings, (binding) => {
        const root = getCanonicalBinding(binding);
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
            callPatchRuntime(
              "_patch_effect",
              section,
              getPatchKey().Effect +
                getResumeRegisterId(section, signal.referencedBindings),
              t.stringLiteral(aborts ? accessors + "!" + aborts : accessors),
            ),
          ),
        );
      }
    }
  }

  // A created scope has no resume data: what its resumed twin reads from
  // the document and nothing else supplies arrives as a setup write.
  forEach(section.bindings, (binding) => {
    if (isCreatedScopeSeed(binding) && getWriteReason(binding)) {
      body.push(
        t.expressionStatement(
          buildPatchWrite(section, binding, undefined, t.numericLiteral(1)),
        ),
      );
    }
  });

  // Each join whose output the client owns renders once the flush settles.
  for (const join of getCreatedJoins(section) || []) {
    body.push(
      t.expressionStatement(
        buildClientInit(
          section,
          "_client_guard",
          getSourcesForRef(join),
          getResumeRegisterId(section, join, "init"),
        ),
      ),
    );
  }

  // A created content scope subscribes to the root params no patch fills
  // there: client-sourced ones, or any in unpatched structure (a `@catch`).
  if (patchCreates(section)) {
    forEach(section.referencedClosures, (closure) => {
      if (subscribesCreated(section, closure)) {
        body.push(
          t.expressionStatement(
            buildClientInit(
              section,
              "_unfilled_if",
              closure.sources,
              getResumeRegisterId(section, closure, "init"),
            ),
          ),
        );
      }
    });
  }

  // A `<return>` handler's slot holds its bind (`buildReturnChangeBind`), which
  // returns the handler: hoisted, a patch update binds it too.
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

  // A body a flush may create seeds its state in the setup envelope; content
  // an attribute tag `<for>` creates also seeds its loop params.
  if (
    isCalledBody(section) ||
    isCreatableBody(section) ||
    (!!section.localClosures && isBranchPathSection(section))
  ) {
    forEach(getPatchFillBindings(section), (binding) => {
      if (!isStateSourced(binding)) {
        // A local with no state source writes plainly once it exists (a called
        // body's fills already write as the scope reason's complement).
        if (!isCalledBody(section) && !getWrittenLocalFills().has(binding)) {
          getHTMLSectionStatements(section).push(
            t.expressionStatement(writeLocalFill(section, binding)),
          );
        }
        return;
      }
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
            buildPatchValue(section, binding),
          ),
        ),
      );
    }
  }

  return fillCalls;
}

// A controlled `<let>`'s value, a fill while its handler controls it and the
// server owns its controller, else a seed; then its handler binds.
function buildLetChangeWrites(
  section: Section,
  binding: Binding,
  change: { expression: t.Expression; reason: Reason },
) {
  // A param-sourced handler binds only under server ownership.
  const bindOwnership = change.reason.always
    ? []
    : getPatchWriteOwnership(section, change.reason);
  const bindKey =
    getPatchKey().Bind +
    getPrefixedScopeAccessor(binding, getAccessorPrefix().TagVariableChange);
  const controller = getSourcesForExpr(binding.derivedFrom as t.NodeExtra);
  if (controller?.state) {
    // A state-sourced controller is the client's: the value only seeds.
    return [
      buildPatchValue(section, binding, undefined, t.numericLiteral(1)),
      callPatchRuntime(
        "_patch_bind",
        section,
        bindKey,
        t.cloneNode(change.expression),
        ...bindOwnership,
      ),
    ];
  }
  const ownership = getPatchWriteOwnership(section, controller);
  return [
    callPatchRuntime(
      "_patch_let_change",
      section,
      getPatchKey().Value + getPatchFillKey(binding),
      getDeclaredBindingExpression(binding),
      t.stringLiteral(bindKey),
      t.cloneNode(change.expression),
      ownership[0],
      ownership[1],
      ...bindOwnership,
    ),
  ];
}

// A created scope's `<let>` seeds what the document writes of it: all of it
// where assigned or written whole, else each member the document writes.
function buildLetSeeds(section: Section, binding: Binding) {
  const seed = t.numericLiteral(1);
  if (binding.assignments || getWriteReason(binding)) {
    return [buildPatchValue(section, binding, undefined, seed)];
  }
  const writes: t.Expression[] = [];
  const addMemberSeeds = (member: Binding) => {
    for (const alias of member.propertyAliases.values()) {
      if (getWriteReason(alias)) {
        writes.push(buildPatchWrite(section, alias, undefined, seed));
      } else {
        addMemberSeeds(alias);
      }
    }
  };
  addMemberSeeds(binding);
  return writes;
}

// Plain fill write of a branch local with no state source, gated at runtime
// by its group's ownership; an unfilled instance re-derives via closure inits.
export function writeLocalFill(section: Section, binding: Binding) {
  getWrittenLocalFills().add(binding);
  const write = buildPatchValue(section, binding);
  const filledGuard = getCallerGroupGuard(
    section,
    "_filled_guard",
    getSourcesForRef(binding),
  );
  if (!filledGuard) return write;
  // Only a closure the section reads re-derives through its init; a value
  // its creator passes (a loop param) has none to run.
  const inits = toArray(
    bindingUtil.intersection(
      binding.sources?.param,
      section.referencedClosures,
    ),
    (param) =>
      callPatchRuntime(
        "_patch_init",
        section,
        getResumeRegisterId(section, param, "init"),
      ),
  );
  return inits.length
    ? t.conditionalExpression(filledGuard, write, toSequenceExpression(inits))
    : t.logicalExpression("&&", filledGuard, write);
}

// Plain write of a branch local with no state source that effects or handlers
// read, gated like the root's writes.
export function writeLocalWrite(section: Section, binding: Binding) {
  getWrittenLocalFills().add(binding);
  const write = getPatchWrite(section, binding);
  const filledGuard = getCallerGroupGuard(
    section,
    "_filled_guard",
    getSourcesForRef(binding),
  );
  return andGuard(filledGuard, write);
}

// A value a patch fills every client read of: a page ships it for the
// client-sourced groups, or where its scope renders under unpatched structure.
export function getUnfilledValueIfWritten(
  section: Section,
  binding: Binding,
  reason: Reason | undefined,
  expr: t.Expression,
) {
  return buildUnfilledIfWritten(
    section,
    reason,
    expr,
    patchFillsClientReads(binding),
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
    patchFillsSubscribedReads(closure),
  );
}

function buildUnfilledIfWritten(
  section: Section,
  reason: Reason | undefined,
  expr: t.Expression,
  rebuilds: SortedOpt<Sources> | false,
) {
  if (rebuilds === false || !isDynamicWriteGuard(section, reason)) return;
  return t.logicalExpression(
    "&&",
    getUnfilledGuard(section, reason.param, rebuilds, !!reason.global),
    expr,
  );
}

// A boundary branch every patch page renders, so it pairs without creating;
// the server drops the elision at render where a branch encloses.
export function boundaryAlwaysPairs(bodySection: Section) {
  if (!getSectionWriteReason(bodySection)) return false;
  for (let s: Section | undefined = bodySection; s; s = s.parent) {
    if (s.branch?.optional || s.boundaryContent) return false;
    // A content section can materialize at any consumer (or none), so nothing
    // below it is provably live and unique on every page.
    if (s !== bodySection && !s.branch && s.parent) return false;
  }
  return true;
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

// A fill's patch write; a `seed` applies it only to a scope the flush creates.
export function buildPatchValue(
  section: Section,
  binding: Binding,
  content?: boolean,
  seed?: t.Expression,
) {
  return callPatchRuntime(
    "_patch_value",
    section,
    getPatchKey().Value + getPatchFillKey(binding, content),
    getDeclaredBindingExpression(binding),
    seed,
  );
}

export function buildPatchWrite(
  section: Section,
  binding: Binding,
  value: t.Expression = getDeclaredBindingExpression(binding),
  seed?: t.Expression,
) {
  return callPatchRuntime(
    "_patch_write",
    section,
    getPatchKey().Write + getScopeAccessor(binding),
    value,
    seed,
  );
}

// A `<return>` handler binds where its sources' owner is the server; a
// state-sourced one is the client's, so only a created scope takes it.
export function buildReturnChangeBind(
  section: Section,
  handler: t.Expression,
  extra: t.NodeExtra,
) {
  return callPatchRuntime(
    "_patch_bind",
    section,
    getPatchKey().Bind + getAccessorProp().TagVariableChange,
    handler,
    ...getPatchWriteOwnership(
      section,
      getWriteSources(extra),
      isStableExpr(extra) || isStateSourcedExpr(extra),
    ),
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
    ...getExprWriteOwnership(section, extra),
  );
}

// A created scope runs the init where `check` holds for the sources' groups.
export function buildClientInit(
  section: Section,
  check: "_client_guard" | "_unfilled_if",
  sources: Sources | undefined,
  initId: string,
) {
  return t.logicalExpression(
    "&&",
    getCallerGroupGuard(section, check, sources)!,
    callPatchRuntime("_patch_init", section, initId),
  );
}

// Ownership args for an expression's write in `section`; a value fixed for the
// scope's lifetime (constant, `<id>`, `<define>`) only seeds a created scope.
export function getExprWriteOwnership(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getWriteSources(extra);
  return getPatchWriteOwnership(
    section,
    sources,
    !!extra && isStableWrite(extra, sources),
  );
}

// A patch writer's trailing `[mask, groupIdx]` ownership args, or `[]` when
// a write in `section` gates on no group of the sources' params.
export function getPatchWriteOwnership(
  section: Section,
  sources: Sources | undefined,
  stable?: boolean,
): [t.Expression, t.Expression] | [] {
  // Never changes: the write only seeds a created scope, as under a group
  // mask of `0`.
  if (stable) return [t.numericLiteral(0), t.numericLiteral(0)];
  const groups = getCallerParamGroupsAt(sources?.param, section);
  if (groups.length > 1) {
    // A `<define>` body's group beside its template's: one mask composes
    // them, as a call site composes its child's.
    return [
      buildGroupMask([
        {
          value: buildComposedGroupValue(groups),
          names: getDebugNames(sources!.param),
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
  const args = getPatchWriteOwnership(section, sources);
  return args.length ? callRuntime(check, ...args) : undefined;
}

// Each caller group a write in `section` gates on, its `check` once, or'd
// onto `guard`, which already checks the groups in `checked`.
export function orCallerGroupGuards(
  section: Section,
  guard: t.Expression | undefined,
  check: HTMLRuntimeHelpers,
  list: Opt<Sources>,
  checked?: ReadonlySet<ParamReasonGroup>,
) {
  let expr = guard;
  const seen = new Set<ParamReasonGroup>();
  forEach(list, (sources) => {
    for (const [paramSection, group] of getCallerParamGroupsAt(
      sources.param,
      section,
    )) {
      const index = getParamReasonGroupIndex(paramSection, group);
      const key = paramSection.paramReasonGroups![index];
      if (!checked?.has(key) && !seen.has(key)) {
        seen.add(key);
        const part = callRuntime(
          check,
          ...getGroupArgs(paramSection, group, index),
        );
        expr = orGuard(expr, part);
      }
    }
  });
  return expr;
}

// Where a value a patch fills is still read unfilled: a client-sourced group,
// or (`unpatched`, a server-only source) a scope under unpatched structure.
export function getUnfilledGuard(
  section: Section,
  params: Sources["param"],
  rebuilds: SortedOpt<Sources>,
  unpatched: boolean,
) {
  let guard: t.Expression | undefined;
  // Each group once, keyed by its section's own list entry: a rebuild may
  // gate on one the params already name.
  const checked = new Set<ParamReasonGroup>();
  forEachParamGroup(params, (paramSection, group) => {
    const index = getParamReasonGroupIndex(paramSection, group);
    checked.add(paramSection.paramReasonGroups![index]);
    const part = callRuntime(
      "_unfilled_if",
      ...getGroupArgs(paramSection, group, index),
    );
    guard = orGuard(guard, part);
  });
  guard = orCallerGroupGuards(
    section,
    guard,
    "_unfilled_if",
    rebuilds,
    checked,
  );
  if (unpatched) guard = orGuard(guard, callRuntime("_unfilled_if"));
  return guard!;
}

// A fill runs under its group's ownership; a conditional one only where its
// conditions hold, else `otherwise`, or `contentWrite` for withheld content.
function gatePatchWrite(
  section: Section,
  binding: Binding,
  write: t.Expression,
  otherwise?: t.Expression,
  contentWrite?: t.Expression,
) {
  let guard: t.Expression | undefined = getCallerGroupGuard(
    section,
    "_filled_guard",
    getSourcesForRef(binding),
  );
  let expr = write;
  const conditions = getFillConditions(binding);
  if (conditions) {
    let needed = orCallerGroupGuards(
      section,
      undefined,
      "_client_guard",
      sourcesUtil.union(conditions.rebuilds, conditions.joins),
    );
    needed = orCallerGroupGuards(
      section,
      needed,
      "_filled_guard",
      conditions.fills,
    );
    // Content client code renders unconditionally (a `@catch` or
    // `@placeholder` may, at any time) is never rendered for good: it fills.
    const always = some(conditions.contents, rendersUnconditionally);
    let withheld: t.Expression | undefined;
    if (!always) {
      forEach(conditions.contents, (content) => {
        let term: t.Expression = callRuntime(
          "_content_withheld",
          t.stringLiteral(getResumeRegisterId(content, "content")),
        );
        // Live on the client only where what renders it is the client's.
        const reason = getRendererReason(content);
        const client = reason && getClientGuard(section, reason);
        if (client) term = t.logicalExpression("&&", term, client);
        withheld = orGuard(withheld, term);
      });
    }
    if (contentWrite && (always || withheld)) {
      const content = !withheld
        ? contentWrite
        : otherwise
          ? t.conditionalExpression(withheld, contentWrite, otherwise)
          : t.logicalExpression("&&", withheld, contentWrite);
      expr = needed ? t.conditionalExpression(needed, write, content) : content;
      needed = undefined;
    } else if (always) {
      needed = undefined;
    } else if (withheld) {
      needed = orGuard(needed, withheld);
    }
    if (needed && otherwise) {
      expr = t.conditionalExpression(needed, expr, otherwise);
    } else if (needed) {
      guard = andGuard(guard, needed);
    }
  }
  return andGuard(guard, expr);
}

function rendersUnconditionally(content: Section) {
  const reason = getRendererReason(content);
  return !!reason && isUnconditionalReason(reason);
}

// A capture only patch-filled reads use is kept fresh where it is still
// read unfilled; a patch renders every other read itself.
function getPatchWrite(section: Section, binding: Binding) {
  const write = buildPatchWrite(section, binding);
  const rebuilds = patchFillsSubscribedReads(binding);
  return rebuilds === false
    ? write
    : t.logicalExpression(
        "&&",
        getUnfilledGuard(section, undefined, rebuilds, true),
        write,
      );
}

// Locals whose declaration already wrote their fill or write
// (`translateVar`), so the section's leading writes cover only the rest.
const [getWrittenLocalFills] = createProgramState(() => new Set<Binding>());

// The abort ids of the section's `$signal` roots whose work `references` keys.
function getAbortIds(section: Section, references: ReferencedBindings) {
  let ids = "";
  const roots = section.abortSignalExprs;
  // A root's abort id is its index.
  if (roots) {
    for (let id = 0; id < roots.length; id++) {
      if (getReferencedBindings(roots[id]) === references) {
        ids += (ids && " ") + id;
      }
    }
  }
  return ids;
}

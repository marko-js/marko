import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import {
  type Binding,
  BindingType,
  type Getter,
  type Intersection,
  type ParamBinding,
  type ReferencedBindings,
  bindingUtil,
  compareIntersections,
  getAliasRoot,
  someAlias,
  getBindings,
  getCanonicalBinding,
  getAssignedObject,
  getPropertyPath,
  isDirectAlias,
  isParamBinding,
  propsUtil,
} from "./bindings";
import { finalizeContentDerives } from "./content-derives";
import { generateUid } from "./generate-uid";
import { isPatch } from "./marko-config";
import {
  addSorted,
  every,
  concat,
  filter,
  findSorted,
  forEach,
  first,
  last,
  type Opt,
  type SortedOneMany,
  push,
  reduce,
  some,
} from "./optional";
import { hasEffectRead } from "./patch/refresh";
import {
  addAlwaysReason,
  addOwnerReason,
  addReasonExprs,
  addReason,
  applyReasonExprs,
  getSourcesForExpr,
  getSourcesForRef,
  mapParamBindingToExpr,
} from "./reasons";
import {
  type AssignedBindingExtra,
  type Read,
  type ReferencedExtra,
  type ResolvedRead,
  createResolvedGetterRead,
  createResolvedRead,
  dropExtra,
  getAssignments,
  getCanonicalExtra,
  getFunctionReadsByExpression,
  getGlobalReads,
  getNameReadByExpression,
  getReadsByExpression,
  getReferencedBindings,
  getReferenceFinalizers,
  getValueReferences,
  isReferencedExtra,
  setResolvedFunctionReads,
  setNameRead,
  setResolvedReads,
} from "./references";
import {
  forEachSection,
  getDirectClosures,
  isOptionalBranch,
  type Section,
  sectionUtil,
  setReadsOwner,
  StructureKind,
  type StructureOp,
  finalizeEnclosing,
} from "./sections";
import { addSetupWork } from "./setup-work";
import { ensureSectionSlot, ensureSlot, SlotKind } from "./slots";
import { addGlobalReadReasons } from "./solve-reasons";
import {
  ALWAYS,
  type Sources,
  createSources,
  globalSources,
  mergeSources,
  withSources,
} from "./sources";
import { createAnalysisState } from "./state";

// Settles reads, assignments, pruning, sources and the reasons tags add, before
// the solve; each section's intersections are what the solve and ids read.
export function finalizeReferences() {
  const intersectionsBySection = new Map<Section, Intersection[]>();
  settleAssignments();
  pruneBindings();
  removeDroppedAssignments();
  excludeAssignedChangeHandlers();
  resolveReads(intersectionsBySection);
  forEachSection(finalizeContentDerives);
  resolveBindings();
  forEachSection(finalizeEnclosing);
  forEachSection(addSectionReasons);
  for (const finalize of getReferenceFinalizers()) {
    finalize();
  }
  forEachSection(applyReasonExprs);
  getReadsByExpression().clear();
  return intersectionsBySection;
}

// Only emitted assignments count, so pruning can ask each binding directly.
function settleAssignments() {
  for (const idExtra of getAssignments()) {
    if (inEmittedExpr(idExtra)) {
      const binding = idExtra.assignment;
      binding.assignments = push(binding.assignments, idExtra);
    }
  }
}

function pruneBindings() {
  const bindings = getBindings();
  for (const binding of bindings) {
    if (binding.type !== BindingType.dom) {
      if (pruneBinding(binding)) {
        bindings.delete(binding);
      }
    }
  }
}

// An assignment inside a value pruning dropped leaves its binding.
function removeDroppedAssignments() {
  for (const idExtra of getAssignments()) {
    if (!inEmittedExpr(idExtra)) {
      const binding = idExtra.assignment;
      binding.assignments = filter(binding.assignments, inEmittedExpr);
    }
  }
}

// Translate pulls an assigned property's change handler out of its pattern, so
// the rest of that same pattern no longer holds it.
function excludeAssignedChangeHandlers() {
  const excluded = new Set<Binding>();
  for (const { assignment: binding } of getAssignments()) {
    if (
      binding.assignments &&
      binding.aliasOf &&
      binding.property !== undefined &&
      !excluded.has(binding)
    ) {
      excluded.add(binding);
      for (const alias of binding.aliasOf.aliases) {
        if (propsUtil.has(alias.excludeProperties, binding.property)) {
          alias.excludeProperties = propsUtil.add(
            alias.excludeProperties,
            binding.property + "Change",
          );
        }
      }
    }
  }
}

function resolveReads(intersectionsBySection: Map<Section, Intersection[]>) {
  const fnReadsByExpression = getFunctionReadsByExpression();
  const nameReadByExpression = getNameReadByExpression();
  for (const [expr, reads] of getReadsByExpression()) {
    if (isReferencedExtra(expr)) {
      const exprBindings = resolveReferencedBindings(
        expr,
        reads,
        intersectionsBySection,
      );
      setResolvedReads(
        expr,
        exprBindings.referencedBindings,
        exprBindings.lazyBindings,
        exprBindings.constantBindings,
        exprBindings.globalBindings,
      );
      const nameRead = nameReadByExpression.get(expr)?.extra.read;
      if (nameRead) setNameRead(expr, nameRead);
      if (exprBindings.globalBindings) {
        (expr.section.globalReadExprs ||= []).push(expr);
      }
      if (!exprBindings.referencedBindings) {
        // With no resolved references, any statement this expression keys
        // lands in its section's setup signal.
        addSetupWork(expr.section);
      }
      forEach(exprBindings.lazyBindings, markLazyRead);
      if (exprBindings.closureBindings) {
        expr.section.referencedClosures = bindingUtil.union(
          expr.section.referencedClosures,
          exprBindings.closureBindings,
        );
      }
      if (exprBindings.closureSection) {
        setReadsOwner(expr.section, exprBindings.closureSection);
        if (readsValuesOnResume(expr)) {
          addOwnerReason(expr.section, exprBindings.closureSection, ALWAYS);
        }
      }
      if (exprBindings.hoistedSection) {
        setReadsOwner(expr.section, exprBindings.hoistedSection);
        addOwnerReason(expr.section, exprBindings.hoistedSection, ALWAYS);
      }

      if (expr.isEffect) {
        if (readsValuesOnResume(expr)) {
          forEach(exprBindings.referencedBindings, addAlwaysReason);
          forEach(exprBindings.constantBindings, addAlwaysReason);
        }
        forEach(exprBindings.lazyBindings, addAlwaysReason);
      } else {
        // A value retained as written keeps what it reads outside a function,
        // so client code reads those with it.
        forEach(reads, (read) => {
          if (!read.fnRoot && read.extra.exprRoot?.retained) {
            addReasonExprs(ensureSlot(read.binding), expr);
          }
        });
      }

      if (exprBindings.allBindings) {
        const exprFnReads = fnReadsByExpression.get(expr);
        if (exprFnReads) {
          for (const [fn, fnReads] of exprFnReads) {
            const fnBindings =
              fn === expr
                ? exprBindings
                : resolveReferencedBindingsInFunction(
                    expr,
                    exprBindings.allBindings,
                    fnReads,
                  );
            // The function itself still reads lazy bindings when invoked.
            setResolvedFunctionReads(
              fn,
              fn === expr
                ? bindingUtil.union(
                    fnBindings.referencedBindings,
                    exprBindings.lazyBindings,
                  )
                : fnBindings.referencedBindings,
              fnBindings.constantBindings,
            );
          }
        }
      }
    }
  }
}

// Sources, names, hoists, section membership, and closures, per binding.
function resolveBindings() {
  const bindingNamesBySection = new Map<Section, Set<string>>();
  for (const binding of getBindings()) {
    const { name, section } = binding;
    // `$global` bindings resolve sources only: no collision rename (it
    // would burn a UID and shift later generated names), no section
    // membership, no closures — reads compile verbatim.
    if (binding.type === BindingType.global) {
      resolveBindingSources(binding);
      continue;
    }
    if (binding.type !== BindingType.dom) {
      resolveBindingSources(binding);

      forEach(binding.assignments, ({ section: assignedSection }) => {
        setReadsOwner(assignedSection, section);
        // Deliberately `ALWAYS`, not `binding.sources`: narrowing is a 0-byte no-op until a state-dropping pass exists.
        addOwnerReason(assignedSection, section, ALWAYS);
      });

      let bindingNames = bindingNamesBySection.get(section);
      if (!bindingNames) {
        bindingNamesBySection.set(section, (bindingNames = new Set()));
        forEach(section.bindings, ({ name }) => bindingNames!.add(name));
      }
      if (bindingNames.has(binding.name)) {
        binding.name = generateUid(name);
      }
    }

    if (binding.hoists) {
      const highestHoistSection = first(binding.hoists);
      addAlwaysReason(binding);
      binding.section.hoisted = bindingUtil.add(
        binding.section.hoisted,
        binding,
      );

      // Each owner up to the hoist holds its child's scopes, which an
      // optional branch's own scopes already are.
      for (
        let section = binding.section;
        section !== highestHoistSection;
        section = section.parent!
      ) {
        if (!isOptionalBranch(section)) {
          addReason(
            ensureSectionSlot(section, SlotKind.Instances, section.parent!),
            ALWAYS,
          );
        }
        if (section.parent !== highestHoistSection) {
          section.parent!.isHoistThrough = true;
        }
      }
    }

    const canonicalBinding = getCanonicalBinding(binding);
    section.bindings = bindingUtil.add(section.bindings, canonicalBinding);
    bindingNamesBySection.get(section)?.add(canonicalBinding.name);
    if (binding.localOf) {
      section.localClosures = bindingUtil.add(section.localClosures, binding);
    }
  }
}

function addSectionReasons(section: Section) {
  // A call links the body's scope to its owner through the calling scopes;
  // sections run in order, so a body's own calls come after it.
  if (section.readsOwner) {
    forEach(section.callSections, (callSection) => {
      setReadsOwner(callSection, section.parent!);
    });
  }

  if (section.isHoistThrough) {
    addReason(ensureSectionSlot(section, SlotKind.Scope), ALWAYS);
  }

  // A closure's changes reach the section through its owner chain.
  forEach(section.referencedClosures, (closure) => {
    closure.closureSections = sectionUtil.add(closure.closureSections, section);
    addOwnerReason(section, closure.section, closure.sources);
  });

  if (isOptionalBranch(section)) {
    const closureSources = getSourcesForRef(getDirectClosures(section));
    const branchSlot = ensureSectionSlot(section, SlotKind.Branch);
    addReason(
      branchSlot,
      section.isHoistThrough || section.hoisted
        ? mergeSources(ALWAYS, closureSources)
        : closureSources,
    );
    addReasonExprs(branchSlot, section.branchExpr);
    addReasonExprs(ensureSlot(section.branch.nodeBinding), section.branchExpr);
  }

  addGlobalReadReasons(section);
}

// Dense per-section ids for bindings, intersections, and closure accessors.
export function allocateIds(
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  const closureIdEnds = new Map<Section, number>();
  forEachSection((section) => {
    const { bindings } = section;
    const intersectionSources = new Map<Intersection, Binding | undefined>();
    const intersectionMeta = (section.intersections = new Map());
    const intersections = (intersectionsBySection.get(section) || []).filter(
      (intersection) => {
        const source = getIntersectionSource(
          intersection,
          section,
          intersectionSources,
        );
        if (source) intersectionMeta.set(intersection, { source });
        return !source;
      },
    );
    let anchors: Map<Intersection, Binding | undefined> | undefined;
    if (intersections.length) {
      const sectionAnchors = (anchors = new Map());
      for (const intersection of intersections) {
        // Members are of the section or its ancestors, so owned ones trail.
        const anchor = last(intersection);
        if (anchor.section === section) {
          sectionAnchors.set(intersection, anchor);
        }
      }

      // Renders run in id order, so a closure-only intersection must come
      // before the owned derived binding that may derive from it.
      intersections.sort((a, b) => {
        const aAnchor = sectionAnchors.get(a);
        const bAnchor = sectionAnchors.get(b);
        return aAnchor
          ? bAnchor
            ? bindingUtil.compare(aAnchor, bAnchor)
            : 1
          : bAnchor
            ? -1
            : 0;
      });
    }

    let intersectionIndex = 0;
    let nextId = 0;
    // The walker stores each node it reaches at the next scope index, so the
    // walk numbers the section's dom bindings.
    const walked = new Set<Binding>();
    for (const op of section.structure || []) {
      const binding = getWalkedBinding(op);
      if (binding) {
        walked.add(binding);
        binding.id = nextId++;
        nextId += binding.reserveSize;
      }
    }
    let intersection: Intersection;
    const assignIntersectionId = (intersection: Intersection) => {
      intersectionMeta.set(intersection, {
        source: undefined,
        id: nextId++,
        returnedBy: getLastOwnSourceReturn(intersection, section),
      });
    };
    forEach(bindings, (binding) => {
      if (walked.has(binding)) return;
      // Unanchored intersections slot in right after the dom ids, ahead of
      // every other owned binding.
      if (binding.type !== BindingType.dom) {
        while (
          intersectionIndex < intersections.length &&
          !anchors!.get((intersection = intersections[intersectionIndex]))
        ) {
          intersectionIndex++;
          assignIntersectionId(intersection);
        }
      }
      binding.id = nextId++;
      nextId += binding.reserveSize;
      while (
        intersectionIndex < intersections.length &&
        anchors!.get((intersection = intersections[intersectionIndex])) ===
          binding
      ) {
        intersectionIndex++;
        assignIntersectionId(intersection);
      }
    });

    while (intersectionIndex < intersections.length) {
      intersection = intersections[intersectionIndex];
      intersectionIndex++;
      assignIntersectionId(intersection);
    }

    // Closure accessor ids trail the id space, then every ancestor's closure ids,
    // so the closures one section reads never share a signal index key.
    let closureId = section.parent ? closureIdEnds.get(section.parent)! : 0;
    forEach(bindings, (binding) => {
      if (binding.closureSections) {
        closureId = Math.max(closureId, nextId);
        binding.closureId = closureId++;
      }
    });
    closureIdEnds.set(section, closureId);
  });
}

function getWalkedBinding(op: StructureOp) {
  return typeof op === "object" &&
    (op.kind === StructureKind.Node || op.kind === StructureKind.Child)
    ? op.binding
    : undefined;
}

// The last tag in this section whose child returns a value the intersection
// reads or derives from, whose scope offset the intersection renders after.
function getLastOwnSourceReturn(intersection: Intersection, section: Section) {
  let last: Binding | undefined;
  const seen = new Set<Binding>();
  // Another section's tag has no scope offset on this scope.
  const track = (binding: Binding) => {
    if (binding.section === section && !seen.has(binding)) {
      seen.add(binding);
      const { returnedBy } = getAliasRoot(binding);
      if (returnedBy && (!last || last.id < returnedBy.scope.id)) {
        last = returnedBy.scope;
      }
      if (binding.derivedFrom) {
        forEach(getValueReferences(binding.derivedFrom), track);
      }
      forEach(binding.sources?.state, track);
      forEach(binding.sources?.param, track);
    }
  };
  forEach(intersection, track);
  return last;
}

function getIntersectionSource(
  intersection: Intersection,
  section: Section,
  resolved: Map<Intersection, Binding | undefined>,
) {
  if (!resolved.has(intersection)) {
    resolved.set(intersection, undefined);
    resolved.set(
      intersection,
      resolveIntersectionSource(intersection, section, resolved),
    );
  }
  return resolved.get(intersection);
}

function resolveIntersectionSource(
  intersection: Intersection,
  section: Section,
  resolved: Map<Intersection, Binding | undefined>,
) {
  let sources: Sources | undefined;
  for (const member of intersection) {
    if (!member.sources) return undefined;
    if (member.section !== section || isDirectAlias(member)) return undefined;
    const rootIntersection = getRootIntersection(member);
    if (
      rootIntersection &&
      rootIntersection !== intersection &&
      !getIntersectionSource(rootIntersection, section, resolved)
    ) {
      return undefined;
    }
    sources = mergeSources(sources, member.sources);
  }

  if (!sources || (sources.state && sources.param)) {
    return undefined;
  }

  const source = sources.state || sources.param;
  return source &&
    !Array.isArray(source) &&
    source.section === section &&
    !source.returnedBy
    ? source
    : undefined;
}

const [getResolvedSources] = createAnalysisState(() => new Set<Binding>());

function resolveBindingSources(binding: Binding) {
  const resolvedSources = getResolvedSources();
  if (resolvedSources.has(binding)) return;
  resolvedSources.add(binding);

  switch (binding.type) {
    case BindingType.let: {
      const aliasRoot = getAliasRoot(binding);
      if (aliasRoot !== binding) {
        resolveBindingSources(aliasRoot);
        binding.sources = aliasRoot.sources;
      } else if (binding.assignments) {
        binding.sources = createSources(binding, undefined);
        if (isPatch()) resolveInitialValue(binding);
      } else {
        resolveRootSources(binding);
      }
      return;
    }
    case BindingType.param:
      binding.sources = createSources(
        undefined,
        getCanonicalBinding(binding) as ParamBinding,
      );
      return;
    case BindingType.global:
      binding.sources = globalSources;
      return;
  }

  const aliasRoot = getAliasRoot(binding);
  if (aliasRoot !== binding) {
    if (!resolvedSources.has(aliasRoot)) {
      resolvedSources.add(aliasRoot);
      resolveRootSources(aliasRoot);
    }

    binding.sources = aliasRoot.sources;
  } else {
    resolveRootSources(binding);
  }
}

// Fixed at creation from what a later server render computes anew: a patch
// leaves the value client-held once created, a state root.
function resolveRootSources(binding: Binding) {
  resolveDerivedSources(binding);
  if (
    isPatch() &&
    !binding.sources &&
    ((binding.type === BindingType.let && resolveInitialValue(binding)) ||
      holdsClientValue(binding))
  ) {
    binding.sources = createSources(binding, undefined);
  }
}

// A `<let>`'s init: what it reads, through the inits of the state it reads, and for an
// uncontrolled one (taken once, as its scope is created), whether it reads only initial values.
function resolveInitialValue(binding: Binding) {
  const init = binding.derivedFrom as t.NodeExtra;
  const sources = resolveInitSources(init);
  binding.initSources = reduce(sources?.state, mergeInitSources, sources);
  if (!init.initialValue) return false;
  binding.initReadsInitialValues = every(
    sources?.state,
    (state) =>
      state.initReadsInitialValues &&
      (state.section === binding.section || !state.assignments),
  );
  return !!sources;
}

export function mergeInitSources(sources: Sources | undefined, state: Binding) {
  return mergeSources(sources, state.initSources);
}

function resolveDerivedSources(binding: Binding) {
  const exprs = binding.derivedFrom;

  if (exprs === undefined) {
    binding.sources = createSources(binding, undefined);
    return;
  }
  // A `$global` key a child's `<return>` reads changes its variable too.
  const returned = binding.returnedBy?.section?.returnValueExpr;
  if (returned && getSourcesForExpr(returned)?.global) {
    binding.sources = globalSources;
  }
  if (exprs) {
    const refs = getValueReferences(exprs);
    binding.sources = reduce(refs, mergeResolvedSources, binding.sources);
    if (some(exprs, readsGlobalValue)) {
      binding.sources = mergeSources(binding.sources, globalSources);
    }
    binding.intersection = Array.isArray(refs)
      ? refs
      : refs && getRootIntersection(refs);
    const { returnedBy } = binding;
    if (returnedBy) {
      if (binding.sources) {
        mapReturnedParams(binding, binding.sources, returnedBy);
      }
      // The tag's child scope resumes for its variable when its sources change.
      addReason(ensureSlot(returnedBy.scope), binding.sources);
    }
  }
}

// A tag variable reads a `<define>` body's params through its call, so it
// takes their sources from the expressions the call passes.
function mapReturnedParams(
  binding: Binding,
  sources: Sources,
  { section, exprs }: NonNullable<Binding["returnedBy"]>,
) {
  let mapped: Sources | undefined;
  const params = bindingUtil.filter(sources.param, (param) => {
    if (param.section !== section) return true;
    mapped = reduce(
      getValueReferences(mapParamBindingToExpr(exprs!, param)),
      mergeResolvedSources,
      mapped,
    );
    return false;
  });
  if (params !== sources.param) {
    binding.sources = mergeSources(
      mapped,
      withSources(sources, sources.state, params),
    );
  }
}

// A per-render initial value client code reads (so the page serializes it) is the
// client's, kept across navigations; an `<await>` body's params stay the server's.
function holdsClientValue(binding: Binding) {
  return (
    differsPerRender(binding) &&
    binding !== binding.section.params &&
    readsInClientCode(binding)
  );
}

function readsInClientCode(binding: Binding): boolean {
  if (someAlias(binding, hasEffectRead, undefined)) return true;
  for (const part of binding.propertyAliases.values()) {
    if (readsInClientCode(part)) return true;
  }
  return false;
}

// A `<let>`, `<const>` or `<await>` value (or part) whose expression has side
// effects.
export function differsPerRender(binding: Binding) {
  return some(getAliasRoot(binding).derivedFrom || undefined, hasSideEffects);
}

function hasSideEffects(expr: t.NodeExtra) {
  return expr.pure === false;
}

// What an init reads, `$global` included, its bindings resolved first.
function resolveInitSources(init: t.NodeExtra) {
  if (isReferencedExtra(getCanonicalExtra(init))) {
    const sources = reduce(
      getReferencedBindings(init),
      mergeResolvedSources,
      undefined as Sources | undefined,
    );
    return getGlobalReads(init)
      ? mergeSources(sources, globalSources)
      : sources;
  }
}

// A `<let>`'s init reads `$global` once, at creation, as `getValueReferences`
// reads its bindings.
function readsGlobalValue(expr: t.NodeExtra) {
  return !expr.initialValue && !!getGlobalReads(expr);
}

function mergeResolvedSources(sources: Sources | undefined, ref: Binding) {
  resolveBindingSources(ref);
  return mergeSources(sources, ref.sources);
}

function getRootIntersection(binding: Binding) {
  return getAliasRoot(binding).intersection;
}

// An effect runs on resume with the values it references, unless it reads back
// a value its tag retained.
export function readsValuesOnResume(expr: t.NodeExtra) {
  return !!expr.isEffect && !expr.retained;
}

// Whether an expression (or the one a node's extra sits in) is emitted.
function isEmitted(exprExtra: t.NodeExtra) {
  return !getCanonicalExtra(exprExtra).dropped;
}

function inEmittedExpr({ exprRoot, section }: AssignedBindingExtra) {
  return !section.dropped && isEmitted(exprRoot);
}

// A value with no side effects, or a call site's value, which only the child
// bindings derived from it observe.
function isDroppableValue(expr: t.NodeExtra) {
  return (!!expr.pure || !!expr.callSiteExprs) && !expr.merged && !expr.dropped;
}

// A value several bindings derive from (each child reading one call site's
// attribute expression) stays while any of them is read.
function dropUnreadValue(expr: t.NodeExtra) {
  if (isDroppableValue(expr) && every(expr.derives, isPrunedBinding)) {
    dropExtra(expr as ReferencedExtra);
  }
}

function isPrunedBinding(binding: Binding) {
  return !!binding.pruned;
}

function pruneBinding(binding: Binding): boolean {
  if (binding.pruned !== undefined) {
    return binding.pruned;
  }

  // A read from an unread binding's droppable value is no read: judge those
  // bindings first (one met again mid way counts as read).
  binding.pruned = false;
  for (const read of binding.reads.keys()) pruneDerived(read);
  // Likewise an assignment from such a value.
  forEach(binding.assignments, pruneAssignmentDerived);

  // An expression that also reads an ancestor reads this through it, and one
  // reading a property assigned in place reads it from the object, kept current.
  const assignedObject = getAssignedObject(binding);
  for (const [expr, reads] of binding.reads) {
    const ancestor = assignedObject
      ? getNearestReadBy(assignedObject, expr) || assignedObject
      : getNearestReadBy(binding.aliasOf, expr);
    if (ancestor) {
      ancestor.reads.set(expr, concat(ancestor.reads.get(expr), reads));
      binding.reads.delete(expr);
    }
  }

  let shouldPrune = true;
  for (const alias of binding.aliases) {
    if (pruneBinding(alias)) {
      binding.aliases.delete(alias);
    } else if (alias.type !== BindingType.constant) {
      shouldPrune = false;
    }
  }

  for (const [key, alias] of binding.propertyAliases) {
    if (pruneBinding(alias)) {
      binding.propertyAliases.delete(key);
    } else if (alias.type !== BindingType.constant) {
      shouldPrune = false;
    }
  }

  // Judged after its aliases, which can hand it their reads; an emitted
  // assignment calls the change handler in the id it reserves.
  shouldPrune &&=
    !binding.reads.size &&
    !(binding.reserveSize && hasEmittedAssignment(binding));

  binding.pruned = shouldPrune;
  if (shouldPrune && !hasEmittedAssignment(binding)) {
    // Its value is never emitted unless something else observes it, and the
    // reads and assignments inside the value go with it.
    if (binding.derivedFrom) {
      forEach(binding.derivedFrom, dropUnreadValue);
    }
  }

  return shouldPrune;
}

// An emitted assignment writes it, so its value stays though nothing reads it.
export function hasEmittedAssignment(binding: Binding) {
  return some(binding.assignments, inEmittedExpr);
}

function pruneAssignmentDerived({ exprRoot }: AssignedBindingExtra) {
  pruneDerived(exprRoot);
}

function pruneDerived(expr: t.NodeExtra) {
  if (isDroppableValue(expr)) {
    forEach(expr.derives, pruneBinding);
  }
}

function resolveReferencedBindingsInFunction(
  expr: ReferencedExtra,
  refs: SortedOneMany<Binding>,
  reads: Opt<Read>,
) {
  let referencedBindings: ReferencedBindings;
  let constantBindings: ReferencedBindings;

  // Every closest reference is one of `refs`, so filtering keeps the order.
  const closest = new Set<Binding>();
  forEach(reads, ({ getter, binding }) => {
    if (getter) {
      // hoisted/getter reads resolve through getters, not signals.
    } else if (binding.type === BindingType.constant) {
      if (bindingUtil.has(refs, binding)) {
        constantBindings = bindingUtil.add(constantBindings, binding);
      }
    } else if (
      binding.type !== BindingType.dom &&
      binding.type !== BindingType.global
    ) {
      closest.add(getNearestReadBy(binding, expr)!);
    }
  });
  if (closest.size) {
    referencedBindings = bindingUtil.filter(refs, (ref) => closest.has(ref));
  }

  return { referencedBindings, constantBindings };
}

// The nearest of a binding and its ancestors that the expression reads, once
// pruning has given each read to the binding it resolves to.
function getNearestReadBy(binding: Binding | undefined, expr: ReferencedExtra) {
  for (let cur = binding; cur; cur = cur.aliasOf) {
    if (cur.reads.has(expr)) return cur;
  }
}

function markLazyRead(binding: Binding) {
  binding.hasLazyReads = true;
}

function addBindingGetter(binding: Binding, { invoked, hoisted }: Getter) {
  if (!invoked || !binding.getters.has(hoisted)) {
    if (hoisted === binding.section) {
      binding.getters.delete(false);
    }
    if (hoisted || !binding.getters.has(binding.section)) {
      binding.getters.set(hoisted, !invoked);
    }
  }
}

// A lazy read is excluded from `referencedBindings` and instead reads the
// binding's own scope slot on invocation; sound only for a subscriber-free own slot.
function isLazyRead(
  expr: { section: Section; invokeOnly?: true },
  read: Read,
  binding: Binding,
  isChangeHandlerRead: boolean,
) {
  return !!(
    expr.invokeOnly &&
    read.deferred &&
    !isChangeHandlerRead &&
    // Roots and section params own a live slot; other aliases forward to their
    // aliased binding with no own slot, so reading them live would go stale on resume.
    (!binding.aliasOf || isParamBinding(binding)) &&
    binding.type !== BindingType.constant
  );
}

function resolveReferencedBindings(
  expr: ReferencedExtra,
  reads: Opt<Read>,
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  let referencedBindings: ReferencedBindings;
  let constantBindings: ReferencedBindings;
  let allBindings: ReferencedBindings;
  let lazyBindings: ReferencedBindings;
  let globalBindings: ReferencedBindings;
  let closureBindings: ReferencedBindings;
  let closureSection: Section | undefined;
  let hoistedSection: Section | undefined;

  forEach(reads, (read) => {
    let { binding } = read;
    const { extra, getter } = read;

    if (getter) {
      extra.section = expr.section;
      extra.read = createResolvedGetterRead(binding, undefined, getter);
      addBindingGetter(binding, getter);
      // A hoisted read calls the getter from the section the getter is in.
      if (getter.hoisted) {
        binding.hoists = sectionUtil.add(binding.hoists, getter.hoisted);
        if (!hoistedSection || getter.hoisted.depth < hoistedSection.depth) {
          hoistedSection = getter.hoisted;
        }
      }
    } else {
      const isChangeHandlerRead = extra.assignmentTo === binding;
      if (isChangeHandlerRead) {
        const ancestor = getNearestReadBy(binding.aliasOf, expr);
        if (ancestor) {
          binding = ancestor;
        }
      } else if (binding.type !== BindingType.global) {
        extra.section = expr.section;
        ({ binding } = extra.read =
          resolveConstantReference(binding) ??
          resolveExpressionReference(expr, read));
      }
      if (binding.type === BindingType.global) {
        // `$global` reads stay verbatim member chains: no read slot,
        // no signal, no register-id participation.
        getProgram().node.extra.hasGlobalRead = true;
        // Only a patch changes `$global` after the page renders: it keeps the paths
        // read as the expression evaluates (a function invoked later reads it live).
        if (isPatch() && !(expr.invokeOnly && read.deferred)) {
          globalBindings = bindingUtil.add(globalBindings, binding);
        }
      } else if (binding.type !== BindingType.dom) {
        const isLazy = isLazyRead(expr, read, binding, isChangeHandlerRead);
        if (isLazy) {
          lazyBindings = bindingUtil.add(lazyBindings, binding);
        } else if (binding.type === BindingType.constant) {
          constantBindings = bindingUtil.add(constantBindings, binding);
        } else {
          referencedBindings = bindingUtil.add(referencedBindings, binding);
        }
        // A read outside a getter is from this section or an enclosing one; the
        // outermost bounds the owner chain, and a lazy read subscribes to nothing.
        if (binding.section !== expr.section) {
          const closure =
            getConstantRoot(binding) ?? getCanonicalBinding(binding);
          if (!isLazy) {
            closureBindings = bindingUtil.add(closureBindings, closure);
          }
          if (!closureSection || closure.section.depth < closureSection.depth) {
            closureSection = closure.section;
          }
        }
      }
    }
    allBindings = bindingUtil.add(allBindings, binding);
  });

  // A binding also read live by this expression stays subscribed.
  lazyBindings = bindingUtil.difference(lazyBindings, referencedBindings);

  if (Array.isArray(referencedBindings)) {
    referencedBindings = getCanonicalIntersection(
      intersectionsBySection,
      expr.section,
      referencedBindings,
    );
  }

  if (referencedBindings && constantBindings) {
    getCanonicalIntersection(
      intersectionsBySection,
      expr.section,
      bindingUtil.union(referencedBindings, constantBindings) as Intersection,
    );
  }

  return {
    referencedBindings,
    constantBindings,
    allBindings,
    lazyBindings,
    globalBindings,
    closureBindings,
    closureSection,
    hoistedSection,
  };
}

// The section's one array equal to `intersection`, recorded when new, so equal
// reference binding groups are referentially equal.
function getCanonicalIntersection(
  intersectionsBySection: Map<Section, Intersection[]>,
  section: Section,
  intersection: Intersection,
) {
  const intersections = intersectionsBySection.get(section) || [];
  const canonical = findSorted(
    compareIntersections,
    intersections,
    intersection,
  );
  if (canonical) return canonical;
  intersectionsBySection.set(
    section,
    addSorted(compareIntersections, intersections, intersection),
  );
  return intersection;
}

function resolveConstantReference(binding: Binding): ResolvedRead | undefined {
  const root = getConstantRoot(binding);
  return root && createResolvedRead(root, getPropertyPath(binding, root));
}

// A property of a constant is constant, so it reads through the outermost
// constant: a property alias made after its root became one inherits the type.
function getConstantRoot(binding: Binding): Binding | undefined {
  let root: Binding | undefined;
  for (let cur = binding; cur.aliasOf; cur = cur.aliasOf) {
    if (cur.property === undefined && !isDirectAlias(cur)) break;
    if (cur.aliasOf.type === BindingType.constant) root = cur.aliasOf;
  }
  return root;
}

function resolveExpressionReference(
  expr: ReferencedExtra,
  { binding, inOwnBody }: Read,
) {
  const ancestor = getNearestReadBy(binding.aliasOf, expr);
  return ancestor
    ? createResolvedRead(ancestor, getPropertyPath(binding, ancestor))
    : createResolvedRead(binding, undefined, inOwnBody);
}

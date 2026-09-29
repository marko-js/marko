import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { finalizeFunctionRegistry } from "../visitors/function";
import {
  type Binding,
  BindingType,
  type Getter,
  type InputBinding,
  type Intersection,
  type ParamBinding,
  type ReferencedBindings,
  bindingUtil,
  compareIntersections,
  getAliasRoot,
  getBindings,
  getCanonicalBinding,
  getPropertyPath,
  isDirectAlias,
  propsUtil,
} from "./bindings";
import { generateUid } from "./generate-uid";
import {
  addSorted,
  every,
  filter,
  findSorted,
  forEach,
  type Many,
  type Opt,
  type SortedOneMany,
  push,
  some,
} from "./optional";
import {
  type AssignedBindingExtra,
  type ExtraRead,
  type Read,
  type ReferencedExtra,
  createGetterRead,
  createRead,
  dropExtra,
  getAssignments,
  getCanonicalExtra,
  getFunctionReadsByExpression,
  getReadsByExpression,
  getReferenceFinalizers,
  isReferencedExtra,
} from "./references";
import {
  forEachSection,
  getDirectClosures,
  isResumedBranch,
  type Section,
  sectionUtil,
  setReadsOwner,
} from "./sections";
import {
  forceSerialize,
  readsValuesOnResume,
  solveSerializeReasons,
} from "./serialize-propagation";
import {
  addOwnerSerializeReason,
  addSerializeExpr,
  addSerializeReason,
  applySerializeExprs,
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
  kBranchSerializeReason,
} from "./serialize-reasons";
import { finalizeTagDownstreams } from "./set-tag-sections-downstream";
import { addSetupWork } from "./setup-work";
import {
  FORCED,
  type Sources,
  createSources,
  globalSources,
  mergeSources,
} from "./sources";
import { createProgramState } from "./state";

export function finalizeReferences() {
  const intersectionsBySection = new Map<Section, Intersection[]>();
  settleAssignments();
  pruneBindings();
  dropPrunedAssignments();
  resolveReads(intersectionsBySection);
  forEachSection(finalizeTagDownstreams);
  resolveBindings();
  forEachSection(addSectionSerializeReasons);
  for (const finalize of getReferenceFinalizers()) {
    finalize();
  }
  forEachSection(applySerializeExprs);
  solveSerializeReasons(intersectionsBySection);
  finalizeFunctionRegistry();
  allocateIds(intersectionsBySection);
  finalizeReturnSerializeReason();
  getReadsByExpression().clear();
  getFunctionReadsByExpression().clear();
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
function dropPrunedAssignments() {
  const excluded = new Set<Binding>();
  for (const idExtra of getAssignments()) {
    const binding = idExtra.assignment;
    if (!inEmittedExpr(idExtra)) {
      binding.assignments = filter(binding.assignments, inEmittedExpr);
    } else if (
      !excluded.has(binding) &&
      binding.upstreamAlias &&
      binding.property !== undefined
    ) {
      excluded.add(binding);
      // Translate pulls an assigned property's change handler out of its
      // pattern, so the rest of that same pattern no longer holds it.
      for (const alias of binding.upstreamAlias.aliases) {
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
  for (const [expr, reads] of getReadsByExpression()) {
    if (isReferencedExtra(expr)) {
      const exprBindings = resolveReferencedBindings(
        expr,
        reads,
        intersectionsBySection,
      );
      expr.referencedBindings = exprBindings.referencedBindings;
      expr.lazyBindings = exprBindings.lazyBindings;
      expr.globalBindings = exprBindings.globalBindings;
      if (!exprBindings.referencedBindings) {
        // With no resolved references, any statement this expression keys
        // lands in its section's setup signal.
        addSetupWork(expr.section);
      }
      forEach(exprBindings.lazyBindings, (binding) => {
        binding.forcePersist = true;
      });
      if (exprBindings.hoistedBindings) {
        expr.section.referencedHoists = bindingUtil.union(
          expr.section.referencedHoists,
          exprBindings.hoistedBindings,
        );
      }

      if (expr.isEffect) {
        if (readsValuesOnResume(expr)) {
          forEach(exprBindings.referencedBindings, forceSerialize);
          forEach(exprBindings.constantBindings, forceSerialize);
        }
        forEach(exprBindings.lazyBindings, forceSerialize);
      } else {
        forEach(reads, (read) => {
          if (read.serializedValue) {
            addSerializeExpr(read.binding.section, expr, read.binding);
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
                    exprBindings.allBindings,
                    fnReads,
                  );
            // The function itself still reads lazy bindings when invoked.
            fn.referencedBindingsInFunction =
              fn === expr
                ? bindingUtil.union(
                    fnBindings.referencedBindings,
                    exprBindings.lazyBindings,
                  )
                : fnBindings.referencedBindings;
            fn.constantBindingsInFunction = fnBindings.constantBindings;
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
      getProgram().node.extra.hasGlobalRead = true;
      resolveBindingSources(binding);
      continue;
    }
    if (binding.type !== BindingType.dom) {
      resolveBindingSources(binding);

      forEach(binding.assignments, ({ section: assignedSection }) => {
        setReadsOwner(assignedSection, section);
        // Deliberately `true`, not `binding.sources`: narrowing is a 0-byte no-op until a state-dropping pass exists.
        addOwnerSerializeReason(assignedSection, section, FORCED);
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
      let highestHoistSection!: Section;

      forEach(binding.hoists, (hoistSection) => {
        if (
          !highestHoistSection ||
          hoistSection.depth < highestHoistSection.depth
        ) {
          highestHoistSection = hoistSection;
        }

        forceSerialize(binding);
      });

      binding.section.hoisted = bindingUtil.add(
        binding.section.hoisted,
        binding,
      );

      let currentSection = binding.section.parent;
      while (currentSection && currentSection !== highestHoistSection) {
        currentSection.isHoistThrough = true;
        currentSection = currentSection.parent;
      }
    }

    const canonicalBinding = getCanonicalBinding(binding);
    section.bindings = bindingUtil.add(section.bindings, canonicalBinding);
    bindingNamesBySection.get(section)?.add(canonicalBinding.name);
    if (binding.upstreamLocal) {
      section.localClosures = bindingUtil.add(section.localClosures, binding);
    }

    for (const exprExtra of binding.reads) {
      const { section } = exprExtra;
      if (section.depth > binding.section.depth) {
        if (binding.type !== BindingType.dom) {
          const closure =
            getConstantRoot(binding) ?? getCanonicalBinding(binding);
          // Lazy-only reads need the owner scope chain but no closure signal.
          if (!bindingUtil.has(exprExtra.lazyBindings, binding)) {
            closure.closureSections = sectionUtil.add(
              closure.closureSections,
              section,
            );
            section.referencedClosures = bindingUtil.add(
              section.referencedClosures,
              closure,
            );
          }

          setReadsOwner(section, closure.section);
          addOwnerSerializeReason(
            section,
            closure.section,
            readsValuesOnResume(exprExtra)
              ? mergeSources(FORCED, closure.sources)
              : closure.sources,
          );
        }
      }
    }
  }
}

function addSectionSerializeReasons(section: Section) {
  if (section.isHoistThrough) {
    addSerializeReason(section, FORCED);
  }

  forEach(section.referencedHoists, (hoistedBinding) => {
    setReadsOwner(section, hoistedBinding.section);
    addOwnerSerializeReason(section, hoistedBinding.section, FORCED);
  });

  if (isResumedBranch(section)) {
    const closureSources = getSerializeSourcesForRef(
      getDirectClosures(section),
    );
    addSerializeReason(
      section,
      section.isHoistThrough || section.hoisted
        ? mergeSources(FORCED, closureSources)
        : closureSources,
      kBranchSerializeReason,
    );
    addSerializeExpr(
      section,
      section.upstreamExpression,
      kBranchSerializeReason,
    );
    addSerializeExpr(
      section.parent!,
      section.upstreamExpression,
      section.branch.nodeBinding,
    );
  }
}

// Dense per-section ids for bindings, intersections, and closure accessors.
function allocateIds(intersectionsBySection: Map<Section, Intersection[]>) {
  const closureIdEnds = new Map<Section, number>();
  forEachSection((section) => {
    const { id, bindings } = section;
    const isOwnedBinding = ({ section }: Binding) => section.id === id;
    const ownedBindings = filter(bindings, isOwnedBinding);
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
        for (let i = intersection.length; i--;) {
          if (isOwnedBinding(intersection[i])) {
            sectionAnchors.set(intersection, intersection[i]);
            break;
          }
        }
      }

      // Renders run in id order, so a closure-only intersection must come
      // before the owned derived binding it may be upstream of.
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
    let intersection: Intersection;
    const assignIntersectionId = (intersection: Intersection) => {
      intersectionMeta.set(intersection, {
        source: undefined,
        id: nextId++,
        scopeOffset: getMaxOwnSourceOffset(intersection, section),
      });
    };
    forEach(ownedBindings, (binding) => {
      // Dom ids are the walker's dense indexes; unanchored intersections
      // slot in right after them, ahead of every other owned binding.
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
      // Reserved ids follow the binding's own; dom bindings never reserve
      // since their ids are the walker's dense indexes.
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
    forEach(ownedBindings, (binding) => {
      if (binding.closureSections) {
        closureId = Math.max(closureId, nextId);
        binding.closureId = closureId++;
      }
    });
    closureIdEnds.set(section, closureId);
  });
}

function finalizeReturnSerializeReason() {
  const programSection = getProgram().node.extra.section!;
  if (programSection.returnValueExpr) {
    programSection.returnSerializeReason = getSerializeSourcesForExpr(
      programSection.returnValueExpr,
    );
  }
}

// The bindings a binding's value is computed from.
export function getValueInputs(binding: Binding): ReferencedBindings {
  if (binding.upstreamAlias) return binding.upstreamAlias;
  if (binding.upstreamExpression) {
    return getValueReferences(binding.upstreamExpression);
  }
}

// The bindings value expressions read, apart from an initial value (which a
// change never recomputes).
function getValueReferences(exprs: Opt<t.NodeExtra>) {
  let refs: ReferencedBindings;
  forEach(exprs, (expr) => {
    // An attribute tag's expression is read through the group it merged into.
    const canonical = getCanonicalExtra(expr);
    if (isReferencedExtra(canonical) && !expr.initialValue) {
      refs = bindingUtil.union(refs, canonical.referencedBindings);
    }
  });
  return refs;
}

function getMaxOwnSourceOffset(intersection: Intersection, section: Section) {
  let scopeOffset: Binding | undefined;

  const trackScopeOffset = (source: Binding) => {
    if (
      source.scopeOffset &&
      (!scopeOffset || scopeOffset.id < source.scopeOffset.id)
    ) {
      scopeOffset = source.scopeOffset;
    }
  };
  for (const binding of intersection) {
    if (binding.section === section && binding.sources) {
      forEach(binding.sources.state, trackScopeOffset);
      forEach(binding.sources.param, trackScopeOffset);
    }
  }

  return scopeOffset;
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
    const upstream = getUpstreamIntersection(member);
    if (
      upstream &&
      upstream !== intersection &&
      !getIntersectionSource(upstream, section, resolved)
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
    !source.scopeOffset
    ? source
    : undefined;
}

const [getResolvedSources] = createProgramState(() => new Set<Binding>());

function resolveBindingSources(binding: Binding) {
  const resolvedSources = getResolvedSources();
  if (resolvedSources.has(binding)) return;
  resolvedSources.add(binding);

  switch (binding.type) {
    case BindingType.let: {
      const aliasRoot = getAliasRoot(binding);
      if (aliasRoot) {
        resolveBindingSources(aliasRoot);
        binding.sources = aliasRoot.sources;
      } else if (binding.assignments) {
        binding.sources = createSources(binding, undefined);
      } else {
        resolveDerivedSources(binding);
      }
      return;
    }
    case BindingType.input:
      binding.sources = createSources(
        undefined,
        getCanonicalBinding(binding) as InputBinding,
      );
      return;
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

  if (binding.upstreamLocal) {
    resolveBindingSources(binding.upstreamLocal);
    binding.sources = binding.upstreamLocal.sources;
    return;
  }

  const aliasRoot = getAliasRoot(binding);
  if (aliasRoot) {
    if (!resolvedSources.has(aliasRoot)) {
      resolvedSources.add(aliasRoot);
      resolveDerivedSources(aliasRoot);
    }

    binding.sources = aliasRoot.sources;
  } else {
    resolveDerivedSources(binding);
  }
}

function resolveDerivedSources(binding: Binding) {
  const exprs = binding.upstreamExpression;

  if (exprs === undefined) {
    binding.sources = createSources(binding, undefined);
  } else if (exprs) {
    const refs = getValueReferences(exprs);
    forEach(refs, (ref) => {
      resolveBindingSources(ref);
      binding.sources = mergeSources(binding.sources, ref.sources);
    });
    binding.upstreamIntersection = Array.isArray(refs)
      ? refs
      : refs && getUpstreamIntersection(refs);
  }
}

function getUpstreamIntersection(binding: Binding) {
  return (getAliasRoot(binding) || binding).upstreamIntersection;
}

// Whether an expression (or the one a node's extra sits in) is emitted.
function isEmitted(exprExtra: t.NodeExtra) {
  return !getCanonicalExtra(exprExtra).pruned;
}

function inEmittedExpr({ exprRoot, section }: AssignedBindingExtra) {
  return !section.pruned && isEmitted(exprRoot);
}

// A value with no side effects, or a call site's value, which only the child
// bindings it feeds observe.
function isDroppableValue(expr: t.NodeExtra) {
  return (
    (!!expr.pure || !!expr.downstreamExprs) && !expr.merged && !expr.pruned
  );
}

// A value feeding another binding too (one call site's attribute expression
// feeds each child that reads it) stays while any of them is read.
function dropUnreadValue(expr: t.NodeExtra) {
  if (isDroppableValue(expr) && every(expr.downstream, isPrunedBinding)) {
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
  for (const read of binding.reads) {
    if (isDroppableValue(read)) {
      forEach(read.downstream, pruneBinding);
    }
  }
  // Likewise an assignment from such a value.
  forEach(binding.assignments, pruneWriter);

  for (const read of binding.reads) {
    let upstream = binding.upstreamAlias;
    while (upstream && !upstream.reads.has(read)) {
      upstream = upstream.upstreamAlias;
    }
    if (upstream) {
      binding.reads.delete(read);
    }
  }

  // A let binding with reserveSize > 0 reserves adjacent scope slots (e.g.
  // TagVariableChange at id+1). Even when its reads are covered by an alias,
  // the slot reservation must survive so translate can emit the correct ids.
  let shouldPrune = !binding.reads.size && !binding.reserveSize;

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

  binding.pruned = shouldPrune;
  if (
    shouldPrune &&
    !binding.untracked &&
    !some(binding.assignments, inEmittedExpr)
  ) {
    // Its value is never emitted unless something else observes it, and the
    // reads and assignments inside the value go with it.
    if (binding.upstreamExpression) {
      forEach(binding.upstreamExpression, dropUnreadValue);
    }
  }

  return shouldPrune;
}

function pruneWriter({ exprRoot }: AssignedBindingExtra) {
  if (isDroppableValue(exprRoot)) {
    forEach(exprRoot.downstream, pruneBinding);
  }
}

function resolveReferencedBindingsInFunction(
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
      if (bindingUtil.find(refs, binding)) {
        constantBindings = bindingUtil.add(constantBindings, binding);
      }
    } else if (
      binding.type !== BindingType.dom &&
      binding.type !== BindingType.global
    ) {
      const ref = findClosestReference(binding, refs);
      if (ref) closest.add(ref);
    }
  });
  if (closest.size) {
    referencedBindings = bindingUtil.filter(refs, (ref) => closest.has(ref));
  }

  return { referencedBindings, constantBindings };
}

function findClosestReference(
  from: Binding,
  refs: SortedOneMany<Binding>,
): undefined | Binding {
  if (Array.isArray(refs)) {
    if (bindingUtil.has(refs, from)) {
      return from;
    }

    for (const ref of refs) {
      const closest = findClosestUpstream(from, ref);
      if (closest) return closest;
    }
  } else {
    const closest = findClosestUpstream(from, refs);
    if (closest) return closest;
  }
}

function findClosestUpstream(from: Binding, to: Binding) {
  let closest: Binding | undefined = from;
  do {
    if (closest === to) {
      return closest;
    }
  } while ((closest = closest.upstreamAlias));
}

function getRootBindings(reads: Many<Read>): SortedOneMany<Binding> {
  let rootRefs!: SortedOneMany<Binding>;
  let allBindings!: SortedOneMany<Binding>;

  for (const { binding } of reads) {
    allBindings = bindingUtil.add(allBindings, binding);
  }

  for (const { binding } of reads) {
    let alias = binding.upstreamAlias;
    while (alias) {
      if (bindingUtil.has(allBindings, alias)) break;
      alias = alias.upstreamAlias;
    }

    if (!alias) {
      rootRefs = bindingUtil.add(rootRefs, binding);
    }
  }

  return rootRefs;
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
    // upstream with no own slot, so reading them live would go stale on resume.
    (!binding.upstreamAlias || isParamBinding(binding)) &&
    binding.type !== BindingType.dom &&
    binding.type !== BindingType.constant
  );
}

function isParamBinding(binding: Binding) {
  const root = getAliasRoot(binding) || binding;
  return root === root.section.params;
}

function resolveReferencedBindings(
  expr: { section: Section; isEffect?: boolean; invokeOnly?: true },
  reads: Opt<Read>,
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  let referencedBindings: ReferencedBindings;
  let constantBindings: ReferencedBindings;
  let hoistedBindings: ReferencedBindings;
  let allBindings: ReferencedBindings;
  let lazyBindings: ReferencedBindings;
  let globalBindings: ReferencedBindings;

  if (Array.isArray(reads)) {
    const rootBindings = getRootBindings(reads);
    for (const read of reads) {
      let { binding } = read;
      const { extra, getter } = read;

      if (getter) {
        extra.section = expr.section;
        extra.read = createGetterRead(binding, undefined, getter);
        addBindingGetter(binding, getter);
        if (getter.hoisted) {
          binding.hoists = sectionUtil.add(binding.hoists, getter.hoisted);
          hoistedBindings = bindingUtil.add(hoistedBindings, binding);
        }
      } else {
        const isChangeHandlerRead = extra.assignmentTo === binding;
        if (isChangeHandlerRead) {
          const upstreamRoot =
            binding.upstreamAlias &&
            findClosestReference(binding.upstreamAlias, rootBindings);
          if (upstreamRoot) {
            binding = upstreamRoot;
          }
        } else if (binding.type !== BindingType.global) {
          extra.section = expr.section;
          ({ binding } = extra.read ??=
            resolveConstantReference(binding) ??
            resolveExpressionReference(rootBindings, binding));
        }
        if (binding.type === BindingType.global) {
          // `$global` reads stay verbatim member chains: no read slot,
          // no signal, no register-id participation.
          globalBindings = bindingUtil.add(globalBindings, binding);
        } else if (isLazyRead(expr, read, binding, isChangeHandlerRead)) {
          lazyBindings = bindingUtil.add(lazyBindings, binding);
        } else if (binding.type === BindingType.constant) {
          constantBindings = bindingUtil.add(constantBindings, binding);
        } else if (binding.type !== BindingType.dom) {
          referencedBindings = bindingUtil.add(referencedBindings, binding);
        }
      }
      allBindings = bindingUtil.add(allBindings, binding);
    }
  } else if (reads) {
    const { extra, getter, ownVar } = reads;
    let { binding } = reads;

    if (getter) {
      extra.read = createGetterRead(binding, undefined, getter);
      addBindingGetter(binding, getter);
      if (getter.hoisted) {
        binding.hoists = sectionUtil.add(binding.hoists, getter.hoisted);
        hoistedBindings = bindingUtil.add(hoistedBindings, binding);
      }
    } else if (binding.type === BindingType.global) {
      // `$global` reads stay verbatim member chains: no read slot,
      // no signal, no register-id participation.
      globalBindings = binding;
    } else {
      extra.read =
        resolveConstantReference(binding) ??
        createRead(binding, undefined, ownVar);
      binding = extra.read.binding;
      if (isLazyRead(expr, reads, binding, extra.assignmentTo === binding)) {
        lazyBindings = binding;
      } else if (binding.type === BindingType.constant) {
        constantBindings = binding;
      } else if (binding.type !== BindingType.dom) {
        referencedBindings = binding;
      }
    }

    extra.section = expr.section;
    allBindings = binding;
  }

  // A binding also read live by this expression stays subscribed.
  lazyBindings = bindingUtil.difference(lazyBindings, referencedBindings);

  if (Array.isArray(referencedBindings)) {
    // Resolve canonical intersection based on the expressions section.
    // This ensures referential equality between reference binding groups.
    const intersections = intersectionsBySection.get(expr.section) || [];
    const intersection = findSorted(
      compareIntersections,
      intersections,
      referencedBindings,
    );
    if (intersection) {
      referencedBindings = intersection;
    } else {
      intersectionsBySection.set(
        expr.section,
        addSorted(compareIntersections, intersections, referencedBindings),
      );
    }
  }

  if (referencedBindings && constantBindings) {
    // Resolve canonical intersection based on the expressions section.
    // This ensures referential equality between reference binding groups.
    const intersections = intersectionsBySection.get(expr.section) || [];
    const combined = bindingUtil.union(
      referencedBindings,
      constantBindings,
    ) as Intersection;
    const intersection = findSorted(
      compareIntersections,
      intersections,
      combined,
    );
    if (!intersection) {
      intersectionsBySection.set(
        expr.section,
        addSorted(compareIntersections, intersections, combined),
      );
    }
  }

  return {
    referencedBindings,
    constantBindings,
    hoistedBindings,
    allBindings,
    lazyBindings,
    globalBindings,
  };
}

function resolveConstantReference(binding: Binding): ExtraRead | undefined {
  const root = getConstantRoot(binding);
  return root && createRead(root, getPropertyPath(binding, root));
}

// A property of a constant is constant, so it reads through the constant.
function getConstantRoot(binding: Binding): Binding | undefined {
  for (let cur = binding; cur.upstreamAlias; cur = cur.upstreamAlias) {
    if (cur.property === undefined && !isDirectAlias(cur)) return;
    if (cur.upstreamAlias.type === BindingType.constant) {
      return cur.upstreamAlias;
    }
  }
}

function resolveExpressionReference(
  rootBindings: SortedOneMany<Binding>,
  readBinding: Binding,
) {
  const upstreamRoot =
    readBinding.upstreamAlias &&
    findClosestReference(readBinding.upstreamAlias, rootBindings);
  return upstreamRoot
    ? createRead(upstreamRoot, getPropertyPath(readBinding, upstreamRoot))
    : createRead(readBinding, undefined);
}

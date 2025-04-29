import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { toAccess } from "../../html/serializer";
import type { InputSerializeReasons } from "../visitors/program";
import { forEachIdentifier } from "./for-each-identifier";
import { generateUid } from "./generate-uid";
import { getAccessorPrefix, getAccessorProp } from "./get-accessor-char";
import { getExprRoot, getFnRoot } from "./get-root";
import isInvokedFunction from "./is-invoked-function";
import { isOptimize } from "./marko-config";
import {
  addSorted,
  concat,
  filter,
  find,
  findSorted,
  forEach,
  type Many,
  type Opt,
  push,
  Sorted,
} from "./optional";
import { getScopeExpression } from "./scope-read";
import {
  forEachSection,
  getCommonSection,
  getDirectClosures,
  getOrCreateSection,
  isDynamicClosure,
  isSameOrChildSection,
  type Section,
  sectionUtil,
} from "./sections";
import {
  addBindingSerializeReason,
  addBindingSerializeReasonExpr,
  addOwnersSerializeReason,
  addSectionSerializeReason,
  addSectionSerializeReasonExpr,
  addSectionSerializeReasonRef,
  applySerializeReasonExprs,
  finalizeSectionSerializeReasons,
  forceBindingSerialize,
  forceOwnersSerialize,
  forceSectionSerialize,
  getBindingSerializeReason,
  getSerializeSourcesForExpr,
  isBindingForceSerialized,
  mergeSerializeReasons,
  type SerializeReason,
} from "./serialize-reasons";
import { getHoistFunctionIdentifier } from "./signals";
import { createProgramState } from "./state";
import { toMemberExpression } from "./to-property-name";
import withPreviousLocation from "./with-previous-location";

const kIsInvoked = Symbol("hoist is invoked");
export const kBranchSerializeReason = Symbol("branch serialize reason");
export type Aliases = undefined | Binding | { [property: string]: Aliases };

export enum BindingType {
  dom,
  let,
  input,
  param,
  local,
  derived,
  hoist,
  // todo: constant
}

export interface Sources {
  state: Opt<Binding>;
  input: Opt<InputBinding>;
}

export interface Binding {
  id: number;
  name: string;
  type: BindingType;
  loc: t.SourceLocation | null;
  section: Section;
  closureSections: Opt<Section>;
  assignmentSections: Opt<Section>;
  sources: undefined | Sources;
  aliases: Set<Binding>;
  hoists: Map<Section, Binding>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: undefined | string[];
  upstreamAlias: Binding | undefined;
  downstreamExpressions: Set<ReferencedExtra>;
  scopeOffset: Binding | undefined;
  export: string | undefined;
  declared: boolean;
  nullable: boolean;
}

export interface InputBinding extends Binding {
  type: BindingType.input;
}

export type ReferencedBindings = Opt<Binding>;
export type Intersection = Many<Binding>;

type FnExtra = (
  | t.FunctionExpressionExtra
  | t.ArrowFunctionExpressionExtra
  | t.FunctionDeclarationExtra
) & { section: Section };

interface Read {
  binding: Binding;
  node: undefined | t.MemberExpression | t.Identifier;
}

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    section?: Section;
    referencedBindings?: ReferencedBindings;
    binding?: Binding;
    assignment?: Binding;
    read?: { binding: Binding; props: Opt<string> };
    pruned?: true;
    isEffect?: true;
    [kIsInvoked]?: true;
  }

  export interface FunctionExtra {
    referencedBindingsInFunction?: ReferencedBindings;
  }

  export interface ArrowFunctionExpressionExtra extends FunctionExtra {}
  export interface FunctionDeclarationExtra extends FunctionExtra {}
  export interface FunctionExpressionExtra extends FunctionExtra {}
}

const [getBindings] = createProgramState(() => new Set<Binding>());
const [getNextBindingId, setNextBindingId] = createProgramState(() => 0);
export function createBinding(
  name: string,
  type: Binding["type"],
  section: Section,
  upstreamAlias?: Binding["upstreamAlias"],
  property?: string,
  loc: t.SourceLocation | null = null,
  declared = false,
): Binding {
  const id = getNextBindingId();
  const binding: Binding = {
    id,
    name,
    type,
    loc,
    section,
    property,
    declared,
    closureSections: undefined,
    assignmentSections: undefined,
    excludeProperties: undefined,
    sources: undefined,
    aliases: new Set(),
    hoists: new Map(),
    propertyAliases: new Map(),
    upstreamAlias,
    downstreamExpressions: new Set(),
    scopeOffset: undefined,
    export: undefined,
    nullable: true,
  };

  if (property) {
    if (declared) upstreamAlias!.nullable = false;
    // TODO: should prefer declared properties as alias roots.
    const propBinding = upstreamAlias!.propertyAliases.get(property);
    if (propBinding) {
      binding.property = undefined;
      binding.upstreamAlias = propBinding;
      propBinding.aliases.add(binding);
    } else {
      // TODO: check if default is used, if so an intermediate binding is needed
      upstreamAlias!.propertyAliases.set(property, binding);
    }
  } else if (upstreamAlias) {
    upstreamAlias.aliases.add(binding);
  }

  setNextBindingId(id + 1);
  getBindings().add(binding);
  return binding;
}

export function trackVarReferences(
  tag: t.NodePath<t.MarkoTag>,
  type: BindingType,
  upstreamAlias?: Binding["upstreamAlias"],
) {
  const tagVar = tag.node.var;
  if (tagVar) {
    const canonicalUpstreamAlias = getCanonicalBinding(upstreamAlias);
    if (canonicalUpstreamAlias) {
      createBindingsAndTrackReferences(
        tagVar,
        canonicalUpstreamAlias.type,
        tag.scope,
        canonicalUpstreamAlias.section,
        canonicalUpstreamAlias,
        undefined,
      );
      return canonicalUpstreamAlias;
    }

    createBindingsAndTrackReferences(
      tagVar,
      type,
      tag.scope,
      getOrCreateSection(tag),
      undefined,
      undefined,
    );
    return tagVar.extra?.binding;
  }
}

export function trackParamsReferences(
  body: t.NodePath<t.MarkoTagBody | t.Program>,
  type: BindingType,
  upstreamAlias?: Binding["upstreamAlias"],
) {
  const params = body.node.params;
  if (body.node.body.length && params.length) {
    const canonicalUpstreamAlias = getCanonicalBinding(upstreamAlias);
    let section: Section;
    if (canonicalUpstreamAlias) {
      section = canonicalUpstreamAlias.section;
      type = canonicalUpstreamAlias.type;
    } else {
      section = getOrCreateSection(body);
    }
    const paramsBinding =
      canonicalUpstreamAlias ||
      ((body.node.extra ??= {}).binding = createBinding(
        generateUid("params"),
        type,
        section,
        undefined,
        undefined,
      ));

    section.params = paramsBinding;

    for (let i = 0; i < params.length; i++) {
      // TODO: need to support spread here.
      createBindingsAndTrackReferences(
        params[i],
        type,
        body.scope,
        section,
        paramsBinding,
        i + "",
      );
    }

    return paramsBinding;
  }
}

export function trackHoistedReference(
  referencePath: t.NodePath<t.Identifier>,
  binding: Binding,
) {
  const section = binding.section;
  const referenceSection = getOrCreateSection(referencePath);
  const hoistSection = getCommonSection(referenceSection, section);
  const extra = (referencePath.node.extra ??= {});

  let hoistedBinding = binding.hoists.get(hoistSection);
  if (!hoistedBinding) {
    binding.hoists.set(
      hoistSection,
      (hoistedBinding = createBinding(
        generateUid("hoisted_" + referencePath.node.name),
        BindingType.hoist,
        hoistSection,
        undefined,
        undefined,
        binding.loc,
        true,
      )),
    );

    section.hoisted = bindingUtil.add(section.hoisted, binding);

    let currentSection = section.parent;
    while (currentSection && currentSection !== hoistSection) {
      currentSection.isHoistThrough = true;
      currentSection = currentSection.parent;
    }
  }

  if (isInvokedFunction(referencePath)) {
    extra.read = createRead(hoistedBinding, undefined);
    extra.section = referenceSection;
    extra[kIsInvoked] = true;
  } else {
    trackReference(referencePath, hoistedBinding);
  }

  referenceSection.referencedHoists = bindingUtil.add(
    referenceSection.referencedHoists,
    hoistedBinding,
  );
}

function trackReferencesForBinding(babelBinding: t.Binding, binding: Binding) {
  const { referencePaths, constantViolations } = babelBinding;

  for (const referencePath of referencePaths) {
    const referenceSection = getOrCreateSection(referencePath);
    if (isSameOrChildSection(binding.section, referenceSection)) {
      if (
        binding.type === BindingType.local &&
        referenceSection === binding.section
      ) {
        continue;
      }
      trackReference(referencePath as t.NodePath<t.Identifier>, binding);
    } else {
      trackHoistedReference(referencePath as t.NodePath<t.Identifier>, binding);
    }
  }

  for (const ref of constantViolations) {
    if (ref.isUpdateExpression()) {
      trackAssignment(ref.get("argument"), binding);
    } else if (ref.isAssignmentExpression()) {
      trackAssignment(ref.get("left"), binding);

      if (ref.node.operator !== "=") {
        /*
         * https://github.com/babel/babel/issues/11313
         * We need this so we can handle `+=` and friends
         */
        const left = ref.get("left");
        if (left.isIdentifier()) {
          trackReference(left, binding);
        }
      }
    }
  }
}

function trackAssignment(
  assignment: t.NodePath<
    t.AssignmentExpression["left"] | t.UpdateExpression["argument"]
  >,
  binding: Binding,
) {
  const section = getOrCreateSection(assignment);
  setReferencesScope(assignment);
  forEachIdentifier(assignment.node, (id) => {
    if (id.name === binding.name) {
      const extra = (id.extra ??= {});
      binding.assignmentSections = sectionUtil.add(
        binding.assignmentSections,
        section,
      );
      extra.assignment = binding;
      extra.section = section;
    }
  });
}

export function setReferencesScope(path: t.NodePath<any>) {
  const fnRoot = getFnRoot(path);
  if (fnRoot) {
    (fnRoot.node.extra ??= {}).referencesScope = true;
  }
}

function createBindingsAndTrackReferences(
  lVal: t.LVal,
  type: BindingType,
  scope: t.Scope,
  section: Section,
  upstreamAlias: Binding["upstreamAlias"] | undefined,
  property: string | undefined,
) {
  switch (lVal.type) {
    case "Identifier":
      trackReferencesForBinding(
        scope.getBinding(lVal.name)!,
        ((lVal.extra ??= {}).binding = createBinding(
          lVal.name,
          type,
          section,
          upstreamAlias,
          property,
          lVal.loc,
          true,
        )),
      );
      break;
    case "ObjectPattern": {
      const patternBinding =
        (property
          ? upstreamAlias!.propertyAliases.get(property)
          : upstreamAlias) ||
        ((lVal.extra ??= {}).binding = createBinding(
          generateUid(property || "pattern"),
          type,
          section,
          upstreamAlias,
          property,
          lVal.loc,
        ));

      for (const prop of lVal.properties) {
        if (prop.type === "RestElement") {
          // TODO: this makes rest an alias, but it really should be
          // a partial alias with some keys removed
          createBindingsAndTrackReferences(
            prop.argument,
            type,
            scope,
            section,
            patternBinding,
            property,
          );
        } else {
          let key: string;

          if (prop.key.type === "Identifier") {
            key = prop.key.name;
          } else if (prop.key.type === "StringLiteral") {
            key = prop.key.value;
          } else {
            // TODO: it should be a computed value
            throw new Error("computed keys not supported in object pattern");
          }

          createBindingsAndTrackReferences(
            prop.value as t.LVal,
            type,
            scope,
            section,
            patternBinding,
            key,
          );
        }
      }
      break;
    }
    case "ArrayPattern": {
      const patternBinding =
        (property
          ? upstreamAlias!.propertyAliases.get(property)
          : upstreamAlias) ||
        ((lVal.extra ??= {}).binding = createBinding(
          generateUid(property || "pattern"),
          type,
          section,
          upstreamAlias,
          property,
          lVal.loc,
        ));

      let i = -1;
      for (const element of lVal.elements) {
        i++;
        if (element) {
          if (element.type === "RestElement") {
            // TODO: this makes rest an alias, but it really should be
            // a partial alias with some keys removed
            createBindingsAndTrackReferences(
              element.argument,
              type,
              scope,
              section,
              patternBinding,
              property,
            );
          } else {
            createBindingsAndTrackReferences(
              element,
              type,
              scope,
              section,
              patternBinding,
              `${i}`,
            );
          }
        }
      }
      break;
    }
    case "AssignmentPattern":
      // TODO: this makes a default value an alias,
      // but it really should be a computed value
      createBindingsAndTrackReferences(
        lVal.left,
        type,
        scope,
        section,
        upstreamAlias,
        property,
      );
      break;
  }
}

function trackReference(
  referencePath: t.NodePath<t.Identifier>,
  binding: Binding,
) {
  let root: t.NodePath<t.Identifier> | t.NodePath<t.MemberExpression> =
    referencePath;
  let reference = binding;
  let propPath = binding.name;

  while (true) {
    const { parent } = root;
    if (!t.isMemberExpression(parent)) break;

    const prop = getMemberExpressionPropString(parent);
    if (prop === undefined) break;

    if (reference.propertyAliases.has(prop)) {
      root = root.parentPath as t.NodePath<t.MemberExpression>;
      reference = reference.propertyAliases.get(prop)!;
      propPath = reference.name;
      continue;
    }

    if (isInvokedFunction(root.parentPath) && !isEventOrChangeHandler(prop)) {
      break;
    }

    root = root.parentPath as t.NodePath<t.MemberExpression>;
    reference = createBinding(
      (propPath += `_${prop.replace(/[^a-zA-Z0-9_$]/g, "_")}`),
      reference.type,
      reference.section,
      reference,
      prop,
    );
  }

  const fnRoot = getFnRoot(root);
  const exprRoot = getExprRoot(fnRoot || root);
  const { section } = addReadToExpression(exprRoot, reference, root.node);

  if (fnRoot) {
    const readsByFn = getReadsByFunction();
    const fnExtra = (fnRoot.node.extra ??= {}) as FnExtra;
    fnExtra.section = section;
    readsByFn.set(
      fnExtra,
      push(readsByFn.get(fnExtra), {
        binding: reference,
        node: root.node,
      }),
    );
  }
}

const [getMergedReferences] = createProgramState(
  () => new Map<t.Node, (t.Node | undefined)[]>(),
);
export function mergeReferences<T extends t.Node>(
  section: Section,
  target: T,
  nodes: (t.Node | undefined)[],
): NonNullable<T["extra"]> {
  const targetExtra = (target.extra ??= {});
  targetExtra.section = section;
  getMergedReferences().set(target, nodes);
  return targetExtra;
}

export function compareReferences(
  a: ReferencedBindings,
  b: ReferencedBindings,
) {
  return a === b
    ? 0
    : a
      ? b
        ? Array.isArray(a)
          ? Array.isArray(b)
            ? compareIntersections(a, b)
            : -1
          : Array.isArray(b)
            ? 1
            : bindingUtil.compare(a, b)
        : 1
      : b
        ? -1
        : 0;
}

/**
 * reference group priority is sorted by number of references,
 * then if needed by reference order.
 */
function compareIntersections(a: Intersection, b: Intersection) {
  const len = a.length;
  const lenDelta = len - b.length;
  if (lenDelta !== 0) {
    return lenDelta;
  }

  for (let i = 0; i < len; i++) {
    const compareResult = bindingUtil.compare(a[i], b[i]);
    if (compareResult !== 0) {
      return compareResult;
    }
  }

  return 0;
}

export function finalizeReferences() {
  const bindings = getBindings();
  const readsByExpression = getReadsByExpression();
  const readsByFn = getReadsByFunction();
  const mergedReferences = getMergedReferences();

  if (mergedReferences.size) {
    for (const [target, nodes] of mergedReferences) {
      const targetExtra = target.extra as ReferencedExtra;
      let reads = readsByExpression.get(targetExtra);
      let { isEffect } = targetExtra;
      for (const node of nodes) {
        const extra = node?.extra;
        if (isReferencedExtra(extra)) {
          isEffect ||= extra.isEffect;
          const additionalReads = readsByExpression.get(extra);
          if (additionalReads) {
            reads = concat(reads, additionalReads);
            readsByExpression.delete(extra);
          }
        }
      }

      readsByExpression.set(targetExtra, reads);
      targetExtra.isEffect = isEffect;
    }
  }

  const intersectionsBySection = new Map<Section, Intersection[]>();
  for (const [expr, reads] of readsByExpression) {
    if (isReferencedExtra(expr)) {
      expr.referencedBindings = resolveReferencedBindings(
        expr,
        reads,
        intersectionsBySection,
      );
      forEach(expr.referencedBindings, (binding) => {
        binding.downstreamExpressions.add(expr);
      });
    }
  }

  for (const [fn, reads] of readsByFn) {
    fn.referencedBindingsInFunction = resolveReferencedBindings(
      fn,
      reads,
      intersectionsBySection,
    );

    forEach(fn.referencedBindingsInFunction, (binding) =>
      forceBindingSerialize(binding.section, binding),
    );
  }

  for (const binding of bindings) {
    if (binding.type !== BindingType.dom && !binding.upstreamAlias) {
      pruneBinding(bindings, binding);
    }
  }

  for (const binding of bindings) {
    const { name, section } = binding;
    if (binding.type !== BindingType.dom) {
      resolveBindingSources(binding);
      if (binding.hoists.size) {
        forceBindingSerialize(binding.section, binding);
      }

      forEach(binding.assignmentSections, (assignedSection) =>
        forceOwnersSerialize(assignedSection, section, getAccessorProp().Owner),
      );

      if (find(section.bindings, ({ name }) => name === binding.name)) {
        /*
          TODO: this will break if parent sections use the generated UID.
          ```
          let/_count
          my-tag
            let/count
            div
              let/count
              -- ${_count}
          ```
        */
        binding.name = generateUid(name);
      }
    }

    section.bindings = bindingUtil.add(section.bindings, binding);
    for (const {
      referencedBindings,
      isEffect,
      section,
    } of binding.downstreamExpressions) {
      if (section !== binding.section) {
        const canonicalUpstreamAlias = getCanonicalBinding(binding)!;
        canonicalUpstreamAlias.closureSections = sectionUtil.add(
          canonicalUpstreamAlias.closureSections,
          section,
        );

        if (binding.type === BindingType.local) {
          section.referencedLocalClosures = bindingUtil.add(
            section.referencedLocalClosures,
            binding,
          );
        } else {
          section.referencedClosures = bindingUtil.add(
            section.referencedClosures,
            binding,
          );

          addOwnersSerializeReason(
            section,
            canonicalUpstreamAlias.section,
            !!isEffect || canonicalUpstreamAlias.sources,
            getAccessorProp().Owner,
          );
        }
      }
      if (isEffect) {
        forEach(referencedBindings, (binding) =>
          forceBindingSerialize(binding.section, binding),
        );
      }
    }
  }

  forEachSection((section) => {
    if (section.isHoistThrough) {
      forceSectionSerialize(section);
    }

    forEach(section.referencedHoists, (hoistedBinding) => {
      forceOwnersSerialize(
        section,
        hoistedBinding.section,
        getAccessorProp().Owner,
      );
    });

    if (
      section.parent &&
      section.isBranch &&
      section.sectionAccessor &&
      section.upstreamExpression
    ) {
      addSectionSerializeReasonRef(
        section,
        !!(section.isHoistThrough || section.hoisted) ||
          getDirectClosures(section),
        kBranchSerializeReason,
      );
      addSectionSerializeReasonExpr(
        section,
        section.upstreamExpression,
        kBranchSerializeReason,
      );
      addBindingSerializeReasonExpr(
        section.parent,
        section.sectionAccessor.binding,
        section.upstreamExpression,
      );
    }
  });

  forEachSection(applySerializeReasonExprs);

  forEachSection((section) => {
    const intersections = intersectionsBySection.get(section);
    if (intersections) {
      // mark bindings that need to be serialized due to being in an intersection with state
      for (const intersection of intersections) {
        const numReferences = intersection.length;
        // TODO: in some cases we should be able to short circuit this
        // if we know that the references are already serialized
        for (let i = 0; i < numReferences - 1; i++) {
          for (let j = i + 1; j < numReferences; j++) {
            const binding1 = intersection[i];
            const binding2 = intersection[j];
            if (
              !isBindingForceSerialized(section, binding1) &&
              !isSupersetSources(binding1, binding2)
            ) {
              if (!isSameOrChildSection(section, binding1.section)) {
                addOwnersSerializeReason(
                  section,
                  binding1.section,
                  mergeSerializeReasons(
                    // TODO should check for an actual intersection, not just stateful
                    binding1.sources,
                    binding2.sources,
                  ),
                  getAccessorProp().Owner,
                );
              }

              addBindingSerializeReason(
                binding1.section,
                binding1,
                binding2.sources, // TODO should check for an actual intersection, not just binding2.sources stateful
              );
            }
            if (
              !isBindingForceSerialized(section, binding2) &&
              !isSupersetSources(binding2, binding1)
            ) {
              if (!isSameOrChildSection(section, binding2.section)) {
                addOwnersSerializeReason(
                  section,
                  binding2.section,
                  mergeSerializeReasons(
                    // TODO should check for an actual intersection, not just stateful
                    binding1.sources,
                    binding2.sources,
                  ),
                  getAccessorProp().Owner,
                );
              }
              addBindingSerializeReason(
                binding2.section,
                binding2,
                binding1.sources, // TODO should check for an actual intersection, not just binding1.sources stateful
              );
            }
          }
        }
      }
    }

    forEach(section.referencedLocalClosures, (closure) => {
      // mark bindings that need to be serialized due to being closed over by stateful sections
      if (!isBindingForceSerialized(section, closure)) {
        const sourceSection = closure.section;
        let serializeReason: undefined | SerializeReason;
        let currentSection = section;

        while (currentSection !== sourceSection) {
          const upstreamReason =
            !currentSection.upstreamExpression ||
            getSerializeSourcesForExpr(currentSection.upstreamExpression);
          if (upstreamReason === true) {
            serializeReason = true;
            break;
          }

          serializeReason = mergeSerializeReasons(
            serializeReason,
            upstreamReason,
          );
          currentSection = currentSection.parent!;
        }

        addBindingSerializeReason(section, closure, serializeReason);
      }

      if (closure.sources) {
        addSectionSerializeReason(
          section,
          getBindingSerializeReason(section, closure),
        );
      }
    });

    forEach(section.referencedClosures, (closure) => {
      // mark bindings that need to be serialized due to being closed over by stateful sections
      if (!isBindingForceSerialized(closure.section, closure)) {
        const sourceSection = closure.section;
        let serializeReason: undefined | SerializeReason;
        let currentSection = section;

        while (currentSection !== sourceSection) {
          const upstreamReason =
            !currentSection.upstreamExpression ||
            getSerializeSourcesForExpr(currentSection.upstreamExpression);
          if (upstreamReason === true) {
            serializeReason = true;
            break;
          }

          serializeReason = mergeSerializeReasons(
            serializeReason,
            upstreamReason,
          );
          currentSection = currentSection.parent!;
        }

        addBindingSerializeReason(closure.section, closure, serializeReason);
      }

      if (closure.sources) {
        addSectionSerializeReason(
          closure.section,
          getBindingSerializeReason(closure.section, closure),
        );
      }

      if (closure.sources && isDynamicClosure(section, closure)) {
        addBindingSerializeReason(
          closure.section,
          closure,
          closure.sources,
          getAccessorPrefix().ClosureScopes,
        );
        addBindingSerializeReason(
          section,
          closure,
          closure.sources,
          getAccessorPrefix().ClosureSignalIndex,
        );
      }
    });
  });

  let inputSerializeReasons: undefined | InputSerializeReasons;
  forEachSection((section) => {
    finalizeSectionSerializeReasons(section);

    if (
      section.serializeReason &&
      section.serializeReason !== true &&
      section.serializeReason.input
    ) {
      inputSerializeReasons = inputSerializeReasons
        ? addSorted(
            compareReferences,
            inputSerializeReasons,
            section.serializeReason.input,
          )
        : [section.serializeReason.input];
    }

    for (const [, reason] of section.serializeReasons) {
      if (reason !== true && reason.input) {
        inputSerializeReasons = inputSerializeReasons
          ? addSorted(compareReferences, inputSerializeReasons, reason.input)
          : [reason.input];
      }
    }
  });

  const programExtra = getProgram().node.extra;
  if (programExtra.returnValueExpr) {
    const returnSources = getSerializeSourcesForExpr(
      programExtra.returnValueExpr,
    );
    if (returnSources) {
      programExtra.returnSerializeReason = returnSources.state
        ? true
        : returnSources.input;
    }
  }
  programExtra.inputSerializeReasons = inputSerializeReasons;

  forEachSection((section) => {
    let intersectionIndex = 0;
    const intersections = intersectionsBySection.get(section) || [];
    const { id, bindings } = section;
    const isOwnedBinding = ({ section }: Binding) => section.id === id;
    let lastBindingIndex = 0;
    let intersection: Intersection;
    forEach(filter(bindings, isOwnedBinding), (binding, bindingIndex) => {
      binding.id = (lastBindingIndex = bindingIndex) + intersectionIndex;
      while (
        intersectionIndex < intersections.length &&
        (intersection = intersections[intersectionIndex])
          .filter(isOwnedBinding)
          .at(-1) === binding
      ) {
        intersectionMeta.set(intersection, {
          id: bindingIndex + ++intersectionIndex,
          scopeOffset: getMaxOwnSourceOffset(intersection, section),
        });
      }
    });

    while (intersectionIndex < intersections.length) {
      intersection = intersections[intersectionIndex];
      intersectionMeta.set(intersection, {
        id: lastBindingIndex + ++intersectionIndex,
        scopeOffset: getMaxOwnSourceOffset(intersection, section),
      });
    }
  });

  mergedReferences.clear();
  readsByExpression.clear();
  readsByFn.clear();
}

function getMaxOwnSourceOffset(intersection: Intersection, section: Section) {
  let scopeOffset: Binding | undefined;

  for (const binding of intersection) {
    if (binding.section === section && binding.sources) {
      const trackScopeOffset = (source: Binding) => {
        if (
          source.scopeOffset &&
          (!scopeOffset || scopeOffset.id < source.scopeOffset.id)
        ) {
          scopeOffset = source.scopeOffset;
        }
      };
      forEach(binding.sources.state, trackScopeOffset);
      forEach(binding.sources.input, trackScopeOffset);
    }
  }

  return scopeOffset;
}

export const intersectionMeta = new WeakMap<
  Intersection,
  { id: number; scopeOffset: Binding | undefined }
>();

export function setBindingValueExpr(
  binding: Binding,
  valueExpr: boolean | Opt<t.NodeExtra>,
) {
  bindingValueExprs.set(binding, valueExpr || false);
}

const resolvedSources = new WeakSet<Binding>();
const bindingValueExprs = new WeakMap<Binding, boolean | Opt<t.NodeExtra>>();
function resolveBindingSources(binding: Binding) {
  if (resolvedSources.has(binding)) return;
  resolvedSources.add(binding);

  switch (binding.type) {
    case BindingType.let:
      binding.sources = createSources(binding, undefined);
      return;
    case BindingType.input:
      binding.sources = createSources(undefined, binding as InputBinding);
      return;
  }

  if (binding.upstreamAlias) {
    let alias: Binding | undefined;
    let source = binding;
    while ((alias = source.upstreamAlias)) {
      source = alias;
    }

    if (!resolvedSources.has(source)) {
      resolvedSources.add(source);
      resolveDerivedSources(source);
    }

    binding.sources = source.sources;
  } else {
    resolveDerivedSources(binding);
  }
}

function resolveDerivedSources(binding: Binding) {
  const exprs = bindingValueExprs.get(binding);
  bindingValueExprs.delete(binding);

  if (exprs === undefined || exprs === true) {
    binding.sources = createSources(binding, undefined);
  } else if (exprs) {
    const seen = new Set<Binding>();
    forEach(exprs, (expr) => {
      if (isReferencedExtra(expr)) {
        forEach(expr.referencedBindings, (ref) => {
          if (!seen.has(ref)) {
            seen.add(ref);
            resolveBindingSources(ref);
            binding.sources = mergeSources(binding.sources, ref.sources);
          }
        });
      }
    });
  }
}

export function createSources(
  state: Sources["state"],
  input: Sources["input"],
): Sources {
  if (!(state || input)) {
    throw new Error(
      "Cannot create a serialize reason that does not reference state or input.",
    );
  }

  return { state, input } as Sources;
}

export function compareSources(a: Sources, b: Sources) {
  let delta = 0;

  if (a.input) {
    if (!b.input) return 1;
    if ((delta = compareReferences(a.input, b.input))) return delta;
  } else if (b.input) {
    return -1;
  }

  if (a.state) {
    if (!b.state) return 1;
    if ((delta = compareReferences(a.state, b.state))) return delta;
  } else if (b.state) {
    return -1;
  }

  return 0;
}

export function mergeSources(a: undefined | Sources, b: undefined | Sources) {
  if (!a) return b;
  if (!b) return a;
  if (a.state === b.state && a.input === b.input) return a;
  return createSources(
    bindingUtil.union(a.state, b.state),
    bindingUtil.union(a.input, b.input),
  );
}

export const bindingUtil = new Sorted(function compareBindings(
  a: Binding,
  b: Binding,
) {
  return a === b
    ? 0
    : a.section.id - b.section.id ||
        (a.type !== b.type &&
          (a.type === BindingType.dom || b.type === BindingType.dom))
      ? a.type - b.type || a.id - b.id
      : a.id - b.id;
});

const [getReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Opt<Read>>(),
);
const [getReadsByFunction] = createProgramState(
  () => new Map<FnExtra, Opt<Read>>(),
);

export function addReadToExpression(
  path: t.NodePath,
  binding: Binding,
  node?: t.Identifier | t.MemberExpression,
) {
  const exprExtra = (path.node.extra ??= {}) as ReferencedExtra;
  const readsByExpression = getReadsByExpression();
  exprExtra.section = getOrCreateSection(path);
  readsByExpression.set(
    exprExtra,
    push(readsByExpression.get(exprExtra), { binding, node }),
  );
  return exprExtra;
}

export function dropReferences(node: t.Node | t.Node[]) {
  if (Array.isArray(node)) {
    for (const item of node) {
      (item.extra ??= {}).pruned = true;
    }
  } else {
    (node.extra ??= {}).pruned = true;
  }
}

export function getCanonicalBinding(binding?: Binding) {
  return (
    binding && (binding.property ? binding : binding.upstreamAlias || binding)
  );
}

export function getAllTagReferenceNodes(
  tag: t.MarkoTag,
  referenceNodes: t.Node[] = [],
) {
  if (tag.arguments) {
    for (const arg of tag.arguments) {
      referenceNodes.push(arg);
    }
  }

  for (const attr of tag.attributes) {
    referenceNodes.push(attr.value);
  }

  for (const child of tag.body.attributeTags
    ? tag.body.body
    : tag.attributeTags) {
    switch (child.type) {
      case "MarkoTag":
        getAllTagReferenceNodes(child, referenceNodes);
        break;
      case "MarkoScriptlet":
        for (const statement of child.body) {
          referenceNodes.push(statement);
        }
        break;
    }
  }

  return referenceNodes;
}

export function getScopeAccessorLiteral(binding: Binding, includeId?: boolean) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (isOptimize()) {
    return t.numericLiteral(canonicalBinding.id);
  }

  return t.stringLiteral(
    canonicalBinding.name +
      (includeId || canonicalBinding.type === BindingType.dom
        ? `/${canonicalBinding.id}`
        : ""),
  );
}

export function getScopeAccessor(binding: Binding, includeId?: boolean) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (isOptimize()) {
    return canonicalBinding.id + "";
  }

  return (
    canonicalBinding.name +
    (includeId || canonicalBinding.type === BindingType.dom
      ? `/${canonicalBinding.id}`
      : "")
  );
}

export function getDebugScopeAccess(binding: Binding) {
  let root = binding;
  let access = "";
  while (!(root.loc || root.declared) && root.upstreamAlias) {
    if (root.property !== undefined) {
      access = toAccess(root.property) + access;
    }
    root = root.upstreamAlias;
  }

  return {
    root,
    access,
  };
}

export function getDebugName(binding: Binding) {
  const { root, access } = getDebugScopeAccess(binding);
  return root.name + access;
}

export function getInputDebugName(binding: InputBinding) {
  let root = binding;
  let access = "";
  while (root.upstreamAlias !== root.section.params) {
    if (root.property !== undefined) {
      access = toAccess(root.property) + access;
    }
    root = root.upstreamAlias as InputBinding;
  }

  return root.name + access;
}

export function getSectionInstancesAccessor(section: Section) {
  return section.sectionAccessor
    ? section.sectionAccessor.prefix +
        getScopeAccessor(section.sectionAccessor.binding)
    : getAccessorPrefix().ClosureScopes + section.id;
}

export function getSectionInstancesAccessorLiteral(section: Section) {
  const accessor = getSectionInstancesAccessor(section);
  return accessor
    ? typeof accessor === "number"
      ? t.numericLiteral(accessor)
      : t.stringLiteral(accessor)
    : undefined;
}

export function getReadReplacement(node: t.Identifier | t.MemberExpression) {
  const { extra } = node;
  if (!extra) return;
  let { binding, read } = extra;
  let replacement: t.Node | undefined;

  if (read) {
    if (read.props === undefined) {
      binding = read.binding;
      read = undefined;
    } else {
      binding = undefined;
    }
  }

  if (binding) {
    if (node.type === "Identifier") {
      if (binding.type === BindingType.hoist) {
        replacement = node.extra?.[kIsInvoked]
          ? t.callExpression(getHoistFunctionIdentifier(binding), [
              getScopeExpression(node.extra.section!, binding.section),
            ])
          : t.identifier(getScopeAccessor(binding)!);
      } else if (binding.name !== node.name) {
        node.name = binding.name;
      }
    } else {
      replacement = t.identifier(binding.name);
    }
  } else if (read) {
    replacement = toMemberExpression(
      t.identifier(read.binding.name),
      Array.isArray(read.props) ? read.props[0] : read.props!,
    );

    if (Array.isArray(read.props)) {
      for (let i = 1; i < read.props.length; i++) {
        replacement = toMemberExpression(replacement, read.props[i]);
      }
    }
  }

  return replacement && withPreviousLocation(replacement, node);
}

function pruneBinding(bindings: Set<Binding>, binding: Binding) {
  let shouldPrune = !binding.downstreamExpressions.size;

  if (binding.hoists.size) {
    // TODO hoists do not currently know their downstream expressions and so cannot be pruned like aliases.
    shouldPrune = false;
    // for (const [hoistSection, hoistAlias] of binding.hoists) {
    //   if (pruneBinding(bindings, hoistAlias)) {
    //     binding.hoists.delete(hoistSection);
    //   } else {
    //     shouldPrune = false;
    //   }
    // }
  }

  for (const alias of binding.aliases) {
    if (pruneBinding(bindings, alias)) {
      binding.aliases.delete(alias);
    } else {
      shouldPrune = false;
    }
  }

  for (const [key, alias] of binding.propertyAliases) {
    if (pruneBinding(bindings, alias)) {
      binding.propertyAliases.delete(key);
    } else {
      shouldPrune = false;
    }
  }

  if (shouldPrune) {
    bindings.delete(binding);
  }

  return shouldPrune;
}

function resolveReferencedBindings(
  expr: { section: Section },
  reads: Opt<Read>,
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  let referencedBindings: ReferencedBindings;
  if (Array.isArray(reads)) {
    for (const read of reads) {
      let { binding } = read;
      if (read.node) {
        const exprReference = ((read.node.extra ??= {}).read ??=
          resolveExpressionReference(reads, binding, undefined));
        ({ binding } = (read.node.extra ??= {}).read = exprReference);
      }

      referencedBindings = bindingUtil.add(referencedBindings, binding);
    }
  } else if (reads) {
    if (reads.node) {
      (reads.node.extra ??= {}).read = createRead(reads.binding, undefined);
    }
    referencedBindings = reads.binding;
  }

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
  return referencedBindings;
}

function resolveExpressionReference(
  reads: Opt<Read>,
  readBinding: Binding,
  readProps: Opt<string>,
) {
  const { upstreamAlias } = readBinding;
  if (upstreamAlias && Array.isArray(reads)) {
    const prop = getCanonicalProperty(readBinding);
    const aliasProps = prop === undefined ? readProps : push(readProps, prop);
    for (const { binding } of reads) {
      if (binding !== readBinding) {
        let alias = upstreamAlias;

        while (alias) {
          if (binding === alias) {
            return resolveExpressionReference(reads, alias, aliasProps);
          }

          alias = alias.upstreamAlias!;
        }
      }
    }
  }

  return createRead(readBinding, readProps);
}

function isSupersetSources(a: Binding, b: Binding) {
  if (!b.sources) return true;
  if (!a.sources) return false;
  return (
    bindingUtil.isSuperset(a.sources.state, b.sources.state) &&
    bindingUtil.isSuperset(a.sources.input, b.sources.input)
  );
}

function getCanonicalProperty(binding: Binding) {
  return binding.property ?? binding.upstreamAlias?.property;
}

function createRead(binding: Binding, props: Opt<string>) {
  return { binding, props };
}

function getMemberExpressionPropString(expr: t.MemberExpression) {
  switch (expr.property.type) {
    case "StringLiteral":
      return expr.property.value;
    case "NumericLiteral":
      return "" + expr.property.value;
    case "Identifier":
      if (expr.computed) return;
      return expr.property.name;
  }
}

function isEventOrChangeHandler(prop: string) {
  return /^on[-A-Z][a-zA-Z0-9_$]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$/.test(prop);
}

export interface ReferencedExtra extends t.NodeExtra {
  section: Section;
}
export function isReferencedExtra(
  extra: t.NodeExtra | undefined,
): extra is ReferencedExtra {
  return !!(extra && !extra.pruned && extra.section);
}

export interface AssignedBindingExtra extends ReferencedExtra {
  assignment: Binding;
}
export function isAssignedBindingExtra(
  extra: t.NodeExtra | undefined,
): extra is AssignedBindingExtra {
  return isReferencedExtra(extra) && extra.assignment !== undefined;
}

export interface RegisteredFnExtra extends ReferencedExtra {
  registerId: string;
  name: string;
  referencesScope?: boolean;
  referencedBindingsInFunction: ReferencedBindings;
}
export function isRegisteredFnExtra(
  extra: t.NodeExtra | undefined,
): extra is RegisteredFnExtra {
  return isReferencedExtra(extra) && extra.registerId !== undefined;
}

import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { toAccess } from "../../html/serializer";
import { finalizeFunctionRegistry } from "../visitors/function";
import { forEachIdentifierPath } from "./for-each-identifier";
import { generateUid } from "./generate-uid";
import { getAccessorPrefix } from "./get-accessor-char";
import { getExprRoot, getFnRoot } from "./get-root";
import { isEventOrChangeHandler } from "./is-event-or-change-handler";
import isInvokedFunction from "./is-invoked-function";
import { finalizeKnownTags } from "./known-tag";
import { isOptimize } from "./marko-config";
import {
  addSorted,
  concat,
  filter,
  find,
  findSorted,
  forEach,
  type Many,
  mapToString,
  type Opt,
  push,
  Sorted,
} from "./optional";
import { getScopeExpression } from "./scope-read";
import {
  finalizeParamSerializeReasonGroups,
  forEachSection,
  forEachSectionReverse,
  getCommonSection,
  getDirectClosures,
  getOrCreateSection,
  getSectionRegisterReasons,
  isDynamicClosure,
  isSameOrChildSection,
  type Section,
  sectionUtil,
} from "./sections";
import {
  addOwnerSerializeReason,
  addSerializeExpr,
  addSerializeReason,
  applySerializeExprs,
  finalizeSerializeReason,
  getSerializeReason,
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
  isForceSerialized,
  mergeSerializeReasons,
  type SerializeReason,
} from "./serialize-reasons";
import { finalizeTagDownstreams } from "./set-tag-sections-downstream";
import { getRegisterUID } from "./signals";
import { getBindingGetterIdentifier } from "./signals";
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
  param: Opt<InputBinding | ParamBinding>;
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
  excludeProperties: Opt<string>;
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

export interface ParamBinding extends Binding {
  type: BindingType.param;
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
  node:
    | undefined
    | t.Identifier
    | t.MemberExpression
    | t.OptionalMemberExpression;
}

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    section?: Section;
    referencedBindings?: ReferencedBindings;
    downstream?: Opt<Binding>;
    binding?: Binding;
    assignment?: Binding;
    assignmentTo?: Binding;
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
  excludeProperties?: Opt<string>,
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
    excludeProperties,
    sources: undefined,
    aliases: new Set(),
    hoists: new Map(),
    propertyAliases: new Map(),
    upstreamAlias,
    downstreamExpressions: new Set(),
    scopeOffset: undefined,
    export: undefined,
    nullable: excludeProperties === undefined,
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

export function trackDomVarReferences(
  tag: t.NodePath<t.MarkoTag>,
  binding: Binding,
) {
  const tagVar = tag.node.var;
  if (!tagVar) {
    return;
  }
  if (!t.isIdentifier(tagVar)) {
    throw tag
      .get("var")
      .buildCodeFrameError(
        "Tag variables on native elements cannot be destructured.",
      );
  }

  const babelBinding = tag.scope.getBinding(tagVar.name)!;
  const section = getOrCreateSection(tag);

  if (babelBinding.constantViolations.length) {
    throw babelBinding.constantViolations[0].buildCodeFrameError(
      "Tag variables on native elements cannot be assigned to.",
    );
  }

  let registerId: string | undefined;
  for (const ref of babelBinding.referencePaths as t.NodePath<t.Identifier>[]) {
    const refSection = getOrCreateSection(ref);
    setReferencesScope(ref);
    if (isSameOrChildSection(binding.section, refSection)) {
      (ref.node.extra ??= {}).read = createRead(binding, undefined);

      if (!isInvokedFunction(ref)) {
        section.domGetterBindings.set(
          binding,
          (registerId ??= getRegisterUID(section, binding.name)),
        );
      }

      addOwnerSerializeReason(refSection, section, true);
    } else {
      trackHoistedReference(ref, binding);
    }
  }

  return binding;
}

export function trackVarReferences(
  tag: t.NodePath<t.MarkoTag>,
  type: BindingType,
  upstreamAlias?: Binding["upstreamAlias"],
) {
  const tagVar = tag.node.var;
  if (tagVar) {
    let canonicalUpstreamAlias =
      upstreamAlias && getCanonicalBinding(upstreamAlias);
    if (canonicalUpstreamAlias) {
      const { excludeProperties } = canonicalUpstreamAlias;
      if (excludeProperties !== undefined) {
        canonicalUpstreamAlias = canonicalUpstreamAlias.upstreamAlias!;
      }
      createBindingsAndTrackReferences(
        tagVar,
        canonicalUpstreamAlias.type,
        tag.scope,
        canonicalUpstreamAlias.section,
        canonicalUpstreamAlias,
        undefined,
        excludeProperties,
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
    const canonicalUpstreamAlias =
      upstreamAlias && getCanonicalBinding(upstreamAlias);
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
        undefined,
        params[0].loc,
      ));

    section.params = paramsBinding as ParamBinding;

    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      if (param.type === "RestElement") {
        createBindingsAndTrackReferences(
          param.argument,
          type,
          body.scope,
          section,
          paramsBinding,
          undefined,
          i > 0 ? addNumericPropertiesUntil(undefined, i - 1) : undefined,
        );
      } else if (t.isLVal(param)) {
        createBindingsAndTrackReferences(
          param,
          type,
          body.scope,
          section,
          paramsBinding,
          i + "",
          undefined,
        );
      }
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
  const fnRoot = getFnRoot(assignment);
  const fnExtra = fnRoot && ((fnRoot.node.extra ??= {}) as FnExtra);
  const section = getOrCreateSection(assignment);
  setReferencesScope(assignment);
  forEachIdentifierPath(assignment, (id) => {
    if (id.node.name === binding.name) {
      const extra = (id.node.extra ??= {}) as AssignedBindingExtra;

      if (binding.upstreamAlias && binding.property !== undefined) {
        const changePropName = binding.property + "Change";
        const changeBinding =
          binding.upstreamAlias.propertyAliases.get(changePropName) ||
          createBinding(
            generateUid(changePropName),
            binding.type,
            binding.section,
            binding.upstreamAlias,
            changePropName,
            undefined,
            id.node.loc,
            true,
          );
        extra.assignmentTo = changeBinding;
        addReadToExpression(id, changeBinding);
      }

      binding.assignmentSections = sectionUtil.add(
        binding.assignmentSections,
        section,
      );
      extra.assignment = binding;
      extra.section = section;
      extra.fnExtra = fnExtra;
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
  excludeProperties: Opt<string>,
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
          excludeProperties,
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
          excludeProperties,
          lVal.loc,
        ));

      const hasRest =
        lVal.properties[lVal.properties.length - 1]?.type === "RestElement";
      for (const prop of lVal.properties) {
        if (prop.type === "RestElement") {
          createBindingsAndTrackReferences(
            prop.argument,
            type,
            scope,
            section,
            patternBinding,
            property,
            excludeProperties,
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

          if (hasRest) {
            excludeProperties = propsUtil.add(excludeProperties, key);
          }

          if (t.isLVal(prop.value)) {
            createBindingsAndTrackReferences(
              prop.value,
              type,
              scope,
              section,
              patternBinding,
              key,
              undefined,
            );
          }
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
          excludeProperties,
          lVal.loc,
        ));

      let i = -1;
      for (const element of lVal.elements) {
        i++;
        if (element) {
          if (element.type === "RestElement") {
            excludeProperties =
              i > 0
                ? addNumericPropertiesUntil(excludeProperties, i - 1)
                : undefined;
            createBindingsAndTrackReferences(
              element.argument,
              type,
              scope,
              section,
              patternBinding,
              property,
              excludeProperties,
            );
          } else if (t.isLVal(element)) {
            createBindingsAndTrackReferences(
              element,
              type,
              scope,
              section,
              patternBinding,
              `${i}`,
              undefined,
            );
          }
        }
      }
      break;
    }
  }
}

function trackReference(
  referencePath: t.NodePath<t.Identifier>,
  binding: Binding,
) {
  let root:
    | t.NodePath<t.Identifier>
    | t.NodePath<t.MemberExpression>
    | t.NodePath<t.OptionalMemberExpression> = referencePath;
  let reference = binding;
  let propPath = binding.name;

  while (true) {
    const { parent } = root;
    if (!t.isMemberExpression(parent) && !t.isOptionalMemberExpression(parent))
      break;

    const prop = getMemberExpressionPropString(parent);
    if (prop === undefined) break;

    if (
      reference.upstreamAlias &&
      reference.excludeProperties !== undefined &&
      !propsUtil.has(reference.excludeProperties, prop)
    ) {
      reference = reference.upstreamAlias;
    }

    if (reference.propertyAliases.has(prop)) {
      root = root.parentPath as
        | t.NodePath<t.MemberExpression>
        | t.NodePath<t.OptionalMemberExpression>;
      reference = reference.propertyAliases.get(prop)!;
      propPath = reference.name;
      continue;
    }

    if (isInvokedFunction(root.parentPath) && !isEventOrChangeHandler(prop)) {
      break;
    }

    root = root.parentPath as
      | t.NodePath<t.MemberExpression>
      | t.NodePath<t.OptionalMemberExpression>;
    reference = createBinding(
      (propPath += `_${prop.replace(/[^a-zA-Z0-9_$]/g, "_")}`),
      reference.type,
      reference.section,
      reference,
      prop,
    );
  }

  addReadToExpression(root, reference);
}

const [getMergedReferences] = createProgramState(
  () => new Map<t.Node, (t.Node | undefined)[]>(),
);
export function mergeReferences<T extends t.Node>(
  section: Section,
  target: T,
  nodes: (t.Node | undefined)[],
): NonNullable<T["extra"]> & ReferencedExtra {
  const targetExtra = (target.extra ??= {});
  targetExtra.section = section;
  getMergedReferences().set(target, nodes);
  return targetExtra as NonNullable<T["extra"]> & ReferencedExtra;
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
        if (extra) {
          setCanonicalExtra(extra, targetExtra);
          if (isReferencedExtra(extra)) {
            const additionalReads = readsByExpression.get(extra);
            isEffect ||= extra.isEffect;
            if (additionalReads) {
              reads = concat(reads, additionalReads);
              readsByExpression.delete(extra);
            }
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

  for (const binding of bindings) {
    if (binding.type !== BindingType.dom && !binding.upstreamAlias) {
      pruneBinding(bindings, binding);
    }
  }

  forEachSection(finalizeTagDownstreams);

  for (const binding of bindings) {
    const { name, section } = binding;
    if (binding.type !== BindingType.dom) {
      resolveBindingSources(binding);
      if (binding.hoists.size) {
        addSerializeReason(binding.section, true, binding);
      }

      forEach(binding.assignmentSections, (assignedSection) =>
        addOwnerSerializeReason(assignedSection, section, true),
      );

      if (find(section.bindings, ({ name }) => name === binding.name)) {
        binding.name = generateUid(name);
      }
    }

    section.bindings = bindingUtil.add(
      section.bindings,
      getCanonicalBinding(binding),
    );
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

          addOwnerSerializeReason(
            section,
            canonicalUpstreamAlias.section,
            !!isEffect || canonicalUpstreamAlias.sources,
          );
        }
      }
      if (isEffect) {
        forEach(referencedBindings, (binding) =>
          addSerializeReason(binding.section, true, binding),
        );
      }
    }
  }

  forEachSection((section) => {
    if (section.isHoistThrough) {
      addSerializeReason(section, true);
    }

    forEach(section.referencedHoists, (hoistedBinding) => {
      addOwnerSerializeReason(section, hoistedBinding.section, true);
    });

    if (
      section.parent &&
      section.isBranch &&
      section.sectionAccessor &&
      section.upstreamExpression
    ) {
      addSerializeReason(
        section,
        !!(section.isHoistThrough || section.hoisted) ||
          getSerializeSourcesForRef(getDirectClosures(section)),
        kBranchSerializeReason,
      );
      addSerializeExpr(
        section,
        section.upstreamExpression,
        kBranchSerializeReason,
      );
      addSerializeExpr(
        section.parent,
        section.upstreamExpression,
        section.sectionAccessor.binding,
      );
    }
  });

  forEachSection(applySerializeExprs);

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
              !isForceSerialized(section, binding1) &&
              !isSupersetSources(binding1, binding2)
            ) {
              if (!isSameOrChildSection(section, binding1.section)) {
                addOwnerSerializeReason(
                  section,
                  binding1.section,
                  mergeSources(binding1.sources, binding2.sources),
                );
              }

              addSerializeReason(binding1.section, binding2.sources, binding1);
            }
            if (
              !isForceSerialized(section, binding2) &&
              !isSupersetSources(binding2, binding1)
            ) {
              if (!isSameOrChildSection(section, binding2.section)) {
                addOwnerSerializeReason(
                  section,
                  binding2.section,
                  mergeSources(binding1.sources, binding2.sources),
                );
              }
              addSerializeReason(binding2.section, binding1.sources, binding2);
            }
          }
        }
      }
    }
  });

  forEachSection((section) => {
    forEach(section.referencedLocalClosures, (closure) => {
      // Local closures inherit serialize reasons from the owner section.
      addSerializeReason(
        section,
        getSerializeReason(closure.section, closure),
        closure,
      );
    });

    forEach(section.referencedClosures, (closure) => {
      // mark bindings that need to be serialized due to being closed over by stateful sections
      const sourceSection = closure.section;
      let currentSection = section;
      let branchesReason: undefined | SerializeReason;

      while (currentSection !== sourceSection) {
        const upstreamReason = currentSection.downstreamBinding
          ? getSectionRegisterReasons(currentSection) || undefined
          : !currentSection.upstreamExpression ||
            getSerializeSourcesForExpr(currentSection.upstreamExpression);
        if (upstreamReason === true) {
          branchesReason = true;
          break;
        }

        branchesReason = mergeSerializeReasons(branchesReason, upstreamReason);
        currentSection = currentSection.parent!;
      }

      addSerializeReason(sourceSection, branchesReason, closure);
      addSerializeReason(
        sourceSection,
        getSerializeReason(sourceSection, closure),
      );

      if (isDynamicClosure(section, closure)) {
        addOwnerSerializeReason(section, sourceSection, branchesReason);

        if (closure.sources) {
          addSerializeReason(
            sourceSection,
            closure.sources,
            closure,
            getAccessorPrefix().ClosureScopes,
          );
          addSerializeReason(
            section,
            closure.sources,
            closure,
            getAccessorPrefix().ClosureSignalIndex,
          );
        }
      }
    });
  });

  finalizeFunctionRegistry();
  for (const [fn, reads] of readsByFn) {
    const { registerReason } = fn;
    fn.referencedBindingsInFunction = resolveReferencedBindings(
      fn,
      reads,
      intersectionsBySection,
    );
    if (registerReason) {
      forEach(fn.referencedBindingsInFunction, (binding) =>
        addSerializeReason(binding.section, registerReason, binding),
      );
    }
  }

  forEachSectionReverse((section) => {
    finalizeParamSerializeReasonGroups(section);
    finalizeKnownTags(section);
    finalizeSerializeReason(section);
    // TODO: this duplication is needed when a known tag is circular. We should find a better way.
    finalizeParamSerializeReasonGroups(section);
  });

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

  const programExtra = getProgram().node.extra;
  if (programExtra.returnValueExpr) {
    programExtra.section!.returnSerializeReason = getSerializeSourcesForExpr(
      programExtra.returnValueExpr,
    );
  }

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
      forEach(binding.sources.param, trackScopeOffset);
    }
  }

  return scopeOffset;
}

export const intersectionMeta = new WeakMap<
  Intersection,
  { id: number; scopeOffset: Binding | undefined }
>();

export function setBindingDownstream(
  binding: Binding,
  expr: boolean | Opt<t.NodeExtra>,
) {
  getBindingValueExprs().set(binding, expr || false);
  if (expr && expr !== true) {
    forEach(expr, (expr) => {
      expr.downstream = bindingUtil.add(expr.downstream, binding);
    });
  }
}

const [getResolvedSources] = createProgramState(() => new Set<Binding>());
const [getBindingValueExprs] = createProgramState(
  () => new Map<Binding, boolean | Opt<t.NodeExtra>>(),
);
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
      } else if (binding.assignmentSections) {
        binding.sources = createSources(binding, undefined);
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

function getAliasRoot(binding: Binding) {
  let alias = binding.upstreamAlias;
  while (alias) {
    if (!alias.upstreamAlias) return alias;
    alias = alias.upstreamAlias;
  }

  return alias;
}

function resolveDerivedSources(binding: Binding) {
  const bindingValueExprs = getBindingValueExprs();
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
  param: Sources["param"],
): Sources {
  if (!(state || param)) {
    throw new Error(
      "Cannot create a serialize reason that does not reference state or a param.",
    );
  }

  return { state, param };
}

export function compareSources(a: Sources, b: Sources) {
  let delta = 0;

  if (a.param) {
    if (!b.param) return 1;
    if ((delta = compareReferences(a.param, b.param))) return delta;
  } else if (b.param) {
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
  if (a.state === b.state && a.param === b.param) return a;
  return createSources(
    bindingUtil.union(a.state, b.state),
    unionParamSources(a.param, b.param),
  );
}

function unionParamSources(a: Sources["param"], b: Sources["param"]) {
  const merged = bindingUtil.union(a, b);
  if (merged && Array.isArray(merged)) {
    // When merging param sources we filter out
    // any property aliases that are already a part of the merged set.
    // Eg if `input` is present, we don't need properties like `input.foo`
    // even though for params properties are seen as discrete sources.
    return filter(merged, (binding) => {
      let alias = binding.upstreamAlias;
      while (alias) {
        if (bindingUtil.has(merged, alias)) return false;
        alias = alias.upstreamAlias;
      }

      return true;
    });
  }

  return merged;
}

export const bindingUtil = new Sorted(function compareBindings(
  a: Binding,
  b: Binding,
) {
  return a === b
    ? 0
    : a.section.id - b.section.id ||
        (a.type !== b.type &&
        (a.type === BindingType.dom || b.type === BindingType.dom)
          ? a.type - b.type || a.id - b.id
          : a.id - b.id);
});

const propsUtil = new Sorted(function compareProps(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
});

const [getReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Opt<Read>>(),
);
const [getReadsByFunction] = createProgramState(
  () => new Map<FnExtra, Opt<Read>>(),
);

function addReadToExpression(
  root:
    | t.NodePath<t.Identifier>
    | t.NodePath<t.MemberExpression>
    | t.NodePath<t.OptionalMemberExpression>,
  binding: Binding,
) {
  const { node } = root;
  const fnRoot = getFnRoot(root);
  const exprRoot = getExprRoot(fnRoot || root);
  const exprExtra = (exprRoot.node.extra ??= {}) as ReferencedExtra;
  const readsByExpression = getReadsByExpression();
  const section = (exprExtra.section = getOrCreateSection(exprRoot));
  const read: Read = { binding, node };
  readsByExpression.set(
    exprExtra,
    push(readsByExpression.get(exprExtra), read),
  );

  if (fnRoot) {
    const readsByFn = getReadsByFunction();
    const fnExtra = (fnRoot.node.extra ??= {}) as FnExtra;
    exprExtra.fnExtra = fnExtra;
    fnExtra.section = section;
    readsByFn.set(fnExtra, push(readsByFn.get(fnExtra), read));
  }
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

export function getCanonicalBinding(binding: Binding) {
  const alias = binding.upstreamAlias;
  if (
    alias &&
    binding.property === undefined &&
    binding.excludeProperties === undefined
  ) {
    return alias;
  }

  return binding;
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
  while (
    !(root.loc || root.declared) &&
    root.upstreamAlias &&
    root.excludeProperties === undefined
  ) {
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
  if (binding.type === BindingType.input) {
    let root = binding;
    let access = "";
    while (
      root.upstreamAlias !== root.section.params &&
      root.excludeProperties === undefined
    ) {
      if (root.property !== undefined) {
        access = toAccess(root.property) + access;
      }
      root = root.upstreamAlias as InputBinding;
    }

    return root.name + access;
  }

  const { root, access } = getDebugScopeAccess(binding);
  return root.name + access;
}

export function getDebugNames(refs: ReferencedBindings) {
  return mapToString(refs, ", ", getDebugName);
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

export function getReadReplacement(
  node: t.Identifier | t.MemberExpression | t.OptionalMemberExpression,
) {
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
      if (binding.type === BindingType.dom) {
        if (binding.section.domGetterBindings.has(binding)) {
          replacement = t.callExpression(getBindingGetterIdentifier(binding), [
            getScopeExpression(node.extra!.section!, binding.section),
          ]);
        }
      } else if (binding.type === BindingType.hoist) {
        replacement = node.extra?.[kIsInvoked]
          ? t.callExpression(getBindingGetterIdentifier(binding), [
              getScopeExpression(node.extra.section!, binding.section),
            ])
          : t.identifier(binding.name);
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
    bindingUtil.isSuperset(a.sources.param, b.sources.param)
  );
}

function getCanonicalProperty(binding: Binding) {
  if (binding.property !== undefined) {
    return binding.property;
  }

  if (binding.upstreamAlias && binding.excludeProperties === undefined) {
    return binding.upstreamAlias.property;
  }
}

function createRead(binding: Binding, props: Opt<string>) {
  return { binding, props };
}

function getMemberExpressionPropString(
  expr: t.MemberExpression | t.OptionalMemberExpression,
) {
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

export interface ReferencedExtra extends t.NodeExtra {
  section: Section;
  fnExtra?: FnExtra;
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
  registerReason: SerializeReason;
  name: string;
  referencesScope?: boolean;
  referencedBindingsInFunction: ReferencedBindings;
}
export function isRegisteredFnExtra(
  extra: t.NodeExtra | undefined,
): extra is RegisteredFnExtra {
  return isReferencedExtra(extra) && extra.registerId !== undefined;
}

export function getCanonicalExtra<T extends t.NodeExtra>(extra: T): T {
  while (extra.merged) {
    extra = extra.merged as T;
  }

  return extra;
}

const serializeReasonCache = new WeakMap<
  t.NodeExtra | Binding,
  boolean | SerializeReason
>();
export function getAllSerializeReasonsForExtra(
  extra: t.NodeExtra,
): undefined | SerializeReason {
  let reason = serializeReasonCache.get(extra);
  if (reason === false) return;
  if (reason === undefined) {
    if (extra === getProgram().node.extra?.returnValueExpr) {
      reason = true;
    } else {
      forEach(extra.downstream, (binding) => {
        reason = mergeSerializeReasons(
          reason as SerializeReason,
          getAllSerializeReasonsForBinding(binding),
        );
      });
    }
    serializeReasonCache.set(extra, reason || false);
  }

  return reason;
}

export function getAllSerializeReasonsForBinding(
  binding: Binding,
): undefined | SerializeReason {
  let reason = serializeReasonCache.get(binding);
  if (reason === false) return;

  if (reason === undefined) {
    reason = getSerializeReason(binding.section, binding);

    if (reason !== true) {
      for (const expr of binding.downstreamExpressions) {
        reason =
          expr.isEffect ||
          mergeSerializeReasons(reason, getAllSerializeReasonsForExtra(expr));
        if (reason === true) break;
      }

      if (reason !== true) {
        for (const alias of binding.aliases) {
          reason = mergeSerializeReasons(
            reason,
            getAllSerializeReasonsForBinding(alias),
          );
          if (reason === true) break;
        }

        if (reason !== true) {
          for (const propBinding of binding.propertyAliases.values()) {
            reason = mergeSerializeReasons(
              reason,
              getAllSerializeReasonsForBinding(propBinding),
            );
            if (reason === true) break;
          }
        }
      }
    }

    serializeReasonCache.set(binding, reason || false);
  }

  return reason;
}

function setCanonicalExtra(extra: t.NodeExtra, merged: t.NodeExtra) {
  extra.merged = merged;
}

function addNumericPropertiesUntil(props: Opt<string>, len: number) {
  let result = props;
  for (let i = len; i--; ) {
    result = propsUtil.add(result, i + "");
  }
  return result;
}

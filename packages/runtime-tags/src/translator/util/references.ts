import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { decodeAccessor } from "../../common/helpers";
import { toAccess } from "../../html/serializer";
import { finalizeFunctionRegistry } from "../visitors/function";
import { forEachIdentifierPath } from "./for-each-identifier";
import { generateUid } from "./generate-uid";
import { getAccessorPrefix } from "./get-accessor-char";
import { getExprRoot, getFnParent, getFnRoot, getMarkoRoot } from "./get-root";
import { isEventOrChangeHandler } from "./is-event-or-change-handler";
import isInvokedFunction from "./is-invoked-function";
import { finalizeKnownTags } from "./known-tag";
import { isOptimize, isOutputDOM } from "./marko-config";
import {
  addSorted,
  concat,
  filter,
  find,
  findSorted,
  forEach,
  includes,
  type Many,
  mapToString,
  type OneMany,
  type Opt,
  push,
  Sorted,
} from "./optional";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import {
  finalizeParamSerializeReasonGroups,
  forEachSection,
  forEachSectionReverse,
  getCommonSection,
  getDirectClosures,
  getOrCreateSection,
  getSectionForBody,
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
import {
  getBindingGetterIdentifier,
  getSignalValueIdentifier,
  type Signal,
} from "./signals";
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
  constant,
}

export interface Sources {
  state: Opt<Binding>;
  param: Opt<InputBinding | ParamBinding>;
}

export interface Binding {
  id: number;
  name: string;
  originalName: string | undefined;
  type: BindingType;
  loc: t.SourceLocation | null;
  section: Section;
  closureSections: Opt<Section>;
  assignmentSections: Opt<Section>;
  sources: undefined | Sources;
  reads: Set<ReferencedExtra>;
  aliases: Set<Binding>;
  hoists: Opt<Section>;
  getters: Map<Getter["hoisted"], boolean>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: Opt<string>;
  upstreamAlias: Binding | undefined;
  scopeOffset: Binding | undefined;
  scopeAccessor: string | undefined;
  export: string | undefined;
  declared: boolean;
  nullable: boolean;
  pruned: boolean | undefined;
}

export interface InputBinding extends Binding {
  type: BindingType.input;
}

export interface ParamBinding extends Binding {
  type: BindingType.param;
}

export type ReferencedBindings = Opt<Binding>;
export type Intersection = Many<Binding>;

interface ReferencedFunctionExtra extends t.FunctionExtra, ReferencedExtra {}

export interface Getter {
  hoisted: Section | false;
  invoked: boolean;
}

interface Read {
  binding: Binding;
  extra: t.NodeExtra;
  getter: Getter | undefined;
}

interface ExtraRead {
  binding: Binding;
  props: Opt<string>;
  getter: Getter | undefined;
}

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    section?: Section;
    referencedBindings?: ReferencedBindings;
    constantBindings?: ReferencedBindings;
    hoistedBindings?: ReferencedBindings;
    downstream?: Opt<Binding>;
    binding?: Binding;
    assignment?: Binding;
    assignmentTo?: Binding;
    read?: ExtraRead;
    pruned?: true;
    isEffect?: true;
    spreadFrom?: Binding;
    [kIsInvoked]?: true;
  }

  export interface FunctionExtra {
    referencesScope?: boolean;
    referencedBindingsInFunction?: ReferencedBindings;
    constantBindingsInFunction?: ReferencedBindings;
    hoistedBindingsInFunction?: ReferencedBindings;
    name?: string;
    registerId?: string;
    registerReason?: SerializeReason;
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
  refSection: Section,
  upstreamAlias?: Binding["upstreamAlias"],
  property?: string,
  excludeProperties?: Opt<string>,
  loc: t.SourceLocation | null = null,
  refDeclared = false,
): Binding {
  const id = getNextBindingId();
  const section = upstreamAlias ? upstreamAlias.section : refSection;
  const sameSection = refSection === section;
  const declared = sameSection && refDeclared;
  const binding: Binding = {
    id,
    name,
    originalName: undefined,
    type,
    loc,
    section,
    property,
    declared,
    closureSections: undefined,
    assignmentSections: undefined,
    excludeProperties,
    sources: undefined,
    reads: new Set(),
    aliases: new Set(),
    hoists: undefined,
    getters: new Map(),
    propertyAliases: new Map(),
    upstreamAlias,
    scopeOffset: undefined,
    scopeAccessor: undefined,
    export: undefined,
    nullable: !sameSection || excludeProperties === undefined,
    pruned: undefined,
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

export function getOrCreatePropertyAlias(binding: Binding, property: string) {
  return (
    binding.propertyAliases.get(property) ||
    createBinding(
      `${binding.name}_${property.replace(/[^a-zA-Z0-9_$]/g, "_")}`,
      binding.type,
      binding.section,
      binding,
      property,
    )
  );
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

  binding.originalName = tagVar.name;

  if (babelBinding.constantViolations.length) {
    for (const ref of babelBinding.constantViolations) {
      throw ref.type === "MarkoTag"
        ? ref
            .get("var")
            .buildCodeFrameError(
              `Duplicate declaration ${JSON.stringify(binding.name)}`,
            )
        : ref.buildCodeFrameError(
            "Tag variables on native elements cannot be assigned to.",
          );
    }
  }

  for (const ref of babelBinding.referencePaths as t.NodePath<t.Identifier>[]) {
    const refSection = getOrCreateSection(ref);
    const invoked = isInvokedFunction(ref);
    const hoisted = isReferenceHoisted(babelBinding.path, ref)
      ? getCommonSection(refSection, binding.section)
      : false;

    setReferencesScope(ref);
    addReadToExpression(
      ref,
      binding,
      !invoked || (hoisted && hoisted !== binding.section)
        ? {
            hoisted,
            invoked,
          }
        : undefined,
    );

    if (refSection !== binding.section) {
      setReadsOwner(refSection, section);
      addOwnerSerializeReason(refSection, section, true);
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
    const section = getOrCreateSection(tag);
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
        section,
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
      section,
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
) {
  const params = body.node.params!;
  if (body.node.body.length && params.length) {
    const section = getOrCreateSection(body);
    const paramsBinding = ((body.node.extra ??= {}).binding = createBinding(
      generateUid("params"),
      type,
      section,
      undefined,
      undefined,
      undefined,
      params[0].loc,
    ));

    const bodySection = getSectionForBody(body);
    if (bodySection) {
      bodySection.params = paramsBinding as typeof bodySection.params;
    }

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

export function isReferenceHoisted(
  bindingPath: t.NodePath,
  reference: t.NodePath,
) {
  const tag = bindingPath.isMarkoTag()
    ? bindingPath
    : getMarkoRoot(bindingPath)?.parentPath;

  if (!tag?.isMarkoTag()) {
    return false;
  }

  const body = tag.parentPath!;

  let cur: t.NodePath | null = reference;
  while (cur) {
    if (cur.parentPath === body) {
      return +tag.key! > +cur.key!;
    }
    cur = cur.parentPath;
  }

  return true;
}

function trackReferencesForBinding(babelBinding: t.Binding, binding: Binding) {
  const { referencePaths, constantViolations } = babelBinding;

  for (const ref of referencePaths as t.NodePath<t.Identifier>[]) {
    const refSection = getOrCreateSection(ref);
    const markoRoot = getMarkoRoot(ref);

    if (
      markoRoot?.type === "MarkoAttribute" &&
      markoRoot.parentPath === babelBinding.path
    ) {
      throw ref.buildCodeFrameError(
        `Tag variable circular references are not supported.`,
      );
    } else if (isReferenceHoisted(babelBinding.path, ref)) {
      const invoked = isInvokedFunction(ref);
      if (invoked) {
        setReferencesScope(ref);
      }
      addReadToExpression(ref, binding, {
        hoisted: getCommonSection(refSection, binding.section),
        invoked,
      });
    } else if (
      binding.type !== BindingType.local ||
      refSection !== binding.section
    ) {
      trackReference(ref, binding);
    }
  }

  for (const ref of constantViolations) {
    if (ref.type === "MarkoTag") {
      throw ref
        .get("var")
        .buildCodeFrameError(
          `Duplicate declaration ${JSON.stringify(binding.name)}`,
        );
    }

    if (isReferenceHoisted(babelBinding.path, ref)) {
      throw ref.buildCodeFrameError("Cannot assign to hoisted tag variable.");
    }

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
  const fnParent = getFnParent(assignment);
  if (!fnParent) {
    throw assignment.buildCodeFrameError(
      `Assignments to a tag ${binding.type === BindingType.param ? "parameter" : "variable"} must be within a script or function.`,
    );
  }

  const fnRoot = getFnRoot(fnParent);
  const fnExtra =
    fnRoot && ((fnRoot.node.extra ??= {}) as ReferencedFunctionExtra);
  const section = getOrCreateSection(assignment);
  setReferencesScope(assignment);
  forEachIdentifierPath(assignment, (id) => {
    if (id.node.name === binding.name) {
      const idExtra = (id.node.extra ??= {}) as AssignedBindingExtra;
      idExtra.assignment = binding;
      idExtra.section = section;
      binding.assignmentSections = sectionUtil.add(
        binding.assignmentSections,
        section,
      );

      if (fnExtra) {
        idExtra.assignmentFunction = fnExtra;
        fnExtra.section = idExtra.section = section;
      }

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
        idExtra.assignmentTo = changeBinding;
        changeBinding.pruned = false;
        addReadToExpression(id, changeBinding, undefined);
      }
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
            undefined,
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

            if (hasRest && prop.value.extra?.binding?.assignmentSections) {
              excludeProperties = propsUtil.add(
                excludeProperties,
                `${key}Change`,
              );
            }
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

    if (isInvokedFunction(root.parentPath) && !isEventOrChangeHandler(prop)) {
      break;
    }

    root = root.parentPath as
      | t.NodePath<t.MemberExpression>
      | t.NodePath<t.OptionalMemberExpression>;

    reference = getOrCreatePropertyAlias(reference, prop);
  }

  addReadToExpression(root, reference, undefined);
}

export function mergeReferences<T extends t.Node>(
  section: Section,
  target: T,
  nodes: (t.Node | undefined)[],
): NonNullable<T["extra"]> & ReferencedExtra {
  const targetExtra = (target.extra ??= {}) as ReferencedExtra;
  const readsByExpression = getReadsByExpression();
  const fnReadsByExpression = getFunctionReadsByExpression();
  let reads = readsByExpression.get(targetExtra);
  let exprFnReads = fnReadsByExpression.get(targetExtra);
  let { isEffect } = targetExtra;

  for (const node of nodes) {
    if (!node) continue;
    const extra = (node.extra ??= {});
    extra.merged = targetExtra;
    if (isReferencedExtra(extra)) {
      const additionalReads = readsByExpression.get(extra);
      const additionalExprFnReads = fnReadsByExpression.get(extra);
      isEffect ||= extra.isEffect;
      if (additionalReads) {
        forEach(additionalReads, (read) => {
          read.binding.reads.delete(extra);
          read.binding.reads.add(targetExtra);
        });

        reads = concat(reads, additionalReads);
        readsByExpression.delete(extra);
      }

      if (additionalExprFnReads) {
        if (exprFnReads) {
          for (const [key, value] of additionalExprFnReads) {
            exprFnReads.set(key, value);
          }
        } else {
          fnReadsByExpression.set(
            targetExtra,
            (exprFnReads = new Map(additionalExprFnReads)),
          );
        }
      }
    } else if (extra?.pruned) {
      throw new Error("Cannot merged a dropped reference.");
    }
  }

  readsByExpression.set(targetExtra, reads);
  targetExtra.isEffect = isEffect;
  targetExtra.section = section;

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
  const fnReadsByExpression = getFunctionReadsByExpression();
  const intersectionsBySection = new Map<Section, Intersection[]>();

  for (const [expr, reads] of readsByExpression) {
    if (isReferencedExtra(expr)) {
      const exprBindings = resolveReferencedBindings(
        expr,
        reads,
        intersectionsBySection,
      );
      expr.referencedBindings = exprBindings.referencedBindings;
      expr.constantBindings = exprBindings.constantBindings;
      expr.hoistedBindings = expr.section.referencedHoists =
        exprBindings.hoistedBindings;

      if (expr.isEffect) {
        forEach(exprBindings.referencedBindings, (binding) => {
          addSerializeReason(binding.section, true, binding);
        });
        forEach(exprBindings.constantBindings, (binding) => {
          addSerializeReason(binding.section, true, binding);
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
            fn.referencedBindingsInFunction = fnBindings.referencedBindings;
            fn.constantBindingsInFunction = fnBindings.constantBindings;
            fn.hoistedBindingsInFunction = fnBindings.hoistedBindings;
          }
        }
      }
    }
  }

  for (const binding of bindings) {
    if (binding.type !== BindingType.dom) {
      if (pruneBinding(binding)) {
        bindings.delete(binding);
      }
    }
  }

  forEachSection(finalizeTagDownstreams);

  for (const binding of bindings) {
    const { name, section } = binding;
    if (binding.type !== BindingType.dom) {
      resolveBindingSources(binding);

      forEach(binding.assignmentSections, (assignedSection) => {
        setReadsOwner(assignedSection, section);
        addOwnerSerializeReason(assignedSection, section, true);
      });

      if (find(section.bindings, ({ name }) => name === binding.name)) {
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

        hoistSection.hoistedTo = bindingUtil.add(
          hoistSection.hoistedTo,
          binding,
        );

        addSerializeReason(binding.section, true, binding);
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

    section.bindings = bindingUtil.add(
      section.bindings,
      getCanonicalBinding(binding),
    );

    for (const { isEffect, section } of binding.reads) {
      if (section.depth > binding.section.depth) {
        if (binding.type === BindingType.local) {
          section.referencedLocalClosures = bindingUtil.add(
            section.referencedLocalClosures,
            binding,
          );
        } else if (binding.type !== BindingType.dom) {
          const canonicalUpstreamAlias = getCanonicalBinding(binding);
          canonicalUpstreamAlias.closureSections = sectionUtil.add(
            canonicalUpstreamAlias.closureSections,
            section,
          );
          section.referencedClosures = bindingUtil.add(
            section.referencedClosures,
            canonicalUpstreamAlias,
          );

          setReadsOwner(section, canonicalUpstreamAlias.section);
          addOwnerSerializeReason(
            section,
            canonicalUpstreamAlias.section,
            !!isEffect || canonicalUpstreamAlias.sources,
          );
        }
      }
    }
  }

  forEachSection((section) => {
    if (section.isHoistThrough) {
      addSerializeReason(section, true);
    }

    forEach(section.referencedHoists, (hoistedBinding) => {
      setReadsOwner(section, hoistedBinding.section);
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
  const referencedExprs = new Set<ReferencedExtra>();
  for (const binding of bindings) {
    for (const expr of binding.reads) {
      referencedExprs.add(expr);
    }
  }

  for (const expr of referencedExprs) {
    const exprFnReads = fnReadsByExpression.get(expr);
    if (exprFnReads) {
      for (const fn of exprFnReads.keys()) {
        if (fn.registerReason) {
          forEach(fn.referencedBindingsInFunction, (binding) => {
            addSerializeReason(binding.section, fn.registerReason, binding);
            if (binding.section !== fn.section) {
              addOwnerSerializeReason(
                fn.section,
                binding.section,
                fn.registerReason,
              );
            }
          });

          forEach(fn.constantBindingsInFunction, (binding) => {
            addSerializeReason(binding.section, fn.registerReason, binding);
            if (binding.section !== fn.section) {
              addOwnerSerializeReason(
                fn.section,
                binding.section,
                fn.registerReason,
              );
            }
          });
        }
      }
    }
  }

  forEachSection(finalizeParamSerializeReasonGroups);
  forEachSectionReverse((section) => {
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

  readsByExpression.clear();
  fnReadsByExpression.clear();
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

export const propsUtil = new Sorted(function compareProps(
  a: string,
  b: string,
) {
  return a < b ? -1 : a > b ? 1 : 0;
});

const [getReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Opt<Read>>(),
);
const [getFunctionReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Map<ReferencedFunctionExtra, OneMany<Read>>>(),
);

export function addRead(
  exprExtra: ReferencedExtra,
  extra: t.NodeExtra,
  binding: Binding,
  section: Section,
  getter: Getter | undefined,
) {
  const readsByExpression = getReadsByExpression();
  const read: Read = { binding, extra, getter };
  binding.reads.add(exprExtra);
  exprExtra.section = section;
  readsByExpression.set(
    exprExtra,
    push(readsByExpression.get(exprExtra), read),
  );
  return read;
}

export function dropNodes(node: t.Node | t.Node[]) {
  if (Array.isArray(node)) {
    for (const item of node) {
      dropExtra((item.extra ??= {}) as ReferencedExtra);
    }
  } else {
    dropExtra((node.extra ??= {}) as ReferencedExtra);
  }
}

function dropExtra(exprExtra: ReferencedExtra) {
  if (exprExtra.merged) {
    throw new Error("Cannot drop a merged reference");
  }

  const readsByExpr = getReadsByExpression();
  const reads = readsByExpr.get(exprExtra);
  exprExtra.pruned = true;
  if (reads) {
    readsByExpr.delete(exprExtra);
    forEach(reads, (read) => {
      read.binding.reads.delete(exprExtra);
    });
  }
}

function addReadToExpression(
  root:
    | t.NodePath<t.Identifier>
    | t.NodePath<t.MemberExpression>
    | t.NodePath<t.OptionalMemberExpression>,
  binding: Binding,
  getter: Getter | undefined,
) {
  const { node } = root;
  const fnRoot = getFnRoot(root);
  const exprRoot = getExprRoot(fnRoot || root);
  const section = getOrCreateSection(exprRoot);
  const exprExtra = (exprRoot.node.extra ??= { section }) as ReferencedExtra;
  const read = addRead(
    exprExtra,
    (node.extra ??= {}),
    binding,
    section,
    getter,
  );

  if (root.parent.type === "MarkoSpreadAttribute") {
    exprExtra.spreadFrom = binding;
  }

  if (fnRoot) {
    const fnReadsByExpr = getFunctionReadsByExpression();
    let exprFnReads = fnReadsByExpr.get(exprExtra);
    if (!exprFnReads) {
      fnReadsByExpr.set(exprExtra, (exprFnReads = new Map()));
    }
    const fnExtra = (fnRoot.node.extra ??= {}) as ReferencedFunctionExtra;
    fnExtra.section = section;
    exprFnReads.set(fnExtra, push(exprFnReads.get(fnExtra), read));
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

export function getScopeAccessorLiteral(
  binding: Binding,
  encoded?: boolean,
  includeId?: boolean,
) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (canonicalBinding.type === BindingType.constant) {
    return t.stringLiteral(
      canonicalBinding.scopeAccessor ?? canonicalBinding.name,
    );
  } else if (isOptimize()) {
    return encoded
      ? t.numericLiteral(canonicalBinding.id)
      : t.stringLiteral(decodeAccessor(canonicalBinding.id));
  } else if (includeId || canonicalBinding.type === BindingType.dom) {
    return t.stringLiteral(`${canonicalBinding.name}/${canonicalBinding.id}`);
  }
  return t.stringLiteral(
    canonicalBinding.scopeAccessor ?? canonicalBinding.name,
  );
}

export function getScopeAccessor(
  binding: Binding,
  encoded?: boolean,
  includeId?: boolean,
) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (canonicalBinding.type === BindingType.constant) {
    return canonicalBinding.scopeAccessor ?? canonicalBinding.name;
  } else if (isOptimize()) {
    return encoded
      ? canonicalBinding.id + ""
      : decodeAccessor(canonicalBinding.id);
  } else if (includeId || canonicalBinding.type === BindingType.dom) {
    return `${canonicalBinding.name}/${canonicalBinding.id}`;
  }
  return canonicalBinding.scopeAccessor ?? canonicalBinding.name;
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
  signal?: Signal,
) {
  const { extra } = node;
  if (!extra || extra.assignment) return;
  const { read, binding } = extra;

  if (read) {
    const readBinding = read.binding;
    let replacement: t.Expression | undefined;

    if (read.props === undefined) {
      if (read.getter?.invoked) {
        return;
      }

      if (isOutputDOM()) {
        if (
          signal?.referencedBindings === readBinding &&
          !signal.hasSideEffect
        ) {
          replacement = getSignalValueIdentifier(signal);
        } else if (read.getter?.hoisted) {
          replacement = t.callExpression(
            getBindingGetterIdentifier(readBinding, read.getter.hoisted),
            [getScopeExpression(extra.section!, read.getter.hoisted)],
          );
        } else if (readBinding.type === BindingType.dom) {
          if (read.getter) {
            replacement = t.callExpression(
              getBindingGetterIdentifier(readBinding, readBinding.section),
              [getScopeExpression(extra.section!, readBinding.section)],
            );
          }
        } else {
          replacement = createScopeReadExpression(readBinding, extra.section);
        }
      } else {
        if (node.type !== "Identifier") {
          replacement = t.identifier(readBinding.name);
        } else if (read.getter?.hoisted) {
          replacement = getBindingGetterIdentifier(
            readBinding,
            read.getter.hoisted,
          );
        } else if (readBinding.type === BindingType.dom) {
          if (readBinding.getters.has(readBinding.section)) {
            replacement = getBindingGetterIdentifier(
              readBinding,
              readBinding.section,
            );
          }
        } else if (readBinding.name !== node.name) {
          node.name = readBinding.name;
        }
      }
    } else {
      const props = read.props
        ? Array.isArray(read.props)
          ? read.props.slice()
          : [read.props]
        : [];
      let curNode = node;
      let curBinding: Binding | undefined = readBinding;
      let replaceMember:
        | t.MemberExpression
        | t.OptionalMemberExpression
        | undefined;
      if (isOutputDOM()) {
        if (
          signal?.referencedBindings === readBinding &&
          !signal.hasSideEffect
        ) {
          replacement = getSignalValueIdentifier(signal);
        } else {
          replacement = createScopeReadExpression(readBinding, extra.section);
        }
      } else {
        replacement = t.identifier(readBinding.name);
      }

      while (
        props.length &&
        (curNode.type === "MemberExpression" ||
          curNode.type === "OptionalMemberExpression")
      ) {
        const prop = props.pop()!;
        const memberProp = getMemberExpressionPropString(curNode);
        if (memberProp !== prop) break;
        replaceMember = curNode;
        curNode = curNode.object as
          | t.Identifier
          | t.MemberExpression
          | t.OptionalMemberExpression;
      }

      for (const prop of props) {
        if (curBinding) {
          curBinding = curBinding.propertyAliases.get(prop);
        }
        replacement = toMemberExpression(
          replacement,
          prop,
          !!curBinding?.nullable,
        );
      }

      if (replaceMember) {
        if (
          readBinding.nullable &&
          replaceMember.object.type !== replacement.type
        ) {
          replaceMember.type = "OptionalMemberExpression";
          replaceMember.optional = true;
        }
        replaceMember.object = withPreviousLocation(
          replacement,
          replaceMember.object,
        );
        replacement = undefined;
      }
    }

    return replacement && withPreviousLocation(replacement, node);
  } else if (
    binding &&
    node.type == "Identifier" &&
    node.name !== binding.name
  ) {
    node.name = binding.name;
  }
}

export function hasNonConstantPropertyAlias(ref: Binding) {
  for (const alias of ref.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      return true;
    }
  }
  return false;
}

export function pruneBinding(binding: Binding) {
  if (binding.pruned !== undefined) {
    return binding.pruned;
  }

  for (const read of binding.reads) {
    let upstream = binding.upstreamAlias;
    while (upstream && !upstream.reads.has(read)) {
      upstream = upstream.upstreamAlias;
    }
    if (upstream) {
      binding.reads.delete(read);
    }
  }

  let shouldPrune = !binding.reads.size;

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
  return shouldPrune;
}

function resolveReferencedBindingsInFunction(
  refs: OneMany<Binding>,
  reads: Opt<Read>,
) {
  let referencedBindings: ReferencedBindings;
  let constantBindings: ReferencedBindings;
  let hoistedBindings: ReferencedBindings;

  if (reads) {
    if (Array.isArray(reads)) {
      for (const read of reads) {
        const { getter, binding } = read;
        if (getter) {
          if (getter.hoisted && bindingUtil.find(refs, binding)) {
            hoistedBindings = bindingUtil.add(hoistedBindings, binding);
          }
        } else if (binding.type === BindingType.constant) {
          if (bindingUtil.find(refs, binding)) {
            constantBindings = bindingUtil.add(constantBindings, binding);
          }
        } else if (binding.type !== BindingType.dom) {
          referencedBindings = bindingUtil.add(
            referencedBindings,
            findClosestReference(read.binding, refs)!,
          );
        }
      }
    } else {
      const { getter, binding } = reads;
      if (getter) {
        if (getter.hoisted && bindingUtil.find(refs, binding)) {
          hoistedBindings = binding;
        }
      } else if (binding.type === BindingType.constant) {
        if (bindingUtil.find(refs, binding)) {
          constantBindings = binding;
        }
      } else if (binding.type !== BindingType.dom) {
        referencedBindings = findClosestReference(binding, refs);
      }
    }
  }

  return { referencedBindings, constantBindings, hoistedBindings };
}

function findClosestReference(
  from: Binding,
  refs: OneMany<Binding>,
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

function getRootBindings(reads: Many<Read>): OneMany<Binding> {
  let rootRefs!: OneMany<Binding>;
  let allBindings!: OneMany<Binding>;

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

function resolveReferencedBindings(
  expr: { section: Section; isEffect?: boolean },
  reads: Opt<Read>,
  intersectionsBySection: Map<Section, Intersection[]>,
) {
  let referencedBindings: ReferencedBindings;
  let constantBindings: ReferencedBindings;
  let hoistedBindings: ReferencedBindings;
  let allBindings: ReferencedBindings;

  if (Array.isArray(reads)) {
    const rootBindings = getRootBindings(reads);
    for (const read of reads) {
      let { binding } = read;
      const { extra, getter } = read;

      if (getter) {
        extra.section = expr.section;
        extra.read = createRead(binding, undefined, getter);
        addBindingGetter(binding, getter);
        if (getter.hoisted) {
          binding.hoists = sectionUtil.add(binding.hoists, getter.hoisted);
          hoistedBindings = bindingUtil.add(hoistedBindings, binding);
        }
      } else {
        if (extra.assignmentTo !== binding) {
          extra.section = expr.section;
          ({ binding } = extra.read ??= resolveExpressionReference(
            rootBindings,
            binding,
          ));
        }
        if (binding.type === BindingType.constant) {
          constantBindings = bindingUtil.add(constantBindings, binding);
        } else if (binding.type !== BindingType.dom) {
          referencedBindings = bindingUtil.add(referencedBindings, binding);
        }
      }
      allBindings = bindingUtil.add(allBindings, binding);
    }
  } else if (reads) {
    const { binding, extra, getter } = reads;

    if (getter) {
      addBindingGetter(binding, getter);
      if (getter.hoisted) {
        binding.hoists = sectionUtil.add(binding.hoists, getter.hoisted);
        hoistedBindings = bindingUtil.add(hoistedBindings, binding);
      }
    } else if (binding.type === BindingType.constant) {
      constantBindings = binding;
    } else if (binding.type !== BindingType.dom) {
      referencedBindings = binding;
    }

    extra.section = expr.section;
    extra.read = createRead(binding, undefined, getter);
    allBindings = binding;
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

  if (referencedBindings && constantBindings) {
    // Resolve canonical intersection based on the expressions section.
    // This ensures referential equality between reference binding groups.
    const intersections = intersectionsBySection.get(expr.section) || [];
    const combined = concat(
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
  };
}

function resolveExpressionReference(
  rootBindings: OneMany<Binding>,
  readBinding: Binding,
) {
  const upstreamRoot =
    readBinding.upstreamAlias &&
    findClosestReference(readBinding.upstreamAlias, rootBindings);
  if (!upstreamRoot) {
    return createRead(readBinding, undefined, undefined);
  }

  let curBinding = readBinding;
  let props: Opt<string>;
  while (curBinding !== upstreamRoot) {
    if (curBinding.property !== undefined) {
      props = push(props, curBinding.property);
    }

    curBinding = curBinding.upstreamAlias!;
  }

  if (Array.isArray(props)) {
    props.reverse();
  }

  return createRead(upstreamRoot, props, undefined);
}

function isSupersetSources(a: Binding, b: Binding) {
  if (!b.sources) return true;
  if (!a.sources) return false;
  return (
    bindingUtil.isSuperset(a.sources.state, b.sources.state) &&
    bindingUtil.isSuperset(a.sources.param, b.sources.param)
  );
}

export function createRead(
  binding: Binding,
  props: Opt<string>,
  getter: Getter | undefined,
): ExtraRead {
  return { binding, props, getter };
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

export function getObjectPropertyKeyString(
  expr: t.ObjectProperty | t.ObjectMethod,
) {
  switch (expr.key.type) {
    case "StringLiteral":
      return expr.key.value;
    case "NumericLiteral":
      return "" + expr.key.value;
    case "Identifier":
      if (expr.computed) return;
      return expr.key.name;
  }
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
  assignmentFunction: ReferencedFunctionExtra;
}
export function isAssignedBindingExtra(
  extra: t.NodeExtra | undefined,
): extra is AssignedBindingExtra {
  return isReferencedExtra(extra) && extra.assignment !== undefined;
}

export interface RegisteredFnExtra extends ReferencedExtra, t.FunctionExtra {
  name: string;
  registerId: string;
  registerReason: SerializeReason;
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
  if (extra.isEffect) return true;
  let reason = serializeReasonCache.get(extra);
  if (reason === false) return;
  if (reason === undefined) {
    if (extra === getProgram().node.extra?.returnValueExpr) {
      reason = true;
    } else {
      serializeReasonCache.set(extra, false);
      forEach(extra.downstream, (binding) => {
        reason = mergeSerializeReasons(
          reason as SerializeReason,
          getAllSerializeReasonsForBinding(binding, true),
        );
      });
    }

    if (reason) {
      serializeReasonCache.set(extra, reason);
    }
  }

  return reason;
}

export function getAllSerializeReasonsForBinding(
  binding: Binding,
  properties?: Opt<string> | true,
): undefined | SerializeReason {
  let reason = serializeReasonCache.get(binding);

  if (reason === undefined) {
    reason = getSerializeReason(binding.section, binding);

    if (reason !== true) {
      serializeReasonCache.set(binding, reason || false);

      if (properties !== true && binding.upstreamAlias) {
        reason = mergeSerializeReasons(
          reason,
          getAllSerializeReasonsForBinding(
            binding.upstreamAlias,
            binding.property,
          ),
        );
      }

      if (reason !== true) {
        for (const expr of binding.reads) {
          reason = mergeSerializeReasons(
            reason,
            getAllSerializeReasonsForExtra(expr),
          );
          if (reason === true) break;
        }

        if (reason !== true) {
          for (const alias of binding.aliases) {
            reason = mergeSerializeReasons(
              reason,
              getAllSerializeReasonsForBinding(alias, properties),
            );
            if (reason === true) break;
          }
        }
      }
    }

    if (reason) {
      serializeReasonCache.set(binding, reason);
    }
  }

  if (reason === false) {
    reason = undefined;
  }

  if (properties !== undefined) {
    if (properties === true) {
      if (reason !== true) {
        for (const propBinding of binding.propertyAliases.values()) {
          reason = mergeSerializeReasons(
            reason,
            getAllSerializeReasonsForBinding(propBinding, true),
          );
          if (reason === true) break;
        }
      }
    } else {
      let property: string;
      let rest: Opt<string>;

      if (Array.isArray(properties)) {
        property = properties[0];
        rest =
          properties.length === 2
            ? properties[1]
            : (properties.slice(1) as Opt<string>);
      } else {
        property = properties;
      }

      if (includes(binding.excludeProperties, property)) {
        reason = undefined;
      } else {
        const propBinding = binding.propertyAliases.get(property);
        if (propBinding) {
          reason = mergeSerializeReasons(
            reason,
            getAllSerializeReasonsForBinding(propBinding, rest),
          );
        }

        if (reason !== true) {
          for (const alias of binding.aliases) {
            const propBinding = alias.propertyAliases.get(property);
            if (propBinding) {
              reason = mergeSerializeReasons(
                reason,
                getAllSerializeReasonsForBinding(propBinding, rest),
              );
              if (reason === true) break;
            }
          }
        }
      }
    }
  }

  return reason;
}

function addNumericPropertiesUntil(props: Opt<string>, len: number) {
  let result = props;
  for (let i = len; i--; ) {
    result = propsUtil.add(result, i + "");
  }
  return result;
}

function setReadsOwner(from: Section, to: Section) {
  let cur = from;
  while (cur !== to && cur.parent) {
    cur.readsOwner = true;
    cur = cur.parent;
  }
}

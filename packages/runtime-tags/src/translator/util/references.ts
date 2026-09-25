import { types as t } from "@marko/compiler";
import { getProgram, isNativeTag } from "@marko/compiler/babel-utils";

import {
  type AccessorPrefix,
  AccessorProp as DebugAccessorProp,
} from "../../common/accessor.debug";
import { decodeAccessor, isEventHandler } from "../../common/helpers";
import { toAccess } from "../../html/serializer";
import {
  finalizeFunctionRegistry,
  resolveFunctionRegisterReasons,
} from "../visitors/function";
import { localsIdentifier, scopeIdentifier } from "../visitors/program";
import * as BindingType from "./constants/binding-type";
import {
  createCyclicMemo,
  createCyclicPathMemo,
  type MemoPath,
} from "./cyclic-memo";
import { forEachIdentifierPath } from "./for-each-identifier";
import { generateUid } from "./generate-uid";
import { getAccessorPrefix } from "./get-accessor-enums";
import { getExprRoot, getFnParent, getFnRoot, getMarkoRoot } from "./get-root";
import { isEventOrChangeHandler } from "./is-event-or-change-handler";
import isInvokedFunction from "./is-invoked-function";
import { finalizeKnownTags } from "./known-tag";
import { isOptimize, isOutputDOM } from "./marko-config";
import {
  addSorted,
  concat,
  every,
  filter,
  first,
  findSorted,
  forEach,
  fromIter,
  type Many,
  mapToString,
  type OneMany,
  type Opt,
  type SortedMany,
  type SortedOneMany,
  type SortedOpt,
  push,
  rest,
  some,
  Sorted,
  at,
  size,
  reduce,
} from "./optional";
import { callRuntime } from "./runtime";
import { createScopeReadExpression, getScopeExpression } from "./scope-read";
import {
  finalizeParamSerializeReasonGroups,
  forEachSection,
  forEachSectionReverse,
  getCommonSection,
  getDirectClosures,
  getDynamicClosureIndex,
  getOrCreateSection,
  getSectionForBody,
  getSectionRegisterReasons,
  isDynamicClosure,
  isSameOrChildSection,
  forEachAncestorSection,
  type Section,
  sectionUtil,
} from "./sections";
import {
  addOwnerSerializeReason,
  addSerializeExpr,
  addSerializeReason,
  applySerializeExprs,
  finalizeSerializeReason,
  getSerializeReasonsVersion,
  getSerializeReason,
  getSerializeSourcesForDownstream,
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
  isForceSerialized,
  mapParamReason,
  type SerializeKey,
  type SerializeReason,
} from "./serialize-reasons";
import { finalizeTagDownstreams } from "./set-tag-sections-downstream";
import { addSetupStatement } from "./setup-statements";
import {
  getBindingGetterIdentifier,
  getSignals,
  getSignalValueIdentifier,
  type Signal,
} from "./signals";
import { createProgramState } from "./state";
import {
  getMemberExpressionPropString,
  toMemberExpression,
} from "./to-property-name";
import withPreviousLocation from "./with-previous-location";

export const kBranchSerializeReason = Symbol("branch serialize reason");
export type Aliases = undefined | Binding | { [property: string]: Aliases };

type BindingType = BindingType.Value;
export { BindingType };

export interface Sources {
  state: SortedOpt<Binding>;
  param: SortedOpt<InputBinding | ParamBinding>;
  global: true | undefined;
  /** Serialized unconditionally; the sources still say what it reads. */
  forced: true | undefined;
}

// The reason of a value serialized for its own sake: forced, and the
// sources the other terms add to it survive the merge.
export const FORCED: Sources = {
  state: undefined,
  param: undefined,
  global: undefined,
  forced: true,
};

// `$global` is request identity: sources carry one bit (granularity lives
// in the global bindings' property aliases, not in invalidation).
export const globalSources: Sources = {
  state: undefined,
  param: undefined,
  global: true,
  forced: undefined,
};

export interface Binding {
  id: number;
  // Creation order, never renumbered, so distinct bindings stay distinct to
  // `bindingUtil` once `id` is reassigned per section.
  uid: number;
  name: string;
  originalName: string | undefined;
  type: BindingType;
  loc: t.SourceLocation | null;
  section: Section;
  closureSections: SortedOpt<Section>;
  /** The identifier of each emitted assignment to it (set in finalize). */
  assignments: Opt<AssignedBindingExtra>;
  /** Emitted code the graph stopped tracking still names it. */
  untracked?: true;
  sources: undefined | Sources;
  /** The intersection whose work computes it, or the nearest one upstream. Set on alias roots only. */
  upstreamIntersection: Intersection | undefined;
  /** Complete only once `finalizeReferences` runs at program analyze exit. */
  reads: Set<ReferencedExtra>;
  aliases: Set<Binding>;
  hoists: SortedOpt<Section>;
  getters: Map<Getter["hoisted"], boolean>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: SortedOpt<string>;
  upstreamAlias: Binding | undefined;
  /** The value these `<for>` params iterate, by `of` or `in`. */
  iterates: { expr: t.NodeExtra; type: "of" | "in" } | undefined;
  restOffset: number | undefined;
  scopeOffset: Binding | undefined;
  scopeAccessor: string | undefined;
  export: string | undefined;
  directContentExport: string | undefined;
  /** A name declared for this value, or all of it but its `excludeProperties`
   * (a rest element), even once pruned. */
  declaredAlias: Binding | undefined;
  /** The attribute tag `<for>` param a local closure holds in its section. */
  upstreamLocal: Binding | undefined;
  /** An attribute tag `<for>` param's local closure in each content the loop
   * creates that reads it. */
  localClosures: Map<Section, Binding> | undefined;
  declared: boolean;
  nullable: boolean;
  /** Settled only once `finalizeReferences` runs at program analyze exit. */
  pruned: boolean | undefined;
  exposed: boolean;
  forcePersist: boolean;
  /** Binding-side counterpart of `Section.serializePropKeys`, keyed by
   * accessor prefix (`undefined` is the plain binding key). */
  serializePropKeys:
    | Map<AccessorPrefix | symbol | undefined, SerializeKey>
    | undefined;
  // Extra ids reserved after `id` for derived accessors (eg TagVariableChange).
  reserveSize: number;
}

export interface InputBinding extends Binding {
  type: typeof BindingType.input;
}

export interface ParamBinding extends Binding {
  type: typeof BindingType.param;
}

export type ReferencedBindings = SortedOpt<Binding>;
export type Intersection = SortedMany<Binding>;

interface ReferencedFunctionExtra extends t.FunctionExtra, ReferencedExtra {}

export interface Getter {
  hoisted: Section | false;
  invoked: boolean;
}

interface Read {
  binding: Binding;
  extra: t.NodeExtra;
  ownVar: boolean;
  getter: Getter | undefined;
  comparedTo: t.Node | undefined;
  deferred: boolean;
  serializedValue?: true;
}

interface ExtraRead {
  binding: Binding;
  props: Opt<string>;
  ownVar: boolean;
  getter: Getter | undefined;
  /** Set for same-section local reads: the function root that owns the read. */
  localFn?: ReferencedFunctionExtra;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** The template emits a `$global` read, so HTML output declares a const
     * for it. */
    hasGlobalRead?: true;
  }

  export interface NodeExtra {
    section?: Section;
    /** The dom node binding of a tag rendering a branch or body (a dynamic
     * tag, `<try>`, `<await>`). */
    nodeBinding?: Binding;
    referencedBindings?: ReferencedBindings;
    downstream?: SortedOpt<Binding>;
    /** The initial value of the binding it feeds, which keeps it rather than
     * following it, so the binding derives no sources from it. */
    initialValue?: true;
    /** The tag-root `KnownExprs` of the call site that linked this expression
     * to a downstream template's binding, for dereferencing its reasons. */
    downstreamExprs?: KnownExprs;
    binding?: Binding;
    assignment?: Binding;
    assignmentTo?: Binding;
    read?: ExtraRead;
    pruned?: true;
    /** The expression this node sits in: dropped or merged as one. */
    exprRoot?: NodeExtra;
    isEffect?: true;
    /** A value here may reach the client as written (a change handler, a
     * native spread, a dynamic tag's input), so a function in it registers. */
    forceRegister?: true;
    invokeOnly?: true;
    lazyBindings?: ReferencedBindings;
    /** `$global` bindings this expression reads: the root means an opaque
     * (dynamic/aliased) read, a property alias names the key. */
    globalBindings?: ReferencedBindings;
    /** The bindings this expression reads only by spreading them as is. */
    spreadFrom?: SortedOpt<Binding>;
    nativeTagSpread?: true;
    merged?: NodeExtra;
  }

  export interface FunctionExtra {
    referencesScope?: boolean;
    referencedBindingsInFunction?: ReferencedBindings;
    referencedLocalBindingsInFunction?: SortedOpt<Binding>;
    constantBindingsInFunction?: ReferencedBindings;
    name?: string;
    registerId?: string;
    registerReason?: SerializeReason;
    // Reserved for a function reachable through an export: importing templates
    // resolve it to register the function without this template registering it.
    exportRegisterId?: string;
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
  excludeProperties?: SortedOpt<string>,
  loc: t.SourceLocation | null = null,
  refDeclared = false,
): Binding {
  const id = getNextBindingId();
  const section = upstreamAlias ? upstreamAlias.section : refSection;
  const sameSection = refSection === section;
  const declared = sameSection && refDeclared;
  const binding: Binding = {
    id,
    uid: id,
    name,
    originalName: undefined,
    type,
    loc,
    section,
    property,
    declared,
    closureSections: undefined,
    assignments: undefined,
    excludeProperties,
    sources: undefined,
    upstreamIntersection: undefined,
    reads: new Set(),
    aliases: new Set(),
    hoists: undefined,
    getters: new Map(),
    propertyAliases: new Map(),
    upstreamAlias,
    iterates: undefined,
    declaredAlias: undefined,
    upstreamLocal: undefined,
    localClosures: undefined,
    restOffset: undefined,
    scopeOffset: undefined,
    scopeAccessor: undefined,
    export: undefined,
    directContentExport: undefined,
    nullable: !sameSection || excludeProperties === undefined,
    pruned: undefined,
    exposed: false,
    forcePersist: false,
    serializePropKeys: undefined,
    reserveSize: 0,
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
    if (declared) upstreamAlias.declaredAlias ??= binding;
  }

  setNextBindingId(id + 1);
  getBindings().add(binding);
  return binding;
}

// A property of a direct alias is the root's property: one binding, one
// read, however many local names the value passes through.
export function getOrCreatePropertyAlias(binding: Binding, property: string) {
  while (isDirectAlias(binding)) binding = binding.upstreamAlias!;
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

// An attribute tag `<for>` param reaches only the content the loop creates, so
// that content holds it as its own binding, which nested sections close over.
function getOrCreateLocalClosure(local: Binding, section: Section) {
  while (section.parent !== local.section) section = section.parent!;
  let closure = local.localClosures?.get(section);
  if (!closure) {
    closure = createBinding(
      local.name,
      BindingType.derived,
      section,
      undefined,
      undefined,
      undefined,
      local.loc,
    );
    closure.upstreamLocal = local;
    (local.localClosures ??= new Map()).set(section, closure);
  }
  return closure;
}

// The alias a property path reaches from a binding, if every hop exists.
export function getPropertyAlias(
  binding: Binding | undefined,
  properties: Opt<string>,
) {
  return reduce(properties, getExistingPropertyAlias, binding);
}

function getExistingPropertyAlias(
  binding: Binding | undefined,
  property: string,
) {
  while (binding) {
    if (!isDirectAlias(binding)) return binding.propertyAliases.get(property);
    binding = binding.upstreamAlias;
  }
}

// Whether anything reads a native tag's variable (an element reference);
// an unread one leaves nothing for the client to resolve.
export function isTagVarRead(tag: t.NodePath<t.MarkoTag>) {
  const tagVar = tag.node.var as t.Identifier | undefined;
  return !!tagVar && !!tag.scope.getBinding(tagVar.name)?.referencePaths.length;
}

export function trackDomVarReferences(
  tag: t.NodePath<t.MarkoTag>,
  binding: Binding,
) {
  // Callers reject a destructured tag variable before reaching this.
  const tagVar = tag.node.var as t.Identifier | undefined;
  if (!tagVar) {
    return;
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
              `Duplicate declaration of \`${binding.originalName}\`.`,
            )
        : ref.buildCodeFrameError(
            `\`${binding.originalName}\` is a [tag variable](https://markojs.com/docs/reference/language#tag-variables) on a native element (an element reference) and cannot be assigned to.`,
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
      addOwnerSerializeReason(refSection, section, FORCED);
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
      const { excludeProperties, restOffset } = canonicalUpstreamAlias;
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
        restOffset,
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
      if (
        i === 0 &&
        param.type === "RestElement" &&
        param.argument.type === "Identifier"
      ) {
        // `|...args|` names the whole params array, so `args` is that binding.
        const { argument } = param;
        paramsBinding.name = argument.name;
        paramsBinding.declared = true;
        (argument.extra ??= {}).binding = paramsBinding;
        trackReferencesForBinding(
          body.scope.getBinding(argument.name)!,
          paramsBinding,
        );
      } else if (param.type === "RestElement") {
        createBindingsAndTrackReferences(
          param.argument,
          type,
          body.scope,
          section,
          paramsBinding,
          undefined,
          i > 0 ? addNumericPropertiesUntil(undefined, i) : undefined,
          i,
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

function getMarkoRootAsTag(path: t.NodePath) {
  const tag = path.isMarkoTag() ? path : getMarkoRoot(path)?.parentPath;
  if (tag?.isMarkoTag()) {
    return tag;
  }
}

export function isReferenceInOwnBody(
  bindingPath: t.NodePath,
  reference: t.NodePath,
) {
  const tag = getMarkoRootAsTag(bindingPath);
  if (!tag) {
    return false;
  }
  const body = tag.get("body");

  let cur: t.NodePath | null = reference;
  while (cur) {
    if (cur === body) {
      return true;
    }
    cur = cur.parentPath;
  }

  return false;
}

export function isReferenceHoisted(
  bindingPath: t.NodePath,
  reference: t.NodePath,
) {
  const tag = getMarkoRootAsTag(bindingPath);
  if (!tag) {
    return false;
  }
  const body = tag.parentPath;

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
    const isOwnAttribute =
      markoRoot?.type === "MarkoAttribute" &&
      markoRoot.parentPath === babelBinding.path;

    if (isOwnAttribute && !getFnRoot(ref)) {
      throw ref.buildCodeFrameError(
        `\`${ref.node.name}\` is the [tag variable](https://markojs.com/docs/reference/language#tag-variables) this tag declares, so its own attributes cannot read it.`,
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
    } else {
      // Same-section local reads stay lexical unless their function root ends
      // up registered (hoisted), so the read records that root for translate.
      const fnRoot = getFnRoot(ref);
      if (fnRoot) {
        const fnExtra = (fnRoot.node.extra ??= {}) as ReferencedFunctionExtra;
        fnExtra.referencedLocalBindingsInFunction = bindingUtil.add(
          fnExtra.referencedLocalBindingsInFunction,
          binding,
        );
        const refExtra = (ref.node.extra ??= {});
        refExtra.section = refSection;
        refExtra.read = createRead(binding, undefined);
        refExtra.read.localFn = fnExtra;
      }
    }
  }

  for (const ref of constantViolations) {
    if (ref.type === "MarkoTag") {
      throw ref
        .get("var")
        .buildCodeFrameError(`Duplicate declaration of \`${binding.name}\`.`);
    }

    if (isReferenceHoisted(babelBinding.path, ref)) {
      throw ref.buildCodeFrameError(
        `\`${binding.name}\` is declared by a tag below this assignment; a [tag variable](https://markojs.com/docs/reference/language#tag-variables) can only be assigned below its declaration. Move the declaring tag above this code.`,
      );
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
    } else if (ref.isForXStatement()) {
      throw ref
        .get("left")
        .buildCodeFrameError(
          `\`${binding.name}\` is a [tag variable](https://markojs.com/docs/reference/language#tag-variables), so a \`for...${ref.isForOfStatement() ? "of" : "in"}\` cannot assign to it. Loop into a local variable and assign \`${binding.name}\` from it instead.`,
        );
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
      `\`${binding.name}\` is a tag ${binding.type === BindingType.param ? "parameter" : "variable"} and can only be assigned within a script or function.`,
    );
  }

  // An attribute tag's loop params have no change handler an assignment
  // could write through; the loop re-runs wholesale on input change.
  if (binding.type === BindingType.local) {
    throw assignment.buildCodeFrameError(
      `\`${binding.name}\` is a tag parameter and cannot be assigned to.`,
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
      idExtra.exprRoot = getExprRoot(fnRoot || assignment).node.extra ??= {};
      idExtra.fnRoot = fnExtra;
      getAssignments().push(idExtra);

      if (fnExtra) {
        fnExtra.section = section;
        fnExtra.exprRoot = idExtra.exprRoot;
      }

      if (binding.upstreamAlias && binding.property !== undefined) {
        // A positional parameter (`<for|item|>`) has no object that could
        // carry a change handler, so the assignment can never write back.
        if (binding.upstreamAlias === binding.section.params) {
          throw assignment.buildCodeFrameError(
            `\`${binding.name}\` is a tag parameter and cannot be assigned to.`,
          );
        }

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
        addReadToExpression(id, changeBinding, undefined);
      }
    }
  });
}

export function setReferencesScope(path: t.NodePath<any>) {
  const fnRoot = getFnRoot(path);
  if (fnRoot) {
    ((fnRoot.node.extra ??= {}) as t.FunctionExtra).referencesScope = true;
  }
}

// One signal-inert root binding per template, minted on first access.
const [getGlobalBinding] = createProgramState(() =>
  createBinding(
    "$global",
    BindingType.global,
    getOrCreateSection(getProgram()),
  ),
);

// `$global` reads route through the reference graph, so property
// aliases record the keys read.
export function trackGlobalReference(path: t.NodePath<t.Identifier>) {
  trackReference(path, getGlobalBinding());
}

function createBindingsAndTrackReferences(
  lVal: t.LVal,
  type: BindingType,
  scope: t.Scope,
  section: Section,
  upstreamAlias: Binding["upstreamAlias"] | undefined,
  property: string | undefined,
  excludeProperties: SortedOpt<string>,
  restOffset?: number,
) {
  switch (lVal.type) {
    case "AssignmentPattern":
      createBindingsAndTrackReferences(
        lVal.left,
        type,
        scope,
        section,
        upstreamAlias,
        property,
        excludeProperties,
        restOffset,
      );
      break;
    case "Identifier": {
      const binding = ((lVal.extra ??= {}).binding = createBinding(
        lVal.name,
        type,
        section,
        upstreamAlias,
        property,
        excludeProperties,
        lVal.loc,
        true,
      ));
      if (restOffset) binding.restOffset = restOffset;
      trackReferencesForBinding(scope.getBinding(lVal.name)!, binding);
      break;
    }
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

          if (!prop.computed && prop.key.type === "Identifier") {
            key = prop.key.name;
          } else if (prop.key.type === "StringLiteral") {
            key = prop.key.value;
          } else {
            throw scope.path.hub.buildError(
              prop.key,
              "Only identifier and string literal keys are supported when destructuring.",
            );
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

      // A pattern that is itself a rest argument mirrors the source at
      // shifted indices, so its elements index from the inherited offset.
      let index = (restOffset || 0) - 1;
      for (const element of lVal.elements) {
        index++;
        if (element) {
          if (element.type === "RestElement") {
            excludeProperties =
              index > 0
                ? addNumericPropertiesUntil(excludeProperties, index)
                : undefined;
            createBindingsAndTrackReferences(
              element.argument,
              type,
              scope,
              section,
              patternBinding,
              // A rest element mirrors the shifted tail via `excludeProperties` +
              // `restOffset`; passing its own `property` would collide with a sibling binding.
              undefined,
              excludeProperties,
              index,
            );
          } else if (t.isLVal(element)) {
            createBindingsAndTrackReferences(
              element,
              type,
              scope,
              section,
              patternBinding,
              `${index}`,
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
    if (
      (!t.isMemberExpression(parent) &&
        !t.isOptionalMemberExpression(parent)) ||
      isWrittenMember(root.parentPath!)
    )
      break;

    let prop = getMemberExpressionPropString(parent);
    if (prop === undefined) break;

    if (reference.upstreamAlias && reference.excludeProperties !== undefined) {
      if (reference.restOffset) {
        // A shifted array rest only mirrors the source at offset indices;
        // anything else (length, methods) belongs to the rest array itself.
        if (isIndexProperty(prop)) {
          prop = `${+prop + reference.restOffset}`;
          reference = reference.upstreamAlias;
        }
      } else if (!propsUtil.has(reference.excludeProperties, prop)) {
        reference = reference.upstreamAlias;
      }
    }

    if (isInvokedFunction(root.parentPath) && !isEventOrChangeHandler(prop)) {
      break;
    }

    root = root.parentPath as
      | t.NodePath<t.MemberExpression>
      | t.NodePath<t.OptionalMemberExpression>;

    reference = getOrCreatePropertyAlias(reference, prop);
  }

  // The chain is read as a whole, and its root names the binding it renames.
  if (root !== referencePath) {
    (referencePath.node.extra ??= {}).binding = binding;
  }

  if (reference.type === BindingType.local) {
    reference = getOrCreateLocalClosure(reference, getOrCreateSection(root));
  }

  addReadToExpression(root, reference, undefined);
}

// Writing a member (`obj.x = 1`, `obj.x++`, `delete obj.x`, a destructuring
// target) mutates its object, so the read must stop at that object.
function isWrittenMember(member: t.NodePath) {
  const { node, parent } = member;
  switch (parent.type) {
    case "AssignmentExpression":
    case "AssignmentPattern":
    case "ForInStatement":
    case "ForOfStatement":
      return parent.left === node;
    case "UnaryExpression":
      return parent.operator === "delete";
    case "UpdateExpression":
    case "ArrayPattern":
    case "RestElement":
      return true;
    case "ObjectProperty":
      return (
        parent.value === node && t.isObjectPattern(member.parentPath!.parent)
      );
    default:
      return false;
  }
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
  let { isEffect, forceRegister } = targetExtra;

  for (const node of nodes) {
    if (!node) continue;
    const extra = (node.extra ??= {});
    // The target can appear in its own node list; merging it into itself would
    // create a `merged` cycle and double its reads.
    if (extra === targetExtra) continue;
    extra.merged = targetExtra;
    // A literal has no reads but still lands in the position.
    forceRegister ||= extra.forceRegister;
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
      /* v8 ignore next -- a dropped reference is never merged into another */
      throw new Error("Cannot merged a dropped reference.");
    }
  }

  readsByExpression.set(targetExtra, reads);
  targetExtra.isEffect = isEffect;
  targetExtra.forceRegister = forceRegister;
  targetExtra.spreadFrom = getSpreadOnlyBindings(reads);
  targetExtra.section = section;

  return targetExtra as NonNullable<T["extra"]> & ReferencedExtra;
}

function getSpreadOnlyBindings(reads: Opt<Read>) {
  if (!some(reads, isSpreadRead)) return;
  let spread: SortedOpt<Binding>;
  let other: SortedOpt<Binding>;
  forEach(reads, (read) => {
    if (isSpreadRead(read)) {
      spread = bindingUtil.add(spread, read.binding);
    } else {
      other = bindingUtil.add(other, read.binding);
    }
  });
  return bindingUtil.difference(spread, other);
}

function isSpreadRead(read: Read) {
  return read.extra.spreadFrom === read.binding;
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

  // Assignments settle now so pruning can ask each binding directly; an
  // assignment inside a value pruning drops leaves again below.
  const assignments = getAssignments();
  for (const idExtra of assignments) {
    if (inEmittedExpr(idExtra)) {
      const binding = idExtra.assignment;
      binding.assignments = push(binding.assignments, idExtra);
    }
  }

  for (const binding of bindings) {
    if (binding.type !== BindingType.dom) {
      if (pruneBinding(binding, true)) {
        bindings.delete(binding);
      }
    }
  }

  const excluded = new Set<Binding>();
  for (const idExtra of assignments) {
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

  for (const [expr, reads] of readsByExpression) {
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
        addSetupStatement(expr.section);
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

  const bindingNamesBySection = new Map<Section, Set<string>>();
  forEachSection(finalizeTagDownstreams);

  for (const binding of bindings) {
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

        hoistSection.hoistedTo = bindingUtil.add(
          hoistSection.hoistedTo,
          binding,
        );

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

  forEachSection((section) => {
    if (section.isHoistThrough) {
      addSerializeReason(section, FORCED);
    }

    forEach(section.referencedHoists, (hoistedBinding) => {
      setReadsOwner(section, hoistedBinding.section);
      addOwnerSerializeReason(section, hoistedBinding.section, FORCED);
    });

    if (
      section.parent &&
      section.isBranch &&
      section.sectionAccessor &&
      section.upstreamExpression
    ) {
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
        section.parent,
        section.upstreamExpression,
        section.sectionAccessor.binding,
      );
    }
  });

  forEachSection(applySerializeExprs);

  // Rules that follow other reasons repeat until none moves; every write merges,
  // so reasons only grow and this settles, even through cycles.
  let reasonsVersion: number;
  do {
    reasonsVersion = getSerializeReasonsVersion();
    resetSerializations();
    forEachSection((section) =>
      addIntersectionSerializeReasons(
        section,
        intersectionsBySection.get(section),
      ),
    );
    forEachSection(addClosureSerializeReasons);
    addRegisteredFnSerializeReasons(fnReadsByExpression);
    forEachSectionReverse((section) => {
      finalizeKnownTags(section);
      finalizeSerializeReason(section);
      finalizeParamSerializeReasonGroups(section);
    });
  } while (reasonsVersion !== getSerializeReasonsVersion());

  finalizeFunctionRegistry();

  forEachSection((section) => {
    const { id, bindings } = section;
    const isOwnedBinding = ({ section }: Binding) => section.id === id;
    const ownedBindings = filter(bindings, isOwnedBinding);
    const intersectionSources = new Map<Intersection, Binding | undefined>();
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

    // Closure accessor ids trail the id space; `_closure_get` receives the
    // id directly, so unused reservations never reach the wire.
    forEach(ownedBindings, (binding) => {
      if (binding.closureSections) {
        closureAccessorIds.set(binding, nextId++);
      }
    });
  });

  const programSection = getProgram().node.extra.section!;
  if (programSection.returnValueExpr) {
    programSection.returnSerializeReason = getSerializeSourcesForExpr(
      programSection.returnValueExpr,
    );
  }

  for (const finalize of getReferenceFinalizers()) {
    finalize();
  }

  readsByExpression.clear();
  fnReadsByExpression.clear();
}

// Serializes an intersection member for its partners' sources, unless those
// changes always recompute it.
function addIntersectionSerializeReasons(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  if (intersections) {
    for (const intersection of intersections) {
      // Every pair merges even when a member is already serialized: that leaves
      // its covering reason unchanged, and its owners may still need the pair.
      for (let i = 0; i < intersection.length - 1; i++) {
        for (let j = i + 1; j < intersection.length; j++) {
          addIntersectionMemberReason(
            section,
            intersection[i],
            intersection[j],
          );
          addIntersectionMemberReason(
            section,
            intersection[j],
            intersection[i],
          );
        }
      }
    }
  }
}

function addIntersectionMemberReason(
  section: Section,
  member: Binding,
  partner: Binding,
) {
  if (
    !isForceSerialized(section, member) &&
    (!isSupersetSources(member, partner) ||
      hasSerializedIntermediate(member, partner, new Set()))
  ) {
    if (!isSameOrChildSection(section, member.section)) {
      addOwnerSerializeReason(
        section,
        member.section,
        mergeSources(member.sources, partner.sources),
      );
    }
    addSerializeReason(member.section, partner.sources, member);
  }
}

// Whether `member` reads `partner`'s sources through a serialized binding,
// whose dirty check then holds the resumed value and can skip `member`.
function hasSerializedIntermediate(
  member: Binding,
  partner: Binding,
  seen: Set<Binding>,
): boolean {
  return some(getValueInputs(member), (input) => {
    if (seen.has(input) || !sharesSources(input, partner)) return false;
    seen.add(input);
    if (
      bindingUtil.has(partner.sources!.state, input) ||
      bindingUtil.has(partner.sources!.param, input as ParamBinding)
    ) {
      return false;
    }
    return (
      !!getSerializeReason(input.section, input) ||
      hasSerializedIntermediate(input, partner, seen)
    );
  });
}

// The bindings a binding's value is computed from.
function getValueInputs(binding: Binding): ReferencedBindings {
  if (binding.upstreamAlias) return binding.upstreamAlias;
  const exprs = getBindingValueExprs().get(binding);
  return typeof exprs === "boolean" ? undefined : getValueReferences(exprs);
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

// `sources` less the closure's own, whose change recomputes it before creating
// a branch that reads it, unless a serialized binding's dirty check skips that.
function withoutOwnSources(closure: Binding, sources: Sources | undefined) {
  const own = closure.sources;
  if (
    !sources ||
    !own ||
    hasSerializedIntermediate(closure, closure, new Set())
  ) {
    return sources;
  }
  const state = bindingUtil.difference(sources.state, own.state);
  const param = bindingUtil.filter(
    sources.param,
    (binding) => !someUpstream(binding, isInParams, own.param),
  );
  return state || param || sources.global || sources.forced
    ? createSources(state, param, sources.global, sources.forced)
    : undefined;
}

function sharesSources(a: Binding, b: Binding) {
  return (
    !!a.sources &&
    !!b.sources &&
    (bindingUtil.intersects(a.sources.state, b.sources.state) ||
      bindingUtil.intersects(a.sources.param, b.sources.param))
  );
}

// What creates a section anew on the client: a branch's expression, or for
// content given to a tag, what registers it and the expression passing it.
function getSectionUpstreamReason(section: Section) {
  const { downstream, upstreamExpression } = section;
  if (downstream) {
    const registerReason = getSectionRegisterReasons(section) || undefined;
    if (registerReason === true) return true;
    let reason = mergeSources(
      registerReason,
      getSerializeSourcesForDownstream(downstream),
    );
    // A direct call renders the body in place, so what creates a section from
    // the call up to the define (or the body, for a recursive call) creates it.
    forEach(section.callSections, (callSection) => {
      reason = mergeSources(
        reason,
        getUpstreamReasonUntil(
          callSection,
          isSameOrChildSection(section, callSection)
            ? section
            : section.parent!,
        ),
      );
    });
    return reason;
  }
  return !upstreamExpression || getSerializeSourcesForExpr(upstreamExpression);
}

// What creates `section`, or a section between it and `ancestor`, anew on the
// client (forced, still with its sources, when anything can).
function getUpstreamReasonUntil(section: Section, ancestor: Section) {
  let reason: Sources | undefined;
  for (let cur = section; cur !== ancestor; cur = cur.parent!) {
    const upstream = getSectionUpstreamReason(cur);
    if (upstream) {
      reason = mergeSources(reason, upstream === true ? FORCED : upstream);
    }
  }
  return reason;
}

// Serializes each closure a section reads for every branch or content between
// the read and the closure's own section, unless creating it recomputes the closure.
function addClosureSerializeReasons(section: Section) {
  forEach(section.referencedClosures, (closure) => {
    // mark bindings that need to be serialized due to being closed over by stateful sections
    const sourceSection = closure.section;
    const branchesReason = getUpstreamReasonUntil(section, sourceSection);
    addSerializeReason(
      sourceSection,
      branchesReason?.forced
        ? branchesReason
        : withoutOwnSources(closure, branchesReason),
      closure,
    );

    if (isDynamicClosure(section, closure)) {
      addOwnerSerializeReason(section, sourceSection, branchesReason);

      // A constant never changes, so no signal subscribes to it.
      if (closure.sources && closure.type !== BindingType.constant) {
        addSerializeReason(
          sourceSection,
          closure.sources,
          closure,
          getAccessorPrefix().ClosureScopes,
        );
        if (getDynamicClosureIndex(closure, section)) {
          addSerializeReason(
            section,
            closure.sources,
            closure,
            getAccessorPrefix().ClosureSignalIndex,
          );
        }
      }
    }
  });
}

// A registered function serializes what it reads, owners included.
function addRegisteredFnSerializeReasons(
  fnReadsByExpression: ReturnType<typeof getFunctionReadsByExpression>,
) {
  resolveFunctionRegisterReasons();
  for (const exprFnReads of fnReadsByExpression.values()) {
    for (const fn of exprFnReads.keys()) {
      const reason = fn.registerReason;
      if (reason) {
        const addRead = (binding: Binding) => {
          addSerializeReason(binding.section, reason, binding);
          if (binding.section !== fn.section) {
            addOwnerSerializeReason(fn.section, binding.section, reason);
          }
        };
        forEach(fn.referencedBindingsInFunction, addRead);
        forEach(fn.constantBindingsInFunction, addRead);
      }
    }
  }
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

/**
 * Every member computed from one local source in the same pass, or the
 * intersection's own render id and scope offset.
 */
type IntersectionMeta =
  | { source: Binding; id?: undefined; scopeOffset?: undefined }
  | { source: undefined; id: number; scopeOffset: Binding | undefined };
export const intersectionMeta = new WeakMap<Intersection, IntersectionMeta>();

const closureAccessorIds = new WeakMap<Binding, number>();

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

// The expressions a binding's value is made of: pruning drops a pure one
// nothing reads, and the binding derives its sources from them.
export function setBindingDownstream(
  binding: Binding,
  expr: boolean | Opt<t.NodeExtra>,
  exprs?: KnownExprs,
) {
  getBindingValueExprs().set(binding, expr || false);
  if (expr && expr !== true) {
    forEach(expr, (expr) => {
      expr.downstream = bindingUtil.add(expr.downstream, binding);
      if (exprs) expr.downstreamExprs = exprs;
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

function getAliasRoot(binding: Binding) {
  let alias = binding.upstreamAlias;
  while (alias) {
    if (!alias.upstreamAlias) return alias;
    alias = alias.upstreamAlias;
  }

  return alias;
}

function resolveDerivedSources(binding: Binding) {
  const exprs = getBindingValueExprs().get(binding);

  if (exprs === undefined || exprs === true) {
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

export function createSources(
  state: Sources["state"],
  param: Sources["param"],
  global?: Sources["global"],
  forced?: Sources["forced"],
): Sources {
  /* v8 ignore next 6 -- every caller passes at least one source */
  if (!(state || param || global || forced)) {
    throw new Error(
      "Cannot create a serialize reason that does not reference state, a param, or $global.",
    );
  }

  return { state, param, global, forced };
}

export function compareSources(a: Sources, b: Sources) {
  let delta: number;

  if (a.forced !== b.forced) return a.forced ? 1 : -1;
  if (a.global !== b.global) return a.global ? 1 : -1;

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
  if (
    a.state === b.state &&
    a.param === b.param &&
    a.global === b.global &&
    a.forced === b.forced
  ) {
    return a;
  }
  return createSources(
    bindingUtil.union(a.state, b.state),
    unionParamSources(a.param, b.param),
    a.global || b.global,
    a.forced || b.forced,
  );
}

function unionParamSources(a: Sources["param"], b: Sources["param"]) {
  const merged = bindingUtil.union(a, b);
  if (merged && Array.isArray(merged)) {
    // Filter out property aliases already in the merged set (eg drop `input.foo`
    // when `input` is present); params otherwise treat properties as discrete sources.
    return bindingUtil.filter(
      merged,
      (binding) => !someUpstream(binding.upstreamAlias, isInParams, merged),
    );
  }

  return merged;
}

function isInParams(binding: Binding, params: Sources["param"]) {
  return bindingUtil.has(params, binding as ParamBinding);
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
          : a.id - b.id) ||
        // A pure alias keeps its creation id while its section mates are
        // renumbered, so only `uid` separates the two `Sorted` treats as one.
        a.uid - b.uid;
});

export const propsUtil = new Sorted(function compareProps(
  a: string,
  b: string,
) {
  return a < b ? -1 : a > b ? 1 : 0;
});

const [getAssignments] = createProgramState<AssignedBindingExtra[]>(() => []);
const [getReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Opt<Read>>(),
);
const [getFunctionReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Map<ReferencedFunctionExtra, OneMany<Read>>>(),
);
const [getReferenceFinalizers] = createProgramState<(() => void)[]>(() => []);

export function onFinalizeReferences(finalize: () => void) {
  getReferenceFinalizers().push(finalize);
}

export function getExpressionReads(exprExtra: ReferencedExtra) {
  return getReadsByExpression().get(exprExtra);
}

export function addRead(
  exprExtra: ReferencedExtra,
  extra: t.NodeExtra,
  binding: Binding,
  section: Section,
  getter: Getter | undefined,
) {
  const readsByExpression = getReadsByExpression();
  const read: Read = {
    binding,
    extra,
    getter,
    ownVar: false,
    comparedTo: undefined,
    deferred: false,
  };
  binding.reads.add(exprExtra);
  exprExtra.section = section;
  readsByExpression.set(
    exprExtra,
    push(readsByExpression.get(exprExtra), read),
  );
  return read;
}

// Whether an expression (or the one a node's extra sits in) is emitted.
function isEmitted(exprExtra: t.NodeExtra) {
  return !getCanonicalExtra(exprExtra).pruned;
}

function inEmittedExpr({ exprRoot }: AssignedBindingExtra) {
  return isEmitted(exprRoot);
}

function isDroppableValue(expr: t.NodeExtra) {
  return !!expr.pure && !expr.merged && !expr.pruned;
}

// A value feeding another binding too (one call site's attribute expression
// feeds each child that reads it) stays while any of them is read.
function dropPureExtra(expr: t.NodeExtra) {
  if (isDroppableValue(expr) && every(expr.downstream, isPrunedBinding)) {
    dropExtra(expr as ReferencedExtra);
  }
}

function isPrunedBinding(binding: Binding) {
  return !!binding.pruned;
}

// A dropped expression is never emitted by either output (its bindings can
// prune); an untracked one is emitted but read some other way.
export function dropNodes(node: t.Node | t.Node[]) {
  if (Array.isArray(node)) {
    for (const item of node) {
      dropExtra((item.extra ??= {}) as ReferencedExtra);
    }
  } else {
    dropExtra((node.extra ??= {}) as ReferencedExtra);
  }
}

export function untrackNode(node: t.Node) {
  untrackExtra((node.extra ??= {}) as ReferencedExtra);
}

function dropExtra(exprExtra: ReferencedExtra) {
  exprExtra.pruned = true;
  untrackExtra(exprExtra);
}

// A merged expression is never dropped and a dropped one never merged:
// both would strand reads the target already took.
function untrackExtra(exprExtra: ReferencedExtra) {
  /* v8 ignore next 3 -- a merged reference is never dropped */
  if (exprExtra.merged) {
    throw new Error("Cannot drop a merged reference");
  }

  const readsByExpr = getReadsByExpression();
  const reads = readsByExpr.get(exprExtra);
  if (reads) {
    readsByExpr.delete(exprExtra);
    getFunctionReadsByExpression().delete(exprExtra);
    forEach(reads, (read) => {
      read.binding.reads.delete(exprExtra);
      if (!exprExtra.pruned) read.binding.untracked = true;
    });
  }
}

// A controllable change handler on a native tag (or a dynamic tag, which can
// resolve to one at runtime) that is not an inline function captures a foreign
// value into the scope's ControlledHandler slot, so reads inside it must
// serialize alongside it.
function isSerializedChangeHandlerRead(exprRoot: t.NodePath) {
  const markoRoot = getMarkoRoot(exprRoot);
  if (!markoRoot?.isMarkoAttribute()) return false;
  const attr = markoRoot.node;
  if (
    !isEventOrChangeHandler(attr.name) ||
    isEventHandler(attr.name) ||
    t.isFunction(attr.value)
  ) {
    return false;
  }
  const tag = markoRoot.parentPath;
  return (
    tag.isMarkoTag() &&
    (tag.node.name.type !== "StringLiteral" || isNativeTag(tag))
  );
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
  // Reads recorded after the owning expression merged into another node's extra
  // must land on the merge target, else its references split and the read is lost.
  const rootExtra = (exprRoot.node.extra ??= { section }) as ReferencedExtra;
  const exprExtra = getCanonicalExtra(rootExtra);
  // A read tracked after its expression was dropped (`$global`, a hoisted
  // reference) must not keep the binding alive.
  if (exprExtra.pruned) return;
  const extra = (node.extra ??= {});
  extra.exprRoot = rootExtra;
  const read = addRead(exprExtra, extra, binding, section, getter);

  if (!fnRoot && isSerializedChangeHandlerRead(exprRoot)) {
    read.serializedValue = true;
  }

  const { parent } = root;
  if (
    parent.type === "BinaryExpression" &&
    (parent.operator === "===" || parent.operator === "!==")
  ) {
    read.comparedTo = parent.left === node ? parent.right : parent.left;
  }

  if (!getter && binding.type === BindingType.derived) {
    const babelBinding = root.scope.getBinding(binding.name);
    read.ownVar =
      !!babelBinding &&
      babelBinding.kind !== "param" &&
      isReferenceInOwnBody(babelBinding.path, root);
  }

  if (root.parent.type === "MarkoSpreadAttribute") {
    extra.spreadFrom = binding;
  }

  if (fnRoot) {
    // Accessor bodies run when the property is observed, not when a function
    // is invoked.
    read.deferred =
      fnRoot.node.type !== "ObjectMethod" || fnRoot.node.kind === "method";
    const fnReadsByExpr = getFunctionReadsByExpression();
    let exprFnReads = fnReadsByExpr.get(exprExtra);
    if (!exprFnReads) {
      fnReadsByExpr.set(exprExtra, (exprFnReads = new Map()));
    }
    const fnExtra = (fnRoot.node.extra ??= {}) as ReferencedFunctionExtra;
    fnExtra.section = section;
    fnExtra.exprRoot = rootExtra;
    exprFnReads.set(fnExtra, push(exprFnReads.get(fnExtra), read));
  }
}

export function getCanonicalBinding(binding: Binding) {
  const alias = binding.upstreamAlias;
  if (alias && isDirectAlias(binding)) {
    return alias;
  }

  return binding;
}

// Whether the binding, or any alias of it (transitively), passes `test`;
// `directOnly` follows only aliases of the whole value.
export function someAlias<A>(
  binding: Binding,
  test: (binding: Binding, arg: A) => boolean,
  arg: A,
  directOnly?: boolean,
): boolean {
  if (test(binding, arg)) return true;
  for (const alias of binding.aliases) {
    if (
      (!directOnly || isDirectAlias(alias)) &&
      someAlias(alias, test, arg, directOnly)
    ) {
      return true;
    }
  }
  return false;
}

// Whether the binding, or a value it aliases (transitively), passes `test`.
export function someUpstream<A>(
  binding: Binding | undefined,
  test: (binding: Binding, arg: A) => boolean,
  arg: A,
): boolean {
  for (let cur: Binding | undefined = binding; cur; cur = cur.upstreamAlias) {
    if (test(cur, arg)) return true;
  }
  return false;
}

// Aliases the whole of another value: no property, no rest exclusions.
export function isDirectAlias(binding: Binding) {
  return (
    binding.upstreamAlias !== undefined &&
    binding.property === undefined &&
    binding.excludeProperties === undefined
  );
}

// `getAttrTagNodes` picks where an attribute tag within control flow collects.
export function getAllTagReferenceNodes(
  tag: t.MarkoTag,
  referenceNodes: t.Node[] = [],
  getAttrTagNodes?: (attrTag: t.MarkoTag) => t.Node[],
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
        if (
          getAttrTagNodes &&
          t.isStringLiteral(child.name) &&
          child.name.value[0] === "@"
        ) {
          getAllTagReferenceNodes(child, getAttrTagNodes(child));
        } else {
          getAllTagReferenceNodes(child, referenceNodes, getAttrTagNodes);
        }
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
  return encoded &&
    isOptimize() &&
    canonicalBinding.type !== BindingType.constant
    ? t.numericLiteral(canonicalBinding.id)
    : t.stringLiteral(getScopeAccessor(binding, encoded, includeId));
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
  }
  // Debug accessors are binding names, so one naming a runtime prop gets its id.
  const name = reservedDebugAccessors.has(canonicalBinding.name)
    ? `${canonicalBinding.name}/${canonicalBinding.id}`
    : canonicalBinding.name;
  if (includeId || canonicalBinding.type === BindingType.dom) {
    return `${name}/${canonicalBinding.id}`;
  }
  return canonicalBinding.scopeAccessor ?? name;
}

const reservedDebugAccessors = new Set<string>(
  Object.values(DebugAccessorProp),
);

// Always includes the id so a debug accessor cannot collide with the owner key.
export function getLocalsScopeAccessor(binding: Binding) {
  return getScopeAccessor(binding, false, true);
}

// Value-coupled prefixes use reserved ids instead of prepending a letter;
// other prefixes (and debug output) keep the letter scheme.
export function getPrefixedScopeAccessor(
  binding: Binding,
  prefix: AccessorPrefix,
) {
  const canonicalBinding = getCanonicalBinding(binding)!;
  if (isOptimize()) {
    switch (prefix) {
      case getAccessorPrefix().TagVariableChange:
        return decodeAccessor(canonicalBinding.id + 1);
      case getAccessorPrefix().ClosureScopes:
        return decodeAccessor(getClosureAccessorId(canonicalBinding));
      case getAccessorPrefix().ClosureSignalIndex:
        // Lives on the closing sections' scopes where a bare id could
        // collide, so it keeps the letter but keys off the closure id.
        return prefix + decodeAccessor(getClosureAccessorId(canonicalBinding));
    }
  }
  return prefix + getScopeAccessor(binding);
}

export function getClosureAccessorId(binding: Binding) {
  const id = closureAccessorIds.get(getCanonicalBinding(binding)!);
  /* v8 ignore next 5 -- analyze reserves an id for every closure binding */
  if (id === undefined) {
    throw new Error(
      `No closure accessor id was reserved for "${binding.name}".`,
    );
  }
  return id;
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

export function getDebugNamesAsIdentifier(refs: ReferencedBindings) {
  return mapToString(refs, "__OR__", getDebugNameAsIdentifier);
}

function getDebugNameAsIdentifier(binding: Binding) {
  let root = binding;
  let access = "";

  if (binding.type === BindingType.input) {
    while (
      root.upstreamAlias !== root.section.params &&
      root.excludeProperties === undefined
    ) {
      if (root.property !== undefined) {
        access = `_${root.property.replace(/[^a-z0-9_$]/gi, "_") + access}`;
      }
      root = root.upstreamAlias as InputBinding;
    }
  } else {
    while (
      !(root.loc || root.declared) &&
      root.upstreamAlias &&
      root.excludeProperties === undefined
    ) {
      if (root.property !== undefined) {
        access = `_${root.property.replace(/[^a-z0-9_$]/gi, "_") + access}`;
      }
      root = root.upstreamAlias;
    }
  }

  return root.name + access;
}

export function getSectionInstancesAccessor(section: Section) {
  // Only hoists reach the prefix + section id fallback; a reserved numeric id
  // would be a byte shorter, but hoists are too rare for that to pay.
  return section.sectionAccessor
    ? section.sectionAccessor.prefix +
        getScopeAccessor(section.sectionAccessor.binding)
    : getAccessorPrefix().ClosureScopes + section.id;
}

export function getSectionInstancesAccessorLiteral(section: Section) {
  return t.stringLiteral(getSectionInstancesAccessor(section));
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
        if (read.localFn) {
          // A registered function receives its serialized locals scope; an
          // inline one keeps the lexical reference (following renames).
          if (isRegisteredFnExtra(read.localFn)) {
            return toMemberExpression(
              localsIdentifier,
              getLocalsScopeAccessor(readBinding),
            );
          }
          if (node.type === "Identifier" && node.name !== readBinding.name) {
            node.name = readBinding.name;
          }
          return;
        }
        const inlined = getSignals(extra.section!).get(readBinding)?.inline
          ?.value;
        if (inlined) {
          replacement = t.cloneNode(inlined, true);
        } else if (
          signal?.referencedBindings === readBinding &&
          !signal.hasSideEffect
        ) {
          replacement = getSignalValueIdentifier(signal);
        } else if (read.getter?.hoisted) {
          // Alias getters are never declared on section.bindings.
          replacement = readBinding.upstreamAlias
            ? callRuntime("_hoist_read_error")
            : t.callExpression(
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
        } else if (!isOptimize() && read.ownVar) {
          replacement = callRuntime(
            "_assert_init",
            extra.section
              ? getScopeExpression(extra.section, readBinding.section)
              : scopeIdentifier,
            getScopeAccessorLiteral(readBinding),
          );
        } else {
          replacement = createScopeReadExpression(readBinding, extra.section);
        }
      } else {
        if (node.type !== "Identifier") {
          replacement = t.identifier(readBinding.name);
        } else if (read.getter?.hoisted) {
          replacement = readBinding.upstreamAlias
            ? callRuntime("_hoist_read_error")
            : getBindingGetterIdentifier(readBinding, read.getter.hoisted);
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
      const { props } = read;
      let remaining = size(props);
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
        remaining &&
        (curNode.type === "MemberExpression" ||
          curNode.type === "OptionalMemberExpression")
      ) {
        const prop = at(props, --remaining);
        const memberProp = getMemberExpressionPropString(curNode);
        if (memberProp !== prop) break;
        replaceMember = curNode;
        curNode = curNode.object as
          | t.Identifier
          | t.MemberExpression
          | t.OptionalMemberExpression;
      }

      for (let i = 0; i < remaining; i++) {
        const prop = at(props, i)!;
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

// A binding the receiving template can never observe: every read is in an
// `invokeOnly` expression and nothing else (assignment, hoist, getter, access) sees it.
export function isInvokeOnlyBinding(binding: Binding): boolean {
  return !someAlias(binding, isReadBeyondInvoking, undefined);
}

function isReadBeyondInvoking(binding: Binding) {
  if (
    binding.assignments ||
    binding.hoists ||
    binding.getters.size ||
    binding.propertyAliases.size ||
    binding.excludeProperties
  ) {
    return true;
  }
  for (const expr of binding.reads) {
    if (!expr.invokeOnly) return true;
  }
  return false;
}

export function hasNonConstantPropertyAlias(ref: Binding) {
  for (const alias of ref.propertyAliases.values()) {
    if (alias.type !== BindingType.constant) {
      return true;
    }
  }
  return false;
}

// The answer is only kept once finalize asks: a read tracked while analysis
// is still running (a tag of this same program peeks early) can be dropped.
export function pruneBinding(binding: Binding, settled?: true) {
  if (binding.pruned !== undefined) {
    return binding.pruned;
  }

  if (settled) {
    // A read from an unread binding's pure value is no read: judge those
    // bindings first (one met again mid way counts as read).
    binding.pruned = false;
    for (const read of binding.reads) {
      if (isDroppableValue(read)) {
        forEach(read.downstream, pruneSettledBinding);
      }
    }
    // Likewise an assignment from such a value.
    forEach(binding.assignments, pruneSettledWriter);
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

  // A let binding with reserveSize > 0 reserves adjacent scope slots (e.g.
  // TagVariableChange at id+1). Even when its reads are covered by an alias,
  // the slot reservation must survive so translate can emit the correct ids.
  let shouldPrune = !binding.reads.size && !binding.reserveSize;

  for (const alias of binding.aliases) {
    if (pruneBinding(alias, settled)) {
      binding.aliases.delete(alias);
    } else if (alias.type !== BindingType.constant) {
      shouldPrune = false;
    }
  }

  for (const [key, alias] of binding.propertyAliases) {
    if (pruneBinding(alias, settled)) {
      binding.propertyAliases.delete(key);
    } else if (alias.type !== BindingType.constant) {
      shouldPrune = false;
    }
  }

  if (settled) {
    binding.pruned = shouldPrune;
    if (
      shouldPrune &&
      !binding.untracked &&
      !some(binding.assignments, inEmittedExpr)
    ) {
      // Its value is never emitted if that has no side effects, and the reads
      // and assignments inside the value go with it.
      const exprs = getBindingValueExprs().get(binding);
      if (exprs && exprs !== true) forEach(exprs, dropPureExtra);
    }
  }

  return shouldPrune;
}

function pruneSettledBinding(binding: Binding) {
  pruneBinding(binding, true);
}

function pruneSettledWriter({ exprRoot }: AssignedBindingExtra) {
  if (isDroppableValue(exprRoot)) {
    forEach(exprRoot.downstream, pruneSettledBinding);
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

// The properties from `ancestor` down to `binding`, one of its aliases.
function getPropertyPath(binding: Binding, ancestor: Binding): Opt<string> {
  if (binding === ancestor) return;
  const path = getPropertyPath(binding.upstreamAlias!, ancestor);
  return binding.property === undefined ? path : push(path, binding.property);
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
  ownVar: boolean = false,
): ExtraRead {
  return { binding, props, ownVar, getter: undefined };
}

export function createGetterRead(
  binding: Binding,
  props: Opt<string>,
  getter: Getter,
): ExtraRead {
  return { binding, props, ownVar: false, getter };
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
  exprRoot: t.NodeExtra;
  /** The outermost function holding it; none when that escapes into a call. */
  fnRoot: ReferencedFunctionExtra | undefined;
}

// A resumed instance runs only its effects and its registered functions, so
// only an assignment inside one of those can still write on the client.
export function hasResumableWriter(binding: Binding) {
  return some(binding.assignments, isResumableWriter);
}

function isResumableWriter({ exprRoot, fnRoot }: AssignedBindingExtra) {
  return !!getCanonicalExtra(exprRoot).isEffect || isRegisteredFnExtra(fnRoot);
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
  return (
    isReferencedExtra(extra) &&
    (extra as RegisteredFnExtra).registerId !== undefined
  );
}

export function getCanonicalExtra<T extends t.NodeExtra>(extra: T): T {
  while (extra.merged) {
    extra = extra.merged as T;
  }

  return extra;
}

// How a value serializes, through its aliases and downstream links (a
// cyclic graph): the reason its scope values serialize, and the reads it
// lands in, each recording its position (an effect, a dynamic tag's input).
interface Serialization {
  reason: undefined | SerializeReason;
  reads: ReadonlySet<ReferencedExtra> | undefined;
}
const UNSERIALIZED: Serialization = { reason: undefined, reads: undefined };
const FORCED_SERIALIZATION: Serialization = {
  reason: FORCED,
  reads: undefined,
};
let extraSerialization: (extra: t.NodeExtra) => Serialization;
let bindingSerialization: (binding: Binding, path: MemoPath) => Serialization;
resetSerializations();

// Answers read the reasons of the moment, so each pass that grows them
// asks afresh.
function resetSerializations() {
  extraSerialization = createCyclicMemo(
    computeExtraSerialization,
    UNSERIALIZED,
  );
  // A binding's answer is per asked path: the value itself, one of its
  // properties (a destructured part), or the whole with every property.
  bindingSerialization = createCyclicPathMemo(
    computeBindingSerialization,
    UNSERIALIZED,
  );
}

// Resume: do the value's scope values serialize, and why.
export function getAllSerializeReasonsForExtra(
  extra: t.NodeExtra,
): undefined | SerializeReason {
  return serializationForExtra(extra).reason;
}

export function getAllSerializeReasonsForBinding(
  binding: Binding,
  properties?: Opt<string> | true,
): undefined | SerializeReason {
  return serializationForBinding(binding, properties).reason;
}

// Registration: does the value reach the client at all, by its reasons or
// by landing where it is written as is.
export function getRegisterReasonForExtra(
  extra: t.NodeExtra,
): undefined | SerializeReason {
  if (extra.forceRegister) return FORCED;
  const { reason, reads } = serializationForExtra(extra);
  if (reads) {
    for (const read of reads) if (read.forceRegister) return FORCED;
  }
  return reason;
}

function serializationForExtra(extra: t.NodeExtra): Serialization {
  if (extra.isEffect) return FORCED_SERIALIZATION;
  const serialization = extraSerialization(extra);
  const reads = isReferencedExtra(extra)
    ? addSerializationRead(serialization.reads, extra)
    : serialization.reads;
  return reads === serialization.reads
    ? serialization
    : { reason: serialization.reason, reads };
}

function serializationForBinding(
  binding: Binding,
  properties: Opt<string> | true | undefined,
): Serialization {
  return bindingSerialization(binding, properties);
}

function computeExtraSerialization(extra: t.NodeExtra): Serialization {
  return readSerialization(extra, undefined);
}

// What an expression serializes for: the template's return, or what the
// bindings it feeds serialize for, except `part`'s own destructured parts
// (they answer for their own path).
function readSerialization(
  extra: t.NodeExtra,
  part: Binding | undefined,
  properties?: Opt<string> | true,
): Serialization {
  if (extra === getProgram().node.extra?.section!.returnValueExpr) {
    return FORCED_SERIALIZATION;
  }
  let serialization = UNSERIALIZED;
  forEach(extra.downstream, (binding) => {
    if (!isPartOf(binding, part)) {
      serialization = mergeSerialization(
        serialization,
        downstreamSerialization(extra, binding, part, properties),
      );
    }
  });
  return serialization;
}

// What a downstream binding serializes for, in this program's terms.
function downstreamSerialization(
  extra: t.NodeExtra,
  binding: Binding,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
): Serialization {
  const linked = serializationForBinding(
    binding,
    getDownstreamPath(extra, binding, part, properties),
  );
  const exprs = extra.downstreamExprs;
  return linked.reason && exprs
    ? {
        reason: mapParamReason(
          binding.section.program,
          linked.reason,
          exprs,
          true,
        ),
        reads: linked.reads,
      }
    : linked;
}

// Where a path into `part` lands in a downstream `binding`: the same path when
// it is `part` or spreads it as is, an item's path when iterating it, or whole.
function getDownstreamPath(
  extra: t.NodeExtra,
  binding: Binding,
  part: Binding | undefined,
  properties: Opt<string> | true | undefined,
): Opt<string> | true {
  if (properties === undefined || properties === true || !part) return true;
  if (isReferenceTo(extra, part) || bindingUtil.has(extra.spreadFrom, part)) {
    return properties;
  }
  const iterates = binding.iterates;
  if (iterates && isReferenceTo(iterates.expr, part)) {
    if (iterates.type === "in") return concat("1", rest(properties));
    // An `of` item is an array's index or an attribute tag itself (its first
    // item); paths only start at attribute tag bodies, so no other iterable.
    return concat(
      "0",
      isIndexProperty(first(properties)) ? rest(properties) : properties,
    );
  }
  return true;
}

// The expression is `binding` itself, not something computed from it.
function isReferenceTo(extra: t.NodeExtra, binding: Binding) {
  const { read } = extra;
  return (
    !!read &&
    read.props === undefined &&
    getCanonicalBinding(read.binding) === getCanonicalBinding(binding)
  );
}

function isIndexProperty(property: string) {
  return /^\d+$/.test(property);
}

// A destructured property or rest of the value (a direct alias is not).
function isPartOf(binding: Binding, value: Binding | undefined) {
  return !!value && binding.upstreamAlias === value && !isDirectAlias(binding);
}

// An effect runs on resume with the values it references, except a native tag
// spread's, which reads only the element data `_attrs` wrote.
function readsValuesOnResume(expr: t.NodeExtra) {
  return !!expr.isEffect && !expr.nativeTagSpread;
}

function forceSerialize(binding: Binding) {
  addSerializeReason(binding.section, FORCED, binding);
}

function computeBindingSerialization(
  binding: Binding,
  properties: Opt<string> | true | undefined,
): Serialization {
  const head =
    properties === true || properties === undefined
      ? undefined
      : first(properties);
  const reason = getSerializeReason(binding.section, binding);
  let serialization: Serialization = reason
    ? { reason, reads: undefined }
    : UNSERIALIZED;
  // A property serializes with the value it is read from.
  const upstream = binding.upstreamAlias;
  if (properties !== true && upstream) {
    serialization = mergeSerialization(
      serialization,
      serializationForBinding(
        upstream,
        properties === undefined
          ? binding.property
          : concat(binding.property, properties as Opt<string>),
      ),
    );
  }
  for (const expr of binding.reads) {
    if (expr.isEffect) {
      // A native tag renders the `content` of a value it only spreads as is,
      // sending just its key (on `<meta>` it is a plain attribute).
      if (
        !(
          head === "content" &&
          expr.nativeTagSpread &&
          bindingUtil.has(expr.spreadFrom, binding)
        )
      ) {
        serialization = mergeSerialization(serialization, FORCED_SERIALIZATION);
      }
      continue;
    }
    const reads = addSerializationRead(serialization.reads, expr);
    if (reads !== serialization.reads) {
      serialization = { reason: serialization.reason, reads };
    }
    serialization = mergeSerialization(
      serialization,
      readSerialization(expr, binding, properties),
    );
  }
  for (const alias of binding.aliases) {
    serialization = mergeSerialization(
      serialization,
      serializationForBinding(alias, properties),
    );
  }
  if (properties === undefined) return serialization;
  if (properties === true) {
    for (const propBinding of binding.propertyAliases.values()) {
      serialization = mergeSerialization(
        serialization,
        serializationForBinding(propBinding, true),
      );
    }
    return serialization;
  }
  const property = first(properties);
  if (propsUtil.has(binding.excludeProperties, property)) return UNSERIALIZED;
  const propBinding = binding.propertyAliases.get(property);
  if (propBinding) {
    serialization = mergeSerialization(
      serialization,
      serializationForBinding(propBinding, rest(properties)),
    );
  }
  for (const alias of binding.aliases) {
    const propBinding = alias.propertyAliases.get(property);
    if (propBinding) {
      serialization = mergeSerialization(
        serialization,
        serializationForBinding(propBinding, rest(properties)),
      );
    }
  }
  return serialization;
}

function mergeSerialization(a: Serialization, b: Serialization): Serialization {
  if (a === UNSERIALIZED) return b;
  if (b === UNSERIALIZED) return a;
  const reason = mergeSources(a.reason, b.reason);
  const reads = unionSerializationReads(a.reads, b.reads);
  if (reason === a.reason && reads === a.reads) return a;
  if (reason === b.reason && reads === b.reads) return b;
  return { reason, reads };
}

// Answers are shared across memo keys: adding copies (at most once per
// merge), and adding nothing new keeps the identity.
function addSerializationRead(
  reads: ReadonlySet<ReferencedExtra> | undefined,
  read: ReferencedExtra,
) {
  return reads?.has(read) ? reads : new Set(reads).add(read);
}

function unionSerializationReads(
  a: ReadonlySet<ReferencedExtra> | undefined,
  b: ReadonlySet<ReferencedExtra> | undefined,
) {
  if (!a || !b || a === b) return a || b;
  let result: Set<ReferencedExtra> | undefined;
  for (const read of b) {
    if (!a.has(read)) (result ??= new Set(a)).add(read);
  }
  return result || a;
}

function addNumericPropertiesUntil(props: SortedOpt<string>, len: number) {
  let result = props;
  for (let i = len; i--;) {
    result = propsUtil.add(result, i + "");
  }
  return result;
}

function setReadsOwner(from: Section, to: Section) {
  forEachAncestorSection(from, to, markReadsOwner, undefined);
}

function markReadsOwner(section: Section) {
  section.readsOwner = true;
}

// The call site expressions upstream of a child template's input, keyed the way
// the child destructures it; `value` is the whole-value expression.
export interface KnownExprs {
  known?: Record<string, KnownExprs>;
  value?: t.NodeExtra;
}

export function mapParamReasonToExpr(
  exprs: KnownExprs,
  reason: boolean | Opt<InputBinding | ParamBinding>,
) {
  if (reason) {
    if (reason === true) return true;
    const result = new Set<t.NodeExtra>();
    forEach(reason, (prop) => {
      forEach(mapParamBindingToExpr(exprs, prop), (expr) => {
        result.add(expr);
      });
    });
    return fromIter(result);
  }
}

export function mapParamBindingToExpr(
  exprs: KnownExprs,
  binding: InputBinding | ParamBinding,
): Opt<t.NodeExtra> {
  // Property-less with an upstream covers every whole-value link: pure
  // rests (which carry no excludeProperties), rest grains, and aliases.
  const isWholeAlias =
    binding.property === undefined && binding.upstreamAlias !== undefined;
  const curExpr = getKnownExprsAt(
    exprs,
    isWholeAlias ? binding.upstreamAlias! : binding,
  );

  if (isWholeAlias) {
    let result: Opt<t.NodeExtra> = curExpr.value;
    if (curExpr.known) {
      for (const key in curExpr.known) {
        if (!propsUtil.has(binding.excludeProperties, key)) {
          result = concat(result, curExpr.known[key].value);
        }
      }
    }
    return result;
  }

  return curExpr.value;
}

// The call site's known expressions at `binding`, passing through property-less
// links; past the props it lists, only the value expression holding it.
function getKnownExprsAt(exprs: KnownExprs, binding: Binding): KnownExprs {
  const upstream = binding.upstreamAlias;
  if (!upstream) return exprs;
  const known = getKnownExprsAt(exprs, upstream);
  return binding.property === undefined || !known.known
    ? known
    : (known.known[binding.property] ?? { value: known.value });
}

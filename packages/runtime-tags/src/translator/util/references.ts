import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import {
  type Binding,
  BindingType,
  type Getter,
  type ParamBinding,
  type ReferencedBindings,
  bindingUtil,
  createBinding,
  getCanonicalBinding,
  getOrCreatePropertyAlias,
  isIndexProperty,
  propsUtil,
  getNearestDeclared,
} from "./bindings";
import { forEachIdentifierPath } from "./for-each-identifier";
import { generateUid } from "./generate-uid";
import { getExprRoot, getFnParent, getFnRoot, getMarkoRoot } from "./get-root";
import { isEventOrChangeHandler } from "./is-event-or-change-handler";
import isInvokedFunction from "./is-invoked-function";
import {
  concat,
  forEach,
  fromIter,
  type OneMany,
  type Opt,
  type SortedOpt,
  push,
  some,
} from "./optional";
import { addOwnerReason, type Reason } from "./reasons";
import {
  getCommonSection,
  getOrCreateSection,
  getSectionForBody,
  type Section,
  setReadsOwner,
} from "./sections";
import { ALWAYS } from "./sources";
import { createProgramState } from "./state";
import { getMemberExpressionPropString } from "./to-property-name";

interface ReferencedFunctionExtra extends t.FunctionExtra, ReferencedExtra {}

export interface Read {
  binding: Binding;
  extra: t.NodeExtra;
  ownVar: boolean;
  getter: Getter | undefined;
  comparedTo: t.Node | undefined;
  deferred: boolean;
  inFunction: boolean;
}

export interface ExtraRead {
  binding: Binding;
  props: Opt<string>;
  ownVar: boolean;
  getter: Getter | undefined;
  /** Set for same-section local reads: the function root that owns the read. */
  localFn?: ReferencedFunctionExtra;
}

// What finalize resolves an expression or function to read, set only then
// and read through the accessors below.
const kReferencedBindings = Symbol("referenced bindings");
const kLazyBindings = Symbol("lazy bindings");
const kGlobalBindings = Symbol("global bindings");
const kReferencedBindingsInFunction = Symbol("referenced bindings in function");
const kConstantBindingsInFunction = Symbol("constant bindings in function");

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** An expression reads `$global`, so HTML output declares a const for it. */
    hasGlobalRead?: true;
  }

  export interface MarkoTagExtra {
    /** The dom binding the tag is addressed by: its node, marker or child
     * scope; an only child control flow tag shares its parent's. */
    nodeBinding?: Binding;
  }

  export interface MarkoPlaceholderExtra {
    /** The dom binding the placeholder's text node is held in. */
    nodeBinding?: Binding;
  }

  export interface NodeExtra {
    section?: Section;
    [kReferencedBindings]?: ReferencedBindings;
    [kLazyBindings]?: ReferencedBindings;
    [kGlobalBindings]?: ReferencedBindings;
    /** The bindings it feeds, in the order it feeds them: a call site's
     * values feed the child template's, so no one template's order sorts them. */
    derives?: Opt<Binding>;
    /** The initial value of the binding it feeds, which keeps it rather than
     * following it, so the binding derives no sources from it. */
    initialValue?: true;
    /** Its value has no side effect to evaluate, so an unread one can go: an
     * expression's from `evaluate`, a tag's from its value attributes. */
    pure?: boolean;
    /** The tag-root `KnownExprs` of the call site that linked this expression
     * to a derives template's binding, for dereferencing its reasons. */
    callSiteExprs?: KnownExprs;
    binding?: Binding;
    assignment?: Binding;
    assignmentTo?: Binding;
    read?: ExtraRead;
    pruned?: true;
    /** The expression this node sits in: dropped or merged as one. */
    exprRoot?: NodeExtra;
    isEffect?: true;
    /** Retained past render (a change handler, a native spread, a dynamic tag's
     * input), so client code may read a value here as it is, a function too. */
    retained?: true;
    /** Consumed where it is written (a handler its tag attaches, an
     * effect's callback, a key function), so it reaches no client as is. */
    consumed?: true;
    /** Any function it holds is only ever invoked, never read as a value, so
     * the reads inside resolve when it runs. */
    invokeOnly?: true;
    /** The bindings this expression reads only by spreading them as is. */
    spreadFrom?: SortedOpt<Binding>;
    /** A `content` it spreads is rendered (as the element's body, or as a
     * `<meta>`'s attribute), so its effect never reads it. */
    rendersContent?: true;
    merged?: NodeExtra;
  }

  export interface FunctionExtra {
    referencesScope?: boolean;
    [kReferencedBindingsInFunction]?: ReferencedBindings;
    referencedLocalBindingsInFunction?: SortedOpt<Binding>;
    [kConstantBindingsInFunction]?: ReferencedBindings;
    name?: string;
    registerId?: string;
    /** When client code reads the function itself, which registers it. */
    reason?: Reason;
    // Reserved for a function reachable through an export: importing templates
    // resolve it to register the function without this template registering it.
    exportRegisterId?: string;
  }

  export interface ArrowFunctionExpressionExtra extends FunctionExtra {}
  export interface FunctionDeclarationExtra extends FunctionExtra {}
  export interface FunctionExpressionExtra extends FunctionExtra {}
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
    closure.localOf = local;
    (local.localClosures ??= new Map()).set(section, closure);
  }
  return closure;
}

// Whether anything reads or assigns a tag's variable.
export function isTagVarUsed(tag: t.NodePath<t.MarkoTag>) {
  for (const name in t.getBindingIdentifiers(tag.node.var!)) {
    const binding = tag.scope.getBinding(name);
    if (binding?.referencePaths.length || binding?.constantViolations.length) {
      return true;
    }
  }
  return false;
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

    const getter: Getter | undefined =
      !invoked || (hoisted && hoisted !== binding.section)
        ? { hoisted, invoked }
        : undefined;
    setReferencesScope(ref);
    addReadToExpression(ref, binding, getter);

    // Finalize gives a read through a hoisted getter its owner chain.
    if (!getter?.hoisted && refSection !== section) {
      setReadsOwner(refSection, section);
      addOwnerReason(refSection, section, ALWAYS);
    }
  }

  return binding;
}

export function trackVarReferences(
  tag: t.NodePath<t.MarkoTag>,
  type: BindingType,
  aliased?: Binding["aliasOf"],
) {
  const tagVar = tag.node.var;
  if (tagVar) {
    const section = getOrCreateSection(tag);
    let target = aliased && getCanonicalBinding(aliased);
    if (target) {
      const { excludeProperties, restOffset } = target;
      if (excludeProperties !== undefined) {
        target = target.aliasOf!;
      }
      // An alias is read as what it aliases, so declares only a pattern holding
      // a rest.
      createBindingsAndTrackReferences(
        tagVar,
        target.type,
        tag.scope,
        section,
        target,
        undefined,
        excludeProperties,
        restOffset,
        false,
      );
      return target;
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
    // Content is always rendered with an array of params.
    paramsBinding.nullable = false;

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
    // HTML writes a read of an undeclared binding through what it reads from,
    // so where that name is hidden the binding is declared and read by its own.
    if (!binding.declared && binding.excludeProperties === undefined) {
      const root = getNearestDeclared(binding);
      binding.declared =
        !!root &&
        ref.scope.getBinding(root.name) !==
          babelBinding.scope.getBinding(root.name);
    }
    const isOwnAttribute =
      markoRoot?.type === "MarkoAttribute" &&
      markoRoot.parentPath === babelBinding.path;

    if (isOwnAttribute && !getFnRoot(ref)) {
      throw ref.buildCodeFrameError(
        `\`${ref.node.name}\` is the [tag variable](https://markojs.com/docs/reference/language#tag-variables) this tag declares, so its own attributes cannot read it.`,
      );
    } else if (isReferenceHoisted(babelBinding.path, ref)) {
      // A hoisted tag variable is its getter wherever it is referenced; calling
      // it while rendering throws at runtime (`_hoist_read_error`).
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

      if (binding.aliasOf && binding.property !== undefined) {
        // A positional parameter (`<for|item|>`) has no object that could
        // carry a change handler, so the assignment can never write back.
        if (binding.aliasOf === binding.section.params) {
          throw assignment.buildCodeFrameError(
            `\`${binding.name}\` is a tag parameter and cannot be assigned to.`,
          );
        }

        const changePropName = binding.property + "Change";
        const changeBinding =
          binding.aliasOf.propertyAliases.get(changePropName) ||
          createBinding(
            generateUid(changePropName),
            binding.type,
            binding.section,
            binding.aliasOf,
            changePropName,
            undefined,
            id.node.loc,
            // Declared beside its property, in the same pattern.
            binding.declared,
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
  aliased: Binding["aliasOf"] | undefined,
  property: string | undefined,
  excludeProperties: SortedOpt<string>,
  restOffset?: number,
  declared = true,
) {
  switch (lVal.type) {
    case "AssignmentPattern":
      createBindingsAndTrackReferences(
        lVal.left,
        type,
        scope,
        section,
        aliased,
        property,
        excludeProperties,
        restOffset,
        declared,
      );
      break;
    case "Identifier": {
      const binding = ((lVal.extra ??= {}).binding = createBinding(
        lVal.name,
        type,
        section,
        aliased,
        property,
        excludeProperties,
        lVal.loc,
        declared,
      ));
      if (restOffset) binding.restOffset = restOffset;
      trackReferencesForBinding(scope.getBinding(lVal.name)!, binding);
      break;
    }
    case "ObjectPattern": {
      const patternBinding =
        (property ? aliased!.propertyAliases.get(property) : aliased) ||
        ((lVal.extra ??= {}).binding = createBinding(
          generateUid(property || "pattern"),
          type,
          section,
          aliased,
          property,
          excludeProperties,
          lVal.loc,
        ));
      // Destructuring throws on a nullish value, so in its own section the
      // value a pattern destructures never is one.
      if (patternBinding.section === section) patternBinding.nullable = false;

      const { properties } = lVal;
      const hasRest =
        properties.length > 0 &&
        properties[properties.length - 1].type === "RestElement";
      // A rest is a new object no read expresses, so its pattern is declared as
      // written, and the parts beside it are read by the names it declares.
      const declaresPattern = declared || hasRest;
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
            undefined,
            declaresPattern,
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
              undefined,
              declaresPattern,
            );
          }
        }
      }
      break;
    }
    case "ArrayPattern": {
      const patternBinding =
        (property ? aliased!.propertyAliases.get(property) : aliased) ||
        ((lVal.extra ??= {}).binding = createBinding(
          generateUid(property || "pattern"),
          type,
          section,
          aliased,
          property,
          excludeProperties,
          lVal.loc,
        ));
      // Destructuring throws on a nullish value, so in its own section the
      // value a pattern destructures never is one.
      if (patternBinding.section === section) patternBinding.nullable = false;

      const { elements } = lVal;
      // A trailing hole (`[a, ,]`) is a null element.
      const declaresPattern =
        declared ||
        (elements.length > 0 &&
          elements[elements.length - 1]?.type === "RestElement");

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
              declaresPattern,
            );
          } else if (t.isLVal(element)) {
            if (element.type === "Identifier") {
              // An array has no property to carry a change handler.
              const assignment = scope
                .getBinding(element.name)!
                .constantViolations.find(isAssignment);
              if (assignment) {
                throw assignment.buildCodeFrameError(
                  `\`${element.name}\` comes from array destructuring, which has no [change handler](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding), so it cannot be assigned to. Destructure it from an object instead, where assigning it calls the object's \`${element.name}Change\`.`,
                );
              }
            }
            createBindingsAndTrackReferences(
              element,
              type,
              scope,
              section,
              patternBinding,
              `${index}`,
              undefined,
              undefined,
              declaresPattern,
            );
          }
        }
      }
      break;
    }
  }
}

function isAssignment(ref: t.NodePath) {
  return ref.type !== "MarkoTag";
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

    if (reference.aliasOf && reference.excludeProperties !== undefined) {
      if (reference.restOffset) {
        // A shifted array rest only mirrors the source at offset indices;
        // anything else (length, methods) belongs to the rest array itself.
        if (isIndexProperty(prop)) {
          prop = `${+prop + reference.restOffset}`;
          reference = reference.aliasOf;
        }
      } else if (!propsUtil.has(reference.excludeProperties, prop)) {
        reference = reference.aliasOf;
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

  if (reference.type === BindingType.local) {
    reference = getOrCreateLocalClosure(reference, getOrCreateSection(root));
  }

  // The read may resolve elsewhere, but HTML writes one rooted at a declared
  // name as authored.
  (referencePath.node.extra ??= {}).binding = binding;
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
  return mergeInto(section, (target.extra ??= {}), nodes) as NonNullable<
    T["extra"]
  > &
    ReferencedExtra;
}

// Expressions a tag reads as one, with no node of their own to hold the group,
// so what is true of the group stays off each member.
export function mergeReferenceGroup(
  section: Section,
  nodes: (t.Node | undefined)[],
) {
  return mergeInto(section, {}, nodes);
}

function mergeInto(
  section: Section,
  extra: t.NodeExtra,
  nodes: (t.Node | undefined)[],
) {
  const targetExtra = extra as ReferencedExtra;
  const readsByExpression = getReadsByExpression();
  const fnReadsByExpression = getFunctionReadsByExpression();
  let reads = readsByExpression.get(targetExtra);
  let exprFnReads = fnReadsByExpression.get(targetExtra);
  let { isEffect, retained } = targetExtra;

  for (const node of nodes) {
    if (!node) continue;
    const extra = (node.extra ??= {});
    extra.merged = targetExtra;
    // A literal has no reads but still lands in the position.
    retained ||= extra.retained;
    if (isReferencedExtra(extra)) {
      const additionalReads = readsByExpression.get(extra);
      const additionalExprFnReads = fnReadsByExpression.get(extra);
      isEffect ||= extra.isEffect;
      if (additionalReads) {
        forEach(additionalReads, (read) => {
          const bindingReads = read.binding.reads;
          bindingReads.delete(extra);
          bindingReads.set(
            targetExtra,
            push(bindingReads.get(targetExtra), read),
          );
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
  targetExtra.retained = retained;
  targetExtra.spreadFrom = getSpreadOnlyBindings(reads);
  targetExtra.section = section;

  return targetExtra;
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

// A binding's value expressions, its sources and what pruning drops unread
// when pure; a child template's binding settled, so a call site only links it.
export function setDerivedFrom(
  binding: Binding,
  expr: boolean | Opt<t.NodeExtra>,
  exprs?: KnownExprs,
) {
  if (binding.section.program === getProgram().node.extra.section) {
    // Each call site of a same template body feeds its params.
    const prev = binding.derivedFrom;
    binding.derivedFrom =
      expr === true
        ? undefined
        : prev
          ? expr
            ? concat(prev, expr)
            : prev
          : expr || false;
  }
  if (expr && expr !== true) {
    forEach(expr, (expr) => {
      expr.derives = push(expr.derives, binding);
      if (exprs) expr.callSiteExprs = exprs;
    });
  }
}

export const [getAssignments] = createProgramState<AssignedBindingExtra[]>(
  () => [],
);

export const [getReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Opt<Read>>(),
);

export const [getFunctionReadsByExpression] = createProgramState(
  () => new Map<ReferencedExtra, Map<ReferencedFunctionExtra, OneMany<Read>>>(),
);

export const [getReferenceFinalizers] = createProgramState<(() => void)[]>(
  () => [],
);

// Runs once reads, assignments, pruning and sources settle, before reasons
// propagate: a finalizer may add them, but reads none, nor facts on them.
export function onFinalizeReferences(finalize: () => void) {
  getReferenceFinalizers().push(finalize);
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
    inFunction: false,
  };
  // Content no output renders keeps no binding alive: reads recorded before it
  // was dropped are untracked by `dropContent`, and later ones stop here.
  if (section.pruned) return read;
  binding.reads.set(exprExtra, push(binding.reads.get(exprExtra), read));
  exprExtra.section = section;
  readsByExpression.set(
    exprExtra,
    push(readsByExpression.get(exprExtra), read),
  );
  return read;
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

function untrackNodes(node: t.Node | t.Node[]) {
  if (Array.isArray(node)) {
    for (const item of node) {
      untrackExtra((item.extra ??= {}) as ReferencedExtra);
    }
  } else {
    untrackExtra((node.extra ??= {}) as ReferencedExtra);
  }
}

export function dropExtra(exprExtra: ReferencedExtra) {
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
    forEach(reads, (read) => read.binding.reads.delete(exprExtra));
  }
}

// Content no output renders: the expressions in it are untracked, and each body
// in it is pruned along with its section, whether started or not.
export function dropContent(body: t.MarkoTagBody) {
  const bodyExtra = (body.extra ??= {});
  bodyExtra.pruned = true;
  if (bodyExtra.section) bodyExtra.section.pruned = true;
  untrackNodes(body.params);
  dropChildren(body.body);
}

// Reads key on expression roots, the children of Marko nodes, so only the
// Marko structure is walked.
function dropChildren(
  children: t.MarkoTagBody["body"] | t.MarkoTag["attributeTags"],
) {
  for (const child of children) {
    switch (child.type) {
      case "MarkoTag":
        untrackNodes(child.name);
        if (child.arguments) untrackNodes(child.arguments);
        if (child.var) untrackNodes(child.var);
        for (const attr of child.attributes) untrackNodes(attr.value);
        dropChildren(child.attributeTags);
        dropContent(child.body);
        break;
      case "MarkoPlaceholder":
        untrackNodes(child.value);
        break;
      case "MarkoScriptlet":
        untrackNodes(child.body);
        break;
    }
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

  // A hoisted read spreads the getter, not the variable's properties.
  if (!getter && root.parent.type === "MarkoSpreadAttribute") {
    extra.spreadFrom = binding;
  }

  if (fnRoot) {
    // Accessor bodies run when the property is observed, not when a function
    // is invoked.
    read.inFunction = true;
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

// `collectAttrTag`, when given, collects each attribute tag (and what is nested
// in it) in place of this walk.
export function getAllTagReferenceNodes(
  tag: t.MarkoTag,
  referenceNodes: t.Node[] = [],
  collectAttrTag?: (attrTag: t.MarkoTag) => void,
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
          collectAttrTag &&
          t.isStringLiteral(child.name) &&
          child.name.value[0] === "@"
        ) {
          collectAttrTag(child);
        } else {
          getAllTagReferenceNodes(child, referenceNodes, collectAttrTag);
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
  reason: Reason;
}

export function isRegisteredFnExtra(
  extra: t.NodeExtra | undefined,
): extra is RegisteredFnExtra {
  return (
    isReferencedExtra(extra) &&
    (extra as RegisteredFnExtra).registerId !== undefined
  );
}

// An expression's reads resolve on the extra it merges into, so these read
// that one whichever extra they are given.
export function getReferencedBindings(extra: t.NodeExtra | undefined) {
  return extra && getCanonicalExtra(extra)[kReferencedBindings];
}

export function getLazyBindings(extra: t.NodeExtra | undefined) {
  return extra && getCanonicalExtra(extra)[kLazyBindings];
}

// The `$global` bindings it reads, which compile verbatim rather than as
// references: the root for an opaque read, a property alias for a keyed one.
export function getGlobalBindings(extra: t.NodeExtra | undefined) {
  return extra && getCanonicalExtra(extra)[kGlobalBindings];
}

// What a function's body reads when invoked, resolved with its expression.
export function getReferencedBindingsInFunction(extra: t.FunctionExtra) {
  return extra[kReferencedBindingsInFunction];
}

export function getConstantBindingsInFunction(extra: t.FunctionExtra) {
  return extra[kConstantBindingsInFunction];
}

export function setResolvedFunctionReads(
  extra: t.FunctionExtra,
  referencedBindings: ReferencedBindings,
  constantBindings: ReferencedBindings,
) {
  extra[kReferencedBindingsInFunction] = referencedBindings;
  extra[kConstantBindingsInFunction] = constantBindings;
}

export function setResolvedReads(
  extra: ReferencedExtra,
  referencedBindings: ReferencedBindings,
  lazyBindings: ReferencedBindings,
  globalBindings: ReferencedBindings,
) {
  extra[kReferencedBindings] = referencedBindings;
  extra[kLazyBindings] = lazyBindings;
  extra[kGlobalBindings] = globalBindings;
}

export function getCanonicalExtra<T extends t.NodeExtra>(extra: T): T {
  while (extra.merged) {
    extra = extra.merged as T;
  }

  return extra;
}

function addNumericPropertiesUntil(props: SortedOpt<string>, len: number) {
  let result = props;
  for (let i = len; i--;) {
    result = propsUtil.add(result, i + "");
  }
  return result;
}

// The call site expressions a child template's params derive from, keyed the
// way the child destructures them; `value` is the whole-value expression.
export interface KnownExprs {
  known?: Record<string, KnownExprs>;
  value?: t.NodeExtra;
}

export function mapParamReasonToExpr(
  exprs: KnownExprs,
  reason: boolean | Opt<ParamBinding>,
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
  binding: ParamBinding,
): Opt<t.NodeExtra> {
  // Property-less with an aliased binding covers every whole-value link: pure
  // rests (which carry no excludeProperties), rest grains, and aliases.
  const isWholeAlias =
    binding.property === undefined && binding.aliasOf !== undefined;
  const curExpr = getKnownExprsAt(
    exprs,
    isWholeAlias ? binding.aliasOf! : binding,
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
  const aliased = binding.aliasOf;
  if (!aliased) return exprs;
  const known = getKnownExprsAt(exprs, aliased);
  return binding.property === undefined || !known.known
    ? known
    : (known.known[binding.property] ?? { value: known.value });
}

import { types as t } from "@marko/compiler";

import { AccessorChar } from "../../common/types";
import { currentProgramPath } from "../visitors/program";
import { forEachIdentifier } from "./for-each-identifier";
import { getExprRoot, getFnRoot } from "./get-root";
import isInvokedFunction from "./is-invoked-function";
import { isStatefulReferences } from "./is-stateful";
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
  getOrCreateSection,
  isSameOrChildSection,
  type Section,
} from "./sections";
import { getHoistFunctionIdentifier } from "./signals";
import { createProgramState } from "./state";
import { toMemberExpression } from "./to-property-name";
import withPreviousLocation from "./with-previous-location";

const kIsInvoked = Symbol("hoist is invoked");

export type Aliases = undefined | Binding | { [property: string]: Aliases };

export enum BindingType {
  dom,
  let,
  input,
  param,
  derived,
  hoist,
  // todo: constant
}

export type Binding = {
  id: number;
  name: string;
  type: BindingType;
  loc: t.SourceLocation | null;
  section: Section;
  serialize: boolean;
  aliases: Set<Binding>;
  hoists: Map<Section, Binding>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: undefined | string[];
  upstreamAlias: Binding | undefined;
  upstreamExpression: t.NodeExtra | undefined;
  downstreamExpressions: Set<ReferencedExtra>;
  scopeOffset: Binding | undefined;
  export: string | undefined;
  declared: boolean;
  nullable: boolean;
};

export type ReferencedBindings = Opt<Binding>;
export type Intersection = Many<Binding>;

type FnExtra = (
  | t.FunctionExpressionExtra
  | t.ArrowFunctionExpressionExtra
  | t.FunctionDeclarationExtra
) & { section: Section };

type Read = {
  binding: Binding;
  node: undefined | t.MemberExpression | t.Identifier;
};

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    section?: Section;
    referencedBindings?: ReferencedBindings;
    binding?: Binding;
    hoistedBinding?: Binding;
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
  upstreamExpression?: Binding["upstreamExpression"],
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
    excludeProperties: undefined,
    serialize: false,
    aliases: new Set(),
    hoists: new Map(),
    propertyAliases: new Map(),
    upstreamAlias,
    upstreamExpression,
    downstreamExpressions: new Set(),
    scopeOffset: undefined,
    export: undefined,
    nullable:
      !upstreamExpression?.confident || upstreamExpression.computed == null,
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
  upstreamExpression?: Binding["upstreamExpression"],
) {
  const tagVar = tag.node.var;
  if (tagVar) {
    const section = getOrCreateSection(tag);
    const canonicalUpstreamAlias = getCanonicalBinding(upstreamAlias);
    if (upstreamAlias && upstreamExpression) upstreamExpression.pruned = true;
    createBindingsAndTrackReferences(
      tagVar,
      type,
      tag.scope,
      section,
      canonicalUpstreamAlias,
      upstreamExpression,
      undefined,
    );
  }
}

export function trackParamsReferences(
  body: t.NodePath<t.MarkoTagBody | t.Program>,
  type: BindingType,
  upstreamAlias?: Binding["upstreamAlias"],
  upstreamExpression?: Binding["upstreamExpression"],
) {
  const params = body.node.params;
  if (body.node.body.length && params.length) {
    if (upstreamAlias && upstreamExpression) upstreamExpression.pruned = true;
    const section = getOrCreateSection(body);
    const canonicalUpstreamAlias = getCanonicalBinding(upstreamAlias);
    const paramsBinding =
      canonicalUpstreamAlias ||
      ((body.node.extra ??= {}).binding = createBinding(
        currentProgramPath.scope.generateUid("params_"),
        type,
        section,
        canonicalUpstreamAlias,
        upstreamExpression,
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
        upstreamExpression,
        i + "",
      );
    }
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
        currentProgramPath.scope.generateUid(
          "hoisted_" + referencePath.node.name,
        ),
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

  extra.hoistedBinding = hoistedBinding;

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

function trackReferencesForBinding(babelBinding: t.Binding) {
  const { identifier, referencePaths, constantViolations } = babelBinding;
  const binding = identifier.extra!.binding!;

  for (const referencePath of referencePaths) {
    const referenceSection = getOrCreateSection(referencePath);
    if (isSameOrChildSection(binding.section, referenceSection)) {
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
      section.assignments = bindingUtil.add(section.assignments, binding);
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
  upstreamExpression: Binding["upstreamExpression"] | undefined,
  property: string | undefined,
) {
  switch (lVal.type) {
    case "Identifier":
      (lVal.extra ??= {}).binding = createBinding(
        lVal.name,
        type,
        section,
        upstreamAlias,
        upstreamExpression,
        property,
        lVal.loc,
        true,
      );
      trackReferencesForBinding(scope.getBinding(lVal.name)!);
      break;
    case "ObjectPattern": {
      const patternBinding =
        (property
          ? upstreamAlias!.propertyAliases.get(property)
          : upstreamAlias) ||
        ((lVal.extra ??= {}).binding = createBinding(
          currentProgramPath.scope.generateUid("pattern_"),
          type,
          section,
          upstreamAlias,
          undefined,
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
            undefined,
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
            undefined,
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
          currentProgramPath.scope.generateUid("pattern_"),
          type,
          section,
          upstreamAlias,
          undefined,
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
              undefined,
              property,
            );
          } else {
            createBindingsAndTrackReferences(
              element,
              type,
              scope,
              section,
              patternBinding,
              undefined,
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
        undefined,
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

    if (
      root.parentPath.parentPath!.isCallExpression() &&
      !isEventOrChangeHandler(prop)
    ) {
      break;
    }

    root = root.parentPath as t.NodePath<t.MemberExpression>;
    reference = createBinding(
      (propPath += `_${prop.replace(/[^a-zA-Z0-9_$]/g, "_")}`),
      reference.type,
      reference.section,
      reference,
      undefined,
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
export function mergeReferences(
  section: Section,
  target: t.Node,
  nodes: (t.Node | undefined)[],
) {
  (target.extra ??= {}).section = section;
  getMergedReferences().set(target, nodes);
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

    forEach(fn.referencedBindingsInFunction, (binding) => {
      binding.serialize = true;
    });
  }

  for (const binding of bindings) {
    if (binding.type !== BindingType.dom && !binding.upstreamAlias) {
      pruneBinding(bindings, binding);
    }
  }

  for (const binding of bindings) {
    const { name, section } = binding;
    if (binding.type !== BindingType.dom) {
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
        binding.name = currentProgramPath.scope.generateUid(name);
      }
    }

    section.bindings = bindingUtil.add(section.bindings, binding);
    for (const {
      referencedBindings,
      isEffect,
      section,
    } of binding.downstreamExpressions) {
      if (section !== binding.section) {
        section.referencedClosures = bindingUtil.add(
          section.referencedClosures,
          binding,
        );
      }
      if (isEffect) {
        forEach(referencedBindings, (bindingReference) => {
          bindingReference.serialize = true;
        });
      }
    }
  }

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
            const sources1 = getSourceBindings(binding1);
            const sources2 = getSourceBindings(binding2);
            if (!binding1.serialize && !isSuperset(sources1, sources2)) {
              binding1.serialize = true;
            }
            if (!binding2.serialize && !isSuperset(sources2, sources1)) {
              binding2.serialize = true;
            }
          }
        }
      }
    }

    // mark bindings that need to be serialized due to being closed over by stateful sections
    forEach(section.referencedClosures, (binding) => {
      if (!binding.serialize) {
        let serialize = false;
        const sourceSection = binding.section;
        let currentSection = section;
        while (
          currentSection !== sourceSection &&
          !(serialize =
            !currentSection.upstreamExpression ||
            isStatefulReferences(
              currentSection.upstreamExpression.referencedBindings,
            ))
        ) {
          currentSection = currentSection.parent!;
        }
        binding.serialize = serialize;
      }
    });
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

  mergedReferences.clear();
  readsByExpression.clear();
  readsByFn.clear();
}

function getMaxOwnSourceOffset(intersection: Intersection, section: Section) {
  let scopeOffset: Binding | undefined;

  for (const binding of intersection) {
    if (binding.section === section) {
      for (const sourceBinding of getSourceBindings(binding)) {
        if (
          sourceBinding.scopeOffset &&
          (!scopeOffset || scopeOffset.id < sourceBinding.scopeOffset.id)
        ) {
          scopeOffset = sourceBinding.scopeOffset;
        }
      }
    }
  }

  return scopeOffset;
}

export const intersectionMeta = new WeakMap<
  Intersection,
  { id: number; scopeOffset: Binding | undefined }
>();

function isSuperset(set: Set<any>, subset: Set<any>) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

export function getSourceBindings(binding: Binding): Set<Binding> {
  // TODO: is this right?
  const derived = new Set<Binding>();
  const sources = new Set<Binding>();
  crawl(binding);
  return sources;

  function crawl(binding: Binding) {
    if (
      binding.type === BindingType.derived ||
      binding.type === BindingType.param
    ) {
      let alias: Binding | undefined;
      let curBinding = binding;
      while ((alias = curBinding.upstreamAlias)) {
        curBinding = alias;
      }
      if (curBinding.upstreamExpression) {
        if (derived.has(curBinding)) return;
        derived.add(curBinding);
        forEach(curBinding.upstreamExpression.referencedBindings, crawl);
      } else if (curBinding.type === BindingType.input) {
        sources.add(binding);
      } else {
        sources.add(curBinding);
      }
    } else {
      sources.add(binding);
    }
  }
}

export const bindingUtil = new Sorted(function compareBindings(
  a: Binding,
  b: Binding,
) {
  return a.section.id - b.section.id ||
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
  if (isOptimize()) {
    return t.numericLiteral(binding.id);
  }

  return t.stringLiteral(
    binding.name +
      (includeId || binding.type === BindingType.dom ? `/${binding.id}` : ""),
  );
}

export function getScopeAccessor(binding: Binding, includeId?: boolean) {
  if (isOptimize()) {
    return binding.id + "";
  }

  return (
    binding.name +
    (includeId || binding.type === BindingType.dom ? `/${binding.id}` : "")
  );
}

export function getSectionScopeAccessor(section: Section) {
  return section.sectionAccessor
    ? getScopeAccessor(section.sectionAccessor.binding) +
        section.sectionAccessor.suffix
    : section.id + AccessorChar.Dynamic;
}

export function getSectionScopeAccessorLiteral(section: Section) {
  const accessor = getSectionScopeAccessor(section);
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
  name: string | undefined;
  referencesScope?: boolean;
  referencedBindingsInFunction: ReferencedBindings;
}
export function isRegisteredFnExtra(
  extra: t.NodeExtra | undefined,
): extra is RegisteredFnExtra {
  return isReferencedExtra(extra) && extra.registerId !== undefined;
}

// TODO: we need this? maybe for passing input to child?
// function aliasesToObjectPattern(
//   aliases: Binding["downstreamAliases"],
// ): t.ObjectPattern {
//   // sort the properties by key, then length
//   const properties = [...aliases].sort(([, a], [, b]) =>
//     compareProperties(a, b),
//   );
//   //
//   const stack = [t.objectPattern([])];
//   for (const [binding, property] of properties) {
//   }
// }
// function compareProperties(a: Opt<string>, b: Opt<string>) {
//   if (a) {
//     if (b) {
//       if (Array.isArray(a)) {
//         if (Array.isArray(b)) {
//           const minLength = Math.min(a.length, b.length);
//           for (let i = 0; i < minLength; i++) {
//             const diff = compareStr(a[i], b[i]);
//             if (diff) return diff;
//           }

//           return a.length - b.length;
//         }
//         return compareStr(a[0], b);
//       } else if (Array.isArray(b)) {
//         return compareStr(a, b[0]);
//       }

//       return compareStr(a, b);
//     }
//     return 1;
//   }
//   return -1;
// }
// function compareStr(a: string, b: string) {
//   return a === b ? 0 : a > b ? 1 : -1;
// }

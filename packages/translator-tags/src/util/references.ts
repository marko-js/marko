import { types as t } from "@marko/compiler";

import { currentProgramPath } from "../visitors/program";
import { getExprRoot, getFnRoot } from "./get-root";
import { isStatefulReferences } from "./is-stateful";
import { isOptimize } from "./marko-config";
import {
  addSorted,
  filter,
  find,
  findSorted,
  forEach,
  type Many,
  type Opt,
  Sorted,
} from "./optional";
import { forEachSection, getOrCreateSection, type Section } from "./sections";
import { createProgramState, createSectionState } from "./state";

export type Aliases = undefined | Binding | { [property: string]: Aliases };

export enum BindingType {
  dom,
  let,
  input,
  param,
  derived,
  // todo: constant
}

export type Binding = {
  id: number;
  name: string;
  type: BindingType;
  section: Section;
  serialize: boolean | Set<Binding>;
  aliases: Set<Binding>;
  property: string | undefined;
  propertyAliases: Map<string, Binding>;
  excludeProperties: undefined | string[];
  upstreamAlias: Binding | undefined;
  upstreamExpression: t.NodeExtra | undefined;
  downstreamExpressions: Set<t.NodeExtra>;
  export: string | undefined;
  declared: boolean;
  nullable: boolean;
};

export type ReferencedBindings = Opt<Binding>;
export type Intersection = Many<Binding>;

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    referencedBindings?: ReferencedBindings;
    binding?: Binding;
    source?: Binding;
    isEffect?: true;
  }
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
  declared = false,
): Binding {
  const id = getNextBindingId();
  const binding: Binding = {
    id,
    name,
    type,
    section,
    property,
    declared,
    excludeProperties: undefined,
    serialize: false,
    aliases: new Set(),
    propertyAliases: new Map(),
    upstreamAlias,
    upstreamExpression,
    downstreamExpressions: new Set(),
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
  changeBinding?: Binding,
) {
  const tagVar = tag.node.var;
  if (tagVar) {
    const section = getOrCreateSection(tag);
    const canonicalUpstreamAlias = getCanonicalBinding(upstreamAlias);
    upstreamAlias?.downstreamExpressions.delete(upstreamExpression!);
    createBindingsAndTrackReferences(
      tagVar,
      type,
      tag.scope,
      section,
      canonicalUpstreamAlias,
      upstreamExpression,
      undefined,
      changeBinding,
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
    upstreamAlias?.downstreamExpressions.delete(upstreamExpression!);
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
        undefined,
        i + "",
      );
    }
  }
}

export function trackReferencesForBinding(
  babelBinding: t.Binding,
  changeBinding?: Binding,
) {
  const { identifier, referencePaths, constantViolations } = babelBinding;
  const binding = identifier.extra!.binding!;

  for (const referencePath of referencePaths) {
    trackReference(referencePath as t.NodePath<t.Identifier>, binding);
  }

  for (const referencePath of constantViolations) {
    /*
     * https://github.com/babel/babel/issues/11313
     * We need this so we can handle `+=` and friends
     */
    const node = referencePath.node;

    if (t.isAssignmentExpression(node)) {
      assignBinding(node.left, binding);
    }

    if (t.isUpdateExpression(node)) {
      assignBinding(node.argument, binding);
    }

    if (
      t.isAssignmentExpression(node) &&
      t.isIdentifier(node.left) &&
      node.operator !== "="
    ) {
      trackReference(
        (referencePath as t.NodePath<t.AssignmentExpression>).get(
          "left",
        ) as t.NodePath<t.Identifier>,
        binding,
      );
    }

    if (changeBinding) {
      if (referencePath.isUpdateExpression()) {
        trackReference(
          referencePath.get("argument") as t.NodePath<t.Identifier>,
          changeBinding,
        );
      } else if (referencePath.isAssignmentExpression()) {
        trackReference(
          referencePath.get("left") as t.NodePath<t.Identifier>,
          changeBinding,
        );
      }
    }
  }
}

function assignBinding(
  node: t.LVal | t.ObjectProperty | t.ObjectProperty["value"],
  binding: Binding,
) {
  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        assignBinding(prop, binding);
      }
      break;
    case "ArrayPattern":
      for (const element of node.elements) {
        if (element !== null) {
          assignBinding(element, binding);
        }
      }
      break;
    case "RestElement":
      assignBinding(node.argument, binding);
      break;
    case "ObjectProperty":
      assignBinding(node.value, binding);
      break;
    case "Identifier":
      if (node.name === binding.name) {
        (node.extra ??= {}).source = binding;
      }
      break;
    case "MemberExpression":
      (node.extra ??= {}).source = binding;
      break;
  }
}

function createBindingsAndTrackReferences(
  lVal: t.LVal,
  type: BindingType,
  scope: t.Scope,
  section: Section,
  upstreamAlias?: Binding["upstreamAlias"],
  upstreamExpression?: Binding["upstreamExpression"],
  property?: string,
  changeBinding?: Binding,
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
        true,
      );
      trackReferencesForBinding(scope.getBinding(lVal.name)!, changeBinding);
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
          upstreamExpression,
          property,
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
          upstreamExpression,
          property,
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
        upstreamExpression,
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
      reference.upstreamExpression,
      prop,
    );
  }

  const fnRoot = getFnRoot(root);
  const exprRoot = getExprRoot(fnRoot || root);
  const section = getOrCreateSection(exprRoot);
  const exprExtra = (exprRoot.node.extra ??= {});
  addReferenceToExpression(exprRoot, reference);
  assignBinding(root.node, reference);

  if (fnRoot) {
    let fnExtra = exprExtra;

    if (fnRoot !== exprRoot) {
      fnExtra = fnRoot.node.extra ??= {};
      fnExtra.referencedBindings = addReference(
        section,
        fnExtra.referencedBindings,
        reference,
      );
    }
  }
}

const [getMergedReferences] = createProgramState(
  () => new Map<t.Node, { section: Section; nodes: (t.Node | undefined)[] }>(),
);
export function mergeReferences(
  section: Section,
  target: t.Node,
  nodes: (t.Node | undefined)[],
) {
  getMergedReferences().set(target, { section, nodes });
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
  const droppedReferences = getDroppedReferences();
  if (droppedReferences.size) {
    for (const expr of droppedReferences) {
      const { extra } = expr;
      if (extra && extra.referencedBindings) {
        forEach(extra.referencedBindings, ({ downstreamExpressions }) => {
          downstreamExpressions.delete(extra);
        });

        extra.referencedBindings = undefined;
      }
    }
    droppedReferences.clear();
  }

  const mergedReferences = getMergedReferences();
  if (mergedReferences.size) {
    for (const [target, { section, nodes }] of mergedReferences) {
      const targetExtra = (target.extra ??= {});
      let { referencedBindings, isEffect } = targetExtra;
      for (const node of nodes) {
        const extra = node?.extra;
        if (extra) {
          const additionalBindings = extra.referencedBindings;
          isEffect ||= extra.isEffect;
          if (additionalBindings) {
            referencedBindings = bindingUtil.union(
              referencedBindings,
              additionalBindings,
            );
            forEach(additionalBindings, ({ downstreamExpressions }) => {
              downstreamExpressions.delete(extra);
              downstreamExpressions.add(targetExtra);
            });
          }
        }
      }

      referencedBindings = findReferences(section, referencedBindings);
      targetExtra.referencedBindings = referencedBindings;
      targetExtra.isEffect = isEffect;
    }

    mergedReferences.clear();
  }

  const bindings = getBindings();

  for (const binding of bindings) {
    if (binding.type !== BindingType.dom && !binding.upstreamAlias) {
      if (pruneBinding(bindings, binding)) {
        const { upstreamExpression } = binding;
        if (upstreamExpression) {
          forEach(
            upstreamExpression.referencedBindings,
            (referencedBinding) => {
              referencedBinding.downstreamExpressions.delete(
                upstreamExpression,
              );
              pruneBinding(bindings, referencedBinding);
            },
          );
        }
      }
    }
  }

  const intersections = new Set<Intersection>();

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
    } of binding.downstreamExpressions) {
      if (Array.isArray(referencedBindings)) {
        intersections.add(referencedBindings);
      }

      forEach(referencedBindings, (bindingReference) => {
        if (isEffect) {
          bindingReference.serialize = true;
        }
      });
    }
  }

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

  // mark bindings that need to be serialized due to being closed over by stateful sections
  forEachSection((section) => {
    forEach(section.closures, (binding) => {
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

  forEachSection(({ id, bindings }) => {
    forEach(
      filter(bindings, ({ section }) => section.id === id),
      (binding, i) => {
        binding.id = i;
      },
    );
  });
}

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

const [getIntersections, setIntersections] = createSectionState(
  "intersections",
  () => [] as Intersection[],
);
export function addReferenceToExpression(path: t.NodePath, reference: Binding) {
  const exprExtra = (path.node.extra ??= {});
  const section = getOrCreateSection(path);
  exprExtra.referencedBindings = addReference(
    section,
    exprExtra.referencedBindings,
    reference,
  );
  reference.downstreamExpressions.add(exprExtra);
}

const [getDroppedReferences] = createProgramState(() => new Set<t.Node>());
export function dropReferences(node: t.Node | t.Node[]) {
  const droppedReferences = getDroppedReferences();
  if (Array.isArray(node)) {
    for (const item of node) {
      droppedReferences.add(item);
    }
  } else {
    droppedReferences.add(node);
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

function addReference(
  section: Section,
  referencedBindings: ReferencedBindings,
  binding: Binding,
) {
  if (section !== binding.section) {
    section.closures = bindingUtil.add(section.closures, binding);
  }
  const newIntersection = bindingUtil.add(referencedBindings, binding);
  return findReferences(section, newIntersection);
}

function findReferences(
  section: Section,
  referencedBindings: ReferencedBindings,
) {
  if (!referencedBindings || !Array.isArray(referencedBindings)) {
    return referencedBindings;
  }

  const intersections = getIntersections(section);
  let intersection = findSorted(
    compareIntersections,
    intersections,
    referencedBindings,
  );
  if (!intersection) {
    setIntersections(
      section,
      addSorted(compareIntersections, intersections, referencedBindings),
    );
    intersection = referencedBindings;
  }
  return intersection;
}

export function getScopeAccessorLiteral(binding: Binding) {
  if (isOptimize()) {
    return t.numericLiteral(binding.id);
  }

  return t.stringLiteral(
    binding.name + (binding.type === BindingType.dom ? `/${binding.id}` : ""),
  );
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

function getMemberExpressionPropString(expr: t.MemberExpression) {
  switch (expr.property.type) {
    case "StringLiteral":
      return expr.property.value;
    case "NumericLiteral":
      return "" + expr.property.value;
    case "Identifier":
      return expr.property.name;
  }
}

function isEventOrChangeHandler(prop: string) {
  return /^on[-A-Z][a-zA-Z0-9_$]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$/.test(prop);
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

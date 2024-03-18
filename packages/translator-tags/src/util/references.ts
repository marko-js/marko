import { types as t } from "@marko/compiler";
import { createProgramState, currentProgramPath } from "../visitors/program";
import { getExprRoot, getFnRoot } from "./get-root";
import { addSorted, findSorted, type Opt, type Many, Sorted, concat, push, type OneMany, pop, forEach } from "./optional";
import {
  type Section,
  getOrCreateSection,
  createSectionState,
  forEachSection,
} from "./sections";

export type Aliases = undefined | Reference | { [property: string]: Aliases };

export enum SourceType {
  let,
  input,
  param,
  derived,
  dom
};

export type Source = {
  id: number,
  type: SourceType,
  section: Section,
  value: undefined | {
    aliases: Aliases,
    expression: t.NodeExtra,
  },
  expressions: Set<t.NodeExtra>,
}

export type Reference = {
  source: Source,
  section: Section,
  property: Opt<string>,
  name: string
  serialize: boolean | Set<Source>
}

export type References = Opt<Reference>;
export type Intersection = Many<Reference>;

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    references?: References;
    source?: Source;
    hasOwnGuard?: true;
  }

  // TODO: remove
  export interface FunctionExpressionExtra {
    name?: string;
  }

  // TODO: remove
  export interface ArrowFunctionExpressionExtra {
    name?: string;
  }
}

const [getSources] = createProgramState(() => new Set<Source>());
const [getNextSourceId, setNextSourceId] = createProgramState(() => 0);
function createSource(path: t.NodePath<any>, value: Source["value"], type: SourceType): Source {
  const section = getOrCreateSection(path);
  const id = getNextSourceId();

  const source: Source = {
    id,
    type,
    section,
    value,
    expressions: new Set(),
  };
  setNextSourceId(id + 1);
  getSources().add(source);
  return source;
}

export default function trackReferences(tag: t.NodePath<t.MarkoTag>, value: Source["value"], sourceType: SourceType = SourceType.derived) {
  const tagVar = tag.node.var;
  if (tagVar) {
    const source = (tag.node.extra ??= {}).source = createSource(tag, value, sourceType);
    for (const { identifier, property } of getBindingIdentifiers(tagVar)) {
      (identifier.extra ??= {}).source = source;
      trackReferencesForBinding(tag, identifier.name, property);
    }
  }

  const body = tag.get("body");
  const params = body.node.params;
  if (body.get("body").length && params.length) {
    const source = (body.node.extra ??= {}).source = createSource(body, undefined, SourceType.param);
    for (let i = 0; i < params.length; i++) {
      for (const { identifier, property } of getBindingIdentifiers(params[i], i + "")) {
        (identifier.extra ??= {}).source = source;
        trackReferencesForBinding(body, identifier.name, property);
      }
    }
  }
}

export function trackReferencesForBinding(
  sourcePath: t.NodePath<t.MarkoTag | t.MarkoTagBody | t.Program>,
  name: string,
  property: Opt<string>
) {
  const scope = sourcePath.scope;
  const source = sourcePath.node.extra!.source!;

  const { referencePaths, constantViolations } = scope.getBinding(name)!;

  // const binding = reserveScope(
  //   ReserveType.Store,
  //   section,
  //   identifiers[name],
  //   name,
  // );

  for (const referencePath of referencePaths) {
    trackReference(referencePath as t.NodePath<t.Identifier>, source, property);
  }

  for (const referencePath of constantViolations) {
    /*
     * https://github.com/babel/babel/issues/11313
     * We need this so we can handle `+=` and friends
     */
    const node = referencePath.node;
    if (
      t.isAssignmentExpression(node) && t.isIdentifier(node.left) && node.operator !== "="
    ) {
      trackReference((referencePath as t.NodePath<t.AssignmentExpression>).get("left") as t.NodePath<t.Identifier>, source, property);
    }
  }
}

function getBindingIdentifiers(path: t.LVal, extraProperty?: Opt<string>): Array<{ identifier: t.Identifier, property: Opt<string> }> {

  return path.getBindingIdentifiers();

}

function trackReference(referencePath: t.NodePath<t.Identifier>, source: Source, property: Opt<string>) {
  const fnRoot = getFnRoot(referencePath.scope.path);
  const [readRoot, readProperty] = getReadRoot(referencePath);
  const exprRoot = getExprRoot(fnRoot || readRoot);
  const markoRoot = exprRoot.parentPath;
  const section = getOrCreateSection(exprRoot);
  const reference = getReference(source, section, concat(property, readProperty), referencePath.node.name + (readProperty ? `[${readProperty.toString()}]` : ""));
  const exprExtra = (exprRoot.node.extra ??= {});
  const readExtra = (readRoot.node.extra ??= {});
  exprExtra.references = addReference(exprExtra.references, reference);
  readExtra.reference = reference;
  source.expressions.add(exprExtra);
  
  // TODO: this should be in finalizeReferences
  // probably should be a set
  if (section !== source.section) {
    section.closures ??= [];
    section.closures.push(source);
  }

  // TODO: remove
  if (fnRoot) {
    const name = (fnRoot.node as t.FunctionExpression).id?.name;
    let fnExtra = exprExtra;

    if (fnRoot !== exprRoot) {
      fnExtra = fnRoot.node.extra ??= {};
      fnExtra.references = addReference(fnExtra.references, reference);
    }

    if (!name) {
      if (markoRoot.isMarkoAttribute() && !markoRoot.node.default) {
        fnExtra.name = markoRoot.node.name;
      }
    }
  }
}

function getReadRoot(path: t.NodePath<t.Identifier>) {
  let curPath: t.NodePath<t.Identifier | t.MemberExpression> = path;
  let property: Opt<string> = undefined;
  while (t.isMemberExpression(curPath.parent)) {
    if (!curPath.parent.computed) {
      property = push(property, (curPath.parent.property as t.Identifier).name);
    } else if(t.isStringLiteral(curPath.parent.property)) {
      property = push(property, curPath.parent.property.value);
    } else {
      break;
    }
    curPath = curPath.parentPath as t.NodePath<t.MemberExpression>;
  }
  return [curPath, property] as const;
}

// export function addReferenceOld(target: t.NodePath, reference: Reserve) {
//   const { node } = target;
//   const extra = (node.extra ??= {});
//   const previousReferences = extra.references;
//   const section = getOrCreateSection(target);
//   let newReferences = reserveUtil.add(previousReferences, reference);

//   if (previousReferences !== newReferences) {
//     if (isIntersection(newReferences)) {
//       newReferences = getIntersection(section, newReferences);
//       addSubscriber(newReferences);
//     }

//     if (isIntersection(previousReferences)) {
//       removeSubscriber(getIntersection(section, previousReferences));
//     }

//     extra.references = newReferences;
//   }

//   return newReferences;
// }

const mergedReferencesForProgram = new WeakMap<t.NodePath<t.Program>, Map<t.NodePath, (t.Node | undefined)[]>>();
export function mergeReferences(
  target: t.NodePath,
  nodes: (t.Node | undefined)[],
) {
  const mergedReferences = mergedReferencesForProgram.get(currentProgramPath);
  if (mergedReferences) {
    mergedReferences.set(target, nodes);
  } else {
    mergedReferencesForProgram.set(currentProgramPath, new Map([[target, nodes]]));
  }
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
    const compareResult = referenceUtil.compare(a[i], b[i]);
    if (compareResult !== 0) {
      return compareResult;
    }
  }

  return 0;
}

export function finalizeReferences() {
  const mergedReferences = mergedReferencesForProgram.get(currentProgramPath);
  if (mergedReferences) {
    mergedReferencesForProgram.delete(currentProgramPath);

    for (const [target, nodes] of mergedReferences) {
      let newReferences: References;
      for (const node of nodes) {
        const extra = node?.extra;
        const references = extra?.references;
        if (references) {
          newReferences = referenceUtil.union(newReferences, references);
          forEach(references, (reference) => {
            reference.source.expressions.delete(extra);
          });
        }
      }
    
      newReferences = findReferences(getOrCreateSection(target), newReferences);
      (target.node.extra ??= {}).references = newReferences;
    }
  }

  const sources = getSources();
  sources.forEach(function pruneSource(source: Source) {
    const { expressions, value } = source;
    if (value && !expressions.size) {
      forEach(value.expression.references, ref => {
        ref.source.expressions.delete(value.expression);
        pruneSource(ref.source);
      });
      sources.delete(source);
    }
  });

  const intersections = new Set<Intersection>();
  const mayNotNeedGuard = new Set();
  const defNeedsGuard = new Set();
  sources.forEach((source) => {
    source.expressions.forEach((expr) => {
      if (Array.isArray(expr.references)) {
        intersections.add(expr.references);
      }
      if (!expr.hasOwnGuard) {
        if (!defNeedsGuard.has(expr.references)) {
          mayNotNeedGuard.add(expr.references);
        }
      } else {
        mayNotNeedGuard.delete(expr.references);
        defNeedsGuard.add(expr.references);
      }
    });
  });

  intersections.forEach((intersection) => {
    const numReferences = intersection.length;
    // TODO: in some cases we should be able to short circuit this
    // if we know that the references are already serialized
    for (let i = 0; i < numReferences - 1; i++) {
      for (let j = i + 1; j < numReferences; j++) {
        const ref1 = intersection[i];
        const ref2 = intersection[j];
        const sources1 = getReferenceSources(ref1);
        const sources2 = getReferenceSources(ref2);
        if (!isSuperset(sources1, sources2)) {
          ref1.serialize = true;
          ref1.section.serializedReferences.add(ref1);
        }
        if (!isSuperset(sources2, sources1)) {
          ref2.serialize = true;
          ref2.section.serializedReferences.add(ref2);
        }
      }
    }
  });

  // TODO: assign scope accessors to references
  forEachSection((section) => {

  })

  // TODO: assign references to sections

}

function isSuperset(set: Set<any>, subset: Set<any>) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function getReferenceSources(reference: Reference): Set<Source> {
  // TODO: walk up the sources
  return new Set([reference.source]);
}

export const referenceUtil = new Sorted(function compareReferences(
  a: Reference,
  b: Reference,
) {
  return a.section.id - b.section.id || a.source.id - b.source.id || compareProperties(a.property, b.property);
});

function compareProperties(a: Opt<string>, b: Opt<string>) {
  if (a) {
    if (b) {
      if (Array.isArray(a)) {
        if (Array.isArray(b)) {
          const len = a.length;
          let diff = len - b.length;
          if (diff === 0) {
            for (let i = 0; i < len; i++) {
              diff = compareStr(a[i], b[i]);
              if (diff) break;
            }
          }

          return diff;
        }
        return 1;
      } else if (Array.isArray(b)) {
        return -1;
      }

      return compareStr(a, b);
    }
    return 1;
  }
  return -1;
};

function compareStr(a: string, b: string)  {
  return a === b ? 0 : a > b ? 1 : -1;
}

const referenceBySource = new WeakMap<Source, OneMany<Reference>>();
function getReference(source: Source, section: Section, property: Opt<string>, debugName: string) {
  const newReference = resolveReferenceAliases({
    source,
    section,
    property,
    name: debugName,
    serialize: false,
  });

  const references = referenceBySource.get(newReference.source);
  let reference = referenceUtil.find(references, newReference);
  if (!reference) {
    referenceBySource.set(newReference.source, referenceUtil.add(references, newReference));
    reference = newReference;
  }
  return reference;
}

// function resolveReferenceAliases(reference: Reference) {
//   return getAlias(reference.source.aliases, reference.property) ?? reference;
// }

// function getAlias(aliases: Aliases, property: Opt<string>): Reference | undefined {
//   if (aliases) {
//     if (isReference(aliases)) {
//       const resolved = resolveReferenceAliases(aliases);
//       if (property) {
//         return { ...resolved, property: concat(resolved.property, property) };
//       } else {
//         return resolved;
//       }
//     } else if (property) {
//       const [remainingProperty, lastProperty] = pop(property);
//       return getAlias(aliases[lastProperty], remainingProperty);
//     }
//   }
// }

function resolveReferenceAliases(reference: Reference) {
  let extraProperty: Opt<string>;
  let aliases = reference.source.value?.aliases;
  let property = reference.property;
  while (aliases) {
    if (isReference(aliases)) {
      extraProperty = concat(property, extraProperty);
      reference = aliases;
      aliases = reference.source.value?.aliases;
      property = reference.property;
    } else if (property) {
      const [remainingProperty, lastProperty] = pop(property);
      aliases = aliases[lastProperty]
      property = remainingProperty;
    } else {
      break;
    }
  }
  if (extraProperty) {
    return { ...reference, property: concat(reference.property, extraProperty) };
  } else {
    return reference;
  }
}

function isReference<T>(value: T | Reference): value is Reference {
  return !!((value as Reference).source && (value as Reference).section);
}

const [getIntersections, setIntersections] = createSectionState("intersections", () => [] as Intersection[]);
function addReference(references: References, reference: Reference) {
  const newIntersection = referenceUtil.add(references, reference);
  return findReferences(reference.section, newIntersection);
}

function findReferences(section: Section, references: References) {
  if (!references || !Array.isArray(references)) {
    return references;
  }

  const intersections = getIntersections(section);
  let intersection = findSorted(compareIntersections, intersections, references);
  if (!intersection) {
    setIntersections(section, addSorted(compareIntersections, intersections, references));
    intersection = references;
  }
  return intersection;
}
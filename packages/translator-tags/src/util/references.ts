import type { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
import { getExprRoot, getFnRoot } from "./get-root";
import { addSorted, findSorted, type Opt, type Many } from "./optional";
import {
  type Reserve,
  ReserveType,
  reserveUtil,
  reserveScope,
} from "./reserve";
import {
  type Section,
  createSectionState,
  forEachSection,
  getOrCreateSection,
} from "./sections";

const intersectionSubscribeCounts = new WeakMap<Reserve[], number>();
const [getIntersectionsBySection, setIntersectionsBySection] =
  createSectionState<Intersection[]>("intersectionsBySection", () => []);

export interface IntersectionsBySection {
  [sectionId: number]: Intersection[];
}
export type Intersection = Many<Reserve>;
export type References = Opt<Reserve>;

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    intersectionsBySection?: IntersectionsBySection;
  }

  export interface NodeExtra {
    references?: References;
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

export default function trackReferences(tag: t.NodePath<t.MarkoTag>) {
  if (tag.has("var")) {
    trackReferencesForBindings(getOrCreateSection(tag), tag.get("var"));
  }

  const body = tag.get("body");
  if (body.get("body").length && body.get("params").length) {
    trackReferencesForBindings(getOrCreateSection(body), body);
  }
}

export function trackReferencesForBindings(
  section: Section,
  path: t.NodePath<any>,
) {
  const scope = path.scope;
  const identifiers = path.getBindingIdentifiers();

  for (const name in identifiers) {
    const { referencePaths, constantViolations } = scope.getBinding(name)!;
    const binding = reserveScope(
      ReserveType.Store,
      section,
      identifiers[name],
      name,
    );

    for (const reference of referencePaths) {
      addBindingToReference(binding, reference);
    }

    for (const reference of constantViolations) {
      /*
       * https://github.com/babel/babel/issues/11313
       * We need this so we can handle `+=` and friends
       */
      if (
        reference.isAssignmentExpression() &&
        reference.node.operator !== "="
      ) {
        addBindingToReference(binding, reference);
      }
    }
  }
}

function addBindingToReference(binding: Reserve, reference: t.NodePath) {
  const fnRoot = getFnRoot(reference.scope.path);
  const exprRoot = getExprRoot(fnRoot || reference);
  const markoRoot = exprRoot.parentPath;
  const extra = (exprRoot.node.extra ??= {});
  const previousReferences = extra.references;
  let newReferences = reserveUtil.add(previousReferences, binding);

  if (previousReferences !== newReferences) {
    const section = getOrCreateSection(exprRoot);
    if (isIntersection(previousReferences)) {
      removeSubscriber(getIntersection(section, previousReferences));
    }

    if (isIntersection(newReferences)) {
      newReferences = getIntersection(section, newReferences);
      addSubscriber(newReferences);
    }

    if (section !== binding.section) {
      section.closures ??= [];
      section.closures.push(binding);
    }

    extra.references = newReferences;
  }

  // TODO: remove
  if (fnRoot) {
    const name = (fnRoot.node as t.FunctionExpression).id?.name;
    let fnExtra = extra;

    if (fnRoot !== exprRoot) {
      fnExtra = fnRoot.node.extra ??= {};
      fnExtra.references = reserveUtil.add(fnExtra.references, binding);
    }

    if (!name) {
      if (markoRoot.isMarkoAttribute() && !markoRoot.node.default) {
        fnExtra.name = markoRoot.node.name;
      }
    }
  }
}

export function addReference(target: t.NodePath, reference: Reserve) {
  const { node } = target;
  const extra = (node.extra ??= {});
  const previousReferences = extra.references;
  const section = getOrCreateSection(target);
  let newReferences = reserveUtil.add(previousReferences, reference);

  if (previousReferences !== newReferences) {
    if (isIntersection(newReferences)) {
      newReferences = getIntersection(section, newReferences);
      addSubscriber(newReferences);
    }

    if (isIntersection(previousReferences)) {
      removeSubscriber(getIntersection(section, previousReferences));
    }

    extra.references = newReferences;
  }

  return newReferences;
}

export function mergeReferences(
  target: t.NodePath,
  nodes: (t.Node | undefined)[],
) {
  let newReferences: References;
  for (const node of nodes) {
    const extra = node?.extra;
    if (extra) {
      if (isIntersection(extra.references)) {
        removeSubscriber(
          getIntersection(getOrCreateSection(target), extra.references),
        );
      }
      newReferences = reserveUtil.union(newReferences, extra.references);
    }
  }

  if (isIntersection(newReferences)) {
    newReferences = getIntersection(getOrCreateSection(target), newReferences);
    addSubscriber(newReferences);
  }

  (target.node.extra ??= {}).references = newReferences;

  return newReferences;
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
    const compareResult = reserveUtil.compare(a[i], b[i]);
    if (compareResult !== 0) {
      return compareResult;
    }
  }

  return 0;
}

export function finalizeIntersections() {
  const intersectionsBySection: IntersectionsBySection =
    ((currentProgramPath.node.extra ??= {}).intersectionsBySection = {});
  forEachSection((section) => {
    intersectionsBySection[section.id] = getIntersectionsBySection(
      section,
    ).filter(
      (intersection) => intersectionSubscribeCounts.get(intersection)! > 0,
    );
  });
}

function getIntersection(section: Section, references: Intersection) {
  const intersections = getIntersectionsBySection(section);
  let intersection = findSorted(
    compareIntersections,
    intersections,
    references,
  );

  if (!intersection) {
    intersection = references;
    setIntersectionsBySection(
      section,
      addSorted(compareIntersections, intersections, references),
    );
  }

  return intersection;
}

function addSubscriber(intersection: Intersection) {
  intersectionSubscribeCounts.set(
    intersection,
    (intersectionSubscribeCounts.get(intersection) || 0) + 1,
  );

  return intersection;
}

function removeSubscriber(intersection: Intersection) {
  intersectionSubscribeCounts.set(
    intersection,
    intersectionSubscribeCounts.get(intersection)! - 1,
  );

  return intersection;
}

function isIntersection(references: References): references is Intersection {
  return Array.isArray(references);
}

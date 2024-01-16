import type { types as t } from "@marko/compiler";
import { currentProgramPath } from "../visitors/program";
import {
  type Reserve,
  ReserveType,
  repeatableReserves,
  reserveScope,
} from "./reserve";
import {
  type Section,
  createSectionState,
  forEachSection,
  getOrCreateSection,
} from "./sections";
import { SortedRepeatable } from "./sorted-repeatable";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

const intersectionSubscribeCounts = new WeakMap<Reserve[], number>();
const repeatableIntersections = new SortedRepeatable(compareIntersections);
const [getIntersectionsBySection, setIntersectionsBySection] =
  createSectionState<Intersection[]>("intersectionsBySection", () => []);

export interface IntersectionsBySection {
  [sectionId: number]: Intersection[];
}
export type Intersection = Reserve[];
export type References = undefined | Reserve | Intersection;

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    intersectionsBySection?: IntersectionsBySection;
  }

  // TODO: remove
  export interface FunctionExpressionExtra {
    references?: References;
    name?: string;
  }

  // TODO: remove
  export interface ArrowFunctionExpressionExtra {
    references?: References;
    name?: string;
  }

  export interface MarkoTagExtra {
    varReferences?: References;
    nameReferences?: References;
  }

  export interface MarkoTagBodyExtra {
    paramsReferences?: References;
  }

  export interface MarkoAttributeExtra {
    valueReferences?: References;
  }

  export interface MarkoSpreadAttributeExtra {
    valueReferences?: References;
  }

  export interface MarkoPlaceholderExtra {
    valueReferences?: References;
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
  const bindings = path.getBindingIdentifiers() as unknown as Record<
    string,
    t.Identifier
  >;
  for (const name in bindings) {
    const references = scope.getBinding(name)!.referencePaths.concat(
      /*
        https://github.com/babel/babel/issues/11313
        We need this so we can handle `+=` and friends
      */
      scope
        .getBinding(name)!
        .constantViolations.filter(
          (path) => path.isAssignmentExpression() && path.node.operator !== "=",
        ),
    );
    const identifier = bindings[name];
    const binding = reserveScope(ReserveType.Store, section, identifier, name);

    for (const reference of references) {
      const fnRoot = getFnRoot(reference.scope.path);
      const exprRoot = getExprRoot(fnRoot || reference);
      const markoRoot = exprRoot.parentPath;
      const immediateRoot = fnRoot ?? exprRoot;

      // TODO: remove
      if (immediateRoot) {
        const name = (immediateRoot.node as t.FunctionExpression).id?.name;

        if (!name) {
          if (markoRoot.isMarkoAttribute() && !markoRoot.node.default) {
            (immediateRoot.node.extra ??= {}).name = markoRoot.node.name;
          }
        }

        addBindingToReferences(immediateRoot, "references", binding);
      }

      addBindingToReferences(
        markoRoot,
        `${exprRoot.listKey || exprRoot.key}References`,
        binding,
      );
    }
  }
}

export function addBindingToReferences(
  path: t.NodePath,
  referencesKey: string,
  binding: Reserve,
) {
  const section = getOrCreateSection(path);
  const extra = (path.node.extra ??= {});
  const prevReferences = extra[referencesKey] as References | undefined;

  if (prevReferences) {
    if (prevReferences !== binding) {
      extra[referencesKey] = addSubscriber(
        getIntersection(
          section,
          repeatableReserves.add(
            repeatableReserves.clone(prevReferences),
            binding,
          ),
        ),
      );

      if (isIntersection(prevReferences)) {
        removeSubscriber(getIntersection(section, prevReferences));
      }
    }
  } else {
    extra[referencesKey] = binding;
  }
}

export function mergeReferences(
  section: Section,
  groupEntries: [Record<string, unknown>, string][],
) {
  let newReferences: References;
  for (const [extra, key] of groupEntries) {
    const references = extra[key] as References;

    if (isIntersection(references)) {
      removeSubscriber(getIntersection(section, references));
    }

    newReferences = repeatableReserves.addAll(newReferences, references);
    delete extra[key];
  }

  if (isIntersection(newReferences)) {
    newReferences = addSubscriber(getIntersection(section, newReferences));
  }

  return newReferences;
}

function getExprRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  while (!isMarkoPath(curPath.parentPath!)) {
    curPath = curPath.parentPath!;
  }

  return curPath as t.NodePath<t.Node> & {
    parentPath: MarkoExprRootPath;
  };
}

function getFnRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  if (curPath.isProgram()) return;

  while (!isFunctionExpression(curPath)) {
    if (isMarkoPath(curPath)) return;
    curPath = (curPath as t.NodePath<t.Node>).parentPath!;
  }

  return curPath as
    | undefined
    | t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>;
}

function isMarkoPath(path: t.NodePath<any>): path is MarkoExprRootPath {
  switch (path.type) {
    case "MarkoTag":
    case "MarkoTagBody":
    case "MarkoAttribute":
    case "MarkoSpreadAttribute":
    case "MarkoPlaceholder":
    case "MarkoScriptlet":
      return true;
    default:
      return false;
  }
}

function isFunctionExpression(
  path: t.NodePath<any>,
): path is t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression> {
  switch (path.type) {
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return true;
    default:
      return false;
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
    const compareResult = repeatableReserves.compare(a[i], b[i]);
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
  let intersection = repeatableIntersections.find(intersections, references);

  if (!intersection) {
    intersection = references;
    setIntersectionsBySection(
      section,
      repeatableIntersections.add(intersections, references),
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

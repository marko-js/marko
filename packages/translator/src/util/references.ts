import { types as t } from "@marko/compiler";
import { createSortedCollection } from "./sorted-arr";
import {
  getOrCreateSectionId,
  createSectionState,
  forEachSectionId,
} from "./sections";
import {
  Reserve,
  ReserveType,
  reserveScope,
  compareReserves,
  insertReserve,
} from "./reserve";
import { currentProgramPath } from "../visitors/program";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

const [getReferenceGroups] = createSectionState<ReferenceGroup[]>(
  "apply",
  () => [
    {
      sectionId: 0,
      index: 0,
      count: 0,
      references: undefined,
      apply: t.identifier(""),
      hydrate: t.identifier(""),
    },
  ]
);
export interface ReferenceGroup {
  sectionId: number;
  index: number;
  count: number;
  references: undefined | Reserve | Reserve[];
  apply: t.Identifier;
  hydrate: t.Identifier;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    referenceGroups?: ReferenceGroup[][];
  }

  export interface FunctionExpressionExtra {
    references?: ReferenceGroup;
    name?: string;
  }

  export interface ArrowFunctionExpressionExtra {
    references?: ReferenceGroup;
    name?: string;
  }

  export interface MarkoTagExtra {
    varReferences?: ReferenceGroup;
    nameReferences?: ReferenceGroup;
  }

  export interface MarkoTagBodyExtra {
    paramsReferences?: ReferenceGroup;
  }

  export interface MarkoAttributeExtra {
    valueReferences?: ReferenceGroup;
  }

  export interface MarkoSpreadAttributeExtra {
    valueReferences?: ReferenceGroup;
  }

  export interface MarkoPlaceholderExtra {
    valueReferences?: ReferenceGroup;
  }
}

export default function trackReferences(tag: t.NodePath<t.MarkoTag>) {
  if (tag.has("var")) {
    trackReferencesForBindings(getOrCreateSectionId(tag), tag.get("var"));
  }

  const body = tag.get("body");
  if (body.get("body").length && body.get("params").length) {
    trackReferencesForBindings(getOrCreateSectionId(body), body);
  }
}

export function trackReferencesForBindings(
  sectionId: number,
  path: t.NodePath<any>,
  reserveType: ReserveType = ReserveType.Store
) {
  const scope = path.scope;
  const bindings = path.getBindingIdentifiers() as unknown as Record<
    string,
    t.Identifier
  >;
  for (const name in bindings) {
    const references = scope.getBinding(name)!.referencePaths;
    const identifier = bindings[name];
    const binding = reserveScope(reserveType, sectionId, identifier, name);

    insertReferenceGroup(getReferenceGroups(sectionId), {
      sectionId,
      index: 0,
      count: 0,
      references: binding,
      apply: t.identifier(""),
      hydrate: t.identifier(""),
    });

    for (const reference of references) {
      const fnRoot = getFnRoot(reference.scope.path);
      const exprRoot = getExprRoot(fnRoot || reference);
      const markoRoot = exprRoot.parentPath;

      if (fnRoot) {
        const name = (fnRoot.node as t.FunctionExpression).id?.name;

        if (!name) {
          if (markoRoot.isMarkoAttribute() && !markoRoot.node.default) {
            (fnRoot.node.extra ??= {}).name = markoRoot.node.name;
          }
        }

        updateReferenceGroup(fnRoot, "references", binding);
      }

      updateReferenceGroup(
        markoRoot,
        `${exprRoot.listKey || exprRoot.key}References`,
        binding
      );
    }
  }
}

function updateReferenceGroup(
  path: t.NodePath<t.Marko | t.ArrowFunctionExpression | t.FunctionExpression>,
  extraKey: string,
  newBinding: Reserve
) {
  const sectionId = getOrCreateSectionId(path);
  const currentGroup = (path.node.extra ??= {})[extraKey] as
    | ReferenceGroup
    | undefined;
  const newReferences = insertReserve(
    currentGroup?.references,
    newBinding,
    true
  );

  if (currentGroup) {
    currentGroup.count--;
  }

  getOrCreateReferenceGroup(sectionId, newBinding);

  path.node.extra![extraKey] = getOrCreateReferenceGroup(
    sectionId,
    newReferences
  );
}

export function mergeReferenceGroups(
  sectionId: number,
  groupEntries: [Record<string, unknown>, string][]
) {
  let newReferences: ReferenceGroup["references"];
  for (const [extra, key] of groupEntries) {
    const group = extra[key] as ReferenceGroup;
    const references = group.references;
    delete extra[key];
    group.count--;
    sectionId = group.sectionId;

    if (references) {
      if (Array.isArray(references)) {
        for (const binding of references) {
          newReferences = insertReserve(newReferences, binding);
        }
      } else {
        newReferences = insertReserve(newReferences, references);
      }
    }
  }

  return getOrCreateReferenceGroup(sectionId, newReferences);
}

function getOrCreateReferenceGroup(
  sectionId: number,
  references: ReferenceGroup["references"]
) {
  const newGroup: ReferenceGroup = {
    sectionId,
    index: 0,
    count: 1,
    references,
    apply: t.identifier(""),
    hydrate: t.identifier(""),
  };

  const referenceGroups = getReferenceGroups(sectionId);
  const existingGroup = findReferenceGroup(referenceGroups, newGroup);

  if (existingGroup) {
    existingGroup.count++;
  } else {
    insertReferenceGroup(referenceGroups, newGroup);
  }

  return existingGroup ?? newGroup;
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
    curPath = curPath.parentPath!;
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
  path: t.NodePath<any>
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
const { insert: insertReferenceGroup, find: findReferenceGroup } =
  createSortedCollection(function compareReferenceGroups(
    { references: a }: ReferenceGroup,
    { references: b }: ReferenceGroup
  ) {
    if (a) {
      if (b) {
        if (Array.isArray(a)) {
          if (Array.isArray(b)) {
            const len = a.length;
            const lenDelta = len - b.length;
            if (lenDelta !== 0) {
              return lenDelta;
            }

            for (let i = 0; i < len; i++) {
              const compareResult = compareReserves(a[i], b[i]);
              if (compareResult !== 0) {
                return compareResult;
              }
            }

            return 0;
          } else {
            return 1;
          }
        } else if (Array.isArray(b)) {
          return -1;
        } else {
          return compareReserves(a, b);
        }
      } else {
        return 1;
      }
    } else {
      return b ? -1 : 0;
    }
  });

export function finalizeReferences() {
  const allReferenceGroups: ReferenceGroup[][] = [];
  forEachSectionId((sectionId) => {
    const referenceGroups = getReferenceGroups(sectionId).filter(
      (g) => g.count > 0 || !Array.isArray(g.references)
    );
    referenceGroups.forEach((g, i) => {
      g.index = i;
      g.apply.name = generateReferenceGroupName(
        "apply",
        sectionId,
        g.references
      );
      g.hydrate.name = generateReferenceGroupName(
        "hydrate",
        sectionId,
        g.references
      );
    });
    allReferenceGroups[sectionId] = referenceGroups;
  });
  (currentProgramPath.node.extra ??= {}).referenceGroups = allReferenceGroups;
}

export function getReferenceGroup(
  sectionId: number,
  lookup: number | ReferenceGroup["references"],
  analyze = false
) {
  const referenceGroups = analyze
    ? getReferenceGroups(sectionId)
    : currentProgramPath.node.extra!.referenceGroups![sectionId];
  let found: ReferenceGroup | undefined;
  if (typeof lookup === "number") {
    found = referenceGroups[lookup];
  } else {
    found = findReferenceGroup(referenceGroups, {
      references: lookup,
    } as ReferenceGroup);
  }

  if (!found) {
    throw new Error(
      `Reference group not found for section ${sectionId}: ${lookup}`
    );
  }

  return found;
}

function generateReferenceGroupName(
  type: "apply" | "hydrate",
  sectionId: number,
  references: ReferenceGroup["references"]
) {
  let name = type + (sectionId || "");

  if (references) {
    if (Array.isArray(references)) {
      name += "With";
      for (const ref of references) {
        name += `_${ref.name}`;
      }
    } else {
      name += `_${references.name}`;
    }
  }

  return currentProgramPath.scope.generateUid(name);
}

import type { types as t } from "@marko/compiler";
import * as sorted from "../../util/sorted-arr";
import {
  getSection,
  Section,
  Reserve,
  ReserveType,
  reserveScope,
  compareReserves,
} from "./sections";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

export type References = undefined | Reserve | Reserve[];

declare module "@marko/compiler/dist/types" {
  export interface FunctionExpressionExtra {
    references?: References;
    name?: string;
  }

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
    trackReferencesForBindings(getSection(tag), tag.get("var"));
  }

  const body = tag.get("body");
  if (body.get("body").length && body.get("params").length) {
    trackReferencesForBindings(getSection(body), body);
  }
}

function trackReferencesForBindings(section: Section, path: t.NodePath<any>) {
  const scope = path.scope;
  const bindings = path.getBindingIdentifiers() as unknown as Record<
    string,
    t.Identifier
  >;
  for (const name in bindings) {
    const references = scope.getBinding(name)!.referencePaths;

    if (references.length) {
      const identifier = bindings[name];
      const binding = reserveScope(
        ReserveType.Store,
        section,
        identifier,
        name
      );

      for (const reference of references) {
        const exprRoot = getExprRoot(reference);
        const exprExtra = (exprRoot.parentPath.node.extra ??= {});
        const scopePath = reference.scope.path;

        if (isFunctionExpression(scopePath)) {
          const fnExtra = (scopePath.node.extra ??= {});
          let name = (scopePath.node as t.FunctionExpression).id?.name;

          if (!name) {
            const { parentPath } = exprRoot;

            if (parentPath.isMarkoAttribute() && !parentPath.node.default) {
              name = parentPath.node.name;
            }
          }

          fnExtra.name = name;
          sorted.insertProp(compareReserves, fnExtra, "references", binding);
        }

        sorted.insertProp(
          compareReserves,
          exprExtra,
          `${exprRoot.listKey || exprRoot.key}References`,
          binding
        );
      }
    }
  }
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

function isMarkoPath(path: t.NodePath<any>): path is MarkoExprRootPath {
  switch (path.type) {
    case "MarkoTag":
    case "MarkoTagBody":
    case "MarkoAttribute":
    case "MarkoSpreadAttribute":
    case "MarkoPlaceholder":
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

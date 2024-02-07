import type { types as t } from "@marko/compiler";
import type { References } from "./references";
type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

export function getExprRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  while (!isMarko(curPath.parentPath!)) {
    curPath = curPath.parentPath!;
  }

  return curPath as t.NodePath<
    t.Node & {
      extra?: {
        references?: References;
      };
    }
  > & {
    parentPath: MarkoExprRootPath;
  };
}

export function getFnRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  if (curPath.isProgram()) return;

  while (!isFunctionExpression(curPath)) {
    if (isMarko(curPath)) return;
    curPath = (curPath as t.NodePath<t.Node>).parentPath!;
  }

  return curPath as
    | undefined
    | t.NodePath<
        (t.FunctionExpression | t.ArrowFunctionExpression) & {
          extra?: {
            references?: References;
          };
        }
      >;
}

function isMarko(path: t.NodePath<any>): path is MarkoExprRootPath {
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

import type { types as t } from "@marko/compiler";
type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoScriptlet
  | t.MarkoPlaceholder
>;

export function getMarkoRoot(path: t.NodePath<t.Node>) {
  let curPath: typeof path | null = path;
  do curPath = curPath.parentPath;
  while (curPath && !isMarko(curPath));
  return curPath;
}

export function getExprRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  while (!isMarko(curPath.parentPath!)) {
    // TODO: eventually this should be updated to handle default assignments in a destructure.
    curPath = curPath.parentPath!;
  }
  return curPath;
}

export function getFnRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  let fnPath:
    | undefined
    | t.NodePath<
        t.FunctionExpression | t.ArrowFunctionExpression | t.ObjectMember
      >;
  if (curPath.isProgram()) return;

  while (!isMarko(curPath)) {
    if (isFunction(curPath)) {
      fnPath = curPath;
    } else {
      switch (curPath.type) {
        case "CallExpression":
        case "NewExpression":
          fnPath = undefined;
          break;
      }
    }

    curPath = (curPath as t.NodePath<t.Node>).parentPath!;
  }

  return fnPath;
}

export function isMarko(path: t.NodePath<any>): path is MarkoExprRootPath {
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

function isFunction(
  path: t.NodePath<any>,
): path is t.NodePath<
  t.FunctionExpression | t.ArrowFunctionExpression | t.ObjectMember
> {
  switch (path.type) {
    case "FunctionDeclaration":
      return !(path.node as t.FunctionDeclaration).declare;
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ObjectMethod":
      return true;
    default:
      return false;
  }
}

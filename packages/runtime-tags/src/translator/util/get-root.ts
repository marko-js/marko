import type { types as t } from "@marko/compiler";
export type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoScriptlet
  | t.MarkoPlaceholder
  | t.ExportNamedDeclaration
  | t.ExportDefaultDeclaration
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
    curPath = curPath.parentPath!;
  }

  return curPath;
}

export function getFnRoot(path: t.NodePath<t.Node>) {
  let fnPath:
    | undefined
    | t.NodePath<
        | t.FunctionDeclaration
        | t.FunctionExpression
        | t.ArrowFunctionExpression
        | t.ObjectMember
      >;
  for (
    let curPath: t.NodePath | null = path;
    curPath && !isMarko(curPath);
    curPath = curPath.parentPath
  ) {
    if (isFunction(curPath)) {
      fnPath = curPath;
    } else {
      switch (curPath.type) {
        case "OptionalCallExpression":
        case "CallExpression":
        case "NewExpression":
          fnPath = undefined;
          break;
      }
    }
  }

  return fnPath;
}

export function getFnParent(path: t.NodePath<t.Node>) {
  for (
    let curPath: t.NodePath | null = path;
    curPath && !isMarko(curPath);
    curPath = curPath.parentPath
  ) {
    if (isFunction(curPath)) {
      return curPath;
    }
  }
}

export function getDeclarationRoot(path: t.NodePath<t.Node>) {
  let declPath:
    | undefined
    | t.NodePath<t.FunctionDeclaration | t.VariableDeclaration>;
  for (
    let curPath: t.NodePath | null = path;
    curPath && !isMarko(curPath);
    curPath = curPath.parentPath
  ) {
    if (isFunctionOrVariableDeclaration(curPath)) {
      declPath = curPath;
    }
  }

  return declPath;
}

export function isMarko(path: t.NodePath<any>): path is MarkoExprRootPath {
  switch (path.type) {
    case "MarkoTag":
    case "MarkoTagBody":
    case "MarkoAttribute":
    case "MarkoSpreadAttribute":
    case "MarkoPlaceholder":
    case "MarkoScriptlet":
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return true;
    default:
      return false;
  }
}

function isFunction(
  path: t.NodePath<t.Node>,
): path is t.NodePath<
  | t.FunctionDeclaration
  | t.FunctionExpression
  | t.ArrowFunctionExpression
  | t.ObjectMember
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

function isFunctionOrVariableDeclaration(
  path: t.NodePath<t.Node>,
): path is t.NodePath<t.FunctionDeclaration | t.VariableDeclaration> {
  switch (path.type) {
    case "FunctionDeclaration":
      return !(path.node as t.FunctionDeclaration).declare;
    case "VariableDeclaration":
      return true;
    default:
      return false;
  }
}

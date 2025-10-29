import type { types as t } from "@marko/compiler";
export type MarkoExprRootPath = t.NodePath<
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
  while (!isMarko(curPath)) {
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

    const parentPath = curPath.parentPath;
    if (parentPath) {
      curPath = parentPath;
    } else {
      break;
    }
  }

  return fnPath;
}

export function getFnParent(path: t.NodePath<t.Node>) {
  let curPath = path;

  while (!isMarko(curPath)) {
    if (isFunction(curPath)) {
      return curPath;
    }

    const parentPath = curPath.parentPath;
    if (parentPath) {
      curPath = parentPath;
    } else {
      break;
    }
  }
}

export function getDeclarationRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  let declPath:
    | undefined
    | t.NodePath<t.FunctionDeclaration | t.VariableDeclaration>;
  while (!isMarko(curPath)) {
    if (isFunctionOrVariableDeclaration(curPath)) {
      declPath = curPath;
    }

    const parentPath = curPath.parentPath;
    if (parentPath) {
      curPath = parentPath;
    } else {
      break;
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
      return true;
    default:
      return false;
  }
}

function isFunction(
  path: t.NodePath<t.Node>,
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

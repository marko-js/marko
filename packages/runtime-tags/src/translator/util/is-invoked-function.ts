import { types as t } from "@marko/compiler";

export default function isInvokedFunction(
  expr: t.NodePath<t.Node>,
): expr is typeof expr & {
  parent: t.CallExpression | t.OptionalCallExpression;
  parentPath: t.NodePath<t.CallExpression>;
} {
  let curPath: t.NodePath<t.Node> | null = expr;
  while (curPath) {
    const { parent, node } = curPath;
    switch (parent.type) {
      case "OptionalCallExpression":
      case "CallExpression":
        return parent.callee === node;
      case "TSNonNullExpression":
        curPath = curPath.parentPath;
        break;
      default:
        return false;
    }
  }
  return false;
}

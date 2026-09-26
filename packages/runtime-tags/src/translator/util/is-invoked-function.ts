import { types as t } from "@marko/compiler";

export default function isInvokedFunction(
  expr: t.NodePath<t.Node>,
): expr is typeof expr & {
  parent: t.CallExpression | t.OptionalCallExpression;
  parentPath: t.NodePath<t.CallExpression>;
} {
  const { parent, node } = expr;
  return (
    (parent.type === "CallExpression" ||
      parent.type === "OptionalCallExpression") &&
    parent.callee === node
  );
}

import { types as t, NodePath } from "@marko/babel-types";

export default function translateVar(
  tag: NodePath<t.MarkoTag>,
  initialValue: t.Expression,
  kind: "let" | "const" = "const"
) {
  const { node, scope } = tag;

  if (!node.var) {
    return;
  }

  const varPath = tag.get("var");
  const varBinding = Object.values(scope.bindings).find(
    binding => binding.path === varPath
  )!;

  const [replacement] = tag.insertBefore(
    t.variableDeclaration(kind, [t.variableDeclarator(node.var, initialValue)])
  );

  replacement.skip();

  varBinding.path = replacement.get(
    "declarations"
  )[0] as typeof varBinding.path;
  varBinding.kind = kind;
}

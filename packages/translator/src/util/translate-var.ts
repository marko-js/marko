import { types as t } from "@marko/compiler";

const emptyArr = [];
const getEmptyArr = () => emptyArr;

export default function translateVar(
  tag: t.NodePath<t.MarkoTag>,
  initialValue: t.Expression,
  kind: "let" | "const" = "const"
) {
  const { node, scope } = tag;

  if (!node.var) {
    return;
  }

  const declaration = t.variableDeclaration(kind, [
    t.variableDeclarator(t.cloneDeep(node.var), initialValue)
  ]);

  const [replacement] = tag.insertBefore(declaration);
  const [decl] = replacement.get("declarations");

  replacement.skip();

  for (const name in scope.bindings) {
    const binding = scope.bindings[name];
    if (binding.path === tag) {
      binding.path = decl as typeof binding.path;
      binding.kind = kind;
    }
  }

  // We pretend there are no identifiers for this tag since we've moved them into the variable declaration.
  tag.getBindingIdentifiers = getEmptyArr;
  tag.get("body").getBindingIdentifiers = getEmptyArr;
}

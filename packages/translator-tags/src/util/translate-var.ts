import { types as t } from "@marko/compiler";

export default function translateVar(
  tag: t.NodePath<t.MarkoTag>,
  initialValue: t.Expression,
  kind: "let" | "const" = "const",
) {
  const {
    node: { var: tagVar },
  } = tag;

  if (!tagVar) {
    return;
  }

  tag.insertBefore(
    t.variableDeclaration(kind, [
      t.variableDeclarator(t.cloneDeep(tagVar), initialValue),
    ]),
  );
}

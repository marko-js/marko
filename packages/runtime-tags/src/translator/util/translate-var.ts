import { types as t } from "@marko/compiler";

import { forEachIdentifierPath } from "./for-each-identifier";

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

  forEachIdentifierPath(tag.get("var"), (id) => {
    const binding = id.node.extra?.binding;
    if (
      !binding ||
      !binding.upstreamAlias ||
      !binding.assignmentSections ||
      id.node === tagVar
    ) {
      return;
    }

    const changeName = binding.name + "Change";
    const changeBinding = binding.upstreamAlias.propertyAliases.get(changeName);
    if (changeBinding && changeName !== changeBinding.name) {
      // add a new property to the destructure list when a change handler is implicitly added
      // eg by assigning to a destructured property.
      getDestructurePattern(id)?.pushContainer(
        "properties",
        t.objectProperty(
          t.identifier(changeName),
          t.identifier(changeBinding.name),
        ),
      );
    }
  });

  tag.insertBefore(
    t.variableDeclaration(kind, [t.variableDeclarator(tagVar, initialValue)]),
  );
}

function getDestructurePattern(id: t.NodePath<t.Identifier>) {
  let cur: t.NodePath | null = id;

  while (cur) {
    if (cur.node.type === "ObjectPattern") {
      return cur as t.NodePath<t.ObjectPattern>;
    }
    cur = cur.parentPath;
  }
}

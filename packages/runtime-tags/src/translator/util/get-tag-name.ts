import { types as t } from "@marko/compiler";
export function getTagName<T extends t.MarkoTag>(
  tag: t.NodePath<T>,
): T["name"] extends t.StringLiteral ? string : string | undefined {
  switch (tag.node.name.type) {
    case "StringLiteral":
      return tag.node.name.value;
    case "TemplateLiteral":
      if (tag.node.name.quasis.length === 1) {
        // Always populated: an invalid escape in an untagged literal is a parse error.
        return tag.node.name.quasis[0].value.cooked!;
      }
      break;
  }

  return undefined as any;
}

// The best static name for identifier or literal tag names; used where a
// name is needed unconditionally (uid hints), unlike \`getTagName\`.
export function getStaticTagName(node: t.MarkoTag) {
  return t.isIdentifier(node.name)
    ? node.name.name
    : t.isStringLiteral(node.name)
      ? node.name.value
      : "tag";
}

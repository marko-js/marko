import type { types as t } from "@marko/compiler";
export function getTagName<T extends t.MarkoTag>(
  tag: t.NodePath<T>,
): T["name"] extends t.StringLiteral ? string : string | undefined {
  switch (tag.node.name.type) {
    case "StringLiteral":
      return tag.node.name.value;
    case "TemplateLiteral":
      if (tag.node.name.quasis.length === 1) {
        return tag.node.name.quasis[0].value.raw;
      }
      break;
  }

  return undefined as any;
}

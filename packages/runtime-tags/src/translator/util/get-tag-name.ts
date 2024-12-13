import type { types as t } from "@marko/compiler";
export function getTagName<T extends t.MarkoTag>(
  tag: t.NodePath<T>,
): T["name"] extends t.StringLiteral ? string : string | undefined {
  return (tag.node.name as t.StringLiteral).value;
}

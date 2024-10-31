import type { types as t } from "@marko/compiler";
export function getKnownAttrValues(tag: t.MarkoTag) {
  const attrs: Record<string, t.Expression> = {};
  for (const attr of tag.attributes) {
    if (attr.type === "MarkoAttribute") {
      attrs[attr.name] = attr.value;
    }
  }

  return attrs;
}

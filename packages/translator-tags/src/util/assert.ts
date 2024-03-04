import type { types as t } from "@marko/compiler";

export function assertNoSpreadAttrs(tag: t.NodePath<t.MarkoTag>) {
  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoSpreadAttribute()) {
      throw attr.buildCodeFrameError(
        `The <${tag.get("name")}> tag does not support ...spread attributes.`,
      );
    }
  }
}

export function assertNoBodyContent(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.body.length) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The <${tag.get("name")}> tag does not support body content.`,
      );
  }
}

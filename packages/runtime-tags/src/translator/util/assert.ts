import type { types as t } from "@marko/compiler";

export function assertNoSpreadAttrs(tag: t.NodePath<t.MarkoTag>) {
  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoSpreadAttribute()) {
      const tagName = (tag.get("name").node as t.StringLiteral).value;
      throw attr.buildCodeFrameError(
        `The [\`<${tagName}>\`](https://next.markojs.com/docs/reference/core-tag#${tagName}) tag does not support \`...spread\` attributes.`,
      );
    }
  }
}

export function assertNoBodyContent(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.body.length) {
    const tagName = tag.get("name");
    const tagNameLiteral = (tagName.node as t.StringLiteral).value;
    throw tagName.buildCodeFrameError(
      `The [\`<${tagNameLiteral}>\`](https://next.markojs.com/docs/reference/core-tag#${tagNameLiteral}) tag does not support body content.`,
    );
  }
}

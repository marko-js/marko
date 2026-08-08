import type { types as t } from "@marko/compiler";

// Tags whose docs heading is not their bare name; "" links the page root
// for tags with no heading of their own.
const docsAnchors: Record<string, string | undefined> = {
  if: "if--else",
  "else-if": "if--else",
  else: "if--else",
  effect: "",
  attrs: "",
};

function coreTagDocsURL(tagName: string) {
  const anchor = docsAnchors[tagName] ?? tagName;
  return `https://markojs.com/docs/reference/core-tag${anchor && "#" + anchor}`;
}

export function assertNoSpreadAttrs(tag: t.NodePath<t.MarkoTag>) {
  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoSpreadAttribute()) {
      const tagName = (tag.get("name").node as t.StringLiteral).value;
      throw attr.buildCodeFrameError(
        `The [\`<${tagName}>\`](${coreTagDocsURL(tagName)}) tag does not support \`...spread\` attributes.`,
      );
    }
  }
}

export function assertNoTagVarMutation(tag: t.NodePath<t.MarkoTag>) {
  const tagVar = tag.node.var;
  if (tagVar?.type === "Identifier") {
    const constantViolations = tag.scope.getBinding(
      tagVar.name,
    )?.constantViolations;
    if (constantViolations?.length) {
      for (const assignment of constantViolations) {
        // Ignore duplicate declaration violations.
        if (assignment.type !== "MarkoTag") {
          throw assignment.buildCodeFrameError(
            `${tagVar.name} is readonly and cannot be mutated.`,
          );
        }
      }
    }
  }
}

export function assertNoBodyContent(tag: t.NodePath<t.MarkoTag>) {
  // Comments count as body content here (wont-fix): these tags support none.
  if (tag.node.body.body.length) {
    const tagName = tag.get("name");
    const tagNameLiteral = (tagName.node as t.StringLiteral).value;
    throw tagName.buildCodeFrameError(
      `The [\`<${tagNameLiteral}>\`](${coreTagDocsURL(tagNameLiteral)}) tag does not support body content.`,
    );
  }
}

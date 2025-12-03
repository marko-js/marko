import { types as t } from "@marko/compiler";

import normalizeStringExpression from "../util/normalize-string-expression";

export function preAnalyze(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.body.length) {
    // convert textarea body into a static value attribute.
    const parts: (string | t.Expression)[] = [];
    for (const child of tag.node.body.body) {
      if (
        child.type === "MarkoText" ||
        (child.type === "MarkoPlaceholder" && child.escape)
      ) {
        parts.push(child.value);
      } else {
        throw tag.hub.file.hub.buildError(
          child,
          "Unexpected content in textarea, only text and placeholders are supported.",
          SyntaxError,
        );
      }
    }

    const textValue = normalizeStringExpression(parts);
    if (textValue) {
      tag.node.attributes.push(t.markoAttribute("value", textValue));
    }

    tag.node.body.body = [];
  }
}

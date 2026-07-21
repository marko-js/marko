import { types as t } from "@marko/compiler";

import normalizeStringExpression from "../util/normalize-string-expression";

export function preAnalyze(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.body.body.length) {
    // HTML ignores a single newline right after the `<textarea>` start tag, so
    // strip it before a formatting-only newline is treated as body content.
    const [firstChild] = tag.node.body.body;
    if (firstChild.type === "MarkoText") {
      firstChild.value = firstChild.value.replace(/^\r?\n/, "");
    }

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
      const valueAttr = tag.node.attributes.find(
        (attr) => t.isMarkoAttribute(attr) && attr.name === "value",
      );
      if (valueAttr) {
        throw tag.hub.file.hub.buildError(
          valueAttr,
          "A textarea cannot have both a value attribute and body content.",
          SyntaxError,
        );
      }

      tag.node.attributes.push(t.markoAttribute("value", textValue));
    }

    tag.node.body.body = [];
  }
}

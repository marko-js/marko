import { types as t } from "@marko/compiler";
import type { Tag } from "@marko/compiler/babel-utils";

import normalizeStringExpression from "../util/normalize-string-expression";

export default {
  parse(tag) {
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
      tag.node.attributes.push(
        t.markoAttribute(
          "value",
          normalizeStringExpression(parts) || buildUndefined(),
        ),
      );

      tag.node.body.body = [];
    }
  },
  parseOptions: {
    text: true,
    preserveWhitespace: true,
  },
} as Tag;

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}

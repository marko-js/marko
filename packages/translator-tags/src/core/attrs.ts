import { diagnosticDeprecate, type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

export default {
  migrate: [
    (tag) => {
      diagnosticDeprecate(tag, {
        label:
          "The `attrs` tag is deprecated, prefer destructuring `input` via the `const` tag.",
        fix() {
          const tagVar = tag.node.var;
          if (
            tagVar &&
            !(tagVar.type === "Identifier" && tagVar.name === "input")
          ) {
            const constTag = t.markoTag(
              t.stringLiteral("const"),
              [t.markoAttribute("value", t.identifier("input"))],
              t.markoTagBody([]),
            );
            constTag.var = tagVar;
            tag.replaceWith(constTag);
          } else {
            tag.remove();
          }
        },
      });
    },
  ],
  attributes: {},
  autocomplete: [
    {
      displayText: "attrs/{ ... }",
      description: "Use to receive the attributes passed into this template.",
      snippet: "attrs/{ $1 }$2",
    },
  ],
} as Tag;

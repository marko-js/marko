import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoAttributeTags,
  assertNoParams,
  diagnosticDeprecate,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";

export default {
  migrate: [
    (tag) => {
      assertNoArgs(tag);
      assertNoParams(tag);
      assertNoAttributes(tag);
      assertNoBodyContent(tag);
      assertNoAttributeTags(tag);
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

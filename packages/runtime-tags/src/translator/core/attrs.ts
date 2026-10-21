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
import { toConstTag } from "../visitors/program/pre-analyze";

// No `types`/`.d.marko` on purpose: a stub could only type the pattern as
// `any`, and the tag is deprecated — run the `<const>` migration for typing.
export default {
  migrate: (tag) => {
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
          tag.replaceWith(toConstTag(tagVar, t.identifier("input")));
        } else {
          tag.remove();
        }
      },
    });
  },
  attributes: {},
  autocomplete: [
    {
      displayText: "attrs/{ ... }",
      description: "Use to receive the attributes passed into this template.",
      snippet: "attrs/{ $1 }$2",
    },
  ],
} as Tag;

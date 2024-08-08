import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";

import { analyze, translate } from "./if";

export default {
  analyze(tag) {
    const { node } = tag;
    const [testAttr] = node.attributes;

    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);

    if (node.body.body.length === 0) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `else` tag requires body content.");
    }

    if (
      node.attributes.length > 1 ||
      (testAttr && (testAttr as t.MarkoAttribute).name !== "if")
    ) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = "The `else` tag only supports an `if=` attribute.";

      if (start == null || end == null) {
        throw tag.get("name").buildCodeFrameError(msg);
      } else {
        throw tag.hub.buildError(
          { loc: { start, end } } as unknown as t.Node,
          msg,
          Error,
        );
      }
    }

    analyze(tag);
  },
  translate,
  attributes: {},
  autocomplete: [
    {
      description:
        "Use after an <if> or <else-if> tag to display content if those conditions do not match.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#if-else-if-else",
    },
  ],
} as Tag;

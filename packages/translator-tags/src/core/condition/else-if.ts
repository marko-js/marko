import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { analyze, translate } from "./if";

export default {
  analyze(tag) {
    const { node } = tag;
    const [valueAttr] = node.attributes;

    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);

    if (!t.isMarkoAttribute(valueAttr) || !valueAttr.default) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `else-if` tag requires a value.");
    }

    if (node.body.body.length === 0) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `else-if` tag requires body content.");
    }

    if (node.attributes.length > 1) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = "The `else-if` tag only supports the `value` attribute.";

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
      snippet: "else-if=${1:condition}",
      description:
        "Use after an <if> or <else-if> tag to display content if those conditions do not match and this one does.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#if-else-if-else",
    },
  ],
} as Tag;

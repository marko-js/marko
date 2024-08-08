import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";

export default {
  analyze(tag) {
    const [valueAttr] = tag.node.attributes;
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (
      tag.node.attributes.length > 1 ||
      (tag.node.attributes.length === 1 &&
        (!t.isMarkoAttribute(valueAttr) ||
          (!valueAttr.default && valueAttr.name !== "value")))
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The `debug` tag only supports the `value` attribute.",
        );
    }
  },
  translate(tag) {
    const section = getSection(tag);
    const [valueAttr] = tag.node.attributes;
    const referencedBindings = valueAttr?.value.extra?.referencedBindings;

    const statement = t.debuggerStatement();

    if (isOutputHTML()) {
      tag.insertBefore(statement);
    } else {
      addStatement("render", section, referencedBindings, statement);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Debug on value change.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#debug",
    },
  ],
  types: "@marko/translator-tags/tag-types/debug.d.marko",
} as Tag;

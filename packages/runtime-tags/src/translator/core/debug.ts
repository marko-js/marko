import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import runtimeInfo from "../util/runtime-info";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import withPreviousLocation from "../util/with-previous-location";

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
  translate: {
    exit(tag) {
      const section = getSection(tag);
      const [valueAttr] = tag.node.attributes;
      const referencedBindings = valueAttr?.value.extra?.referencedBindings;

      const statement = withPreviousLocation(t.debuggerStatement(), tag.node);

      if (isOutputHTML()) {
        tag.insertBefore(statement);
      } else {
        addStatement("render", section, referencedBindings, statement);
      }

      tag.remove();
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Debug on value change.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#debug",
    },
  ],
  types: runtimeInfo.name + "/tags/debug.d.marko",
} as Tag;

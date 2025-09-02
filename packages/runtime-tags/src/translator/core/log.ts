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

export default {
  analyze(tag) {
    const [valueAttr] = tag.node.attributes;
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<log>` tag](https://next.markojs.com/docs/reference/core-tag#log) requires a [`value=` attribute](https://next.markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (
      tag.node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<log>` tag](https://next.markojs.com/docs/reference/core-tag#log) only supports the [`value=` attribute](https://next.markojs.com/docs/reference/language#shorthand-value).",
        );
    }
  },
  translate: {
    exit(tag) {
      const section = getSection(tag);
      const [valueAttr] = tag.node.attributes;
      const { value } = valueAttr;
      const referencedBindings = value.extra?.referencedBindings;

      const statement = t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("console"), t.identifier("log")),
          [value],
        ),
      );

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
      description: "Use to log a value to the console.",
      descriptionMoreURL:
        "https://next.markojs.com/docs/reference/core-tag#log",
    },
  ],
  types: runtimeInfo.name + "/tags/log.d.marko",
} as Tag;

import { assertNoParams, type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";

export default {
  analyze(tag) {
    const [valueAttr] = tag.node.attributes;
    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'log' tag requires a 'value' attribute.");
    }

    if (
      tag.node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'log' tag only supports the 'value' attribute.",
        );
    }
  },
  translate(tag) {
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
  attributes: {},
  autocomplete: [
    {
      description: "Use to log a value to the console.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#log",
    },
  ],
  types: "@marko/translator-tags/tag-types/log.d.marko",
} as Tag;

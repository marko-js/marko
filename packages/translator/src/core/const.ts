import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { getSection } from "../util/sections";
import { addValue, getTagVarSignal } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  translate(tag) {
    const { node } = tag;
    const [defaultAttr] = node.attributes;

    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'const' tag requires a tag variable.");
    }

    if (!defaultAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'const' tag requires a default attribute.");
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(defaultAttr) ||
      (!defaultAttr.default && defaultAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'const' tag only supports the 'default' attribute.",
        );
    }

    if (isOutputDOM()) {
      const section = getSection(tag);
      const references = defaultAttr.extra?.valueReferences;
      const derivation = getTagVarSignal(tag.get("var"))!;

      // TODO: optimize for cases like `const/x=y`
      addValue(section, references, derivation, defaultAttr.value);
    } else {
      translateVar(tag, defaultAttr.value);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create an constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#const",
    },
  ],
} as Tag;

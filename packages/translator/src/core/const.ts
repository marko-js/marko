import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import { addValue, initValue } from "../util/signals";
import { getSectionId } from "../util/sections";

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
          "The 'const' tag only supports the 'default' attribute."
        );
    }

    if (isOutputDOM()) {
      const identifiers = Object.values(
        tag.get("var").getBindingIdentifiers()
      ) as t.Identifier[];
      const sectionId = getSectionId(tag);
      const references = defaultAttr.extra?.valueReferences;

      // TODO: optimize for cases like `const/x=y`
      if (identifiers.length === 1) {
        for (const identifier of identifiers) {
          const binding = identifier.extra.reserve!;
          const derivation = initValue(binding);
          addValue(sectionId, references, derivation, defaultAttr.value);
        }
      } else {
        // TODO: handle destructuring
      }
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

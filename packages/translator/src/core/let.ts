import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import { initValue, queueSource, addValue } from "../util/signals";
import { registerAssignmentReplacer } from "../util/replace-assignments";
import { getSection } from "../util/sections";

export default {
  translate(tag) {
    const { node } = tag;
    const tagVar = node.var;
    const defaultAttr =
      node.attributes.find(
        (attr) =>
          t.isMarkoAttribute(attr) && (attr.default || attr.name === "value")
      ) ?? t.markoAttribute("value", t.identifier("undefined"));

    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!tagVar) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'let' tag requires a tag variable.");
    }

    if (!t.isIdentifier(tagVar)) {
      throw tag
        .get("var")
        .buildCodeFrameError("The 'let' cannot be destructured.");
    }

    if (isOutputDOM()) {
      const section = getSection(tag);
      const binding = tagVar.extra.reserve!;
      const source = initValue(binding);
      const references = defaultAttr.extra?.valueReferences;
      const isSetup = !references;

      if (!isSetup) {
        // TODO: add defined guard if bindings exist.
      } else {
        addValue(section, references, source, defaultAttr.value);
      }

      registerAssignmentReplacer(
        tag.scope.getBinding(binding.name)!,
        (assignment, value) =>
          queueSource(source, value, getSection(assignment))
      );
    } else {
      translateVar(tag, defaultAttr.value);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a mutable binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#let",
    },
  ],
} as Tag;

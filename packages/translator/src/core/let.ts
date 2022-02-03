import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import { addStatement, bindingToApplyId } from "../util/apply-hydrate";
import { callQueue } from "../util/runtime";
import replaceAssignments from "../util/replace-assignments";
import { getSectionId } from "../util/sections";

export default {
  translate(tag) {
    const { node } = tag;
    const tagVar = node.var;
    const [defaultAttr] = node.attributes;

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

    if (!defaultAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'let' tag requires a default attribute.");
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(defaultAttr) ||
      (!defaultAttr.default && defaultAttr.name !== "default")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'let' tag only supports the 'default' attribute."
        );
    }

    if (isOutputDOM()) {
      const sectionId = getSectionId(tag);
      const binding = tagVar.extra.reserve!;
      const applyId = bindingToApplyId(binding, sectionId);
      // TODO: add defined guard if bindings exist.
      addStatement(
        "apply",
        sectionId,
        defaultAttr.extra?.valueReferences,
        t.expressionStatement(t.callExpression(applyId, [defaultAttr.value]))
      );

      replaceAssignments(
        tag.scope.getBinding(binding.name)!,
        (assignment, value) =>
          callQueue(applyId, binding, value, getSectionId(assignment))
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

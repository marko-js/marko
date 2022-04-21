import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { addStatement, addHTMLHydrateCall } from "../util/apply-hydrate";
import { callRuntime } from "../util/runtime";
import { getSectionId } from "../util/sections";
import { ReserveType, reserveScope } from "../util/reserve";
import { scopeIdentifier } from "../visitors/program";

export default {
  analyze(tag) {
    const sectionId = getSectionId(tag);
    reserveScope(ReserveType.Store, sectionId, tag.node, "cleanup");
  },
  translate(tag) {
    const { node } = tag;
    const [defaultAttr] = node.attributes;

    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!defaultAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'effect' tag requires a default attribute.");
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(defaultAttr) ||
      (!defaultAttr.default && defaultAttr.name !== "default")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'effect' tag only supports the 'default' attribute."
        );
    }

    const sectionId = getSectionId(tag);
    if (isOutputDOM()) {
      const cleanupIndex = tag.node.extra!.reserve!.id;
      const { value } = defaultAttr;
      let inlineStatements = null;
      if (
        t.isFunctionExpression(value) ||
        (t.isArrowFunctionExpression(value) && t.isBlockStatement(value.body))
      ) {
        inlineStatements = (value.body as t.BlockStatement).body;
        t.traverse(value.body, (node) => {
          if (t.isReturnStatement(node)) {
            inlineStatements = null;
          }
        });
      }
      addStatement(
        "hydrate",
        sectionId,
        defaultAttr.extra?.valueReferences,
        inlineStatements ||
          t.expressionStatement(
            callRuntime(
              "userEffect",
              scopeIdentifier,
              t.numericLiteral(cleanupIndex),
              defaultAttr.value
            )
          )
      );
    } else {
      addHTMLHydrateCall(sectionId, defaultAttr.extra?.valueReferences);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a side effects.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#effect",
    },
  ],
} as Tag;

import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";
import * as writer from "../util/writer";
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
      (!defaultAttr.default && defaultAttr.name !== "default")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'const' tag only supports the 'default' attribute."
        );
    }

    if (isOutputDOM()) {
      const sectionId = getSectionId(tag);
      const identifiers = Object.values(
        tag.get("var").getBindingIdentifiers()
      ) as t.Identifier[];
      writer.addStatement(
        "apply",
        tag,
        defaultAttr.extra?.valueReferences,
        identifiers.length === 1
          ? t.expressionStatement(
              t.callExpression(
                writer.bindingToApplyId(
                  identifiers[0].extra.reserve!,
                  sectionId
                ),
                [defaultAttr.value]
              )
            )
          : [
              t.variableDeclaration("const", [
                t.variableDeclarator(node.var, defaultAttr.value),
              ]),
              ...identifiers.map((identifier) =>
                t.expressionStatement(
                  t.callExpression(
                    writer.bindingToApplyId(
                      identifier.extra.reserve!,
                      sectionId
                    ),
                    [t.identifier(identifier.name)]
                  )
                )
              ),
            ]
      );
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

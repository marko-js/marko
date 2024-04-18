import { assertNoParams, type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import { scopeIdentifier } from "../visitors/program";

export default {
  analyze(tag) {
    const [valueAttr] = tag.node.attributes;
    assertNoParams(tag);
    assertNoBodyContent(tag);

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The 'do' tag requires a 'value' attribute.");
    }

    if (
      tag.node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      (!valueAttr.default && valueAttr.name !== "value")
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The 'do' tag only supports the 'value' attribute.",
        );
    }
  },
  translate(tag) {
    const section = getSection(tag);
    const [valueAttr] = tag.node.attributes;
    const { value } = valueAttr;
    const referencedBindings = value.extra?.referencedBindings;
    let statement: t.Statement | t.Statement[] | null = null;
    if (t.isFunctionExpression(value) || t.isArrowFunctionExpression(value)) {
      if (t.isBlockStatement(value.body)) {
        let hasDeclaration = false;
        for (const child of value.body.body) {
          if (t.isDeclaration(child)) {
            hasDeclaration = true;
            break;
          }
        }

        statement = hasDeclaration ? value.body : value.body.body;
      } else {
        statement = t.expressionStatement(value.body);
      }
    }

    if (isOutputHTML()) {
      if (statement) {
        tag.insertBefore(statement);
      } else {
        tag.insertBefore(t.expressionStatement(t.callExpression(value, [])));
      }
    } else {
      addStatement(
        "render",
        section,
        referencedBindings,
        statement ??
          t.expressionStatement(t.callExpression(value, [scopeIdentifier])),
      );
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to run a function on render.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#do",
    },
  ],
  types: "@marko/translator-tags/tag-types/do.d.marko",
} as Tag;

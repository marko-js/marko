import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    isInteractive?: boolean;
  }
}

export default {
  analyze() {
    (currentProgramPath.node.extra ??= {}).isInteractive = true;
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [defaultAttr] = node.attributes;

      assertNoParams(tag);
      assertNoBodyContent(tag);

      if (!defaultAttr) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The 'effect' tag requires a default attribute.",
          );
      }

      if (
        node.attributes.length > 1 ||
        !t.isMarkoAttribute(defaultAttr) ||
        (!defaultAttr.default && defaultAttr.name !== "value")
      ) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The 'effect' tag only supports the 'default' attribute.",
          );
      }

      const section = getSection(tag);
      const { value } = defaultAttr;
      const references = value.extra?.references;
      if (isOutputDOM()) {
        const { value } = defaultAttr;
        let inlineBody: t.Statement | t.Statement[] | null = null;
        if (
          t.isFunctionExpression(value) ||
          t.isArrowFunctionExpression(value)
        ) {
          if (t.isBlockStatement(value.body)) {
            let hasDeclaration = false;
            for (const child of value.body.body) {
              if (t.isDeclaration(child)) {
                hasDeclaration = true;
                break;
              }
            }

            inlineBody = hasDeclaration ? value.body : value.body.body;
          } else {
            inlineBody = t.expressionStatement(value.body);
          }
        }
        addStatement(
          "effect",
          section,
          references,
          inlineBody ||
            t.expressionStatement(t.callExpression(value, [scopeIdentifier])),
          value,
          !!inlineBody,
        );
      } else {
        addHTMLEffectCall(section, references);
      }

      tag.remove();
    },
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a side effects.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#effect",
    },
  ],
  template: "tag-types/effect.marko",
} as Tag;

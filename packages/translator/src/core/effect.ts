import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { addStatement, addHTMLEffectCall } from "../util/signals";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { ReserveType, reserveScope, getNodeLiteral } from "../util/reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    isInteractive?: boolean;
  }
}

export default {
  analyze(tag) {
    const section = getSection(tag);
    reserveScope(ReserveType.Store, section, tag.node, "cleanup");
    (currentProgramPath.node.extra ?? {}).isInteractive = true;
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
            "The 'effect' tag requires a default attribute."
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
            "The 'effect' tag only supports the 'default' attribute."
          );
      }

      const section = getSection(tag);
      if (isOutputDOM()) {
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
          "effect",
          section,
          defaultAttr.extra?.valueReferences,
          inlineStatements ||
            t.expressionStatement(
              callRuntime(
                "userEffect",
                scopeIdentifier,
                getNodeLiteral(tag.node.extra!.reserve!),
                defaultAttr.value
              )
            ),
          value,
          !!inlineStatements
        );
      } else {
        addHTMLEffectCall(section, defaultAttr.extra?.valueReferences);
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
} as Tag;

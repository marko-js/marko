import type { Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import { callRuntime } from "../util/runtime";
import toFirstExpressionOrBlock from "../util/to-first-expression-or-block";
import * as writer from "../util/writer";

export default {
  translate: {
    enter(tag) {
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
      if (!tag.node.var) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "<tag> requires a variable to be defined, eg <tag/NAME>.",
          );
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        writer.flushInto(tag);
      }

      tag.replaceWith(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            tag.node.var!,
            callRuntime(
              "createRenderer",
              t.arrowFunctionExpression(
                tag.node.body.params,
                toFirstExpressionOrBlock(tag.node.body),
              ),
            ),
          ),
        ]),
      );
    },
  },
  attributes: {},
  autocomplete: [
    {
      displayText: "tag/<name>|<params>|",
      description: "Creates a reusable fragment within the template.",
      snippet: "tag/${1:name}|${2:param1, param2}|",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#tag",
    },
  ],
} as Tag;

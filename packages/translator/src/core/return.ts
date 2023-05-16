import { types as t } from "@marko/compiler";
import { assertNoVar, assertNoParams, type Tag } from "@marko/babel-utils";
import * as writer from "../util/writer";
import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { addValue } from "../util/signals";
import { createSectionState, getSection } from "../util/sections";
import { importRuntime } from "../util/runtime";

const [returnId, _setReturnId] = createSectionState<t.Identifier | undefined>(
  "returnId"
);
export { returnId };

export default {
  translate(tag) {
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);

    const section = getSection(tag);

    const {
      node,
      hub: { file },
    } = tag;
    const [defaultAttr] = node.attributes;

    if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The '<return>' tag requires default attribute like '<return=VALUE>'.`
        );
    }

    if (node.attributes.length > 1) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = `The '<return>' tag only supports a default attribute.`;

      if (start == null || end == null) {
        throw tag.get("name").buildCodeFrameError(msg);
      } else {
        throw tag.hub.buildError(
          { loc: { start, end } } as unknown as t.Node,
          msg,
          Error
        );
      }
    }

    if (isOutputHTML()) {
      writer.flushBefore(tag);
      const returnId = file.path.scope.generateUidIdentifier("return");
      _setReturnId(section, returnId);

      tag
        .replaceWith(
          t.variableDeclaration("const", [
            t.variableDeclarator(returnId, defaultAttr.value!),
          ])
        )[0]
        .skip();
    } else {
      addValue(
        section,
        defaultAttr.extra?.valueReferences,
        {
          identifier: importRuntime("tagVarSignal"),
          hasDownstreamIntersections: () => true,
        },
        defaultAttr.value
      );

      tag.remove();
    }
  },
  autocomplete: [
    {
      displayText: "return=<value>",
      description: "Provides a value for use in a parent template.",
      snippet: "return=${1:value}",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#return",
    },
  ],
} as Tag;

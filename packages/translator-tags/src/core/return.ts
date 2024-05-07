import {
  type Tag,
  assertNoParams,
  assertNoVar,
  assertNoArgs,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { importRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue } from "../util/signals";
import { createSectionState } from "../util/state";
import * as writer from "../util/writer";

const [returnId, _setReturnId] = createSectionState<t.Identifier | undefined>(
  "returnId",
);
export { returnId };

const usedTag = new WeakSet<t.Hub>();

export default {
  translate(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);

    const section = getSection(tag);

    if (usedTag.has(tag.hub)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The '<return>' tag can only be used once per template.`,
        );
    }
    usedTag.add(tag.hub);
    tag.hub;

    const {
      node,
      hub: { file },
    } = tag;
    const [valueAttr] = node.attributes;

    if (!t.isMarkoAttribute(valueAttr) || !valueAttr.default) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The '<return>' tag requires default attribute like '<return=VALUE>'.`,
        );
    }

    if (
      node.attributes.length > 1 &&
      (node.attributes[1] as t.MarkoAttribute).name !== "valueChange"
    ) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = `The '<return>' tag only supports the default 'value' attribute.`;

      if (start == null || end == null) {
        throw tag.get("name").buildCodeFrameError(msg);
      } else {
        throw tag.hub.buildError(
          { loc: { start, end } } as unknown as t.Node,
          msg,
          Error,
        );
      }
    }

    const { value } = valueAttr;

    if (isOutputHTML()) {
      writer.flushBefore(tag);
      const returnId = file.path.scope.generateUidIdentifier("return");
      _setReturnId(section, returnId);

      tag
        .replaceWith(
          t.variableDeclaration("const", [
            t.variableDeclarator(returnId, value),
          ]),
        )[0]
        .skip();
    } else {
      addValue(
        section,
        value.extra?.referencedBindings,
        {
          identifier: importRuntime("tagVarSignal"),
          hasDownstreamIntersections: () => true,
        },
        value,
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

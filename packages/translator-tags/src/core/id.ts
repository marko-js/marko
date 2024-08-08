import {
  type Tag,
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue, initValue } from "../util/signals";
import { scopeIdentifier } from "../visitors/program";

export default {
  translate(tag) {
    const { node } = tag;
    const { var: tagVar } = node;
    const id = isOutputHTML()
      ? callRuntime("nextTagId")
      : callRuntime("nextTagId", scopeIdentifier);

    assertNoArgs(tag);
    assertNoAttributes(tag);
    assertNoBodyContent(tag);
    assertNoParams(tag);

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `id` tag requires a tag variable.");
    }

    if (!t.isIdentifier(tagVar)) {
      throw tag
        .get("var")
        .buildCodeFrameError("The `id` tag cannot be destructured");
    }

    if (isOutputHTML()) {
      tag.replaceWith(
        t.variableDeclaration("const", [t.variableDeclarator(node.var, id)]),
      );
    } else {
      const source = initValue(tagVar.extra!.binding!);
      addValue(getSection(tag), undefined, source, id);
      tag.remove();
    }
  },
  attributes: {},
  autocomplete: [
    {
      displayText: "id/<name>",
      description: "Use to create a unique identifier.",
      snippet: "id/${1:name}",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#id",
    },
  ],
  types: "@marko/translator-tags/tag-types/id.d.marko",
} as Tag;

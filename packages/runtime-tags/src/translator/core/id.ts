import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoAttributeTags,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { isOutputHTML } from "../util/marko-config";
import { BindingType, trackVarReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue, initValue } from "../util/signals";
import { scopeIdentifier } from "../visitors/program";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    assertNoBodyContent(tag);
    assertNoAttributeTags(tag);

    const { node } = tag;
    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `id` tag requires a tag variable.");
    }

    if (!t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError("The `id` tag cannot be destructured");
    }

    trackVarReferences(tag, BindingType.derived);
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const id = isOutputHTML()
        ? callRuntime("nextTagId")
        : callRuntime("nextTagId", scopeIdentifier);

      if (isOutputHTML()) {
        tag.replaceWith(
          t.variableDeclaration("const", [t.variableDeclarator(node.var!, id)]),
        );
      } else {
        const source = initValue(node.var!.extra!.binding!);
        addValue(getSection(tag), undefined, source, id);
        tag.remove();
      }
    },
  },
  parseOptions: {
    openTagOnly: true,
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
  types: "@marko/runtime-tags/tag-types/id.d.marko",
} as Tag;

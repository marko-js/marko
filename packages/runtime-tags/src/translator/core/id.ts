import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import evaluate from "../util/evaluate";
import { isOutputHTML } from "../util/marko-config";
import {
  BindingType,
  setBindingDownstream,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getSection } from "../util/sections";
import { addValue, initValue } from "../util/signals";
import { scopeIdentifier } from "../visitors/program";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoAttributeTags(tag);

    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<id>` tag](https://next.markojs.com/docs/reference/core-tag#id) requires a [tag variable](https://next.markojs.com/docs/reference/language#tag-variables).",
        );
    }

    if (!t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          "The [`<id>` tag](https://next.markojs.com/docs/reference/core-tag#id) cannot be destructured.",
        );
    }

    if (
      tag.node.attributes.length > 1 ||
      (tag.node.attributes.length === 1 &&
        (!t.isMarkoAttribute(valueAttr) ||
          (!valueAttr.default && valueAttr.name !== "value")))
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<id>` tag](https://next.markojs.com/docs/reference/core-tag#id) only supports the [`value=` attribute](https://next.markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    const binding = trackVarReferences(tag, BindingType.derived);
    if (binding) {
      setBindingDownstream(binding, !!valueAttr && evaluate(valueAttr.value));
    }
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const id = isOutputHTML()
        ? callRuntime("nextTagId")
        : callRuntime("nextTagId", scopeIdentifier);
      const [valueAttr] = tag.node.attributes;

      if (isOutputHTML()) {
        tag.replaceWith(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              node.var!,
              valueAttr ? t.logicalExpression("??", valueAttr.value, id) : id,
            ),
          ]),
        );
      } else {
        const section = getSection(tag);
        const source = initValue(node.var!.extra!.binding!);

        if (valueAttr) {
          const { value } = valueAttr;

          addValue(
            section,
            value.extra?.referencedBindings,
            source,
            t.logicalExpression("??", value, id),
          );
        } else {
          addValue(section, undefined, source, id);
        }

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
      descriptionMoreURL: "https://next.markojs.com/docs/reference/core-tag#id",
    },
  ],
  types: runtimeInfo.name + "/tags/id.d.marko",
} as Tag;

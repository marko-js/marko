import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { getAllTagReferenceNodes, mergeReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getOrCreateSection, getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { createSectionState } from "../util/state";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";
import { scopeIdentifier } from "../visitors/program";

const [getIndex, setIndex] = createSectionState("lifecycleIndex", () => 0);

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);

    const { node } = tag;
    const section = getOrCreateSection(tag);
    const tagExtra = mergeReferences(
      section,
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );
    tagExtra.isEffect = true;

    if (node.attributes.length === 0) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<lifecycle>` tag](https://markojs.com/docs/reference/core-tag#lifecycle) requires at least one attribute.",
        );
    }

    for (const attr of node.attributes) {
      if (t.isMarkoSpreadAttribute(attr)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The [`<lifecycle>` tag](https://markojs.com/docs/reference/core-tag#lifecycle) does not support [`...spread` attributes](https://markojs.com/docs/reference/language#spread-attributes).",
          );
      }
    }

    getProgram().node.extra.isInteractive = true;
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const section = getSection(tag);
      const tagExtra = node.extra!;
      const { referencedBindings } = tagExtra;

      if (isOutputDOM()) {
        const translatedAttrs = translateAttrs(tag);
        const index = getIndex(section);
        setIndex(section, index + 1);
        translatedAttrs.statements.push(
          t.expressionStatement(
            callRuntime(
              "_lifecycle",
              scopeIdentifier,
              propsToExpression(translatedAttrs.properties),
              index > 0 ? t.numericLiteral(index) : undefined,
            ),
          ),
        );
        addStatement(
          "effect",
          section,
          referencedBindings,
          translatedAttrs.statements,
        );
      } else {
        addHTMLEffectCall(section, referencedBindings);
      }

      tag.remove();
    },
  },
  parseOptions: {
    openTagOnly: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a side effects.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#lifecycle",
    },
  ],
  types: runtimeInfo.name + "/tags/lifecycle.d.marko",
} as Tag;

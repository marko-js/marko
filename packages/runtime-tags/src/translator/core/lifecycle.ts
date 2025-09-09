import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { generateUid } from "../util/generate-uid";
import { isOutputDOM } from "../util/marko-config";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getOrCreateSection, getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";
import { scopeIdentifier } from "../visitors/program";

const kRef = Symbol("lifecycle attrs reference");
declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kRef]?: Binding;
  }
}

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
    const binding = (tagExtra[kRef] = createBinding(
      generateUid("lifecycle"),
      BindingType.derived,
      section,
    ));

    binding.downstreamExpressions.add(tagExtra);

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
      (attr.value.extra ??= {}).isEffect = true;
    }

    (getProgram().node.extra ??= {}).isInteractive = true;
  },
  translate: {
    exit(tag) {
      const { node } = tag;

      const section = getSection(tag);
      const tagExtra = node.extra!;
      const { referencedBindings } = tagExtra;
      const lifecycleAttrsRef = tagExtra[kRef]!;

      if (isOutputDOM()) {
        const translatedAttrs = translateAttrs(tag);
        translatedAttrs.statements.push(
          t.expressionStatement(
            callRuntime(
              "_lifecycle",
              scopeIdentifier,
              getScopeAccessorLiteral(lifecycleAttrsRef),
              propsToExpression(translatedAttrs.properties),
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

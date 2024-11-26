import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { assertNoBodyContent } from "../util/assert";
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
import { getOrCreateSection, getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

const kRef = Symbol("lifecycle attrs reference");
const supportedAttrNames = new Set(["onMount", "onUpdate", "onDestroy"]);

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
    const tagExtra = (node.extra ??= {});
    const section = getOrCreateSection(tag);
    tagExtra[kRef] = createBinding(
      tag.scope.generateUid("lifecycle"),
      BindingType.derived,
      section,
      undefined,
      tagExtra,
    );

    if (node.attributes.length === 0) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The `lifecycle` tag requires at least one attribute.",
        );
    }

    for (const attr of node.attributes) {
      if (t.isMarkoSpreadAttribute(attr)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The `lifecycle` tag does not support `...spread` attributes.",
          );
      } else if (!supportedAttrNames.has(attr.name)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The \`lifecycle\` tag does not support the \`${attr.name}\` attribute.`,
          );
      }
      (attr.value.extra ??= {}).isEffect = true;
    }

    (currentProgramPath.node.extra ??= {}).isInteractive = true;
    mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));
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
              "lifecycle",
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
          node.attributes.map((a) => a.value),
        );
      } else {
        addHTMLEffectCall(section, referencedBindings);
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
  types: "@marko/translator-tags/tag-types/lifecycle.d.marko",
} as Tag;

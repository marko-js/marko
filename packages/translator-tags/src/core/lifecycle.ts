import {
  type Tag,
  assertNoParams,
  assertNoArgs,
  assertNoVar,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import attrsToObject from "../util/attrs-to-object";
import { isOutputDOM } from "../util/marko-config";
import {
  mergeReferences,
  getScopeAccessorLiteral,
  type Binding,
  createBinding,
  BindingType,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
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
    tagExtra[kRef] = createBinding(
      tag.scope.generateUid("lifecycle"),
      BindingType.derived,
      getOrCreateSection(tag),
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
    mergeReferences(
      tag,
      tag.node.attributes.map((attr) => attr.value),
    );
  },
  translate: {
    exit(tag) {
      const { node } = tag;

      const section = getSection(tag);
      const tagExtra = node.extra!;
      const { referencedBindings } = tagExtra;
      const lifecycleAttrsRef = tagExtra[kRef]!;

      if (isOutputDOM()) {
        const attrsObject = attrsToObject(tag);
        addStatement(
          "effect",
          section,
          referencedBindings,
          t.expressionStatement(
            callRuntime(
              "lifecycle",
              scopeIdentifier,
              getScopeAccessorLiteral(lifecycleAttrsRef),
              attrsObject,
            ),
          ),
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

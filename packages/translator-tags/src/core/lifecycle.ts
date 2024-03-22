import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import attrsToObject from "../util/attrs-to-object";
import { isOutputDOM } from "../util/marko-config";
import {
  mergeReferences,
  getScopeAccessorLiteral,
  type Reference,
  createSelfReference,
  SourceType,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import customTag from "../visitors/tag/custom-tag";

const kRef = Symbol("lifecycle attrs reference");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kRef]?: Reference;
  }
}

export default {
  analyze: {
    enter(tag) {
      assertNoParams(tag);
      assertNoBodyContent(tag);
      customTag.analyze.enter(tag);

      const { node } = tag;
      const tagExtra = (node.extra ??= {});
      tagExtra[kRef] = createSelfReference(
        tag,
        tag.scope.generateUid("lifecycle"),
        SourceType.derived,
        undefined,
        tagExtra,
      );

      for (const attr of node.attributes) {
        (attr.value.extra ??= {}).isEffect = true;
      }

      (currentProgramPath.node.extra ??= {}).isInteractive = true;
    },
    exit(tag) {
      mergeReferences(
        tag,
        tag.node.attributes.map((attr) => attr.value),
      );
    },
  },
  translate: {
    exit(tag) {
      const { node } = tag;

      // TODO: Check attributes?
      // if (
      //   node.attributes.length > 1 ||
      //   !t.isMarkoAttribute(defaultAttr) ||
      //   (!defaultAttr.default && defaultAttr.name !== "default")
      // ) {
      //   throw tag
      //     .get("name")
      //     .buildCodeFrameError(
      //       "The 'lifecycle' tag only supports the 'default' attribute."
      //     );
      // }

      const section = getSection(tag);
      const tagExtra = node.extra!;
      const { references } = tagExtra;
      const lifecycleAttrsRef = tagExtra[kRef]!;

      if (isOutputDOM()) {
        const attrsObject = attrsToObject(tag);
        addStatement(
          "effect",
          section,
          references,
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
        addHTMLEffectCall(section, references);
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
} as Tag;

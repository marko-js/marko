import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import attrsToObject from "../util/attrs-to-object";
import { isOutputDOM } from "../util/marko-config";
import { type References, mergeReferences } from "../util/references";
import {
  ReserveType,
  getScopeAccessorLiteral,
  reserveScope,
} from "../util/reserve";
import { callRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import customTag from "../visitors/tag/custom-tag";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    isInteractive?: boolean;
  }
  export interface MarkoTagExtra {
    attrsReferences: References;
  }
}

export default {
  analyze: {
    enter(tag) {
      customTag.analyze.enter(tag);
      reserveScope(
        ReserveType.Store,
        getOrCreateSection(tag),
        tag.node,
        "cleanup",
      );
      (currentProgramPath.node.extra ?? {}).isInteractive = true;
    },
    exit(tag) {
      customTag.analyze.exit(tag);
      const section = getOrCreateSection(tag);
      tag.node.extra.attrsReferences = mergeReferences(
        section,
        tag.node.attributes
          .filter((attr) => attr.extra?.valueReferences)
          .map((attr) => [attr.extra, "valueReferences"]),
      );
    },
  },
  translate: {
    exit(tag) {
      const { node } = tag;

      assertNoParams(tag);
      assertNoBodyContent(tag);

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

      if (isOutputDOM()) {
        const attrsObject = attrsToObject(tag);
        addStatement(
          "effect",
          section,
          node.extra.attrsReferences,
          t.expressionStatement(
            callRuntime(
              "lifecycle",
              scopeIdentifier,
              getScopeAccessorLiteral(tag.node.extra!.reserve!),
              attrsObject,
            ),
          ),
          node.attributes.map((a) => a.value),
        );
      } else {
        addHTMLEffectCall(section, node.extra.attrsReferences);
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

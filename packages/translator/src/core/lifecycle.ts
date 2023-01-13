import { types as t } from "@marko/compiler";
import { Tag, assertNoParams } from "@marko/babel-utils";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { addStatement, addHTMLHydrateCall } from "../util/signals";
import { callRuntime } from "../util/runtime";
import { getOrCreateSectionId, getSectionId } from "../util/sections";
import attrsToObject from "../util/attrs-to-object";
import customTag from "../visitors/tag/custom-tag";
import { mergeReferenceGroups, ReferenceGroup } from "../util/references";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import { reserveScope, ReserveType } from "../util/reserve";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    isInteractive?: boolean;
  }
  export interface MarkoTagExtra {
    attrsReferences: ReferenceGroup;
  }
}

export default {
  analyze: {
    enter(tag) {
      customTag.analyze.enter(tag);
      const sectionId = getSectionId(tag);
      reserveScope(ReserveType.Store, sectionId, tag.node, "cleanup");
      (currentProgramPath.node.extra ?? {}).isInteractive = true;
    },
    exit(tag) {
      customTag.analyze.exit(tag);
      const sectionId = getOrCreateSectionId(tag);
      tag.node.extra.attrsReferences = mergeReferenceGroups(
        sectionId,
        tag.node.attributes
          .filter((attr) => attr.extra?.valueReferences)
          .map((attr) => [attr.extra, "valueReferences"])
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

      const sectionId = getSectionId(tag);

      if (isOutputDOM()) {
        const attrsObject = attrsToObject(tag);
        const instanceIndex = tag.node.extra!.reserve!.id;
        addStatement(
          "hydrate",
          sectionId,
          node.extra.attrsReferences,
          t.expressionStatement(
            callRuntime(
              "lifecycle",
              scopeIdentifier,
              t.numericLiteral(instanceIndex),
              attrsObject
            )
          ),
          node.attributes.map((a) => a.value)
        );
      } else {
        addHTMLHydrateCall(sectionId, node.extra.attrsReferences);
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

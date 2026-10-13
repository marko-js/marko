import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoVar,
  findParentTag,
} from "@marko/compiler/babel-utils";

import { BindingType } from "../../util/bindings";
import { getAttributeTagParent } from "../../util/get-parent-tag";
import { isOutputHTML } from "../../util/marko-config";
import { trackParamsReferences } from "../../util/references";
import { ensureBodySection, removeDroppedContent } from "../../util/sections";
import { writeHTMLResumeStatements } from "../../util/signals";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";

export default {
  analyze: {
    enter(tag) {
      assertNoVar(tag);
      assertNoArgs(tag);
      const body = tag.get("body");
      const bodySection = ensureBodySection(body);
      trackParamsReferences(body, BindingType.param);
      if (!findParentTag(tag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "[Attribute tags](https://markojs.com/docs/reference/language#attribute-tags) must be nested within another tag.",
          );
      }

      // Content given to a dynamic tag depends on the whole tag, as its body does.
      const parentTag = getAttributeTagParent(tag);
      if (
        bodySection &&
        analyzeTagNameType(parentTag) === TagNameType.DynamicTag &&
        !parentTag.node.extra!.defineBodySection
      ) {
        bodySection.branchExpr = parentTag.node.extra;
      }
    },
  },

  translate: {
    enter(tag) {
      // An attribute tag the child never reads was dropped.
      if (tag.node.extra!.dropped) {
        tag.remove();
        return;
      }

      removeDroppedContent(tag);

      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        writeHTMLResumeStatements(tag);
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

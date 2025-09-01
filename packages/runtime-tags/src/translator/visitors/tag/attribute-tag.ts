import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoVar,
  findParentTag,
} from "@marko/compiler/babel-utils";

import { isOutputHTML } from "../../util/marko-config";
import { BindingType, trackParamsReferences } from "../../util/references";
import { startSection } from "../../util/sections";
import { writeHTMLResumeStatements } from "../../util/signals";
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";

export default {
  analyze: {
    enter(tag) {
      assertNoVar(tag);
      assertNoArgs(tag);
      const body = tag.get("body");
      startSection(body);
      trackParamsReferences(body, BindingType.param);
      if (!findParentTag(tag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "[Attribute tags](https://next.markojs.com/docs/reference/language#attribute-tags) must be nested within another tag.",
          );
      }
    },
  },

  translate: {
    enter(tag) {
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

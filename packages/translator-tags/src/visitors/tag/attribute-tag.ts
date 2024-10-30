import { assertNoArgs, assertNoVar, findParentTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { isOutputHTML } from "../../util/marko-config";
import { startSection } from "../../util/sections";
import { writeHTMLResumeStatements } from "../../util/signals";
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";

export default {
  analyze: {
    enter(tag) {
      assertNoVar(tag);
      assertNoArgs(tag);
      startSection(tag.get("body"));
      if (!findParentTag(tag)) {
        throw tag
          .get("name")
          .buildCodeFrameError("@tags must be nested within another tag.");
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

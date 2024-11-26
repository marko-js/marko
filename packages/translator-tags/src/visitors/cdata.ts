import type { types as t } from "@marko/compiler";

import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    enter(cdata) {
      throw cdata.buildCodeFrameError(
        "CDATA sections are not supported in Marko.",
      );
    },
  },
} satisfies TemplateVisitor<t.MarkoCDATA>;

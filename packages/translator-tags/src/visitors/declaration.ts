import type { types as t } from "@marko/compiler";

import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    enter(decl) {
      throw decl.buildCodeFrameError(
        "XML declarations sections are not supported in Marko.",
      );
    },
  },
} satisfies TemplateVisitor<t.MarkoDeclaration>;

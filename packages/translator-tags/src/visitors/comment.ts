import type { types as t } from "@marko/compiler";

import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    exit(comment) {
      comment.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoComment>;

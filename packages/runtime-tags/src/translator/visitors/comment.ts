import type { types as t } from "@marko/compiler";

import { replaceWithStatements } from "../util/replace-with-statements";
import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    exit(comment) {
      replaceWithStatements(comment);
    },
  },
} satisfies TemplateVisitor<t.MarkoComment>;

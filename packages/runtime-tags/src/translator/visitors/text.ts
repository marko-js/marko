import { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import { replaceWithStatements } from "../util/replace-with-statements";
import * as structure from "../util/structure";
import { isInTextBody } from "../util/tag-facts";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  analyze: {
    exit(text) {
      if (isInTextBody(text)) return;

      structure.writeTextTo(text, text.node.value);
    },
  },
  translate: {
    exit(text) {
      if (isInTextBody(text)) return;

      if (isOutputHTML()) {
        writer.writeTo(text)`${text.node.value}`;
      }
      replaceWithStatements(text);
    },
  },
} satisfies TemplateVisitor<t.MarkoText>;

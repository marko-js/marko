import { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import { followsStaticText } from "../util/static-text";
import * as structure from "../util/structure";
import { isInTextBody } from "../util/tag-facts";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  analyze: {
    exit(text) {
      if (isInTextBody(text)) return;

      structure.writeTextTo(text, text.node.value);
      // Adjacent static text merges into one DOM text node, so only the run's
      // first node emits its walk step; later nodes defer to it.
      if (!followsStaticText(text)) {
        structure.enterShallow(text);
      }
    },
  },
  translate: {
    exit(text) {
      if (isInTextBody(text)) return;

      if (isOutputHTML()) {
        writer.writeTo(text)`${text.node.value}`;
      }
      text.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoText>;

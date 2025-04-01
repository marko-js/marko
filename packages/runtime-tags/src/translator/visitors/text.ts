import { types as t } from "@marko/compiler";

import { isNonHTMLText } from "../util/is-non-html-text";
import type { TemplateVisitor } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

export default {
  translate: {
    exit(text) {
      if (isNonHTMLText(text)) return;

      writer.writeTo(text)`${text.node.value}`;
      walks.enterShallow(text);
      text.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoText>;

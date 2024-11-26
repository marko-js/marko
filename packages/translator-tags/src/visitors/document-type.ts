import type { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  translate: {
    exit(documentType) {
      if (isOutputHTML()) {
        writer.writeTo(documentType)`<!${documentType.node.value}>`;
      }
      documentType.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoDocumentType>;

import type { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import * as writer from "../util/writer";

export default {
  translate: {
    exit(documentType: t.NodePath<t.MarkoDocumentType>) {
      if (isOutputHTML()) {
        writer.writeTo(documentType)`<!${documentType.node.value}>`;
      }
      documentType.remove();
    },
  },
};

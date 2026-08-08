import type { types as t } from "@marko/compiler";

import { getMarkoOpts, isOutputHTML } from "../util/marko-config";
import { callRuntime } from "../util/runtime";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  translate: {
    exit(documentType) {
      if (isOutputHTML()) {
        writer.writeTo(documentType)`<!${documentType.node.value}>`;
        if (getMarkoOpts().linkAssets && !isBeforeHtmlOrHead(documentType)) {
          // Assets flushed ahead of the doctype would put the document in
          // quirks mode; here they land in the implicit head.
          writer.writeTo(documentType)`${callRuntime("_flush_head")}`;
        }
      }
      documentType.remove();
    },
  },
} satisfies TemplateVisitor<t.MarkoDocumentType>;

// A following `<html>`/`<head>` writes its own asset flush.
function isBeforeHtmlOrHead(documentType: t.NodePath<t.MarkoDocumentType>) {
  let next = documentType.getNextSibling();
  while (next.node) {
    if (next.isMarkoTag()) {
      const { name } = next.node;
      return (
        name.type === "StringLiteral" &&
        (name.value === "html" || name.value === "head")
      );
    }
    next = next.getNextSibling();
  }
  return false;
}

import { types as t } from "@marko/compiler";
import * as writer from "./util/writer";
import { isOutputHTML } from "./util/marko-config";

export default function (documentType: t.NodePath<t.MarkoDocumentType>) {
  if (isOutputHTML(documentType)) {
    writer.writeTo(documentType)`<!${documentType.node.value}>`;
  }

  documentType.remove();
}

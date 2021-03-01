import { types as t } from "@marko/compiler";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (documentType: t.NodePath<t.MarkoDocumentType>) {
  if (isOutputHTML(documentType)) {
    writeHTML(documentType)`<!${documentType.node.value}>`;
  }

  documentType.remove();
}

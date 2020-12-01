import { types as t, NodePath } from "@marko/babel-types";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (documentType: NodePath<t.MarkoDocumentType>) {
  if (isOutputHTML(documentType)) {
    writeHTML(documentType)`<!${documentType.node.value}>`;
  }

  documentType.remove();
}

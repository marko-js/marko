import { types as t } from "@marko/compiler";
import { writeHTML } from "./util/html-write";
import {
  Walks,
  writeTemplate,
  writeWalks,
  markTextSiblings
} from "./util/dom-writer";
import { isOutputHTML } from "./util/marko-config";

export default function (text: t.NodePath<t.MarkoText>) {
  if (isOutputHTML(text)) {
    writeHTML(text)`${text.node.value}`;
  } else {
    writeTemplate(text, text.node.value);
    writeWalks(text, Walks.NEXT);
    markTextSiblings(text);
  }

  text.remove();
}

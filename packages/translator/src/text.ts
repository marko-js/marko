import { types as t, NodePath } from "@marko/babel-types";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (text: NodePath<t.MarkoText>) {
  if (isOutputHTML(text)) {
    writeHTML(text)`${text.node.value}`;
  } else {
    // TODO
  }

  text.remove();
}

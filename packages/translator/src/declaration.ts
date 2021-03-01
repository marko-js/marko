import { types as t } from "@marko/compiler";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (declaration: t.NodePath<t.MarkoDeclaration>) {
  if (isOutputHTML(declaration)) {
    writeHTML(declaration)`<?${declaration.node.value}?>`;
  }

  declaration.remove();
}

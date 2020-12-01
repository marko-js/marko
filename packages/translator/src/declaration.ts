import { types as t, NodePath } from "@marko/babel-types";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (declaration: NodePath<t.MarkoDeclaration>) {
  if (isOutputHTML(declaration)) {
    writeHTML(declaration)`<?${declaration.node.value}?>`;
  }

  declaration.remove();
}

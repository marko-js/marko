import type { types as t } from "@marko/compiler";
import * as writer from "../util/writer";
import { isOutputHTML } from "../util/marko-config";

export default {
  translate(declaration: t.NodePath<t.MarkoDeclaration>) {
    if (isOutputHTML()) {
      writer.writeTo(declaration)`<?${declaration.node.value}?>`;
    }

    declaration.remove();
  },
};

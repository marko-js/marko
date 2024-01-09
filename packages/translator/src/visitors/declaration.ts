import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import * as writer from "../util/writer";

export default {
  translate(declaration: t.NodePath<t.MarkoDeclaration>) {
    if (isOutputHTML()) {
      writer.writeTo(declaration)`<?${declaration.node.value}?>`;
    }

    declaration.remove();
  },
};

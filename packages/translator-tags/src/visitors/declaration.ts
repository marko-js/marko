import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import * as writer from "../util/writer";

export default {
  translate: {
    enter(declaration: t.NodePath<t.MarkoDeclaration>) {
      if (isOutputHTML()) {
        writer.writeTo(declaration)`<?${declaration.node.value}?>`;
      }
    },
    exit(declaration: t.NodePath<t.MarkoDeclaration>) {
      declaration.remove();
    },
  },
};

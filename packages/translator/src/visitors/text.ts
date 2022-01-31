import type { types as t } from "@marko/compiler";
import * as writer from "../util/writer";

export default {
  translate(text: t.NodePath<t.MarkoText>) {
    writer.writeTo(text)`${text.node.value}`;
    writer.enterShallow(text);
    text.remove();
  },
};

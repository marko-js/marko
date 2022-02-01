import type { types as t } from "@marko/compiler";
import * as writer from "../util/writer";
import * as walks from "../util/walks";

export default {
  translate(text: t.NodePath<t.MarkoText>) {
    writer.writeTo(text)`${text.node.value}`;
    walks.enterShallow(text);
    text.remove();
  },
};

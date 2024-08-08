import { types as t } from "@marko/compiler";

import * as walks from "../util/walks";
import * as writer from "../util/writer";

export default {
  translate: {
    exit(text: t.NodePath<t.MarkoText>) {
      writer.writeTo(text)`${text.node.value}`;
      walks.enterShallow(text);
      text.remove();
    },
  },
};

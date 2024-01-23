import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import * as writer from "../util/writer";

export default {
  translate: {
    enter(cdata: t.NodePath<t.MarkoCDATA>) {
      if (isOutputHTML()) {
        writer.writeTo(cdata)`<![CDATA[${cdata.node.value}]]>`;
      }
    },
    exit(cdata: t.NodePath<t.MarkoCDATA>) {
      cdata.remove();
    },
  },
};

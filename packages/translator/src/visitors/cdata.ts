import type { types as t } from "@marko/compiler";
import * as writer from "../util/writer";
import { isOutputHTML } from "../util/marko-config";

export default {
  translate(cdata: t.NodePath<t.MarkoCDATA>) {
    if (isOutputHTML(cdata)) {
      writer.writeTo(cdata)`<![CDATA[${cdata.node.value}]]>`;
    }

    cdata.remove();
  },
};

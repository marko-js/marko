import { types as t } from "@marko/compiler";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (cdata: t.NodePath<t.MarkoCDATA>) {
  if (isOutputHTML(cdata)) {
    writeHTML(cdata)`<![CDATA[${cdata.node.value}]]>`;
  }

  cdata.remove();
}

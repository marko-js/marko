import { types as t, NodePath } from "@marko/babel-types";
import { writeHTML } from "./util/html-write";
import { isOutputHTML } from "./util/marko-config";

export default function (cdata: NodePath<t.MarkoCDATA>) {
  if (isOutputHTML(cdata)) {
    writeHTML(cdata)`<![CDATA[${cdata.node.value}]]>`;
  }

  cdata.remove();
}

import { types as t } from "@marko/compiler";
import * as writer from "./util/writer";
import { isOutputHTML } from "./util/marko-config";
const ieConditionalCommentRegExp = /^\[if |<!\[endif\]$/;

export default function (comment: t.NodePath<t.MarkoComment>) {
  if (isOutputHTML(comment)) {
    const { value } = comment.node;

    if (ieConditionalCommentRegExp.test(value)) {
      writer.writeTo(comment)`<!--${value}-->`;
    }
  }

  comment.remove();
}

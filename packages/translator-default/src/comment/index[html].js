import { types as t } from "@marko/babel-types";
import write from "../util/html-out-write";
const ieConditionalCommentRegExp = /^\[if |<!\[endif\]$/;

export default function(path) {
  const { node } = path;

  if (ieConditionalCommentRegExp.test(node.value)) {
    path.replaceWith(write`<!--${t.stringLiteral(node.value)}-->`);
  } else {
    path.remove();
  }
}

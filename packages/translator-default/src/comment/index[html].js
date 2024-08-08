import { types as t } from "@marko/compiler";

import write from "../util/html-out-write";
import withPreviousLocation from "../util/with-previous-location";
const ieConditionalCommentRegExp = /^\[if |<!\[endif\]$/;

export default function (path) {
  const { node } = path;

  if (ieConditionalCommentRegExp.test(node.value)) {
    path.replaceWith(
      withPreviousLocation(write`<!--${t.stringLiteral(node.value)}-->`, node),
    );
  } else {
    path.remove();
  }
}

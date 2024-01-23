import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import * as writer from "../util/writer";
const ieConditionalCommentRegExp = /^\[if |<!\[endif\]$/;

export default {
  translate: {
    enter(comment: t.NodePath<t.MarkoComment>) {
      if (isOutputHTML()) {
        const { value } = comment.node;

        if (ieConditionalCommentRegExp.test(value)) {
          writer.writeTo(comment)`<!--${value}-->`;
        }
      }
    },
    exit(comment: t.NodePath<t.MarkoComment>) {
      comment.remove();
    },
  },
};

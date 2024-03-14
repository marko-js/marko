import type { types as t } from "@marko/compiler";

export default {
  translate: {
    exit(comment: t.NodePath<t.MarkoComment>) {
      comment.remove();
    },
  },
};

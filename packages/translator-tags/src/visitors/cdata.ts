import type { types as t } from "@marko/compiler";

export default {
  translate: {
    enter(path: t.NodePath<t.MarkoCDATA>) {
      throw path.buildCodeFrameError(
        "CDATA sections are not supported in Marko.",
      );
    },
  },
};

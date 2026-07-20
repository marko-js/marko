import type { Tag } from "@marko/compiler/babel-utils";

export default {
  // The removed Marko 5 `class {}` component block; parsed as a statement so the
  // removal is reported here, not as the parser's opaque `{` attribute error.
  parse(tag) {
    throw tag.hub.buildError(
      tag.node.name,
      "class {} component blocks are no longer supported. Use <let> and <const> tags for state.",
    );
  },
  parseOptions: {
    statement: true,
    rawOpenTag: true,
  },
} as Tag;

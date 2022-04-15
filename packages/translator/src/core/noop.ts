import type { Tag } from "@marko/babel-utils";

export default {
  translate(tag) {
    tag.remove();
  },
} as Tag;

import type { Tag } from "@marko/babel-utils";

export default {
  migrate: [(tag) => tag.remove()],
} as Tag;

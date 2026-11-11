import type { Tag } from "@marko/compiler/babel-utils";

import runtimeInfo from "../util/runtime-info";

export default {
  types: runtimeInfo.name + "/tags/html-style.d.marko",
  html: true,
  parseOptions: {
    text: true,
    preserveWhitespace: true,
  },
} as Tag;

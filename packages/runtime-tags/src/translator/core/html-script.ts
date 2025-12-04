import type { Tag } from "@marko/compiler/babel-utils";

import runtimeInfo from "../util/runtime-info";

export default {
  types: runtimeInfo.name + "/tags/html-script.d.marko",
  html: true,
  parseOptions: {
    text: true,
    preserveWhitespace: true,
  },
  autocomplete: [
    {
      description:
        "Use instead of `<script>` to render a native tag directly, without processing by Marko.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#html-script--html-style",
    },
  ],
} as Tag;

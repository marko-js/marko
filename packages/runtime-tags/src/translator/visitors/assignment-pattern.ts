import { types as t } from "@marko/compiler";

import { isOutputDOM } from "../util/marko-config";
import { initDefaultedValue } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    enter(pattern) {
      const { node } = pattern;
      const binding = node.extra?.binding;
      // The HTML output instead materializes the defaulted binding where
      // the pattern is emitted (see strip-default-values.ts).
      if (binding?.defaultSource && isOutputDOM()) {
        initDefaultedValue(binding, node.right);
      }
    },
  },
} satisfies TemplateVisitor<t.AssignmentPattern>;

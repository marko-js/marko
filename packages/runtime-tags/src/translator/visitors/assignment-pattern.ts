import { types as t } from "@marko/compiler";

import { isOutputDOM } from "../util/marko-config";
import { initDefaultedValue } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    enter(pattern) {
      const { node } = pattern;
      const binding = node.extra?.binding;
      // A defaulted Marko binding (see the AssignmentPattern case in
      // references.ts) has no tag of its own to translate; its derivation
      // registers here, where the fallback lives in the tree, the way the
      // const tag registers its value. The HTML output instead materializes
      // the source variable where the pattern is emitted (see
      // strip-default-values.ts).
      if (binding?.defaultSource && isOutputDOM()) {
        initDefaultedValue(binding, node.right);
      }
    },
  },
} satisfies TemplateVisitor<t.AssignmentPattern>;

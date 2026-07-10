import { types as t } from "@marko/compiler";

import { isOutputDOM } from "../util/marko-config";
import type { ReferencedExtra } from "../util/references";
import { addValue, initValue } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    enter(pattern) {
      const { node } = pattern;
      const { binding, defaultedValue } = node.extra ?? {};
      // A defaulted Marko binding (see the AssignmentPattern case in
      // references.ts) has no tag of its own to translate; its analyzed
      // derivation is registered here the way the const tag registers its
      // variable. The HTML output instead materializes the source variable
      // where the pattern is emitted (see strip-default-values.ts).
      if (!binding || !defaultedValue || binding.pruned || !isOutputDOM()) {
        return;
      }

      addValue(
        binding.section,
        (node.right.extra as ReferencedExtra).referencedBindings,
        initValue(binding)!,
        defaultedValue,
      );
    },
  },
} satisfies TemplateVisitor<t.AssignmentPattern>;

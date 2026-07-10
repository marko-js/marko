import { types as t } from "@marko/compiler";

import { isOutputDOM } from "../util/marko-config";
import { createRead, type ReferencedExtra } from "../util/references";
import { addValue, initValue } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";

export default {
  translate: {
    enter(pattern) {
      const { node } = pattern;
      const { binding, defaultSource } = node.extra ?? {};
      // A defaulted Marko binding (see the AssignmentPattern case in
      // references.ts) has no tag of its own to translate; its derivation is
      // registered here the way the const tag registers its variable. The
      // HTML output instead materializes the source variable where the
      // pattern is emitted (see strip-default-values.ts).
      if (!binding || !defaultSource || binding.pruned || !isOutputDOM()) {
        return;
      }

      // Reads of the source are lowered by the shared render node
      // replacement when the section's signals are written.
      const readSource = () => {
        const id = t.identifier(defaultSource.name);
        const extra = (id.extra = {} as t.NodeExtra);
        extra.read = createRead(defaultSource, undefined);
        extra.section = binding.section;
        return id;
      };

      const valueExtra = node.right.extra as ReferencedExtra;
      addValue(
        binding.section,
        valueExtra.referencedBindings,
        initValue(binding)!,
        t.conditionalExpression(
          t.binaryExpression(
            "!==",
            t.unaryExpression("void", t.numericLiteral(0)),
            readSource(),
          ),
          readSource(),
          node.right,
        ),
      );
    },
  },
} satisfies TemplateVisitor<t.AssignmentPattern>;

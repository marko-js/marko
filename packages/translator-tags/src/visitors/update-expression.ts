import { types as t } from "@marko/compiler";

import { isOutputDOM } from "../util/marko-config";
import { getSection } from "../util/sections";
import type { TemplateVisitor } from "../util/visitors";
import { currentProgramPath } from "./program";

export default {
  translate: {
    exit(expr) {
      if (isOutputDOM()) {
        const binding = expr.node.argument.extra?.binding;
        if (binding) {
          const section = getSection(expr);
          (currentProgramPath.node.extra.assignments ??= []).push([
            section,
            expr,
          ]);
        }
      }
    },
  },
} satisfies TemplateVisitor<t.UpdateExpression>;

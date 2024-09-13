import type { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { getOrCreateSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";

export default {
  analyze(scriptlet) {
    mergeReferences(
      getOrCreateSection(scriptlet),
      scriptlet.node,
      scriptlet.node.body,
    );
  },
  translate: {
    exit(scriptlet) {
      const { node } = scriptlet;
      if (isOutputHTML()) {
        if (node.static) return; // handled in program exit for html currently.
        scriptlet.replaceWithMultiple(node.body);
      } else {
        if (node.target && node.target !== "client") {
          scriptlet.remove();
        } else if (node.static) {
          scriptlet.replaceWithMultiple(node.body);
        } else {
          addStatement(
            "render",
            getSection(scriptlet),
            node.extra?.referencedBindings,
            node.body,
          );
          scriptlet.remove();
        }
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoScriptlet>;

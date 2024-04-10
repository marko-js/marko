import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";

export default {
  analyze(scriptlet: t.NodePath<t.MarkoScriptlet>) {
    mergeReferences(scriptlet, scriptlet.node.body);
  },
  translate: {
    exit(scriptlet: t.NodePath<t.MarkoScriptlet>) {
      const { node } = scriptlet;
      if (isOutputHTML()) {
        if (node.static) return; // handled in program exit for html currently.
        scriptlet.replaceWithMultiple(node.body);
      } else {
        if (node.static) {
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
};

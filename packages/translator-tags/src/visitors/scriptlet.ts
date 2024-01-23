import type { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import type { References } from "../util/references";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";

export default {
  translate: {
    exit(scriptlet: t.NodePath<t.MarkoScriptlet>) {
      if (isOutputHTML()) {
        if (scriptlet.node.static) return; // handled in program exit for html currently.
        scriptlet.replaceWithMultiple(scriptlet.node.body);
      } else {
        if (scriptlet.node.static) {
          scriptlet.replaceWithMultiple(scriptlet.node.body);
        } else {
          addStatement(
            "render",
            getSection(scriptlet),
            scriptlet.node.extra?.bodyReferences as References,
            scriptlet.node.body,
          );
          scriptlet.remove();
        }
      }
    },
  },
};

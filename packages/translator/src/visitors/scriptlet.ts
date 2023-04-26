import type { types as t } from "@marko/compiler";
import { addStatement } from "../util/signals";
import { isOutputHTML } from "../util/marko-config";
import type { References } from "../util/references";
import { getSectionId } from "../util/sections";

export default {
  translate(scriptlet: t.NodePath<t.MarkoScriptlet>) {
    if (isOutputHTML()) {
      if (scriptlet.node.static) return; // handled in program exit for html currently.
      scriptlet.replaceWithMultiple(scriptlet.node.body);
    } else {
      if (scriptlet.node.static) {
        scriptlet.replaceWithMultiple(scriptlet.node.body);
      } else {
        addStatement(
          "render",
          getSectionId(scriptlet),
          scriptlet.node.extra?.bodyReferences as References,
          scriptlet.node.body
        );
        scriptlet.remove();
      }
    }
  },
};

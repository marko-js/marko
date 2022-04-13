import type { types as t } from "@marko/compiler";
import { addStatement } from "../util/apply-hydrate";
import { isOutputHTML } from "../util/marko-config";
import type { ReferenceGroup } from "../util/references";
import { getSectionId } from "../util/sections";

export default {
  translate(scriptlet: t.NodePath<t.MarkoScriptlet>) {
    if (isOutputHTML()) {
      scriptlet.replaceWithMultiple(scriptlet.node.body);
    } else {
      addStatement(
        "apply",
        getSectionId(scriptlet),
        scriptlet.node.extra!.bodyReferences as ReferenceGroup,
        scriptlet.node.body
      );
    }
  },
};

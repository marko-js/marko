import type { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { getOrCreateSection } from "../util/sections";
import { translateRegisteredFunctionNode } from "../util/signals";
import { traverseFast } from "../util/traverse-fast";
import type { TemplateVisitor } from "../util/visitors";

export default {
  analyze(scriptlet) {
    if (!scriptlet.node.static) {
      throw scriptlet.buildCodeFrameError(
        "Scriptlets are not supported when using the tags api.",
      );
    }
    mergeReferences(
      getOrCreateSection(scriptlet),
      scriptlet.node,
      scriptlet.node.body,
    );
  },
  translate: {
    exit(scriptlet) {
      const { node } = scriptlet;
      const isHTML = isOutputHTML();

      if (node.target && node.target !== (isHTML ? "server" : "client")) {
        scriptlet.remove();
        return;
      }

      if (isHTML) {
        // handled in program exit for html currently.
      } else {
        traverseFast(node, "body", translateRegisteredFunctionNode);
        scriptlet.replaceWithMultiple(node.body);
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoScriptlet>;

import type { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { getOrCreateSection } from "../util/sections";
import { replaceRegisteredFunctionNode } from "../util/signals";
import { traverseReplace } from "../util/traverse";
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

    if (scriptlet.node.target === "client") {
      getProgram().node.extra.isInteractive ||= true;
    }
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
        traverseReplace(node, "body", replaceRegisteredFunctionNode);
        scriptlet.replaceWithMultiple(node.body);
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoScriptlet>;

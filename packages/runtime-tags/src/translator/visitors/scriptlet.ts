import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { reportAnalyzeError } from "../util/analyze-errors";
import { isOutputHTML } from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import { ensureSection } from "../util/sections";
import { replaceRegisteredFunctionNode } from "../util/signals";
import { traverseReplace } from "../util/traverse";
import type { TemplateVisitor } from "../util/visitors";

export default {
  analyze(scriptlet) {
    if (!scriptlet.node.static) {
      reportAnalyzeError(
        scriptlet,
        scriptlet.buildCodeFrameError(
          "Scriptlets are not supported when using the tags api.",
        ),
      );
      scriptlet.skip();
      return;
    }
    mergeReferences(
      ensureSection(scriptlet),
      scriptlet.node,
      scriptlet.node.body,
    );

    if (scriptlet.node.target === "client") {
      // Client statements run at module load; unlike interactivity they do not
      // need the resume runtime, only for the page entry to load the module.
      getProgram().node.extra.hasClientStatement = true;
    }
  },
  translate: {
    exit(scriptlet) {
      const { node } = scriptlet;
      const isHTML = isOutputHTML();

      if (node.target && node.target !== (isHTML ? "server" : "client")) {
        const ids = Object.keys(scriptlet.getOuterBindingIdentifiers());
        node.body = ids.length
          ? [
              t.variableDeclaration(
                "var",
                ids.map((key) => t.variableDeclarator(t.identifier(key))),
              ),
            ]
          : [];
      } else if (!isHTML) {
        traverseReplace(node, "body", replaceRegisteredFunctionNode);
      }

      // Html keeps it: the program exit moves static code out of the render.
      if (!isHTML) {
        replaceWithStatements(scriptlet, node.body);
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoScriptlet>;

import { basename } from "path";

import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { reportAnalyzeError } from "../util/analyze-errors";
import {
  isOutputHTML,
  isPersisted,
  isPersistedEntryBuild,
} from "../util/marko-config";
import { mergeReferences } from "../util/references";
import { getOrCreateSection } from "../util/sections";
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
      getOrCreateSection(scriptlet),
      scriptlet.node,
      scriptlet.node.body,
    );

    if (scriptlet.node.target === "client") {
      getProgram().node.extra.isInteractive = true;
    }

    // Persisted navigation entries import these bindings from the page
    // module (one shared instance), so rendered code cannot assign them.
    if (isPersisted() && scriptlet.node.target !== "server") {
      for (const name in scriptlet.getOuterBindingIdentifiers()) {
        for (const assignment of scriptlet.scope.getBinding(name)
          ?.constantViolations || []) {
          if (!assignment.findParent((p) => p.type === "MarkoScriptlet")) {
            reportAnalyzeError(
              assignment,
              assignment.buildCodeFrameError(
                `Persisted pages cannot assign to the \`static\` binding \`${name}\` from rendered code: the lazy navigation entry shares the page module's bindings as imports, and assigning an import fails at runtime. Wrap the assignment in a \`static\` function and call it instead.`,
              ),
            );
          }
        }
      }
    }
  },
  translate: {
    exit(scriptlet) {
      const { node } = scriptlet;
      const isHTML = isOutputHTML();

      if (node.target && node.target !== (isHTML ? "server" : "client")) {
        const ids = Object.keys(scriptlet.getOuterBindingIdentifiers());
        const decl =
          ids.length &&
          t.variableDeclaration(
            "var",
            ids.map((key) => t.variableDeclarator(t.identifier(key))),
          );
        if (decl) {
          if (isHTML) {
            // handled in program exit for html currently.
            scriptlet.node.target = null;
            scriptlet.node.body = [decl];
          } else {
            scriptlet.replaceWith(decl);
          }
        } else {
          scriptlet.remove();
        }

        return;
      }

      if (isHTML) {
        // handled in program exit for html currently.
      } else if (isPersistedEntryBuild()) {
        const ids = Object.keys(scriptlet.getOuterBindingIdentifiers());
        if (ids.length) {
          scriptlet.replaceWith(
            t.importDeclaration(
              ids.map((id) =>
                t.importSpecifier(t.identifier(id), t.identifier(id)),
              ),
              t.stringLiteral(
                `./${basename(scriptlet.hub.file.opts.filename as string)}`,
              ),
            ),
          );
        } else {
          scriptlet.remove();
        }
      } else {
        traverseReplace(node, "body", replaceRegisteredFunctionNode);
        const statements = scriptlet.replaceWithMultiple(node.body);
        // Persisted main modules export their module-scope bindings so the
        // persisted entry shares them (single-instance state, above).
        if (isPersisted() && !isPersistedEntryBuild()) {
          const ids: string[] = [];
          for (const statement of statements) {
            ids.push(...Object.keys(statement.getOuterBindingIdentifiers()));
          }
          if (ids.length) {
            statements[statements.length - 1].insertAfter(
              t.exportNamedDeclaration(
                null,
                ids.map((id) =>
                  t.exportSpecifier(t.identifier(id), t.identifier(id)),
                ),
              ),
            );
          }
        }
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoScriptlet>;

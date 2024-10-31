import { types as t } from "@marko/compiler";

import { returnId } from "../../core/return";
import isStatic from "../../util/is-static";
import { callRuntime } from "../../util/runtime";
import { getSectionForBody } from "../../util/sections";
import { renameBindings, writeHTMLResumeStatements } from "../../util/signals";
import type { TemplateVisitor } from "../../util/visitors";
import { flushInto } from "../../util/writer";
import { htmlRendererIdentifier } from ".";

export default {
  translate: {
    exit(program) {
      const section = getSectionForBody(program)!;
      const tagVarIdentifier = program.scope.generateUidIdentifier("tagVar");

      flushInto(program);
      writeHTMLResumeStatements(program, tagVarIdentifier);
      renameBindings();

      const returnIdentifier = returnId(section);
      if (returnIdentifier !== undefined) {
        program.pushContainer("body", t.returnStatement(returnIdentifier));
      }

      const renderContent: t.Statement[] = [];

      for (const child of program.get("body")) {
        if (!isStatic(child)) {
          renderContent.push(child.node);
          child.remove();
        } else if (child.isMarkoScriptlet()) {
          if (child.node.target && child.node.target !== "server") {
            child.remove();
          } else {
            child.replaceWithMultiple(child.node.body);
          }
        }
      }

      program.pushContainer("body", [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            htmlRendererIdentifier,
            callRuntime(
              "createRenderer",
              t.arrowFunctionExpression(
                [t.identifier("input"), tagVarIdentifier],
                t.blockStatement(renderContent),
              ),
            ),
          ),
        ]),

        t.exportDefaultDeclaration(
          callRuntime(
            "createTemplate",
            htmlRendererIdentifier,
            t.stringLiteral(program.hub.file.metadata.marko.id),
          ),
        ),
      ]);
    },
  },
} satisfies TemplateVisitor<t.Program>;

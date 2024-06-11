import { types as t } from "@marko/compiler";
import { returnId } from "../../core/return";
import isStatic from "../../util/is-static";
import { callRuntime } from "../../util/runtime";
import { getSection } from "../../util/sections";
import { writeHTMLResumeStatements } from "../../util/signals";
import { flushInto } from "../../util/writer";

export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      const section = getSection(program);
      const tagVarIdentifier = program.scope.generateUidIdentifier("tagVar");

      flushInto(program);
      writeHTMLResumeStatements(program, tagVarIdentifier);

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

      const rendererId = program.scope.generateUidIdentifier("renderer");
      program.pushContainer("body", [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            rendererId,
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
            rendererId,
            t.stringLiteral(program.hub.file.metadata.marko.id),
          ),
        ),
      ]);
    },
  },
};

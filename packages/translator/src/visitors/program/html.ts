import { types as t } from "@marko/compiler";
import { writeHTMLResumeStatements } from "../../util/signals";
import { callRuntime } from "../../util/runtime";
import { flushInto } from "../../util/writer";
import isStatic from "../../util/is-static";
import { returnId } from "../../core/return";
import { getScopeIdentifier, getSection } from "../../util/sections";
import { getTemplateId } from "@marko/babel-utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          child.replaceWithMultiple(child.node.body);
        }
      }

      const rendererId = program.scope.generateUidIdentifier("renderer");
      const { attrs } = program.node.extra;
      const {
        markoOpts: { optimize },
        opts: { filename },
      } = program.hub.file;
      program.pushContainer("body", [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            rendererId,
            callRuntime(
              "register",
              t.arrowFunctionExpression(
                [
                  attrs ? (attrs.var as any) : t.identifier("input"),
                  tagVarIdentifier,
                  getScopeIdentifier(getSection(program)),
                ],
                t.blockStatement(renderContent)
              ),
              t.stringLiteral(getTemplateId(optimize, `${filename}`))
            )
          ),
        ]),

        t.exportDefaultDeclaration(rendererId),

        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier("render"),
              callRuntime("createRenderer", rendererId)
            ),
          ])
        ),
      ]);
    },
  },
};

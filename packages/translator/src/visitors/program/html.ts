import { types as t } from "@marko/compiler";
import { writeHTMLHydrateStatements } from "../../util/signals";
import { callRuntime } from "../../util/runtime";
import { flushInto } from "../../util/writer";
import isStatic from "../../util/is-static";
import { returnId } from "../../core/return";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      const tagVarIdentifier = program.scope.generateUidIdentifier("tagVar");

      flushInto(program);
      writeHTMLHydrateStatements(program, tagVarIdentifier);

      const returnIdentifier = returnId(0);
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
      program.pushContainer("body", [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            rendererId,
            t.arrowFunctionExpression(
              [
                attrs ? (attrs.var as any) : t.identifier("input"),
                tagVarIdentifier,
              ],
              t.blockStatement(renderContent)
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

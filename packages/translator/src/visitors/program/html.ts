import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { flushInto } from "../../util/writer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      flushInto(program);

      const renderContent: t.Statement[] = [];

      for (const child of program.get("body")) {
        if (!isStatic(child)) {
          renderContent.push(child.node);
          child.remove();
        }
      }

      const rendererId = program.scope.generateUidIdentifier("renderer");
      program.pushContainer("body", [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            rendererId,
            callRuntime(
              "register",
              t.stringLiteral(program.hub.file.metadata.marko.id),
              t.arrowFunctionExpression(
                [t.identifier("input")],
                t.blockStatement(renderContent)
              )
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

function isStatic(path: t.NodePath<any>) {
  if (path.isImportDeclaration()) {
    return true;
  }

  // TODO include more cases here.

  return false;
}

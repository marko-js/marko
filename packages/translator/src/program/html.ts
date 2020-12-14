import { types as t, NodePath } from "@marko/babel-types";
import { flushInto } from "../util/html-flush";
import { callRuntime } from "../util/runtime";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function enter(program: NodePath<t.Program>) {}

export function exit(program: NodePath<t.Program>) {
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
          program,
          "wrapHydratable",
          t.arrowFunctionExpression(
            [t.identifier("input")],
            t.blockStatement(renderContent)
          )
        )
      )
    ]),

    t.exportDefaultDeclaration(rendererId),

    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier("render"),
          callRuntime(program, "createRenderFn", rendererId)
        )
      ])
    )
  ]);
}

function isStatic(path: NodePath<any>) {
  if (path.isImportDeclaration()) {
    return true;
  }

  // TODO include more cases here.

  return false;
}

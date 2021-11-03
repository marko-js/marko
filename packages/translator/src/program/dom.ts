import { types as t } from "@marko/compiler";
import { callRuntime } from "../util/runtime";
import * as writer from "../util/writer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function enter(program: t.NodePath<t.Program>) {
  writer.start(program);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function exit(program: t.NodePath<t.Program>) {
  const templateIdentifier = t.identifier("template");
  const walksIdentifier = t.identifier("walks");
  const hydrateIdentifier = t.identifier("hydrate");
  const usedInputs = Object.keys(program.node.extra.references?.input || {});
  const hydrateContent: t.Statement[] = [];
  const { walks, writes } = writer.end(program);

  for (const child of program.get("body")) {
    if (!isStatic(child)) {
      hydrateContent.push(child.node);
      child.remove();
    }
  }

  program.node.body.push(
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(templateIdentifier, writes || t.stringLiteral("")),
      ])
    ),
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(walksIdentifier, walks || t.stringLiteral("")),
      ])
    ),
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          hydrateIdentifier,
          callRuntime(
            program,
            "register",
            t.stringLiteral(program.hub.file.metadata.marko.id),
            t.arrowFunctionExpression(
              [t.identifier("input")],
              t.blockStatement(hydrateContent)
            )
          )
        ),
      ])
    ),
    t.exportDefaultDeclaration(
      callRuntime(
        program,
        "createRenderFn",
        templateIdentifier,
        walksIdentifier,
        t.arrayExpression(usedInputs.map((k) => t.stringLiteral(k))),
        hydrateIdentifier
      )
    )
  );
}

function isStatic(path: t.NodePath<any>) {
  if (path.isImportDeclaration()) {
    return true;
  }

  // TODO include more cases here.

  return false;
}

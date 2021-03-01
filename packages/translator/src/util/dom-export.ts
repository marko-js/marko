import {
  NodePath,
  Program,
  StringLiteral,
  types as t
} from "@marko/babel-types";
import { callRuntime } from "./runtime";
import { encodeWalks } from "./walks";

export function writeExports(path: NodePath<Program>) {
  const template = t.identifier("template");
  const walks = t.identifier("walks");
  const hydrate = t.identifier("hydrate");

  let inputs: StringLiteral[] = [];
  if (path.node.extra.references && path.node.extra.references.input) {
    inputs = Object.keys(path.node.extra.references.input).reduce(
      (list: StringLiteral[], key: string) => {
        if (path.node.extra.references!.input![key]) {
          list.push(t.stringLiteral(key.replace("input.", "")));
        }
        return list;
      },
      []
    );
  }
  // template
  path.node.body.push(
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          template,
          t.stringLiteral(path.state.template || "")
        )
      ])
    ),
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          walks,
          t.stringLiteral(encodeWalks(path.state.walks))
        )
      ])
    ),
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          hydrate,
          callRuntime(
            path,
            "register",
            t.stringLiteral(path.hub.file.metadata.marko.id),
            t.arrowFunctionExpression(
              [t.identifier("input")],
              t.blockStatement(path.state.hydrate)
            )
          )
        )
      ])
    ),
    t.exportDefaultDeclaration(
      callRuntime(
        path,
        "createRenderFn",
        template,
        walks,
        t.arrayExpression(inputs),
        hydrate
      )
    )
  );
}

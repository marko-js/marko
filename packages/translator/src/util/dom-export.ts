import { types as t } from "@marko/compiler";
import { callRuntime } from "./runtime";
import { encodeWalks } from "./walks";

export function writeExports(path: t.NodePath<t.Program>) {
  const template = t.identifier("template");
  const walks = t.identifier("walks");
  const hydrate = t.identifier("hydrate");

  let inputs: t.StringLiteral[] = [];
  if (path.node.extra.references && path.node.extra.references.input) {
    inputs = Object.keys(path.node.extra.references.input).reduce(
      (list: t.StringLiteral[], key: string) => {
        if (path.node.extra.references!.input![key]) {
          list.push(t.stringLiteral(key));
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
        t.variableDeclarator(template, encodeTemplate(path.state.template))
      ])
    ),
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(walks, encodeWalks(path.state.walks))
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

function encodeTemplate(template: (string | t.Expression)[]) {
  let res: t.Expression | undefined;
  for (let i = 0; i < template.length; i++) {
    let part = template[i];
    if (typeof part === "string") {
      if (!part.length) continue;
      part = t.stringLiteral(part);
    }
    res = res ? t.binaryExpression("+", res, part) : part;
  }
  return res || t.stringLiteral("");
}

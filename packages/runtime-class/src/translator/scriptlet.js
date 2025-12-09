import { types as t } from "@marko/compiler";

export default function (path) {
  const { node } = path;
  const isHTML = path.hub.file.markoOpts.output === "html";
  switch (node.target) {
    case "server":
      if (!isHTML) {
        replaceWithUndefinedIdentifiers(path);
        return;
      }
      break;
    case "client":
      if (isHTML) {
        replaceWithUndefinedIdentifiers(path);
        return;
      }
      break;
  }
  path.replaceWithMultiple(node.body);
}

function replaceWithUndefinedIdentifiers(path) {
  const keys = Object.keys(path.getOuterBindingIdentifiers());
  if (keys.length) {
    path.replaceWith(
      t.variableDeclaration(
        "var",
        keys.map((key) => t.variableDeclarator(t.identifier(key))),
      ),
    );
  } else {
    path.remove();
  }
}

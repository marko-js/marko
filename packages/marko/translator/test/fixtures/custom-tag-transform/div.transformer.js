import { types as t } from "@marko/compiler";

export function enter(path) {
  path.pushContainer(
    "attributes",
    t.markoAttribute("style", t.stringLiteral("display:block")),
  );
}

export function exit(path) {
  path.replaceWith(
    t.markoTag(
      t.stringLiteral("span"),
      path.get("attributes").map((p) => p.node),
      t.markoTagBody(
        path.get("body.body").map((p) => p.node),
        toNodes(path.get("params")),
      ),
      toNodes(path.get("arguments")),
    ),
  );
}

function toNodes(nodePaths) {
  return nodePaths.length ? nodePaths.map((p) => p.node) : undefined;
}

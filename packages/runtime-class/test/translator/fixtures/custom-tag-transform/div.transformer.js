"use strict";

const { types: t } = require("@marko/compiler");

exports.enter = function enter(path) {
  path.pushContainer(
    "attributes",
    t.markoAttribute("style", t.stringLiteral("display:block")),
  );
}

exports.exit = function exit(path) {
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

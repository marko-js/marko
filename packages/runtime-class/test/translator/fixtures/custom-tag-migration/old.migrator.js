"use strict";

const { types: t } = require("@marko/compiler");

exports.enter = function enter(path) {
  const oldAttr = path
    .get("attributes")
    .find((attrPath) => attrPath.get("name").node === "a");

  if (oldAttr) {
    oldAttr.replaceWith(t.markoAttribute("b", oldAttr.get("value").node));
  }
}

exports.exit = function exit(path) {
  path.replaceWith(
    t.markoTag(
      t.stringLiteral("new"),
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

"use strict";

const { types: t } = require("@marko/compiler");

// Built nodes have no source location.
module.exports = function migrate(tag) {
  tag.hub.file.path.unshiftContainer("body", [
    t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier("Foo"))],
      t.stringLiteral("./foo.marko"),
    ),
    t.importDeclaration(
      [t.importSpecifier(t.identifier("Card"), t.identifier("Card"))],
      t.stringLiteral("./card"),
    ),
    t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier("TagsChild"))],
      t.stringLiteral("./tags-child.marko"),
    ),
  ]);
  tag.remove();
};

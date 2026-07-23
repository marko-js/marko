"use strict";

const { types: t } = require("@marko/compiler");

module.exports = {
  Identifier(path) {
    if (path.node.name === "before") {
      path.replaceWith(t.identifier("after"));
    }
  },
};

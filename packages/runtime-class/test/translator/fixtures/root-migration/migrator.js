"use strict";

const { types: t } = require("@marko/compiler");

module.exports = {
  Identifier(path) {
    if (path.node.name === "old") {
      path.replaceWith(t.identifier("new"));
    }
  },
};

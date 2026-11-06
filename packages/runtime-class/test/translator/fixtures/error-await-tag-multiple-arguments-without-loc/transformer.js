"use strict";

// Leaves the `built` argument without a source location, as a node a
// migrator or transform builds is.
module.exports = {
  Identifier(path) {
    if (path.node.name === "built") {
      path.node.loc = null;
    }
  },
};

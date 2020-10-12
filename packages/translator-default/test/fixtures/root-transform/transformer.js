import { types as t } from "@marko/babel-types";

export default {
  Identifier(path) {
    if (path.node.name === "before") {
      path.replaceWith(t.identifier("after"));
    }
  }
};

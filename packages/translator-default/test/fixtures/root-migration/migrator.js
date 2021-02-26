import { types as t } from "@marko/compiler";

export default {
  Identifier(path) {
    if (path.node.name === "old") {
      path.replaceWith(t.identifier("new"));
    }
  }
};

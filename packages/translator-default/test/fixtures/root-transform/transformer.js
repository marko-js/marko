import { types as t } from "@marko/compiler";

export default {
  Identifier(path) {
    if (path.node.name === "before") {
      path.replaceWith(t.identifier("after"));
    }
  },
};

import { types as t } from "@marko/babel-types";

export default () => ({
  Identifier(path) {
    if (path.node.name === "old") {
      path.replaceWith(t.identifier("new"));
    }
  }
});

import { types as t } from "@marko/babel-types";

export default () => ({
  ReferencedIdentifier(path) {
    if (path.node.name === "data" && !path.scope.hasBinding("data")) {
      path.replaceWith(t.identifier("input"));
    }
  }
});

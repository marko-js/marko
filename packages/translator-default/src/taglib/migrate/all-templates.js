import { types as t } from "@marko/compiler";
import withPreviousLocation from "../../util/with-previous-location";
import { diagnosticDeprecate } from "@marko/babel-utils";

export default {
  ReferencedIdentifier(path) {
    if (path.node.name === "data" && !path.scope.hasBinding("data")) {
      diagnosticDeprecate(path, {
        label: "The 'data' variable is deprecated. Use 'input' instead.",
        fix() {
          path.replaceWith(
            withPreviousLocation(t.identifier("input"), path.node)
          );
        },
      });
    }
  },
};

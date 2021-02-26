import { types as t } from "@marko/compiler";
import withPreviousLocation from "../../util/with-previous-location";

export default {
  ReferencedIdentifier(path) {
    if (path.node.name === "data" && !path.scope.hasBinding("data")) {
      path.replaceWith(withPreviousLocation(t.identifier("input"), path.node));
    }
  }
};

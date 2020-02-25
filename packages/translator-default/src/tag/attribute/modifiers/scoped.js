import { types as t } from "@marko/babel-types";
import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const { hub } = tag;
    value.replaceWith(
      withPreviousLocation(
        t.callExpression(
          t.memberExpression(hub._componentDefIdentifier, t.identifier("elId")),
          [value.node]
        ),
        value.node
      )
    );
  }
};

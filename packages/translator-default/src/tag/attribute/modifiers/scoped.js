import { types as t } from "@marko/compiler";
import withPreviousLocation from "../../../util/with-previous-location";

export default {
  exit(tag, _, value) {
    const {
      hub: { file }
    } = tag;
    value.replaceWith(
      withPreviousLocation(
        t.callExpression(
          t.memberExpression(
            file._componentDefIdentifier,
            t.identifier("elId")
          ),
          [value.node]
        ),
        value.node
      )
    );
  }
};

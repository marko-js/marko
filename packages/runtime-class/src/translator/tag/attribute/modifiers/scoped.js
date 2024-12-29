import { types as t } from "@marko/compiler";

import withPreviousLocation from "../../../util/with-previous-location";

const seen = new WeakSet();

export default {
  exit(tag, _, value) {
    const {
      hub: { file },
    } = tag;

    if (seen.has(value.node)) {
      return;
    }

    const replacement = withPreviousLocation(
      t.callExpression(
        t.memberExpression(file._componentDefIdentifier, t.identifier("elId")),
        [value.node],
      ),
      value.node,
    );

    seen.add(replacement);
    value.replaceWith(replacement);
  },
};

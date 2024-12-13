import { types as t } from "@marko/compiler";

import write from "../util/html-out-write";
import withPreviousLocation from "../util/with-previous-location";

export default function (path) {
  const { node } = path;

  path.replaceWith(
    withPreviousLocation(write`<!${t.stringLiteral(node.value)}>`, node),
  );
}

import { types as t } from "@marko/compiler";
import { decode } from "he";

import write from "../util/vdom-out-write";
import withPreviousLocation from "../util/with-previous-location";

export default function (path) {
  const { node } = path;

  path.replaceWith(
    withPreviousLocation(
      write(
        "t",
        t.stringLiteral(decode(node.value)),
        path.hub.file._componentInstanceIdentifier,
      ),
      node,
    ),
  );
}

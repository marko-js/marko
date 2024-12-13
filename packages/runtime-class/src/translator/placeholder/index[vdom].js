import { computeNode } from "@marko/compiler/babel-utils";

import write from "../util/vdom-out-write";
import withPreviousLocation from "../util/with-previous-location";

export default function (path) {
  const { node } = path;
  const { escape, value } = node;
  const method = escape ? "t" : "h";
  const computed = computeNode(value);

  if (computed && computed.value == null) {
    path.remove();
  } else {
    path.replaceWith(
      withPreviousLocation(
        write(method, value, path.hub.file._componentInstanceIdentifier),
        node,
      ),
    );
  }
}

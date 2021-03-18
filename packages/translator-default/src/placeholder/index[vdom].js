import { types as t } from "@marko/compiler";
import write from "../util/vdom-out-write";
import withPreviousLocation from "../util/with-previous-location";

export default function (path) {
  const { node } = path;
  const { escape, value } = node;
  const method = escape ? "t" : "h";
  const { confident, value: computed } = path.get("value").evaluate();

  if (confident && !computed) {
    path.remove();
  } else {
    path.replaceWith(
      withPreviousLocation(
        write(method, value, t.identifier("component")),
        node
      )
    );
  }
}

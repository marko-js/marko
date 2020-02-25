import { types as t } from "@marko/babel-types";
import write from "../util/html-out-write";

export default function(path) {
  const { node } = path;

  path.replaceWith(write`<?${t.stringLiteral(node.value)}?>`);
}

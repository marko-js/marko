import { decode } from "he";
import { types as t } from "@marko/babel-types";
import write from "../util/vdom-out-write";

export default function(path) {
  const { node } = path;

  path.replaceWith(write("t", t.stringLiteral(decode(node.value))));
}

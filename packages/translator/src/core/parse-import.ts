import { types as t, NodePath } from "@marko/babel-types";
import { parseScript } from "@marko/babel-utils";

export default function (tag: NodePath<t.MarkoTag>) {
  const { node } = tag;
  tag.replaceWith(
    parseScript(tag.hub.file, node.rawValue!, node.start!).body[0]
  );
}

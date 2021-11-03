import type { types as t } from "@marko/compiler";
import { parseScript } from "@marko/babel-utils";

export default function (tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  tag.replaceWith(
    parseScript(tag.hub.file, node.rawValue!, node.start!).body[0]
  );
}

import type { types as t } from "@marko/compiler";

export default function enter(tag: t.NodePath<t.MarkoTag>) {
  tag.remove();
}

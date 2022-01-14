import type { types as t } from "@marko/compiler";
import evaluate from "./util/evaluate";
import visit from "./util/visit";

export default function Placeholder(
  placeholder: t.NodePath<t.MarkoPlaceholder>
) {
  const { confident, computed } = evaluate(placeholder);

  if (!(confident && (placeholder.node.escape || !computed))) {
    visit(placeholder);
  }
}

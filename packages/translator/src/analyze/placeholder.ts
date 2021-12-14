import type { types as t } from "@marko/compiler";
import evaluate from "./util/evaluate";
import visit from "./util/visit";

export default function Placeholder(
  placeholder: t.NodePath<t.MarkoPlaceholder>
) {
  if (isNotComputed(placeholder)) {
    visit(placeholder);
  }
}

function isNotComputed(attr: t.NodePath<t.MarkoPlaceholder>) {
  return !evaluate(attr).confident;
}

import type { types as t } from "@marko/compiler";
import evaluate from "../util/evaluate";
import visit from "../util/visit";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    if (tag.has("var") || tag.get("attributes").some(isNotComputed)) {
      visit(tag);
    }
  },
};

function isNotComputed(
  attr: t.NodePath<t.MarkoAttribute | t.MarkoSpreadAttribute>
) {
  return !evaluate(attr).confident;
}

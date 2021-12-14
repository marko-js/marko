import type { types as t } from "@marko/compiler";
import evaluate from "../util/evaluate";
import reserveScope from "../util/reserves";
import visit from "../util/visit";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    const attrs = tag.get("attributes");
    let shouldVisit = tag.has("var");

    if (attrs.some(isSpreadAttr)) {
      // TODO
    } else {
      for (const attr of attrs as t.NodePath<t.MarkoAttribute>[]) {
        const { name } = attr.node;

        if (name.startsWith("on")) {
          shouldVisit = true;
          reserveScope(attr, 1);
        } else {
          const { confident } = evaluate(attr);
          shouldVisit = shouldVisit || !confident;
        }
      }
    }

    if (shouldVisit) {
      visit(tag);
    }
  },
};

function isSpreadAttr(
  attr: t.NodePath<t.MarkoAttribute | t.MarkoSpreadAttribute>
): attr is t.NodePath<t.MarkoAttribute> {
  return attr.type === "MarkoSpreadAttribute";
}

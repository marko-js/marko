import type { types as t } from "@marko/compiler";
import evaluate from "../util/evaluate";
import {
  Section,
  ReserveType,
  getSection,
  reserveScope,
} from "../util/sections";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const attrs = tag.get("attributes");
    let section: Section | undefined = tag.has("var")
      ? getSection(tag)
      : undefined;

    if (attrs.some(isSpreadAttr)) {
      // TODO
    } else {
      for (const attr of attrs as t.NodePath<t.MarkoAttribute>[]) {
        const attrNode = attr.node;
        const { name } = attrNode;

        if (name.startsWith("on")) {
          section ||= getSection(tag);
          reserveScope(ReserveType.Store, section, attrNode, name);
        } else if (!evaluate(attr).confident) {
          section ||= getSection(tag);
        }
      }
    }

    if (section) {
      reserveScope(
        ReserveType.Visit,
        section,
        node,
        (node.name as t.StringLiteral).value
      );
    }
  },
};

function isSpreadAttr(
  attr: t.NodePath<t.MarkoAttribute | t.MarkoSpreadAttribute>
): attr is t.NodePath<t.MarkoAttribute> {
  return attr.type === "MarkoSpreadAttribute";
}

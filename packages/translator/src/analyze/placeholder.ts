import type { types as t } from "@marko/compiler";
import evaluate from "./util/evaluate";
import { ReserveType, getSection, reserveScope } from "./util/sections";

export default function Placeholder(
  placeholder: t.NodePath<t.MarkoPlaceholder>
) {
  const { node } = placeholder;
  const { confident, computed } = evaluate(placeholder);

  if (!(confident && (node.escape || !computed))) {
    reserveScope(
      ReserveType.Visit,
      getSection(placeholder),
      node,
      "placeholder"
    );
  }
}

import { types as t } from "@marko/compiler";
import { isNativeTag } from "@marko/babel-utils";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import { writeHTML } from "../util/html-write";

const ESCAPE_TYPES = {
  script: "escapeScript",
  style: "escapeStyle"
} as Record<string, string>;

export default function (placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const { node, parentPath } = placeholder;
  const { confident, value: computed } = placeholder.get("value").evaluate();
  const write = writeHTML(placeholder);
  let value: string | t.Expression = node.value;

  if (node.escape) {
    const parentTagName =
      (parentPath.isMarkoTag() &&
        isNativeTag(parentPath) &&
        (parentPath.node.name as t.StringLiteral).value) ||
      "";
    const escapeType = (ESCAPE_TYPES[parentTagName] || "escapeXML") as
      | "escapeScript"
      | "escapeStyle"
      | "escapeXML";

    value = confident
      ? getHTMLRuntime(placeholder)[escapeType](computed)
      : callRuntime(placeholder, escapeType, value);
  } else {
    value = confident
      ? getHTMLRuntime(placeholder).toString(computed)
      : callRuntime(placeholder, "toString", value);
  }

  if (node.extra.references) {
    write`${callRuntime(placeholder, "hydrateMarker")}`;
  }

  write`${value}`;
  placeholder.remove();
}

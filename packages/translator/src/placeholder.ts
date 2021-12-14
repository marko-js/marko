import { types as t } from "@marko/compiler";
import { isNativeTag } from "@marko/babel-utils";
import { isOutputHTML } from "./util/marko-config";
import { callRuntime, getHTMLRuntime } from "./util/runtime";
import * as writer from "./util/writer";

const ESCAPE_TYPES = {
  script: "escapeScript",
  style: "escapeStyle",
} as Record<string, string>;

type HTMLMethod = "escapeScript" | "escapeStyle" | "escapeXML" | "toString";
type DOMMethod = "html" | "data";

export default function (placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const isHTML = isOutputHTML(placeholder);
  const write = writer.writeTo(placeholder);
  const extra = placeholder.node.extra;
  const { confident, computed } = extra;
  const canWriteHTML =
    isHTML || (confident && (placeholder.node.escape || !computed));
  const method = canWriteHTML
    ? placeholder.node.escape
      ? ESCAPE_TYPES[getParentTagName(placeholder)] || "escapeXML"
      : "toString"
    : placeholder.node.escape
    ? "data"
    : "html";

  const visitIndex = writer.visit(placeholder, writer.WalkCodes.Replace);

  if (confident && canWriteHTML) {
    write`${getHTMLRuntime(placeholder)[method as HTMLMethod](computed)}`;
  } else if (isHTML) {
    write`${callRuntime(
      placeholder,
      method as HTMLMethod | DOMMethod,
      placeholder.node.value
    )}`;
  } else {
    write`<!>`;
    writer.addStatement(
      "apply",
      placeholder,
      extra.valueReferences,
      t.expressionStatement(
        callRuntime(
          placeholder,
          method as DOMMethod,
          t.numericLiteral(visitIndex!),
          placeholder.node.value
        )
      )
    );
  }

  writer.enterShallow(placeholder);
  placeholder.remove();
}

function getParentTagName({ parentPath }: t.NodePath<t.MarkoPlaceholder>) {
  return (
    (parentPath.isMarkoTag() &&
      isNativeTag(parentPath) &&
      (parentPath.node.name as t.StringLiteral).value) ||
    ""
  );
}

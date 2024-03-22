import { isNativeTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";
import evaluate from "../util/evaluate";
import { isCoreTag } from "../util/is-core-tag";
import { isOutputHTML } from "../util/marko-config";
import {
  SourceType,
  createSelfReference,
  getScopeAccessorLiteral,
  type Reference,
} from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "./program";

const kRef = Symbol("placeholder node reference");

declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kRef]?: Reference;
  }
}

const ESCAPE_TYPES = {
  script: "escapeScript",
  style: "escapeStyle",
} as Record<string, string>;

type HTMLMethod = "escapeScript" | "escapeStyle" | "escapeXML" | "toString";
type DOMMethod = "html" | "data";

export default {
  analyze(placeholder: t.NodePath<t.MarkoPlaceholder>) {
    const { node } = placeholder;
    const { confident, computed } = evaluate(placeholder);

    if (!(confident && (node.escape || !computed))) {
      (node.extra ??= {}).placeholderNodeReference = createSelfReference(
        placeholder,
        placeholder.scope.generateUid("placeholder"),
        SourceType.dom,
        undefined,
        node.value.extra,
      );
      needsMarker(placeholder);
    }
  },
  translate: {
    exit(placeholder: t.NodePath<t.MarkoPlaceholder>) {
      const isHTML = isOutputHTML();
      const write = writer.writeTo(placeholder);
      const { node } = placeholder;
      const { value } = node;
      const extra = node.extra!;
      const { confident, computed } = extra;
      const nodeRef = extra[kRef]!;
      const canWriteHTML = isHTML || (confident && (node.escape || !computed));
      const method = canWriteHTML
        ? node.escape
          ? ESCAPE_TYPES[getParentTagName(placeholder)] || "escapeXML"
          : "toString"
        : node.escape
          ? "data"
          : "html";

      if (confident && canWriteHTML) {
        write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
      } else {
        if (extra.needsMarker) {
          walks.visit(placeholder, WalkCode.Replace);
        } else {
          if (!isHTML) write` `;
          walks.visit(placeholder, WalkCode.Get);
        }

        if (isHTML) {
          write`${callRuntime(method as HTMLMethod | DOMMethod, value)}`;
          writer.markNode(placeholder, nodeRef);
        } else {
          addStatement(
            "render",
            getSection(placeholder),
            value.extra?.references,
            t.expressionStatement(
              method === "data"
                ? callRuntime(
                    "data",
                    t.memberExpression(
                      scopeIdentifier,
                      getScopeAccessorLiteral(nodeRef),
                      true,
                    ),
                    value,
                  )
                : callRuntime(
                    "html",
                    scopeIdentifier,
                    value,
                    getScopeAccessorLiteral(nodeRef),
                  ),
            ),
          );
        }
      }

      walks.enterShallow(placeholder);
      placeholder.remove();
    },
  },
};

function getParentTagName({ parentPath }: t.NodePath<t.MarkoPlaceholder>) {
  return (
    (parentPath.isMarkoTag() &&
      isNativeTag(parentPath) &&
      (parentPath.node.name as t.StringLiteral).value) ||
    ""
  );
}

function noOutput(path: t.NodePath<t.Node>) {
  return (
    t.isMarkoComment(path) ||
    (t.isMarkoTag(path) &&
      isCoreTag(path) &&
      ["let", "const", "effect", "lifecycle", "attrs", "get", "id"].includes(
        path.node.name.value,
      ))
  );
}

function needsMarker(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  let prev = placeholder.getPrevSibling();

  while (prev.node && noOutput(prev)) {
    prev = prev.getPrevSibling();
  }
  if (
    (prev.node || t.isProgram(placeholder.parentPath)) &&
    !(t.isMarkoTag(prev) && isNativeTag(prev as t.NodePath<t.MarkoTag>))
  ) {
    return (placeholder.node.extra!.needsMarker = true);
  }

  let next = placeholder.getNextSibling();
  while (next.node && noOutput(next)) {
    next = next.getNextSibling();
  }
  if (
    (next.node || t.isProgram(placeholder.parentPath)) &&
    !(t.isMarkoTag(next) && isNativeTag(next as t.NodePath<t.MarkoTag>))
  ) {
    return (placeholder.node.extra!.needsMarker = true);
  }

  return (placeholder.node.extra!.needsMarker = false);
}

import { isNativeTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";
import evaluate from "../util/evaluate";
import { isCoreTag } from "../util/is-core-tag";
import { isStatefulReferences } from "../util/is-stateful";
import { isOutputHTML } from "../util/marko-config";
import {
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  type Binding,
} from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import {
  ContentType,
  getNodeContentType,
  getOrCreateSection,
  getSection,
} from "../util/sections";
import { addStatement } from "../util/signals";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "./program";

const noOutputCoreTags = new Set([
  "attrs",
  "const",
  "define",
  "effect",
  "get",
  "id",
  "let",
  "lifecycle",
  "return",
]);
const kBinding = Symbol("placeholder node binding");
const kSiblingText = Symbol("placeholder has sibling text");
enum SiblingText {
  none,
  before,
  after,
}
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kBinding]?: Binding;
    [kSiblingText]?: SiblingText;
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
      (node.extra ??= {})[kBinding] = createBinding(
        "#text",
        BindingType.dom,
        getOrCreateSection(placeholder),
        undefined,
        node.value.extra,
      );
      analyzeSiblingText(placeholder);
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
      const nodeBinding = extra[kBinding]!;
      const canWriteHTML = isHTML || (confident && (node.escape || !computed));
      const method = canWriteHTML
        ? node.escape
          ? ESCAPE_TYPES[getParentTagName(placeholder)] || "escapeXML"
          : "toString"
        : node.escape
          ? "data"
          : "html";
      const isStateful = isStatefulReferences(value.extra?.referencedBindings);
      const siblingText = extra[kSiblingText]!;

      if (confident && canWriteHTML) {
        write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
      } else {
        if (siblingText) {
          if (isHTML && isStateful && siblingText === SiblingText.before) {
            write`<!>`;
          }
          walks.visit(placeholder, WalkCode.Replace);
        } else {
          if (!isHTML) write` `;
          walks.visit(placeholder, WalkCode.Get);
        }

        if (isHTML) {
          write`${callRuntime(method as HTMLMethod | DOMMethod, value)}`;
          if (isStateful) {
            writer.markNode(placeholder, nodeBinding);
          }
        } else {
          addStatement(
            "render",
            getSection(placeholder),
            value.extra?.referencedBindings,
            t.expressionStatement(
              method === "data"
                ? callRuntime(
                    "data",
                    t.memberExpression(
                      scopeIdentifier,
                      getScopeAccessorLiteral(nodeBinding),
                      true,
                    ),
                    value,
                  )
                : callRuntime(
                    "html",
                    scopeIdentifier,
                    value,
                    getScopeAccessorLiteral(nodeBinding),
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
  if (path.node) {
    if (t.isMarkoComment(path)) {
      return true;
    }

    if (t.isMarkoTag(path)) {
      if (isCoreTag(path) && noOutputCoreTags.has(path.node.name.value)) {
        return true;
      }
    }
  }

  return false;
}

function analyzeSiblingText(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const placeholderExtra = placeholder.node.extra!;
  let prev = placeholder.getPrevSibling();

  while (
    prev.node &&
    getNodeContentType(
      prev as t.NodePath<t.Statement>,
      "endNodeContentType",
    ) === ContentType.Empty
  ) {
    prev = prev.getPrevSibling();
  }
  if (
    (prev.node || t.isProgram(placeholder.parentPath)) &&
    !(t.isMarkoTag(prev) && isNativeTag(prev as t.NodePath<t.MarkoTag>))
  ) {
    return (placeholderExtra[kSiblingText] = SiblingText.before);
  }

  let next = placeholder.getNextSibling();
  while (
    next.node &&
    getNodeContentType(
      next as t.NodePath<t.Statement>,
      "startNodeContentType",
    ) === ContentType.Empty
  ) {
    next = next.getNextSibling();
  }
  if (
    (next.node || t.isProgram(placeholder.parentPath)) &&
    !(t.isMarkoTag(next) && isNativeTag(next as t.NodePath<t.MarkoTag>))
  ) {
    return (placeholderExtra[kSiblingText] = SiblingText.after);
  }

  return (placeholderExtra[kSiblingText] = SiblingText.none);
}

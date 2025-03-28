import { types as t } from "@marko/compiler";

import { WalkCode } from "../../common/types";
import { getDynamicSourcesForReferences } from "../util/dynamic-sources";
import evaluate from "../util/evaluate";
import { isCoreTag } from "../util/is-core-tag";
import { isOutputHTML } from "../util/marko-config";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
} from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import {
  ContentType,
  getNodeContentType,
  getOrCreateSection,
  getSection,
} from "../util/sections";
import { addStatement } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "./program";

const kBinding = Symbol("placeholder node binding");
const kSiblingText = Symbol("placeholder has sibling text");
enum SiblingText {
  None,
  Before,
  After,
}
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kBinding]?: Binding;
    [kSiblingText]?: SiblingText;
  }
}

type HTMLMethod = "escapeXML" | "toString";
type DOMMethod = "html" | "data";

export default {
  analyze(placeholder) {
    if (isNonHTMLPlaceholder(placeholder)) return;

    const { node } = placeholder;
    const { confident, computed } = evaluate(node.value);

    if (!(confident && (node.escape || isVoid(computed)))) {
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
    exit(placeholder) {
      const { node } = placeholder;
      const { value } = node;
      const { confident, computed, referencedBindings } = evaluate(value);

      if (confident && isVoid(computed)) {
        placeholder.remove();
        return;
      }

      const isHTML = isOutputHTML();
      const write = writer.writeTo(placeholder);
      const extra = node.extra || {};
      const nodeBinding = extra[kBinding]!;
      const canWriteHTML = isHTML || (confident && node.escape);
      const method = canWriteHTML
        ? node.escape
          ? "escapeXML"
          : "toString"
        : node.escape
          ? "data"
          : "html";
      const serializeReason =
        getDynamicSourcesForReferences(referencedBindings);
      const siblingText = extra[kSiblingText]!;

      if (confident && canWriteHTML) {
        write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
      } else {
        if (siblingText === SiblingText.Before) {
          if (isHTML && serializeReason) {
            write`<!>`;
          }
          walks.visit(placeholder, WalkCode.Replace);
        } else if (siblingText === SiblingText.After) {
          walks.visit(placeholder, WalkCode.Replace);
        } else {
          if (!isHTML) write` `;
          walks.visit(placeholder, WalkCode.Get);
        }

        if (isHTML) {
          write`${callRuntime(method as HTMLMethod | DOMMethod, value)}`;
          if (serializeReason) {
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
} satisfies TemplateVisitor<t.MarkoPlaceholder>;

function analyzeSiblingText(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const placeholderExtra = placeholder.node.extra!;
  let prev = placeholder.getPrevSibling();
  while (prev.node) {
    const contentType = getNodeContentType(
      prev as t.NodePath<t.Statement>,
      "endType",
    );
    if (contentType === null) {
      prev = prev.getPrevSibling();
    } else if (
      contentType === ContentType.Text ||
      contentType === ContentType.Dynamic ||
      contentType === ContentType.Placeholder
    ) {
      return (placeholderExtra[kSiblingText] = SiblingText.Before);
    } else {
      break;
    }
  }
  if (!prev.node && t.isProgram(placeholder.parentPath)) {
    return (placeholderExtra[kSiblingText] = SiblingText.Before);
  }
  let next = placeholder.getNextSibling();
  while (next.node) {
    const contentType = getNodeContentType(
      next as t.NodePath<t.Statement>,
      "startType",
    );
    if (contentType === null) {
      next = next.getNextSibling();
    } else if (
      contentType === ContentType.Text ||
      contentType === ContentType.Dynamic ||
      contentType === ContentType.Placeholder
    ) {
      return (placeholderExtra[kSiblingText] = SiblingText.After);
    } else {
      break;
    }
  }
  if (!next.node && t.isProgram(placeholder.parentPath)) {
    return (placeholderExtra[kSiblingText] = SiblingText.After);
  }

  return (placeholderExtra[kSiblingText] = SiblingText.None);
}

function isNonHTMLPlaceholder(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const parentTag =
    placeholder.parentPath.isMarkoTagBody() &&
    placeholder.parentPath.parentPath;
  if (parentTag && isCoreTag(parentTag)) {
    switch (parentTag.node.name.value) {
      case "html-comment":
      case "html-script":
      case "html-style":
        return true;
    }
  }

  return false;
}

function isVoid(value: unknown) {
  return value == null || value === false;
}

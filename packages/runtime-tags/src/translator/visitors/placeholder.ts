import { types as t } from "@marko/compiler";

import { WalkCode } from "../../common/types";
import evaluate from "../util/evaluate";
import { isNonHTMLText } from "../util/is-non-html-text";
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
import {
  addBindingSerializeReasonExpr,
  getBindingSerializeReason,
} from "../util/serialize-reasons";
import { addStatement } from "../util/signals";
import type { TemplateVisitor } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "./program";
import { getSerializeGuard } from "./program/html";

const kNodeBinding = Symbol("placeholder node binding");
const kSiblingText = Symbol("placeholder has sibling text");
const kSharedText = Symbol(
  "placeholder will merge its visitor with a another node",
);
enum SiblingText {
  None,
  Before,
  After,
}
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kNodeBinding]?: Binding;
    [kSiblingText]?: SiblingText;
    [kSharedText]?: true;
  }
}

type HTMLMethod = "escapeXML" | "toString";
type DOMMethod = "html" | "data";

export default {
  analyze(placeholder) {
    if (isNonHTMLText(placeholder)) return;

    const { node } = placeholder;
    const valueExtra = evaluate(node.value);
    const { confident, computed } = valueExtra;
    if (confident && isVoid(computed)) return;

    if (isStaticText(node)) {
      if (isStaticText(getPrev(placeholder))) {
        (node.extra ??= {})[kSharedText] = true;
      }
    } else {
      const section = getOrCreateSection(placeholder);
      const nodeBinding = ((node.extra ??= {})[kNodeBinding] = createBinding(
        "#text",
        BindingType.dom,
        section,
      ));
      analyzeSiblingText(placeholder);
      addBindingSerializeReasonExpr(section, nodeBinding, valueExtra);
    }
  },
  translate: {
    exit(placeholder) {
      if (isNonHTMLText(placeholder)) return;

      const { node } = placeholder;
      const { value } = node;
      const valueExtra = evaluate(value);
      const { confident, computed } = valueExtra;

      if (confident && isVoid(computed)) {
        placeholder.remove();
        return;
      }

      const isHTML = isOutputHTML();
      const write = writer.writeTo(placeholder);
      const extra = node.extra || {};
      const nodeBinding = extra[kNodeBinding];
      const canWriteHTML = isHTML || (confident && node.escape);
      const method = canWriteHTML
        ? node.escape
          ? "escapeXML"
          : "toString"
        : node.escape
          ? "data"
          : "html";

      if (confident && canWriteHTML) {
        write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
      } else {
        const section = getSection(placeholder);
        const siblingText = extra[kSiblingText]!;
        const markerSerializeReason =
          nodeBinding && getBindingSerializeReason(section, nodeBinding);

        if (siblingText === SiblingText.Before) {
          if (isHTML && markerSerializeReason) {
            if (markerSerializeReason === true || markerSerializeReason.state) {
              write`<!>`;
            } else {
              write`${callRuntime("commentSeparator", getSerializeGuard(markerSerializeReason, true))}`;
            }
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
          if (nodeBinding) {
            writer.markNode(placeholder, nodeBinding, markerSerializeReason);
          }
        } else {
          addStatement(
            "render",
            getSection(placeholder),
            valueExtra.referencedBindings,
            t.expressionStatement(
              method === "data"
                ? callRuntime(
                    "data",
                    t.memberExpression(
                      scopeIdentifier,
                      getScopeAccessorLiteral(nodeBinding!),
                      true,
                    ),
                    value,
                  )
                : callRuntime(
                    "html",
                    scopeIdentifier,
                    value,
                    getScopeAccessorLiteral(nodeBinding!),
                  ),
            ),
          );
        }
      }

      if (!extra[kSharedText]) {
        walks.enterShallow(placeholder);
      }
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

function isVoid(value: unknown) {
  return value == null || value === false;
}

function isStaticText(node?: t.Node) {
  switch (node?.type) {
    case "MarkoText":
      return true;
    case "MarkoPlaceholder": {
      if (node.escape) {
        const { confident, computed } = evaluate(node.value);
        return confident && !isVoid(computed);
      } else {
        return false;
      }
    }
  }
}

function getPrev(path: t.NodePath) {
  let prev = path.getPrevSibling();
  while (
    prev.node &&
    (prev.isMarkoComment() ||
      (prev.isMarkoPlaceholder() && isEmptyPlaceholder(prev.node)))
  ) {
    prev = prev.getPrevSibling();
  }

  return prev.node;
}

function isEmptyPlaceholder(placeholder: t.MarkoPlaceholder) {
  const { confident, computed } = evaluate(placeholder.value);
  return confident && isVoid(computed);
}

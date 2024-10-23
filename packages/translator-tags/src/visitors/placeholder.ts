import { isNativeTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";

import evaluate from "../util/evaluate";
import { isStatefulReferences } from "../util/is-stateful";
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

const ESCAPE_TYPES = {
  script: "escapeScript",
  style: "escapeStyle",
} as Record<string, string>;

type HTMLMethod = "escapeScript" | "escapeStyle" | "escapeXML" | "toString";
type DOMMethod = "html" | "data";

export default {
  analyze(placeholder) {
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
    exit(placeholder) {
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
        if (siblingText === SiblingText.Before) {
          if (isHTML && isStateful) {
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
} satisfies TemplateVisitor<t.MarkoPlaceholder>;

function getParentTagName({ parentPath }: t.NodePath<t.MarkoPlaceholder>) {
  return (
    (parentPath.isMarkoTag() &&
      isNativeTag(parentPath) &&
      (parentPath.node.name as t.StringLiteral).value) ||
    ""
  );
}

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

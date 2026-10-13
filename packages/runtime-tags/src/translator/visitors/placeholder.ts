import { types as t } from "@marko/compiler";

import { BindingType, createBinding } from "../util/bindings";
import { injectTextCoercion } from "../util/body-to-text-literal";
import evaluate from "../util/evaluate";
import { isOutputHTML } from "../util/marko-config";
import normalizeStringExpression from "../util/normalize-string-expression";
import { addReasonExprs } from "../util/reasons";
import { getReferencedBindings } from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import { createScopeReadExpression, scopeIdentifier } from "../util/scope-read";
import {
  ContentType,
  getNodeContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addStatement } from "../util/signals";
import { getSlot } from "../util/slots";
import {
  getPrevStaticSibling,
  getStaticPlaceholderText,
  isStaticText,
} from "../util/static-text";
import * as structure from "../util/structure";
import { getTagFacts, isNonHTMLText } from "../util/tag-facts";
import type { TemplateVisitor } from "../util/visitors";
import { getWriteGuard, getWriteReason } from "../util/write-guard";
import * as writer from "../util/writer";
import * as SiblingText from "./constants/sibling-text";

const kSiblingText = Symbol("placeholder has sibling text");
type SiblingText = SiblingText.Value;
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kSiblingText]?: SiblingText;
  }
}

type HTMLMethod = "_escape" | "_unescaped";

export default {
  analyze: {
    enter(placeholder) {
      if (isNonHTMLText(placeholder)) return;

      const { node } = placeholder;
      const valueExtra = (node.value.extra ??= {});
      if (getStaticPlaceholderText(node) === "") return;

      if (!isStaticText(node)) {
        const section = getOrCreateSection(placeholder);
        const nodeBinding = ((node.extra ??= {}).nodeBinding = createBinding(
          "#text",
          BindingType.dom,
          section,
        ));
        analyzeSiblingText(placeholder);
        addSetupExpr(section, node.value);
        addReasonExprs(getSlot(nodeBinding), valueExtra);
      }
    },
    exit(placeholder) {
      if (isNonHTMLText(placeholder)) return;

      const { node } = placeholder;
      const staticText = getStaticPlaceholderText(node);
      if (staticText === "") return;

      const extra = node.extra || {};
      if (staticText !== undefined && node.escape) {
        structure.writeTextTo(placeholder, staticText);
      } else {
        const siblingText = extra[kSiblingText]!;
        const nodeBinding = extra.nodeBinding!;
        const { content } = getSection(placeholder);
        if (
          siblingText === SiblingText.Before ||
          siblingText === SiblingText.After ||
          // A lone text node is cloned without a parent, and `_html` needs one.
          (!node.escape &&
            content!.singleChild &&
            content!.startType === ContentType.Placeholder)
        ) {
          structure.marker(placeholder, nodeBinding);
        } else {
          structure.writeTextTo(placeholder, " ");
          structure.node(placeholder, nodeBinding);
        }
      }

      // Adjacent static text merges into one DOM text node, so only the run's
      // first node emits its walk step; later nodes defer to it.
      if (
        !isStaticText(node) ||
        !isStaticText(getPrevStaticSibling(placeholder))
      ) {
        structure.enterShallow(placeholder);
      }
    },
  },
  translate: {
    exit: translateExit,
  },
} satisfies TemplateVisitor<t.MarkoPlaceholder>;

function translateExit(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  if (isNonHTMLText(placeholder)) return;

  const { node } = placeholder;
  const { value } = node;
  // Restore `_to_text` on a flattened `<if>` now that the output is known.
  if (node.extra?.rawText) {
    injectTextCoercion(value);
  }
  if (getStaticPlaceholderText(node) === "") {
    placeholder.remove();
    return;
  }

  const { confident, computed } = evaluate(value);

  const isHTML = isOutputHTML();
  const write = writer.writeTo(placeholder);
  const extra = node.extra || {};
  const nodeBinding = extra.nodeBinding;
  const canWriteHTML = isHTML || (confident && node.escape);
  const method = canWriteHTML
    ? node.escape
      ? "_escape"
      : "_unescaped"
    : node.escape
      ? "_text"
      : "_html";

  if (confident && canWriteHTML) {
    if (isHTML) {
      write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
    }
  } else {
    const section = getSection(placeholder);
    const siblingText = extra[kSiblingText]!;
    const markerReason = nodeBinding && getWriteReason(nodeBinding);

    if (isHTML) {
      if (markerReason) {
        // `2` (or a guard scaled to 0/2) also asks the runtime to write a
        // `<!>` between non-empty text and the mergeable text before it.
        const guard = getWriteGuard(section, markerReason, true);
        write`${callRuntime(
          node.escape ? "_text_resume" : "_html_resume",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(nodeBinding!),
          value,
          siblingText === SiblingText.Before
            ? guard
              ? t.binaryExpression("*", guard, t.numericLiteral(2))
              : t.numericLiteral(2)
            : guard,
        )}`;
      } else {
        write`${
          method === "_escape"
            ? buildEscapedTextExpression(value)
            : callRuntime(method as HTMLMethod, value)
        }`;
      }
    } else {
      addStatement(
        "render",
        section,
        getReferencedBindings(value.extra),
        method === "_text"
          ? callRuntime("_text", createScopeReadExpression(nodeBinding!), value)
          : callRuntime(
              "_html",
              scopeIdentifier,
              value,
              getScopeAccessorLiteral(nodeBinding!),
            ),
        true,
      );
    }
  }

  placeholder.remove();
}

// Produces an expression equivalent to `_escape(value)` that escapes as little as
// possible: static strings at compile time, dynamic leaves wrapped individually.
function buildEscapedTextExpression(value: t.Expression): t.Expression {
  const { _escape } = getHTMLRuntime();
  switch (value.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return t.stringLiteral(_escape(value.value));
    case "NullLiteral":
      return t.stringLiteral("");
    case "ConditionalExpression":
      return t.conditionalExpression(
        value.test,
        buildEscapedTextExpression(value.consequent),
        buildEscapedTextExpression(value.alternate),
      );
    case "TemplateLiteral": {
      const parts: (string | t.Expression)[] = [];
      value.quasis.forEach((quasi, i) => {
        parts.push(_escape(quasi.value.cooked ?? ""));
        const expression = value.expressions[i];
        if (expression) {
          // Match the coercion a template literal applies (`null` becomes `"null"`,
          // not `""`) before escaping, so this equals escaping the whole literal.
          parts.push(
            callRuntime(
              "_escape",
              t.templateLiteral(
                [
                  t.templateElement({ raw: "" }),
                  t.templateElement({ raw: "" }, true),
                ],
                [expression as t.Expression],
              ),
            ),
          );
        }
      });
      return normalizeStringExpression(parts) ?? t.stringLiteral("");
    }
    default:
      return callRuntime("_escape", value);
  }
}

function analyzeSiblingText(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  placeholder.node.extra![kSiblingText] = hasSiblingText(placeholder, true)
    ? SiblingText.Before
    : hasSiblingText(placeholder, false)
      ? SiblingText.After
      : SiblingText.None;
}

// Whether text the placeholder's text node may merge with is on one side of it,
// past what renders nothing and out through bodies rendered in place.
function hasSiblingText(
  placeholder: t.NodePath<t.MarkoPlaceholder>,
  before: boolean,
) {
  let sibling = getSibling(placeholder, before);
  let parent: t.NodePath = placeholder.parentPath;
  for (;;) {
    if (!sibling.node) {
      const inlinedTag = getInlinedBodyTag(parent);
      if (!inlinedTag) return parent.isProgram();
      sibling = getSibling(inlinedTag, before);
      parent = inlinedTag.parentPath;
    } else {
      const contentType = getNodeContentType(
        sibling as t.NodePath<t.Statement>,
        before ? "endType" : "startType",
      );
      if (contentType !== null) {
        return (
          contentType === ContentType.Text ||
          contentType === ContentType.Dynamic ||
          contentType === ContentType.Placeholder
        );
      }
      sibling = getSibling(sibling, before);
    }
  }
}

function getSibling(path: t.NodePath, before: boolean) {
  return before ? path.getPrevSibling() : path.getNextSibling();
}

// The tag rendering `parent` in its own place and section, so the body's
// edges render against the tag's own siblings.
function getInlinedBodyTag(parent: t.NodePath) {
  if (parent.isMarkoTagBody()) {
    const tag = parent.parentPath as t.NodePath<t.MarkoTag>;
    const facts = getTagFacts(tag);
    if (facts.controlFlow && facts.inlineBody) {
      return tag;
    }
  }
}

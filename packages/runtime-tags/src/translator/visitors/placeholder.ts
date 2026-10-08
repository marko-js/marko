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
import { createScopeReadExpression } from "../util/scope-read";
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
import { getPrevStaticSibling, isStaticText } from "../util/static-text";
import * as structure from "../util/structure";
import { getTagFacts, isNonHTMLText } from "../util/tag-facts";
import type { TemplateVisitor } from "../util/visitors";
import { getWriteGuard, getWriteReason } from "../util/write-guard";
import * as writer from "../util/writer";
import * as SiblingText from "./constants/sibling-text";
import { scopeIdentifier } from "./program";

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
      const { confident, computed } = evaluate(node.value);
      if (
        confident &&
        getHTMLRuntime()[node.escape ? "_escape" : "_unescaped"](computed) ===
          ""
      )
        return;

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
      const { confident, computed } = evaluate(node.value);
      const staticText = confident
        ? getHTMLRuntime()[node.escape ? "_escape" : "_unescaped"](computed)
        : undefined;
      if (staticText === "") return;

      const extra = node.extra || {};
      if (confident && node.escape) {
        structure.writeTextTo(placeholder, staticText!);
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
    exit(placeholder) {
      translateExit(placeholder);
    },
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
  const { confident, computed } = evaluate(value);

  if (
    confident &&
    getHTMLRuntime()[node.escape ? "_escape" : "_unescaped"](computed) === ""
  ) {
    placeholder.remove();
    return;
  }

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
        t.expressionStatement(
          method === "_text"
            ? callRuntime(
                "_text",
                createScopeReadExpression(nodeBinding!),
                value,
              )
            : callRuntime(
                "_html",
                scopeIdentifier,
                value,
                getScopeAccessorLiteral(nodeBinding!),
              ),
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
  const placeholderExtra = placeholder.node.extra!;
  let prev = placeholder.getPrevSibling();
  let prevParent: t.NodePath = placeholder.parentPath;
  for (;;) {
    if (!prev.node) {
      const inlinedTag = getInlinedBodyTag(prevParent);
      if (inlinedTag) {
        prev = inlinedTag.getPrevSibling();
        prevParent = inlinedTag.parentPath;
        continue;
      }
      break;
    }
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
  if (!prev.node && prevParent.isProgram()) {
    return (placeholderExtra[kSiblingText] = SiblingText.Before);
  }
  let next = placeholder.getNextSibling();
  let nextParent: t.NodePath = placeholder.parentPath;
  for (;;) {
    if (!next.node) {
      const inlinedTag = getInlinedBodyTag(nextParent);
      if (inlinedTag) {
        next = inlinedTag.getNextSibling();
        nextParent = inlinedTag.parentPath;
        continue;
      }
      break;
    }
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
  if (!next.node && nextParent.isProgram()) {
    return (placeholderExtra[kSiblingText] = SiblingText.After);
  }

  return (placeholderExtra[kSiblingText] = SiblingText.None);
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

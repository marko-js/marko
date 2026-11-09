import { types as t } from "@marko/compiler";

import { _escape, _unescaped } from "../../html/content";
import { BindingType, createBinding } from "../util/bindings";
import { injectTextCoercion } from "../util/body-to-text";
import buildStringExpression from "../util/build-string-expression";
import evaluate from "../util/evaluate";
import { isOutputHTML } from "../util/marko-config";
import { addReasonExprs } from "../util/reasons";
import { replaceWithStatements } from "../util/replace-with-statements";
import { callRuntime } from "../util/runtime";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import { createScopeReadExpression, scopeIdentifier } from "../util/scope-read";
import {
  ContentType,
  ensureSection,
  getScopeIdIdentifier,
  getSection,
  getSectionTextBefore,
  mayMergeWithText,
} from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addStatement } from "../util/signals";
import { ensureSlot } from "../util/slots";
import {
  followsStaticText,
  getPlaceholderContentType,
  getStaticPlaceholderText,
} from "../util/static-text";
import * as structure from "../util/structure";
import { isInTextBody } from "../util/tag-facts";
import type { TemplateVisitor } from "../util/visitors";
import { getWriteGuard, getWriteReason } from "../util/write-guard";
import * as writer from "../util/writer";

const kTextAfter = Symbol("text may merge after the placeholder");
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    /** Whether text may merge into its text node from after; `undefined` at its
     * section's edge. */
    [kTextAfter]?: boolean;
  }
}

export default {
  analyze: {
    enter(placeholder) {
      if (isInTextBody(placeholder)) return;

      const { node } = placeholder;
      const valueExtra = (node.value.extra ??= {});
      if (getPlaceholderContentType(node) === ContentType.Placeholder) {
        const section = ensureSection(placeholder);
        const nodeBinding = ((node.extra ??= {}).nodeBinding = createBinding(
          "#text",
          BindingType.dom,
          section,
        ));
        analyzeSiblingText(placeholder);
        addSetupExpr(section, node.value);
        addReasonExprs(ensureSlot(nodeBinding), valueExtra);
      }
    },
    exit(placeholder) {
      if (isInTextBody(placeholder)) return;

      const { node } = placeholder;
      const contentType = getPlaceholderContentType(node);
      if (contentType === null) return;

      const extra = node.extra || {};
      if (contentType === ContentType.Text) {
        structure.writeTextTo(placeholder, getStaticPlaceholderText(node)!);
      } else {
        const before = extra.textBefore;
        const after = extra[kTextAfter];
        const { content } = getSection(placeholder);
        structure.text(
          placeholder,
          extra.nodeBinding!,
          before ||
            after ||
            // A lone text node is cloned without a parent, and `_html` needs one.
            (!node.escape &&
              content!.singleChild &&
              content!.startType === ContentType.Placeholder) ||
            // A side at its section's edge leaves it to whether the section is a known child.
            (before === false && after === false ? false : undefined),
        );
      }

      // Adjacent static text merges into one DOM text node, so only the run's
      // first node emits its walk step; later nodes defer to it.
      if (contentType !== ContentType.Text || !followsStaticText(placeholder)) {
        structure.enterShallow(placeholder);
      }
    },
  },
  translate: {
    exit: translateExit,
  },
} satisfies TemplateVisitor<t.MarkoPlaceholder>;

function translateExit(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  if (isInTextBody(placeholder)) return;

  const { node } = placeholder;
  const { value } = node;
  // Restore `_to_text` on a flattened `<if>` now that the output is known.
  if (node.extra?.needsTextCoercion) {
    injectTextCoercion(value);
  }
  if (getPlaceholderContentType(node) === null) {
    replaceWithStatements(placeholder);
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
      write`${node.escape ? _escape(computed) : _unescaped(computed)}`;
    }
  } else {
    const section = getSection(placeholder);
    const markerReason = nodeBinding && getWriteReason(nodeBinding);

    if (isHTML) {
      if (markerReason) {
        // `2` (or a guard scaled to 0/2) also asks the runtime to write a
        // `<!>` between non-empty text and the mergeable text before it.
        const guard = getWriteGuard(section, markerReason, true);
        write`${callRuntime(
          node.escape ? "_text_mark" : "_html_mark",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(nodeBinding!),
          value,
          (extra.textBefore ?? getSectionTextBefore(section) ?? true)
            ? guard
              ? t.binaryExpression("*", guard, t.numericLiteral(2))
              : t.numericLiteral(2)
            : guard,
        )}`;
      } else {
        write`${
          method === "_escape"
            ? buildEscapedTextExpression(value)
            : callRuntime(method, value)
        }`;
      }
    } else {
      addStatement(
        "render",
        section,
        value.extra,
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

  replaceWithStatements(placeholder);
}

// Produces an expression equivalent to `_escape(value)` that escapes as little as
// possible: static strings at compile time, dynamic leaves wrapped individually.
function buildEscapedTextExpression(value: t.Expression): t.Expression {
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
      return buildStringExpression(parts) ?? t.stringLiteral("");
    }
    default:
      return callRuntime("_escape", value);
  }
}

function analyzeSiblingText(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const extra = placeholder.node.extra!;
  extra.textBefore = mayMergeWithText(placeholder, true);
  extra[kTextAfter] = mayMergeWithText(placeholder, false);
}

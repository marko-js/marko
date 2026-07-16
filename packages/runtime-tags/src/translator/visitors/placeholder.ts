import { types as t } from "@marko/compiler";

import { isVoid } from "../../common/helpers";
import { WalkCode } from "../../common/types";
import { injectTextCoercion, kRawText } from "../util/body-to-text-literal";
import evaluate from "../util/evaluate";
import {
  getPatchHolePrefix,
  getPatchHtmlPrefix,
} from "../util/get-accessor-char";
import { isCoreTagName } from "../util/is-core-tag";
import { isNonHTMLText } from "../util/is-non-html-text";
import { isOutputHTML, isPersisted } from "../util/marko-config";
import normalizeStringExpression from "../util/normalize-string-expression";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
} from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import { createScopeReadExpression } from "../util/scope-read";
import {
  ContentType,
  getNodeContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { getSerializeGuard } from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
  isReasonDynamic,
} from "../util/serialize-reasons";
import { addSetupExpr } from "../util/setup-statements";
import { addStatement } from "../util/signals";
import { getPrevStaticSibling, isStaticText } from "../util/static-text";
import {
  addUpdateGlobalsStatement,
  addUpdateMerge,
  isUpdateCoveredByClientSignals,
} from "../util/update-merges";
import type { TemplateVisitor } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "./program";

const kNodeBinding = Symbol("placeholder node binding");
const kSiblingText = Symbol("placeholder has sibling text");
const kSharedText = Symbol(
  "placeholder will merge its visitor with a another node",
);
enum SiblingText {
  None,
  Before,
  After,
  // A non-text node (element/comment) directly precedes: no text to merge
  // with, but resume must not claim that node when the text renders empty.
  NodeBefore,
}
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kNodeBinding]?: Binding;
    [kSiblingText]?: SiblingText;
    [kSharedText]?: true;
  }
}

type HTMLMethod = "_escape" | "_unescaped";
type DOMMethod = "_html" | "_text";

export default {
  analyze(placeholder) {
    if (isNonHTMLText(placeholder)) return;

    const { node } = placeholder;
    const valueExtra = evaluate(node.value);
    const { confident, computed } = valueExtra;
    if (confident && isVoid(computed)) return;

    if (isStaticText(node)) {
      // Only the node that starts a merged static-text run emits the walk step
      // for it. Defer when a previous sibling is static text (it owns the step);
      // deferring on a *following* static sibling instead would drop the step
      // entirely for a run made up solely of static placeholders.
      if (isStaticText(getPrevStaticSibling(placeholder))) {
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
      addSetupExpr(section, node.value);
      addSerializeExpr(section, valueExtra, nodeBinding);
    }
  },
  translate: {
    exit(placeholder) {
      if (isNonHTMLText(placeholder)) return;

      const { node } = placeholder;
      const { value } = node;
      // Restore `_to_text` on a flattened `<if>` now that the output is known.
      if (node.extra?.[kRawText]) {
        injectTextCoercion(value);
      }
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
          ? "_escape"
          : "_unescaped"
        : node.escape
          ? "_text"
          : "_html";

      if (confident && canWriteHTML) {
        write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
      } else {
        const section = getSection(placeholder);
        const siblingText = extra[kSiblingText]!;
        const markerSerializeReason =
          nodeBinding && getSerializeReason(section, nodeBinding);

        if (siblingText === SiblingText.Before) {
          if (isHTML && markerSerializeReason) {
            writeSeparator(write, section, markerSerializeReason);
          }
          walks.visit(placeholder, WalkCode.Replace);
        } else if (siblingText === SiblingText.After) {
          walks.visit(placeholder, WalkCode.Replace);
        } else {
          if (isHTML) {
            // A preceding element/comment would be claimed as the text node
            // when the value serializes empty, so it gets the same
            // protective separator as sibling text.
            if (
              siblingText === SiblingText.NodeBefore &&
              markerSerializeReason
            ) {
              writeSeparator(write, section, markerSerializeReason);
            }
          } else {
            write` `;
          }
          walks.visit(placeholder, WalkCode.Get);
        }

        if (isHTML) {
          const holeValue =
            nodeBinding &&
            isPersisted() &&
            isReasonDynamic(markerSerializeReason) &&
            !isUpdateCoveredByClientSignals(valueExtra)
              ? callRuntime(
                  "_hole_value",
                  getScopeIdIdentifier(section),
                  t.stringLiteral(
                    (method === "_escape"
                      ? getPatchHolePrefix()
                      : getPatchHtmlPrefix()) +
                      getScopeAccessorLiteral(nodeBinding).value,
                  ),
                  value,
                  callRuntime("_persisted_reason"),
                )
              : undefined;
          write`${
            method === "_escape"
              ? holeValue
                ? callRuntime("_escape", holeValue)
                : buildEscapedTextExpression(value)
              : callRuntime(
                  method as HTMLMethod | DOMMethod,
                  holeValue || value,
                )
          }`;
          if (nodeBinding) {
            writer.markNode(placeholder, nodeBinding, markerSerializeReason);
          }
        } else {
          // Update entries merge server-computed hole values (G1) for the
          // same request-derived holes the html output captures.
          if (
            nodeBinding &&
            isReasonDynamic(markerSerializeReason) &&
            !isUpdateCoveredByClientSignals(valueExtra)
          ) {
            const accessor = getScopeAccessorLiteral(nodeBinding);
            const isText = method === "_text";
            addUpdateMerge(section, {
              kind: isText ? "text" : "html",
              key:
                (isText ? getPatchHolePrefix() : getPatchHtmlPrefix()) +
                accessor.value,
              accessor,
            });
          }
          const stmt = t.expressionStatement(
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
          );
          addUpdateGlobalsStatement(section, valueExtra, stmt);
          addStatement(
            "render",
            section,
            valueExtra.referencedBindings,
            stmt,
            undefined,
            true,
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

// Produces an expression equivalent to `_escape(value)` but only escapes the
// parts that need it: static strings are escaped at compile time and dynamic
// leaves are wrapped individually, recursing through the branches of a
// conditional and the parts of a template literal so we escape as little as
// possible.
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
          // Match the coercion a template literal would apply (e.g. `null`
          // stringifies to `"null"`, not `""`) before escaping, so this stays
          // equivalent to escaping the whole template literal.
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

// The `<!>` separator keeps resume from claiming the previous node as the
// placeholder's text node when the serialized text is empty.
function writeSeparator(
  write: ReturnType<typeof writer.writeTo>,
  section: Section,
  reason: Exclude<ReturnType<typeof getSerializeReason>, undefined | false>,
) {
  if (reason === true || reason.state) {
    write`<!>`;
  } else {
    write`${callRuntime("_sep", getSerializeGuard(section, reason, true))}`;
  }
}

function analyzeSiblingText(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const placeholderExtra = placeholder.node.extra!;
  let hasNodeBefore = false;
  let prev = placeholder.getPrevSibling();
  let prevParent: t.NodePath = placeholder.parentPath;
  for (;;) {
    if (!prev.node) {
      // A `<show>` body is inlined into its parent, so a placeholder at the
      // edge of the body renders directly against the tag's own siblings.
      const showTag = getInlinedBodyTag(prevParent);
      if (showTag) {
        prev = showTag.getPrevSibling();
        prevParent = showTag.parentPath;
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
      hasNodeBefore = true;
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
      const showTag = getInlinedBodyTag(nextParent);
      if (showTag) {
        next = showTag.getNextSibling();
        nextParent = showTag.parentPath;
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

  return (placeholderExtra[kSiblingText] = hasNodeBefore
    ? SiblingText.NodeBefore
    : SiblingText.None);
}

// Returns the owner tag when `parent` is the body of a tag that inlines its
// content into the surrounding section (currently only `<show>`), meaning the
// body's edge nodes render adjacent to the tag's siblings.
function getInlinedBodyTag(parent: t.NodePath) {
  if (parent.isMarkoTagBody()) {
    const tag = parent.parentPath;
    if (tag.isMarkoTag() && isCoreTagName(tag, "show")) {
      return tag;
    }
  }
}

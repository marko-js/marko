import { types as t } from "@marko/compiler";

import { WalkCode } from "../../common/types";
import { injectTextCoercion, kRawText } from "../util/body-to-text-literal";
import evaluate from "../util/evaluate";
import { isCoreTagName } from "../util/is-core-tag";
import { isNonHTMLText } from "../util/is-non-html-text";
import { isOutputHTML } from "../util/marko-config";
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
  getSection,
  type Section,
} from "../util/sections";
import { getSerializeGuard } from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../util/serialize-reasons";
import { addSetupExpr } from "../util/setup-statements";
import { addStatement } from "../util/signals";
import { getPrevStaticSibling, isStaticText } from "../util/static-text";
import * as structure from "../util/structure";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";
import * as SiblingText from "./constants/sibling-text";
import { scopeIdentifier } from "./program";

const kNodeBinding = Symbol("placeholder node binding");
const kSiblingText = Symbol("placeholder has sibling text");
const kSeparateWhenEmpty = Symbol("placeholder must resume as its own node");
type SiblingText = SiblingText.Value;
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kNodeBinding]?: Binding;
    [kSiblingText]?: SiblingText;
    [kSeparateWhenEmpty]?: true;
  }
}

type HTMLMethod = "_escape" | "_unescaped";
type DOMMethod = "_html" | "_text";

export default {
  analyze: {
    enter(placeholder) {
      if (isNonHTMLText(placeholder)) return;

      const { node } = placeholder;
      const valueExtra = evaluate(node.value);
      const { confident, computed } = valueExtra;
      if (
        confident &&
        getHTMLRuntime()[node.escape ? "_escape" : "_unescaped"](computed) ===
          ""
      )
        return;

      if (!isStaticText(node)) {
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
        if (
          siblingText === SiblingText.Before ||
          siblingText === SiblingText.After
        ) {
          structure.visit(placeholder, WalkCode.Replace);
        } else {
          structure.writeTextTo(placeholder, " ");
          structure.visit(placeholder, WalkCode.Get);
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
  if (node.extra?.[kRawText]) {
    injectTextCoercion(value);
  }
  const valueExtra = evaluate(value);
  const { confident, computed } = valueExtra;

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
    if (isHTML) {
      write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
    }
  } else {
    const section = getSection(placeholder);
    const siblingText = extra[kSiblingText]!;
    const markerSerializeReason =
      nodeBinding && getSerializeReason(section, nodeBinding);

    if (isHTML) {
      let text =
        method === "_escape"
          ? buildEscapedTextExpression(value)
          : callRuntime(method as HTMLMethod | DOMMethod, value);

      if (markerSerializeReason) {
        if (siblingText === SiblingText.Before) {
          // Sibling text merges into this node, so it always needs separating.
          write`${buildSeparator(section, markerSerializeReason)}`;
        } else if (extra[kSeparateWhenEmpty]) {
          // A sibling node is only claimed when there is no text node at all.
          text = t.logicalExpression(
            "||",
            text,
            buildSeparator(section, markerSerializeReason),
          );
        }
      }

      write`${text}`;
      if (nodeBinding) {
        writer.markNode(placeholder, nodeBinding, markerSerializeReason);
      }
    } else {
      addStatement(
        "render",
        section,
        valueExtra.referencedBindings,
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

// An empty comment for resume to replace with the placeholder's own text node.
function buildSeparator(
  section: Section,
  reason: Exclude<ReturnType<typeof getSerializeReason>, undefined | false>,
) {
  return reason === true || reason.state
    ? t.stringLiteral("<!>")
    : callRuntime("_sep", getSerializeGuard(section, reason, true));
}

function analyzeSiblingText(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  const placeholderExtra = placeholder.node.extra!;
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
      placeholderExtra[kSeparateWhenEmpty] = true;
      break;
    }
  }
  if (!prev.node) {
    if (prevParent.isProgram()) {
      return (placeholderExtra[kSiblingText] = SiblingText.Before);
    }
    // A section's content is resumed as its own range, so its first node
    // cannot be borrowed from whatever the section was rendered against.
    if (prevParent.node.extra?.section) {
      placeholderExtra[kSeparateWhenEmpty] = true;
    }
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

  return (placeholderExtra[kSiblingText] = SiblingText.None);
}

// Returns the owner tag when `parent` is the body of a tag that inlines its
// content into the surrounding section (currently only `<show>`).
function getInlinedBodyTag(parent: t.NodePath) {
  if (parent.isMarkoTagBody()) {
    const tag = parent.parentPath;
    if (tag.isMarkoTag() && isCoreTagName(tag, "show")) {
      return tag;
    }
  }
}

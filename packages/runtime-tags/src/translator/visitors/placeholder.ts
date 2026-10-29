import { types as t } from "@marko/compiler";

import { _escape, _unescaped } from "../../html/content";
import { BindingType, createBinding } from "../util/bindings";
import { injectTextCoercion } from "../util/body-to-text";
import buildStringExpression from "../util/build-string-expression";
import evaluate from "../util/evaluate";
import { isOutputHTML } from "../util/marko-config";
import {
  getFirstValueLet,
  keepsSeededMarker,
  linkHolePatcher,
  writesPatchHole,
} from "../util/patch/decisions";
import {
  getExprRootGroupArgs,
  getHoleGroupArgs,
  getPatchHoleGroupArgs,
} from "../util/patch/writers";
import { addReasonExprs } from "../util/reasons";
import { absentArg, callRuntime } from "../util/runtime";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import { createScopeReadExpression, scopeIdentifier } from "../util/scope-read";
import {
  ContentType,
  getNodeContentType,
  ensureSection,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addStatement } from "../util/signals";
import { ensureSlot } from "../util/slots";
import {
  followsStaticText,
  getStaticPlaceholderText,
  isStaticText,
} from "../util/static-text";
import * as structure from "../util/structure";
import { getTagFacts, isInTextBody } from "../util/tag-facts";
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
      if (isInTextBody(placeholder)) return;

      const { node } = placeholder;
      const valueExtra = (node.value.extra ??= {});
      if (getStaticPlaceholderText(node) === "") return;

      if (!isStaticText(node)) {
        const section = ensureSection(placeholder);
        const nodeBinding = ((node.extra ??= {}).nodeBinding = createBinding(
          "#text",
          BindingType.dom,
          section,
        ));
        analyzeSiblingText(placeholder);
        addSetupExpr(section, node.value);
        addReasonExprs(ensureSlot(nodeBinding), valueExtra);
        valueExtra.rendersValue = true;
        linkHolePatcher(
          section,
          valueExtra,
          node.escape ? "patches/text" : "patches/html",
        );
      }
    },
    exit(placeholder) {
      if (isInTextBody(placeholder)) return;

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
      if (!isStaticText(node) || !followsStaticText(placeholder)) {
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
  const valueExtra = (value.extra ??= {});
  if (getStaticPlaceholderText(node) === "") {
    placeholder.remove();
    return;
  }

  const { confident, computed } = evaluate(value);

  const isHTML = isOutputHTML();
  const write = writer.writeTo(placeholder);
  const extra = node.extra || {};
  const nodeBinding = extra.nodeBinding;
  const section = getSection(placeholder);
  // A state-sourced hole derives through the signal graph, and inside
  // unpatched structure owner fills refresh it: neither patch-writes.
  const patchWrites = !!nodeBinding && writesPatchHole(section, valueExtra);
  // A first-value `<let>`'s function it calls: the server writes it meanwhile.
  const firstValue = !!nodeBinding && !!getFirstValueLet(valueExtra);
  const canWriteHTML = isHTML || (confident && node.escape);
  const method = canWriteHTML
    ? node.escape
      ? "_escape"
      : "_unescaped"
    : node.escape
      ? "_text"
      : "_html";

  // Static markup has no template text to ride: a created scope gets it
  // from the flush like a dynamic hole.
  if (confident && canWriteHTML && !(isHTML && patchWrites && !node.escape)) {
    if (isHTML) {
      write`${node.escape ? _escape(computed) : _unescaped(computed)}`;
    }
  } else {
    const siblingText = extra[kSiblingText]!;
    const markerReason = nodeBinding && getWriteReason(nodeBinding);
    const isPatchText = isHTML && (patchWrites || !!firstValue);

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
            : guard || absentArg(1),
          // The patch write is also the output and resume writer, so the value
          // evaluates once; its group args follow.
          ...(isPatchText
            ? firstValue
              ? withRewritten(getHoleGroupArgs(section, valueExtra))
              : keepsSeededMarker(section, valueExtra)
                ? [
                    ...getExprRootGroupArgs(section, valueExtra),
                    t.numericLiteral(1),
                  ]
                : getPatchHoleGroupArgs(section, valueExtra)
            : []),
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

  placeholder.remove();
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
  placeholder.node.extra![kSiblingText] = mayMergeWithText(placeholder, true)
    ? SiblingText.Before
    : mayMergeWithText(placeholder, false)
      ? SiblingText.After
      : SiblingText.None;
}

// Whether text the placeholder's text node may merge with is on one side of it,
// past what renders nothing and out through bodies rendered in place.
function mayMergeWithText(
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

// A first-value hole's marker stays whatever its group (client code rewrites
// it once it sets the `<let>`): `rewritten` comes before the `<let>`'s key.
function withRewritten([mask, group, key]: t.Expression[]) {
  return [mask, group, t.numericLiteral(1), key];
}

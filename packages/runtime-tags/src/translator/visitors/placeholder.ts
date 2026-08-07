import { types as t } from "@marko/compiler";

import { isVoid } from "../../common/helpers";
import { WalkCode } from "../../common/types";
import { addAssetImport } from "../util/asset-imports";
import { injectTextCoercion, kRawText } from "../util/body-to-text-literal";
import evaluate from "../util/evaluate";
import { isCoreTagName } from "../util/is-core-tag";
import { isNonHTMLText } from "../util/is-non-html-text";
import { isOutputHTML, isPersisted } from "../util/marko-config";
import normalizeStringExpression from "../util/normalize-string-expression";
import { type Opt } from "../util/optional";
import {
  constructRendersReads,
  ensurePersistedCaptureGroups,
  inClientOwnedStructure,
  isPatchCaptureSection,
} from "../util/persisted";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
} from "../util/references";
import {
  callRuntime,
  getHTMLRuntime,
  getRuntimePath,
  importRuntimeFeature,
} from "../util/runtime";
import { createScopeReadExpression } from "../util/scope-read";
import {
  ContentType,
  getNodeContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import {
  getPatchWriteOwnership,
  getSerializeGuard,
} from "../util/serialize-guard";
import {
  addSerializeReason,
  addSerializeExpr,
  getSerializeReason,
  getSerializeSourcesForExpr,
} from "../util/serialize-reasons";
import { addSetupExpr } from "../util/setup-statements";
import { recordConstructBlocker } from "../util/shell";
import { addStatement } from "../util/signals";
import { getPrevStaticSibling, isStaticText } from "../util/static-text";
import * as structure from "../util/structure";
import type { TemplateVisitor } from "../util/visitors";
import * as writer from "../util/writer";
import * as SiblingText from "./constants/sibling-text";
import { scopeIdentifier } from "./program";

const kNodeBinding = Symbol("placeholder node binding");
const kSiblingText = Symbol("placeholder has sibling text");
type SiblingText = SiblingText.Value;
declare module "@marko/compiler/dist/types" {
  export interface MarkoPlaceholderExtra {
    [kNodeBinding]?: Binding;
    [kSiblingText]?: SiblingText;
  }
}

type HTMLMethod = "_escape" | "_unescaped";
type DOMMethod = "_html" | "_text";

export default {
  analyze: {
    enter(placeholder) {
      if (isNonHTMLText(placeholder)) {
        if (isPersisted() && !evaluate(placeholder.node.value).confident) {
          throw placeholder.buildCodeFrameError(
            "Persisted templates currently support only escaped dynamic text and plain dynamic attributes in native HTML.",
          );
        }
        return;
      }

      const { node } = placeholder;
      const valueExtra = evaluate(node.value);
      const { confident, computed } = valueExtra;
      if (confident && isVoid(computed)) return;

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
        if (isPersisted() && node.escape && isPatchCaptureSection(section)) {
          addSerializeReason(section, true, nodeBinding);
          addAssetImport(
            placeholder.hub.file,
            `${getRuntimePath("dom")}/patch-text.feat`,
          );
          ensurePersistedCaptureGroups(() => valueExtra);
        }
      }
    },
    exit(placeholder) {
      if (isNonHTMLText(placeholder)) return;

      const { node } = placeholder;
      const { confident, computed } = evaluate(node.value);
      if (confident && isVoid(computed)) return;

      const extra = node.extra || {};
      if (confident && node.escape) {
        structure.writeTo(placeholder)`${getHTMLRuntime()._escape(computed)}`;
      } else {
        const siblingText = extra[kSiblingText]!;
        if (
          siblingText === SiblingText.Before ||
          siblingText === SiblingText.After
        ) {
          structure.visit(placeholder, WalkCode.Replace);
        } else {
          structure.writeTo(placeholder)` `;
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
    if (isHTML) {
      write`${getHTMLRuntime()[method as HTMLMethod](computed)}`;
    }
  } else {
    const section = getSection(placeholder);
    const siblingText = extra[kSiblingText]!;
    const markerSerializeReason =
      nodeBinding && getSerializeReason(section, nodeBinding);
    const holeSources =
      isPersisted() && node.escape && isPatchCaptureSection(section)
        ? getSerializeSourcesForExpr(valueExtra)
        : undefined;
    if (holeSources?.state && holeSources.global) {
      throw placeholder.buildCodeFrameError(
        "Persisted templates do not yet support `$global` contributions to stateful expressions.",
      );
    }
    // Seedable local state and direct parent-state closures both construct
    // faithfully (seed fills + the registered INIT render every read);
    // anything else state-fed still drops the shell.
    if (
      holeSources?.state &&
      section.isBranch &&
      !constructRendersReads(
        section,
        valueExtra.referencedBindings as Opt<Binding>,
      )
    ) {
      recordConstructBlocker(section, "state-fed hole");
    }
    // A state-fed hole recomputes through the signal graph, and inside
    // client-owned structure delivery is owner fills: neither captures.
    const isPatch =
      isPersisted() &&
      node.escape &&
      isPatchCaptureSection(section) &&
      !inClientOwnedStructure(section) &&
      !!nodeBinding &&
      !holeSources?.state;
    const isPatchText = isHTML && isPatch;
    // An interactive page receives assets transitively through its dom
    // program, so the feature import rides both outputs.
    if (isPatch && !isHTML) importRuntimeFeature("patch-text");

    if (isHTML && markerSerializeReason) {
      if (siblingText === SiblingText.Before) {
        writeSeparator(write, section, markerSerializeReason);
      } else if (siblingText === SiblingText.NodeBefore) {
        // A preceding element/comment would be claimed as the text node when
        // the value serializes empty, so it gets the same protective separator.
        writeSeparator(write, section, markerSerializeReason);
      }
    }

    if (isHTML) {
      // The capture writes the escaped text itself, so the expression
      // appears (and evaluates) once; a param-fed capture's ownership
      // bit rides as trailing args.
      write`${
        isPatchText
          ? callRuntime(
              "_patch_text",
              getScopeIdIdentifier(section),
              getScopeAccessorLiteral(nodeBinding),
              value,
              ...getPatchWriteOwnership(holeSources),
            )
          : method === "_escape"
            ? buildEscapedTextExpression(value)
            : callRuntime(method as HTMLMethod | DOMMethod, value)
      }`;
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
// content into the surrounding section (currently only `<show>`).
function getInlinedBodyTag(parent: t.NodePath) {
  if (parent.isMarkoTagBody()) {
    const tag = parent.parentPath;
    if (tag.isMarkoTag() && isCoreTagName(tag, "show")) {
      return tag;
    }
  }
}

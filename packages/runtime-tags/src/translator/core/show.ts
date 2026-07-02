import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import evaluate from "../util/evaluate";
import { generateUidIdentifier } from "../util/generate-uid";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import { getSerializeGuard } from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../util/serialize-reasons";
import { addValue, getSignal } from "../util/signals";
import analyzeTagNameType, { TagNameType } from "../util/tag-name-type";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { kSkipEndTag } from "../visitors/tag/native-tag";

const kStatefulReason = Symbol("<show> stateful reason");
const kStartBinding = Symbol("<show> range start binding");
const kStaticDisplay = Symbol("<show> static display");
const kSingleNodeBody = Symbol("<show> single node body");
const kDisplayRef = Symbol("<show> hoisted display reference");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kStartBinding]?: Binding;
    [kStaticDisplay]?: boolean;
    [kSingleNodeBody]?: boolean;
    [kDisplayRef]?: t.Expression;
  }
}

// The `<show>` tag unconditionally renders its body and toggles visibility.
// The body always exists exactly once, so unlike `<if>` it compiles inline
// into the parent section (no renderer, separate scope, or closures) and the
// display value only controls where the body's nodes live: in place when
// shown (tracked as a range via the branch resume marks), parked in a
// detached document fragment when hidden. Server rendered hidden content
// still renders (so it resumes) inside a `<t hidden>` wrapper that dissolves
// lazily the first time the value changes. A resumed page never needs the
// body's template, so only the small range-toggling signal is ever bundled.
export default {
  analyze: {
    enter(tag) {
      assertValidShow(tag);

      const tagExtra = (tag.node.extra ??= {});
      const display = tag.node.attributes[0].value;
      const displayEval = evaluate(display);

      tagExtra[kSingleNodeBody] = isSingleNodeBody(tag);

      if (displayEval.confident) {
        tagExtra[kStaticDisplay] = !!displayEval.computed;
      }

      if (tagExtra[kStaticDisplay] === true) return;

      const tagSection = getOrCreateSection(tag);

      // Bindings are created in walk order. The parent element (only child
      // case) is visited before the body's own bindings, so it is created
      // here; otherwise a marker binding starts the body's node range and the
      // reference node is created at analyze exit (visited after the body).
      if (getOnlyChildParentTagName(tag)) {
        getOptimizedOnlyChildNodeBinding(tag, tagSection);
      } else {
        tagExtra[kStartBinding] = createBinding(
          "#text",
          BindingType.dom,
          tagSection,
        );
      }

      if (tagExtra[kStaticDisplay] === undefined) {
        mergeReferences(tagSection, tag.node, [display]);
        addSerializeExpr(tagSection, tagExtra, kStatefulReason);
      }
    },
    exit(tag) {
      const tagExtra = tag.node.extra!;
      if (tagExtra[kStaticDisplay] === true) return;

      const tagSection = getSection(tag);
      const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);

      if (tagExtra[kStaticDisplay] === undefined) {
        addSerializeExpr(tagSection, tagExtra, nodeBinding);
      }
    },
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagExtra = tag.node.extra!;
        writer.flushBefore(tag);

        const staticDisplay = tagExtra[kStaticDisplay];
        if (staticDisplay === true) return;

        if (staticDisplay === false) {
          writer.writeTo(tag)`<t hidden>`;
          return;
        }

        const display = tag.node.attributes[0].value;
        if (!t.isIdentifier(display) && !isLiteral(display)) {
          // Read once; referenced by both bracketing runtime calls.
          const displayRef = generateUidIdentifier("show");
          tag.insertBefore(
            t.variableDeclaration("const", [
              t.variableDeclarator(displayRef, display),
            ]),
          );
          tagExtra[kDisplayRef] = displayRef;
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;
        const staticDisplay = tagExtra[kStaticDisplay];

        if (staticDisplay === false) {
          writer.writeTo(tag)`</t>`;
        }

        writer.flushInto(tag);

        const bodyStatements = tag.node.body.body as unknown as t.Statement[];

        if (staticDisplay !== undefined) {
          for (const replacement of tag.replaceWithMultiple(bodyStatements)) {
            replacement.skip();
          }
          return;
        }

        const tagSection = getSection(tag);
        const display = tagExtra[kDisplayRef] || tag.node.attributes[0].value;
        const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);
        const onlyChildParentTagName = getOnlyChildParentTagName(tag);
        const singleNode = tagExtra[kSingleNodeBody];
        const statefulReason = getSerializeReason(tagSection, kStatefulReason);
        const markerSerializeReason = getSerializeReason(
          tagSection,
          nodeBinding,
        );
        const skipParentEnd = onlyChildParentTagName && markerSerializeReason;

        if (skipParentEnd) {
          getParentTag(tag)!.node.extra![kSkipEndTag] = true;
        }

        const statefulSerializeArg = getSerializeGuard(
          tagSection,
          statefulReason,
          !(skipParentEnd || singleNode),
        );
        const markerSerializeArg = getSerializeGuard(
          tagSection,
          markerSerializeReason,
          !statefulSerializeArg,
        );

        let startMark: t.Expression | undefined;
        if (!singleNode) {
          startMark = getSerializeGuard(
            tagSection,
            markerSerializeReason,
            false,
          );
          if (skipParentEnd) {
            startMark = t.logicalExpression(
              "&&",
              startMark!,
              getSerializeGuard(tagSection, statefulReason, false)!,
            );
          }
        }

        // The runtime calls bracket the body's statements rather than
        // receiving a callback so declarations in them (e.g. from `<let>`)
        // stay readable by later statements.
        for (const replacement of tag.replaceWithMultiple([
          t.expressionStatement(
            callRuntime("_show_start", t.cloneNode(display, true), startMark),
          ),
          ...bodyStatements,
          t.expressionStatement(
            callRuntime(
              "_show_end",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              display,
              markerSerializeArg,
              statefulSerializeArg,
              skipParentEnd
                ? t.stringLiteral(`</${onlyChildParentTagName}>`)
                : singleNode
                  ? t.numericLiteral(0)
                  : undefined,
              singleNode ? t.numericLiteral(1) : undefined,
            ),
          ),
        ])) {
          replacement.skip();
        }
      },
    },
    dom: {
      enter(tag) {
        const tagExtra = tag.node.extra!;
        if (tagExtra[kStartBinding]) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;

        if (tagExtra[kStaticDisplay] === true) {
          tag.remove();
          return;
        }

        const tagSection = getSection(tag);
        const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);
        const startBinding = tagExtra[kStartBinding];
        const display =
          tagExtra[kStaticDisplay] === false
            ? t.booleanLiteral(false)
            : tag.node.attributes[0].value;

        if (startBinding) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }

        const signal = getSignal(tagSection, nodeBinding, "show");
        signal.build = () => {
          return callRuntime(
            "_show",
            getScopeAccessorLiteral(nodeBinding, true),
            startBinding
              ? getScopeAccessorLiteral(startBinding, true)
              : undefined,
          );
        };
        addValue(tagSection, tagExtra.referencedBindings, signal, display);

        tag.remove();
      },
    },
  }),
  parseOptions: { controlFlow: true },
  autocomplete: [
    {
      snippet: "show=${1:condition}",
      description:
        "Use to render content that is always mounted but only displayed when the condition is met.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#show",
    },
  ],
} as Tag;

// True when the body renders exactly one static node, so the single-node
// resume mark applies.
function isSingleNodeBody(tag: t.NodePath<t.MarkoTag>) {
  let elements = 0;

  for (const child of tag.get("body").get("body")) {
    if (child.isMarkoComment()) continue;

    if (
      child.isMarkoTag() &&
      analyzeTagNameType(child) === TagNameType.NativeTag &&
      t.isStringLiteral(child.node.name)
    ) {
      elements++;
    } else {
      return false;
    }
  }

  return elements === 1;
}

function isLiteral(expr: t.Expression) {
  switch (expr.type) {
    case "BooleanLiteral":
    case "NumericLiteral":
    case "StringLiteral":
    case "NullLiteral":
      return true;
    default:
      return false;
  }
}

function assertValidShow(tag: t.NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoArgs(tag);
  assertNoParams(tag);
  assertNoSpreadAttrs(tag);
  assertHasBody(tag);
  assertHasValueAttribute(tag);
}

function assertHasBody(tag: t.NodePath<t.MarkoTag>) {
  if (!tag.node.body.body.length) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The [\`<${getTagName(tag)}>\` tag](https://markojs.com/docs/reference/core-tag#show) requires [body content](https://markojs.com/docs/reference/language#tag-content).`,
      );
  }

  if (tag.node.body.attributeTags) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The [\`<${getTagName(tag)}>\` tag](https://markojs.com/docs/reference/core-tag#show) does not support [attribute tags](https://markojs.com/docs/reference/language#attribute-tags).`,
      );
  }
}

function assertHasValueAttribute(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [valueAttr] = node.attributes;

  if (!t.isMarkoAttribute(valueAttr) || !valueAttr.default) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The [\`<${getTagName(tag)}>\` tag](https://markojs.com/docs/reference/core-tag#show) requires a [\`value=\` attribute](https://markojs.com/docs/reference/language#shorthand-value).`,
      );
  }

  if (node.attributes.length > 1) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The [\`<${getTagName(tag)}>\` tag](https://markojs.com/docs/reference/core-tag#show) only supports the [\`value=\` attribute](https://markojs.com/docs/reference/language#shorthand-value).`,
      );
  }
}

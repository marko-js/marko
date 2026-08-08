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
import { discardsWrapperChildren } from "../util/insertion-context";
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
import runtimeInfo from "../util/runtime-info";
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
import { addSetupStatement } from "../util/setup-statements";
import { addValue, getSignal } from "../util/signals";
import * as structure from "../util/structure";
import analyzeTagNameType, { TagNameType } from "../util/tag-name-type";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { kSkipEndTag } from "../visitors/tag/native-tag";

const kStatefulReason = Symbol("<show> stateful reason");
const kStartBinding = Symbol("<show> range start binding");
const kEndBinding = Symbol("<show> range end binding");
const kStaticDisplay = Symbol("<show> static display");
const kSingleNodeBody = Symbol("<show> single node body");
const kDisplayRef = Symbol("<show> hoisted display reference");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kStartBinding]?: Binding;
    [kEndBinding]?: Binding;
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

      assertLegalHiddenContext(tag);

      const tagSection = getOrCreateSection(tag);

      // Bindings are created in walk order: the only-child parent, or the body
      // range's start marker, precedes the body and so is created here.
      if (getOnlyChildParentTagName(tag)) {
        getOptimizedOnlyChildNodeBinding(tag, tagSection);
      } else {
        tagExtra[kStartBinding] = createBinding(
          "#text",
          BindingType.dom,
          tagSection,
        );
        structure.visit(tag, WalkCode.Replace);
        structure.enterShallow(tag);
      }

      if (tagExtra[kStaticDisplay] === undefined) {
        mergeReferences(tagSection, tag.node, [display]);
        addSerializeExpr(tagSection, tagExtra, kStatefulReason);
      } else {
        // A statically hidden `<show>` still writes its display in setup.
        addSetupStatement(tagSection);
      }
    },
    exit(tag) {
      const tagExtra = tag.node.extra!;
      if (tagExtra[kStaticDisplay] === true) return;

      const tagSection = getSection(tag);

      if (tagExtra[kStartBinding]) {
        // Control flow in the body owns the nodes at the end of the range, so
        // a multi-node body gets an end marker that travels with it when hidden.
        if (!tagExtra[kSingleNodeBody]) {
          tagExtra[kEndBinding] = createBinding(
            "#text",
            BindingType.dom,
            tagSection,
          );
          structure.visit(tag, WalkCode.Replace);
          structure.enterShallow(tag);
        }

        // The reference node the display signal anchors to; its binding is
        // created below, after the markers, keeping bindings in walk order.
        structure.visit(tag, WalkCode.Replace);
        structure.enterShallow(tag);
      }

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
        if (!t.isIdentifier(display)) {
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

        // The runtime calls bracket the body's statements (rather than taking a
        // callback) so declarations in them stay readable by later statements.
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
      exit(tag) {
        const tagExtra = tag.node.extra!;

        if (tagExtra[kStaticDisplay] === true) {
          tag.remove();
          return;
        }

        const tagSection = getSection(tag);
        const endBinding = tagExtra[kEndBinding];
        const nodeBinding = getOptimizedOnlyChildNodeBinding(tag, tagSection);
        const startBinding = tagExtra[kStartBinding];
        const display =
          tagExtra[kStaticDisplay] === false
            ? t.booleanLiteral(false)
            : tag.node.attributes[0].value;

        const signal = getSignal(tagSection, nodeBinding, "show");
        signal.build = () => {
          return callRuntime(
            "_show",
            getScopeAccessorLiteral(nodeBinding, true),
            startBinding
              ? getScopeAccessorLiteral(startBinding, true)
              : undefined,
            endBinding ? getScopeAccessorLiteral(endBinding, true) : undefined,
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
  types: runtimeInfo.name + "/tags/show.d.marko",
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

function assertValidShow(tag: t.NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoArgs(
    tag,
    "Write the condition as a value attribute instead: `<show=condition>`.",
  );
  assertNoParams(tag);
  assertNoSpreadAttrs(tag);
  assertHasBody(tag);
  assertHasValueAttribute(tag);
}

function assertLegalHiddenContext(tag: t.NodePath<t.MarkoTag>) {
  const parentName = getParentTag(tag)?.node.name;
  if (
    t.isStringLiteral(parentName) &&
    discardsWrapperChildren(parentName.value)
  ) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `A [\`<${getTagName(tag)}>\` tag](https://markojs.com/docs/reference/core-tag#show) cannot be a direct child of \`<${parentName.value}>\`: hidden content is wrapped in an element that \`<${parentName.value}>\` discards, which would render the content instead of hiding it. Move the \`<${getTagName(tag)}>\` inside the row or option, or use [\`<if>\`](https://markojs.com/docs/reference/core-tag#if).`,
      );
  }
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

  if (
    !t.isMarkoAttribute(valueAttr) ||
    !(valueAttr.default || valueAttr.name === "value")
  ) {
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

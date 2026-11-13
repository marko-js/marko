import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertHasBody,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
  coreTagLink,
} from "../util/assert";
import { type Binding, BindingType, createBinding } from "../util/bindings";
import {
  buildBranchEndArgs,
  getPatchEndArgs,
  isSingleNodeContent,
} from "../util/branch-tag";
import evaluate from "../util/evaluate";
import { declareConstBefore } from "../util/generate-uid";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import { getOnlyChildParentTagName } from "../util/is-only-child-in-parent";
import { isPatch } from "../util/marko-config";
import {
  linkHolePatcher,
  onReasonsSettled,
  fillsHole,
} from "../util/patch/decisions";
import { patchCreatesOrComposes } from "../util/patch/refresh";
import { patchFillsSection } from "../util/patch/structure";
import { getPatchShowArgs } from "../util/patch/writers";
import { addReasonExprs } from "../util/reasons";
import { mergeReferences } from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import { callRuntime, linkRuntimeFeature } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import {
  ensureSection,
  getContentInfo,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { addSetupWork } from "../util/setup-work";
import { addValue, getSignal } from "../util/signals";
import { ensureSlot, SlotKind } from "../util/slots";
import * as structure from "../util/structure";
import { getTagFacts } from "../util/tag-facts";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

const kStartBinding = Symbol("<show> range start binding");
const kStaticDisplay = Symbol("<show> static display");
const kBodyContent = Symbol("<show> body content");
const htmlDisplayRefs = new WeakMap<t.MarkoTag, t.Identifier>();

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kStartBinding]?: Binding;
    [kStaticDisplay]?: boolean;
    [kBodyContent]?: Section["content"];
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

      if (displayEval.confident) {
        tagExtra[kStaticDisplay] = !!displayEval.computed;
      }

      if (tagExtra[kStaticDisplay] === true) return;

      assertLegalHiddenContext(tag);

      const tagSection = ensureSection(tag);
      const content = (tagExtra[kBodyContent] = getContentInfo(
        tag.get("body"),
      ));

      // The only-child parent, or the start marker of a body other than one
      // element, precedes the body, so it is recorded here.
      if (getOnlyChildParentTagName(tag)) {
        structure.controlFlowNode(tag, tagSection);
      } else if (!isSingleNodeContent(content)) {
        tagExtra[kStartBinding] = createBinding(
          "#text",
          BindingType.dom,
          tagSection,
        );
        structure.marker(tag, tagExtra[kStartBinding]);
        structure.enterShallow(tag);
      }

      if (tagExtra[kStaticDisplay] === undefined) {
        mergeReferences(tagSection, tag.node, [display]);
      } else {
        // A statically hidden `<show>` still writes its display in setup.
        addSetupWork(tagSection);
      }
    },
    exit(tag) {
      const tagExtra = tag.node.extra!;
      if (tagExtra[kStaticDisplay] === true) return;

      const tagSection = getSection(tag);

      if (!getOnlyChildParentTagName(tag)) {
        // The reference node the display signal anchors to, just after the body.
        structure.controlFlowNode(tag, tagSection);
      }

      const nodeBinding = tagExtra.nodeBinding!;

      // The node binding settles here, after the body.
      if (tagExtra[kStaticDisplay] === undefined) {
        addReasonExprs(ensureSlot(nodeBinding), tagExtra);
        addReasonExprs(ensureSlot(nodeBinding, SlotKind.BranchExpr), tagExtra);
        tagExtra.rendersValue = true;
        linkHolePatcher(tagSection, tagExtra, "patches/show");
      } else if (isPatch()) {
        onReasonsSettled(() => {
          if (flushHides(tag)) linkRuntimeFeature("patches/show");
        });
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

        if (staticDisplay === false && !flushHides(tag)) {
          writer.writeTo(tag)`<t hidden>`;
          return;
        }

        const display = tag.node.attributes[0].value;
        if (staticDisplay === undefined && !t.isIdentifier(display)) {
          // Read once; referenced by both bracketing runtime calls.
          htmlDisplayRefs.set(
            tag.node,
            declareConstBefore(tag, "show", display),
          );
        }
      },
      exit(tag) {
        const tagExtra = tag.node.extra!;
        const staticDisplay = tagExtra[kStaticDisplay];
        const hidden = staticDisplay === false && !flushHides(tag);

        if (hidden) {
          writer.writeTo(tag)`</t>`;
        }

        writer.flushInto(tag);

        const bodyStatements = tag.node.body.body;

        if (staticDisplay || hidden) {
          replaceWithStatements(tag, bodyStatements);
          return;
        }

        const tagSection = getSection(tag);
        const display =
          htmlDisplayRefs.get(tag.node) || tag.node.attributes[0].value;
        const nodeBinding = tagExtra.nodeBinding!;
        const onlyChildParentTagName = getOnlyChildParentTagName(tag);
        const singleNode = isSingleNodeContent(tagExtra[kBodyContent]);
        const endArgs = buildBranchEndArgs(
          tagSection,
          nodeBinding,
          onlyChildParentTagName,
          singleNode,
        );
        // A single node range has no start marker; any other asks for its end's
        // guards again, so the start counts as a use of each.
        const showStart = singleNode
          ? callRuntime(
              "_show_start",
              t.cloneNode(display, true),
              t.numericLiteral(0),
            )
          : callRuntime(
              "_show_start",
              t.cloneNode(display, true),
              ...buildBranchEndArgs(
                tagSection,
                nodeBinding,
                onlyChildParentTagName,
                singleNode,
              ),
            );

        const showEndArgs = [
          getScopeIdIdentifier(tagSection),
          getScopeAccessorLiteral(nodeBinding),
          display,
        ];
        // The runtime calls bracket the body's statements (rather than taking a
        // callback) so declarations in them stay readable by later statements.
        const statements = [
          t.expressionStatement(showStart),
          ...bodyStatements,
          t.expressionStatement(
            // A static display renders no value; a flush creating the scope writes it.
            (
              staticDisplay === false
                ? patchFillsSection(tagSection)
                : fillsHole(tagSection, tagExtra)
            )
              ? callRuntime(
                  "_show_end",
                  ...showEndArgs,
                  ...getPatchEndArgs(endArgs),
                  ...getPatchShowArgs(
                    tagSection,
                    tagExtra,
                    tagExtra[kStartBinding],
                  ),
                )
              : callRuntime("_show_end", ...showEndArgs, ...endArgs),
          ),
        ];
        replaceWithStatements(tag, statements);
      },
    },
    dom: {
      exit(tag) {
        const tagExtra = tag.node.extra!;

        if (tagExtra[kStaticDisplay] === true) {
          replaceWithStatements(tag);
          return;
        }

        const tagSection = getSection(tag);
        const nodeBinding = tagExtra.nodeBinding!;
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
            startBinding && getScopeAccessorLiteral(startBinding, true),
          );
        };
        addValue(tagSection, tagExtra, signal, display);

        replaceWithStatements(tag);
      },
    },
  }),
  parseOptions: { controlFlow: true },
  types: runtimeInfo.name + "/tags/show.d.marko",
} as Tag;

// A scope a flush creates never runs the setup that hides a static `<show>`:
// there it renders as a constant display, whose flush entry hides it.
function flushHides(tag: t.NodePath<t.MarkoTag>) {
  return isPatch() && patchCreatesOrComposes(getSection(tag));
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

  if (tag.node.body.attributeTags) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The ${coreTagLink(tag)} does not support [attribute tags](https://markojs.com/docs/reference/language#attribute-tags).`,
      );
  }

  assertOnlyValueAttr(tag, true, false, getRenameHint);
}

// `<show if=condition>` is the common miss, so name the rename.
function getRenameHint(attr: t.MarkoAttribute) {
  return `Use \`<show=condition>\` instead of \`<show ${attr.name}=condition>\`.`;
}

function assertLegalHiddenContext(tag: t.NodePath<t.MarkoTag>) {
  const parentTag = getParentTag(tag);
  if (parentTag && getTagFacts(parentTag).discardsWrapperChildren) {
    const parentName = getTagName(parentTag);
    throw tag
      .get("name")
      .buildCodeFrameError(
        `A ${coreTagLink(tag)} cannot be a direct child of \`<${parentName}>\`: hidden content is wrapped in an element that \`<${parentName}>\` discards, which would render the content instead of hiding it. Move the \`<${getTagName(tag)}>\` inside the row or option, or use [\`<if>\`](https://markojs.com/docs/reference/core-tag#if).`,
      );
  }
}

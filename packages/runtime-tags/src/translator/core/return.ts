import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  isNativeTag,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { generateUidIdentifier } from "../util/generate-uid";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import { addReason } from "../util/reasons";
import { addMergedFact, getReferencedBindings } from "../util/references";
import { callRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import { addStatement, setScopeProperty } from "../util/signals";
import { findSectionSlot, getSectionSlot, SlotKind } from "../util/slots";
import { ALWAYS } from "../util/sources";
import { createSectionState } from "../util/state";
import { getTagFacts } from "../util/tag-facts";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

const [getSectionReturnValueIdentifier, setReturnValueIdentifier] =
  createSectionState<t.Identifier | undefined>("returnValue");
export { getSectionReturnValueIdentifier };

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertAllowedAttributes(tag, ["value", "valueChange"]);

    let valueAttr: t.MarkoAttribute | undefined;
    let valueChangeAttr: t.MarkoAttribute | undefined;
    for (const attr of tag.node.attributes) {
      if (t.isMarkoAttribute(attr)) {
        if (attr.name === "value") {
          if (valueAttr) {
            throw tag.hub.buildError(
              attr,
              "Invalid duplicate value attribute.",
            );
          }
          valueAttr = attr;
        } else if (attr.name === "valueChange") {
          if (valueChangeAttr) {
            throw tag.hub.buildError(
              attr,
              "Invalid duplicate valueChange attribute.",
            );
          }
          valueChangeAttr = attr;
        }
      }
    }

    const parentTag = getParentTag(tag);
    if (parentTag) {
      if (isNativeTag(parentTag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The [`<return>` tag](https://markojs.com/docs/reference/core-tag#return) can not be used in a [native tag](https://markojs.com/docs/reference/native-tag).",
          );
      } else if (getTagFacts(parentTag).controlFlow) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The [\`<return>\` tag](https://markojs.com/docs/reference/core-tag#return) can not be used under the \`<${parentTag.get("name").toString()}>\` tag.`,
          );
      }
    }

    const section = getOrCreateSection(tag);
    if (section.returnValueExpr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Cannot have multiple [\`<return>\` tags](https://markojs.com/docs/reference/core-tag#return) ${tag.parent.type === "Program" ? "for the template" : "within a tag's body content"}.`,
        );
    }

    const attrs = getKnownAttrValues(tag.node);
    if (!attrs.value) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<return>` tag](https://markojs.com/docs/reference/core-tag#return) requires a [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (attrs.valueChange) {
      addMergedFact((attrs.valueChange.extra ??= {}), "isEffect");
      addSetupExpr(section, attrs.valueChange);
      // TODO: this should be based on the parent actually mutating the tag variable.
      addReason(getSectionSlot(section, SlotKind.ReturnChangeHandler), ALWAYS);
    }

    addSetupExpr(section, attrs.value);
    section.returnValueExpr = attrs.value.extra ??= {};
  },
  translate: translateByTarget({
    html: {
      exit(tag) {
        const section = getSection(tag);
        const attrs = getKnownAttrValues(tag.node);
        writer.flushBefore(tag);

        if (attrs.valueChange) {
          setScopeProperty(
            findSectionSlot(section, SlotKind.ReturnChangeHandler),
            t.logicalExpression(
              "||",
              attrs.valueChange,
              t.unaryExpression("void", t.numericLiteral(0)),
            ),
          );
        }

        if (attrs.value) {
          const returnId = generateUidIdentifier("return");
          setReturnValueIdentifier(section, returnId);
          tag
            .replaceWith(
              t.variableDeclaration("const", [
                t.variableDeclarator(returnId, attrs.value),
              ]),
            )[0]
            .skip();
        }
      },
    },
    dom: {
      exit(tag) {
        const section = getSection(tag);
        const attrs = getKnownAttrValues(tag.node);

        if (attrs.value) {
          addStatement(
            "render",
            section,
            getReferencedBindings(attrs.value.extra),
            t.expressionStatement(
              callRuntime("_return", scopeIdentifier, attrs.value),
            ),
          );
        }

        if (attrs.valueChange) {
          addStatement(
            "render",
            section,
            getReferencedBindings(attrs.valueChange.extra),
            t.expressionStatement(
              callRuntime("_return_change", scopeIdentifier, attrs.valueChange),
            ),
          );
        }

        tag.remove();
      },
    },
  }),
  parseOptions: {
    openTagOnly: true,
  },
  autocomplete: [
    {
      displayText: "return=<value>",
      description: "Provides a value for use in a parent template.",
      snippet: "return=${1:value}",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#return",
    },
  ],
} as Tag;

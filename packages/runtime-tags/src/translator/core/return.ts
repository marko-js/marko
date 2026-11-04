import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  isNativeTag,
  type Tag,
} from "@marko/compiler/babel-utils";

import {
  assertNoBodyContent,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
  coreTagLink,
} from "../util/assert";
import { generateUidIdentifier } from "../util/generate-uid";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import { isPatch } from "../util/marko-config";
import { getFillSources } from "../util/patch/decisions";
import { buildReturnChangeBind } from "../util/patch/writers";
import { addReason } from "../util/reasons";
import { onFinalizeReferences } from "../util/references";
import { replaceWithStatements } from "../util/replace-with-statements";
import { callRuntime } from "../util/runtime";
import { scopeIdentifier } from "../util/scope-read";
import {
  ensureCallerParamGroups,
  ensureSection,
  getSection,
} from "../util/sections";
import { addSetupExpr } from "../util/setup-work";
import {
  addStatement,
  setReturnValueIdentifier,
  writeSlot,
} from "../util/signals";
import { findSectionSlot, ensureSectionSlot, SlotKind } from "../util/slots";
import { ALWAYS } from "../util/sources";
import { getTagFacts } from "../util/tag-facts";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoSpreadAttrs(tag);
    const { valueAttr, valueChangeAttr } = assertOnlyValueAttr(tag, true, true);

    const parentTag = getParentTag(tag);
    if (parentTag) {
      if (isNativeTag(parentTag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The ${coreTagLink(tag)} can not be used in a [native tag](https://markojs.com/docs/reference/native-tag).`,
          );
      } else if (getTagFacts(parentTag).controlFlow) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The ${coreTagLink(tag)} can not be used under the \`<${getTagName(parentTag)}>\` tag.`,
          );
      }
    }

    const section = ensureSection(tag);
    if (section.returnValueExpr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Cannot have multiple [\`<return>\` tags](https://markojs.com/docs/reference/core-tag#return) ${tag.parent.type === "Program" ? "for the template" : "within a tag's body content"}.`,
        );
    }

    if (valueChangeAttr) {
      const changeExtra = (valueChangeAttr.value.extra ??= {});
      changeExtra.isEffect = true;
      addSetupExpr(section, valueChangeAttr.value);
      // TODO: this should be based on the parent actually mutating the tag variable.
      addReason(
        ensureSectionSlot(section, SlotKind.ReturnChangeHandler),
        ALWAYS,
      );
      // A patch binds the handler under its callers' param groups.
      if (isPatch()) {
        onFinalizeReferences(() =>
          ensureCallerParamGroups(getFillSources(changeExtra)),
        );
      }
    }

    addSetupExpr(section, valueAttr.value);
    section.returnValueExpr = valueAttr.value.extra ??= {};
  },
  translate: translateByTarget({
    html: {
      exit(tag) {
        const section = getSection(tag);
        const attrs = getKnownAttrValues(tag.node);
        writer.flushBefore(tag);

        if (attrs.valueChange) {
          const handler = t.logicalExpression(
            "||",
            attrs.valueChange,
            t.buildUndefinedNode(),
          );
          writeSlot(
            findSectionSlot(section, SlotKind.ReturnChangeHandler),
            isPatch()
              ? buildReturnChangeBind(
                  section,
                  handler,
                  attrs.valueChange.extra!,
                )
              : handler,
          );
        }

        const returnId = generateUidIdentifier("return");
        setReturnValueIdentifier(section, returnId);
        replaceWithStatements(tag, [
          t.variableDeclaration("const", [
            t.variableDeclarator(returnId, attrs.value),
          ]),
        ]);
      },
    },
    dom: {
      exit(tag) {
        const section = getSection(tag);
        const attrs = getKnownAttrValues(tag.node);

        addStatement(
          "render",
          section,
          attrs.value.extra,
          callRuntime("_return", scopeIdentifier, attrs.value),
        );

        if (attrs.valueChange) {
          addStatement(
            "render",
            section,
            attrs.valueChange.extra,
            callRuntime("_return_change", scopeIdentifier, attrs.valueChange),
          );
        }

        replaceWithStatements(tag);
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

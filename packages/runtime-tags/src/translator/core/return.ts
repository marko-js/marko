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
import { getAccessorProp } from "../util/get-accessor-char";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { getParentTag } from "../util/get-parent-tag";
import { isControlFlowTag } from "../util/is-core-tag";
import { callRuntime } from "../util/runtime";
import { getOrCreateSection, getSection } from "../util/sections";
import { addSerializeReason } from "../util/serialize-reasons";
import { addStatement, setSectionSerializedValue } from "../util/signals";
import { createSectionState } from "../util/state";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

const tagsWithReturn = new WeakSet<t.NodePath>();
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

    const parentTag = getParentTag(tag);
    if (parentTag) {
      if (isNativeTag(parentTag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The [`<return>` tag](https://markojs.com/docs/reference/core-tag#return) can not be used in a [native tag](https://markojs.com/docs/reference/native-tag).",
          );
      } else if (isControlFlowTag(parentTag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The [\`<return>\` tag](https://markojs.com/docs/reference/core-tag#return) can not be used under the \`<${parentTag.get("name").toString()}>\` tag.`,
          );
      }
    }

    if (tagsWithReturn.has(tag.parentPath)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Cannot have multiple [\`<return>\` tags](https://markojs.com/docs/reference/core-tag#return) ${tag.parent.type === "Program" ? "for the template" : "within a tag's body content"}.`,
        );
    } else {
      tagsWithReturn.add(tag.parentPath);
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
      (attrs.valueChange.extra ??= {}).isEffect = true;
      // TODO: this should be based on the parent actually mutating the tag variable.
      addSerializeReason(
        getOrCreateSection(tag),
        true,
        getAccessorProp().TagVariableChange,
      );
    }
  },
  translate: translateByTarget({
    html: {
      exit(tag) {
        const section = getSection(tag);
        const attrs = getKnownAttrValues(tag.node);
        writer.flushBefore(tag);

        if (attrs.valueChange) {
          setSectionSerializedValue(
            section,
            getAccessorProp().TagVariableChange,
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
            attrs.value.extra?.referencedBindings,
            t.expressionStatement(
              callRuntime("_return", scopeIdentifier, attrs.value),
            ),
          );
        }

        if (attrs.valueChange) {
          addStatement(
            "render",
            section,
            attrs.valueChange.extra?.referencedBindings,
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

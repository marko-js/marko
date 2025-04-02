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
import { importRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue, setSerializedProperty } from "../util/signals";
import { createSectionState } from "../util/state";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

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
            "The `return` tag can not be used in a native tag.",
          );
      } else if (isControlFlowTag(parentTag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The \`return\` tag can not be used under an \`${parentTag.get("name").toString()}\` tag.`,
          );
      }
    }

    if (tagsWithReturn.has(tag.parentPath)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `Cannot have multiple \`return\` tags ${tag.parent.type === "Program" ? "for the template" : "within a tag's body content"}.`,
        );
    } else {
      tagsWithReturn.add(tag.parentPath);
    }

    if (!getKnownAttrValues(tag.node).value) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `return` tag requires a value.");
    }
  },
  translate: translateByTarget({
    html: {
      exit(tag) {
        const section = getSection(tag);
        const attrs = getKnownAttrValues(tag.node);
        writer.flushBefore(tag);

        if (attrs.valueChange) {
          setSerializedProperty(
            section,
            getAccessorProp().TagVariableChange,
            attrs.valueChange,
            true, // TODO: this should be based on the child actually mutating the tag variable.
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
          addValue(
            section,
            attrs.value.extra?.referencedBindings,
            {
              identifier: importRuntime("tagVarSignal"),
              hasDownstreamIntersections: () => true,
            },
            attrs.value,
          );
        }

        if (attrs.valueChange) {
          addValue(
            section,
            attrs.valueChange.extra?.referencedBindings,
            {
              identifier: importRuntime("setTagVarChange"),
              hasDownstreamIntersections: () => false,
            },
            attrs.valueChange,
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
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#return",
    },
  ],
} as Tag;

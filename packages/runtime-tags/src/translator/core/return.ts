import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { AccessorChar } from "../../common/types";
import { assertNoBodyContent } from "../util/assert";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import { importRuntime } from "../util/runtime";
import { getSection } from "../util/sections";
import { addValue, getSerializedScopeProperties } from "../util/signals";
import { createSectionState } from "../util/state";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { currentProgramPath } from "../visitors/program";

const [returnId, _setReturnId] = createSectionState<t.Identifier | undefined>(
  "returnId",
);
export { returnId };

const usedTag = new WeakSet<t.Hub>();

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertAllowedAttributes(tag, ["value", "valueChange"]);

    if (usedTag.has(tag.hub)) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The `return` tag can only be used once per template.",
        );
    }
    usedTag.add(tag.hub);

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
          // TODO: this should be based on the child actually mutating the tag variable.
          getSerializedScopeProperties(section).set(
            t.stringLiteral(AccessorChar.TagVariableChange),
            attrs.valueChange,
          );
        }

        if (attrs.value) {
          const returnId =
            currentProgramPath.scope.generateUidIdentifier("return");
          _setReturnId(section, returnId);

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

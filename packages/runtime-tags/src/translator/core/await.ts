import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoSpreadAttrs } from "../util/assert";
import evaluate from "../util/evaluate";
import { isStatefulReferences } from "../util/is-stateful";
import { BindingType, trackParamsReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  checkStatefulClosures,
  getOrCreateSection,
  getSectionForBody,
  setSectionParentIsOwner,
} from "../util/sections";
import {
  setForceResumeScope,
  writeHTMLResumeStatements,
} from "../util/signals";
import { toFirstExpressionOrBlock } from "../util/to-first-expression-or-block";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);
    assertNoAttributeTags(tag);
    const { node } = tag;
    const [valueAttr] = node.attributes;

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `await` tag requires a value.");
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      valueAttr.name !== "value"
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The `await` tag only supports the `value` attribute.",
        );
    }

    if (!node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `await` tag requires body content.");
    }

    if (
      node.body.params.length &&
      (node.body.params.length > 1 || t.isSpreadElement(node.body.params[0]))
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The `await` tag only supports a single parameter.",
        );
    }

    getOrCreateSection(tag);
    trackParamsReferences(
      tag.get("body"),
      BindingType.derived,
      undefined,
      evaluate(valueAttr.value),
    );
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const [valueAttr] = node.attributes;
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;

        if (
          isStatefulReferences(valueAttr.extra?.referencedBindings) ||
          checkStatefulClosures(bodySection, true)
        ) {
          setForceResumeScope(bodySection);
        }

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "fork",
                valueAttr.value,
                t.arrowFunctionExpression(
                  node.body.params,
                  toFirstExpressionOrBlock(node.body.body),
                ),
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);
      },
      exit(tag) {
        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description: "Use to consume asynchronous an data.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#await",
    },
  ],
  types: runtimeInfo.name + "/tag-types/await.d.marko",
} as Tag;

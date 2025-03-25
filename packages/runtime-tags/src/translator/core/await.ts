import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import evaluate from "../util/evaluate";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  trackParamsReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  addValue,
  getSignal,
  writeHTMLResumeStatements,
} from "../util/signals";
import { toFirstExpressionOrBlock } from "../util/to-first-expression-or-block";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const kDOMBinding = Symbol("await tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);
    assertNoAttributeTags(tag);
    const { node } = tag;
    const tagBody = tag.get("body");
    const section = getOrCreateSection(tag);
    const [valueAttr] = node.attributes;
    const tagExtra = (tag.node.extra ??= {});
    tagExtra[kDOMBinding] = createBinding(
      "#text",
      BindingType.dom,
      section,
      undefined,
      tagExtra,
    );

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

    const bodySection = startSection(tagBody)!;

    getOrCreateSection(tag);
    trackParamsReferences(
      tagBody,
      BindingType.param,
      undefined,
      evaluate(valueAttr.value),
    );

    bodySection.upstreamExpression = valueAttr.value.extra;
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
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const tagBody = tag.get("body");
        const section = getSection(tag);
        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "fork",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
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

        walks.visit(tag, WalkCode.Replace);
        walks.enterShallow(tag);
      },
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;

        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeRef, "await");

        signal.build = () => {
          return callRuntime(
            "awaitTag",
            getScopeAccessorLiteral(nodeRef),
            t.identifier(bodySection.name),
          );
        };

        addValue(
          section,
          bodySection.upstreamExpression?.referencedBindings,
          signal,
          tag.node.attributes[0].value,
        );

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

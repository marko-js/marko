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
  setBindingDownstream,
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
import { getSerializeGuard } from "../util/serialize-guard";
import {
  addTagParamDefaultAssignmentValues,
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
    tagExtra[kDOMBinding] = createBinding("#text", BindingType.dom, section);

    if (!valueAttr) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) requires a [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (
      node.attributes.length > 1 ||
      !t.isMarkoAttribute(valueAttr) ||
      valueAttr.name !== "value"
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) only supports the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value).",
        );
    }

    if (!node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) requires [content](https://markojs.com/docs/reference/language#tag-content).",
        );
    }

    if (
      node.body.params.length &&
      (node.body.params.length > 1 || t.isSpreadElement(node.body.params[0]))
    ) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<await>` tag](https://markojs.com/docs/reference/core-tag#await) only supports a single parameter.",
        );
    }

    const bodySection = startSection(tagBody)!;
    const valueExtra = evaluate(valueAttr.value);

    getOrCreateSection(tag);
    const paramsBinding = trackParamsReferences(tagBody, BindingType.derived);

    if (paramsBinding) {
      setBindingDownstream(paramsBinding, valueExtra);
    }

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
        const bodySection = getSectionForBody(tagBody);
        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_await",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                valueAttr.value,
                t.arrowFunctionExpression(
                  node.body.params,
                  toFirstExpressionOrBlock(node.body.body),
                ),
                getSerializeGuard(section, bodySection?.serializeReason, true),
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
        const valueExpr = node.attributes[0].value;

        signal.build = () => {
          return callRuntime(
            "_await",
            getScopeAccessorLiteral(nodeRef),
            t.identifier(bodySection.name),
          );
        };

        addValue(
          section,
          valueExpr.extra?.referencedBindings,
          signal,
          valueExpr,
        );
        addTagParamDefaultAssignmentValues(node.body);

        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description: "Use to consume asynchronous an data.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#await",
    },
  ],
  types: runtimeInfo.name + "/tags/await.d.marko",
} as Tag;

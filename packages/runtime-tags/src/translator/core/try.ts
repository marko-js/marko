import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  mergeReferences,
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
  addStatement,
  addValue,
  getSignal,
  writeHTMLResumeStatements,
} from "../util/signals";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../util/translate-attrs";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath } from "../visitors/program";

const kDOMBinding = Symbol("try tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    assertNoSpreadAttrs(tag);
    analyzeAttributeTags(tag);
    const { node } = tag;
    const section = getOrCreateSection(tag);
    const tagExtra = (tag.node.extra ??= {});
    const tagBody = tag.get("body");
    tagExtra[kDOMBinding] = createBinding(
      "#text",
      BindingType.dom,
      section,
      undefined,
      tagExtra,
    );

    if (!node.body.body.length) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `try` tag requires body content.");
    }

    startSection(tagBody)!;
    mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (!getSectionForBody(tag.get("body"))) {
          tag.remove();
          return;
        }

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;

        setSectionParentIsOwner(bodySection, true);
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const section = getSection(tag);
        const tagExtra = node.extra!;
        const tagBody = tag.get("body");
        const translatedAttrs = translateAttrs(tag);
        const nodeRef = tagExtra[kDOMBinding]!;

        const contentProp = getTranslatedBodyContentProperty(
          translatedAttrs.properties,
        );
        if (contentProp) {
          translatedAttrs.properties.splice(
            translatedAttrs.properties.indexOf(contentProp),
            1,
          );
        }

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);
        tag.insertBefore(translatedAttrs.statements);

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "tryContent",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(nodeRef),
                contentProp?.value,
                propsToExpression(translatedAttrs.properties),
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody)!;

        setSectionParentIsOwner(bodySection, true);

        walks.visit(tag, WalkCode.Replace);
        walks.enterShallow(tag);
      },
      exit(tag) {
        const { node } = tag;
        const tagExtra = node.extra!;
        const nodeRef = tagExtra[kDOMBinding]!;
        const referencedBindings = tagExtra.referencedBindings;

        const translatedAttrs = translateAttrs(tag);
        const contentProp = getTranslatedBodyContentProperty(
          translatedAttrs.properties,
        );
        if (contentProp) {
          translatedAttrs.properties.splice(
            translatedAttrs.properties.indexOf(contentProp),
            1,
          );
        }

        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"))!;
        const signal = getSignal(section, nodeRef, "try");

        signal.build = () => {
          return callRuntime(
            "createTry",
            getScopeAccessorLiteral(nodeRef),
            t.identifier(bodySection.name),
          );
        };

        if (translatedAttrs.statements.length) {
          addStatement(
            "render",
            section,
            referencedBindings,
            translatedAttrs.statements,
          );
        }

        currentProgramPath.pushContainer(
          "body",
          t.expressionStatement(callRuntime("enableCatch")),
        );

        addValue(
          section,
          referencedBindings,
          signal,
          propsToExpression(translatedAttrs.properties),
        );

        signal.hasDownstreamIntersections = () => true;
        tag.remove();
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      description:
        "Used to capture errors and display placeholders for nested content.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#try",
    },
  ],
  types: runtimeInfo.name + "/tag-types/try.d.marko",
} as Tag;

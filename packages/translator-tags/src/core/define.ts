import { assertNoArgs, type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { isOutputHTML } from "../util/marko-config";
import {
  BindingType,
  getAllTagReferenceNodes,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../util/references";
import { getSection, startSection } from "../util/sections";
import {
  addStatement,
  addValue,
  initValue,
  writeHTMLResumeStatements,
} from "../util/signals";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";
import translateVar from "../util/translate-var";
import * as writer from "../util/writer";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    if (!tag.node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError("The `define` tag requires a tag variable.");
    }

    const tagBody = tag.get("body");
    startSection(tagBody);
    trackVarReferences(tag, BindingType.derived);
    trackParamsReferences(tagBody, BindingType.param);
    mergeReferences(tag, getAllTagReferenceNodes(tag.node));
  },
  translate: {
    enter(tag) {
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      const { node } = tag;
      const translatedAttrs = translateAttrs(tag);

      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
        tag.insertBefore(translatedAttrs.statements);
        translateVar(tag, propsToExpression(translatedAttrs.properties));
      } else {
        const section = getSection(tag);
        const referencedBindings = node.extra?.referencedBindings;
        const derivation = initValue(tag.get("var").node!.extra!.binding!)!;
        if (translatedAttrs.statements.length) {
          addStatement(
            "render",
            section,
            referencedBindings,
            translatedAttrs.statements,
          );
        }

        addValue(
          section,
          referencedBindings,
          derivation,
          propsToExpression(translatedAttrs.properties),
        );
      }

      tag.remove();
    },
  },
  attributes: {},
  autocomplete: [
    {
      description:
        "Use to create a constant object binding that can be rendered.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#define",
    },
  ],
  types: "@marko/translator-tags/tag-types/define.d.marko",
} as Tag;

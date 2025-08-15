import { types as t } from "@marko/compiler";
import { assertNoArgs, type Tag } from "@marko/compiler/babel-utils";

import { isOutputHTML } from "../util/marko-config";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import {
  BindingType,
  getAllTagReferenceNodes,
  mergeReferences,
  setBindingValueExpr,
  trackParamsReferences,
  trackVarReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getOrCreateSection, getSection, startSection } from "../util/sections";
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
    const bodySection = startSection(tagBody);
    const varBinding = trackVarReferences(tag, BindingType.derived);

    if (bodySection) {
      if (varBinding) {
        // TODO: need to do this for attr tags.
        // Should probably allow passing a binding to analyzeAttrTags.
        bodySection.downstreamBinding =
          varBinding.propertyAliases.get("content") || varBinding;
      }
    }
    // TODO: should determine if var bindings are nullable based on attrs.
    trackParamsReferences(tagBody, BindingType.param);
    analyzeAttributeTags(tag);
    const tagExtra = mergeReferences(
      getOrCreateSection(tag),
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );

    if (varBinding) {
      setBindingValueExpr(varBinding, tagExtra);
    }
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
  types: runtimeInfo.name + "/tags/define.d.marko",
} as Tag;

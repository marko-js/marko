import { types as t } from "@marko/compiler";
import { assertNoArgs, type Tag } from "@marko/compiler/babel-utils";

import { isOutputHTML } from "../util/marko-config";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import {
  BindingType,
  dropReferences,
  getAllTagReferenceNodes,
  isReferenceHoisted,
  mergeReferences,
  setBindingDownstream,
  trackParamsReferences,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  getOrCreateSection,
  getSection,
  getSectionForBody,
  startSection,
} from "../util/sections";
import { setTagDownstream } from "../util/set-tag-sections-downstream";
import {
  addStatement,
  addValue,
  getSignal,
  getSignalFn,
  initValue,
  signalHasStatements,
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
        .buildCodeFrameError(
          "The [`<define>` tag](https://markojs.com/docs/reference/core-tag#define) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables).",
        );
    }

    const tagBody = tag.get("body");
    const bodySection = startSection(tagBody);
    const varBinding = trackVarReferences(tag, BindingType.derived);

    if (!varBinding) {
      dropReferences(getAllTagReferenceNodes(tag.node));
      return;
    }

    // TODO: should determine if var bindings are nullable based on attrs.
    trackParamsReferences(tagBody, BindingType.param);
    setTagDownstream(tag, varBinding);

    if (bodySection) {
      // TODO: support destructure
      if (t.isIdentifier(tag.node.var)) {
        const babelBinding = tag.scope.getBinding(tag.node.var.name)!;
        let allDirectReferences = true;
        for (const ref of babelBinding.referencePaths) {
          if (isReferenceHoisted(babelBinding.path, ref)) {
            throw ref.buildCodeFrameError(
              "Hoisted values must be functions. The `<define>` tag variable may not be hoisted. Please move the `<define>` tag prior to any references or extract to a separate `.marko` file.",
            );
          }

          if (ref.parent.type === "MarkoTag" && ref.parent.name === ref.node) {
            (ref.parent.extra ??= {}).defineBodySection = bodySection;
            dropReferences(ref.parent.name);
          } else {
            allDirectReferences = false;
          }
        }
        if (allDirectReferences) {
          dropReferences(getAllTagReferenceNodes(tag.node));
          return;
        }
      }
    }

    analyzeAttributeTags(tag);
    const tagExtra = mergeReferences(
      getOrCreateSection(tag),
      tag.node,
      getAllTagReferenceNodes(tag.node),
    );

    setBindingDownstream(varBinding, tagExtra);
  },
  translate: {
    enter(tag) {
      if (!tag.node.var) {
        tag.remove();
        return;
      }

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
        if (t.isIdentifier(node.var)) {
          const babelBinding = tag.scope.getBinding(node.var.name)!;
          let hasDirectReferences = false;
          let allDirectReferences = true;

          for (const ref of babelBinding.referencePaths) {
            if (
              ref.parent.type === "MarkoTag" &&
              ref.parent.name === ref.node
            ) {
              hasDirectReferences = true;
            } else {
              allDirectReferences = false;
            }
          }

          if (hasDirectReferences) {
            const bodySection = getSectionForBody(tag.get("body"));
            if (bodySection) {
              const signal = getSignal(bodySection, undefined);
              signal.build = () => {
                if (signalHasStatements(signal)) {
                  return callRuntime("_child_setup", getSignalFn(signal));
                }
              };

              if (allDirectReferences) {
                tag.remove();
                return;
              }
            }
          }
        }

        const section = getSection(tag);
        const referencedBindings = node.extra?.referencedBindings;
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
          initValue(tag.get("var").node!.extra!.binding!)!,
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
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#define",
    },
  ],
  types: runtimeInfo.name + "/tags/define.d.marko",
} as Tag;

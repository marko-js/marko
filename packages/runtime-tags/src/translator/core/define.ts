import { types as t } from "@marko/compiler";
import { assertNoArgs, type Tag } from "@marko/compiler/babel-utils";

import { assertHasVar, assertNoTagVarMutation } from "../util/assert";
import { BindingType } from "../util/bindings";
import { setTagContentDerives } from "../util/content-derives";
import { getUnusedParamIdentifier } from "../util/generate-uid";
import { isOutputHTML } from "../util/marko-config";
import { analyzeAttributeTags } from "../util/nested-attribute-tags";
import {
  dropNodes,
  getAllTagReferenceNodes,
  isReferenceHoisted,
  setDerivedFrom,
  trackParamsReferences,
  trackVarReferences,
  mergeTagReferences,
} from "../util/references";
import runtimeInfo from "../util/runtime-info";
import {
  ensureSection,
  ensureBodySection,
  getSection,
  getSectionForBody,
} from "../util/sections";
import {
  addStatement,
  addValue,
  buildSignalFn,
  getSignal,
  initValue,
  signalHasWork,
  writeHTMLResumeStatements,
} from "../util/signals";
import { propsToExpression, translateAttrs } from "../util/translate-attrs";
import translateVar from "../util/translate-var";
import * as writer from "../util/writer";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertHasVar(tag);

    const tagBody = tag.get("body");
    const bodySection = ensureBodySection(tagBody);
    const varBinding = trackVarReferences(tag, BindingType.derived);
    if (varBinding) varBinding.stable = true;

    if (!varBinding) {
      dropNodes(getAllTagReferenceNodes(tag.node));
      return;
    }

    assertNoTagVarMutation(tag);

    const paramsBinding = trackParamsReferences(tagBody, BindingType.param);
    setTagContentDerives(tag, varBinding);

    if (bodySection) {
      // TODO: support destructure
      if (t.isIdentifier(tag.node.var)) {
        const babelBinding = tag.scope.getBinding(tag.node.var.name)!;
        let allDirectReferences = true;
        let allHaveInput = true;
        for (const ref of babelBinding.referencePaths) {
          if (isReferenceHoisted(babelBinding.path, ref)) {
            throw ref.buildCodeFrameError(
              "Hoisted values must be functions. The `<define>` tag variable may not be hoisted. Please move the `<define>` tag prior to any references or extract to a separate `.marko` file.",
            );
          }

          if (ref.parent.type === "MarkoTag" && ref.parent.name === ref.node) {
            (ref.parent.extra ??= {}).defineBodySection = bodySection;
            allHaveInput &&= !ref.parent.arguments?.length;
            dropNodes(ref.parent.name);
          } else {
            allHaveInput = false;
            allDirectReferences = false;
          }
        }
        if (allDirectReferences) {
          const inputAlias =
            allHaveInput && paramsBinding?.propertyAliases.get("0");
          if (inputAlias) {
            inputAlias.nullable = false;
          }
          dropNodes(getAllTagReferenceNodes(tag.node));
          return;
        }
      }
    }

    analyzeAttributeTags(tag);
    const tagExtra = mergeTagReferences(ensureSection(tag), tag.node);

    setDerivedFrom(varBinding, tagExtra);
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
        writeHTMLResumeStatements(tag);
        translateVar(
          tag,
          propsToExpression(translatedAttrs.properties),
          "const",
          translatedAttrs.statements,
        );
        tag.insertBefore(translatedAttrs.statements);
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

          const bodySection = getSectionForBody(tag.get("body"));
          if (bodySection && hasDirectReferences) {
            const signal = getSignal(bodySection, undefined);
            signal.build = () => {
              const hasWork = signalHasWork(signal);
              // Call sites skip this setup when analysis proved it a noop, so
              // work here means that proof was wrong.
              if (hasWork && !bodySection.hasSetupWork) {
                throw new Error(
                  "Marko internal error: analysis marked a `<define>` body's setup as empty but translation produced statements for it. Please open an issue with a reproduction.",
                );
              }

              if (bodySection.hasSetupWork) {
                // Call sites still call it once dom output drops work analysis
                // counted (a class API tag); an empty block body would become `0`.
                return hasWork
                  ? buildSignalFn(signal)
                  : t.arrowFunctionExpression(
                      [getUnusedParamIdentifier()],
                      t.numericLiteral(0),
                    );
              }
            };
          }

          // Matches the analysis, which drops the tag whenever every reference
          // is direct — including a `<define>` with no references at all.
          if (bodySection && allDirectReferences) {
            tag.remove();
            return;
          }
        }

        const section = getSection(tag);
        if (translatedAttrs.statements.length) {
          addStatement(
            "render",
            section,
            node.extra,
            translatedAttrs.statements,
          );
        }

        addValue(
          section,
          node.extra,
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

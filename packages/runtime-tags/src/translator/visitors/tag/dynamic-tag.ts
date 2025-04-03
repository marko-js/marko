import { types as t } from "@marko/compiler";
import {
  assertAttributesOrArgs,
  getProgram,
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../../common/types";
import { getDynamicSourcesForExtra } from "../../util/dynamic-sources";
import { generateUidIdentifier } from "../../util/generate-uid";
import { getAccessorPrefix } from "../../util/get-accessor-char";
import { isOutputHTML } from "../../util/marko-config";
import { analyzeAttributeTags } from "../../util/nested-attribute-tags";
import {
  type Binding,
  BindingType,
  createBinding,
  getAllTagReferenceNodes,
  getScopeAccessor,
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../../util/references";
import {
  callRuntime,
  getCompatRuntimeFile,
  importRuntime,
} from "../../util/runtime";
import { getScopeExpression } from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  startSection,
} from "../../util/sections";
import {
  addValue,
  getResumeRegisterId,
  getSignal,
  initValue,
  type Signal,
  writeHTMLResumeStatements,
} from "../../util/signals";
import {
  getTranslatedBodyContentProperty,
  propsToExpression,
  translateAttrs,
} from "../../util/translate-attrs";
import type { TemplateVisitor } from "../../util/visitors";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { getTagRelativePath } from "./custom-tag";

const kDOMBinding = Symbol("dynamic tag dom binding");
const kChildOffsetScopeBinding = Symbol("custom tag scope offset");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
    [kChildOffsetScopeBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag) {
      assertAttributesOrArgs(tag);
      analyzeAttributeTags(tag);
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

      if (tag.has("var")) {
        trackVarReferences(tag, BindingType.derived);
        tag.node.var!.extra!.binding!.scopeOffset = tagExtra[
          kChildOffsetScopeBinding
        ] = createBinding(
          "#scopeOffset",
          BindingType.dom,
          section,
          undefined,
          tagExtra,
        );
      }

      startSection(tagBody);

      trackParamsReferences(tagBody, BindingType.param);
      mergeReferences(section, tag.node, [
        tag.node.name,
        ...getAllTagReferenceNodes(tag.node),
      ]);
    },
  },
  translate: {
    enter(tag) {
      walks.visit(
        tag,
        tag.node.var ? WalkCode.DynamicTagWithVar : WalkCode.Replace,
      );
      walks.enterShallow(tag);

      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      const { node } = tag;
      const tagExtra = node.extra!;
      const nodeRef = tagExtra[kDOMBinding]!;
      const section = getSection(tag);
      const isClassAPI = tagExtra.featureType === "class";
      let tagExpression = node.name;

      if (t.isStringLiteral(tagExpression)) {
        tagExpression = importDefault(
          tag.hub.file,
          getTagRelativePath(tag),
          tagExpression.value,
        );
      }

      if (isClassAPI) {
        // This is the interop layer leaking into the translator
        // We use the dynamic tag when a custom tag from the class runtime is used

        if (isOutputHTML()) {
          getProgram().node.body.push(
            t.markoScriptlet(
              [
                t.expressionStatement(
                  t.callExpression(
                    importNamed(tag.hub.file, getCompatRuntimeFile(), "s"),
                    [
                      t.identifier((tagExpression as t.Identifier).name),
                      t.stringLiteral(loadFileForTag(tag)!.metadata.marko.id),
                    ],
                  ),
                ),
              ],
              true,
            ),
          );
        } else {
          getProgram().node.body.push(
            t.expressionStatement(
              callRuntime(
                "register",
                t.stringLiteral(loadFileForTag(tag)!.metadata.marko.id),
                t.identifier((tagExpression as t.Identifier).name),
              ),
            ),
          );
        }
      }

      const { properties, statements } = translateAttrs(
        tag,
        undefined,
        undefined,
        isClassAPI ? "renderBody" : "content",
      );
      const args: (t.Expression | t.SpreadElement)[] = [];
      let hasTagArgs = false;

      if (node.arguments) {
        hasTagArgs = true;
        args.push(...node.arguments);

        if (properties.length) {
          args.push(propsToExpression(properties));
        }
      } else {
        const contentProp = getTranslatedBodyContentProperty(properties);
        if (contentProp) {
          properties.splice(properties.indexOf(contentProp), 1);
          args.push(propsToExpression(properties), contentProp.value);
        } else {
          args.push(propsToExpression(properties));
        }
      }

      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));

        const serializeReason =
          isClassAPI || !!node.var || getDynamicSourcesForExtra(tagExtra);
        const dynamicTagExpr = hasTagArgs
          ? callRuntime(
              "dynamicTag",
              getScopeIdIdentifier(section),
              getScopeAccessorLiteral(nodeRef),
              tagExpression,
              t.arrayExpression(args),
              t.numericLiteral(0),
              t.numericLiteral(1),
              serializeReason ? t.numericLiteral(1) : undefined,
            )
          : callRuntime(
              "dynamicTag",
              getScopeIdIdentifier(section),
              getScopeAccessorLiteral(nodeRef),
              tagExpression,
              args[0],
              args[1] || (serializeReason ? t.numericLiteral(0) : undefined),
              serializeReason ? t.numericLiteral(0) : undefined,
              serializeReason ? t.numericLiteral(1) : undefined,
            );

        if (node.var) {
          const dynamicScopeIdentifier = generateUidIdentifier("dynamicScope");
          statements.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                dynamicScopeIdentifier,
                callRuntime("peekNextScope"),
              ),
            ]),
          );
          statements.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(node.var, dynamicTagExpr),
            ]),
            t.expressionStatement(
              callRuntime(
                "setTagVar",
                getScopeIdIdentifier(section),
                getScopeAccessorLiteral(
                  tag.node.extra![kChildOffsetScopeBinding]!,
                ),
                dynamicScopeIdentifier,
                t.stringLiteral(
                  getResumeRegisterId(
                    section,
                    (node.var as t.Identifier).extra?.binding, // TODO: node.var is not always an identifier.
                    "var",
                  ),
                ),
              ),
            ),
          );
        } else {
          statements.push(t.expressionStatement(dynamicTagExpr));
        }

        for (const replacement of tag.replaceWithMultiple(statements)) {
          replacement.skip();
        }
      } else {
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"));
        const signal = getSignal(section, nodeRef, "dynamicTag");
        let tagVarSignal: Signal | undefined;
        if (tag.node.var) {
          tagVarSignal = initValue(
            // TODO: support destructuring
            tag.node.var.extra!.binding!,
          );
          tagVarSignal.register = true;
          tagVarSignal.buildAssignment = (valueSection, value) => {
            return t.callExpression(importRuntime("tagVarSignalChange"), [
              t.memberExpression(
                getScopeExpression(tagVarSignal!.section, valueSection),
                t.stringLiteral(
                  getAccessorPrefix().ConditionalScope +
                    getScopeAccessor(nodeRef),
                ),
                true,
              ),
              value,
            ]);
          };
        }

        signal.build = () => {
          return callRuntime(
            "dynamicTag",
            getScopeAccessorLiteral(nodeRef),
            bodySection && t.identifier(bodySection.name),
            tagVarSignal
              ? t.arrowFunctionExpression([], tagVarSignal.identifier)
              : undefined,
            hasTagArgs && t.numericLiteral(1),
          );
        };

        if (args.length) {
          const argsOrInput = hasTagArgs
            ? t.arrayExpression(args)
            : (args[0] as t.Expression);
          if (
            !t.isObjectExpression(argsOrInput) ||
            argsOrInput.properties.length
          ) {
            signal.extraArgs = [
              t.arrowFunctionExpression(
                [],
                statements.length
                  ? t.blockStatement(
                      statements.concat(t.returnStatement(argsOrInput)),
                    )
                  : argsOrInput,
              ),
            ];
          }
        }

        signal.hasDownstreamIntersections = () => true;
        addValue(section, tagExtra.referencedBindings, signal, tagExpression);
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

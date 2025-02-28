import { types as t } from "@marko/compiler";
import {
  assertAttributesOrArgs,
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import { AccessorChar, WalkCode } from "../../../common/types";
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
  setSerializedProperty,
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
import { currentProgramPath } from "../program";
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
      const referencedBindings = tagExtra.referencedBindings;
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
          currentProgramPath.pushContainer(
            "body",
            t.expressionStatement(
              t.callExpression(
                importNamed(tag.hub.file, getCompatRuntimeFile(), "s"),
                [
                  t.identifier((tagExpression as t.Identifier).name),
                  t.stringLiteral(loadFileForTag(tag)!.metadata.marko.id),
                ],
              ),
            ),
          );
        } else {
          currentProgramPath.pushContainer(
            "body",
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
      let hasMultipleArgs = false;

      if (node.arguments?.length) {
        args.push(...node.arguments);

        if (properties.length) {
          hasMultipleArgs = true;
          args.push(propsToExpression(properties));
        } else {
          hasMultipleArgs =
            node.arguments.length > 1 || t.isSpreadElement(node.arguments[0]);
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

        if (node.var) {
          if (!hasMultipleArgs && args.length === 1) {
            args.push(t.unaryExpression("void", t.numericLiteral(0)));
          }
        }

        const dynamicScopeIdentifier =
          currentProgramPath.scope.generateUidIdentifier("dynamicScope");
        const dynamicTagExpr = hasMultipleArgs
          ? callRuntime(
              "dynamicTagArgs",
              getScopeIdIdentifier(section),
              getScopeAccessorLiteral(nodeRef),
              tagExpression,
              t.arrayExpression(args),
            )
          : callRuntime(
              "dynamicTagInput",
              getScopeIdIdentifier(section),
              getScopeAccessorLiteral(nodeRef),
              tagExpression,
              ...args,
            );

        statements.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              dynamicScopeIdentifier,
              callRuntime("peekNextScope"),
            ),
          ]),
        );

        if (node.var) {
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

        setSerializedProperty(
          section,
          getScopeAccessor(nodeRef) + AccessorChar.ConditionalScope,
          callRuntime("writeExistingScope", dynamicScopeIdentifier),
        );

        setSerializedProperty(
          section,
          getScopeAccessor(nodeRef) + AccessorChar.ConditionalRenderer,
          callRuntime(
            "normalizeDynamicRenderer",
            t.isIdentifier(tagExpression)
              ? t.identifier(tagExpression.name)
              : tagExpression,
          ),
        );

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
                  getScopeAccessor(nodeRef) + AccessorChar.ConditionalScope,
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
            hasMultipleArgs && t.numericLiteral(1),
          );
        };

        if (args.length) {
          const argsOrInput = hasMultipleArgs
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
        addValue(section, referencedBindings, signal, tagExpression);
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

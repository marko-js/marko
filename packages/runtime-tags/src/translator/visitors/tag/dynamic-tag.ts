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
  addReadToExpression,
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
  addStatement,
  addValue,
  buildSignalIntersections,
  getResumeRegisterId,
  getSignal,
  getSignalFn,
  initValue,
  setSerializedProperty,
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
import { currentProgramPath, scopeIdentifier } from "../program";
import { getTagRelativePath } from "./custom-tag";

const kDOMBinding = Symbol("dynamic tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
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
      const domBinding = (tagExtra[kDOMBinding] = createBinding(
        "#text",
        BindingType.dom,
        section,
        undefined,
        tagExtra,
      ));

      startSection(tagBody);
      trackVarReferences(tag, BindingType.derived);
      trackParamsReferences(tagBody, BindingType.param);
      mergeReferences(section, tag.node, getAllTagReferenceNodes(tag.node));
      addReadToExpression(tag, domBinding);
    },
  },
  translate: {
    enter(tag) {
      walks.visit(tag, WalkCode.Replace);
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
      const tagNameReferences = node.name.extra?.referencedBindings;
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
            t.expressionStatement(
              callRuntime(
                "setTagVar",
                getScopeIdIdentifier(section),
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
            t.variableDeclaration("const", [
              t.variableDeclarator(node.var, dynamicTagExpr),
            ]),
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
        signal.build = () => {
          return callRuntime(
            "dynamicTag",
            getScopeAccessorLiteral(nodeRef),
            getSignalFn(signal, [scopeIdentifier]),
            buildSignalIntersections(signal),
          );
        };
        signal.hasDownstreamIntersections = () => true;
        addValue(
          section,
          tagNameReferences,
          signal,
          bodySection
            ? t.logicalExpression(
                "||",
                tagExpression,
                t.callExpression(t.identifier(bodySection.name), [
                  scopeIdentifier,
                ]),
              )
            : tagExpression,
        );

        if (tag.node.var) {
          const childScopeLiteral = t.stringLiteral(
            getScopeAccessor(nodeRef) + AccessorChar.ConditionalScope,
          );
          const source = initValue(
            // TODO: support destructuring
            tag.node.var.extra!.binding!,
          );
          source.register = true;
          source.buildAssignment = (valueSection, value) => {
            return t.callExpression(importRuntime("tagVarSignalChange"), [
              t.memberExpression(
                getScopeExpression(source.section, valueSection),
                childScopeLiteral,
                true,
              ),
              value,
            ]);
          };

          addStatement(
            "render",
            section,
            nodeRef,
            t.expressionStatement(
              callRuntime(
                "setTagVar",
                scopeIdentifier,
                childScopeLiteral,
                source.identifier,
              ),
            ),
          );
        }

        if (args.length) {
          const argsOrInput = hasMultipleArgs
            ? t.arrayExpression(args)
            : (args[0] as t.Expression);
          const attrsGetter = t.arrowFunctionExpression(
            [],
            statements.length
              ? t.blockStatement(
                  statements.concat(t.returnStatement(argsOrInput)),
                )
              : argsOrInput,
          );
          const id = currentProgramPath.scope.generateUidIdentifier(
            tag.get("name").toString() + "_input",
          );
          let added = false;
          addValue(
            section,
            tagExtra.referencedBindings,
            {
              get identifier() {
                if (!added) {
                  currentProgramPath.pushContainer(
                    "body",
                    t.variableDeclaration("const", [
                      t.variableDeclarator(
                        id,
                        callRuntime(
                          "dynamicTagAttrs",
                          getScopeAccessorLiteral(nodeRef),
                          bodySection && t.identifier(bodySection.name),
                          hasMultipleArgs && t.numericLiteral(1),
                        ),
                      ),
                    ]),
                  );
                  added = true;
                }
                return id;
              },
              hasDownstreamIntersections: () => true,
            },
            attrsGetter,
          );
        }

        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

import { type Config, types as t } from "@marko/compiler";
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
  getScopeAccessorLiteral,
  mergeReferences,
  trackParamsReferences,
  trackVarReferences,
} from "../../util/references";
import { callRuntime, importRuntime } from "../../util/runtime";
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
  getSerializedScopeProperties,
  getSignal,
  getSignalFn,
  initValue,
  writeHTMLResumeStatements,
} from "../../util/signals";
import {
  getTranslatedRenderBodyProperty,
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
      const extra = node.extra!;
      const nodeRef = extra[kDOMBinding]!;
      const section = getSection(tag);
      let tagExpression = node.name;

      // This is the interop layer leaking into the translator
      // We use the dynamic tag when a custom tag from the class runtime is used
      if (t.isStringLiteral(tagExpression)) {
        tagExpression = importDefault(
          tag.hub.file,
          getTagRelativePath(tag),
          tagExpression.value,
        );
      }

      if (extra.featureType === "class") {
        const compatRuntimeFile = getCompatRuntimeFile(tag.hub.file.markoOpts);
        importDefault(tag.hub.file, compatRuntimeFile);

        if (isOutputHTML()) {
          currentProgramPath.pushContainer(
            "body",
            t.expressionStatement(
              t.callExpression(
                importNamed(tag.hub.file, compatRuntimeFile, "s"),
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

      const { properties, statements } = translateAttrs(tag);
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
        const renderBodyProp = getTranslatedRenderBodyProperty(properties);
        if (renderBodyProp) {
          properties.splice(properties.indexOf(renderBodyProp), 1);
          args.push(propsToExpression(properties), renderBodyProp.value);
        } else {
          args.push(propsToExpression(properties));
        }
      }

      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
        const write = writer.writeTo(tag);

        if (node.var) {
          if (!hasMultipleArgs && args.length === 1) {
            args.push(t.unaryExpression("void", t.numericLiteral(0)));
          }

          args.push(
            callRuntime(
              "register",
              t.arrowFunctionExpression([], t.blockStatement([])),
              t.stringLiteral(
                getResumeRegisterId(
                  section,
                  (node.var as t.Identifier).extra?.binding, // TODO: node.var is not always an identifier.
                  "var",
                ),
              ),
              getScopeIdIdentifier(section),
            ),
          );
        }

        const dynamicScopeIdentifier =
          currentProgramPath.scope.generateUidIdentifier("dynamicScope");
        const dynamicTagExpr = hasMultipleArgs
          ? callRuntime(
              "dynamicTagArgs",
              dynamicScopeIdentifier,
              tagExpression,
              t.arrayExpression(args),
            )
          : callRuntime(
              "dynamicTagInput",
              dynamicScopeIdentifier,
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
        statements.push(
          node.var
            ? t.variableDeclaration("const", [
                t.variableDeclarator(node.var, dynamicTagExpr),
              ])
            : t.expressionStatement(dynamicTagExpr),
        );

        write`${callRuntime(
          "markResumeControlEnd",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(nodeRef),
        )}`;

        getSerializedScopeProperties(section).set(
          t.stringLiteral(
            getScopeAccessorLiteral(nodeRef).value +
              AccessorChar.ConditionalScope,
          ),
          callRuntime("writeExistingScope", dynamicScopeIdentifier),
        );
        getSerializedScopeProperties(section).set(
          t.stringLiteral(
            getScopeAccessorLiteral(nodeRef).value +
              AccessorChar.ConditionalRenderer,
          ),
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
        const signal = getSignal(section, nodeRef, "dynamicTagName");
        signal.build = () => {
          return callRuntime(
            "conditional",
            getScopeAccessorLiteral(nodeRef),
            getSignalFn(signal, [scopeIdentifier]),
            buildSignalIntersections(signal),
          );
        };
        signal.hasDownstreamIntersections = () => true;
        addValue(
          section,
          node.name.extra?.referencedBindings,
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
            getScopeAccessorLiteral(extra[kDOMBinding]!).value +
              AccessorChar.ConditionalScope,
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
            node.extra?.referencedBindings,
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
function getCompatRuntimeFile(markoOpts: Required<Config>) {
  return `marko/src/runtime/helpers/tags-compat/${
    isOutputHTML() ? "html" : "dom"
  }${markoOpts.optimize ? "" : "-debug"}.${markoOpts.modules === "esm" ? "mjs" : "js"}`;
}

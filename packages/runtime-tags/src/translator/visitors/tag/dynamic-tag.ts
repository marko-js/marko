import { types as t } from "@marko/compiler";
import {
  assertAttributesOrArgs,
  getProgram,
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../../common/types";
import { getBindingPropTree } from "../../util/binding-prop-tree";
import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import {
  knownTagAnalyze,
  knownTagTranslateDOM,
  knownTagTranslateHTML,
} from "../../util/known-tag";
import { isOptimize, isOutputHTML } from "../../util/marko-config";
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
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  startSection,
} from "../../util/sections";
import { getSerializeGuard } from "../../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../../util/serialize-reasons";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  getSignal,
  initValue,
  type Signal,
  signalHasStatements,
  writeHTMLResumeStatements,
} from "../../util/signals";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import { toMemberExpression } from "../../util/to-property-name";
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
const importedDynamicTagResume = new WeakSet<t.Program>();

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
    [kChildOffsetScopeBinding]?: Binding;
    defineBodySection?: Section;
  }
}

export default {
  analyze: {
    enter(tag) {
      assertAttributesOrArgs(tag);
      const { node } = tag;
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        knownTagAnalyze(
          tag,
          definedBodySection,
          definedBodySection.params &&
            getBindingPropTree(definedBodySection.params),
        );

        return;
      }

      analyzeAttributeTags(tag);

      const tagSection = getOrCreateSection(tag);
      const tagExtra = mergeReferences(tagSection, node, [
        node.name,
        ...getAllTagReferenceNodes(node),
      ]);
      const tagBody = tag.get("body");
      const hasVar = !!tag.node.var;
      const nodeBinding = (tagExtra[kDOMBinding] = createBinding(
        "#text",
        BindingType.dom,
        tagSection,
      ));

      if (
        hasVar ||
        tag.node.attributes.some(
          (attr) =>
            t.isMarkoSpreadAttribute(attr) || isEventOrChangeHandler(attr.name),
        )
      ) {
        getProgram().node.extra.isInteractive = true;
      }

      if (hasVar) {
        trackVarReferences(tag, BindingType.derived);
        tag.node.var!.extra!.binding!.scopeOffset = tagExtra[
          kChildOffsetScopeBinding
        ] = createBinding("#scopeOffset", BindingType.dom, tagSection);
      }

      startSection(tagBody);
      trackParamsReferences(tagBody, BindingType.param);
      addSerializeExpr(tagSection, hasVar || tagExtra, nodeBinding);
    },
  },
  translate: {
    enter(tag) {
      if (tag.node.extra?.defineBodySection) {
        if (isOutputHTML()) {
          writer.flushBefore(tag);
        }
        return;
      }

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
      const tagSection = getSection(tag);
      const definedBodySection = node.extra?.defineBodySection;
      if (definedBodySection) {
        const paramsBinding = definedBodySection.params;
        const propTree = paramsBinding && getBindingPropTree(paramsBinding);

        if (isOutputHTML()) {
          knownTagTranslateHTML(
            tag,
            t.memberExpression(tag.node.name, t.identifier("content")),
            definedBodySection,
            propTree,
          );
        } else {
          const write = writer.writeTo(tag);

          knownTagTranslateDOM(
            tag,
            propTree,
            (binding, preferredName) =>
              getSignal(definedBodySection, binding, preferredName).identifier,
            (section, childBinding) => {
              const signal = getSignal(definedBodySection, undefined);
              if (signalHasStatements(signal)) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.expressionStatement(
                    t.callExpression(
                      t.memberExpression(signal.identifier, t.identifier("_")),
                      [
                        createScopeReadExpression(childBinding, section),
                        getScopeExpression(section, definedBodySection.parent!),
                      ],
                    ),
                  ),
                );
              } else if (definedBodySection.readsOwner) {
                addStatement(
                  "render",
                  section,
                  undefined,
                  t.expressionStatement(
                    t.assignmentExpression(
                      "=",
                      toMemberExpression(
                        createScopeReadExpression(childBinding, section),
                        getAccessorProp().Owner,
                      ),
                      getScopeExpression(section, definedBodySection.parent!),
                    ),
                  ),
                );
              }
            },
          );

          write`${() => writer.getSectionMetaIdentifiers(definedBodySection).writes || ""}`;
          walks.injectWalks(
            tag,
            tag.get("name").toString(),
            () => writer.getSectionMetaIdentifiers(definedBodySection).walks,
          );

          tag.remove();
        }

        return;
      }

      const tagExtra = node.extra!;
      const nodeBinding = tagExtra[kDOMBinding]!;
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
                "_resume",
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
        const serializeArg = getSerializeGuard(
          tagSection,
          getSerializeReason(tagSection, nodeBinding),
          true,
        );
        const dynamicTagExpr = hasTagArgs
          ? callRuntime(
              "_dynamic_tag",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              t.arrayExpression(args),
              t.numericLiteral(0),
              t.numericLiteral(1),
              serializeArg,
            )
          : callRuntime(
              "_dynamic_tag",
              getScopeIdIdentifier(tagSection),
              getScopeAccessorLiteral(nodeBinding),
              tagExpression,
              args[0],
              args[1] || (serializeArg ? t.numericLiteral(0) : undefined),
              serializeArg ? t.numericLiteral(0) : undefined,
              serializeArg,
            );

        if (node.var) {
          const dynamicScopeIdentifier = generateUidIdentifier(
            tag.get("name").toString() + "_scope",
          );
          statements.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                dynamicScopeIdentifier,
                callRuntime("_peek_scope_id"),
              ),
            ]),
          );
          statements.push(
            t.variableDeclaration("let", [
              t.variableDeclarator(node.var, dynamicTagExpr),
            ]),
            t.expressionStatement(
              callRuntime(
                "_var",
                getScopeIdIdentifier(tagSection),
                getScopeAccessorLiteral(
                  tag.node.extra![kChildOffsetScopeBinding]!,
                ),
                dynamicScopeIdentifier,
                t.stringLiteral(
                  getResumeRegisterId(
                    tagSection,
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
        const signal = getSignal(section, nodeBinding, "dynamicTag");
        let tagVarSignal: Signal | undefined;
        if (tag.node.var) {
          const varBinding = tag.node.var.extra!.binding!;
          tagVarSignal = initValue(
            // TODO: support destructuring
            varBinding,
          );
          tagVarSignal.register = true;
          tagVarSignal.buildAssignment = (valueSection, value) => {
            const changeArgs = [
              t.memberExpression(
                getScopeExpression(tagVarSignal!.section, valueSection),
                t.stringLiteral(
                  getAccessorPrefix().BranchScopes +
                    getScopeAccessor(nodeBinding),
                ),
                true,
              ),
              value,
            ];
            if (!isOptimize()) {
              changeArgs.push(t.stringLiteral(varBinding.name));
            }
            return t.callExpression(importRuntime("_var_change"), changeArgs);
          };
        }

        signal.build = () => {
          return callRuntime(
            "_dynamic_tag",
            getScopeAccessorLiteral(nodeBinding, true),
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

        enableDynamicTagResume(tag);
        addValue(section, tagExtra.referencedBindings, signal, tagExpression);
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;

function enableDynamicTagResume(tag: t.NodePath<t.MarkoTag>) {
  const program = getProgram().node;
  if (
    !importedDynamicTagResume.has(program) &&
    analyzeTagNameType(tag, true) !== TagNameType.CustomTag
  ) {
    for (const attr of tag.node.attributes) {
      if (
        attr.type === "MarkoSpreadAttribute" ||
        (attr.type === "MarkoAttribute" && isEventOrChangeHandler(attr.name))
      ) {
        importedDynamicTagResume.add(program);
        program.body.push(
          t.expressionStatement(callRuntime("_resume_dynamic_tag")),
        );
        return;
      }
    }
  }
}

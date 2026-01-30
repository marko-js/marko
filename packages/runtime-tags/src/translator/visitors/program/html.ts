import { types as t } from "@marko/compiler";

import {
  generateUidIdentifier,
  getSharedUid,
  usedSharedUid,
} from "../../util/generate-uid";
import isStatic from "../../util/is-static";
import { forEach } from "../../util/optional";
import {
  BindingType,
  getReadReplacement,
  getSectionInstancesAccessor,
  isRegisteredFnExtra,
} from "../../util/references";
import { callRuntime, importRuntime } from "../../util/runtime";
import {
  forEachSection,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../../util/sections";
import { isReasonDynamic } from "../../util/serialize-reasons";
import {
  addWriteScopeBuilder,
  getBindingGetterIdentifier,
  getHTMLSectionStatements,
  getResumeRegisterId,
  setSerializedValue,
  writeHTMLResumeStatements,
} from "../../util/signals";
import { simplifyFunction } from "../../util/simplify-fn";
import { traverseReplace } from "../../util/traverse";
import type { TemplateVisitor } from "../../util/visitors";
import { flushInto } from "../../util/writer";

export function getTemplateContentName() {
  return getSharedUid("content");
}

export default {
  translate: {
    enter() {
      forEachSection((section) => {
        forEach(section.bindings, (binding) => {
          for (const [hoistSection, hasReference] of binding.getters) {
            if (hasReference) {
              getHTMLSectionStatements(hoistSection || section).push(
                t.variableDeclaration("const", [
                  hoistSection
                    ? t.variableDeclarator(
                        getBindingGetterIdentifier(binding, hoistSection),
                        callRuntime(
                          "_hoist",
                          getScopeIdIdentifier(hoistSection),
                          t.stringLiteral(
                            getResumeRegisterId(hoistSection, binding, "hoist"),
                          ),
                        ),
                      )
                    : t.variableDeclarator(
                        t.identifier(binding.originalName!),
                        callRuntime(
                          "_el",
                          getScopeIdIdentifier(section),
                          t.stringLiteral(
                            getResumeRegisterId(section, binding),
                          ),
                        ),
                      ),
                ]),
              );
            }
          }
        });

        const sectionDynamicSubscribers = new Set<Section>();
        forEach(section.hoisted, (binding) => {
          let highestHoistSection!: Section;
          forEach(binding.hoists, (hoistSection) => {
            if (
              !highestHoistSection ||
              hoistSection.depth < highestHoistSection.depth
            ) {
              highestHoistSection = hoistSection;
            }
          });

          let currentSection: Section | undefined = section;
          while (currentSection && currentSection !== highestHoistSection) {
            const parentSection: Section = currentSection.parent!;
            if (
              !currentSection.sectionAccessor &&
              !sectionDynamicSubscribers.has(currentSection)
            ) {
              const subscribersIdentifier = generateUidIdentifier(
                `${currentSection.name}__subscribers`,
              );

              sectionDynamicSubscribers.add(currentSection);

              getHTMLSectionStatements(parentSection).push(
                t.variableDeclaration("const", [
                  t.variableDeclarator(
                    subscribersIdentifier,
                    t.newExpression(t.identifier("Set"), []),
                  ),
                ]),
              );

              addWriteScopeBuilder(currentSection, (expr) =>
                callRuntime("_subscribe", subscribersIdentifier, expr),
              );
              setSerializedValue(
                parentSection,
                getSectionInstancesAccessor(currentSection)!,
                subscribersIdentifier,
              );
            }
            currentSection = parentSection!;
          }
        });
      });
    },
    exit(program) {
      flushInto(program);
      writeHTMLResumeStatements(program);
      traverseReplace(program.node, "body", replaceNode);
      const renderContent: t.Statement[] = [];
      const section = getSection(program);
      let dynamicSerializeReason =
        !!section.paramReasonGroups || isReasonDynamic(section.serializeReason);

      if (!dynamicSerializeReason) {
        for (const reason of section.serializeReasons.values()) {
          if (isReasonDynamic(reason)) {
            dynamicSerializeReason = true;
            break;
          }
        }
      }

      if (dynamicSerializeReason) {
        renderContent.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier(getSharedUid(`scope${section.id}_reason`, section)),
              callRuntime("_scope_reason"),
            ),
          ]),
        );
      } else {
        renderContent.push(t.expressionStatement(callRuntime("_scope_reason")));
      }

      for (const child of program.get("body")) {
        if (!isStatic(child)) {
          renderContent.push(child.node);
          child.remove();
        } else if (child.isMarkoScriptlet()) {
          if (child.node.target && child.node.target !== "server") {
            child.remove();
          } else {
            child.replaceWithMultiple(child.node.body);
          }
        }
      }

      const contentId = usedSharedUid("content") && getTemplateContentName();
      const contentFn = t.arrowFunctionExpression(
        [t.identifier("input")],
        t.blockStatement(renderContent),
      );
      const exportDefault = t.exportDefaultDeclaration(
        callRuntime(
          "_template",
          t.stringLiteral(program.hub.file.metadata.marko.id),
          contentId ? t.identifier(contentId) : contentFn,
        ),
      );

      if (contentId) {
        program.node.body.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(t.identifier(contentId), contentFn),
          ]),
          exportDefault,
        );
      } else {
        program.node.body.push(exportDefault);
      }
    },
  },
} satisfies TemplateVisitor<t.Program>;

function replaceNode(node: t.Node) {
  return replaceBindingReadNode(node) || replaceRegisteredFunctionNode(node);
}

function replaceBindingReadNode(node: t.Node) {
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "OptionalMemberExpression": {
      const { extra } = node;
      if (
        extra &&
        !(
          (extra.read && !extra.read.binding.declared) ||
          (extra.binding && !extra.binding.declared)
        )
      ) {
        // Only rename declared bindings
        // TODO this is probably wrong and should walk up to the closest declared binding.
        return getReadReplacement(node);
      }
      break;
    }
    case "CallExpression": {
      const read = node.callee.extra?.read;
      if (
        read &&
        (read.getter !== undefined || read.binding.type === BindingType.dom)
      ) {
        return t.callExpression(
          t.arrowFunctionExpression(
            [t.cloneNode(node.callee as t.Identifier)],
            node,
          ),
          [
            importRuntime(
              read.binding.type === BindingType.dom
                ? "_el_read_error"
                : "_hoist_read_error",
            ),
          ],
        );
      }
      break;
    }
  }
}

export function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.classProperty(node.key, replacement);
    }
    case "ClassPrivateMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.classPrivateProperty(node.key, replacement);
    }
    case "ObjectMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.objectProperty(node.key, replacement);
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression": {
      return getRegisteredFnExpression(node);
    }
    case "BlockStatement":
    case "MarkoScriptlet":
      addRegisteredDeclarations(node.body);
      break;
  }
}

function addRegisteredDeclarations(body: t.Statement[]) {
  const len = body.length;
  for (let i = 0; i < len; i++) {
    const child = body[i];
    if (
      child.type === "FunctionDeclaration" &&
      isRegisteredFnExtra(child.extra)
    ) {
      body.push(
        t.expressionStatement(
          callRuntime(
            "_resume",
            t.identifier(child.id!.name!),
            t.stringLiteral(child.extra!.registerId),
          ),
        ),
      );
    }
  }
}

function getRegisteredFnExpression(
  node: Exclude<t.Function, t.FunctionDeclaration>,
) {
  const { extra } = node;
  if (isRegisteredFnExtra(extra)) {
    return callRuntime(
      "_resume",
      simplifyFunction(node) as
        | t.FunctionExpression
        | t.ArrowFunctionExpression,
      t.stringLiteral(extra.registerId),
      (extra.referencedBindingsInFunction || extra.referencesScope) &&
        getScopeIdIdentifier(extra.section),
    );
  }
}

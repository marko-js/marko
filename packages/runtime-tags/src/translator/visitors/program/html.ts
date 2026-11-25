import { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import { BindingType } from "../../util/bindings";
import {
  generateUidIdentifier,
  ensureSharedUid,
  hasSharedUid,
} from "../../util/generate-uid";
import isStatic from "../../util/is-static";
import { getMarkoOpts } from "../../util/marko-config";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { first, forEach } from "../../util/optional";
import { getReadReplacement } from "../../util/read-replacement";
import { callRuntime, importRuntime } from "../../util/runtime";
import {
  forEachSection,
  getScopeIdIdentifier,
  getSection,
  isOptionalBranch,
  type Section,
} from "../../util/sections";
import {
  addWriteScopeBuilder,
  getBindingGetterIdentifier,
  getHTMLSectionStatements,
  getResumeRegistryId,
  replaceRegisteredFunctionNode,
  writeHTMLResumeStatements,
  writeRegisteredFns,
  writeSlot,
} from "../../util/signals";
import { findSectionSlot, SlotKind } from "../../util/slots";
import { traverseReplace } from "../../util/traverse";
import type { TemplateVisitor } from "../../util/visitors";
import { getScopeReasonStatement } from "../../util/write-guard";

export default {
  translate: {
    enter() {
      const sectionDynamicSubscribers = new Set<Section>();
      forEachSection((section) => {
        forEach(section.bindings, (binding) => {
          if (!binding.getters) return;
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
                            getResumeRegistryId(hoistSection, binding, "hoist"),
                          ),
                        ),
                      )
                    : t.variableDeclarator(
                        t.identifier(binding.originalName!),
                        callRuntime(
                          "_el",
                          getScopeIdIdentifier(section),
                          t.stringLiteral(
                            getResumeRegistryId(section, binding),
                          ),
                        ),
                      ),
                ]),
              );
            }
          }
        });

        forEach(section.hoisted, (binding) => {
          const highestHoistSection = first(binding.hoists!);
          let currentSection = section;
          while (currentSection !== highestHoistSection) {
            const parentSection = currentSection.parent!;
            if (
              !isOptionalBranch(currentSection) &&
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
              writeSlot(
                findSectionSlot(currentSection, SlotKind.Scopes, parentSection),
                subscribersIdentifier,
              );
            }
            currentSection = parentSection;
          }
        });
      });
    },
    exit(program) {
      if (program.node.extra.hasGlobalRead) {
        // Declared, not rewritten: `$global` reads already resolve to this
        // binding, and one read keeps deferred callbacks off a stale chunk.
        getHTMLSectionStatements(getSection(program)).push(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier("$global"),
              callRuntime("$global"),
            ),
          ]),
        );
      }

      writeHTMLResumeStatements(program);
      const statics: t.Statement[] = [];
      const renderContent: t.Statement[] = [
        getScopeReasonStatement(getSection(program)),
      ];

      for (const child of program.get("body")) {
        if (!isStatic(child)) {
          renderContent.push(child.node);
        } else if (child.isMarkoScriptlet()) {
          statics.push(...child.node.body);
        } else {
          statics.push(child.node);
        }
      }
      program.node.body = statics;

      writeModuleRegistrations(program);

      const contentId = hasSharedUid("content") && ensureSharedUid("content");
      const contentFn = t.arrowFunctionExpression(
        [t.identifier("input")],
        t.blockStatement(renderContent),
      );
      traverseReplace(contentFn.body, "body", replaceNode);
      writeRegisteredFns();
      const exportDefault = t.exportDefaultDeclaration(
        callRuntime(
          "_template",
          t.stringLiteral(getFile().metadata.marko.id),
          contentId ? t.identifier(contentId) : contentFn,
          // A non-page template gets a randomized render id ("embed") so several
          // can share a document without colliding; without linkAssets, use a fixed page id.
          program.node.extra.page || !getMarkoOpts().linkAssets
            ? t.numericLiteral(1)
            : undefined,
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
      return getReadReplacement(node);
    }
    case "CallExpression":
    case "OptionalCallExpression": {
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

import { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import { BindingType } from "../../util/bindings";
import {
  generateUidIdentifier,
  getSharedUid,
  usedSharedUid,
} from "../../util/generate-uid";
import { getDeclaredBindingExpression } from "../../util/get-declared-binding-expression";
import isStatic from "../../util/is-static";
import { getMarkoOpts, isPatch } from "../../util/marko-config";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { forEach, some } from "../../util/optional";
import {
  getCreateInitClosures,
  getPatchFillBindings,
  getSectionGlobalReads,
  isPatchFillBinding,
} from "../../util/patch/refresh";
import { getReadReplacement } from "../../util/read-replacement";
import { getSourcesForRef } from "../../util/reasons";
import {
  isRegisteredFnExtra,
  getReferencedBindingsInFunction,
} from "../../util/references";
import { callRuntime, importRuntime } from "../../util/runtime";
import { getLocalsScopeAccessor } from "../../util/scope-accessor";
import {
  forEachSection,
  getScopeIdIdentifier,
  getSection,
  isResumedBranch,
  type Section,
} from "../../util/sections";
import {
  buildShell,
  getShellId,
  getShells,
  getShippedShellId,
} from "../../util/shell";
import {
  addWriteScopeBuilder,
  getBindingGetterIdentifier,
  getHTMLSectionStatements,
  getResumeRegisterId,
  getSectionEffectRegisterIds,
  getSignals,
  patchCreates,
  setScopeProperty,
  writeHTMLResumeStatements,
} from "../../util/signals";
import { simplifyFunction } from "../../util/simplify-fn";
import { findSectionSlot, SlotKind } from "../../util/slots";
import { getSectionMeta, writeStructureExports } from "../../util/structure";
import { toObjectProperty } from "../../util/to-property-name";
import { traverseReplace } from "../../util/traverse";
import type { TemplateVisitor } from "../../util/visitors";
import { getScopeReasonStatement } from "../../util/write-guard";
import { flushInto } from "../../util/writer";

export function getTemplateContentName() {
  return getSharedUid("content");
}

export default {
  translate: {
    enter() {
      const sectionDynamicSubscribers = new Set<Section>();
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
              !isResumedBranch(currentSection) &&
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
              setScopeProperty(
                findSectionSlot(
                  currentSection,
                  SlotKind.Instances,
                  parentSection,
                ),
                subscribersIdentifier,
              );
            }
            currentSection = parentSection!;
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

      const patches = isPatch();
      flushInto(program);
      writeHTMLResumeStatements(program);
      traverseReplace(program.node, "body", replaceNode);
      const renderContent: t.Statement[] = [];
      const section = getSection(program);
      renderContent.push(getScopeReasonStatement(section));

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

      writeModuleRegistrations(program);

      const shells = getShells();
      if (patches && shells) {
        // Naming the template's parts first lets its shells share them.
        getSectionMeta(section);
        // Branch shells register at server module load so patches can create
        // them without the client bundling conditional content.
        const shellProps: t.ObjectProperty[] = [];
        for (const id in shells) {
          const section = shells[id];
          // A branch shell ships where the tags creating it name it.
          if (id === getShellId(section) && !getShippedShellId(section)) {
            continue;
          }
          // A shell's id token is `inits…!effects…`; a lone `!` means setup
          // for seeds alone. Roots, content and boundary bodies carry one too.
          let marker = "";
          if (
            id === getShellId(section) ||
            !section.parent ||
            ((section.contentShell === true ||
              section.branch?.optional === false) &&
              patchCreates(section))
          ) {
            marker = getCreateInitIds(section);
            // An effect the created scope's own renders queue (an init, seed,
            // or item write cascades into it) is left out: those renders run it.
            const effectIds = getSectionEffectRegisterIds(
              section,
              (refs) =>
                !!getSourcesForRef(refs)?.state ||
                some(
                  refs,
                  (ref) => ref.section === section && isPatchFillBinding(ref),
                ),
            );
            if (effectIds) marker += "!" + effectIds;
            marker ||= getPatchFillBindings(section) ? "!" : "";
          }
          shellProps.push(
            toObjectProperty(id, buildShell(id, section, marker)),
          );
        }
        if (shellProps.length) {
          program.node.body.push(
            t.expressionStatement(
              callRuntime("_shells", t.objectExpression(shellProps)),
            ),
          );
        }
      }

      // A parent's shell composes this template's markup and walks, exported
      // under the dom module's names once the shells have named their parts.
      if (patches) writeStructureExports(program);

      const contentId = usedSharedUid("content") && getTemplateContentName();
      const contentFn = t.arrowFunctionExpression(
        [t.identifier("input")],
        t.blockStatement(renderContent),
      );
      const exportDefault = t.exportDefaultDeclaration(
        callRuntime(
          patches ? "_template_patch" : "_template",
          t.stringLiteral(getFile().metadata.marko.id),
          contentId ? t.identifier(contentId) : contentFn,
          // A non-page template gets a randomized render id ("embed") so several
          // can share a document without colliding; without linkAssets, use a fixed page id.
          program.node.extra!.page || !getMarkoOpts().linkAssets
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

function replaceRegisteredFunctionNode(node: t.Node) {
  switch (node.type) {
    case "ClassMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement &&
        t.classProperty(
          node.key,
          replacement,
          undefined,
          undefined,
          node.computed,
          node.static,
        )
      );
    }
    case "ClassPrivateMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement &&
        t.classPrivateProperty(node.key, replacement, undefined, node.static)
      );
    }
    case "ObjectMethod": {
      const replacement = getRegisteredFnExpression(node);
      return (
        replacement && t.objectProperty(node.key, replacement, node.computed)
      );
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
    const referencedLocals = extra.referencedLocalBindingsInFunction;
    if (referencedLocals) {
      // Locals only exist while this render runs, so they're written into a
      // dedicated scope the client reads them back out of on resume.
      const localProperties: t.ObjectExpression["properties"] = [];
      forEach(referencedLocals, (binding) => {
        localProperties.push(
          toObjectProperty(
            getLocalsScopeAccessor(binding),
            getDeclaredBindingExpression(binding),
          ),
        );
      });
      return callRuntime(
        "_resume_locals",
        simplifyFunction(node) as
          | t.FunctionExpression
          | t.ArrowFunctionExpression,
        t.stringLiteral(extra.registerId),
        t.objectExpression(localProperties),
        (getReferencedBindingsInFunction(extra) || extra.referencesScope) &&
          getScopeIdIdentifier(extra.section),
      );
    }

    return callRuntime(
      "_resume",
      simplifyFunction(node) as
        | t.FunctionExpression
        | t.ArrowFunctionExpression,
      t.stringLiteral(extra.registerId),
      (getReferencedBindingsInFunction(extra) || extra.referencesScope) &&
        getScopeIdIdentifier(extra.section),
    );
  }
}

// The inits a created scope of the section runs, as the shell grammar's
// space-joined ids.
function getCreateInitIds(section: Section) {
  let ids = "";
  forEach(getCreateInitClosures(section), (closure) => {
    ids += (ids && " ") + getResumeRegisterId(section, closure, "init");
  });
  if (patchCreates(section)) {
    forEach(getSectionGlobalReads(section), (binding) => {
      if (getSignals(section).get(binding)?.hasHTMLEffect) {
        ids += (ids && " ") + getResumeRegisterId(section, binding, "init");
      }
    });
  }
  return ids;
}

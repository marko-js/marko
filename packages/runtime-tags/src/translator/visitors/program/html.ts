import { types as t } from "@marko/compiler";
import { getTagDef } from "@marko/compiler/babel-utils";

import { isEventHandler } from "../../../common/helpers";
import evaluate from "../../util/evaluate";
import {
  generateUidIdentifier,
  getSharedUid,
  usedSharedUid,
} from "../../util/generate-uid";
import { getDeclaredBindingExpression } from "../../util/get-declared-binding-expression";
import { isConditionTag, isCoreTagName } from "../../util/is-core-tag";
import { isEventOrChangeHandler } from "../../util/is-event-or-change-handler";
import isStatic from "../../util/is-static";
import { getMarkoOpts, isPersisted } from "../../util/marko-config";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { forEach } from "../../util/optional";
import {
  getPatchFillBindings,
  hasUnfillablePatchReads,
  isPatchCaptureSection,
  scopeReasonRuntime,
} from "../../util/persisted";
import {
  BindingType,
  getReadReplacement,
  getLocalsScopeAccessor,
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
import { getScopeReasonDeclaration } from "../../util/serialize-guard";
import {
  getSerializeSourcesForExpr,
  isReasonDynamic,
} from "../../util/serialize-reasons";
import { getDroppedShellIds, getShellId } from "../../util/shell";
import {
  addWriteScopeBuilder,
  getBindingGetterIdentifier,
  getHTMLSectionStatements,
  getResumeRegisterId,
  getSectionEffectRegisterIds,
  sectionHasServerEffect,
  setSerializedValue,
  writeHTMLResumeStatements,
} from "../../util/signals";
import { simplifyFunction } from "../../util/simplify-fn";
import { toObjectProperty } from "../../util/to-property-name";
import { traverseReplace } from "../../util/traverse";
import type { TemplateVisitor } from "../../util/visitors";
import { flushInto } from "../../util/writer";
import { controllableFeatureFor } from "../tag/native-tag";

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
      const persisted = isPersisted();
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

      if (dynamicSerializeReason || persisted) {
        // Persisted output always declares the reason: statically serialized
        // values ride it so patch renders drop them.
        renderContent.push(getScopeReasonDeclaration(section));
      } else {
        renderContent.push(
          t.expressionStatement(callRuntime(scopeReasonRuntime())),
        );
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

      writeModuleRegistrations(program);

      const shells = program.hub.file.metadata.marko.persistedShells;
      if (persisted && shells) {
        // Branch shells, derived during analyze, register at server module
        // load so patches can ship constructible shells without the client
        // bundling conditional content. Translate may have dropped some
        // (state-fed holes construct unfaithfully).
        const active = { ...shells };
        for (const id of getDroppedShellIds()) delete active[id];
        // Mount-effect register ids ride the shell's id token (entries
        // reference the bare id); a server-reading effect drops the shell.
        forEachSection((section) => {
          const id = getShellId(section);
          if (active[id]) {
            if (sectionHasServerEffect(section)) {
              delete active[id];
            } else {
              // `!` marks a shell needing setup for seeds alone, so purely
              // static shells skip the setup queue entirely.
              const marker =
                getSectionEffectRegisterIds(section) ||
                (getPatchFillBindings(section) ? "!" : "");
              if (marker) {
                active[id] = id + " " + marker + active[id].slice(id.length);
              }
            }
          }
        });
        // Pre-quoted as frame chunks here (template literals, so attribute
        // quotes ride unescaped); the runtime registry just stores them.
        for (const id in active) {
          active[id] =
            ",`" + active[id].replace(/[\\`]|\$\{/g, (m) => "\\" + m) + "`";
        }
        if (Object.keys(active).length) {
          program.node.body.push(
            t.expressionStatement(
              callRuntime("_renderer_shells", t.valueToNode(active)),
            ),
          );
        }
      }

      const contentId = usedSharedUid("content") && getTemplateContentName();
      const contentFn = t.arrowFunctionExpression(
        [t.identifier("input")],
        t.blockStatement(renderContent),
      );
      const exportDefault = t.exportDefaultDeclaration(
        callRuntime(
          persisted ? "_template_persisted" : "_template",
          t.stringLiteral(program.hub.file.metadata.marko.id),
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

export function assertSupportedPatch(program: t.NodePath<t.Program>) {
  const unsupported = (node: t.Node) => {
    throw program.hub.buildError(
      node,
      "Persisted templates currently support only escaped dynamic text and plain dynamic attributes in native HTML.",
    );
  };
  program.traverse({
    MarkoPlaceholder({ node }) {
      if (!node.escape) unsupported(node);
    },
    MarkoScriptlet({ node }) {
      unsupported(node);
    },
    MarkoTag(tag) {
      const { node } = tag;
      const tagName = t.isStringLiteral(node.name) && node.name.value;
      const tagDef = getTagDef(tag);
      // A server-driven conditional's patches ship the selected branch's
      // rendered html wholesale, so the branch must be inert: a state-fed
      // test is client-owned, and state or handlers inside would not survive
      // (or hydrate within) a shipped swap.
      if (isConditionTag(tag) || isCoreTagName(tag, "for")) {
        // The walk pairs branches structurally at any depth, but only when
        // every enclosing section is itself a branch.
        if (!isPatchCaptureSection(getSection(tag))) unsupported(node);
        for (const attr of node.attributes) {
          if (
            attr.type === "MarkoSpreadAttribute" ||
            getSerializeSourcesForExpr(attr.value.extra || {})?.state
          ) {
            unsupported(attr);
          }
        }
        return;
      }
      // A `<script>`'s server-derived reads stay current over the wire
      // (fills or effect refresh); globals never re-queue, so those stay
      // stale and reject.
      if (tagName === "script") {
        for (const attr of node.attributes) {
          if (attr.type === "MarkoAttribute" && attr.name === "value") {
            if (
              getSerializeSourcesForExpr(attr.value.extra || {})?.global ||
              hasUnfillablePatchReads(attr.value.extra?.referencedBindings)
            ) {
              unsupported(attr);
            }
          }
        }
        return;
      }
      // A seeded `<const>` equality-elides the initial write a values-free
      // shell needs, and a `<let>`'s change handler has no construct-time
      // wiring yet, so both stay unsupported inside branches.
      if (
        (tagName === "const" ||
          (tagName === "let" &&
            node.attributes.some(
              (attr) =>
                attr.type === "MarkoAttribute" && attr.name === "valueChange",
            ))) &&
        tag.findParent(
          (parent) =>
            parent.isMarkoTag() &&
            (isConditionTag(parent) || isCoreTagName(parent, "for")),
        )
      ) {
        unsupported(node);
      }
      // Client state participates through value fills: patches never carry
      // state, and holes it feeds recompute through the signal graph.
      if (tagName === "let" || tagName === "const") return;
      // A templated custom tag re-renders during a patch; a state-fed
      // attribute would resolve from the server's stale state, so those
      // fail closed until per-instance classification exists.
      if (tagDef?.template) {
        for (const attr of node.attributes) {
          if (
            attr.type === "MarkoSpreadAttribute" ||
            getSerializeSourcesForExpr(attr.value.extra || {})?.state
          ) {
            unsupported(attr);
          }
        }
        return;
      }
      if (
        !(
          tagDef &&
          tagDef.html &&
          ((tagDef.htmlType as string) === "custom-element" ||
            (!tagDef.template && !tagDef.renderer))
        )
      ) {
        unsupported(node);
      }
      // A tag that may become controllable keeps all of its dynamic
      // attributes unsupported until patching understands controlled state.
      const controllable = !!controllableFeatureFor(tagName as string);
      for (const attr of node.attributes) {
        if (
          attr.type === "MarkoSpreadAttribute"
            ? !evaluate(attr.value).confident
            : !evaluate(attr.value).confident &&
              (controllable ||
                (isEventOrChangeHandler(attr.name) &&
                  !isEventHandler(attr.name)) ||
                // A handler reads captured server input from the scope at
                // call time, so fills keep it current; anything unfillable
                // would read stale.
                (isEventHandler(attr.name) &&
                  hasUnfillablePatchReads(
                    (attr.value.extra as t.FunctionExtra | undefined)
                      ?.referencedBindingsInFunction,
                  )) ||
                // `content=` mounts structural content the patch wire has no
                // entry for, so a dynamic one cannot apply faithfully.
                attr.name === "content" ||
                attr.name === "class" ||
                attr.name === "style" ||
                (tagName === "option" && attr.name === "value"))
        ) {
          unsupported(attr);
        }
      }
    },
  });
}

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
        (extra.referencedBindingsInFunction || extra.referencesScope) &&
          getScopeIdIdentifier(extra.section),
      );
    }

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

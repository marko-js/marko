import { types as t } from "@marko/compiler";
import {
  getTagDef,
  isAttributeTag,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

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
import { getPersistedGroupOwnership } from "../../util/known-tag";
import { getMarkoOpts, isPersisted } from "../../util/marko-config";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { forEach } from "../../util/optional";
import {
  getConstructInitClosures,
  getPatchFillBindings,
  hasUndeliverableFillReads,
  hasUnfillablePatchReads,
  isPatchCaptureSection,
  kPatchClientOwned,
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
  getSerializeSourcesForRef,
  isReasonDynamic,
} from "../../util/serialize-reasons";
import {
  getDroppedShellIds,
  getShellId,
  recordConstructBlocker,
} from "../../util/shell";
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
import { getRelatedControllable } from "../tag/native-tag";

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
        // Every blocker funnels through the recorded shell decision; the
        // packaging below only reads it.
        forEachSection((section) => {
          if (shells[getShellId(section)] && sectionHasServerEffect(section)) {
            recordConstructBlocker(section, "effect reads the server");
          }
        });
        for (const id of getDroppedShellIds()) delete active[id];
        // Mount-effect register ids ride the shell's id token (entries
        // reference the bare id).
        forEachSection((section) => {
          const id = getShellId(section);
          if (active[id]) {
            {
              // `!` marks a shell needing setup for seeds alone, so purely
              // static shells skip the setup queue entirely. Closure render
              // ids lead: a construct paints state-fed holes before mount
              // effects can read them.
              let marker = getSectionEffectRegisterIds(section);
              forEach(getConstructInitClosures(section), (closure) => {
                marker =
                  getResumeRegisterId(section, closure, "init") +
                  (marker && " " + marker);
              });
              marker ||= getPatchFillBindings(section) ? "!" : "";
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
  const unsupported = (node: t.Node, detail?: string) => {
    throw program.hub.buildError(
      node,
      detail
        ? `Persisted templates cannot patch this faithfully yet: ${detail}.`
        : "Persisted templates currently support only escaped dynamic text and dynamic attributes in native HTML.",
    );
  };
  program.traverse({
    MarkoPlaceholder(placeholder) {
      const { node } = placeholder;
      if (!node.escape) unsupported(node);
      if (
        hasUndeliverableFillReads(
          getSection(placeholder),
          node.value.extra?.referencedBindings,
        )
      ) {
        unsupported(
          node,
          "a server value's fill delivery path leaves the branch chain",
        );
      }
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
      // Fills and direct `$global` reads stay current over the wire; a
      // global-DERIVED binding never re-ships, so its reads reject as stale.
      if (tagName === "script") {
        for (const attr of node.attributes) {
          if (
            attr.type === "MarkoAttribute" &&
            attr.name === "value" &&
            (getSerializeSourcesForRef(attr.value.extra?.referencedBindings)
              ?.global ||
              hasUnfillablePatchReads(attr.value.extra?.referencedBindings))
          ) {
            unsupported(attr);
          }
        }
        return;
      }
      // Client state participates through value fills: patches never carry
      // state, and holes it feeds recompute through the signal graph.
      if (tagName === "let" || tagName === "const") return;
      // Templated instances classify per child param group: the ownership
      // mask withholds server writes for client-fed groups.
      if (tagDef?.template) {
        // A sourceless call bakes a value no client signal recomputes, so
        // its opacity counts as server-fed.
        let anyOpaque = false;
        const checkOpaque = (
          extra: t.NodeExtra | undefined,
          value: t.Expression,
        ) => {
          if (
            !getSerializeSourcesForExpr(extra || {}) &&
            !evaluate(value).confident
          ) {
            t.traverseFast(value, (n) => {
              anyOpaque ||=
                t.isCallExpression(n) ||
                t.isOptionalCallExpression(n) ||
                t.isNewExpression(n) ||
                t.isTaggedTemplateExpression(n);
            });
          }
        };
        const hasStateFeed = (extra: t.NodeExtra | undefined) => {
          let state = !!getSerializeSourcesForExpr(extra || {})?.state;
          forEach(
            (extra as t.FunctionExtra | undefined)
              ?.referencedBindingsInFunction,
            (binding) => {
              state ||= !!getSerializeSourcesForRef(binding)?.state;
            },
          );
          return state;
        };
        let anyState = false;
        for (const attr of node.attributes) {
          if (attr.type === "MarkoSpreadAttribute") {
            unsupported(attr);
          } else {
            checkOpaque(attr.value.extra, attr.value);
          }
          anyState ||= hasStateFeed(attr.value.extra);
        }
        // Arguments and rest-consumed children (a whole-`input` read, rest
        // props) merge their reads into the tag's own extra, not per-expr.
        anyState ||= hasStateFeed(node.extra);
        for (const arg of node.arguments || []) {
          if (t.isSpreadElement(arg)) {
            unsupported(arg);
          } else {
            checkOpaque(arg.extra, arg);
            anyState ||= hasStateFeed(arg.extra);
          }
        }
        // Attribute tags feed params too; opacity must see their values.
        const checkAttrTags = (body: t.NodePath<t.MarkoTagBody>) => {
          for (const child of body.get("body")) {
            if (child.isMarkoTag() && isAttributeTag(child)) {
              for (const attr of child.node.attributes) {
                if (attr.type === "MarkoAttribute") {
                  checkOpaque(attr.value.extra, attr.value);
                }
              }
              checkAttrTags(child.get("body"));
            }
          }
        };
        checkAttrTags(tag.get("body"));
        const ownership = node.extra && getPersistedGroupOwnership(node.extra);
        if (!ownership) {
          // No per-group analysis means no mask: an all-server child would
          // overwrite live client values.
          if (anyState) {
            unsupported(
              node,
              "client state cannot feed a tag without analyzable input",
            );
          }
          return;
        }
        let anyServerable = false;
        for (const group of ownership) {
          anyServerable ||= group.serverable;
          // Groups see feeds the attr walk cannot (attribute tags).
          anyState ||= group.stateFed;
          if (!group.stateFed) continue;
          if (group.globalMixed) {
            unsupported(
              node,
              "client state and `$global` cannot mix in one input group",
            );
          }
          if (group.serverRequired) {
            unsupported(
              node,
              "client state cannot feed an input the child needs server-owned (it drives structure or mixes with `$global`)",
            );
          }
          // A server value sharing a client-fed group updates through its
          // fill; without one its changes could never reach the child.
          if (
            group.parentParams &&
            hasUnfillablePatchReads(group.parentParams)
          ) {
            unsupported(
              node,
              "a server value mixed into a client-fed input group must be patchable through a fill",
            );
          }
        }
        // An untracked call can change server-side, but a withheld capture
        // has no other way to deliver it.
        if (anyState && anyOpaque) {
          unsupported(
            node,
            "an untracked call cannot mix with client state across one tag's input",
          );
        }
        // Body-only state is invisible to classification, so a tag variable
        // cannot yet coexist with dynamic body content.
        if (node.var) {
          for (const child of tag.get("body").get("body")) {
            if (!isStatic(child)) {
              unsupported(
                node,
                "a tag variable with dynamic body content is not yet patchable",
              );
            }
          }
        }
        if (anyState) {
          if (node.var) {
            unsupported(
              node,
              "a tag variable cannot return through a client-owned instance yet",
            );
          }
          // Skip only when nothing could change server-side: any other
          // vector (globals, body content) keeps the guarded render.
          if (!anyServerable) {
            let skips = true;
            for (const child of tag.get("body").get("body")) {
              skips &&= isStatic(child);
            }
            const childFile = loadFileForTag(tag);
            if (
              skips &&
              childFile &&
              !childFile.path.node.extra?.persistedGlobals
            ) {
              (node.extra ??= {})[kPatchClientOwned] = true;
            }
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
      // A control patches through its registered helper (value entry +
      // handler bind), so its own attrs lift; kinds the wire cannot yet
      // express faithfully stay closed: checkedValue groups, mode-shifting
      // input types (the select's mode rides the VALUE's shape, so a
      // dynamic `multiple=` is just an attribute).
      const seen: Record<string, t.MarkoAttribute> = Object.create(null);
      for (const attr of node.attributes) {
        if (attr.type === "MarkoAttribute") seen[attr.name] = attr;
      }
      const related = getRelatedControllable(tagName as string, seen);
      if (related) {
        if (related.helper === "_attr_input_checkedValue") {
          unsupported(node, "`checkedValue` groups are not patchable");
        } else if ("valueMode" in related && related.valueMode) {
          unsupported(node, "a dynamic `type=` can change the control kind");
        }
      }
      const controlled = new Set<t.Node>(
        related ? (related.attrs.filter(Boolean) as t.Node[]) : [],
      );
      for (const attr of node.attributes) {
        // Handlers read fills from the scope at call time (the owner slot
        // write alone keeps them current), so only rendered values gate.
        if (
          !(
            attr.type === "MarkoAttribute" && isEventOrChangeHandler(attr.name)
          ) &&
          hasUndeliverableFillReads(
            getSection(tag),
            attr.value.extra?.referencedBindings,
          )
        ) {
          unsupported(
            attr,
            "a server value's fill delivery path leaves the branch chain",
          );
        }
        if (attr.type === "MarkoAttribute" && controlled.has(attr)) continue;
        if (
          attr.type === "MarkoSpreadAttribute"
            ? !evaluate(attr.value).confident
            : !evaluate(attr.value).confident &&
              ((isEventOrChangeHandler(attr.name) &&
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
                // Option state couples to the parent select's selection;
                // a lone attribute write cannot re-sync it.
                (tagName === "option" &&
                  (attr.name === "value" || attr.name === "selected")))
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

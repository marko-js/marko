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
import {
  getKnownTagReturnReason,
  getParamGroupFeeds,
  hasServerFeed,
  type ParamGroupFeeds,
} from "../../util/known-tag";
import { getMarkoOpts, isPersisted } from "../../util/marko-config";
import { writeModuleRegistrations } from "../../util/module-registrations";
import { every, forEach, some } from "../../util/optional";
import {
  getConstructInitClosures,
  getPatchFillBindings,
  hasUndeliverableFillReads,
  hasUnfillablePatchReads,
  isPatchCaptureWriteBinding,
  isPatchEffectBinding,
  isPatchFillBinding,
  kInstancePatchSkip,
} from "../../util/persisted/delivery";
import {
  getPersistedIntrinsics,
  scopeReasonRuntime,
} from "../../util/persisted/intrinsics";
import {
  inClientReselectableStructure,
  isCapturePathSection,
} from "../../util/persisted/structure";
import {
  BindingType,
  getCanonicalExtra,
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
  getSectionForBody,
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
  getShells,
  recordConstructBlocker,
} from "../../util/shell";
import {
  addOpaqueRenderProp,
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

      const shells = getShells();
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
      // A non-page template gets a randomized render id ("embed") so several
      // can share a document without colliding; without linkAssets, use a fixed page id.
      const pageArg =
        program.node.extra!.page || !getMarkoOpts().linkAssets
          ? t.numericLiteral(1)
          : undefined;
      const exportDefault = t.exportDefaultDeclaration(
        callRuntime(
          persisted ? "_template_persisted" : "_template",
          t.stringLiteral(program.hub.file.metadata.marko.id),
          contentId ? t.identifier(contentId) : contentFn,
          // Persisted templates always carry their intrinsics (absent =
          // FOREIGN renderer, which parents must render through): the local
          // globals/opaque bit plus lazily-referenced child renderers.
          ...(persisted
            ? buildIntrinsicsArgs(program, pageArg ?? t.numericLiteral(0))
            : [pageArg]),
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

// The intrinsics trailing arg, one self-resolving value: `1` = reads
// globals or opaque (children irrelevant once true), a lazy child list
// (an arrow: module cycles must not evaluate eagerly) = locally clean
// but transitively unresolved, `0` = proven clean.
function buildIntrinsicsArgs(
  program: t.NodePath<t.Program>,
  pageArg: t.Expression,
) {
  const { names, opaque } = getPersistedIntrinsics();
  return [
    pageArg,
    opaque || program.node.extra!.readsGlobals
      ? t.numericLiteral(1)
      : names.size
        ? t.arrowFunctionExpression(
            [],
            t.arrayExpression([...names].map((name) => t.identifier(name))),
          )
        : t.numericLiteral(0),
  ];
}

export function assertSupportedPatch(program: t.NodePath<t.Program>) {
  const unsupported = (node: t.Node, detail?: string) => {
    throw program.hub.buildError(
      node,
      detail
        ? `Persisted templates cannot patch this faithfully yet: ${detail}.`
        : "Persisted templates currently support only escaped dynamic text and dynamic attributes in native HTML.",
    );
  };
  // Inside client-owned structure the only delivery channel is an owner
  // fill: reads that neither recompute client-side nor promote fail closed.
  const assertDeliverableInClientOwned = (
    node: t.Node,
    value: t.Expression,
    extra: t.NodeExtra | undefined,
  ) => {
    if (extra?.globalBindings) {
      unsupported(
        node,
        "`$global` cannot be read inside client-owned structure",
      );
    }
    // A source-free untracked call would render once and never again:
    // nothing recomputes it client-side and nothing ships it.
    if (
      !getSerializeSourcesForExpr(extra || {}) &&
      !evaluate(value).confident
    ) {
      let opaque = false;
      t.traverseFast(value, (n) => {
        opaque ||=
          t.isCallExpression(n) ||
          t.isOptionalCallExpression(n) ||
          t.isNewExpression(n) ||
          t.isTaggedTemplateExpression(n);
      });
      if (opaque) {
        unsupported(
          node,
          "an untracked call inside client-owned structure has no delivery channel",
        );
      }
    }
    forEach(extra?.referencedBindings, (binding) => {
      const sources = getSerializeSourcesForRef(binding);
      if (sources?.global) {
        unsupported(
          node,
          "`$global` cannot be read inside client-owned structure",
        );
      }
      if (
        sources?.param &&
        !sources.state &&
        !isPatchFillBinding(binding) &&
        !inClientReselectableStructure(binding.section)
      ) {
        unsupported(
          node,
          "a server value read inside client-owned structure must deliver as a fill",
        );
      }
    });
  };
  // Every server-sourced read in an expression: direct reads, member
  // reads, and reads captured inside any nested function.
  const exprHasServerSources = (value: t.Node) => {
    let server = false;
    t.traverseFast(value, (n) => {
      const extra = n.extra;
      server ||= !!extra?.globalBindings;
      const ref = extra?.read?.binding ?? extra?.referencedBindings;
      if (ref) {
        const sources = getSerializeSourcesForRef(ref);
        server ||= !!(sources?.param || sources?.global);
      }
      forEach(
        (extra as t.FunctionExtra | undefined)?.referencedBindingsInFunction,
        (binding) => {
          const sources = getSerializeSourcesForRef(binding);
          server ||= !!(sources?.param || sources?.global);
        },
      );
    });
    return server;
  };
  // The outer expression matrix, applied inside nested templates so
  // nesting cannot launder shapes the region boundary rejects.
  const nestedValueUnsafety = (
    valuePath: t.NodePath<t.Expression>,
  ): string | null => {
    const value = valuePath.node;
    const extra = value.extra;
    if (
      !getSerializeSourcesForExpr(extra || {}) &&
      !evaluate(value).confident
    ) {
      let opaque = false;
      t.traverseFast(value, (n) => {
        opaque ||=
          t.isCallExpression(n) ||
          t.isOptionalCallExpression(n) ||
          t.isNewExpression(n) ||
          t.isTaggedTemplateExpression(n);
      });
      if (opaque) return "renders an untracked call";
    }
    return null;
  };
  // The input properties a template renders as content (`true` when the
  // reach is unanalyzable: opaque dynamic tags, whole-bag/computed reads).
  const renderedPropsCache = new Map<unknown, true | Set<string>>();
  const childRenderedProps = (
    tagPath: t.NodePath<t.MarkoTag>,
  ): true | Set<string> => {
    const file = loadFileForTag(tagPath);
    if (!file) return true;
    const cached = renderedPropsCache.get(file);
    if (cached !== undefined) return cached;
    renderedPropsCache.set(file, true);
    let props: true | Set<string> = new Set();
    file.path.traverse({
      MarkoTag(inner) {
        if (props !== true && !t.isStringLiteral(inner.node.name)) {
          if (
            isContentRenderTag(inner.node) &&
            inner.scope.getBinding("input")?.path.type === "Program"
          ) {
            props.add(
              ((inner.node.name as t.MemberExpression).property as t.Identifier)
                .name,
            );
          } else {
            props = true;
          }
        }
      },
      Identifier(id) {
        if (
          props !== true &&
          id.node.name === "input" &&
          id.isReferencedIdentifier() &&
          id.scope.getBinding("input")?.path.type === "Program"
        ) {
          const parent = id.parentPath;
          if (
            !(
              parent.isMemberExpression({ computed: false }) &&
              t.isIdentifier(parent.node.property)
            )
          ) {
            props = true;
          } else if (parent.node.property.name === "content") {
            props.add("content");
          }
        }
      },
    });
    renderedPropsCache.set(file, props);
    return props;
  };
  const rendersProp = (props: true | Set<string>, name: string) =>
    props === true || props.has(name);
  // The render of a directly fed renderer: a bare non-computed member of
  // the template's input with nothing else on the tag.
  const isContentRenderTag = (node: t.MarkoTag) =>
    t.isMemberExpression(node.name) &&
    !node.name.computed &&
    t.isIdentifier(node.name.object, { name: "input" }) &&
    !node.var &&
    !node.attributes.length &&
    !node.body.body.length &&
    !node.attributeTags?.length &&
    !node.arguments?.length;
  // Whether a template (and, recursively, everything it renders) is a
  // self-contained client instance: the reason it is not, or null.
  const childUnsafety = new Map<unknown, string | null>();
  const getChildUnsafety = (tagPath: t.NodePath<t.MarkoTag>): string | null => {
    const file = loadFileForTag(tagPath);
    if (!file) return "must be analyzable";
    const cached = childUnsafety.get(file);
    if (cached !== undefined) return cached;
    // A template cycle can only terminate through data the region cannot
    // deliver: fail closed while the entry is pending.
    childUnsafety.set(file, "renders a template cycle");
    let reason: string | null = null;
    file.path.traverse({
      MarkoPlaceholder(ph) {
        reason ||= nestedValueUnsafety(
          ph.get("value") as t.NodePath<t.Expression>,
        );
      },
      // Imported code can carry untracked server knowledge, and aliasing
      // hides call shapes: any module binding fails closed.
      Identifier(id) {
        if (reason || !id.isReferencedIdentifier()) return;
        if (id.node.name === "$global") {
          reason = "reads `$global` (it would go stale)";
        } else if (id.scope.getBinding(id.node.name)?.kind === "module") {
          reason = "references imported code";
        }
      },
      MarkoTag(inner) {
        if (reason) return;
        const name =
          t.isStringLiteral(inner.node.name) && inner.node.name.value;
        if (!name) {
          // Rendering a directly fed renderer is the body-content channel:
          // what it renders is validated where it was compiled.
          if (
            !(
              isContentRenderTag(inner.node) &&
              inner.scope.getBinding("input")?.path.type === "Program"
            )
          ) {
            reason = "renders a dynamic tag";
          }
          return;
        }
        // Boundaries lean on patch-era machinery this instance never
        // receives.
        if (name === "try" || name === "await" || name === "lifecycle") {
          reason = `uses \`<${name}>\``;
          return;
        }
        for (const attrPath of inner.get("attributes")) {
          const innerAttr = attrPath.node;
          if (innerAttr.type !== "MarkoAttribute") {
            if (getTagDef(inner)?.template) {
              reason = "renders a nested child with a spread";
              return;
            }
            continue;
          }
          reason ||= nestedValueUnsafety(
            attrPath.get("value") as t.NodePath<t.Expression>,
          );
          if (reason) return;
        }
        if (getTagDef(inner)?.template) {
          if (inner.node.var) {
            reason = "renders a nested child with a tag variable";
          } else if (
            inner.node.attributeTags?.length ||
            inner.node.arguments?.length
          ) {
            reason = "renders a nested child with attribute tags or arguments";
          } else {
            const feeds =
              inner.node.extra && getParamGroupFeeds(inner.node.extra);
            if (
              !feeds &&
              (inner.node.attributes.length || inner.node.arguments?.length)
            ) {
              reason = "renders a nested child without analyzable input";
            }
            for (const group of feeds || []) {
              if (
                (group.structuralOrGlobal &&
                  groupFedUnsafely(inner.node.attributes, group)) ||
                group.sources?.global
              ) {
                reason = "feeds a nested child an input it needs server-owned";
                break;
              }
            }
            if (!reason) {
              const rendered = childRenderedProps(inner);
              for (const innerAttr of inner.node.attributes) {
                if (
                  innerAttr.type === "MarkoAttribute" &&
                  rendersProp(rendered, innerAttr.name) &&
                  exprHasServerSources(innerAttr.value)
                ) {
                  reason = "feeds a nested child a server value it renders";
                  break;
                }
              }
            }
            reason ||= getChildUnsafety(inner);
          }
        }
      },
    });
    childUnsafety.set(file, reason);
    return reason;
  };
  // Provenance-free feeds (imports, opaque reads) can still change across
  // patches, so only an absent or constant attr leaves a group inert.
  const groupFedUnsafely = (
    attributes: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
    group: ParamGroupFeeds,
  ) => {
    if (group.sources?.state || hasServerFeed(group.sources)) return true;
    let names: Set<string> | undefined;
    forEach(group.params, (param) => {
      (names ??= new Set()).add(param.property ?? param.name);
    });
    return attributes.some(
      (attr) =>
        attr.type === "MarkoAttribute" &&
        names?.has(attr.name) &&
        !evaluate(attr.value).confident,
    );
  };
  program.traverse({
    MarkoPlaceholder(placeholder) {
      const { node } = placeholder;
      if (!node.escape) unsupported(node);
      const section = getSection(placeholder);
      if (
        hasUndeliverableFillReads(section, node.value.extra?.referencedBindings)
      ) {
        unsupported(
          node,
          "a server value's fill delivery path leaves the branch chain",
        );
      }
      if (inClientReselectableStructure(section)) {
        assertDeliverableInClientOwned(node, node.value, node.value.extra);
      }
    },
    MarkoScriptlet({ node }) {
      unsupported(node);
    },
    MarkoTag(tag) {
      const { node } = tag;
      const tagName = t.isStringLiteral(node.name) && node.name.value;
      const tagDef = getTagDef(tag);
      // A server-driven conditional's patches swap in rendered html, so
      // branches must be inert; a pure-state chain is client-owned instead.
      if (isConditionTag(tag) || isCoreTagName(tag, "for")) {
        const section = getSection(tag);
        // The walk pairs branches structurally at any depth, but only when
        // every enclosing section is itself a branch — unless the body
        // classified client-owned (content sections inherit ownership).
        if (
          !isCapturePathSection(section) &&
          !getSectionForBody(tag.get("body"))?.isClientReselectable
        ) {
          unsupported(node);
        }
        if (getSectionForBody(tag.get("body"))?.isClientReselectable) {
          for (const attr of node.attributes) {
            if (attr.type !== "MarkoAttribute") continue;
            // A local `by` invokes client-side per re-list; any server
            // source anywhere in the keyer would read stale.
            if (attr.name === "by") {
              if (exprHasServerSources(attr.value)) {
                unsupported(
                  attr,
                  "a server-derived `by` key inside a client-owned loop would read stale",
                );
              }
              continue;
            }
            // A mixed input re-evaluates on every fill write, so a call in
            // it has no stable value; a pure-state sibling attr may call.
            if (exprHasServerSources(attr.value)) {
              t.traverseFast(attr.value, (n) => {
                if (
                  t.isCallExpression(n) ||
                  t.isOptionalCallExpression(n) ||
                  t.isNewExpression(n) ||
                  t.isTaggedTemplateExpression(n)
                ) {
                  unsupported(
                    attr,
                    "a call mixing client state with server values has no stable delivery",
                  );
                }
              });
            }
          }
          // Enclosing server branches cannot construct around a client-owned
          // selection: shells drop (recorded once, at the chain head).
          if (isCoreTagName(tag, "if") || isCoreTagName(tag, "for")) {
            for (let cur = section; cur.parent; cur = cur.parent) {
              if (cur.isBranch) {
                recordConstructBlocker(cur, "client-owned structure");
              }
            }
          }
          return;
        }
        // Nested structure inherits client ownership, so reaching here
        // means its selection has no delivery channel: fail closed.
        if (inClientReselectableStructure(section)) {
          const attrExtra = node.attributes[0]?.value.extra;
          const sources =
            attrExtra &&
            getSerializeSourcesForExpr(getCanonicalExtra(attrExtra));
          unsupported(
            node,
            sources?.global
              ? "`$global`-driven structure cannot nest inside client-owned structure"
              : "a server value selecting structure inside client-owned structure must be a directly read, named `input` property (so it can deliver as a fill)",
          );
        }
        for (const attr of node.attributes) {
          // The canonical extra sees reads merged into the tag extra; state
          // here means a mix (a pure-state chain returned client-owned above).
          if (
            attr.type === "MarkoSpreadAttribute" ||
            getSerializeSourcesForExpr(
              getCanonicalExtra(attr.value.extra || {}),
            )?.state
          ) {
            unsupported(
              attr,
              attr.type !== "MarkoAttribute"
                ? undefined
                : isConditionTag(tag)
                  ? "a server value in a test mixing client state must be a directly read, named `input` property (so it can deliver as a fill)"
                  : "a server value in loop inputs mixing client state must be a directly read, named `input` property (so it can deliver as a fill)",
            );
          }
        }
        return;
      }
      // Fills and direct `$global` reads stay current over the wire; a
      // global-DERIVED binding never re-ships, so its reads reject as stale.
      if (tagName === "script") {
        for (const attr of node.attributes) {
          if (attr.type === "MarkoAttribute" && attr.name === "value") {
            if (
              getSerializeSourcesForRef(attr.value.extra?.referencedBindings)
                ?.global ||
              hasUnfillablePatchReads(attr.value.extra?.referencedBindings)
            ) {
              unsupported(attr);
            }
            // A script's re-run entry rides the branch partial the frame no
            // longer carries, so only pure-client scripts run inside.
            if (inClientReselectableStructure(getSection(tag))) {
              if (attr.value.extra?.globalBindings) {
                unsupported(
                  attr,
                  "a script reading server values inside client-owned structure is not supported yet",
                );
              }
              forEach(attr.value.extra?.referencedBindings, (binding) => {
                const sources = getSerializeSourcesForRef(binding);
                if (sources?.param || sources?.global) {
                  unsupported(
                    attr,
                    "a script reading server values inside client-owned structure is not supported yet",
                  );
                }
              });
            }
          }
        }
        return;
      }
      // Client state participates through value fills: patches never carry
      // state, and holes it feeds recompute through the signal graph.
      if (tagName === "let" || tagName === "const") {
        const section = getSection(tag);
        if (inClientReselectableStructure(section)) {
          for (const attr of node.attributes) {
            if (attr.type === "MarkoAttribute") {
              assertDeliverableInClientOwned(
                attr,
                attr.value,
                attr.value.extra,
              );
            }
          }
        }
        return;
      }
      // A `<return>` flows to the parent tag variable like a hole flows to
      // output: reads stay current over the wire, so only deliverability
      // gates it (the call site classifies the return's ownership).
      if (tagName === "return") {
        if (inClientReselectableStructure(getSection(tag))) {
          unsupported(
            node,
            "a `<return>` inside client-owned structure is not supported yet",
          );
        }
        const [attr] = node.attributes;
        if (
          attr?.type === "MarkoAttribute" &&
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
        return;
      }
      // Templated instances classify per child param group: the ownership
      // mask withholds server writes for client-fed groups.
      if (tagDef?.template) {
        // Inside client-owned structure a child is a pure client instance
        // (input re-applies via tag-args signals; server values fill).
        if (inClientReselectableStructure(getSection(tag))) {
          if (node.var) {
            unsupported(
              node,
              "a tag variable on a child inside client-owned structure is not supported yet",
            );
          }
          // Body content compiles here, so its expressions are already
          // checked in their own (client-owned) sections; attr tags are not.
          if (node.attributeTags?.length) {
            unsupported(
              node,
              "attribute tags for a child inside client-owned structure are not supported yet",
            );
          }
          // Arguments have no per-group channel: only named attrs deliver.
          if (node.arguments?.length) {
            unsupported(
              node,
              "arguments for a child inside client-owned structure are not supported yet",
            );
          }
          const childFile = loadFileForTag(tag);
          if (!childFile) {
            unsupported(
              node,
              "a child inside client-owned structure must be analyzable",
            );
          }
          // Transitive safety recurses the rendered tree with a memo:
          // every template below must be a self-contained client instance.
          const unsafety = getChildUnsafety(tag);
          if (unsafety) {
            unsupported(
              node,
              `a child inside client-owned structure ${unsafety}`,
            );
          }
          const rendered = childRenderedProps(tag);
          for (const attr of node.attributes) {
            if (attr.type !== "MarkoAttribute") {
              unsupported(attr);
            } else {
              // A prop the child RENDERS receives a renderer: a server
              // value there would have to cross the wire as a function.
              if (
                rendersProp(rendered, attr.name) &&
                exprHasServerSources(attr.value)
              ) {
                unsupported(
                  attr,
                  "a renderer the child renders cannot feed from a server value",
                );
              }
              assertDeliverableInClientOwned(
                attr,
                attr.value,
                attr.value.extra,
              );
            }
          }
          // An inputless child has no groups to classify; anything fed
          // must analyze so each group's channel can be checked.
          const feeds = node.extra && getParamGroupFeeds(node.extra);
          if (!feeds && (node.attributes.length || node.arguments?.length)) {
            unsupported(
              node,
              "a child inside client-owned structure must have analyzable input",
            );
          }
          for (const group of feeds || []) {
            // A structural or `$global`-mixed child param needs server
            // ownership, which a skipped region cannot provide; an unfed
            // (or constant-fed) group can never change, so it may pass.
            if (
              (group.structuralOrGlobal &&
                groupFedUnsafely(node.attributes, group)) ||
              group.sources?.global
            ) {
              unsupported(
                node,
                "an input the child needs server-owned cannot feed from client-owned structure",
              );
            }
            // Under state the child recomputes, so origins need fill
            // JOINS; a composed value ships whole through its own fill,
            // and only its function captures need live slots (writes).
            if (
              group.sources?.state
                ? !every(group.sources.param, isPatchFillBinding)
                : !every(
                    group.sources?.param,
                    (binding) =>
                      isPatchFillBinding(binding) ||
                      isPatchEffectBinding(binding) ||
                      isPatchCaptureWriteBinding(binding),
                  )
            ) {
              unsupported(
                node,
                "a server value feeding a child inside client-owned structure must deliver as a fill",
              );
            }
          }
          return;
        }
        // A content-consuming child renders what this site feeds it; a
        // server-owned instance would poison every patch, so say so now.
        {
          const rendered = childRenderedProps(tag);
          const fedContent =
            node.body.body.length ||
            node.attributes.some(
              (attr) =>
                attr.type === "MarkoAttribute" && attr.name === "content",
            );
          if (
            (fedContent && rendersProp(rendered, "content")) ||
            node.attributeTags?.some(
              (attrTag) =>
                t.isMarkoTag(attrTag) &&
                t.isStringLiteral(attrTag.name) &&
                rendersProp(rendered, attrTag.name.value.slice(1)),
            ) ||
            (rendered === true && (fedContent || node.attributeTags?.length))
          ) {
            unsupported(
              node,
              "content for a child that renders it only works inside client-owned structure (a server-owned instance would navigate on every patch)",
            );
          }
        }
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
        const hasStateFeed = (extra: t.NodeExtra | undefined) =>
          !!getSerializeSourcesForExpr(extra || {})?.state ||
          some(
            (extra as t.FunctionExtra | undefined)
              ?.referencedBindingsInFunction,
            (binding) => !!getSerializeSourcesForRef(binding)?.state,
          );
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
          // The change-binding chain for assigned returns is not wired
          // into persisted serialization yet.
          if (
            node.var?.type === "Identifier" &&
            node.var.extra?.binding?.assignmentSections
          ) {
            unsupported(
              node,
              "assigning a persisted child's tag variable is not supported yet",
            );
          }
          const returnReason =
            node.extra && getKnownTagReturnReason(node.extra);
          if (returnReason && returnReason !== true) {
            // Mixed provenance collapses to state downstream (the server
            // half would never refresh), and global-derived returns never
            // re-ship for the client recompute: both fail closed.
            if (returnReason.state && returnReason.param) {
              unsupported(
                node,
                "a return mixing client state with server params is not supported yet",
              );
            } else if (returnReason.global) {
              unsupported(
                node,
                "a return derived from $global is not supported yet",
              );
            }
          }
        }
        const feeds = node.extra && getParamGroupFeeds(node.extra);
        if (!feeds) {
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
        for (const group of feeds) {
          anyServerable ||= hasServerFeed(group.sources);
          // Groups see feeds the attr walk cannot (attribute tags).
          anyState ||= !!group.sources?.state;
          if (!group.sources?.state) continue;
          if (group.sources.global) {
            unsupported(
              node,
              "client state and `$global` cannot mix in one input group",
            );
          }
          if (group.structuralOrGlobal) {
            unsupported(
              node,
              "client state cannot feed an input the child needs server-owned (it drives structure or mixes with `$global`)",
            );
          }
          // A server value sharing a client-fed group updates through its
          // fill; without one its changes could never reach the child.
          if (
            group.sources?.param &&
            hasUnfillablePatchReads(group.sources?.param)
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
        if (anyState) {
          // Skip only when nothing could change server-side: any other
          // vector (globals, body content) keeps the guarded render.
          if (!anyServerable) {
            let skips = true;
            for (const child of tag.get("body").get("body")) {
              skips &&= isStatic(child);
            }
            // Transitive global knowledge is a RENDER-time question (the
            // child's exported intrinsics); classification only needs a
            // resolvable child whose groups analyzed above. A tag VARIABLE
            // is never a candidate: the call must render for its return,
            // and the var emission path carries no skip gate.
            if (skips && !node.var && loadFileForTag(tag)) {
              (node.extra ??= {})[kInstancePatchSkip] = true;
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
        // A fed renderer renders here: the compile cannot see its content,
        // so the section poisons its patches (navigation) instead.
        if (
          isContentRenderTag(node) &&
          tag.scope.getBinding("input")?.path.type === "Program"
        ) {
          if (inClientReselectableStructure(getSection(tag))) {
            unsupported(
              node,
              "a renderer read inside client-owned structure would need to cross the wire as a function",
            );
          }
          addOpaqueRenderProp(
            getSection(tag),
            ((node.name as t.MemberExpression).property as t.Identifier).name,
          );
          return;
        }
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
      const clientOwnedStructure = inClientReselectableStructure(
        getSection(tag),
      );
      for (const attr of node.attributes) {
        // Handlers read the scope at call time, so only values no write
        // keeps current gate: `$global`-derived slots and function calls.
        if (
          attr.type === "MarkoAttribute" &&
          isEventOrChangeHandler(attr.name)
        ) {
          if (clientOwnedStructure) {
            forEach(
              (attr.value.extra as t.FunctionExtra | undefined)
                ?.referencedBindingsInFunction,
              (binding) => {
                // Direct reads (BindingType.global) see the live bag.
                if (
                  binding.type !== BindingType.global &&
                  getSerializeSourcesForRef(binding)?.global
                ) {
                  unsupported(
                    attr,
                    "a handler reading a `$global`-derived value inside client-owned structure would go stale",
                  );
                }
              },
            );
          }
        } else {
          if (
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
          if (clientOwnedStructure) {
            assertDeliverableInClientOwned(attr, attr.value, attr.value.extra);
          }
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

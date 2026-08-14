// The temporary admission guard (decisions doc D-2026-08-4): fails closed
// on template shapes patches cannot yet apply faithfully. Side-effect-free
// by contract — permanent decisions live in ./decisions — so widening
// support deletes assertions here until the whole module goes.
import { types as t } from "@marko/compiler";
import { getTagDef, loadFileForTag } from "@marko/compiler/babel-utils";

import { isEventHandler } from "../../../common/helpers";
import { getRelatedControllable } from "../../visitors/tag/native-tag";
import * as BindingType from "../constants/binding-type";
import evaluate from "../evaluate";
import { isConditionTag, isCoreTagName } from "../is-core-tag";
import { isEventOrChangeHandler } from "../is-event-or-change-handler";
import {
  getParamGroupFeeds,
  hasServerFeed,
  type ParamGroupFeeds,
} from "../known-tag";
import { every, forEach } from "../optional";
import { getCanonicalExtra } from "../references";
import { getSection, getSectionForBody } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import {
  getChildPatchPlan,
  hasOpaqueCall,
  isContentRenderTag,
} from "./decisions";
import {
  hasUndeliverableFillReads,
  hasUnfillablePatchReads,
  isPatchFillBinding,
  isPatchWriteBinding,
} from "./delivery";
import {
  inClientReselectableStructure,
  isBranchPathSection,
} from "./structure";

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
      !evaluate(value).confident &&
      hasOpaqueCall(value)
    ) {
      unsupported(
        node,
        "an untracked call inside client-owned structure has no delivery channel",
      );
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
  const exprHasStaleServerSources = (
    value: t.Node,
    localSection: NonNullable<ReturnType<typeof getSectionForBody>>,
  ) => {
    let stale = false;
    const visitRef = (ref: Parameters<typeof getSerializeSourcesForRef>[0]) => {
      if (!ref) return;
      if (Array.isArray(ref)) {
        for (const binding of ref) visitRef(binding);
        return;
      }
      const sources = ref.sources;
      stale ||= !!sources?.global;
      stale ||= !!(sources?.param && ref.section !== localSection);
    };
    t.traverseFast(value, (n) => {
      const extra = n.extra;
      stale ||= !!extra?.globalBindings;
      visitRef(extra?.read?.binding ?? extra?.referencedBindings);
      forEach(
        (extra as t.FunctionExtra | undefined)?.referencedBindingsInFunction,
        visitRef,
      );
    });
    return stale;
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
      !evaluate(value).confident &&
      hasOpaqueCall(value)
    ) {
      return "renders an untracked call";
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
      // Attribute tags validate at their owner: `<try>` (the only admitted
      // owner) checks its `<@catch>` content itself.
      if (tagName && tagName[0] === "@") return;
      // An `<await>` body pairs into the live page. A still-pending one
      // flushes a prefix frame and settles in a later frame; the enclosing
      // branch constructs from its shell first.
      if (isCoreTagName(tag, "await")) {
        const [valueAttr] = node.attributes;
        if (
          valueAttr &&
          hasUndeliverableFillReads(
            getSection(tag),
            valueAttr.value.extra?.referencedBindings,
          )
        ) {
          unsupported(
            valueAttr,
            "a server value's fill delivery path leaves the branch chain",
          );
        }
        return;
      }
      if (isCoreTagName(tag, "try")) {
        // Catch/placeholder materialize after any number of patches: a
        // request/input read inside them would go stale. The catch error
        // param is delivered when the branch fires, not a server fill.
        for (const attrPath of tag.get(
          "attributeTags",
        ) as t.NodePath<t.MarkoTag>[]) {
          const attrTag = attrPath.node;
          const attrName =
            t.isStringLiteral(attrTag.name) && attrTag.name.value;
          if (attrName !== "@catch" && attrName !== "@placeholder") continue;
          const localSection =
            attrName === "@catch"
              ? getSectionForBody(attrPath.get("body"))
              : undefined;
          t.traverseFast(attrTag, (n) => {
            const value =
              (t.isMarkoPlaceholder(n) && n.value) ||
              (t.isMarkoAttribute(n) && n.value);
            if (
              value &&
              (localSection
                ? exprHasStaleServerSources(value, localSection)
                : exprHasServerSources(value))
            ) {
              unsupported(
                n,
                attrName === "@placeholder"
                  ? "a server value inside `<@placeholder>` content would go stale"
                  : "a server value inside `<@catch>` content would go stale",
              );
            }
          });
        }
        return;
      }
      // A server-driven conditional's patches swap in rendered html, so
      // branches must be inert; a pure-state chain is client-owned instead.
      if (isConditionTag(tag) || isCoreTagName(tag, "for")) {
        const section = getSection(tag);
        // The walk pairs branches structurally at any depth, but only when
        // every enclosing section is itself a branch — unless the body
        // classified client-owned (content sections inherit ownership).
        if (
          !isBranchPathSection(section) &&
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
            if (exprHasServerSources(attr.value) && hasOpaqueCall(attr.value)) {
              unsupported(
                attr,
                "a call mixing client state with server values has no stable delivery",
              );
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
                      isPatchWriteBinding(binding),
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
        // Fact-finding and the instance patch-skip live in the decisions
        // module; the guard only surfaces the violation it derived.
        const { violation } = getChildPatchPlan(tag);
        if (violation) unsupported(violation.node, violation.detail);
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
        // A fed renderer delivers as a fill (`fedRenderProps`): the
        // dispatcher re-renders on a key change and pairs otherwise.
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

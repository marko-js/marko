// The temporary admission guard (decisions doc D-2026-08-4): fails closed
// on template shapes patches cannot yet apply faithfully. Side-effect-free
// by contract — permanent decisions live in ./decisions — so widening
// support deletes assertions here until the whole module goes.
import { types as t } from "@marko/compiler";
import {
  getProgram,
  getTagDef,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

import { isEventHandler } from "../../../common/helpers";
import {
  getRelatedControllable,
  isAttrsOnlySpread,
} from "../../visitors/tag/native-tag";
import * as BindingType from "../constants/binding-type";
import evaluate from "../evaluate";
import { isConditionTag, isCoreTagName } from "../is-core-tag";
import { isEventOrChangeHandler } from "../is-event-or-change-handler";
import { getParamGroupFeeds, type ParamGroupFeeds } from "../known-tag";
import { every, forEach, type Opt } from "../optional";
import { type Binding, getCanonicalExtra } from "../references";
import { getSection, getSectionForBody } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import {
  getChildPatchPlan,
  hasInertCall,
  hasStateFeed,
  isContentRenderTag,
  isServerOwnedDynamicTag,
} from "./decisions";
import {
  hasUnfillablePatchReads,
  isPatchFillBinding,
  isPatchWriteBinding,
} from "./delivery";
import {
  childRendersStateful,
  inStatefulBranch,
  isBranchPathSection,
  isStatefulBranch,
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
    // A sourceless inert call would render once and never again:
    // nothing recomputes it client-side and nothing ships it.
    if (
      !getSerializeSourcesForExpr(extra || {}) &&
      !evaluate(value).confident &&
      hasInertCall(value)
    ) {
      unsupported(
        node,
        "an inert call inside client-owned structure has no delivery channel",
      );
    }
    forEach(extra?.referencedBindings, (binding) => {
      const sources = getSerializeSourcesForRef(binding);
      // A `$global`-derived value delivers like any server value: its fill
      // re-ships each frame, so only an unfillable read rejects.
      if (
        (sources?.param || sources?.global) &&
        !sources!.state &&
        !isPatchFillBinding(binding) &&
        !inStatefulBranch(binding.section)
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
  // TEMPORARY (deleted with the guard): whether a template renders as a
  // self-contained client instance, the reason it cannot, or null. Judged
  // from resolved reference extras with a per-file memo; a template cycle
  // fails closed while its entry is pending.
  const instanceUnsafeties = new Map<unknown, string | null>();
  const getInstanceUnsafety = (
    tagPath: t.NodePath<t.MarkoTag>,
  ): string | null => {
    const file = loadFileForTag(tagPath);
    if (!file) return "must be analyzable";
    const cached = instanceUnsafeties.get(file);
    if (cached !== undefined) return cached;
    instanceUnsafeties.set(file, "renders a template cycle");
    let reason: string | null = null;
    file.path.traverse({
      MarkoPlaceholder(placeholder) {
        reason ||= instanceValueUnsafety(
          placeholder.get("value") as t.NodePath<t.Expression>,
        );
      },
      MarkoScriptlet(scriptlet) {
        for (const statement of scriptlet.get("body")) {
          reason ||= instanceValueUnsafety(statement);
        }
      },
      MarkoTag(inner) {
        if (reason) return;
        const { node } = inner;
        if (!t.isStringLiteral(node.name)) {
          // Rendering an `input` property is the body-content channel:
          // what it renders is validated where it was compiled.
          if (!isContentRenderTag(inner)) {
            reason = "renders a dynamic tag";
          }
          return;
        }
        // A pending promise cannot re-fire on a client re-render, and
        // `<lifecycle>` rejects in the child's own persisted compile.
        if (
          isCoreTagName(inner, "await") ||
          isCoreTagName(inner, "lifecycle")
        ) {
          reason = `uses \`<${(inner.node.name as t.StringLiteral).value}>\``;
          return;
        }
        for (const attrPath of inner.get("attributes")) {
          const attr = attrPath.node;
          // Handlers run against the live client scope, so imported code
          // and calls are fine there; `$global` is absent client-side.
          reason ||=
            attr.type === "MarkoAttribute" && isEventOrChangeHandler(attr.name)
              ? instanceGlobalUnsafety(attrPath.get("value") as t.NodePath)
              : instanceValueUnsafety(attrPath.get("value") as t.NodePath);
          if (reason) return;
        }
        if (getTagDef(inner)?.template) {
          if (node.var) {
            reason = "renders a nested child with a tag variable";
          } else if (node.attributeTags?.length || node.arguments?.length) {
            reason = "renders a nested child with attribute tags or arguments";
          } else {
            // An inputless child has no groups: anything fed must analyze.
            const feeds = node.extra && getParamGroupFeeds(node.extra);
            if (!feeds && node.attributes.length) {
              reason = "renders a nested child without analyzable input";
            }
            for (const group of feeds || []) {
              if (group.sources?.global) {
                reason = "feeds a nested child a `$global`-derived input";
                break;
              }
            }
            reason ||= getInstanceUnsafety(inner);
          }
        }
      },
    });
    instanceUnsafeties.set(file, reason);
    return reason;
  };
  // A render-computed value the instance re-renders client-side: `$global`
  // is absent there, module value reads can hide server knowledge, and a
  // call with no tracked callee bakes a value nothing recomputes.
  const instanceValueUnsafety = (valuePath: t.NodePath): string | null => {
    const value = valuePath.node as t.Expression;
    if (!value || evaluate(value).confident) return null;
    let reason: string | null = null;
    // `traverse` skips the root, so every rule also runs on the value.
    const visit = (path: t.NodePath) => {
      reason ||= instanceExtraUnsafety(path.node);
      if (reason) return;
      if (path.isIdentifier() && path.isReferencedIdentifier()) {
        if (path.node.name === "$global") {
          reason = "reads `$global` (it would go stale)";
        } else if (path.scope.getBinding(path.node.name)?.kind === "module") {
          reason = "references imported code";
        }
      } else if (path.isCallExpression() || path.isOptionalCallExpression()) {
        // A callee some tracked binding provides recomputes on any client
        // render; anything unaddressable (module and global helpers) bakes.
        let callee: t.Node = path.node.callee;
        while (
          t.isMemberExpression(callee) ||
          t.isOptionalMemberExpression(callee)
        ) {
          callee = callee.object;
        }
        const extra = callee.extra;
        if (!extra?.read?.binding && !extra?.referencedBindings) {
          reason = "renders an inert call";
        }
      } else if (path.isNewExpression() || path.isTaggedTemplateExpression()) {
        reason = "renders an inert call";
      }
    };
    visit(valuePath);
    if (!reason) {
      valuePath.traverse({
        enter(path) {
          visit(path);
        },
      });
    }
    return reason;
  };
  // `$global` and `$global`-derived reads through the resolved references
  // (direct, member, or captured inside nested functions).
  const instanceExtraUnsafety = (n: t.Node): string | null => {
    let reason: string | null = null;
    const extra = n.extra;
    if (!extra) return null;
    if (extra.globalBindings) reason = "reads `$global` (it would go stale)";
    const check = (binding: Binding) => {
      if (getSerializeSourcesForRef(binding)?.global) {
        reason ||= "reads a `$global`-derived value (it would go stale)";
      }
    };
    forEach(extra.read?.binding ?? extra.referencedBindings, check);
    forEach((extra as t.FunctionExtra).referencedBindingsInFunction, check);
    return reason;
  };
  const instanceGlobalUnsafety = (handlerPath: t.NodePath): string | null => {
    let reason = instanceExtraUnsafety(handlerPath.node);
    if (!reason) {
      handlerPath.traverse({
        enter(path) {
          reason ||= instanceExtraUnsafety(path.node);
        },
      });
    }
    return reason;
  };
  // Provenance-free feeds (imports, opaque reads) have no fill channel, so
  // only a tracked (param/state) or constant feed can gate structure.
  const groupFedUnsafely = (
    attributes: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
    group: ParamGroupFeeds,
  ) => {
    let names: Set<string> | undefined;
    forEach(group.params, (param) => {
      (names ??= new Set()).add(param.property ?? param.name);
    });
    return attributes.some(
      (attr) =>
        attr.type === "MarkoAttribute" &&
        names?.has(attr.name) &&
        !evaluate(attr.value).confident &&
        !getSerializeSourcesForExpr(attr.value.extra || {}),
    );
  };
  program.traverse({
    MarkoPlaceholder(placeholder) {
      const { node } = placeholder;
      if (!node.escape) unsupported(node);
      const section = getSection(placeholder);
      if (inStatefulBranch(section)) {
        assertDeliverableInClientOwned(node, node.value, node.value.extra);
      }
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
        return;
      }
      if (isCoreTagName(tag, "try")) {
        // Scriptless catch/placeholder html renders server-side per frame;
        // interactive ones render client-side, so reads must ride fills.
        if (!getProgram().node.extra.isInteractive) return;
        for (const attrPath of tag.get(
          "attributeTags",
        ) as t.NodePath<t.MarkoTag>[]) {
          const attrTag = attrPath.node;
          const attrName =
            t.isStringLiteral(attrTag.name) && attrTag.name.value;
          if (attrName !== "@catch" && attrName !== "@placeholder") continue;
          const localSection = getSectionForBody(attrPath.get("body"));
          const checkRef = (n: t.Node, ref: unknown) => {
            forEach(ref as Opt<Binding>, (binding) => {
              if (binding.section === localSection) return;
              const sources = getSerializeSourcesForRef(binding);
              if (
                (sources?.param || sources?.global) &&
                !sources!.state &&
                !isPatchFillBinding(binding) &&
                !inStatefulBranch(binding.section)
              ) {
                unsupported(
                  n,
                  `a server value inside \`<${attrName}>\` content must deliver as a fill`,
                );
              }
            });
          };
          t.traverseFast(attrTag, (n) => {
            const extra = n.extra;
            if (!extra) return;
            if (extra.globalBindings) {
              unsupported(
                n,
                `a \`$global\`-derived value inside \`<${attrName}>\` content would go stale`,
              );
            }
            checkRef(n, extra.read?.binding ?? extra.referencedBindings);
            checkRef(
              n,
              (extra as t.FunctionExtra).referencedBindingsInFunction,
            );
          });
        }
        return;
      }
      // A server-driven conditional's patches swap in rendered html, so
      // branches must be inert; a pure-state chain is client-owned instead.
      if (isConditionTag(tag) || isCoreTagName(tag, "for")) {
        const section = getSection(tag);
        const bodySection = getSectionForBody(tag.get("body"));
        const stateful = !!bodySection && isStatefulBranch(bodySection);
        // The walk pairs branches structurally at any depth, but only when
        // every enclosing section is itself a branch — unless the body
        // classified client-owned (content sections inherit ownership).
        if (!isBranchPathSection(section) && !stateful) {
          unsupported(node);
        }
        if (stateful) {
          for (const attr of node.attributes) {
            if (attr.type !== "MarkoAttribute") continue;
            // A locally written keyer re-invokes client-side per re-list,
            // so its captured server reads stay current through fills; a
            // server-provided keyer VALUE (a function) cannot ship.
            if (attr.name === "by") {
              if (
                t.isFunction(attr.value)
                  ? attr.value.extra?.globalBindings ||
                    hasUnfillablePatchReads(
                      (attr.value.extra as t.FunctionExtra | undefined)
                        ?.referencedBindingsInFunction,
                    )
                  : exprHasServerSources(attr.value)
              ) {
                unsupported(
                  attr,
                  "a server-derived `by` key inside a client-owned loop would read stale",
                );
              }
              continue;
            }
            // A mixed input re-evaluates on every fill write, so a call in
            // it has no stable value; a pure-state sibling attr may call.
            if (exprHasServerSources(attr.value) && hasInertCall(attr.value)) {
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
        if (inStatefulBranch(section)) {
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
            if (inStatefulBranch(getSection(tag))) {
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
        if (inStatefulBranch(section)) {
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
        if (inStatefulBranch(getSection(tag))) {
          unsupported(
            node,
            "a `<return>` inside client-owned structure is not supported yet",
          );
        }
        return;
      }
      // Templated instances classify per child param group: the ownership
      // mask withholds server writes for client-fed groups.
      if (tagDef?.template) {
        // Inside client-owned structure a child is a pure client instance
        // (input re-applies via tag-args signals; server values fill).
        if (inStatefulBranch(getSection(tag))) {
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
          // Transitive safety composes per-template facts with a memo:
          // every template below must be a self-contained client instance.
          const unsafety = getInstanceUnsafety(tag);
          if (unsafety) {
            unsupported(
              node,
              `a child inside client-owned structure ${unsafety}`,
            );
          }
          for (const attr of node.attributes) {
            if (attr.type === "MarkoAttribute") {
              assertDeliverableInClientOwned(
                attr,
                attr.value,
                attr.value.extra,
              );
            } else {
              assertDeliverableInClientOwned(attr, attr.value, node.extra);
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
            // Fills keep tracked params current and the instance
            // re-selects client-side; a provenance-free structural feed
            // has no channel. (`$global`-derived feeds deliver as fills,
            // checked per attribute above; direct `$global` reads reject
            // there too.)
            if (
              group.structuralOrGlobal &&
              groupFedUnsafely(node.attributes, group)
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
        // Only a body, attribute tag or `input` pass-through can feed a prop
        // the child renders inside stateful structure (it fills there).
        {
          const childExtra = loadFileForTag(tag)?.ast.program.extra;
          for (const attr of node.attributes) {
            if (attr.type === "MarkoAttribute") {
              if (
                childRendersStateful(childExtra, attr.name) &&
                !t.isLiteral(attr.value) &&
                (!t.isMemberExpression(attr.value, { computed: false }) ||
                  !t.isIdentifier(attr.value.object) ||
                  tag.scope.getBinding(attr.value.object.name)?.path.type !==
                    "Program")
              ) {
                unsupported(
                  attr,
                  "a renderer the child renders inside client-owned structure must be a body, an attribute tag or a plain `input` property",
                );
              }
            } else if (
              childRendersStateful(childExtra) &&
              !(
                t.isIdentifier(attr.value) &&
                tag.scope.getBinding(attr.value.name)?.path.type === "Program"
              )
            ) {
              unsupported(
                attr,
                "a spread may carry a renderer the child renders inside client-owned structure",
              );
            }
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
        // `input` content re-renders from its dynamic tag entry, or through
        // its fill inside client-owned structure.
        if (isContentRenderTag(tag)) {
          return;
        }
        // A server-owned dynamic tag re-renders from its entry; the shapes
        // that would need channels the entry cannot express stay closed.
        if (inStatefulBranch(getSection(tag))) {
          unsupported(
            node,
            "a dynamic tag inside client-owned structure must render a plain `input` property",
          );
        }
        if (!isBranchPathSection(getSection(tag))) {
          unsupported(
            node,
            "a dynamic tag inside boundary content is not supported yet",
          );
        }
        if (node.var) {
          unsupported(
            node,
            "a tag variable on a dynamic tag is not supported yet",
          );
        }
        if (node.arguments?.length) {
          unsupported(node, "arguments on a dynamic tag are not supported yet");
        }
        if (!isServerOwnedDynamicTag(tag)) {
          unsupported(
            node,
            "client state cannot feed a dynamic tag (its renderer's input needs are not analyzable)",
          );
        }
        return;
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
      const stateful = inStatefulBranch(getSection(tag));
      for (const attr of node.attributes) {
        // Handlers read the scope at call time, so only values no write
        // keeps current gate: `$global`-derived slots and function calls.
        if (
          attr.type === "MarkoAttribute" &&
          isEventOrChangeHandler(attr.name)
        ) {
          if (stateful) {
            forEach(
              (attr.value.extra as t.FunctionExtra | undefined)
                ?.referencedBindingsInFunction,
              (binding) => {
                // Direct reads (BindingType.global) see the live bag; a
                // derived value stays current through its fill/wire write.
                if (
                  binding.type !== BindingType.global &&
                  getSerializeSourcesForRef(binding)?.global &&
                  !isPatchFillBinding(binding) &&
                  !isPatchWriteBinding(binding)
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
          if (stateful) {
            assertDeliverableInClientOwned(attr, attr.value, attr.value.extra);
          }
        }
        // `content=` re-renders from a dynamic tag entry like a dynamic tag
        // site: the shapes that entry cannot express stay closed.
        if (
          attr.type === "MarkoAttribute" &&
          attr.name === "content" &&
          node.body.body.length === 0 &&
          !evaluate(attr.value).confident
        ) {
          if (stateful || !isBranchPathSection(getSection(tag))) {
            unsupported(
              attr,
              "`content=` on a native tag inside client-owned structure or boundary content is not supported yet",
            );
          }
          if (hasStateFeed(attr.value.extra)) {
            unsupported(
              attr,
              "client state cannot feed `content=` on a native tag",
            );
          }
          continue;
        }
        if (attr.type === "MarkoAttribute" && controlled.has(attr)) continue;
        if (
          attr.type === "MarkoSpreadAttribute"
            ? // A controllable or content-carrying spread cannot patch.
              !evaluate(attr.value).confident &&
              !isAttrsOnlySpread(tag, tagName as string)
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
                  )))
        ) {
          unsupported(attr);
        }
      }
    },
  });
}

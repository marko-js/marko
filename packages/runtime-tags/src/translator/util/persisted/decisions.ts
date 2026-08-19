// Permanent per-tag patch decisions, all derived on demand from analyze
// facts (nothing is stored on the AST); they outlive the admission guard's
// removal.
import { types as t } from "@marko/compiler";
import { isAttributeTag, loadFileForTag } from "@marko/compiler/babel-utils";

import evaluate from "../evaluate";
import isStatic from "../is-static";
import {
  getKnownTagReturnReason,
  getParamGroupFeeds,
  hasServerFeed,
} from "../known-tag";
import { some } from "../optional";
import { getCanonicalBinding } from "../references";
import { getSection } from "../sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { hasUnfillablePatchReads } from "./delivery";
import { inStatefulBranch } from "./structure";

export interface PatchViolation {
  node: t.Node;
  detail?: string;
}

// A call none of whose inputs are tracked: no client signal recomputes it.
export function hasInertCall(value: t.Node) {
  let inert = false;
  t.traverseFast(value, (n) => {
    inert ||=
      t.isCallExpression(n) ||
      t.isOptionalCallExpression(n) ||
      t.isNewExpression(n) ||
      t.isTaggedTemplateExpression(n);
  });
  return inert;
}

// A dynamic tag rendering `input` content (a body or attribute tag) and
// nothing else: its name reads one property of the template's input, through
// any alias; resolved references are required, so call at finalize or later.
export function isContentRenderTag(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  if (
    t.isStringLiteral(node.name) ||
    node.var ||
    node.attributes.length ||
    node.body.body.length ||
    node.attributeTags?.length ||
    node.arguments?.length
  ) {
    return false;
  }
  const binding = node.extra?.referencedBindings;
  return (
    !!binding &&
    !Array.isArray(binding) &&
    binding.property !== undefined &&
    !!binding.upstreamAlias &&
    getCanonicalBinding(binding.upstreamAlias) === getInputBinding(tag)
  );
}
// The template's `input` param binding (the first program param).
function getInputBinding(tag: t.NodePath<t.MarkoTag>) {
  return (
    tag.hub.file as { ast: { program: t.Program } }
  ).ast.program.extra?.binding?.propertyAliases.get("0");
}

export interface ChildPatchPlan {
  /** The first shape the guard must reject, when one exists. */
  violation?: PatchViolation;
  /** Pure client instance: its render and child link skip in patches. */
  skipsPatchRender?: boolean;
}

const childPatchPlans = new WeakMap<t.MarkoTag, ChildPatchPlan>();

// How a patch render treats a templated child call site: render it
// normally, skip it (pure client instance), or reject the compile.
// Derived on demand from analyze facts and memoized per translate.
export function getChildPatchPlan(tag: t.NodePath<t.MarkoTag>) {
  let plan = childPatchPlans.get(tag.node);
  if (!plan) {
    childPatchPlans.set(tag.node, (plan = computeChildPatchPlan(tag)));
  }
  return plan;
}

function computeChildPatchPlan(tag: t.NodePath<t.MarkoTag>): ChildPatchPlan {
  const { node } = tag;
  // A sourceless inert call bakes a value no client signal recomputes,
  // so it counts as server-fed.
  let anyInert = false;
  const checkInert = (extra: t.NodeExtra | undefined, value: t.Expression) => {
    if (
      !getSerializeSourcesForExpr(extra || {}) &&
      !evaluate(value).confident
    ) {
      anyInert ||= hasInertCall(value);
    }
  };
  const hasStateFeed = (extra: t.NodeExtra | undefined) =>
    !!getSerializeSourcesForExpr(extra || {})?.state ||
    some(
      (extra as t.FunctionExtra | undefined)?.referencedBindingsInFunction,
      (binding) => !!getSerializeSourcesForRef(binding)?.state,
    );
  let anyState = false;
  for (const attr of node.attributes) {
    // A spread's reads merge into the tag's own extra (checked below);
    // its provenance already feeds every group it may carry.
    if (attr.type === "MarkoSpreadAttribute") {
      checkInert(node.extra, attr.value);
      continue;
    }
    checkInert(attr.value.extra, attr.value);
    anyState ||= hasStateFeed(attr.value.extra);
  }
  // Arguments and rest-consumed children (a whole-`input` read, rest
  // props) merge their reads into the tag's own extra, not per-expr.
  anyState ||= hasStateFeed(node.extra);
  for (const arg of node.arguments || []) {
    if (t.isSpreadElement(arg)) {
      return { violation: { node: arg } };
    }
    checkInert(arg.extra, arg);
    anyState ||= hasStateFeed(arg.extra);
  }
  // Attribute tags feed params too; opacity must see their values.
  const checkAttrTags = (body: t.NodePath<t.MarkoTagBody>) => {
    for (const child of body.get("body")) {
      if (child.isMarkoTag() && isAttributeTag(child)) {
        for (const attr of child.node.attributes) {
          if (attr.type === "MarkoAttribute") {
            checkInert(attr.value.extra, attr.value);
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
        return {
          violation: {
            node,
            detail:
              "a tag variable with dynamic body content is not yet patchable",
          },
        };
      }
    }
    // The change-binding chain for assigned returns is not wired
    // into persisted serialization yet.
    if (
      node.var?.type === "Identifier" &&
      node.var.extra?.binding?.assignmentSections
    ) {
      return {
        violation: {
          node,
          detail:
            "assigning a persisted child's tag variable is not supported yet",
        },
      };
    }
    const returnReason = node.extra && getKnownTagReturnReason(node.extra);
    if (returnReason && returnReason !== true) {
      // Mixed provenance collapses to state downstream (the server
      // half would never refresh), and global-derived returns never
      // re-ship for the client recompute: both fail closed.
      if (returnReason.state && returnReason.param) {
        return {
          violation: {
            node,
            detail:
              "a return mixing client state with server params is not supported yet",
          },
        };
      } else if (returnReason.global) {
        return {
          violation: {
            node,
            detail: "a return derived from $global is not supported yet",
          },
        };
      }
    }
  }
  const feeds = node.extra && getParamGroupFeeds(node.extra);
  if (!feeds) {
    // No per-group analysis means no mask: an all-server child would
    // overwrite live client values.
    if (anyState) {
      return {
        violation: {
          node,
          detail: "client state cannot feed a tag without analyzable input",
        },
      };
    }
    return {};
  }
  let anyServerable = false;
  for (const group of feeds) {
    anyServerable ||= hasServerFeed(group.sources);
    // Groups see feeds the attr walk cannot (attribute tags).
    anyState ||= !!group.sources?.state;
    if (!group.sources?.state) continue;
    if (group.sources.global) {
      return {
        violation: {
          node,
          detail: "client state and `$global` cannot mix in one input group",
        },
      };
    }
    if (group.structuralOrGlobal) {
      return {
        violation: {
          node,
          detail:
            "client state cannot feed an input the child needs server-owned (it drives structure or mixes with `$global`)",
        },
      };
    }
    // A server value sharing a client-fed group updates through its
    // fill; without one its changes could never reach the child.
    if (group.sources?.param && hasUnfillablePatchReads(group.sources?.param)) {
      return {
        violation: {
          node,
          detail:
            "a server value mixed into a client-fed input group must be patchable through a fill",
        },
      };
    }
  }
  // An inert call can change server-side, but a withheld patch write
  // has no other way to deliver it.
  if (anyState && anyInert) {
    return {
      violation: {
        node,
        detail:
          "an inert call cannot mix with client state across one tag's input",
      },
    };
  }
  // Skip only when nothing could change server-side: any other vector
  // (globals, body content) keeps the guarded render.
  if (anyState && !anyServerable && !inStatefulBranch(getSection(tag))) {
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
      return { skipsPatchRender: true };
    }
  }
  return {};
}

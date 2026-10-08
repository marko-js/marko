// Analyze-side structure facts for patches, in template terms;
// ownership conclusions and wire channels belong to translate (./refresh).
import type { types as t } from "@marko/compiler";

import { type Binding, BindingType, bindingUtil } from "../bindings";
import { createCyclicMemo } from "../cyclic-memo";
import { getValueInputs } from "../finalize-references";
import { isPatch } from "../marko-config";
import { every, forEach, type Opt, some, toArray } from "../optional";
import {
  getSourcesForDerived,
  getSourcesForExpr,
  getSourcesForRef,
  mergeReasons,
} from "../reasons";
import { getReferencedBindings, type ReferencedExtra } from "../references";
import { type Section, StructureKind } from "../sections";
import { findSectionSlot, findSlot, type Slot, SlotKind } from "../slots";
import { ALWAYS, type Sources } from "../sources";
import { createSectionState } from "../state";
import { isStateSourcedExpr } from "./decisions";
import { isPatchFillBinding } from "./refresh";

// A boundary branch every patch page renders, so it pairs without creating;
// the server drops the elision at render where a catch or branch encloses.
export function boundaryAlwaysPairs(bodySection: Section) {
  if (!getSectionWriteReason(bodySection)) return false;
  for (let s: Section | undefined = bodySection; s; s = s.parent) {
    if (s.branch?.optional || s.boundaryContent) return false;
    // A content section can materialize at any consumer (or none), so nothing
    // below it is provably live and unique on every page.
    if (s !== bodySection && !s.branch && s.parent) return false;
  }
  return true;
}

// A patch render reaches the section: the page patches, and no stateful
// structure (which resumed code re-renders) encloses it.
export function isPatchRendered(section: Section) {
  return isPatch() && !inStatefulBranch(section);
}

// Whether a patch may reach the section: no branch on its chain is stateful.
// A content body counts not, since another consumer may render it patched.
export function mayPatchReach(section: Section | undefined) {
  for (; section; section = section.parent) {
    if (!section.derives && isStatefulBranch(section)) return false;
  }
  return true;
}

// Whether the section renders inside stateful structure (inclusive), whose
// bodies patch renders skip.
export function inStatefulBranch(section: Section | undefined) {
  while (section) {
    if (isStatefulBranch(section)) return true;
    section = section.parent;
  }
  return false;
}

// The one walk over a content body's consumers (the binding it derives
// through its property path, aliases, bindings its reads hand it to).
export function someContentRead(
  bindings: Opt<Binding>,
  properties: Opt<string>,
  leaf: (read: ReferencedExtra) => boolean,
) {
  const props = toArray(properties, (prop: string) => prop);
  return some(bindings, (binding) => {
    let target: Binding | undefined = binding;
    for (let i = 0; target && i < props.length; i++) {
      if (someRead(target, leaf, new Set())) return true;
      target = target.propertyAliases.get(props[i]);
    }
    return !!target && someBindingRead(target, leaf);
  });
}
export function someBindingRead(
  binding: Binding,
  leaf: (read: ReferencedExtra) => boolean,
  visiting = new Set<Binding>(),
): boolean {
  if (visiting.has(binding)) return false;
  visiting.add(binding);
  try {
    if (someRead(binding, leaf, visiting)) return true;
    for (const alias of binding.propertyAliases.values()) {
      if (someBindingRead(alias, leaf, visiting)) return true;
    }
    for (const alias of binding.aliases) {
      if (someBindingRead(alias, leaf, visiting)) return true;
    }
    return false;
  } finally {
    visiting.delete(binding);
  }
}
function someRead(
  binding: Binding,
  leaf: (read: ReferencedExtra) => boolean,
  visiting: Set<Binding>,
) {
  for (const read of binding.reads.keys()) {
    if (leaf(read)) return true;
    if (
      some(read.derives, (derived) => someBindingRead(derived, leaf, visiting))
    ) {
      return true;
    }
  }
  return false;
}

// Content read inside stateful structure renders there; a tag rendering it
// with client state re-renders it on the client wherever it sits.
function isStatefulLeaf(read: ReferencedExtra) {
  const rendersContent = read.rendersContent || read.directContent;
  return (
    !!(rendersContent || read.derives) &&
    (inStatefulBranch(read.section) ||
      (!!read.rendersContent && !!getSourcesForExpr(read)?.state))
  );
}
// A tag body is stateful when the prop it derives renders so in the
// child; the last hop stays a prop query so whole reads of its owner count.
function bodyRendersStateful(section: Section) {
  const { derives } = section;
  return (
    !!derives &&
    someContentRead(derives.binding, derives.properties, isStatefulLeaf)
  );
}

// A branch body whose branch expression has a state reason (or nested in one) and
// whose param sources a patch fills; needs resolved sources (finalize or later).
export const isStatefulBranch = createCyclicMemo((section: Section) => {
  // An optional branch or a dynamic tag body; an `<await>`/`<try>` body
  // renders for every value its branch expression takes.
  const expr =
    isPatch() && section.branch?.optional !== false
      ? section.branchExpr
      : undefined;
  const sources = expr && getSourcesForExpr(expr);
  // A body the child renders stateful (any consumer), or one whose own
  // branch expression derives from state.
  return (
    bodyRendersStateful(section) ||
    (!!expr &&
      (!!sources?.state || inStatefulBranch(section.parent)) &&
      every(getReferencedBindings(expr), clientRecomputes))
  );
}, false);

// The client recomputes a state-mixed ref from what it holds: its state, a
// fill, or a derivation it can recompute the same way.
function clientRecomputes(binding: Binding): boolean {
  const sources = getSourcesForRef(binding);
  if (!sources?.param) return true;
  if (isPatchFillBinding(binding) || inStatefulBranch(binding.section)) {
    return true;
  }
  const inputs = getValueInputs(binding);
  return !!inputs && every(inputs, clientRecomputes);
}

// Rebuild sources that are params alone: a call site passing state for them
// hands the branch to the client at run time. Call at finalize or later.
export function getParamRebuildSources(section: Section) {
  if (
    !isPatch() ||
    !isBranchPathSection(section) ||
    isStatefulBranch(section)
  ) {
    return;
  }
  const sources = getRebuildSources(section);
  return sources?.param && !sources.state ? sources : undefined;
}

// What makes the section anew on the client: a branch's expression, or the call
// site expression passing content (an attribute tag item of a param loop).
function getRebuildSources(section: Section) {
  if (section.branch?.optional) {
    return section.branchExpr && getSourcesForExpr(section.branchExpr);
  }
  if (!section.branch && section.derives) {
    return getSourcesForDerived(section.derives);
  }
}

// The param rebuild sources of every branch around the section (inclusive),
// or undefined when none.
export function getParamRebuildChain(section: Section | undefined) {
  let chain: Sources[] | undefined;
  for (; section; section = section.parent) {
    const sources = getParamRebuildSources(section);
    if (sources) (chain ??= []).push(sources);
  }
  return chain;
}

// Structural params and `$global` mixing record here: the root params a
// branch or loop expression derives from are structural.
export function recordStructuralParams(sources: Sources | undefined) {
  forEach(sources?.param, (binding) => {
    const { section } = binding;
    if (!section.parent) {
      section.structuralParams = bindingUtil.add(
        section.structuralParams,
        binding,
      );
    }
  });
}

export function isStructuralParam(binding: Binding) {
  return bindingUtil.has(binding.section.structuralParams, binding);
}

// Structure resumed code renders on its own: boundary content, or a
// stateful branch's body (patch renders skip both).
export function inResumedStructure(section: Section) {
  return !isBranchPathSection(section) || inStatefulBranch(section);
}

// Whether a patch writes the section's holes directly. Finalize or later:
// `isStatefulBranch` memoizes, so an earlier call would cache a wrong answer.
export function writesPatchIn(section: Section) {
  return isPatch() && !inResumedStructure(section);
}

// Whether every section from `section` up to (exclusive) `owner` is a
// branch: only those chains compose per-hop closure builders.
export function isBranchSectionChain(section: Section, owner: Section) {
  for (
    let cur: Section | undefined = section;
    cur && cur !== owner;
    cur = cur.parent
  ) {
    if (!cur.branch?.optional) return false;
  }
  return true;
}

// Sections whose holes patch-write directly: every level down to them links
// structurally, except boundary content (rendered outside the patch) and pruned content.
export function isBranchPathSection(section: Section) {
  while (section.parent) {
    if (section.boundaryContent || section.pruned) return false;
    section = section.parent;
  }
  return true;
}

// The writer emits a patch entry keyed on the node: a hole a flush writes, a
// known child's scope it pairs through, or the marker of rows it pairs.
export function isPatchKeyed(section: Section, binding: Binding) {
  if (!isPatch() || binding.section !== section) return false;
  if (isKnownChildNode(binding)) return isPatchRendered(section);
  const loopBody = getLoopBody(binding);
  if (loopBody && patchesLoopRows(loopBody)) return true;
  return (
    binding.type === BindingType.dom &&
    writesPatchIn(section) &&
    some(findSlot(binding)?.reasonExprs, rendersServerValue)
  );
}

function rendersServerValue(extra: t.NodeExtra) {
  return !!extra.rendersValue && !isStateSourcedExpr(extra);
}

export function hasPatchKeyedNodes(section: Section) {
  return some(section.bindings, (binding) => isPatchKeyed(section, binding));
}

// A slot a patch keys an entry on: a node's, or a loop body's whose rows pair.
export function isPatchKeyedSlot(slot: Slot) {
  if (slot.kind === SlotKind.Value) {
    const binding = slot.owner as Binding;
    return (
      binding.type === BindingType.dom && isPatchKeyed(slot.section, binding)
    );
  }
  return (
    slot.kind === SlotKind.Branch && isPatchedLoopBody(slot.owner as Section)
  );
}

// A flush pairs a loop's rows wherever it writes the loop's section and the
// client does not own the rows.
export function patchesLoopRows(body: Section) {
  return writesPatchIn(body.parent!) && !isStatefulBranch(body);
}

// A `<for>` body whose rows a flush pairs.
function isPatchedLoopBody(section: Section) {
  return isLoopBody(section) && patchesLoopRows(section);
}

// The `<for>` body rendered at a node, once per item: an optional branch
// outside an `<if>` chain, which numbers its branches.
function getLoopBody(binding: Binding) {
  return binding.section.children.find(
    (child) => child.branch?.nodeBinding === binding && isLoopBody(child),
  );
}

function isLoopBody(section: Section) {
  return !!section.branch?.optional && section.branch.index === undefined;
}

// A known child renders at the node, which holds the child's scope.
export function isKnownChildNode(binding: Binding) {
  return getKnownChildNodes(binding.section).has(binding);
}

const [getKnownChildNodes] = createSectionState(
  "knownChildNodes",
  (section) => {
    const nodes = new Set<Binding>();
    for (const op of section.structure || []) {
      if (typeof op === "object" && op.kind === StructureKind.Child) {
        nodes.add(op.binding);
      }
    }
    return nodes;
  },
);

// The reason a slot writes with (its write reason): its reason, always where
// a patch keys an entry on it.
export function getSlotWriteReason(slot: Slot | undefined) {
  return slot && isPatch() && isPatchKeyedSlot(slot)
    ? mergeReasons(ALWAYS, slot.reason)
    : slot?.reason;
}

// A node's write reason.
export function getWriteReason(binding: Binding) {
  const reason = findSlot(binding)?.reason;
  return isPatchKeyed(binding.section, binding)
    ? mergeReasons(ALWAYS, reason)
    : reason;
}

// A branch's write reason: the scope it resumes, which a loop's paired rows need.
export function getBranchWriteReason(section: Section) {
  const reason = findSectionSlot(section, SlotKind.Branch)?.reason;
  return isPatch() && isPatchedLoopBody(section)
    ? mergeReasons(ALWAYS, reason)
    : reason;
}

// A scope is written when any slot in it is, a patch-keyed node's included.
export function getSectionWriteReason(section: Section) {
  return hasPatchKeyedNodes(section)
    ? mergeReasons(ALWAYS, section.reason)
    : section.reason;
}

// The child section a read is the branch expression of, if any.
export function getBranchOf(read: ReferencedExtra) {
  return read.section.children.find((child) => child.branchExpr === read);
}

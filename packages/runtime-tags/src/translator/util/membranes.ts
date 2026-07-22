// Membrane classification: which sections must stay live across a persisted
// navigation ("nuclei") versus server scaffold a patch may replace wholesale.
// Nucleus-ness is strictly local to a section; containment questions are the
// separate tree queries below. All state lives in WeakMaps keyed on Section
// objects so child-template sections (via loadFileForTag) resolve uniformly.
import type { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { isPersisted } from "./marko-config";
import { find, forEach } from "./optional";
import { type Binding, BindingType } from "./references";
import type { Section } from "./sections";

export enum MembraneCause {
  /** Owns a `$let` (or store-like) client state cell. */
  let = 1,
  /** Owns an effect or event/change handler. */
  effect = 1 << 1,
  /** Contains a controllable or bare form control / contenteditable. */
  control = 1 << 2,
  /** Contains a tag variable (imperative ref access). */
  ref = 1 << 3,
  /** Contains a spread whose properties cannot be proven inert. */
  spread = 1 << 4,
  /** Owns an `$signal` abort scope. */
  abort = 1 << 5,
  /** Reads client-owned state through a closure; a server re-render could
   * not reproduce its output. */
  closure = 1 << 6,
  /** Promoted by an anchor whose sibling branch is a nucleus (mixed `<if>`)
   * or by another conservative expansion. */
  forced = 1 << 7,
}

const stateCapable = new WeakMap<Section, number>();
const nucleusMemo = new WeakMap<Section, number>();
let treeMemo = new WeakMap<Section, boolean>();
const treeInProgress = new WeakSet<Section>();
const childTrees = new WeakMap<
  Section,
  { root: Section; sections: Section[] }[]
>();
const unknownChildren = new WeakSet<Section>();

/** Tags whose browser-managed state (edits, open/playback position) exists
 * even with no Marko bindings at all; replacing them loses user state. */
const editableTags = new Set([
  "input",
  "select",
  "textarea",
  "details",
  "dialog",
  "audio",
  "video",
]);

export function isEditableTag(tagName: string) {
  return editableTags.has(tagName);
}

/** Analyze-time: record local state-capability causes for a section. */
export function markStateCapable(section: Section, causes: number) {
  stateCapable.set(section, (stateCapable.get(section) || 0) | causes);
  nucleusMemo.delete(section);
  // Liveness is a tree property; any new capability invalidates all of it.
  treeMemo = new WeakMap();
}

/** Analyze-time: a custom tag call site links its child template's section
 * tree under the call site's own section. */
export function addChildTree(section: Section, childProgram: t.Program) {
  const extra = childProgram.extra;
  const root = extra?.section;
  if (root) {
    const trees = childTrees.get(section);
    const record = { root, sections: extra.sections || [root] };
    if (trees) trees.push(record);
    else childTrees.set(section, [record]);
  } else {
    // A child we could not see through (interop, unresolved) may hold state.
    unknownChildren.add(section);
  }
}

/** Analyze-time: a dynamic tag (or other unresolvable composition) whose
 * targets cannot be enumerated may render state-capable content. */
export function markUnknownChildren(section: Section) {
  unknownChildren.add(section);
}

/**
 * Whether this section's own content must survive a navigation live: it owns
 * client state, effects, editable/focusable surface, or output derived from
 * client state that a server render cannot reproduce.
 */
export function isNucleusSection(section: Section): boolean {
  if (!isPersisted()) return true;
  return getMembraneCauses(section) !== 0;
}

/** The full cause bitset for a section; 0 means scaffold. */
export function getMembraneCauses(section: Section): number {
  let causes = nucleusMemo.get(section);
  if (causes === undefined) {
    causes = stateCapable.get(section) || 0;
    if (section.hasAbortSignal) causes |= MembraneCause.abort;
    if (find(section.bindings, ownsClientState)) causes |= MembraneCause.let;
    if (ownsEffectRead(section)) causes |= MembraneCause.effect;
    if (
      find(section.referencedClosures, readsClientState) ||
      find(section.referencedLocalClosures, readsClientState)
    ) {
      causes |= MembraneCause.closure;
    }
    nucleusMemo.set(section, causes);
  }
  return causes;
}

/** Diagnostic snapshot for the membrane-cut report; safe outside a compile. */
export function inspectMembranes(sections: Section[]) {
  return sections.map((section) => {
    const causes = getMembraneCauses(section);
    return {
      id: section.id,
      name: section.name,
      depth: section.depth,
      isBranch: section.isBranch,
      nucleus: causes !== 0,
      causes: describeCauses(causes),
      unknownChildren: unknownChildren.has(section),
      treeHasNucleus: sectionTreeHasNucleus(section, sections),
    };
  });
}

function describeCauses(causes: number) {
  const names: string[] = [];
  for (const key of Object.keys(MembraneCause)) {
    const bit = MembraneCause[key as keyof typeof MembraneCause];
    if (typeof bit === "number" && causes & bit) names.push(key);
  }
  return names;
}

export function isScaffoldSection(section: Section) {
  return isPersisted() && !isNucleusSection(section);
}

/** `sectionTreeHasNucleus` against the current compilation's section list. */
export function sectionTreeHasNucleusInProgram(section: Section): boolean {
  return sectionTreeHasNucleus(
    section,
    getProgram().node.extra.sections || [section],
  );
}

/**
 * Whether a section keeps the fine-grained persisted machinery. A section is
 * "live" when any nucleus exists in its subtree — its own content may be
 * scaffold, but structure between it and its nuclei must stay addressable.
 * Only fully nucleus-free subtrees become inert replaceable regions.
 */
export function isMembraneLive(section: Section): boolean {
  return !isPersisted() || sectionTreeHasNucleusInProgram(section);
}

/** Whether a child template's tree (its own compile) contains any nucleus;
 * unresolved children answer true. Used by call sites to decide between
 * fine-grained delegation and region delivery. */
export function isChildTreeLive(childProgram: t.Program): boolean {
  const extra = childProgram.extra;
  const root = extra?.section;
  if (!root) return true;
  return sectionTreeHasNucleus(root, extra.sections || [root]);
}

/** A region root: a replaceable branch hanging off live structure. */
export function isRegionRoot(section: Section): boolean {
  return (
    isPersisted() &&
    !isMembraneLive(section) &&
    !!section.parent &&
    isMembraneLive(section.parent)
  );
}

/**
 * Whether this section's subtree — same-file descendant sections plus the
 * templates of custom tags it renders, recursively — contains any nucleus.
 * Keyed loops serialize their keys only when this is true of their body
 * (spliceable rows must be nameable); pure-scaffold repetition ships nothing.
 * Cycles and unresolvable children answer true: unknown content may hold
 * state, and over-naming is safe where under-naming is not.
 */
export function sectionTreeHasNucleus(
  section: Section,
  sections: Section[],
): boolean {
  let result = treeMemo.get(section);
  if (result === undefined) {
    if (treeInProgress.has(section)) return true;
    treeInProgress.add(section);
    try {
      result = sectionTreeHasNucleusUncached(section, sections);
      treeMemo.set(section, result);
    } finally {
      treeInProgress.delete(section);
    }
  }
  return result;
}

function sectionTreeHasNucleusUncached(
  section: Section,
  sections: Section[],
): boolean {
  for (const candidate of sections) {
    if (!isDescendantOrSelf(candidate, section)) continue;
    if (getMembraneCauses(candidate) || unknownChildren.has(candidate)) {
      return true;
    }
    const trees = childTrees.get(candidate);
    if (trees) {
      for (const { root, sections: childSections } of trees) {
        if (sectionTreeHasNucleus(root, childSections)) return true;
      }
    }
  }
  return false;
}

function isDescendantOrSelf(section: Section, ancestor: Section) {
  let current: Section | undefined = section;
  do {
    if (current === ancestor) return true;
    current = current.parent;
  } while (current);
  return false;
}

function ownsClientState(binding: Binding) {
  return binding.type === BindingType.let;
}

function readsClientState(binding: Binding) {
  return !!binding.sources?.state;
}

function ownsEffectRead(section: Section) {
  let found = false;
  forEach(section.bindings, (binding) => {
    if (found) return;
    for (const read of binding.reads) {
      if (read.isEffect && read.section === section) {
        found = true;
        return;
      }
    }
  });
  return found;
}

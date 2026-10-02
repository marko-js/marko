import { types as t } from "@marko/compiler";

import {
  type Binding,
  compareReferences,
  getCanonicalBinding,
} from "./bindings";
import * as SlotKind from "./constants/slot-kind";
import { type Opt, Sorted, type SortedOpt } from "./optional";
import { type Reason } from "./reasons";
import { type ParamReasonGroup, type Section } from "./sections";

type SlotKind = SlotKind.Value;
export { SlotKind };

export type BindingSlotKind =
  | typeof SlotKind.Value
  | typeof SlotKind.ChangeHandler
  | typeof SlotKind.ClosureScopes
  | typeof SlotKind.ClosureSignalIndex
  | typeof SlotKind.BranchExpr
  | typeof SlotKind.ParamGroup;
export type SectionSlotKind = Exclude<SlotKind, BindingSlotKind>;
// The kinds that are places in a scope, which the server writes at an accessor;
// the rest record a fact a guard decides on.
export type PlaceSlotKind =
  | typeof SlotKind.Value
  | typeof SlotKind.ChangeHandler
  | typeof SlotKind.ClosureScopes
  | typeof SlotKind.ClosureSignalIndex
  | typeof SlotKind.Owner
  | typeof SlotKind.ReturnChangeHandler
  | typeof SlotKind.Instances;

/** A place in a scope that client code may read after resume, or a fact about
 * one a guard decides on (a condition changing, a branch or group resuming). */
export type Slot = BindingSlot | SectionSlot;
export type PlaceSlot = Slot & { kind: PlaceSlotKind };

interface BaseSlot {
  /** The scope it is in. */
  section: Section;
  /** The sources whose changes lead client code to read it after resume,
   * unset while nothing does. */
  reason: Reason | undefined;
  /** The expressions it holds or renders, whose sources its reason takes once
   * references finalize. */
  reasonExprs: Opt<t.NodeExtra>;
}

export interface BindingSlot extends BaseSlot {
  kind: BindingSlotKind;
  /** A canonical binding. */
  owner: Binding;
  /** The group it guards, for a param group. */
  group: ParamReasonGroup | undefined;
}

export interface SectionSlot extends BaseSlot {
  kind: SectionSlotKind;
  owner: Section;
  group: undefined;
}

const slotUtil = new Sorted<Slot>(compareSlots);

// Analysis makes a slot on first use; translate only finds what analysis made.
export function getSlot(
  binding: Binding,
  kind: BindingSlotKind = SlotKind.Value,
  section?: Section,
  group?: ParamReasonGroup,
): Slot {
  const owner = getCanonicalBinding(binding);
  return (
    findSlot(owner, kind, section, group) ||
    addSlot(kind, section || owner.section, owner, group)
  );
}

export function findSlot(
  binding: Binding,
): (BindingSlot & { kind: typeof SlotKind.Value }) | undefined;
export function findSlot<K extends BindingSlotKind>(
  binding: Binding,
  kind: K,
  section?: Section,
  group?: ParamReasonGroup,
): (BindingSlot & { kind: K }) | undefined;
export function findSlot(
  binding: Binding,
  kind: BindingSlotKind = SlotKind.Value,
  section?: Section,
  group?: ParamReasonGroup,
) {
  const owner = getCanonicalBinding(binding);
  return findIn((section || owner.section).slots, owner.uid, kind, group);
}

export function getSectionSlot(
  owner: Section,
  kind: SectionSlotKind,
  section = owner,
): Slot {
  return (
    findSectionSlot(owner, kind, section) ||
    addSlot(kind, section, owner, undefined)
  );
}

export function findSectionSlot<K extends SectionSlotKind>(
  owner: Section,
  kind: K,
  section?: Section,
): (SectionSlot & { kind: K }) | undefined;
export function findSectionSlot(
  owner: Section,
  kind: SectionSlotKind,
  section = owner,
) {
  return findIn(section.slots, getOwnerOrder(owner), kind, undefined);
}

// Made only here, so every slot has one shape.
function addSlot(
  kind: SlotKind,
  section: Section,
  owner: Binding | Section,
  group: ParamReasonGroup | undefined,
) {
  const slot = {
    kind,
    section,
    owner,
    group,
    reason: undefined,
    reasonExprs: undefined,
  } as Slot;
  section.slots = slotUtil.add(section.slots, slot);
  return slot;
}

// Searched by key rather than a probe slot, so comparisons read only slots.
function findIn(
  slots: SortedOpt<Slot>,
  order: number,
  kind: SlotKind,
  group: ParamReasonGroup | undefined,
) {
  if (slots === undefined) return;
  if (!Array.isArray(slots)) {
    return compareSlotTo(slots, order, kind, group) ? undefined : slots;
  }
  let pos = 0;
  let max = slots.length;
  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const slot = slots[mid];
    const result = compareSlotTo(slot, order, kind, group);
    if (result === 0) return slot;
    if (result > 0) max = mid;
    else pos = mid + 1;
  }
}

function compareSlots(a: Slot, b: Slot) {
  return compareSlotTo(a, getOwnerOrder(b.owner), b.kind, b.group);
}

// A scope's section-owned slots come first, then its bindings' by creation;
// only param group slots have a group.
function compareSlotTo(
  slot: Slot,
  order: number,
  kind: SlotKind,
  group: ParamReasonGroup | undefined,
) {
  return (
    getOwnerOrder(slot.owner) - order ||
    slot.kind - kind ||
    (group ? compareReferences(slot.group!, group) : 0)
  );
}

function getOwnerOrder(owner: Binding | Section) {
  return "uid" in owner ? owner.uid : -1 - owner.id;
}

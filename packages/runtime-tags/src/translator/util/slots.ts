import { types as t } from "@marko/compiler";

import {
  type Binding,
  compareReferences,
  getCanonicalBinding,
} from "./bindings";
import * as SlotKind from "./constants/slot-kind";
import { type Opt } from "./optional";
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
  | typeof SlotKind.Scopes;

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
  /** The expressions it holds or renders (a param group's: what its call site
   * passes the group), whose sources its reason takes. */
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

// Analysis makes a slot on first use; translate only finds what analysis made.
export function ensureSlot(
  binding: Binding,
  kind: BindingSlotKind = SlotKind.Value,
  section?: Section,
  group?: ParamReasonGroup,
): Slot {
  const owner = getCanonicalBinding(binding);
  return ensureIn(section || owner.section, owner, kind, group);
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

export function ensureSectionSlot(
  owner: Section,
  kind: SectionSlotKind,
  section = owner,
): Slot {
  return ensureIn(section, owner, kind, undefined);
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

// One search finds the slot or the index a new one goes at, and slots are made
// only here, so every slot has one shape.
function ensureIn(
  section: Section,
  owner: Binding | Section,
  kind: SlotKind,
  group: ParamReasonGroup | undefined,
) {
  const { slots } = section;
  const index = searchIn(slots, getOwnerOrder(owner), kind, group);
  if (index >= 0) return slots[index];
  const slot = {
    kind,
    section,
    owner,
    group,
    reason: undefined,
    reasonExprs: undefined,
  } as Slot;
  slots.splice(~index, 0, slot);
  return slot;
}

function findIn(
  slots: Slot[],
  order: number,
  kind: SlotKind,
  group: ParamReasonGroup | undefined,
) {
  const index = searchIn(slots, order, kind, group);
  if (index >= 0) return slots[index];
}

// Searched by key rather than a probe slot, so a lookup allocates nothing; the
// index of the slot with this key, or `~` the index it goes at.
function searchIn(
  slots: Slot[],
  order: number,
  kind: SlotKind,
  group: ParamReasonGroup | undefined,
) {
  let pos = 0;
  let max = slots.length;
  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const result = compareSlotTo(slots[mid], order, kind, group);
    if (result === 0) return mid;
    if (result > 0) max = mid;
    else pos = mid + 1;
  }
  return ~pos;
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

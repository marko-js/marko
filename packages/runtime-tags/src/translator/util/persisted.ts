import { isPersisted } from "./marko-config";
import type { Section } from "./sections";

export function scopeReasonRuntime() {
  return isPersisted()
    ? ("_persisted_reason" as const)
    : ("_scope_reason" as const);
}

// A patch targets a section only when every ancestor is a conditional
// branch the client can verify still matches its live selection.
export function isPatchableSection(section: Section) {
  for (let cur = section; cur.parent; cur = cur.parent) {
    if (!cur.isBranch) return false;
  }
  return true;
}

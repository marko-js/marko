// Why a branch's shell would construct unfaithfully. Values are truthy
// (readers test truthiness) and the first blocker recorded wins.

// Encloses state-selected structure the frame cannot reproduce.
export const stateSelectedEnclosure = 1;
// Scriptless awaits normally construct from shipped body records; this is
// the fallback for a body only a dom-module registration could render
// (child renderers, unresolved refs) when no dom module ever loads.
export const inexpressibleAwaitBody = 2;

type Self = typeof import("./shell-blocker");
export type Value = Self[keyof Self];

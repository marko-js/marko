// Why a branch's shell would construct unfaithfully. Values are truthy
// (readers test truthiness) and the first blocker recorded wins.

// Fallback for a scriptless await body only a dom-module registration
// could render, when no dom module ever loads.
export const inexpressibleAwaitBody = 1;

type Self = typeof import("./shell-blocker");
export type Value = Self[keyof Self];

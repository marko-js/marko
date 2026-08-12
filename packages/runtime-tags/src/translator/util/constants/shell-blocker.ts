// Why a branch's shell would construct unfaithfully. Values are truthy
// (readers test truthiness) and the first blocker recorded wins.

// A state-fed hole/attr the construct cannot render: client state a
// server fallback can never solve.
export const stateFed = 1;
// Encloses a client-reselectable selection the frame cannot reproduce.
export const reselectableEnclosure = 2;

type Self = typeof import("./shell-blocker");
export type Value = Self[keyof Self];

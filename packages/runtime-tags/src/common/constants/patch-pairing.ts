// How a patch treats a dynamic tag (`renderDynamicTag`).
// Pairs the live branch and renders the tag.
export const Render = 1;
// Skips it: the resumed page renders it (its renderer is the client's).
export const Skip = 2;
// Pairs it keeping the live branch: no entry ships.
export const Keep = 3;
// Renders it into the setup only a scope the flush creates applies.
export const Setup = 4;

type Self = typeof import("./patch-pairing");
export type Value = Self[keyof Self];

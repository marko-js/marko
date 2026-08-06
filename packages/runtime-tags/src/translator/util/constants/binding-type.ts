export const dom = 0;
// `let` is a reserved word, so it is bound locally and
// exported under the name call sites already use.
const let_ = 1;
export { let_ as let };
export const input = 2;
export const param = 3;
export const local = 4;
export const derived = 5;
export const constant = 6;
// `$global` and its property aliases: tracked for provenance, inert in
// the signal graph (no slot, no subscription, no closure, no ordinal).
export const global = 7;

type Self = typeof import("./binding-type");
export type Value = Self[keyof Self];

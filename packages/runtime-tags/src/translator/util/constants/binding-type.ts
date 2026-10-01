export const dom = 0;
// `let` is a reserved word, so it is bound locally and
// exported under the name call sites already use.
const let_ = 1;
export { let_ as let };
export const param = 2;
export const local = 3;
export const derived = 4;
export const constant = 5;
// `$global` and its property aliases: tracked as sources, inert in
// the signal graph (no slot, no subscription, no closure, no ordinal).
export const global = 6;

type Self = typeof import("./binding-type");
export type Value = Self[keyof Self];

export const dom = 0;
// `let` is a reserved word, so it is bound locally and
// exported under the name call sites already use.
const let_ = 1;
export { let_ as let };
export const input = 2;
// Params of a body rendered through `buildContent`, which declares the `_scope_reason()`
// their serialize guards read (lexically, from that body and the sections nested in it).
export const param = 3;
export const local = 4;
export const derived = 5;
export const constant = 6;
// `$global` and its property aliases: tracked as sources, inert in
// the signal graph (no slot, no subscription, no closure, no ordinal).
export const global = 7;

type Self = typeof import("./binding-type");
export type Value = Self[keyof Self];

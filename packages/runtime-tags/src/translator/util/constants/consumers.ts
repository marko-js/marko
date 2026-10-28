// How many of a body's consumers render it, or give a group of its params,
// with client state.
export const None = 0;
export const Some = 1;
export const Every = 2;

type Self = typeof import("./consumers");
export type Value = Self[keyof Self];

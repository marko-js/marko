export const None = 0;
export const Before = 1;
export const After = 2;

type Self = typeof import("./sibling-text");
export type Value = Self[keyof Self];

export const None = 0;
export const Before = 1;
export const After = 2;
// A non-text node (element/comment) directly precedes: no text to merge
// with, but resume must not claim that node when the text renders empty.
export const NodeBefore = 3;

type Self = typeof import("./sibling-text");
export type Value = Self[keyof Self];

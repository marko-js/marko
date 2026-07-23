export const Element = 1;
export const Text = 3;
export const Comment = 8;
export const DocumentFragment = 11;

type Self = typeof import("./node-type");
export type Value = Self[keyof Self];

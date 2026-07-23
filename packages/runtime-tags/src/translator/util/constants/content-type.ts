export const Comment = 0;
export const Dynamic = 1;
export const Placeholder = 2;
export const Tag = 3;
export const Text = 4;

type Self = typeof import("./content-type");
export type Value = Self[keyof Self];

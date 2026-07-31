export const Sourced = 0;
export const Raw = 1;
export const Runtime = 2;

type Self = typeof import("./segment-kind");
export type Value = Self[keyof Self];

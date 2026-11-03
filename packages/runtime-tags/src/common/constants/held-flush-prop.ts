export const Apply = "a";
export const Deps = "b";
export const Done = "c";
export const Flush = "d";
export const Stop = "e";

type Self = typeof import("./held-flush-prop");
export type Value = Self[keyof Self];

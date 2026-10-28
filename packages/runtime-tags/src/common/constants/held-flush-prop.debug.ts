export const Apply = "apply";
export const Deps = "deps";
export const Done = "done";
export const Flush = "flush";
export const Stop = "stop";

type Self = typeof import("./held-flush-prop.debug");
export type Value = Self[keyof Self];

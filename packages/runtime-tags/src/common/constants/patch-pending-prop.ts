export const Resolve = "r";

type Self = typeof import("./patch-pending-prop");
export type Value = Self[keyof Self];

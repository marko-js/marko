export const Resolve = "resolve";

type Self = typeof import("./patch-pending-prop.debug");
export type Value = Self[keyof Self];

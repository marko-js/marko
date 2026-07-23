export const ScopeInstancesAccessor = "a";
export const SignalIndexAccessor = "b";
export const Index = "c";

type Self = typeof import("./closure-signal-prop");
export type Value = Self[keyof Self];

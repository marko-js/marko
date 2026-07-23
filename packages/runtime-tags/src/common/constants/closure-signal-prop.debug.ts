export const ScopeInstancesAccessor = "scopeInstancesAccessor";
export const SignalIndexAccessor = "signalIndexAccessor";
export const Index = "index";

type Self = typeof import("./closure-signal-prop.debug");
export type Value = Self[keyof Self];

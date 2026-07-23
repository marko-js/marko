export const Key = "key";
export const Scope = "scope";
export const Signal = "signal";
export const Value = "value";
export const Gen = "gen";
export const Pending = "pending";

type Self = typeof import("./pending-render-prop.debug");
export type Value = Self[keyof Self];

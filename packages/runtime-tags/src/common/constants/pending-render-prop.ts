export const Key = "a";
export const Scope = "b";
export const Signal = "c";
export const Value = "d";
export const Gen = "e";
export const Pending = "f";

type Self = typeof import("./pending-render-prop");
export type Value = Self[keyof Self];

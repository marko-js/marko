export const Value = "value";
export const Signal = "signal";

type Self = typeof import("./load-signal-value.debug");
export type Value = Self[keyof Self];

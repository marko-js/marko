export const Value = "a";
export const Signal = "b";

type Self = typeof import("./load-signal-value");
export type Value = Self[keyof Self];

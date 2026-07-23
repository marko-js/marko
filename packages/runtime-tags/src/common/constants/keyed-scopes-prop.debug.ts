export const PreviousKey = "PreviousKey:";

type Self = typeof import("./keyed-scopes-prop.debug");
export type Value = Self[keyof Self];

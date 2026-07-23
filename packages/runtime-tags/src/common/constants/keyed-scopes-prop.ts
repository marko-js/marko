export const PreviousKey = "_";

type Self = typeof import("./keyed-scopes-prop");
export type Value = Self[keyof Self];

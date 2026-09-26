export const Changed = "_";

type Self = typeof import("./closure-scopes-prop");
export type Value = Self[keyof Self];

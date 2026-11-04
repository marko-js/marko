export const Apply = "a";
export const ReadyIds = "b";
export const Done = "c";
export const Flush = "d";
export const Stop = "e";

type Self = typeof import("./waiting-flush-prop");
export type Value = Self[keyof Self];

export const Apply = "apply";
export const ReadyIds = "readyIds";
export const Done = "done";
export const Flush = "flush";
export const Stop = "stop";

type Self = typeof import("./waiting-flush-prop.debug");
export type Value = Self[keyof Self];

export const Apply = "apply";
export const Deps = "deps";
export const Done = "done";
export const Frame = "frame";
export const Response = "response";

type Self = typeof import("./held-frame-prop.debug");
export type Value = Self[keyof Self];

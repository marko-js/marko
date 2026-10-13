export const Apply = "a";
export const Deps = "b";
export const Done = "c";
export const Frame = "d";
export const Response = "e";

type Self = typeof import("./held-frame-prop");
export type Value = Self[keyof Self];

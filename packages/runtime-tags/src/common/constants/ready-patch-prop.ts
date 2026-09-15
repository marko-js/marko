export const Channels = "a";
export const Response = "c";
export const Resolvers = "b";

type Self = typeof import("./ready-patch-prop");
export type Value = Self[keyof Self];

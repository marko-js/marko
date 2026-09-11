export const Channels = "a";
export const Resolvers = "b";
export const Binds = "c";
export const Run = "d";

type Self = typeof import("./ready-patch-prop");
export type Value = Self[keyof Self];

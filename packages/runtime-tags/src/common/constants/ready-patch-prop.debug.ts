export const Channels = "channels";
export const Resolvers = "resolvers";
export const Binds = "binds";
export const Run = "run";

type Self = typeof import("./ready-patch-prop.debug");
export type Value = Self[keyof Self];

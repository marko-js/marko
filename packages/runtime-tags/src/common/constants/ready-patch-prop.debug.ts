export const Channels = "channels";
export const Response = "response";
export const Resolvers = "resolvers";

type Self = typeof import("./ready-patch-prop.debug");
export type Value = Self[keyof Self];

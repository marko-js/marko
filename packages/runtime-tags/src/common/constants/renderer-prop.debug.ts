export const Id = "id";
export const Clone = "clone";
export const Setup = "setup";
export const Params = "params";
export const Owner = "owner";
export const Accessor = "accessor";
export const LocalClosures = "localClosures";
export const LocalClosureValues = "localClosureValues";
export const Embed = "embed";
export const Shell = "shell";

type Self = typeof import("./renderer-prop.debug");
export type Value = Self[keyof Self];

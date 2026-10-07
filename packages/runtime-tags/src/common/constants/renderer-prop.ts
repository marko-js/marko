export const Id = "a";
export const Clone = "b";
export const Setup = "c";
export const Params = "d";
export const Owner = "e";
export const Accessor = "f";
export const LocalClosures = "g";
export const Returns = "h";
export const Embed = "i";
export const Lazy = "j";

type Self = typeof import("./renderer-prop");
export type Value = Self[keyof Self];

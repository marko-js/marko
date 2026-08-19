export const Id = "a";
export const Clone = "b";
export const Setup = "c";
export const Params = "d";
export const Owner = "e";
export const Accessor = "f";
export const LocalClosures = "g";
export const LocalClosureValues = "h";
export const Embed = "i";
// A shell record's content: its walk creates scopes no setup runs.
export const Shell = "j";

type Self = typeof import("./renderer-prop");
export type Value = Self[keyof Self];

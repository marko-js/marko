export const Id = "a";
export const Clone = "b";
export const Setup = "c";
export const Params = "d";
export const Owner = "e";
export const Accessor = "f";
export const LocalClosures = "g";
export const LocalClosureValues = "h";
export const Embed = "i";
// A shell's content: its walk creates scopes no setup runs.
export const Shell = "j";
// A lazy template's ready id, on its server load wrapper.
export const ReadyId = "k";

type Self = typeof import("./renderer-prop");
export type Value = Self[keyof Self];

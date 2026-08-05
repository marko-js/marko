// Patch wire entry kinds — a namespace of their own: `patchers` dispatch is
// patch-only, so these never meet live scope accessor prefixes.
export const Attr = "a";
export const Bind = "d";
export const Branch = "b";
export const Child = "c";
export const Control = "n";
export const Effect = "e";
export const Fresh = "f";
// Mirrors `AccessorProp.Global` on live scopes.
export const Globals = "$";
export const Loop = "l";
export const Text = "t";
export const Value = "v";
export const Write = "w";

type Self = typeof import("./patch-key");
export type Value = Self[keyof Self];

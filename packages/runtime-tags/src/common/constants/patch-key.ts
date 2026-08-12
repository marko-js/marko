// Patch wire entry kinds — a namespace of their own: `patchers` dispatch is
// patch-only, so these never meet live scope accessor prefixes.
export const Attr = "a";
export const Bind = "d";
// A bound registration resolved against its paired live scope, deposited
// in the frame's bind table for `ValueBind` fills to reference.
export const BindSource = "h";
export const Branch = "b";
export const Child = "c";
export const Control = "n";
export const Effect = "e";
export const GlobalEffect = "g";
// Mirrors `AccessorProp.Global` on live scopes.
export const Globals = "$";
export const Loop = "l";
export const Poison = "x";
export const Setup = "s";
export const Text = "t";
export const Value = "v";
// A fill whose value is a rebound registration: the entry carries the
// bind-table index its `BindSource` deposited.
export const ValueBind = "f";
export const Write = "w";

type Self = typeof import("./patch-key");
export type Value = Self[keyof Self];

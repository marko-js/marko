// Patch wire entry kinds — a namespace of their own: `patchers` dispatch is
// patch-only, so these never meet live scope accessor prefixes.
export const Attr = "a";
export const Bind = "d";
// A bound registration resolved against its paired live scope, deposited
// in the frame's bind table for `_._.b(n)` references to resolve.
export const BindSource = "h";
export const Branch = "b";
export const Catch = "k";
export const Child = "c";
export const Control = "n";
export const Effect = "e";
export const GlobalEffect = "g";
// A dynamic tag's renderer selection: without a live `_fill_dynamic_tag`
// registration an unchanged renderer key pairs and a change rejects.
export const DynamicTag = "f";
// Mirrors `AccessorProp.Global` on live scopes.
export const Globals = "$";
export const Loop = "l";
export const Pending = "p";
export const Setup = "s";
export const Text = "t";
export const Value = "v";
// A fill whose value is a rebound registration: the entry carries the
// bind-table index its `BindSource` deposited.
export const Write = "w";

type Self = typeof import("./patch-key");
export type Value = Self[keyof Self];

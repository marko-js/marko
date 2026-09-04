// Patch wire entry kinds — a namespace of their own: `patchers` dispatch is
// patch-only, so these never meet live scope accessor prefixes.
export const Attr = "a";
// A spread's whole attribute set: the client re-applies it as a render.
export const Attrs = "j";
export const Bind = "d";
// A bound registration resolved against its paired live scope, stored
// in the frame's bind table for `_._.b(n)` references to resolve.
export const BindSource = "h";
export const Branch = "b";
export const Catch = "k";
export const Child = "c";
export const Control = "n";
export const Effect = "e";
// An unescaped hole: the client re-parses the markup into its range.
export const Html = "q";
// A dynamic tag whose renderer arrives as input: the entry re-renders it.
export const DynamicTag = "f";
// Mirrors `AccessorProp.Global` on live scopes.
export const Globals = "$";
// Setup-only: registered ids a fresh scope runs, in the shell record's
// `inits…!effects…` grammar (a client-fed local's feeds, a child's mounts).
export const Init = "i";
export const Loop = "l";
export const Pending = "p";
export const Setup = "s";
// A `<style>` interpolation: `accessor name`, the client rewrites the rule.
export const Style = "y";
export const Text = "t";
// A text-only element (or comment) body: the client rewrites its content.
export const TextContent = "m";
export const Value = "v";
// A fill whose value is a rebound registration: the entry carries the
// bind-table index its `BindSource` stored.
export const Write = "w";

type Self = typeof import("./patch-key");
export type Value = Self[keyof Self];

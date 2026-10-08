// Patch wire entry kinds — a namespace of their own: `patchers` dispatch is
// patch-only, so these never meet live scope accessor prefixes.
export const Attr = "a";
// A spread's whole attribute set: the client re-applies it as a render.
export const Attrs = "j";
export const Bind = "d";
export const BindValue = "u";
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
// Setup-only: registered ids a fresh scope runs, in the shell's
// `inits…!effects…` grammar (a client-derived local's inits, a child's mounts).
export const Init = "i";
export const Loop = "l";
export const Pending = "p";
export const Setup = "s";
// A `<show>` over request data: `accessor start? end?`, the display bit.
export const Show = "g";
// A `<style>` interpolation: `accessor name`, the client rewrites the rule.
export const Style = "y";
export const Text = "t";
// A text-only element (or comment) body: the client rewrites its content.
export const TextContent = "m";
export const Value = "v";
export const LoopItem = "r";
// Setup-only: a child's tag-variable wiring, registered at its owner. An
// integer key enumerates ahead of the fills that return through it.
export const Var = "0";
// A plain write of a value into the scope's slot (`patch-write`): a handler,
// a created scope's seed, or a value a bound registration resolves by path.
export const Write = "w";

type Self = typeof import("./patch-key");
export type Value = Self[keyof Self];

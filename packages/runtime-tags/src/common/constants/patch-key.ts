// Patch wire entry kinds — a namespace of their own: `patchers` dispatch is
// patch-only, so these never meet live scope accessor prefixes.
export const Attr = "a";
// A spread's whole attribute set: the client re-applies it as a render.
export const Attrs = "j";
// A function a patch binds to a slot or a fill, by its registration and owner hops.
export const Bind = "d";
export const BindFill = "u";
export const Branch = "b";
export const Catch = "k";
export const Child = "c";
export const Control = "n";
export const Effect = "e";
// An unescaped hole: the client re-parses the markup into its range.
export const Html = "q";
// A dynamic tag whose renderer arrives as input: the entry renders it.
export const DynamicTag = "f";
// Mirrors `AccessorProp.Global` on live scopes.
export const Globals = "$";
// Registered ids a scope runs: a fresh one's setup, in the shell's
// `inits…!effects…` grammar, or any scope's signals the patch writes.
export const Init = "i";
export const Loop = "l";
export const Pending = "p";
export const QueuedEffect = "h";
export const Setup = "s";
// A created scope's setup values, which its child entries precede: a value's
// renders may read what they write.
export const SetupValues = "o";
// A `<show>` over request data: `accessor start? end?`, the display bit.
export const Show = "g";
// A `<style>` interpolation: `accessor name`, the client rewrites the rule.
export const Style = "y";
export const Text = "t";
// A text-only element (or comment) body: the client rewrites its content.
export const TextContent = "m";
export const Fill = "v";
export const LoopItem = "r";
// Setup-only: a child's tag-variable wiring, registered at its owner.
export const Var = "z";
// A plain write of a value into the scope's slot (`patches/write`): a handler,
// a created scope's seed, or a value a bound registration resolves by path.
export const Write = "w";
export const MarkedWrite = "x";
// Content a client consumer keeps: the holes each instance its owner holds takes.
export const Withheld = "W";

type Self = typeof import("./patch-key");
export type Value = Self[keyof Self];

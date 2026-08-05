export const Attr = "PatchAttr:";
export const Bind = "PatchBind:";
export const Branch = "PatchBranch:";
export const Child = "PatchChild:";
export const Effect = "PatchEffect:";
export const Fresh = "PatchFresh:";
export const Globals = "$global:";
export const Loop = "PatchLoop:";
export const Text = "PatchText:";
export const Value = "PatchValue:";
export const Write = "PatchWrite:";

type Self = typeof import("./patch-key.debug");
export type Value = Self[keyof Self];

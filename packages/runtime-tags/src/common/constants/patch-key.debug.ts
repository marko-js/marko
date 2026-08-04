export const Attr = "PatchAttr:";
export const Branch = "PatchBranch:";
export const Child = "PatchChild:";
export const Fresh = "PatchFresh:";
export const Globals = "$global:";
export const Loop = "PatchLoop:";
export const Text = "PatchText:";
export const Value = "PatchValue:";

type Self = typeof import("./patch-key.debug");
export type Value = Self[keyof Self];

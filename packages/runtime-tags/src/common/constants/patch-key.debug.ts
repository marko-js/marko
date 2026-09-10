export const Attr = "PatchAttr:";
export const Attrs = "PatchAttrs:";
export const Bind = "PatchBind:";
export const Branch = "PatchBranch:";
export const Catch = "PatchCatch:";
export const Child = "PatchChild:";
export const Control = "PatchControl:";
export const Effect = "PatchEffect:";
export const Html = "PatchHtml:";
export const DynamicTag = "PatchDynamicTag:";
export const Globals = "$global:";
export const Init = "PatchInit:";
export const Loop = "PatchLoop:";
export const Pending = "PatchPending:";
export const Setup = "PatchSetup:";
export const Style = "PatchStyle:";
export const Text = "PatchText:";
export const TextContent = "PatchTextContent:";
export const Value = "PatchValue:";
// Integer: enumerates ahead of the fills that return through it.
export const Var = "0";
export const Write = "PatchWrite:";

type Self = typeof import("./patch-key.debug");
export type Value = Self[keyof Self];

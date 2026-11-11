export const Attr = "PatchAttr:";
export const Attrs = "PatchAttrs:";
export const AttrContent = "PatchAttrContent:";
export const Bind = "PatchBind:";
export const BindFill = "PatchBindFill:";
export const Branch = "PatchBranch:";
export const Catch = "PatchCatch:";
export const Child = "PatchChild:";
export const Control = "PatchControl:";
export const Effect = "PatchEffect:";
export const Html = "PatchHtml:";
export const DynamicTag = "PatchDynamicTag:";
export const Global = "$global:";
export const Render = "PatchRender:";
export const Subscribers = "PatchSubscribers:";
export const Loop = "PatchLoop:";
export const Pending = "PatchPending:";
export const QueuedEffect = "PatchQueuedEffect:";
export const Setup = "PatchSetup:";
export const SetupValues = "PatchSetupValues:";
// A `<show>` over request data, by its accessor: the display bit, or
// `[display, start]` where its body has a start marker.
export const Show = "PatchShow:";
export const Style = "PatchStyle:";
export const Text = "PatchText:";
export const TextContent = "PatchTextContent:";
export const Fill = "PatchFill:";
export const LoopItem = "PatchLoopItem:";
export const Var = "PatchVar:";
export const Write = "PatchWrite:";
export const MarkedWrite = "PatchMarkedWrite:";
export const ClientBranch = "PatchClientBranch:";

type Self = typeof import("./patch-key.debug");
export type Value = Self[keyof Self];

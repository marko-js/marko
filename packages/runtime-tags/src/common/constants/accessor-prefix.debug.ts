export const BranchScopes = "BranchScopes:";
export const ClosureScopes = "ClosureScopes:";
export const ClosureSignalIndex = "ClosureSignalIndex:";
export const ConditionalRenderer = "ConditionalRenderer:";
export const ControlledObserver = "ControlledObserver:";
export const ControlledHandler = "ControlledHandler:";
export const ControlledType = "ControlledType:";
export const ControlledValue = "ControlledValue:";
export const DynamicHTMLLastChild = "DynamicHTMLLastChild:";
export const EventAttributes = "EventAttributes:";
export const KeyedScopes = "KeyedScopes:";
export const Lifecycle = "Lifecycle:";
export const Promise = "Promise:";
export const TagVariableChange = "TagVariableChange:";
// Patch-only namespaces are inlined like the rest, so ordinary client
// bundles never carry them.
export const PatchAttr = "PatchAttr:";
export const PatchHole = "PatchHole:";
export const PatchHtml = "PatchHtml:";
export const PatchApplied = "PatchApplied:";
export const BoundaryAnchor = "BoundaryAnchor:";

type Self = typeof import("./accessor-prefix.debug");
export type Value = Self[keyof Self];

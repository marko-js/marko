export enum AccessorPrefix {
  BranchScopes = "BranchScopes:",
  ClosureScopes = "ClosureScopes:",
  ClosureSignalIndex = "ClosureSignalIndex:",
  ConditionalRenderer = "ConditionalRenderer:",
  ControlledHandler = "ControlledHandler:",
  ControlledType = "ControlledType:",
  ControlledValue = "ControlledValue:",
  DynamicHTMLLastChild = "DynamicHTMLLastChild:",
  EventAttributes = "EventAttributes:",
  KeyedScopes = "KeyedScopes:",
  Lifecycle = "Lifecycle:",
  Promise = "Promise:",
  TagVariableChange = "TagVariableChange:",
  // "UpdateAttr:" ("N" optimized) is reserved for update-render attr hole
  // values (composed `UpdateAttr:<attrName>:<elementAccessor>`). It is
  // deliberately not an enum member: only compiled HTML output and the
  // update-only client runtime use it, and enum objects ship in every client
  // bundle. See `getUpdateAttrPrefix` in the translator.
}

export enum AccessorProp {
  Global = "$global",
  Owner = "_",
  AbortControllers = "#AbortControllers",
  AbortScopes = "#AbortScopes",
  AwaitCounter = "#AwaitCounter",
  BranchAccessor = "#BranchAccessor",
  BranchScopes = "#BranchScopes",
  CatchContent = "#CatchContent",
  ClosestBranch = "#ClosestBranch",
  ClosestBranchId = "#ClosestBranchId",
  Gen = "#Gen",
  DetachedAwait = "#DetachedAwait",
  EndNode = "#EndNode",
  Id = "#Id",
  Load = "#Load",
  LoopKey = "#LoopKey",
  ParentBranch = "#ParentBranch",
  PendingEffects = "#PendingEffects",
  PendingRenders = "#PendingRenders",
  PendingScopes = "#PendingScopes",
  PlaceholderBranch = "#PlaceholderBranch",
  PlaceholderContent = "#PlaceholderContent",
  Renderer = "#Renderer",
  StartNode = "#StartNode",
  TagVariable = "#TagVariable",
  TagVariableChange = "#TagVariableChange",
}

export enum RendererProp {
  Id = "id",
  Clone = "clone",
  Setup = "setup",
  Params = "params",
  Owner = "owner",
  Accessor = "accessor",
  LocalClosures = "localClosures",
  LocalClosureValues = "localClosureValues",
  Embed = "embed",
}

export enum PendingRenderProp {
  Key = "key",
  Scope = "scope",
  Signal = "signal",
  Value = "value",
  Gen = "gen",
  Pending = "pending",
}

export enum ClosureSignalProp {
  ScopeInstancesAccessor = "scopeInstancesAccessor",
  SignalIndexAccessor = "signalIndexAccessor",
  Index = "index",
}

export enum KeyedScopesProp {
  PreviousKey = "PreviousKey:",
}

export enum LoadSignalValue {
  Value = "value",
  Signal = "signal",
}

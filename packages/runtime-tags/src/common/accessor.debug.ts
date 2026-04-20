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
  Getter = "Getter:",
  Lifecycle = "Lifecycle:",
  Promise = "Promise:",
  TagVariableChange = "TagVariableChange:",
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
  Creating = "#Creating",
  Destroyed = "#Destroyed",
  DetachedAwait = "#DetachedAwait",
  EndNode = "#EndNode",
  Id = "#Id",
  LoopKey = "#LoopKey",
  ParentBranch = "#ParentBranch",
  PendingEffects = "#PendingEffects",
  PendingRenders = "#PendingRenders",
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
}

export enum ClosureSignalProp {
  ScopeInstancesAccessor = "scopeInstancesAccessor",
  SignalIndexAccessor = "signalIndexAccessor",
  Index = "index",
}

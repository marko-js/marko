export enum AccessorPrefix {
  ClosureScopes = "ClosureScopes:",
  ClosureSignalIndex = "ClosureSignalIndex:",
  ConditionalRenderer = "ConditionalRenderer:",
  ConditionalScope = "ConditionalScope:",
  ControlledHandler = "ControlledHandler:",
  ControlledType = "ControlledType:",
  ControlledValue = "ControlledValue:",
  DynamicPlaceholderLastChild = "DynamicPlaceholderLastChild:",
  EventAttributes = "EventAttributes:",
  Getter = "Getter:",
  LifecycleAbortController = "LifecycleAbortController:",
  LoopScopeArray = "LoopScopeArray:",
  LoopScopeMap = "LoopScopeMap:",
  Promise = "Promise:",
  TagVariableChange = "TagVariableChange:",
}

export enum AccessorProp {
  Owner = "_", // TODO: should be a full name.
  BranchAccessor = "#BranchAccessor",
  CatchContent = "#CatchContent",
  PlaceholderBranch = "#PlaceholderBranch",
  PlaceholderContent = "#PlaceholderContent",
  TagVariable = "#TagVariable",
  TagVariableChange = "#TagVariableChange",
  ClosestBranchId = "#ClosestBranchId",
}

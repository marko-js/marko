export enum AccessorPrefix {
  BranchScopes = "A",
  ClosureScopes = "B",
  ClosureSignalIndex = "C",
  ConditionalRenderer = "D",
  ControlledHandler = "E",
  ControlledType = "F",
  ControlledValue = "G",
  DynamicHTMLLastChild = "H",
  EventAttributes = "I",
  Getter = "J",
  Lifecycle = "K",
  Promise = "L",
  TagVariableChange = "M",
}

export enum AccessorProp {
  Global = "$",
  Owner = "_",
  AbortControllers = "A",
  AbortScopes = "B",
  AwaitCounter = "O",
  BranchAccessor = "C",
  BranchScopes = "D",
  CatchContent = "E",
  ClosestBranch = "F",
  ClosestBranchId = "G",
  Creating = "H",
  Destroyed = "I",
  DetachedAwait = "V",
  EndNode = "K",
  Id = "L",
  LoopKey = "M",
  ParentBranch = "N",
  PendingEffects = "J",
  PendingRenders = "W",
  PlaceholderBranch = "P",
  PlaceholderContent = "Q",
  Renderer = "R",
  StartNode = "S",
  TagVariable = "T",
  TagVariableChange = "U",
}

export enum RendererProp {
  Id = "a",
  Clone = "b",
  Setup = "c",
  Params = "d",
  Owner = "e",
  Accessor = "f",
  LocalClosures = "g",
  LocalClosureValues = "h",
  Embed = "i",
}

export enum PendingRenderProp {
  Key = "a",
  Scope = "b",
  Signal = "c",
  Value = "d",
}

export enum ClosureSignalProp {
  ScopeInstancesAccessor = "a",
  SignalIndexAccessor = "b",
  Index = "c",
}

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
  KeyedScopes = "O",
  Lifecycle = "K",
  Promise = "L",
  TagVariableChange = "M",
  // N/P/Q/R are patch-only Attr, FragmentHtml, PatchHole, and PatchHtml
  // prefixes kept outside this widely shipped enum.

  // "T" is reserved for a persisted `<try>` placeholder's site id.
  // It stays outside the enum so ordinary client bundles do not include it.
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
  Gen = "H",
  DetachedAwait = "V",
  EndNode = "K",
  Id = "L",
  Load = "X",
  LoopKey = "M",
  ParentBranch = "N",
  PendingEffects = "J",
  PendingRenders = "W",
  PendingScopes = "Y",
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
  Gen = "e",
  Pending = "f",
}

export enum ClosureSignalProp {
  ScopeInstancesAccessor = "a",
  SignalIndexAccessor = "b",
  Index = "c",
}

export enum KeyedScopesProp {
  PreviousKey = "_",
}

export enum FragmentContextProp {
  GetScope = "g",
  Stamp = "s",
  Adopt = "a",
}

export enum LoadSignalValue {
  Value = "a",
  Signal = "b",
}

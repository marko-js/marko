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
  KeyedScopes = "O",
  Lifecycle = "K",
  Promise = "L",
  TagVariableChange = "M",
  // "N" is reserved for UpdateAttr (update-render attr hole values). It is
  // deliberately not an enum member: only compiled HTML output and the
  // update-only client runtime use it, and enum objects ship in every client
  // bundle. See `getUpdateAttrPrefix` in the translator.
  // "P" is reserved for FragmentHtml (fragment frame entries stashed on
  // their anchor's patch scope) under the same rule -- only the update
  // applier uses it. See `FRAGMENT_PREFIX` in dom/update.
  // "Q" is reserved for UpdateHole (update-render text hole values),
  // "R" for UpdateHtml (unsafe-html holes), and "S" for UpdateChild
  // (update-render child scope links for update-generic children) under
  // the same rule. See `getUpdateHolePrefix`/`getUpdateHtmlPrefix`/
  // `getUpdateChildPrefix` in the translator. Bare single-char scope
  // PROPS (`Q` PlaceholderContent, `R` Renderer, `S` StartNode, `N`
  // ParentBranch in `AccessorProp`) stay unambiguous: prefixed keys are
  // always longer than one character, and the generic applier
  // (`_update_scope` in dom/update) checks length before prefix.
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

export enum LoadSignalValue {
  Value = "a",
  Signal = "b",
}

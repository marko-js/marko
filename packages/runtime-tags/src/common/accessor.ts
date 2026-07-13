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
  // "Z" is reserved for the possession echo's per-hop site id (`HOP_SITE_
  // PREFIX`), stashed on a dynamic-tag hop's scope alongside its
  // `ConditionalRenderer:` key so the client can read it back off its live
  // tree in `_have`. Deliberately not an enum member so it stays out of
  // every client bundle -- only the html writer (html/dynamic-tag) and the
  // update-only client runtime (dom/update) use it. Persisted resume only.
  // "T" is reserved for a `<try>` placeholder boundary's site id
  // (`BOUNDARY_SITE_PREFIX`), the possession echo's other half: stashed on
  // the PARENT scope (alongside the ordinary `BranchScopes:` link) when a
  // document render's placeholder is going to ship (`tryPlaceholder` in
  // html/writer.ts), and tombstoned to `0` the moment the body's first
  // content ships (server-side, riding the same flush as the placeholder
  // swap) or an update-delivered body applies (client-side,
  // `_update_branch`). A STRING value on a resumed scope therefore means
  // "this matched boundary is still showing its placeholder" (see the
  // "Correctness" section of designs/persisted-pages-roadmap.md and
  // `_have`/`_try` in dom/update.ts and html/writer.ts). Deliberately not
  // an enum member for the same client-bundle-size reason as "Z".
  // Persisted resume only.
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

import {
  AccessorPrefix as ProductionAccessorPrefix,
  AccessorProp as ProductionAccessorProp,
} from "../../common/accessor";
import {
  AccessorPrefix as DebugAccessorPrefix,
  AccessorProp as DebugAccessorProp,
} from "../../common/accessor.debug";
import { isOptimize } from "./marko-config";
export function getAccessorPrefix(): typeof DebugAccessorPrefix {
  return (isOptimize() ? ProductionAccessorPrefix : DebugAccessorPrefix) as any;
}

export function getAccessorProp(): typeof DebugAccessorProp {
  return (isOptimize() ? ProductionAccessorProp : DebugAccessorProp) as any;
}

// Patch-render attr hole values are keyed
// `PatchAttr:<attrName>:<elementAccessor>`. The prefix lives here rather
// than in the shared AccessorPrefix enums because those enum objects ship in
// every client bundle, while this key only appears in compiled HTML output
// and the update-only client runtime ("N" is reserved in the enums).
export function getPatchAttrPrefix() {
  return isOptimize() ? "N" : "PatchAttr:";
}

// Patch-render text hole values are keyed `PatchHole:<nodeAccessor>`
// ("Q" reserved, same rule as above). The prefix divorces hole-value patch
// keys from the node-accessor namespace: fragment-frame subtrees share one
// object between patch and live scopes, so an unprefixed hole key would
// collide with the walker-bound node ref stored under the same accessor.
export function getPatchHolePrefix() {
  return isOptimize() ? "Q" : "PatchHole:";
}

// Unsafe-html holes get their own key namespace ("R" reserved) so the
// generic applier (`_update_scope` in dom/update-merges) can tell
// range-replacing html holes from text holes by key alone.
export function getPatchHtmlPrefix() {
  return isOptimize() ? "R" : "PatchHtml:";
}

// Patch-render child scope links for update-generic children are keyed
// `PatchChild:<childScopeAccessor>` ("S" reserved) so the generic applier
// can descend into the child's patch scope with no compiled dispatch line
// in the parent -- the mechanism that lets server-only compositions
// classify transitively. Written only in patch renders (see
// `_update_child` in html/writer); non-generic children keep the plain
// accessor link and the parent's compiled dispatch.
export function getPatchChildPrefix() {
  return isOptimize() ? "S" : "PatchChild:";
}

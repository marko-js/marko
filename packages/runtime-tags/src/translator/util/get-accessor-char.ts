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

export function getPatchAttrPrefix() {
  return isOptimize() ? "N" : "PatchAttr:";
}

export function getPatchHolePrefix() {
  return isOptimize() ? "Q" : "PatchHole:";
}

// Unsafe-html holes get their own key namespace ("R" reserved).
export function getPatchHtmlPrefix() {
  return isOptimize() ? "R" : "PatchHtml:";
}

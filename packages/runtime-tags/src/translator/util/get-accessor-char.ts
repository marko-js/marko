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

// Update-render attr hole values are keyed
// `UpdateAttr:<attrName>:<elementAccessor>`. The prefix lives here rather
// than in the shared AccessorPrefix enums because those enum objects ship in
// every client bundle, while this key only appears in compiled HTML output
// and the update-only client runtime ("N" is reserved in the enums).
export function getUpdateAttrPrefix() {
  return isOptimize() ? "N" : "UpdateAttr:";
}

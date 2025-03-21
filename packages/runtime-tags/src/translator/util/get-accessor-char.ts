import {
  AccessorPrefix as ProductionAccessorPrefix,
  AccessorProp as ProductionAccessorProp,
} from "../../common/accessor";
import {
  AccessorPrefix as DebugAccessorPrefix,
  AccessorProp as DebugAccessorProp,
} from "../../common/accessor.debug";
import { isOptimize } from "./marko-config";
export function getAccessorPrefix() {
  return isOptimize() ? ProductionAccessorPrefix : DebugAccessorPrefix;
}

export function getAccessorProp() {
  return isOptimize() ? ProductionAccessorProp : DebugAccessorProp;
}

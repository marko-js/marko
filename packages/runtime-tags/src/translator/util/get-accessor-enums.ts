import {
  AccessorPrefix as ProductionAccessorPrefix,
  AccessorProp as ProductionAccessorProp,
  PatchKey as ProductionPatchKey,
} from "../../common/accessor";
import {
  AccessorPrefix as DebugAccessorPrefix,
  AccessorProp as DebugAccessorProp,
  PatchKey as DebugPatchKey,
} from "../../common/accessor.debug";
import { isOptimize } from "./marko-config";
export function getAccessorPrefix(): typeof DebugAccessorPrefix {
  return (isOptimize() ? ProductionAccessorPrefix : DebugAccessorPrefix) as any;
}

export function getAccessorProp(): typeof DebugAccessorProp {
  return (isOptimize() ? ProductionAccessorProp : DebugAccessorProp) as any;
}

// A patch entry's key prefix: a compiled writer passes its whole key.
export function getPatchKey(): typeof DebugPatchKey {
  return (isOptimize() ? ProductionPatchKey : DebugPatchKey) as any;
}

import "./patch-write";
import { PatchKey } from "../common/types";
import { createPatchers, patchers } from "./resume";
import { patchFills } from "./signals";

// A soft miss is a fill whose intersection was tree-shaken: nothing to
// update. A created scope's seed is required, so a miss crashes to reject.
patchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)]?.(scope, value);
createPatchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)](scope, value);

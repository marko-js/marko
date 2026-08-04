import { PatchKey } from "../common/types";
import { patchers } from "./resume";
import { patchFills } from "./signals";

// A miss is a fill whose intersection was tree-shaken: nothing to update.
patchers[PatchKey.Value] = (scope, key, value) =>
  patchFills[key.slice(PatchKey.Value.length)]?.(scope, value);

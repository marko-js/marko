import { AccessorPrefix } from "../common/types";
import { patchers } from "./resume";
import { patchFills } from "./signals";

// A miss is a fill whose intersection was tree-shaken: nothing to update.
patchers[AccessorPrefix.PatchValue] = (scope, key, value) =>
  patchFills[key.slice(AccessorPrefix.PatchValue.length)]?.(scope, value);

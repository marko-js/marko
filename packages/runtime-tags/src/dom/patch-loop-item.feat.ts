import { PatchKey, type Scope } from "../common/types";
import { getLoopItem, type LoopItemAt } from "./patch";
import { patchers, patchScope } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.LoopItem]: (LoopItemAt | Scope)[];
  }
}

// `[at, patch, …]`: a client-owned list's rows, or items written after their
// loop's flush (a settling boundary); an item the client removed is skipped.
patchers[PatchKey.LoopItem] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.LoopItem.length);
  for (let i = 0; i < value.length; i += 2) {
    const item = getLoopItem(scope, accessor, value[i] as LoopItemAt);
    if (item) patchScope(value[i + 1] as Scope, item);
  }
};

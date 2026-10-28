import { PatchKey, type Scope } from "../../common/types";
import { getLoopItem, type LoopItemAt } from "./apply";
import { patchers, patchScope } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.LoopItem]: (LoopItemAt | Scope)[];
  }
}

// `[at, patch, …]`: rows of a list updating from the client, or items written
// after their loop's flush (a settling boundary); a removed item is skipped.
patchers[PatchKey.LoopItem] = (scope, accessor, value) => {
  for (let i = 0; i < value.length; i += 2) {
    const item = getLoopItem(scope, accessor, value[i] as LoopItemAt);
    if (item) patchScope(value[i + 1] as Scope, item);
  }
};

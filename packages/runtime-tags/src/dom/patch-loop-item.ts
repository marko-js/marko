import { PatchKey, type Scope } from "../common/types";
import { getLoopItem, type LoopItemAt } from "./patch";
import { patchers, patchScope } from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.LoopItem]: (LoopItemAt | Scope)[];
  }
}

// Items written after their loop's frame, `[at, partial, …]`. Only a
// settling boundary writes then, so `patch-boundary` carries this patcher; an
// item the client has since removed takes nothing.
patchers[PatchKey.LoopItem] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.LoopItem.length);
  for (let i = 0; i < value.length; i += 2) {
    const item = getLoopItem(scope, accessor, value[i] as LoopItemAt);
    if (item) patchScope(value[i + 1] as Scope, item);
  }
};

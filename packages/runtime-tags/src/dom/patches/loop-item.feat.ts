import { AccessorProp, PatchKey, type Scope } from "../../common/types";
import { queueRender } from "../queue";
import { getLoopItem, type LoopItemAt } from "./apply";
import { patchers, patchScope, setupPatchers, withCreating } from "./apply";

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

// The rows a created scope starts with render in its own renders this run: their
// entries apply after those, as a creation's (keyed as `queueCompleteAwaitCounter`).
setupPatchers[PatchKey.LoopItem] = (scope, accessor, value) =>
  queueRender(
    scope,
    () =>
      withCreating(() => patchers[PatchKey.LoopItem]!(scope, accessor, value)),
    -1,
    undefined,
    scope[AccessorProp.Id] + 1e9,
  );

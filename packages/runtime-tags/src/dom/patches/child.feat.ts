import { AccessorProp, PatchKey, type Scope } from "../../common/types";
import { runId } from "../queue";
import { patchers, patchScope, withCreating } from "./apply";

declare module "./apply" {
  interface PatchValues {
    // A boundary's entry may also be `[patch, catchId, contentId?, placeholderId?]`,
    // with `0` for the patch of a `<try>` body that threw.
    [PatchKey.Child]: Scope | [Scope | 0, string | undefined, string?, string?];
  }
}

// Pairs a custom tag's child, live at the same accessor, with its patch;
// boundary features unwrap their own entries before delegating here.
patchers[PatchKey.Child] = (scope, accessor, value) => {
  const child = scope[accessor] as Scope;
  // Only a patch from another build (or a pairing bug) names a missing child;
  // the next line then throws, which rejects the patch.
  if (MARKO_DEBUG && !child) {
    throw new Error(
      `No live child scope for "${accessor}" (scope gen ${scope[AccessorProp.Gen]}, keys: ${Object.keys(scope).join(" ")}).`,
    );
  }
  child[AccessorProp.Owner] ??= scope;
  // A scope this flush's shell walk created is bare (no render set it up):
  // its entries create, like the branch's own; a live one pairs.
  if (child[AccessorProp.Gen] === runId) {
    withCreating(patchScope, value as Scope, child);
  } else {
    patchScope(value as Scope, child);
  }
};

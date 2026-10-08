import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { runId } from "./queue";
import { patchers, patchScope, withCreating } from "./resume";

declare module "./resume" {
  interface PatchValues {
    // A boundary's entry may also be `[patch, contentId, catchId?, placeholderId?]`.
    [PatchKey.Child]: Scope | [Scope, string, (string | 0)?, (string | 0)?];
  }
}

// Pairs a custom tag's child, live at the same accessor, with its patch;
// boundary features unwrap their own entries before delegating here.
patchers[PatchKey.Child] = (scope, key, value) => {
  const child = scope[key.slice(PatchKey.Child.length) as Accessor] as Scope;
  // Without one, the next line throws, which rejects the patch.
  if (MARKO_DEBUG && !child) {
    throw new Error(
      `No live child scope for "${key}" (scope gen ${scope[AccessorProp.Gen]}, keys: ${Object.keys(scope).join(" ")}).`,
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

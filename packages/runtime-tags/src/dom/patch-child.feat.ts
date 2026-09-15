import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import {
  failPatch,
  patchers,
  patchRun,
  patchScope,
  withCreating,
} from "./resume";

declare module "./resume" {
  interface PatchValues {
    // A boundary's entry may also be `[partial, contentId, catchId?, placeholderId?]`.
    [PatchKey.Child]: Scope | [Scope, string, (string | 0)?, (string | 0)?];
  }
}

// Pairs a custom tag's child scope through its parent: the entry value is
// the child's partial and the live child sits at the same accessor.
// The boundary feature unwraps its own entry before delegating here.
patchers[PatchKey.Child] = (scope, key, value) => {
  const child = scope[key.slice(PatchKey.Child.length) as Accessor] as Scope;
  // Same-build reachable: a patch during the initial stream can precede
  // the boundary's resumed branch (see pair-patches-into-still-streaming).
  if (!child) {
    if (MARKO_DEBUG) {
      console.warn(
        `A patch rejected: no live child scope for "${key}" (scope gen ${scope[AccessorProp.Gen]}, keys: ${Object.keys(scope).join(" ")}).`,
      );
    }
    failPatch();
  }
  child[AccessorProp.Owner] ??= scope;
  // A scope this flush's shell walk created is bare (no render set it up):
  // its entries create, like the branch's own; a live one pairs.
  if (child[AccessorProp.Gen] >= patchRun) {
    withCreating(() => patchScope(value as Scope, child));
  } else {
    patchScope(value as Scope, child);
  }
};

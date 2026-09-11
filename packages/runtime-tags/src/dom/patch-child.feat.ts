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
  withConstructing,
} from "./resume";

// Pairs a custom tag's child scope through its parent: the entry value is
// the child's partial and the live child sits at the same accessor.
patchers[PatchKey.Child] = (scope, key, value) => {
  const child = scope[key.slice(PatchKey.Child.length) as Accessor] as Scope;
  // Same-build reachable: a patch during the initial stream can precede
  // the boundary's resumed branch (see pair-patches-into-still-streaming).
  if (!child) failPatch();
  child[AccessorProp.Owner] ??= scope;
  // A scope this flush's shell walk created is bare (no render set it up):
  // its entries construct, like the branch's own; a live one pairs.
  if (child[AccessorProp.Gen] >= patchRun) {
    withConstructing(() => patchScope(value as Scope, child));
  } else {
    patchScope(value as Scope, child);
  }
};

import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { failPatch, patchers, patchScope } from "./resume";

// Pairs a custom tag's child scope through its parent: the entry's value is
// the child's partial and the live child sits at the same accessor (a
// construct's walk created it; it takes the parent as owner here).
patchers[PatchKey.Child] = (scope, key, value) => {
  const child = scope[key.slice(PatchKey.Child.length) as Accessor] as Scope;
  // Same-build reachable: a patch during the initial stream can precede
  // the boundary's resumed branch (see pair-patches-into-still-streaming).
  if (!child) failPatch();
  child[AccessorProp.Owner] ??= scope;
  patchScope(value as Scope, child);
};

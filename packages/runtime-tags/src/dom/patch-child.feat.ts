import { type Accessor, AccessorPrefix, type Scope } from "../common/types";
import { failPatch, patchers, walkScope } from "./resume";

// Pairs a custom tag's child scope through its parent: the entry's value is
// the child's frame id and the live child sits at the same accessor.
patchers[AccessorPrefix.PatchBranch] = (scope, key, value) => {
  const child = scope[
    key.slice(AccessorPrefix.PatchBranch.length) as Accessor
  ] as Scope | undefined;
  if (child) {
    walkScope(value as number, child);
  } else {
    failPatch();
  }
};

import { type Accessor, PatchKey, type Scope } from "../common/types";
import { patchers, patchScope } from "./resume";

// Pairs a custom tag's child scope through its parent: the entry's value is
// the child's partial and the live child sits at the same accessor.
patchers[PatchKey.Child] = (scope, key, value) => {
  patchScope(
    value as Scope,
    scope[key.slice(PatchKey.Child.length) as Accessor] as Scope,
  );
};

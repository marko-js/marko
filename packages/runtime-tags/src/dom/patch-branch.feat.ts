import { type Accessor, AccessorPrefix, type Scope } from "../common/types";
import { failPatch, patchers, patchPairs } from "./resume";

// A conditional's fills verify the live render still selects the same branch
// (`-1` for none, `0` not elided) and pair its child scope for later fills.
patchers[AccessorPrefix.ConditionalRenderer] = (scope, key, value) => {
  const liveBranch =
    scope[
      (AccessorPrefix.BranchScopes +
        key.slice(AccessorPrefix.ConditionalRenderer.length)) as Accessor
    ];
  if ((value as number) !== (liveBranch ? ((scope[key] as number) ?? 0) : -1)) {
    failPatch();
  }
};

patchers[AccessorPrefix.BranchScopes] = (scope, key, value) => {
  patchPairs[value as number] = scope[key] as Scope;
};

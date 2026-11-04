import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { subscribeToScopeSet } from "../signals";
import { patchers, patchScope } from "./apply";
import { installKeptInstances } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.ClientBranch]: Scope;
  }
}

// The holes of content a client consumer keeps, for each live instance its
// owner holds.
patchers[PatchKey.ClientBranch] = (scope, contentId, value) => {
  scope[AccessorPrefix.ClientBranchHoles + contentId] = value;
  for (const instance of (scope[
    AccessorPrefix.ClientBranchScopes + contentId
  ] as Set<Scope> | undefined) || []) {
    if (instance[AccessorProp.Gen] > 0) patchScope(value, instance);
  }
};

// Content created from its shell enters its owner's set, whoever creates it, with
// the holes the owner last took, and leaves it when destroyed.
installKeptInstances((branch, id) => {
  const owner = branch[AccessorProp.Owner]!;
  subscribeToScopeSet(owner, AccessorPrefix.ClientBranchScopes + id, branch);
  if (owner[AccessorPrefix.ClientBranchHoles + id]) {
    patchScope(owner[AccessorPrefix.ClientBranchHoles + id] as Scope, branch);
  }
});

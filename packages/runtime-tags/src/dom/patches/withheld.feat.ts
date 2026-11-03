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
    [PatchKey.Withheld]: Scope;
  }
}

// The holes of content a client consumer keeps, for each live instance its
// owner holds.
patchers[PatchKey.Withheld] = (scope, contentId, value) => {
  scope[AccessorPrefix.WithheldHoles + contentId] = value;
  for (const instance of (scope[AccessorPrefix.WithheldScopes + contentId] as
    | Set<Scope>
    | undefined) || []) {
    if (instance[AccessorProp.Gen] > 0) patchScope(value, instance);
  }
};

// Content created from its shell enters its owner's set, whoever creates it, with
// the holes the owner last took, and leaves it when destroyed.
installKeptInstances((branch, id) => {
  const owner = branch[AccessorProp.Owner]!;
  subscribeToScopeSet(owner, AccessorPrefix.WithheldScopes + id, branch);
  if (owner[AccessorPrefix.WithheldHoles + id]) {
    patchScope(owner[AccessorPrefix.WithheldHoles + id] as Scope, branch);
  }
});

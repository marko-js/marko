import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { subscribeToScopeSet } from "../signals";
import { installPatchShells, patchers, patchScope } from "./apply";
import { installKeptInstances, registerShell } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.ClientBranch]: Scope | ((instance: Scope) => Scope);
  }
}

// Each kept content's section by its id: its owner holds the section's scopes.
const keptSections: Record<string, string> = {};

// The holes of content a client consumer keeps, for each live instance among
// its section's scopes (the entry's key) its owner holds.
patchers[PatchKey.ClientBranch] = (scope, section, value) => {
  scope[AccessorPrefix.ClientBranchHoles + section] = value;
  for (const instance of (scope[AccessorPrefix.ClosureScopes + section] as
    | Set<Scope>
    | undefined) || []) {
    if (instance[AccessorProp.Gen] > 0) patchInstance(value, instance);
  }
};

// A kept content's shell names its section after its id (`id|section`).
installPatchShells((shell) => {
  const kept = /^([^;,]*)\|(\d+)/.exec(shell);
  if (kept) {
    keptSections[registerShell(kept[1] + shell.slice(kept[0].length))] =
      kept[2];
  } else {
    registerShell(shell);
  }
});

// Content created from its shell joins its owner's set, with the holes the owner
// last took, and leaves it when destroyed.
installKeptInstances((branch, id) => {
  const section = keptSections[id];
  if (section) {
    const owner = branch[AccessorProp.Owner]!;
    const holes = owner[AccessorPrefix.ClientBranchHoles + section] as
      | Scope
      | ((instance: Scope) => Scope)
      | undefined;
    subscribeToScopeSet(owner, AccessorPrefix.ClosureScopes + section, branch);
    if (holes) patchInstance(holes, branch);
  }
});

// Holes naming the instance's own scopes (`s=>(…)`) bind to each instance they apply to.
function patchInstance(
  holes: Scope | ((instance: Scope) => Scope),
  instance: Scope,
) {
  patchScope(typeof holes === "function" ? holes(instance) : holes, instance);
}

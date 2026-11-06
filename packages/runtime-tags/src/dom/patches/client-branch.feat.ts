import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { subscribeToScopeSet } from "../signals";
import {
  bindRef,
  installPatchShells,
  type PatchHop,
  patchers,
  patchScope,
} from "./apply";
import { installKeptInstances, registerShell } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.ClientBranch]: KeptHoles;
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
      | KeptHoles
      | undefined;
    subscribeToScopeSet(owner, AccessorPrefix.ClosureScopes + section, branch);
    if (holes) patchInstance(holes, branch);
  }
});

// The holes every instance shares, with the binds of values each one owns: a
// tree mirroring the holes down to each, whose leaves are `_`'s args from the instance.
type KeptHoles = Scope | [holes: Scope, binds: BindTree];
type BindTree = { [key: string]: BindTree | [PatchHop[], string, 1?] };

// Each instance takes the holes with its own values bound in, on copies of the
// containers above them, whose places hold their render-only locals until then.
function patchInstance(holes: KeptHoles, instance: Scope) {
  const bind = (node: any, binds: BindTree) => {
    node = Array.isArray(node) ? [...node] : { ...node };
    for (const key in binds) {
      const value = binds[key];
      node[key] = Array.isArray(value)
        ? bindRef!(instance, ...value, node[key])
        : bind(node[key], value);
    }
    return node;
  };
  patchScope(Array.isArray(holes) ? bind(...holes) : holes, instance);
}

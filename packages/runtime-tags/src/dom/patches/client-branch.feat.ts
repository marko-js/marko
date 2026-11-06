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
// bind's path (its place) and `_`'s args from the instance.
type KeptHoles =
  | Scope
  | [
      holes: Scope,
      binds: [path: string[], ...args: [PatchHop[], string, 0 | 1]][],
    ];

// Each instance takes the holes with its own values bound in, each on a copy of
// the containers along its path, which hold its render-only locals until then.
function patchInstance(holes: KeptHoles, instance: Scope) {
  if (Array.isArray(holes)) {
    const copies = new Set<object>();
    const copy = (node: any) => {
      if (!copies.has(node)) {
        copies.add((node = Array.isArray(node) ? [...node] : { ...node }));
      }
      return node;
    };
    const [shared, binds] = holes;
    holes = copy(shared) as Scope;
    for (const [path, scopePath, id, content] of binds) {
      let node: any = holes;
      const last = path.length - 1;
      for (let i = 0; i < last; i++) node = node[path[i]] = copy(node[path[i]]);
      node[path[last]] = bindRef!(
        instance,
        scopePath,
        id,
        content || node[path[last]] || undefined,
        node[path[last]] || undefined,
      );
    }
  }
  patchScope(holes, instance);
}

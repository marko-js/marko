import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { installBranchEntries } from "../control-flow";
import { subscribeToScopeSet } from "../signals";
import {
  installPatchShells,
  patchers,
  patchScope,
  withCreating,
} from "./apply";
import { installKeptInstances, registerShell } from "./shells";

declare module "./apply" {
  interface PatchValues {
    // At a site, `[patch, key, seeds?]`: the content's id, or the `<if>` branch's
    // index, and its own scopes' setup apart from its holes.
    [PatchKey.ClientBranch]: Scope | SiteEntry;
  }
}

// Each kept content's section by its id: its owner holds the section's scopes.
const keptSections: Record<string, string> = {};

// At an owner, the holes every live instance shares; at a site, its instance's own
// entry. Each waits there for what the client creates later, as the branch now takes it.
patchers[PatchKey.ClientBranch] = (scope, key, value) => {
  scope[AccessorPrefix.ClientBranchHoles + key] = value;
  if (Array.isArray(value)) {
    takeSiteEntry(
      scope,
      key,
      scope[AccessorPrefix.BranchScopes + key] as Scope | undefined,
    );
  } else {
    for (const instance of (scope[AccessorPrefix.ClosureScopes + key] as
      | Set<Scope>
      | undefined) || []) {
      if (instance[AccessorProp.Gen] > 0) patchScope(value, instance);
    }
  }
};

type SiteEntry = [patch: Scope, key: string | number, seeds?: Scope];

// The branch at a site, the client's or one it creates, takes the entry the site last
// took while it renders what the server rendered there (content, or an `<if>` branch).
const takeSiteEntry = (scope: Scope, accessor: string, branch?: Scope) => {
  const entry = scope[AccessorPrefix.ClientBranchHoles + accessor] as
    | SiteEntry
    | undefined;
  const renderer = scope[AccessorPrefix.ConditionalRenderer + accessor];
  if (
    branch &&
    entry &&
    (typeof entry[1] === "number"
      ? ((renderer as number | undefined) ?? 0) === entry[1]
      : renderer ===
        entry[1] + " " + branch[AccessorProp.Owner]![AccessorProp.Id])
  ) {
    if (entry[2]) withCreating(patchScope, entry[2], branch);
    withCreating(patchScope, entry[0], branch);
  }
};
installBranchEntries(takeSiteEntry);

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
      | undefined;
    subscribeToScopeSet(owner, AccessorPrefix.ClosureScopes + section, branch);
    if (holes) patchScope(holes, branch);
  }
});

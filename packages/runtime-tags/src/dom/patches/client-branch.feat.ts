import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RendererProp,
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

// The holes every instance shares, with the values each one owns written in
// them as `_`'s args from the instance (listed after the holes).
type KeptHoles = Scope | [holes: Scope, ...own: BoundArgs[]];
type BoundArgs = [path: PatchHop[], id: string, ...rest: unknown[]];

// Each instance binds its own values, on copies of what holds them (arrays,
// objects, maps and sets), one per original, so all else keeps its identity.
function patchInstance(holes: KeptHoles, instance: Scope) {
  if (Array.isArray(holes)) {
    const [shared, ...own] = holes;
    const copies = new Map<unknown, unknown>();
    const bind = (value: any) => {
      if (value && typeof value === "object" && !copies.has(value)) {
        // Taken as is where it is reached again while copied (a cycle).
        copies.set(value, value);
        let copy = value;
        // Content is no data (its owner a getter into live scopes).
        if (
          Array.isArray(value) ||
          (value.constructor === Object && !value[RendererProp.Id])
        ) {
          for (const key in value) {
            const item = bind(value[key]);
            if (item !== value[key]) {
              if (copy === value) {
                copy = Array.isArray(value) ? [...value] : { ...value };
              }
              copy[key] = item;
            }
          }
          if (own.includes(value)) {
            copy = bindRef!(instance, ...(copy as [PatchHop[], string]));
          }
        } else if (value instanceof Map || value instanceof Set) {
          const items = [...value];
          if (bind(items) !== items) {
            copy = new (value.constructor as new (items: unknown) => unknown)(
              bind(items),
            );
          }
        }
        copies.set(value, copy);
      }
      return copies.get(value) ?? value;
    };
    holes = bind(shared);
  }
  patchScope(holes as Scope, instance);
}

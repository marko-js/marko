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

// Each instance binds its own values on copies of what holds them (arrays,
// objects, maps and sets, cycles included), one per original; all else keeps
// its identity.
function patchInstance(holes: KeptHoles, instance: Scope) {
  if (Array.isArray(holes)) {
    const [shared, ...own] = holes;
    const holders = new Map<any, any[]>([[shared, []]]);
    const copies = new Map<any, any>();
    const filled = new Set<unknown>();
    // Content is no data (its owner a getter into live scopes).
    const members = (value: any): any[] =>
      value instanceof Map
        ? [...value.keys(), ...value.values()]
        : value instanceof Set
          ? [...value]
          : Array.isArray(value) ||
              (value.constructor === Object && !value[RendererProp.Id])
            ? Object.values(value)
            : [];
    const visit = (value: any) => {
      for (const item of members(value)) {
        if (item && typeof item === "object") {
          const seen = holders.get(item);
          if (seen) {
            seen.push(value);
          } else {
            holders.set(item, [value]);
            visit(item);
          }
        }
      }
    };
    // What holds an owned value, directly or not, takes a copy.
    const copy = (value: any) => {
      if (!copies.has(value)) {
        copies.set(value, new value.constructor());
        holders.get(value)?.forEach(copy);
      }
    };
    const get = (value: any) => {
      let to = copies.get(value);
      if (to && !filled.has(value)) {
        filled.add(value);
        if (own.includes(value)) {
          copies.set(
            value,
            (to = bindRef!(
              instance,
              ...(value.map(get) as [PatchHop[], string]),
            )),
          );
        } else if (value instanceof Map) {
          value.forEach((item, key) => to.set(get(key), get(item)));
        } else if (value instanceof Set) {
          value.forEach((item) => to.add(get(item)));
        } else {
          for (const key in value) to[key] = get(value[key]);
        }
      }
      return to || value;
    };
    visit(shared);
    own.forEach(copy);
    holes = get(shared);
  }
  patchScope(holes as Scope, instance);
}

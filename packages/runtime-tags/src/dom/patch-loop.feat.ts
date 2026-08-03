import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type Scope,
} from "../common/types";
import { _for_of } from "./control-flow";
import { _patch_loop_entries, shells } from "./patch-branch.feat";
import { failPatch, walkScope } from "./resume";

// The loop core decodes accessors in optimized builds; patch wire accessors
// arrive decoded, so invert (see `decodeAccessor`) before reusing it.
const encodeAccessor = (accessor: string) => {
  const encoded = parseInt(accessor, 36);
  return encoded - (encoded < 36 ? 10 : encoded < 1296 ? 334 : 11998);
};

// Applies a loop entry: the loop core's own keyed reconciliation pairs
// existing items, constructs additions from the item shell, and destroys
// removals; the walk then recurses into each item positionally.
_patch_loop_entries((scope, key, [ids, keys, shellId]) => {
  const liveKeys = new Set(
    toArray<BranchScope>(
      scope[key as Accessor] as BranchScope | BranchScope[] | undefined,
    ).map((branch, i) => branch[AccessorProp.LoopKey] ?? i),
  );
  if (
    keys.some((itemKey, i) => !liveKeys.has(itemKey ?? i)) &&
    !(shellId && shells[shellId])
  ) {
    // The server could not ship the item shell, so an addition cannot apply
    // faithfully.
    return failPatch();
  }
  const accessor = key.slice(AccessorPrefix.BranchScopes.length) as Accessor;
  const [template, walks] = shells[shellId!] || [];
  _for_of(
    (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as never,
    template,
    walks,
    0,
  )(scope, [keys, (itemKey: unknown) => itemKey]);
  const branches = toArray<BranchScope>(
    scope[key as Accessor] as BranchScope | BranchScope[],
  );
  for (let i = 0; i < ids.length; i++) {
    walkScope(ids[i], branches[i] as Scope);
  }
});

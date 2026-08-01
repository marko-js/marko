import { withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type Scope,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { _content as content, createBranch } from "./renderer";
import {
  _patch_array_entries,
  _patch_end,
  failPatch,
  patchers,
  patchScopeLookup,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";

// Wrapping enables branch resume handling (marker claims, branch scope
// records): a page swapping shipped branches needs it even when no client
// control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// Session registry of server-shipped shells; a shell ships once per response
// and constructs every later divergence to its branch from the cache.
const shells: Record<string, ReturnType<ReturnType<typeof _content>>> = {};

_patch_array_entries((entry) => {
  const [id, template, walks] = entry as string[];
  const renderer = (shells[id] = _content(id, template, walks, 0)());
  const pending = pendingConstructs[id];
  if (pending) {
    delete pendingConstructs[id];
    for (const [scope, key, branchId] of pending) {
      construct(scope, key, branchId, renderer);
    }
  }
});

// Set by the selection entry for the branch entry that follows it in the
// same partial.
let swapping: boolean;
// Constructs deferred until their shell registers (shells append after the
// frame's scope run), keyed so a shell wakes only its own waiters.
let pendingConstructs: Record<string, [Scope, string, number][]> = {};

// A frame ending with waiters never delivered their shells: it cannot have
// applied faithfully. Aborts also clear so no stale construct survives.
_patch_end((finishing) => {
  const pending = pendingConstructs;
  pendingConstructs = {};
  if (finishing) {
    for (const id in pending) {
      if (id) return failPatch();
    }
  }
});

// Applies the selection. Hiding destroys the live branch here (no shell
// needed); divergence to a branch defers destruction until its shell is in
// hand, so a rejected patch leaves the page intact.
patchers[AccessorPrefix.ConditionalRenderer] = (scope, key, value) => {
  const accessor = key.slice(
    AccessorPrefix.ConditionalRenderer.length,
  ) as Accessor;
  const branchKey = (AccessorPrefix.BranchScopes + accessor) as Accessor;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  const current = liveBranch ? ((scope[key] as number) ?? 0) : -1;
  swapping = value !== current;
  scope[key] = value as never;
  if (swapping && liveBranch && value === -1) {
    scope[branchKey] = undefined;
    removeAndDestroyBranch(liveBranch);
  }
};

// Pairs the patch's branch scope id to the live branch when the selection is
// unchanged (its captures then apply surgically), else constructs the newly
// selected branch from its shell (deferred until the shell registers).
patchers[AccessorPrefix.BranchScopes] = (scope, key, value) => {
  const [branchId, shellId] = value as [number, string?];
  if (!swapping) {
    patchScopeLookup[branchId] = scope[key] as Scope;
  } else if (shellId) {
    const renderer = shells[shellId];
    if (renderer) {
      construct(scope, key, branchId, renderer);
    } else {
      (pendingConstructs[shellId] ||= []).push([scope, key, branchId]);
    }
  } else {
    // The server could not ship a shell for the newly selected branch, so
    // this divergence cannot apply faithfully.
    failPatch();
  }
};

function construct(
  scope: Scope,
  key: string,
  branchId: number,
  renderer: (typeof shells)[string],
) {
  const liveBranch = scope[key as Accessor] as BranchScope | undefined;
  if (liveBranch) {
    removeAndDestroyBranch(liveBranch);
  }
  const marker = scope[
    key.slice(AccessorPrefix.BranchScopes.length) as Accessor
  ] as ChildNode;
  const branch = createBranch(
    scope[AccessorProp.Global],
    renderer,
    scope,
    marker.parentNode!,
  );
  insertChildNodes(
    marker.parentNode!,
    marker,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
  scope[key as Accessor] = branch;
  // Captures for the branch land before its shell: they were adopted as
  // a raw patch scope, so replay them onto the constructed branch.
  const adopted = patchScopeLookup[branchId];
  patchScopeLookup[branchId] = branch as Scope;
  if (adopted && adopted !== (branch as Scope)) {
    for (const adoptedKey in adopted) {
      patchers[
        MARKO_DEBUG
          ? adoptedKey.slice(0, adoptedKey.indexOf(":") + 1)
          : adoptedKey[0]
      ]?.(branch as Scope, adoptedKey, adopted[adoptedKey as Accessor]);
    }
  }
}

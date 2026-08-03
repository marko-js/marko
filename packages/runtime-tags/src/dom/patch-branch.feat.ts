import { withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { _content as content, createBranch } from "./renderer";
import {
  _patch_records,
  didPatchFail,
  failPatch,
  patchers,
  walkScope,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";

// Wrapping enables branch resume handling (marker claims, branch scope
// records): a page swapping shipped branches needs it even when no client
// control flow does.
const _content = /*@__PURE__*/ withBranches(content);

// Session registry of server-shipped shells (raw template + walks); a shell
// ships once per response and every later divergence renders from the cache.
export const shells: Record<string, [template: string, walks: string]> = {};

// Loop entries dispatch through here; registered by `patch-loop.feat` so
// conditional-only persisted pages never bundle the loop reconciler.
export let onLoopEntry:
  | ((scope: Scope, key: string, value: [number[], unknown[], string?]) => void)
  | undefined;
export const _patch_loop_entries = (handler: NonNullable<typeof onLoopEntry>) =>
  (onLoopEntry = handler);

// Shell records decode before the walk starts, so constructs never wait on
// a shell and unknown record kinds fail the whole frame.
_patch_records((record) => {
  const [kind, id, template, walks] = record as [number, ...string[]];
  if (kind === 0) {
    shells[id] = [template, walks];
  } else {
    failPatch();
  }
});

// Only a hide applies here: a selected branch ships a branch entry, which
// owns the selection write — so entry order within a partial cannot change
// what the branch entry compares against.
patchers[AccessorPrefix.ConditionalRenderer] = (scope, key, value) => {
  const branchKey = (AccessorPrefix.BranchScopes +
    key.slice(AccessorPrefix.ConditionalRenderer.length)) as Accessor;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  if (value === -1) {
    if (liveBranch) {
      scope[branchKey] = undefined;
      removeAndDestroyBranch(liveBranch);
    }
    scope[key as Accessor] = value as never;
  }
};

// Pairs the patch branch to the live branch when both sides selected the
// same renderer (the walk then recurses into it), else constructs the newly
// selected branch from its shell and walks into the fresh scopes.
patchers[AccessorPrefix.BranchScopes] = (scope, key, value, partial) => {
  const entry = value as [number | number[], string?];
  if (Array.isArray(entry[0])) {
    if (onLoopEntry) {
      onLoopEntry(scope, key, value as [number[], unknown[], string?]);
    } else {
      failPatch();
    }
    return;
  }
  const [branchId, shellId] = entry as [number, string?];
  const rendererKey = (AccessorPrefix.ConditionalRenderer +
    key.slice(AccessorPrefix.BranchScopes.length)) as Accessor;
  const liveBranch = scope[key as Accessor] as BranchScope | undefined;
  const selection = partial[rendererKey] as number;
  const current = liveBranch ? ((scope[rendererKey] as number) ?? 0) : -1;
  scope[rendererKey] = selection as never;
  if (selection === current) {
    walkScope(branchId, liveBranch as Scope);
  } else if (shellId && shells[shellId]) {
    construct(scope, key, branchId, shells[shellId]);
  } else {
    // The server could not ship a shell for the newly selected branch, so
    // this divergence cannot apply faithfully.
    failPatch();
  }
};

export function construct(
  scope: Scope,
  key: string,
  branchId: number,
  [template, walks]: (typeof shells)[string],
) {
  const liveBranch = scope[key as Accessor] as BranchScope | undefined;
  if (liveBranch) {
    removeAndDestroyBranch(liveBranch);
  }
  // An only-child conditional's accessor holds its container element rather
  // than a marker (mirrors `setConditionalRenderer`'s anchoring).
  const marker = scope[
    key.slice(AccessorPrefix.BranchScopes.length) as Accessor
  ] as Comment | Element;
  const inside = marker.nodeType === NodeType.Element;
  const parentNode = inside ? (marker as Element) : marker.parentNode!;
  const branch = createBranch(
    scope[AccessorProp.Global],
    _content("", template, walks, 0)(),
    scope,
    parentNode,
  );
  insertChildNodes(
    parentNode,
    inside ? null : marker,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
  scope[key as Accessor] = branch;
  // The fresh branch has no live children, so nested structural entries in
  // the walked scope mismatch and construct recursively through this path.
  if (!didPatchFail()) {
    walkScope(branchId, branch as Scope);
  }
}

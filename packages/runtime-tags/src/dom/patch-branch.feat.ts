import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  NodeType,
  PatchKey,
  type Scope,
} from "../common/types";
import { insertChildNodes } from "./dom";
import { getShellContent, type Shell, shells } from "./patch-shells";
import { createAndSetupBranch } from "./renderer";
import { failPatch, withConstructing, patchers, patchScope } from "./resume";
import { removeAndDestroyBranch } from "./scope";

// Shape-typed conditional entry: bare number = selection + 1 (`0` hides),
// bare string = a static branch's shell id, else `[index?, partial, shellId?]`.
patchers[PatchKey.Branch] = (scope, key, value) => {
  const entry = value as number | string | [number | Scope, ...unknown[]];
  const suffix = key.slice(PatchKey.Branch.length);
  const branchKey = (AccessorPrefix.BranchScopes + suffix) as Accessor;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  const rendererKey = (AccessorPrefix.ConditionalRenderer + suffix) as Accessor;
  let selection = 0;
  let branchPartial: Scope | number | undefined;
  let shellId: string | undefined;
  if (typeof entry === "object") {
    [branchPartial, shellId] = entry as [Scope, string?];
    if (typeof branchPartial === "number") {
      selection = branchPartial;
      branchPartial = (entry as unknown[])[1] as Scope;
      shellId = (entry as unknown[])[2] as string | undefined;
    }
  } else if (typeof entry === "number") {
    selection = entry - 1;
  } else {
    shellId = entry;
  }
  if (selection === -1) {
    if (liveBranch) {
      scope[branchKey] = undefined;
      removeAndDestroyBranch(liveBranch);
    }
    scope[rendererKey] = -1 as never;
    return;
  }
  branchPartial ||= {} as Scope;
  const current = liveBranch ? ((scope[rendererKey] as number) ?? 0) : -1;
  scope[rendererKey] = selection as never;
  if (selection === current) {
    patchScope(branchPartial as Scope, liveBranch as Scope);
  } else if (shellId) {
    construct(scope, branchKey, branchPartial as Scope, shells[shellId]);
  } else {
    // The server could not ship a shell for the newly selected branch, so
    // this divergence cannot apply faithfully.
    failPatch();
  }
};

function construct(
  scope: Scope,
  branchKey: Accessor,
  branchPartial: Scope,
  shell: Shell,
) {
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  if (liveBranch) {
    removeAndDestroyBranch(liveBranch);
  }
  // An only-child conditional's accessor holds its container element rather
  // than a marker (mirrors `setConditionalRenderer`'s anchoring).
  const marker = scope[
    branchKey.slice(AccessorPrefix.BranchScopes.length) as Accessor
  ] as Comment | Element;
  const inside = marker.nodeType === NodeType.Element;
  const parentNode = inside ? (marker as Element) : marker.parentNode!;
  const branch = createAndSetupBranch(
    scope[AccessorProp.Global],
    getShellContent(shell),
    scope,
    parentNode,
  );
  insertChildNodes(
    parentNode,
    inside ? null : marker,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
  scope[branchKey] = branch as never;
  // The fresh branch has no live children, so nested structural entries
  // in the applied partial mismatch and construct recursively through here.
  withConstructing(() => patchScope(branchPartial, branch as Scope));
}

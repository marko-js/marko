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
import { getContent } from "./patch-shells";
import { createAndSetupBranch } from "./renderer";
import { withCreating, patchers, patchScope } from "./resume";
import { removeAndDestroyBranch } from "./scope";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Branch]:
      | number
      | string
      | [Scope, string?]
      | [number, Scope, string?];
  }
}

// Shape-typed conditional entry: bare number = index + 1 (`0` hides),
// bare string = a static branch's shell id, else `[index?, patch, shellId?]`.
patchers[PatchKey.Branch] = (scope, key, entry) => {
  const suffix = key.slice(PatchKey.Branch.length);
  const branchKey = (AccessorPrefix.BranchScopes + suffix) as Accessor;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  const rendererKey = (AccessorPrefix.ConditionalRenderer + suffix) as Accessor;
  const current = liveBranch ? ((scope[rendererKey] as number) ?? 0) : -1;
  let index = 0;
  let branchPatch: Scope | undefined;
  let shellId: string | undefined;
  if (typeof entry === "object") {
    if (typeof entry[0] === "number") {
      [index, branchPatch, shellId] = entry as [number, Scope, string?];
    } else {
      [branchPatch, shellId] = entry as [Scope, string?];
    }
  } else if (typeof entry === "number") {
    index = entry - 1;
  } else {
    shellId = entry;
  }
  if (index === -1) {
    if (liveBranch) {
      scope[branchKey] = undefined;
      removeAndDestroyBranch(liveBranch);
    }
    scope[rendererKey] = -1 as never;
    return;
  }
  branchPatch ||= {} as Scope;
  scope[rendererKey] = index as never;
  if (index === current) {
    patchScope(branchPatch, liveBranch as Scope);
  } else {
    // Every branch on the patch path ships a shell (`buildShells`).
    create(scope, branchKey, branchPatch, shellId!);
  }
};

function create(
  scope: Scope,
  branchKey: Accessor,
  branchPatch: Scope,
  shellId: string,
) {
  // An only-child conditional's accessor holds its container element rather
  // than a marker (mirrors `setConditionalRenderer`'s anchoring).
  const marker = scope[
    branchKey.slice(AccessorPrefix.BranchScopes.length) as Accessor
  ] as Comment | Element;
  const inside = marker.nodeType === NodeType.Element;
  const parentNode = inside
    ? (marker as Element)
    : (marker.parentNode as Element);
  if (scope[branchKey]) {
    removeAndDestroyBranch(scope[branchKey] as BranchScope);
  }
  const branch = createAndSetupBranch(
    scope[AccessorProp.Global],
    getContent(shellId)!,
    scope,
    parentNode,
  );
  scope[branchKey] = branch;
  // Nested entries create recursively (no live children); applied before
  // insertion so a script's attributes (its nonce) are set when it runs.
  withCreating(patchScope, branchPatch, branch as Scope);
  insertChildNodes(
    parentNode,
    inside ? null : marker,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}

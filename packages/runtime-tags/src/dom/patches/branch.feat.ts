import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  NodeType,
  PatchKey,
  type Scope,
} from "../../common/types";
import { insertChildNodes } from "../dom";
import { createAndSetupBranch } from "../renderer";
import { removeAndDestroyBranch } from "../scope";
import { withCreating, patchers, patchScope } from "./apply";
import { getContent } from "./shells";

declare module "./apply" {
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
  // Anchored as `setBranch` does: in an only-child conditional's container,
  // else before the live branch (a client render removed the marker) or marker.
  const marker = scope[
    branchKey.slice(AccessorPrefix.BranchScopes.length) as Accessor
  ] as Comment | Element;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  const anchor =
    marker.nodeType > NodeType.Element
      ? liveBranch?.[AccessorProp.StartNode] || marker
      : null;
  const parentNode = (anchor ? anchor.parentNode : marker) as Element;
  const branch = (scope[branchKey] = createAndSetupBranch(
    scope[AccessorProp.Global],
    getContent(shellId)!,
    scope,
    parentNode,
  ));
  // Nested entries create recursively (no live children); applied before
  // insertion so a script's attributes (its nonce) are set when it runs.
  withCreating(patchScope, branchPatch, branch as Scope);
  insertChildNodes(
    parentNode,
    anchor,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
  // The live branch goes once the new one is in, as `setBranch` does.
  if (liveBranch) removeAndDestroyBranch(liveBranch);
}

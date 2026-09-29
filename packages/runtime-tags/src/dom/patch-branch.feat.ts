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
// bare string = a static branch's shell id, else `[index?, partial, shellId?]`.
patchers[PatchKey.Branch] = (scope, key, entry) => {
  const suffix = key.slice(PatchKey.Branch.length);
  const branchKey = (AccessorPrefix.BranchScopes + suffix) as Accessor;
  const liveBranch = scope[branchKey] as BranchScope | undefined;
  const rendererKey = (AccessorPrefix.ConditionalRenderer + suffix) as Accessor;
  let index = 0;
  let branchPartial: Scope | undefined;
  let shellId: string | undefined;
  if (typeof entry === "object") {
    if (typeof entry[0] === "number") {
      [index, branchPartial, shellId] = entry as [number, Scope, string?];
    } else {
      [branchPartial, shellId] = entry as [Scope, string?];
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
  branchPartial ||= {} as Scope;
  const current = liveBranch ? ((scope[rendererKey] as number) ?? 0) : -1;
  scope[rendererKey] = index as never;
  if (index === current) {
    patchScope(branchPartial, liveBranch as Scope);
  } else {
    // Every branch on the patch path ships a shell (`buildShells`).
    create(scope, branchKey, branchPartial, shellId!);
  }
};

function create(
  scope: Scope,
  branchKey: Accessor,
  branchPartial: Scope,
  shellId: string,
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
  const parentNode = inside
    ? (marker as Element)
    : (marker.parentNode as Element);
  const branch = createAndSetupBranch(
    scope[AccessorProp.Global],
    getContent(shellId)!,
    scope,
    parentNode,
  );
  scope[branchKey] = branch;
  // A lone text node clones detached; an html hole there needs a parent
  // (a shallow clone keeps the namespace).
  if (!branch[AccessorProp.StartNode].parentNode) {
    parentNode.cloneNode().appendChild(branch[AccessorProp.StartNode]);
  }
  // Nested entries create recursively (no live children); applied before
  // insertion so a script's attributes (its nonce) are set when it runs.
  withCreating(() => patchScope(branchPartial, branch as Scope));
  insertChildNodes(
    parentNode,
    inside ? null : marker,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}

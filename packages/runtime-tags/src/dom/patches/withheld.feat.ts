import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { subscribeToScopeSet } from "../signals";
import { setupPatchers, patchers, patchScope } from "./apply";
import "./dynamic-tag.feat";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Withheld]: Scope;
  }
}

// The holes of content a client consumer keeps, for each live instance its
// owner holds.
patchers[PatchKey.Withheld] = (scope, contentId, value) => {
  for (const instance of (scope[AccessorPrefix.WithheldScopes + contentId] as
    | Set<Scope>
    | undefined) || []) {
    if (instance[AccessorProp.Gen] > 0) patchScope(value, instance);
  }
};

// Content an entry creates joins its owner's set, as a page's instances do, and
// leaves it when destroyed.
const applyDynamicTag = patchers[PatchKey.DynamicTag]!;
patchers[PatchKey.DynamicTag] = setupPatchers[PatchKey.DynamicTag] = (
  scope,
  accessor,
  entry,
) => {
  applyDynamicTag(scope, accessor, entry);
  const renderer = Array.isArray(entry) ? entry[0] : entry;
  const branch = scope[AccessorPrefix.BranchScopes + accessor] as
    | Scope
    | undefined;
  if (typeof renderer === "string" && renderer[0] !== ">" && branch) {
    subscribeToScopeSet(
      branch[AccessorProp.Owner]!,
      AccessorPrefix.WithheldScopes +
        renderer.slice(renderer.lastIndexOf(" ") + 1).replace(/^\^+/, ""),
      branch,
    );
  }
};

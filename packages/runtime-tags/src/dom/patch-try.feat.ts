import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { setConditionalRenderer } from "./control-flow";
import "./patch-child.feat";
import { getContent } from "./patch-shells";
import { createAndSetupBranch } from "./renderer";
import { patchers, patchScope, withCreating } from "./resume";

// A boundary entry `[partial, contentId, catchId?, placeholderId?]` creates
// a missing branch from its content id (`0` keeps a slot elided), then
// applies the partial; a live branch pairs the partial alone.
const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, key, value) => {
  if (Array.isArray(value)) {
    const link = key.slice(PatchKey.Child.length) as Accessor;
    const [partial, contentId, catchId, placeholderId] = value;
    value = partial;
    if (!scope[link]) {
      const accessor = link.slice(AccessorPrefix.BranchScopes.length);
      const renderer = getContent(contentId)!;
      setConditionalRenderer(scope, accessor, renderer, createAndSetupBranch);
      const branch = scope[link] as Scope;
      branch[AccessorProp.BranchAccessor] = accessor as Accessor;
      if (catchId !== undefined) {
        branch[AccessorProp.CatchContent] = (catchId &&
          getContent(catchId, scope)) as never;
      }
      if (placeholderId !== undefined) {
        branch[AccessorProp.PlaceholderContent] = (placeholderId &&
          getContent(placeholderId, scope)) as never;
      }
      // A shell content's walk created the body's scopes with no setup.
      if (renderer[RendererProp.Shell]) {
        withCreating(() => patchScope(value as Scope, branch));
      } else {
        patchScope(value as Scope, branch);
      }
      return;
    }
  }
  applyChild(scope, key, value);
};

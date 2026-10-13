import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  RendererProp,
} from "../../common/types";
import { setBranch } from "../control-flow";
import "./child.feat";
import { createAndSetupBranch } from "../renderer";
import { patchers, patchScope, withCreating } from "./apply";
import { getContent, getContentFactory } from "./shells";

// A boundary entry `[patch, contentId, catchId?, placeholderId?]` creates its
// branch if missing or replaced by its catch; a live one only pairs the patch.
const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, key, value) => {
  if (Array.isArray(value)) {
    const link = key.slice(PatchKey.Child.length) as Accessor;
    const accessor = link.slice(AccessorPrefix.BranchScopes.length);
    const [patch, contentId, catchId, placeholderId] = value;
    // A live try with a catch keeps its `CatchContent`; a catch branch has none.
    if (!scope[link] || (catchId && !scope[link][AccessorProp.CatchContent])) {
      const renderer = getContent(contentId)!;
      setBranch(scope, accessor, renderer, createAndSetupBranch);
      const branch = scope[link] as BranchScope;
      branch[AccessorProp.BranchAccessor] = accessor;
      if (catchId) {
        branch[AccessorProp.CatchContent] = getContentFactory(catchId);
      }
      if (placeholderId) {
        branch[AccessorProp.PlaceholderContent] =
          getContentFactory(placeholderId);
      }
      // A shell content's walk created the body's scopes with no setup.
      if (renderer[RendererProp.Shell]) {
        withCreating(patchScope, patch, branch);
      } else {
        patchScope(patch, branch);
      }
      return;
    }
    return applyChild(scope, key, patch);
  }
  applyChild(scope, key, value);
};

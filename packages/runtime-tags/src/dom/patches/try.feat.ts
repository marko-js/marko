import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  RendererProp,
} from "../../common/types";
import { setBranch } from "../control-flow";
import "./child.feat";
import { createAndSetupBranch } from "../renderer";
import { _resumed } from "../resume";
import { patchers, patchScope, withCreating } from "./apply";
import { getContent } from "./shells";

// A boundary entry `[patch, catchId, contentId?, placeholderId?]` creates its
// branch if missing; a live one pairs a body that rendered, unless caught.
const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, link, value) => {
  if (Array.isArray(value)) {
    const accessor = link.slice(AccessorPrefix.BranchScopes.length);
    const [patch, catchId, contentId, placeholderId] = value;
    if (!scope[link]) {
      const renderer = getContent(contentId!)!;
      setBranch(scope, accessor, renderer, createAndSetupBranch);
      const branch = scope[link] as BranchScope;
      branch[AccessorProp.BranchAccessor] = accessor;
      branch[AccessorProp.CatchContent] = _resumed[catchId!];
      branch[AccessorProp.PlaceholderContent] = _resumed[placeholderId!];
      // A shell content's walk created the body's scopes with no setup.
      if (renderer[RendererProp.Shell]) {
        withCreating(patchScope, patch, branch);
      } else {
        patchScope(patch, branch);
      }
    } else if (patch) {
      // A caught try (no `CatchContent`) shows its body again only when created
      // anew, so a patch rendering it rejects and the URL loads as a document.
      if (catchId && !scope[link][AccessorProp.CatchContent]) {
        throw MARKO_DEBUG
          ? new Error(
              "A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.",
            )
          : 0;
      }
      applyChild(scope, link, patch);
    }
  } else {
    applyChild(scope, link, value);
  }
};

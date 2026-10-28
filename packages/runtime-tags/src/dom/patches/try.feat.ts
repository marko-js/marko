import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  RendererProp,
} from "../../common/types";
import { setBranch, withBoundaryContentIds } from "../control-flow";
import "./child.feat";
import { createAndSetupBranch } from "../renderer";
import { _resumed } from "../resume";
import { patchers, patchScope, withCreating } from "./apply";
import { getContent } from "./shells";

// A document's or an entry's boundary content id resolves where it renders, to its
// registry entry: the module's renderer (a client throw passes it the error), else its shell.
withBoundaryContentIds((content) =>
  typeof content === "string" ? _resumed[content] : content,
);

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
      branch[AccessorProp.CatchContent] = catchId;
      branch[AccessorProp.PlaceholderContent] = placeholderId;
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

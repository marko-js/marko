import { AccessorPrefix, PatchKey } from "../../common/types";
import { creating, patchers } from "./apply";
import "./rendered.feat";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.KeptAwait]: 1 | "";
  }
}

// A created, client-settled `<await>` rejects the patch where its body renders
// kept content (`""`): in the creating flush, or one after marking it (`1`).
patchers[PatchKey.KeptAwait] = (scope, accessor, mark) => {
  if (mark) {
    scope[AccessorPrefix.PatchCreated + accessor] = 1;
  } else if (creating || scope[AccessorPrefix.PatchCreated + accessor]) {
    throw MARKO_DEBUG
      ? new Error(
          "Kept content renders in an `<await>` the client settles in structure a patch created: the page loads the URL as a document instead.",
        )
      : 0;
  }
};

import { withBranches } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  type BranchScope,
  PatchKey,
} from "../../common/types";
import "../catch.feat";
import { renderCatch } from "../control-flow";
import { patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Catch]: [error?: unknown];
  }
}

// A catch destroys the body as a client throw does, releasing its awaits'
// counts; the try's next entry rebuilds it (`patches/try`).
patchers[PatchKey.Catch] = withBranches((scope, key, [error]) =>
  renderCatch(
    scope[
      (AccessorPrefix.BranchScopes +
        key.slice(PatchKey.Catch.length)) as Accessor
    ] as BranchScope,
    error,
  ),
);

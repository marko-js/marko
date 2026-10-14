import { withBranches } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  type Scope,
} from "../../common/types";
import "../catch.feat";
import { renderCatch } from "../control-flow";
import { patchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Catch]: [patch: Scope, catchId: string] | [error?: unknown];
  }
}

// A catch destroys the body as a client throw does, rendering from what its
// code reads of the error; a page creating one keeps `patches/catch-created`'s.
patchers[PatchKey.Catch] ||= withBranches((scope, key, [error]) => {
  const branch = scope[
    (AccessorPrefix.BranchScopes + key.slice(PatchKey.Catch.length)) as Accessor
  ] as BranchScope;
  // A caught try keeps the `@catch` it shows.
  if (branch[AccessorProp.CatchContent]) renderCatch(branch, error);
});

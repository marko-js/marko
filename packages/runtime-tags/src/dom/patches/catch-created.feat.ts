import { withBranches } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  type Scope,
} from "../../common/types";
import "../catch.feat";
import { renderCatch } from "../control-flow";
import { patchers, patchScope, withCreating } from "./apply";
import { getContent } from "./shells";

// `patches/catch`, plus a content id creating the `@catch` from its shell and
// its patch, which stands in for the unsent error.
patchers[PatchKey.Catch] = withBranches((scope, accessor, [value, catchId]) => {
  const link = AccessorPrefix.BranchScopes + accessor;
  // A caught try keeps the `@catch` it shows.
  if ((scope[link] as BranchScope)[AccessorProp.CatchContent]) {
    if (catchId) {
      (scope[link] as BranchScope)[AccessorProp.CatchContent] = (_?: never) =>
        getContent(catchId)!;
      renderCatch(scope[link] as BranchScope);
      withCreating((_?: never) =>
        patchScope(value as Scope, scope[link] as Scope),
      );
    } else {
      renderCatch(scope[link] as BranchScope, value);
    }
  }
});

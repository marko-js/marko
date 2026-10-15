import { withBranches } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import "../catch.feat";
import { renderCatch } from "../control-flow";
import { patchers, patchScope, withCreating } from "./apply";
import { getContent } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Catch]: [patch: Scope, catchId: string] | [error?: unknown];
  }
}

// A catch destroys the body as a client throw does, releasing its awaits'
// counts; the try's next entry rebuilds it (`patches/try`). A content id
// creates the `@catch` from its renderer and its patch, the error unread;
// else it renders from the error.
patchers[PatchKey.Catch] = withBranches((scope, key, [value, catchId]) => {
  const link = (AccessorPrefix.BranchScopes +
    key.slice(PatchKey.Catch.length)) as Accessor;
  if (catchId) {
    (scope[link] as BranchScope)[AccessorProp.CatchContent] = () =>
      Object.create(getContent(catchId)!, { [RendererProp.Params]: {} });
    renderCatch(scope[link] as BranchScope);
    withCreating(patchScope, value as Scope, scope[link] as Scope);
  } else {
    renderCatch(scope[link] as BranchScope, value);
  }
});

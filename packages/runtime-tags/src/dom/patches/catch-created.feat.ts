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

// Holds a created `@catch`'s own effects past its entry's end, for its renderer's
// `Params` to queue (an empty entry's end) after the setup of its child scopes.
const catchPatchers: typeof patchers = Object.create(patchers);

// `patches/catch`, plus a content id creating the `@catch` from its renderer
// and its patch, which stands in for the unread error.
patchers[PatchKey.Catch] = withBranches((scope, key, [value, catchId]) => {
  const link = (AccessorPrefix.BranchScopes +
    key.slice(PatchKey.Catch.length)) as Accessor;
  // A caught try keeps the `@catch` it shows.
  if ((scope[link] as BranchScope)[AccessorProp.CatchContent]) {
    if (catchId) {
      (scope[link] as BranchScope)[AccessorProp.CatchContent] = () =>
        Object.create(getContent(catchId)!, {
          [RendererProp.Params]: {
            value: (branch: Scope) => patchScope({} as Scope, branch),
          },
        });
      renderCatch(scope[link] as BranchScope);
      withCreating(() =>
        patchScope(value as Scope, scope[link] as Scope, catchPatchers),
      );
    } else {
      renderCatch(scope[link] as BranchScope, value);
    }
  }
});
